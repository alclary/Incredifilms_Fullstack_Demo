import React, { useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const CustomerForm = (props) => {
    console.log(props);

    // State definitions
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

    async function newSubmit() {
        try {
            const res = await axios.post(API_URL + "/customers", {
                fname,
                lname,
                dob,
                email,
            });
            if (res === 200) {
            }
            console.log(res);
            // TODO replace with feedback of success and redirect to customers table
        } catch (error) {
            console.error(error);
            // TODO add user feedback of failure
        }
        props.parentRerender();
        props.resetForm();
    }

    async function updateSubmit() {
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
            }
            // TODO replace with feedback of success and redirect to customers table
        } catch (error) {
            console.error(error);
            // TODO add user feedback of failure
        }
        props.parentRerender();
        props.resetForm();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (props.formType === "edit") {
            updateSubmit();
        } else {
            newSubmit();
        }
    };

    return (
        <div>
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
                    onChange={(e) => setFname(e.target.value)}
                />
                <label>Last name</label>
                <input
                    type="text"
                    required
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                />
                <label>Date of Birth</label>
                <input
                    type="date"
                    required
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                />
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" class="pure-button pure-button-primary">
                    Submit
                </button>
                {props.formType === "edit" ? (
                    <button
                        type="button"
                        class="pure-button pure-button"
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
