import React from "react";
import { Grid, _ } from "gridjs-react";

export default function MovieGenres() {
    return (
        <div>
            <h3>MovieGenres</h3>
            <p>Create, Retrieve, Update or Delete a Movie Genre relationship</p>
            <a href="./MovieGenreNew" class="newPlus">
                Add new movie genre relationship
            </a>
            <Grid
                data={[]}
                columns={[
                    { name: "Movie Genre ID", sort: true },
                    { name: "Movie", sort: true },
                    { name: "Genre", sort: true },
                ]}
                search={true}
                pagination={{ limit: 25 }}
            />
        </div>
    );
}
