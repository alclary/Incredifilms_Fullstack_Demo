import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const ShowtimeForm = (props) => {
    // State definitions
    //      If formType mode "edit", populate fields with record data to edit,
    //      else form field empty (for new entry)

    const [movieList, setMovieList] = useState([]);
    const [theaterList, setTheaterList] = useState([]);

    useEffect(() => {
        async function getMovieList() {
            try {
                const movies = await axios.get(API_URL + "/movies/titles");
                setMovieList(movies.data.data);
            } catch (error) {
                console.error(error);
                toast.error(
                    `Error ${error.response.status}: ${error.response.data.sqlMessage}`
                );
            }
        }
        async function getTheaterList() {
            try {
                const theaters = await axios.get(
                    API_URL + "/theaters/locations"
                );
                setTheaterList(theaters.data.data);
            } catch (error) {
                console.error(error);
                toast.error(
                    `Error ${error.response.status}: ${error.response.data.sqlMessage}`
                );
            }
        }

        getTheaterList();
        getMovieList();
    }, []);

    // State definitions
    const [showtime_date_time, set_showtime_date_time] = useState(
        props.formType === "edit" ? props.rowData.date_time.split(".")[0] : ""
    );
    const [movie_id, set_movie_id] = useState(
        props.formType === "edit" ? props.rowData.movie_id : ""
    );
    const [theater_id, set_theater_id] = useState(
        props.formType === "edit" ? props.rowData.theater_id : ""
    );

    async function newSubmit() {
        try {
            const res = await axios.post(API_URL + "/showtimes", {
                showtime_date_time,
                movie_id,
                theater_id,
            });
            if (res.status === 200) {
                // Success toast notification
                toast.success(`Record ID ${res.data.data.insertId} created.`);
            }
        } catch (error) {
            toast.error(
                `Error ${error.response.status}: ${error.response.data.sqlMessage}`
            );
            console.error(error);
        }
        props.resetForm();
        // Reload entity table / grid.js component (for updates)
        props.gridReload();
    }

    // Handle "edit" record form submissions
    async function editSubmit() {
        try {
            const res = await axios.put(
                API_URL + `/showtimes/${props.rowData.showtime_id}`,
                {
                    showtime_date_time,
                    movie_id,
                    theater_id,
                }
            );
            if (res.status === 200) {
                // Success toast notification
                toast.success(`Record updated.`);
            }
        } catch (error) {
            toast.error(
                `Error ${error.response.status}: ${error.response.data.sqlMessage}`
            );
            console.error(error);
        }
        props.resetForm();
        // Reload entity table / grid.js component (for updates)
        props.gridReload();
    }

    // Handle submit of bi-modal form; submit action based on form mode
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (props.formType === "edit") {
            editSubmit();
        } else {
            newSubmit();
        }
    };

    return (
        <div className="form_wrapper">
            {/* Form title based on mode ("edit" or "new") */}
            {props.formType === "edit" ? (
                <h3>Update showtime</h3>
            ) : (
                <h3>Add a new showtime</h3>
            )}
            <form
                onSubmit={handleSubmit}
                className="pure-form pure-form-stacked"
            >
                <label>Datetime</label>
                <input
                    type="datetime-local"
                    id="showtime_date_time"
                    required
                    value={showtime_date_time}
                    min={"01/01/1901"}
                    max={"01/01/2050"}
                    onChange={(event) =>
                        set_showtime_date_time(event.target.value)
                    }
                />

                <label>Movie</label>
                <select
                    lookupName="movie"
                    value={movie_id}
                    onChange={(event) => {
                        set_movie_id(event.target.value);
                    }}
                    required
                >
                    <option disabled selected value="">
                        -- select an option --
                    </option>
                    {movieList.map((movie, i) => {
                        return (
                            <option key={i} value={movie.movie_id}>
                                {movie.movie_name}
                            </option>
                        );
                    })}
                </select>
                <label>Theater</label>
                <select
                    lookupName="theater"
                    value={theater_id}
                    onChange={(event) => {
                        set_theater_id(event.target.value);
                    }}
                    required
                >
                    <option disabled selected value="">
                        -- select an option --
                    </option>
                    {theaterList.map((theater, i) => {
                        return (
                            <option key={i} value={theater.theater_id}>
                                {theater.theater_name}
                            </option>
                        );
                    })}
                </select>
                <button
                    type="submit"
                    className="pure-button pure-button-primary"
                >
                    Submit
                </button>
                {/* Cancel button only displayed for "edit" form modality */}
                {props.formType === "edit" ? (
                    <button
                        type="button"
                        className="pure-button pure-button"
                        // Cancel button resets form to cancel edit attempt
                        onClick={() => {
                            props.resetForm();
                        }}
                    >
                        Cancel
                    </button>
                ) : undefined}
            </form>
        </div>
    );
};

export default ShowtimeForm;
