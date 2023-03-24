import React, { useState } from "react";
import { toast } from "react-toastify";
import { Grid, _ } from "gridjs-react";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import axios from "axios";
import { GenreForm } from "./GenreForm";

const API_URL = process.env.REACT_APP_API_URL;

// Fetch and return data array of genres from API
async function fetchGenres() {
    const genres = await axios.get(API_URL + "/genres");
    return genres.data.data;
}

// Functional Component Definition for Genres Component
export default function Genres() {
    // State definition for the genres data array
    const [genres, setGenres] = useState(async () => await fetchGenres());

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

    // Forces genres data to be refetched from API, updating grid.js table
    function gridRefresh() {
        setGenres(async () => await fetchGenres());
    }

    // Function to confirm and handle deletion of table record, via the delete
    //   icon in the delete column.
    async function handleDelete(rowData) {
        if (
            window.confirm(
                `Are you sure you want to DELETE the genre record for ${rowData.genre_name}?`
            ) === true
        ) {
            try {
                const res = await axios.delete(
                    API_URL + `/genres/${rowData.genre_id}`
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

    // Genre Component Contents
    return (
        <div>
            <h3>Genres</h3>
            <p>Create, Retrieve, Update or Delete a Genre</p>
            {/* Grid.js component wrapper */}

            <Grid
                columns={[
                    { name: "Genre ID", id: "genre_id", sort: true },
                    { name: "Genre Name", id: "genre_name", sort: true },
                    {
                        name: "Edit",
                        data: (rowData) =>
                            _(<MdEdit onClick={() => handleEdit(rowData)} />),
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
                data={async () => await genres}
                search={true}
                pagination={{ limit: 10 }}
                autoWidth={false}
            />
            <GenreForm
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
            ></GenreForm>
        </div>
    );
}
