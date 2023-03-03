import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const TheaterNew = () => {
    const [theater_name, set_theater_name] = useState("");
    const [no_of_seats, set_no_of_seats] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                "http://flip1.engr.oregonstate.edu:40594/theaters",
                {
                    theater_name,
                    no_of_seats,
                }
            );
            console.log(res);
            // TODO replace with feedback of success and redirect to theaters table
        } catch (error) {
            console.error(error);
            // TODO add user feedback of failure
        }
    };

    return (
        <>
            <article>
                <h3>Add a new theater</h3>
                <form
                    onSubmit={handleSubmit}
                    className="pure-form pure-form-stacked"
                >
                    <label>
                        Theater Name
                        <input
                            type="text"
                            required
                            value={theater_name}
                            onChange={(e) => set_theater_name(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Number of Seats
                        <input
                            type="number"
                            min="0"
                            required
                            value={no_of_seats}
                            onChange={(e) => set_no_of_seats(e.target.value)}
                        />
                    </label>
                    <br />
                    <button
                        type="submit"
                        className="pure-button pure-button-primary"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                    <br />
                </form>
            </article>

            <a href="./Theater">Return to all theaters</a>
        </>
    );
};

export default TheaterNew;
