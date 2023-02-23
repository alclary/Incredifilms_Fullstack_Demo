import React from "react";
import { Grid, _ } from "gridjs-react";

export default function Theaters() {
    return (
        <div>
            <h3>Theaters</h3>
            <p>Create, Retrieve, Update or Delete a Theater</p>
            <a href="./TheaterNew" class="newPlus">
                {" "}
                Add new theater
            </a>
            <Grid
                data={[]}
                columns={[
                    { name: "Theater ID", sort: true },
                    { name: "Theater Name", sort: true },
                    { name: "Number of seats", sort: true },
                ]}
                search={true}
                pagination={{ limit: 25 }}
            />
        </div>
    );
}
