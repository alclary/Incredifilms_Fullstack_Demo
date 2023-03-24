import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const GenreForm = (props) => {
    // State definitions
    //      If formType mode "edit", populate fields with record data to edit,
    //      else form field empty (for new entry)
    const [genre_name, set_genre_name] = useState(
        props.formType === "edit" ? props.rowData.genre_name : ""
    );

    // Handle "new" record form submissions
    async function newSubmit() {
        try {
            const res = await axios.post(API_URL + "/genres", {
                genre_name,
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
                API_URL + `/genres/${props.rowData.genre_id}`,
                { genre_name }
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
                <h3>Update genre</h3>
            ) : (
                <h3>Add a new genre</h3>
            )}
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

export default GenreForm;
