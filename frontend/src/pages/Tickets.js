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
                data={[
                    [
                        1,
                        "Stephanie Helmsley",
                        "2023-02-14 18:00:00",
                        "Bee Movie",
                        "IncrediFilms Rogers Park",
                        9,
                        "CREDIT",
                    ],
                    [
                        2,
                        "Stephanie Helmsley",
                        "2023-02-16 12:00:00",
                        "Amélie",
                        "IncrediFilms North Center",
                        5,
                        "CREDIT",
                    ],
                    [
                        3,
                        "Em Patterson",
                        "2023-02-10 16:00:00",
                        "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
                        "IncrediFilms Rogers Park",
                        9,
                        "CASH",
                    ],
                    [
                        4,
                        null,
                        "2023-02-10 16:00:00",
                        "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
                        "IncrediFilms Rogers Park",
                        9,
                        "DEBIT",
                    ],
                    [
                        5,
                        "Alexa Bliss",
                        "2023-02-10 15:00:00",
                        "Interstellar",
                        "IncrediFilms Lincoln Square",
                        9,
                        "CREDIT",
                    ],
                    [
                        6,
                        "Booker T",
                        "2023-02-14 18:00:00",
                        "Bee Movie",
                        "IncrediFilms Wicker Park",
                        9,
                        null,
                    ],
                ]}
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
