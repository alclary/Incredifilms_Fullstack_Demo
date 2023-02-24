import React from "react";
import { Grid, _ } from "gridjs-react";
import { MdEdit, MdDeleteForever } from "react-icons/md";

export default function Tickets() {
    return (
        <div>
            <h3>Tickets</h3>
            <p>Create, Retrieve, Update or Delete a Ticket</p>
            <a href="./TicketNew" class="newPlus">
                Add new ticket
            </a>
            <Grid
                data={[]}
                columns={[
                    { name: "Ticket ID", sort: true },
                    { name: "Customer Name", sort: true },
                    { name: "Showtime Datetime", sort: true },
                    { name: "Movie" },
                    { name: "Theater" },
                    { name: "Price" },
                    { name: "Payment Method" },
                    {
                        name: "Edit Item",
                        data: _(<MdEdit onClick={() => alert("clicked!")} />),
                    },
                    {
                        name: "Delete Item",
                        data: _(
                            <MdDeleteForever
                                onClick={() => alert("clicked!")}
                            />
                        ),
                    },
                ]}
                search={true}
                pagination={{ limit: 25 }}
            />
        </div>
    );
}
