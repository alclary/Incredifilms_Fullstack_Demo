import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, _ } from "gridjs-react";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import axios from "axios";
import { TicketForm } from "./TicketForm";

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

    function fetchAndSetTickets() {
        setTickets(async () => await fetchTickets());
    }

    // State definition for whether or not to hide form
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState(null);

    // Function to confirm and handle deletion of table record, via the delete
    //   icon in the delete column.
    async function handleDelete(row) {
        if (
            window.confirm(
                `Are you sure you want to DELETE the record for ticket ID = ${row.ticket_id}?`
            ) === true
        ) {
            let deleted = await axios.delete(
                API_URL + `/tickets/${row.ticket_id}`
            );
            if (deleted.status === 200) {
                fetchAndSetTickets();
            }
        }
    }

    function handleEdit(row) {
        setFormData(row);
        setShowForm(true);
    }

    // Ticket Component Contents
    return (
        <div>
            <h3>Tickets</h3>
            <p>Create, Retrieve, Update, or Delete a Ticket</p>
            <Grid
                columns={[
                    { name: "Ticket ID", id: "ticket_id", sort: true },
                    { name: "Customer Name", id: "customer_id", sort: true },
                    {
                        name: "Showtime Datetime",
                        id: "showtime_id",
                        sort: true,
                    },
                    { name: "Movie", id: "movie_id" },
                    { name: "Theater", id: "theater_id" },
                    { name: "Price", id: "price" },
                    { name: "Payment Method", id: "payment_method" },
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
                data={async () => await tickets}
                search={true}
                pagination={{ limit: 25 }}
            />
            <Link to="/TicketNew" className="newPlus">
                Add new ticket
            </Link>
            {/* {showForm ? (
        <TicketForm
          row={formData}
          showForm={setShowForm}
          parentRerender={() => fetchAndSetTickets()}
        ></TicketForm>
      ) : null} */}
        </div>
    );
}
