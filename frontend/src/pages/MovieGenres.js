import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, _ } from "gridjs-react";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import axios from "axios";
import { MovieGenreForm } from "./MovieGenreForm";

const API_URL = process.env.REACT_APP_API_URL;

async function fetchMovieGenres() {
    const movie_genres = await axios.get(API_URL + "/moviegenres");
    return movie_genres.data.data;
}

// Functional Component Definition for MovieGenres Component
export default function MovieGenres() {
    // State definition for the movie_genres data array
    const [movie_genres, setMovieGenres] = useState(
        async () => await fetchMovieGenres()
    );

    function fetchAndSetMovieGenres() {
        setMovieGenres(async () => await fetchMovieGenres());
    }

    // State definition for whether or not to hide form
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState(null);

    // Function to confirm and handle deletion of table record, via the delete
    //   icon in the delete column.
    async function handleDelete(row) {
        if (
            window.confirm(
                `Are you sure you want to DELETE the record for movie_genre ID = ${row.movie_genre_id}?`
            ) === true
        ) {
            let deleted = await axios.delete(
                API_URL + `/moviegenres/${row.movie_genre_id}`
            );
            if (deleted.status === 200) {
                fetchAndSetMovieGenres();
            }
        }
    }

    function handleEdit(row) {
        setFormData(row);
        setShowForm(true);
    }

    // MovieGenre Component Contents
    return (
        <div>
            <h3>MovieGenres</h3>
            <p>Create, Retrieve, or Delete a Movie Genre relationship</p>
            <Grid
                columns={[
                    {
                        name: "Movie Genre ID",
                        id: "movie_genre_id",
                        sort: true,
                    },
                    { name: "Movie", id: "movie_id", sort: true },
                    { name: "Genre", id: "genre_id", sort: true },
                    {
                        name: "Delete Item",
                        data: (row) =>
                            _(
                                <MdDeleteForever
                                    onClick={() => handleDelete(row)}
                                />
                            ),
                        width: "6%",
                    },
                ]}
                data={async () => await movie_genres}
                search={true}
                pagination={{ limit: 25 }}
            />
            <Link to="/MovieGenreNew" className="newPlus">
                Add new Movie Genre relationship
            </Link>
            {showForm ? (
                    <MovieGenreForm
                      row={formData}
                      showForm={setShowForm}
                      parentRerender={() => fetchAndSetMovieGenres()}
                    ></MovieGenreForm>
                  ) : null}
        </div>
    );
}
