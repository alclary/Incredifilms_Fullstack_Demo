import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, _ } from "gridjs-react";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import axios from "axios";
import { ShowtimeForm } from "./ShowtimeForm";
import moment from "moment";

const API_URL = process.env.REACT_APP_API_URL;

// Fetch and return data array of showtimes from API
async function fetchShowtimes() {
    const showtimes = await axios.get(API_URL + "/showtimes");
    return showtimes.data.data;
}

// Functional Component Definition for Showtimes Component
export default function Showtimes() {
    // State definition for the showtimes data array
    const [showtimes, setShowtimes] = useState(
        async () => await fetchShowtimes()
    );

    function fetchAndSetShowtimes() {
        setShowtimes(async () => await fetchShowtimes());
    }

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

    // Forces showtimes data to be refetched from API, updating grid.js table
    function gridRefresh() {
        setShowtimes(async () => await fetchShowtimes());
    }

    // Function to confirm and handle deletion of table record, via the delete
    //   icon in the delete column.
    async function handleDelete(rowData) {
        if (
            window.confirm(
                `Are you sure you want to DELETE the record for showtime ID = ${rowData.showtime_id}?`
            ) === true
        ) {
            let deleted = await axios.delete(
                API_URL + `/showtimes/${rowData.showtime_id}`
            );
            if (deleted.status === 200) {
                fetchAndSetShowtimes();
            }
        }
    }

    function handleEdit(rowData) {
        setFormType("edit");
        setFormData(rowData);
        setKey(Math.random());
    }

    // Showtime Component Contents
    return (
        <div>
            <h3>Showtimes</h3>
            <p>Create, Retrieve, Update or Delete a Showtime</p>
            <p>
                To display only showtimes between two given dates please
                indicate a start and end date:
            </p>
            <label for="start">Start date:</label>
            <input type="date" id="start" name="start-input"></input>
            <label for="end">End date:</label>
            <input type="date" id="end" name="end-input"></input>
            <Grid
                columns={[
                    { name: "Showtime ID", id: "showtime_id", sort: true },
                    {
                        name: "Datetime",
                        id: "date_time",
                        sort: true,
                        formatter: (cell) => {
                            let dt = new moment(cell);
                            return dt.format("MM/DD/YY h:mma");
                        },
                    },
                    { name: "Movie", id: "movie_id", sort: true },
                    { name: "Theater", id: "theater_id" },
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
                data={async () => await showtimes}
                search={true}
                pagination={{ limit: 10 }}
            />
            <ShowtimeForm
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
            ></ShowtimeForm>
        </div>
    );
}
