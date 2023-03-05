import React, { useState } from "react";
import axios from "axios";
import { ReactWrapper } from "gridjs-react";

export const ShowtimeForm = (props) => {
    console.log(props);

    async function newSubmit() {
        try {
            const res = await axios.post("http://localhost:3001/showtimes", {
                showtime_date_time,
                movie_id,
                theater_id,
            });
            console.log(res);
            // TODO replace with feedback of success and redirect to showtimes table
        } catch (error) {
            console.error(error);
            // TODO add user feedback of failure
        }
    }

    async function updateSubmit() {
        try {
            const res = await axios.put(
                `http://localhost:3001/showtimes/${props.row.showtime_id}`,
                {
                    showtime_date_time,
                    movie_id,
                    theater_id,
                }
            );
            if (res.status === 200) {
                props.parentRerender();
            }
            // TODO replace with feedback of success and redirect to showtimes table
        } catch (error) {
            console.error(error);
            // TODO add user feedback of failure
        }
        props.showForm(false);
    }

    // State definitions
    const [showtime_date_time, set_showtime_date_time] = useState(
        props.row.first_name ? props.row.first_name : ""
    );
    const [movie_id, set_movie_id] = useState(
        props.row.last_name ? props.row.last_name : ""
    );
    const [theater_id, set_theater_id] = useState(
        props.row.dob ? props.row.dob.split("T")[0] : ""
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (props.row) {
            updateSubmit();
        } else {
            newSubmit();
        }
    };

    return (
        <div>
            {props.row ? <h3>Update showtime</h3> : <h3>Add a new showtime</h3>}

            <form
                onSubmit={handleSubmit}
                className="pure-form pure-form-stacked"
            >
                <label for="showtime_date_time">Datetime</label>
                <input type="datetime-local" id="showtime_date_time" required value={showtime_date_time} onChange={(e)=>set_showtime_date_time(e.target.value)}></input>
                <label for="movie_id">Movie</label>
                <select name="movie_id" id="movie_id">
                    <option value="" id="movie_id"></option>
                    <option value="" id="movie_id"></option>
                </select>
                <label for="theater_id">Theater</label>
                <select name="theater_id" id="theater_id">
                    <option value="" id="theater_id"></option>
                    <option value="" id="theater_id"></option>
                </select>
                <button type="submit" class="pure-button pure-button-primary">
                    Submit
                </button>
                <button
                    type="button"
                    class="pure-button pure-button"
                    onClick={() => {
                        props.showForm(false);
                    }}
                >
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default ShowtimeForm;
