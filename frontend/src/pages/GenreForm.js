import React, { useState } from "react";
import axios from "axios";
import { ReactWrapper } from "gridjs-react";

const API_URL = process.env.REACT_APP_API_URL;

export const GenreForm = (props) => {
    console.log(props);

    async function newSubmit() {
        try {
            const res = await axios.post(API_URL + "/genres", {
                genre_name,
            });
            console.log(res);
            // TODO replace with feedback of success and redirect to customers table
        } catch (error) {
            console.error(error);
            // TODO add user feedback of failure
        }
    }

    async function updateSubmit() {
        try {
            const res = await axios.put(
                API_URL + `/genres/${props.row.genre_id}`,
                {
                    genre_name,
                }
            );
            if (res.status === 200) {
                props.parentRerender();
            }
            // TODO replace with feedback of success and redirect to customers table
        } catch (error) {
            console.error(error);
            // TODO add user feedback of failure
        }
        props.showForm(false);
    }

    // State definitions
    const [genre_name, set_genre_name] = useState(
        props.row.genre_name ? props.row.genre_name : ""
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
            {props.row ? <h3>Update genre</h3> : <h3>Add a new genre</h3>}

            <form
                onSubmit={handleSubmit}
                className="pure-form pure-form-stacked"
            >
                <label>Genre name</label>
                <input
                    type="text"
                    id="stacked-fname"
                    required
                    value={genre_name}
                    onChange={(e) => set_genre_name(e.target.value)}
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

export default GenreForm;
