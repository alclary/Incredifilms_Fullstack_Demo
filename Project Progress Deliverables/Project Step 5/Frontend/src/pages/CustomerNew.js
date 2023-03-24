import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory, useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

export const CustomerNew = () => {
    const navigate = useNavigate();

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [dob, setDob] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(API_URL + "/customers", {
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
        navigate("/Customer");
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
