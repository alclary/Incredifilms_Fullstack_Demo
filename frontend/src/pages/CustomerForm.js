import React, { useState } from "react";
import axios from "axios";
import { ReactWrapper } from "gridjs-react";

export const CustomerForm = (props) => {
    console.log(props);

    async function newSubmit() {
        try {
            const res = await axios.post("http://localhost:3001/customers", {
                fname,
                lname,
                dob,
                email,
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
                `http://localhost:3001/customers/${props.row.customer_id}`,
                {
                    fname,
                    lname,
                    dob,
                    email,
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
    const [fname, setFname] = useState(
        props.row.first_name ? props.row.first_name : ""
    );
    const [lname, setLname] = useState(
        props.row.last_name ? props.row.last_name : ""
    );
    const [dob, setDob] = useState(
        props.row.dob ? props.row.dob.split("T")[0] : ""
    );
    const [email, setEmail] = useState(props.row.email ? props.row.email : "");

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
            {props.row ? <h3>Update customer</h3> : <h3>Add a new customer</h3>}

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

export default CustomerForm;
