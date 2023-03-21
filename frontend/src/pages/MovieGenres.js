import React, { useState } from "react";
import { Grid, _ } from "gridjs-react";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import axios from "axios";
import { MovieGenreForm } from "./MovieGenreForm";
import { toast } from "react-toastify";

const API_URL = process.env.REACT_APP_API_URL;

// Fetch and return data array of moviegenres from API
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

    // State definition for modal form
    const [formData, setFormData] = useState("");
    const [formType, setFormType] = useState("new");
    const [key, setKey] = useState(Math.random());

    // Resets the modal form (new and update) to a fresh "new" form
    function resetForm() {
        setFormData("");
        setFormType("new");
        setKey(Math.random());
    }

    // Forces moviegenres data to be refetched from API, updates moviegenres state
    function gridRefresh() {
        setMovieGenres(async () => await fetchMovieGenres());
    }

    function handleEdit(rowData) {
        setFormType("edit");
        setFormData(rowData);
        setKey(Math.random());
    }

    // Function to confirm and handle deletion of table record, via the delete
    //   icon in the delete column.
    async function handleDelete(rowData) {
        if (
            window.confirm(
                `Are you sure you want to DELETE the movie genre relationship between movie ${rowData.movie_name} and genre ${rowData.genre_name}?`
            ) === true
        ) {
            try {
                const res = await axios.delete(
                    API_URL + `/moviegenres/${rowData.movie_genre_id}`
                );
                if (res.status === 200) {
                    toast.success("Record deleted.");
                    gridRefresh();
                }
            } catch (error) {
                toast.error(
                    `Error ${error.response.status}: ${error.response.data.sqlMessage}`
                );
                console.log(error);
            }
        }
    }

    // MovieGenre Component Contents
    return (
        <div>
            <div className="grid_wrapper">
                <h3>MovieGenres</h3>
                <p>
                    Create, Retrieve, Update, or Delete a Movie Genre
                    relationship
                </p>
                {/* Grid.js component wrapper */}
                <Grid
                    columns={[
                        {
                            name: "Movie Genre ID",
                            id: "movie_genre_id",
                            sort: true,
                        },
                        { name: "Movie", id: "movie_name", sort: true },
                        { name: "Genre", id: "genre_name", sort: true },
                        {
                            name: "Edit",
                            data: (rowData) =>
                                _(
                                    <MdEdit
                                        onClick={() => handleEdit(rowData)}
                                    />
                                ),
                        },
                        {
                            name: "Delete",
                            data: (rowData) =>
                                _(
                                    <MdDeleteForever
                                        onClick={() => handleDelete(rowData)}
                                    />
                                ),
                        },
                    ]}
                    data={async () => await movie_genres}
                    search={true}
                    pagination={{ limit: 10 }}
                />
                <MovieGenreForm
                    // key update is being used to force rerender component
                    key={key}
                    // mode of form "edit" or "new"
                    formType={formType}
                    // form data to populate in form (if any and mode is "edit")
                    rowData={formData}
                    // function via prop to reset form state from parent
                    resetForm={resetForm}
                    // function call via prop to refresh table / Grid component
                    gridReload={() => gridRefresh()}
                ></MovieGenreForm>
            </div>
        </div>
    );
}
