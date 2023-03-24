import React, { useState } from "react";
import { Grid, _ } from "gridjs-react";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import axios from "axios";
import { MovieForm } from "./MovieForm";
import { toast } from "react-toastify";

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

    // Forces movies data to be refetched from API, updating grid.js table
    function gridRefresh() {
        setMovies(async () => await fetchMovies());
    }

    // Function to confirm and handle deletion of table record, via the delete
    //   icon in the delete column.
    async function handleDelete(rowData) {
        if (
            window.confirm(
                `Are you sure you want to DELETE the movie record for ${rowData.movie_name}?`
            ) === true
        ) {
            try {
                const res = await axios.delete(
                    API_URL + `/movies/${rowData.movie_id}`
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

    function handleEdit(rowData) {
        setFormType("edit");
        setFormData(rowData);
        setKey(Math.random());
    }

    // Movie Component Contents
    return (
        <div>
            <div className="grid_wrapper">
                <h3>Movies</h3>
                <p>Create, Retrieve, Update or Delete a Movie Record</p>
                {/* Grid.js component wrapper */}
                <Grid
                    columns={[
                        { name: "Movie ID", id: "movie_id", sort: true },
                        { name: "Movie Name", id: "movie_name", sort: true },
                        {
                            name: "Runtime (mins)",
                            id: "runtime_min",
                            sort: true,
                        },
                        { name: "MPA Rating", id: "mpa_rating" },
                        { name: "Year", id: "movie_year", sort: true },
                        {
                            name: "Edit",
                            data: (rowData) =>
                                _(
                                    <MdEdit
                                        onClick={() => handleEdit(rowData)}
                                    />
                                ),
                            width: "6%",
                        },
                        {
                            name: "Delete",
                            data: (rowData) =>
                                _(
                                    <MdDeleteForever
                                        onClick={() => handleDelete(rowData)}
                                    />
                                ),
                            width: "6%",
                        },
                    ]}
                    data={async () => await movies}
                    search={true}
                    pagination={{ limit: 10 }}
                    autoWidth={false}
                />
            </div>
            <MovieForm
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
            ></MovieForm>
        </div>
    );
}
