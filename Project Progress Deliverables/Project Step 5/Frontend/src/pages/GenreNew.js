import React, { useState } from "react";
import { useHistory, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const GenreNew = () => {
    const navigate = useNavigate();
    const [genre_name, set_genre_name] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(API_URL + "/genres", {
                genre_name,
            });
            console.log(res);
            // TODO replace with feedback of success and redirect to genres table
        } catch (error) {
            console.error(error);
            // TODO add user feedback of failure
        }

        navigate("/Genre");
    };

    return (
        <>
            <article>
                <h3>Add a new genre</h3>
                <form
                    onSubmit={handleSubmit}
                    className="pure-form pure-form-stacked"
                >
                    <label>
                        Genre Name
                        <input
                            type="text"
                            required
                            value={genre_name}
                            onChange={(e) => set_genre_name(e.target.value)}
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
                </form>
            </article>

            <a href="./Genre">Return to all genres</a>
        </>
    );
};

export default GenreNew;
