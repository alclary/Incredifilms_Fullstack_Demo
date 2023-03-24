import React, { useState } from "react";
import { Grid, _ } from "gridjs-react";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import axios from "axios";
import { TheaterForm } from "./TheaterForm";
import { toast } from "react-toastify";

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

    // Forces theaters data to be refetched from API, updates theaters state
    function fetchAndSetTheaters() {
        setTheaters(async () => await fetchTheaters());
    }

    // Function to confirm and handle deletion of table record, via the delete
    //   icon in the delete column.
    async function handleDelete(rowData) {
        if (
            window.confirm(
                `Are you sure you want to DELETE the theater record for ${rowData.theater_name}?`
            ) === true
        ) {
            try {
                const res = await axios.delete(
                    API_URL + `/theaters/${rowData.theater_id}`
                );
                if (res.status === 200) {
                    toast.success("Record deleted.");
                    fetchAndSetTheaters();
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

    // Theater Component Contents

    return (
        <div>
            <h3>Theaters</h3>
            <p>Create, Retrieve, Update or Delete a Theater</p>
            {/* Grid.js component wrapper */}
            <Grid
                columns={[
                    { name: "Theater ID", id: "theater_id", sort: true },
                    { name: "Theater Name", id: "theater_name", sort: true },
                    { name: "Number of seats", id: "no_of_seats", sort: true },
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
                data={async () => await theaters}
                search={true}
                pagination={{ limit: 10 }}
                autoWidth={false}
            />

            <TheaterForm
                // key update is being used to force rerender component
                key={key}
                // mode of form "edit" or "new"
                formType={formType}
                // form data to populate in form (if any and mode is "edit")
                rowData={formData}
                // function via prop to reset form state from parent
                resetForm={resetForm}
                // function call via prop to refresh table / Grid component
                gridReload={() => fetchAndSetTheaters()}
            ></TheaterForm>
        </div>
    );
}
