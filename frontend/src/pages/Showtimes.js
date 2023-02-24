import React from "react";
import { Grid, _ } from "gridjs-react";

export default function Showtimes() {
    return (
        <div>
            <h3>Showtimes</h3>
            <p>Create, Retrieve, Update or Delete a Showtime</p>
            <a href="./ShowtimeNew" class="newPlus">
                Add new showtime
            </a>
            <Grid
                data={[
                    [1, "2023-02-10 16:00:00", 1, 1],
                    [2, "2023-02-10 15:00:00", 2, 4],
                    [3, "2023-02-14 17:00:00", 2, 4],
                    [4, "2023-02-14 18:00:00", 7, 2],
                    [5, "2023-02-14 18:00:00", 7, 1],
                    [6, "2023-02-16 12:00:00", 3, 5],
                    [7, "2023-02-16 15:30:00", 4, 1],
                ]}
                columns={[
                    { name: "Showtime ID", sort: true },
                    { name: "Datetime", sort: true },
                    { name: "Movie Name", sort: true },
                    { name: "Theater Name" },
                ]}
                search={true}
                pagination={{ limit: 25 }}
            />
        </div>
    );
}
