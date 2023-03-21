import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const CustomerForm = (props) => {
    // State definitions
    //      If formType mode "edit", populate fields with record data to edit,
    //      else form field empty (for new entry)
    const [fname, setFname] = useState(
        props.formType === "edit" ? props.rowData.first_name : ""
    );
    const [lname, setLname] = useState(
        props.formType === "edit" ? props.rowData.last_name : ""
    );
    const [dob, setDob] = useState(
        props.formType === "edit" ? props.rowData.dob.split("T")[0] : ""
    );
    const [email, setEmail] = useState(
        props.formType === "edit" ? props.rowData.email : ""
    );

    // Handle "new" record form submissions
    async function newSubmit() {
        try {
            const res = await axios.post(API_URL + "/customers", {
                fname,
                lname,
                dob,
                email,
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
                API_URL + `/customers/${props.rowData.customer_id}`,
                {
                    fname,
                    lname,
                    dob,
                    email,
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
                <h3>Update customer</h3>
            ) : (
                <h3>Add a new customer</h3>
            )}

            <form
                onSubmit={handleSubmit}
                className="pure-form pure-form-stacked"
            >
                <label>First name</label>
                <input
                    type="text"
                    id="stacked-fname"
                    required
                    value={fname}
                    onChange={(event) => setFname(event.target.value)}
                />
                <label>Last name</label>
                <input
                    type="text"
                    required
                    value={lname}
                    onChange={(event) => setLname(event.target.value)}
                />
                <label>Date of Birth</label>
                <input
                    type="date"
                    required
                    value={dob}
                    onChange={(event) => setDob(event.target.value)}
                />
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
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

export default CustomerForm;
