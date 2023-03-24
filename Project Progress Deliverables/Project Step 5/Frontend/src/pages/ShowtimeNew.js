import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

export const ShowtimeNew = () => {
    const navigate = useNavigate();

    const [movieList, setMovieList] = useState([]);
    const [theaterList, setTheaterList] = useState([]);

    useEffect(() => {
        async function getMovieList() {
            try {
                const movies = await axios.get(API_URL + "/movies/titles");
                setMovieList(movies.data.data);
            } catch (error) {
                console.error(error);
                // TODO add user feedback of failure
            }
        }
        async function getTheaterList() {
            try {
                const theaters = await axios.get(
                    API_URL + "/theaters/locations"
                );
                setTheaterList(theaters.data.data);
            } catch (error) {
                console.error(error);
                // TODO add user feedback of failure
            }
        }

        getTheaterList();
        getMovieList();
    }, []);

    const [showtime_date_time, setShowTimeDateTime] = useState("");
    const [movie_id, setMovieId] = useState("");
    const [theater_id, setTheaterId] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(API_URL + "/showtimes", {
                showtime_date_time,
                movie_id,
                theater_id,
            });
            console.log(res);
            // TODO replace with feedback of success and redirect to showtimes table
        } catch (error) {
            console.error(error);
            // TODO add user feedback of failure
        }

        navigate("/Showtime");
    };

    return (
        <>
            <article>
                <h3>Add a new showtime</h3>
                <form className="form">
                    <label>
                        Date & Time
                        <input
                            type="datetime-local"
                            value={showtime_date_time}
                            onChange={(e) => {
                                setShowTimeDateTime(e.target.value);
                            }}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Movie
                        <select
                            name="movie"
                            value={movie_id}
                            onChange={(e) => {
                                setMovieId(e.target.value);
                            }}
                            required
                        >
                            <option disabled selected value="">
                                -- select an option --
                            </option>
                            {movieList.map((movie, i) => {
                                return (
                                    <option key={i} value={movie.movie_id}>
                                        {movie.movie_name}
                                    </option>
                                );
                            })}
                        </select>
                    </label>
                    <br />
                    <label>
                        Theater
                        <select
                            name="movie"
                            value={theater_id}
                            onChange={(e) => {
                                setTheaterId(e.target.value);
                            }}
                            required
                        >
                            <option disabled selected value="">
                                -- select an option --
                            </option>
                            {theaterList.map((theater, i) => {
                                return (
                                    <option key={i} value={theater.theater_id}>
                                        {theater.theater_name}
                                    </option>
                                );
                            })}
                        </select>
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
            <a href="./Showtime">Return to all showtimes</a>
        </>
    );
};

export default ShowtimeNew;
