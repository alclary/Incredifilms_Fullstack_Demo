import React, { useEffect, useState } from "react";
import { Grid, _ } from "gridjs-react";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import axios from "axios";
import { ShowtimeForm } from "./ShowtimeForm";
import { toast } from "react-toastify";
import moment from "moment";

const API_URL = process.env.REACT_APP_API_URL;
const START_DATE_LIMIT = moment.utc("1901-01-01"); //lowest year supported by SQL
const END_DATE_LIMIT = moment.utc("2050-01-01"); // arbitrary end limit

// Fetch and return data array of showtimes from API
async function fetchShowtimes(startDate, endDate) {
    const showtimes = await axios.get(
        `${API_URL}/showtimes?startdate=${startDate}&enddate=${endDate}`
    );
    return showtimes.data.data;
}

// Functional Component Definition for Showtimes Component
export default function Showtimes() {
    // State definition for showtime date range
    //      Defaults match hard limits on form entries
    const [startDate, setStartDate] = useState(START_DATE_LIMIT);
    const [endDate, setEndDate] = useState(END_DATE_LIMIT);

    // State definition for the showtimes data array
    const [showtimes, setShowtimes] = useState(
        async () => await fetchShowtimes(startDate, endDate)
    );

    // Forces showtimes data to be refetched from API, updating grid.js table
    function gridRefresh() {
        setShowtimes(async () => await fetchShowtimes(startDate, endDate));
    }

    // Once a date range is entered, requery grid.js table results
    useEffect(() => {
        setShowtimes(async () => await fetchShowtimes(startDate, endDate));
    }, [startDate, endDate]);

    // State definition for modal form
    const [formData, setFormData] = useState("");
    const [formType, setFormType] = useState("new");
    const [key, setKey] = useState(Math.random());

    // resets the date range selector form
    function resetDateRange() {
        document
            .querySelectorAll(".dateRangeSel")
            .forEach((input) => (input.value = null));
        setStartDate(START_DATE_LIMIT);
        setEndDate(END_DATE_LIMIT);
        console.log(startDate, endDate);
        gridRefresh();
    }

    // Resets the modal form (new and update) to a fresh "new" form
    function resetForm() {
        setFormData("");
        setFormType("new");
        setKey(Math.random());
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
                `Are you sure you want to DELETE the record for showtime ID = ${rowData.showtime_id}: ${rowData.movie_name} at ${rowData.theater_name} on this date?`
            ) === true
        ) {
            try {
                const res = await axios.delete(
                    API_URL + `/showtimes/${rowData.showtime_id}`
                );
                if (res.status === 200) {
                    toast.success("Record deleted.");
                    gridRefresh();
                }
            } catch (error) {
                toast.error(
                    `Error ${error.response.status}: ${error.response.data.sqlMessage}`
                );
                console.error(error);
            }
        }
    }

    // Showtime Component Contents
    return (
        <div>
            <div className="grid_wrapper">
                <h3>Showtimes</h3>
                <p>Create, Retrieve, Update or Delete a Showtime</p>
                <p>
                    To display only showtimes between two given dates please
                    indicate a start and end date:
                </p>
                <div className="dateRangeSelector">
                    <form className="pure-form">
                        <legend>Filter results by date range:</legend>
                        <input
                            type="datetime-local"
                            id="startDate"
                            className="dateRangeSel"
                            name="startDate"
                            placeholder="Start Date"
                            min={moment
                                .utc(START_DATE_LIMIT)
                                .format("YYYY-MM-DDTHH:MM")}
                            max={moment
                                .utc(END_DATE_LIMIT)
                                .format("YYYY-MM-DDTHH:MM")}
                            onChange={(event) => {
                                setStartDate(
                                    moment.utc(event.target.value).toISOString()
                                );
                            }}
                        ></input>
                        <input
                            type="datetime-local"
                            id="endDate"
                            className="dateRangeSel"
                            name="endDate"
                            placeholder="End Date"
                            min={moment
                                .utc(startDate)
                                .format("YYYY-MM-DDTHH:MM")} // prevent endDate < startDate
                            max={moment
                                .utc(END_DATE_LIMIT)
                                .format("YYYY-MM-DDTHH:MM")}
                            onChange={(event) => {
                                setEndDate(
                                    moment.utc(event.target.value).toISOString()
                                );
                            }}
                        ></input>
                        <button
                            type="button"
                            className="pure-button pure-button"
                            onClick={() => resetDateRange()}
                        >
                            Clear
                        </button>
                    </form>
                </div>
                <Grid
                    columns={[
                        { name: "Showtime ID", id: "showtime_id", sort: true },
                        {
                            name: "Datetime",
                            id: "date_time",
                            sort: true,
                            formatter: (cell) => {
                                let dt = new moment.utc(cell);
                                return dt.format("MM/DD/YY h:mma");
                            },
                        },
                        { name: "Movie", id: "movie_name", sort: true },
                        { name: "Theater", id: "theater_name" },
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
                    data={async () => await showtimes}
                    search={true}
                    pagination={{ limit: 10 }}
                    autoWidth={false}
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
        </div>
    );
}
