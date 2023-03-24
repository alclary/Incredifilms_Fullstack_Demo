import React, { useState } from "react";
import { MdLocalActivity } from "react-icons/md";
import { useHistory, useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

export const MovieGenreNew = () => {
    const navigate = useNavigate();
    const [genre_name, set_genre_name] = useState("");
    const [movie_name, set_movie_name] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO implement POST request to API

        navigate("/MovieGenre");
    };

    return (
        <>
            <h3>Assign a Movie to its Genre(s)</h3>

            <form className="form">
                <label>
                    Select a Movie:
                    <select>
                        <option>
                            Dr. Strangelove or: How I Learned to Stop Worrying
                            and Love the Bomb
                        </option>
                        <option>Interstellar</option>
                        <option>Amélie</option>
                        <option>The Shining</option>
                        <option>Everything Everywhere All at Once</option>
                    </select>
                </label>
                <br />
                <label>
                    Genre Name
                    <br />
                    <input
                        className=""
                        type="checkbox"
                        value=""
                        name=""
                        id="genreID1"
                    />
                    <label for="genreID1">Documentary</label>
                    <br />
                    <input
                        className=""
                        type="checkbox"
                        value=""
                        name=""
                        id="genreID1"
                    />
                    <label for="genreID1">Kids</label>
                    <br />
                    <input
                        className=""
                        type="checkbox"
                        value=""
                        name=""
                        id="genreID1"
                    />
                    <label for="genreID1">Family</label>
                    <br />
                    <input
                        className=""
                        type="checkbox"
                        value=""
                        name=""
                        id="genreID1"
                    />
                    <label for="genreID1">Comedy</label>
                    <br />
                    <input
                        className=""
                        type="checkbox"
                        value=""
                        name=""
                        id="genreID1"
                    />
                    <label for="genreID1">Independent</label>
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

            <a href="./MovieGenre">Return to all movie genres</a>
        </>
    );
};

export default MovieGenreNew;
