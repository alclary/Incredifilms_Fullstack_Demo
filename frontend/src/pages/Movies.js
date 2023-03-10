import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, _ } from "gridjs-react";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import axios from "axios";
import { MovieForm } from "./MovieForm";

const API_URL = process.env.REACT_APP_API_URL;

// Fetch and return data array of movies from API
async function fetchMovies() {
    const movies = await axios.get(API_URL + "/movies");
    return movies.data.data;
}

// Functional Component Definition for Movies Component
export default function Movies() {
    // State definition for the movies data array
    const [movies, setMovies] = useState(async () => await fetchMovies());

    function fetchAndSetMovies() {
        setMovies(async () => await fetchMovies());
    }

    // State definition for whether or not to hide form
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState(null);

    // Function to confirm and handle deletion of table record, via the delete
    //   icon in the delete column.
    async function handleDelete(row) {
        if (
            window.confirm(
                `Are you sure you want to DELETE the record for movie ID = ${row.movie_id}?`
            ) === true
        ) {
            let deleted = await axios.delete(
                API_URL + `/movies/${row.movie_id}`
            );
            if (deleted.status === 200) {
                fetchAndSetMovies();
            }
        }
    }

    function handleEdit(row) {
        setFormData(row);
        setShowForm(true);
    }

    // Movie Component Contents
    return (
        <div>
            <h3>Movies</h3>
            <p>Create, Retrieve, Update or Delete a Movie Record</p>
            <Grid
                columns={[
                    { name: "Movie ID", id: "movie_id", sort: true },
                    { name: "Movie Name", id: "movie_name", sort: true },
                    { name: "Runtime (mins)", id: "runtime_min", sort: true },
                    { name: "MPA Rating", id: "mpa_rating" },
                    { name: "Year", id: "movie_year", sort: true },
                    {
                        name: "Edit Item",
                        data: (row) =>
                            _(<MdEdit onClick={() => handleEdit(row)} />),
                        width: "6%",
                    },
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
                data={async () => await movies}
                search={true}
                pagination={{ limit: 25 }}
            />
            <Link to="/MovieNew" class="newPlus">
                Add new movie
            </Link>
            {showForm ? (
                <MovieForm
                    row={formData}
                    showForm={setShowForm}
                    parentRerender={() => fetchAndSetMovies()}
                ></MovieForm>
            ) : null}
        </div>
    );
}
