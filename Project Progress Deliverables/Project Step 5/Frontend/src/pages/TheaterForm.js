import React, { useState } from "react";
import axios from "axios";
import { ReactWrapper } from "gridjs-react";

const API_URL = process.env.REACT_APP_API_URL;

export const TheaterForm = (props) => {
    console.log(props);

    async function newSubmit() {
        try {
            const res = await axios.post(API_URL + "/theaters", {
                theater_name,
                no_of_seats,
            });
            console.log(res);
            // TODO replace with feedback of success and redirect to theaters table
        } catch (error) {
            console.error(error);
            // TODO add user feedback of failure
        }
    }

    async function updateSubmit() {
        try {
            const res = await axios.put(
                API_URL + `/theaters/${props.row.theater_id}`,
                {
                    theater_name,
                    no_of_seats,
                }
            );
            if (res.status === 200) {
                props.parentRerender();
            }
            // TODO replace with feedback of success and redirect to theaters table
        } catch (error) {
            console.error(error);
            // TODO add user feedback of failure
        }
        props.showForm(false);
    }

    // State definitions
    const [theater_name, set_theater_name] = useState(
        props.row.theater_name ? props.row.theater_name : ""
    );
    const [no_of_seats, set_no_of_seats] = useState(
        props.row.no_of_seats ? props.row.no_of_seats : ""
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
            {props.row ? <h3>Update theater</h3> : <h3>Add a new theater</h3>}

            <form
                onSubmit={handleSubmit}
                className="pure-form pure-form-stacked"
            >
                <label>Theater name</label>
                <input
                    type="text"
                    id="stacked-fname"
                    required
                    value={theater_name}
                    onChange={(e) => set_theater_name(e.target.value)}
                />
                <label>Number of seats</label>
                <input
                    type="number"
                    required
                    value={no_of_seats}
                    onChange={(e) => set_no_of_seats(e.target.value)}
                />

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

export default TheaterForm;
