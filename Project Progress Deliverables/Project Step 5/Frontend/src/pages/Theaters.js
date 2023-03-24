import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, _ } from "gridjs-react";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import axios from "axios";
import { TheaterForm } from "./TheaterForm";

const API_URL = process.env.REACT_APP_API_URL;

// Fetch and return data array of theaters from API
async function fetchTheaters() {
    const theaters = await axios.get(API_URL + "/theaters");
    return theaters.data.data;
}

// Functional Component Definition for Theaters Component
export default function Theaters() {
    // State definition for the theaters data array
    const [theaters, setTheaters] = useState(async () => await fetchTheaters());

    function fetchAndSetTheaters() {
        setTheaters(async () => await fetchTheaters());
    }

    // State definition for whether or not to hide form
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState(null);

    // Function to confirm and handle deletion of table record, via the delete
    //   icon in the delete column.
    async function handleDelete(row) {
        if (
            window.confirm(
                `Are you sure you want to DELETE the record for theater ID = ${row.theater_id}?`
            ) === true
        ) {
            let deleted = await axios.delete(
                API_URL + `/theaters/${row.theater_id}`
            );
            if (deleted.status === 200) {
                fetchAndSetTheaters();
            }
        }
    }

    function handleEdit(row) {
        setFormData(row);
        setShowForm(true);
    }

    // Theater Component Contents

    return (
        <div>
            <h3>Theaters</h3>
            <p>Create, Retrieve, Update or Delete a Theater</p>
            <Grid
                columns={[
                    { name: "Theater ID", id: "theater_id", sort: true },
                    { name: "Theater Name", id: "theater_name", sort: true },
                    { name: "Number of seats", id: "no_of_seats", sort: true },
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
                data={async () => await theaters}
                search={true}
                pagination={{ limit: 25 }}
            />

            <Link to="/TheaterNew" class="newPlus">
                {" "}
                Add new theater
            </Link>

            {showForm ? (
                <TheaterForm
                    row={formData}
                    showForm={setShowForm}
                    parentRerender={() => fetchAndSetTheaters()}
                ></TheaterForm>
            ) : null}
        </div>
    );
}
