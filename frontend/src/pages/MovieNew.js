import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const MovieNew = () => {
    const [movie_name, set_movie_name] = useState("");
    const [runtime_min, set_runtime_min] = useState("");
    const [mpa_rating, set_mpa_rating] = useState("");
    const [movie_year, set_movie_year] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                "http://flip1.engr.oregonstate.edu:40594/movies",
                {
                    movie_name,
                    runtime_min,
                    mpa_rating,
                    movie_year,
                }
            );
            console.log(res);
            // TODO replace with feedback of success and redirect to movies table
        } catch (error) {
            console.error(error);
            // TODO add user feedback of failure
        }
    };

    return (
        <>
            <article>
                <h3>Add a new Movie</h3>
                <form
                    onSubmit={handleSubmit}
                    className="pure-form pure-form-stacked"
                >
                    <label>
                        Movie name
                        <input
                            type="text"
                            required
                            value={movie_name}
                            onChange={(e) => set_movie_name(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Runtime (Mins)
                        <input
                            type="number"
                            min="1"
                            required
                            value={runtime_min}
                            onChange={(e) => set_runtime_min(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        MPA Rating
                        <input
                            type="radio"
                            id="rating1"
                            name="rating"
                            value="PG-13"
                        />
                        <label>PG-13</label>
                        <input
                            type="radio"
                            id="rating2"
                            name="rating"
                            value="PG-13"
                        />
                        <label>PG</label>
                        <input
                            type="radio"
                            id="rating3"
                            name="rating"
                            value="PG-13"
                        />
                        <label>R</label>
                    </label>
                    <br />
                    <label>
                        Year
                        <input
                            type="number"
                            min="1900"
                            max="2023"
                            value={movie_year}
                            onChange={(e) => set_movie_year(e.target.value)}
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

            <a href="./Movie">Return to all movies</a>
        </>
    );
};

export default MovieNew;
