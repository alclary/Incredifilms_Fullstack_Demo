import React from "react";
import { Grid, _ } from "gridjs-react";
import { MdEdit, MdDeleteForever } from "react-icons/md";

export default function Movies() {
    return (
        <div>
            <h3>Movies</h3>
            <p>Create, Retrieve, Update or Delete a Movie Record</p>
            <a href="./MovieNew" class="newPlus">
                Add new movie
            </a>
            <Grid
                data={[
                    [
                        1,
                        "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
                        95,
                        "PG",
                        1964,
                    ],
                    [2, "Interstellar", 169, "PG-13", 2014],
                    [3, "Amélie", 122, "R", 2001],
                    [4, "The Shining", 146, "R", 1980],
                    [5, "Everything Everywhere All at Once", 139, "R", 2022],
                    [6, "Encanto", 102, "PG", 2021],
                    [7, "Bee Movie", 91, "PG", 2007],
                ]}
                columns={[
                    { name: "Movie ID", sort: true },
                    { name: "Movie Name", sort: true },
                    { name: "Runtime (mins)", sort: true },
                    { name: "MPA Rating" },
                    { name: "Year", sort: true },
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
