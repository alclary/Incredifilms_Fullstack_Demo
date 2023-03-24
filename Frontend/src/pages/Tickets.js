import React, { useState } from "react";
import { Grid, _ } from "gridjs-react";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import axios from "axios";
import { TicketForm } from "./TicketForm";
import { toast } from "react-toastify";
import moment from "moment";

const API_URL = process.env.REACT_APP_API_URL;

// Fetch and return data array of tickets from API
async function fetchTickets() {
    const tickets = await axios.get(API_URL + "/tickets");
    return tickets.data.data;
}

// Functional Component Definition for Tickets Component
export default function Tickets() {
    // State definition for the tickets data array
    const [tickets, setTickets] = useState(async () => await fetchTickets());

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
        setTickets(async () => await fetchTickets());
    }

    // Function to confirm and handle deletion of table record, via the delete
    //   icon in the delete column.
    async function handleDelete(rowData) {
        if (
            window.confirm(
                `Are you sure you want to DELETE the record for ticket ID = ${rowData.ticket_id}?`
            ) === true
        ) {
            try {
                const res = await axios.delete(
                    API_URL + `/tickets/${rowData.ticket_id}`
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

    function handleEdit(rowData) {
        setFormType("edit");
        setFormData(rowData);
        setKey(Math.random());
    }

    // Ticket Component Contents
    return (
        <div>
            <div className="grid_wrapper">
                <h3>Tickets</h3>
                <p>Create, Retrieve, Update, or Delete a Ticket</p>
                <Grid
                    columns={[
                        { name: "Ticket ID", id: "ticket_id", sort: true },
                        {
                            name: "Customer Name",
                            id: "customer_name",
                            sort: true,
                        },
                        {
                            name: "Showtime Date & Time",
                            id: "showtime_date_time",
                            sort: true,
                            formatter: (cell) => {
                                let dt = new moment.utc(cell);
                                return dt.format("MM/DD/YY h:mma");
                            },
                        },
                        { name: "Movie", id: "movie_name" },
                        { name: "Theater", id: "theater_name" },
                        {
                            name: "Price",
                            id: "price",
                            formatter: (cell) => {
                                return `$${Number(cell).toFixed(2)}`;
                            },
                        },
                        { name: "Payment Method", id: "payment_method" },
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
                    data={async () => await tickets}
                    search={true}
                    pagination={{ limit: 10 }}
                    autoWidth={false}
                />
                <TicketForm
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
                ></TicketForm>
            </div>
        </div>
    );
}
