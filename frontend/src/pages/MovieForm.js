import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const MovieForm = (props) => {
    const ratings = [
        { rating: "G", label: "G" },
        { rating: "PG", label: "PG" },
        { rating: "PG-13", label: "PG-13" },
        { rating: "R", label: "R" },
        { rating: "NR", label: "NR" },
        { rating: "NC-17", label: "NC-17" },
    ];

    // State definitions
    //      If formType mode "edit", populate fields with record data to edit,
    //      else form field empty (for new entry)
    const [movieName, setMovieName] = useState(
        props.formType === "edit" ? props.rowData.movie_name : ""
    );
    const [runtime, setRuntime] = useState(
        props.formType === "edit" ? props.rowData.runtime_min : ""
    );
    const [rating, setRating] = useState(
        props.formType === "edit" ? props.rowData.mpa_rating : ""
    );
    const [year, setYear] = useState(
        props.formType === "edit" ? props.rowData.movie_year : ""
    );

    // Handle "new" record form submissions
    async function newSubmit() {
        try {
            const res = await axios.post(API_URL + "/movies", {
                movieName,
                runtime,
                rating,
                year,
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
        // Reload entity table / grid.js component (for updates)
        props.gridReload();
        props.resetForm();
    }

    // Handle "edit" record form submissions
    async function editSubmit() {
        try {
            const res = await axios.put(
                API_URL + `/movies/${props.rowData.movie_id}`,
                {
                    movieName,
                    runtime,
                    rating,
                    year,
                }
            );
            if (res.status === 200) {
                console.log(res);
                // Success toast notification
                toast.success(`Record ID updated.`);
            }
        } catch (error) {
            toast.error(
                `Error ${error.response.status}: ${error.response.data.sqlMessage}`
            );
            console.error(error);
        }
        // Reload entity table / grid.js component (for updates)
        props.gridReload();
        props.resetForm();
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
                <h3>Update movie</h3>
            ) : (
                <h3>Add a new movie</h3>
            )}

            <form
                onSubmit={handleSubmit}
                className="pure-form pure-form-stacked"
            >
                <label>Movie Name</label>
                <input
                    type="text"
                    id="stacked-fname"
                    required
                    value={movieName}
                    onChange={(event) => setMovieName(event.target.value)}
                />
                <label>Runtime (mins)</label>
                <input
                    type="number"
                    required
                    value={runtime}
                    onChange={(event) => setRuntime(event.target.value)}
                />
                <label>MPA Rating</label>
                <select
                    name="rating"
                    value={rating}
                    onChange={(event) => setRating(event.target.value)}
                    required
                >
                    <option disabled selected value="">
                        -- select an option --
                    </option>
                    {ratings.map((mpa_rating, i) => {
                        return (
                            <option key={i} value={mpa_rating.value}>
                                {mpa_rating.label}
                            </option>
                        );
                    })}
                </select>
                <label>Year</label>
                <input
                    type="number"
                    min="1901"
                    max="2050"
                    value={year}
                    onChange={(event) => setYear(event.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="pure-button pure-button-primary"
                >
                    Submit
                </button>
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

export default MovieForm;
