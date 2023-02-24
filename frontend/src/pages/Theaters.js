import React from "react";
import { Grid, _ } from "gridjs-react";
import { MdEdit, MdDeleteForever } from "react-icons/md";

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
                data={[
                    [1, "IncrediFilms Rogers Park", 300],
                    [2, "IncrediFilms Wicker Park", 500],
                    [3, "IncrediFilms Uptown", 300],
                    [4, "IncrediFilms Lincoln Square", 250],
                    [5, "IncrediFilms North Center", 250],
                    [6, "IncrediFilms Lake View", 250],
                ]}
                columns={[
                    { name: "Theater ID", sort: true },
                    { name: "Theater Name", sort: true },
                    { name: "Number of seats", sort: true },
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
