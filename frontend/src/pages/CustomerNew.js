import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const CustomerNew = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [dob, setDob] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                "http://flip1.engr.oregonstate.edu:40594/customers",
                {
                    fname,
                    lname,
                    dob,
                    email,
                }
            );
            console.log(res);
            // TODO replace with feedback of success and redirect to customers table
        } catch (error) {
            console.error(error);
            // TODO add user feedback of failure
        }
    };

    return (
        <div>
            <h3>Add a new customer</h3>
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
            </form>
            <Link to="/customer">Return to all customers</Link>
        </div>
    );
};

export default CustomerNew;
