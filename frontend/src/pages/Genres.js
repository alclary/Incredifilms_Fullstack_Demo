import React from "react";
import { Grid, _ } from "gridjs-react";

export default function Genres() {
    return (
        <div>
            <h3>Genres</h3>
            <p>Create, Retrieve, Update or Delete a Genre</p>
            <a href="./GenreNew" class="newPlus">
                Add new genre
            </a>
            <Grid
                data={[]}
                columns={[
                    { name: "Genre ID", sort: true },
                    { name: "Genre Name", sort: true },
                ]}
                search={true}
                pagination={{ limit: 25 }}
            />
        </div>
    );
}
