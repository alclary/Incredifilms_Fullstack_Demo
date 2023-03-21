import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = process.env.REACT_APP_API_URL;

export const MovieGenreForm = (props) => {
    // State definitions
    //      If formType mode "edit", populate fields with record data to edit,
    //      else form field empty (for new entry)
    const [movieList, setMovieList] = useState([]);
    const [genreList, setGenreList] = useState([]);

    useEffect(() => {
        async function getMovieList() {
            try {
                const movies = await axios.get(API_URL + "/movies/titles");
                setMovieList(movies.data.data);
            } catch (error) {
                console.error(error);
                toast.error(
                    `Error ${error.response.status}: ${error.response.data.sqlMessage}`
                );
            }
        }
        async function getGenreList() {
            try {
                const genres = await axios.get(API_URL + "/genres/categories");
                setGenreList(genres.data.data);
            } catch (error) {
                console.error(error);
                toast.error(
                    `Error ${error.response.status}: ${error.response.data.sqlMessage}`
                );
            }
        }

        getGenreList();
        getMovieList();
    }, []);

    // State definitions
    const [movie_id, set_movie_id] = useState(
        props.formType === "edit" ? props.rowData.movie_id : null
    );
    const [genre_id, set_genre_id] = useState(
        props.formType === "edit" ? props.rowData.genre_id : null
    );

    useEffect(() => {
        console.log(movie_id, genre_id);
    }, [movie_id, genre_id]);

    async function newSubmit() {
        try {
            const res = await axios.post(API_URL + "/moviegenres", {
                movie_id,
                genre_id,
            });
            if (res.status === 200) {
                // Success toast notification
                toast.success(`Record ID ${res.data.data.insertId} created.`);
            }
        } catch (error) {
            console.error(error);
            toast.error(
                `Error ${error.response.status}: ${error.response.data.sqlMessage}`
            );
        }
        // Reload entity table / grid.js component (for updates)
        props.gridReload();
        props.resetForm();
    }

    // Handle "edit" record form submissions
    async function editSubmit() {
        try {
            const res = await axios.put(
                API_URL + `/moviegenres/${props.rowData.movie_genre_id}`,
                {
                    movie_id,
                    genre_id,
                }
            );
            if (res.status === 200) {
                // Success toast notification
                toast.success(`Record updated.`);
            }
        } catch (error) {
            toast.error(
                `Error ${error.response.status}: ${error.response.data.sqlMessage}`
            );
            console.error(error);
        }
        // Reload entity table / grid.js component (for updates)
        props.gridReload();
        props.resetForm();
    }

    // Handle submit of bi-modal form; submit action based on form mode
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (props.formType === "edit") {
            editSubmit();
        } else {
            newSubmit();
        }
    };

    return (
        <div className="form_wrapper">
            {/* Form title based on mode ("edit" or "new") */}
            {props.formType === "edit" ? (
                <h3>Update a genre association with a movie.</h3>
            ) : (
                <h3>Add a new genre association with a movie.</h3>
            )}
            <form
                onSubmit={handleSubmit}
                className="pure-form pure-form-stacked"
            >
                <label>Movie</label>
                <select
                    name="movie"
                    value={movie_id}
                    onChange={(event) => set_movie_id(event.target.value)}
                    required
                >
                    <option disabled selected value={null}>
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
                <label>Genre</label>
                <select
                    name="genre"
                    value={genre_id}
                    onChange={(event) => set_genre_id(event.target.value)}
                    required
                >
                    <option disabled selected value={null}>
                        -- select an option --
                    </option>
                    {genreList.map((genre, i) => {
                        return (
                            <option key={i} value={genre.genre_id}>
                                {genre.genre_name}
                            </option>
                        );
                    })}
                </select>

                <button type="submit" class="pure-button pure-button-primary">
                    Submit
                </button>
                {/* Cancel button only displayed for "edit" form modality */}
                {props.formType === "edit" ? (
                    <button
                        type="button"
                        className="pure-button pure-button"
                        // Cancel button resets form to cancel edit attempt
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

export default MovieGenreForm;
