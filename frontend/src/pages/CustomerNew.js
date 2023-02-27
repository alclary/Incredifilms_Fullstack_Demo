import { useState } from "react";
import { Link } from "react-router-dom";

export const CustomerNew = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [dob, setDob] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO implement POST request to API
    };

    return (
        <div>
            <h3>Add a new customer</h3>
            <form onSubmit={handleSubmit} class="pure-form pure-form-stacked">
                <label for="stacked-fname">First name</label>
                <input
                    type="text"
                    id="stacked-fname"
                    required
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                />
                <label for="stacked-lname">Last name</label>
                <input
                    type="text"
                    required
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                />
                <label for="stacked-dob">Date of Birth</label>
                <input
                    type="date"
                    required
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                />
                <label for="stacked-email">Email</label>
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
