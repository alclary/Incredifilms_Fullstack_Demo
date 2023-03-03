import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, _ } from "gridjs-react";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import axios from "axios";
import { GenreForm } from "./GenreForm";

// Fetch and return data array of genres from API
async function fetchGenres() {
    const genres = await axios.get("http://localhost:3001/genres");
    return genres.data.data;
}

// Functional Component Definition for Genres Component
export default function Genres() {
    // State definition for the genres data array
    const [genres, setGenres] = useState(
        async () => await fetchGenres()
    );

    function fetchAndSetGenres() {
        setGenres(async () => await fetchGenres());
    }

    // State definition for whether or not to hide form
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState(null);

    // Function to confirm and handle deletion of table record, via the delete
    //   icon in the delete column.
    async function handleDelete(row) {
        if (
            window.confirm(
                `Are you sure you want to DELETE the record for genre ID = ${row.genre_id}?`
            ) === true
        ) {
            let deleted = await axios.delete(
                `http://localhost:3001/genres/${row.genre_id}`
            );
            if (deleted.status === 200) {
                fetchAndSetGenres();
            }
        }
    }

    function handleEdit(row) {
        setFormData(row);
        setShowForm(true);
    }

    // Genre Component Contents
    return (
        <div>
            <h3>Genres</h3>
            <p>Create, Retrieve, Update or Delete a Genre</p>

            <Grid
                columns={[
                    { name: "Genre ID", id:"genre_id", sort: true },
                    { name: "Genre Name", id:"genre_name", sort: true },
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

                data={
                    async () => {
                    const genres = await axios.get(
                        "http://localhost:3001/genres"
                    );
                    return genres.data.data;
                }
              }

                search={true}
                pagination={{ limit: 25 }}
            />
                        <Link to="/GenreNew" class="newPlus">
                Add new genre
            </Link>
            {showForm ? (
                <GenreForm
                    row={formData}
                    showForm={setShowForm}
                    parentRerender={() => fetchAndSetGenres()}
                ></GenreForm>
            ) : null}
        </div>
    );
}
