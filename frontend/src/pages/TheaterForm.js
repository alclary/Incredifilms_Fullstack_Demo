import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const TheaterForm = (props) => {
    // State definitions
    //      If formType mode "edit", populate fields with record data to edit,
    //      else form field empty (for new entry)
    const [theater_name, set_theater_name] = useState(
        props.formType === "edit" ? props.rowData.theater_name : ""
    );
    const [no_of_seats, set_no_of_seats] = useState(
        props.formType === "edit" ? props.rowData.no_of_seats : ""
    );

    // Handle "new" record form submissions
    async function newSubmit() {
        try {
            const res = await axios.post(API_URL + "/theaters", {
                theater_name,
                no_of_seats,
            });
            if (res.status === 200) {
            }
            // Success toast notification
            toast.success(`Record ID ${res.data.data.insertId} created.`);
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
                API_URL + `/theaters/${props.rowData.theater_id}`,
                {
                    theater_name,
                    no_of_seats,
                }
            );
            if (res.status === 200) {
            }
            // Success toast notification
            toast.success(`Record updated.`);
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
        <div>
            {/* Form title based on mode ("edit" or "new") */}

            {props.formType === "edit" ? (
                <h3>Update a theater</h3>
            ) : (
                <h3>Add a new theater</h3>
            )}

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
                    onChange={(event) => set_theater_name(event.target.value)}
                />
                <label>Number of seats</label>
                <input
                    type="number"
                    min="25"
                    required
                    value={no_of_seats}
                    onChange={(event) => set_no_of_seats(event.target.value)}
                />

                <button type="submit" class="pure-button pure-button-primary">
                    Submit
                </button>
                {/* Cancel button only displayed for "edit" form modality */}
                {props.formType === "edit" ? (
                    <button
                        type="button"
                        class="pure-button pure-button"
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

export default TheaterForm;
