import React from "react";
import { Grid, _ } from "gridjs-react";
import { MdEdit, MdDeleteForever } from "react-icons/md";

export default function Showtimes() {
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
            <a href="./ShowtimeNew" class="newPlus">
                Add new showtime
            </a>
            <Grid
                data={[
                    [
                        1,
                        "2023-02-10 16:00:00",
                        "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
                        "IncrediFilms Rogers Park",
                    ],
                    [
                        2,
                        "2023-02-10 15:00:00",
                        "Interstellar",
                        "IncrediFilms Lincoln Square",
                    ],
                    [
                        3,
                        "2023-02-14 17:00:00",
                        "Interstellar",
                        "IncrediFilms Lincoln Square",
                    ],
                    [
                        4,
                        "2023-02-14 18:00:00",
                        "Bee Movie",
                        "IncrediFilms Wicker Park",
                    ],
                    [
                        5,
                        "2023-02-14 18:00:00",
                        "Bee Movie",
                        "IncrediFilms Rogers Park",
                    ],
                    [
                        6,
                        "2023-02-16 12:00:00",
                        "Amélie",
                        "IncrediFilms North Center",
                    ],
                    [
                        7,
                        "2023-02-16 15:30:00",
                        "The Shining",
                        "IncrediFilms Rogers Park",
                    ],
                ]}
                columns={[
                    { name: "Showtime ID", sort: true },
                    { name: "Datetime", sort: true },
                    { name: "Movie", sort: true },
                    { name: "Theater" },
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
