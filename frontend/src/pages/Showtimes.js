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
                data={[]}
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
