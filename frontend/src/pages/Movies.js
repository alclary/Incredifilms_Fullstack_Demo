import React from "react";
import { Grid, _ } from "gridjs-react";

export default function Movies() {
    return (
        <div>
            <h3>Movies</h3>
            <p>Create, Retrieve, Update or Delete a Movie Record</p>
            <a href="./MovieNew" class="newPlus">
                Add new movie
            </a>
            <Grid
                data={[]}
                columns={[
                    { name: "Movie ID", sort: true },
                    { name: "Movie Name", sort: true },
                    { name: "Runtime (mins)", sort: true },
                    { name: "MPA Rating" },
                    { name: "Year", sort: true },
                ]}
                search={true}
                pagination={{ limit: 25 }}
            />
        </div>
    );
}
