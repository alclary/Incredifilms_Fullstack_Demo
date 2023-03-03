import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, _ } from "gridjs-react";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import axios from "axios";

export default function Movies() {
    return (
        <div>
            <h3>Movies</h3>
            <p>Create, Retrieve, Update or Delete a Movie Record</p>
            <Link to="./MovieNew" class="newPlus">
                Add new movie
            </Link>
            <Grid
                columns={[
                    { name: "Movie ID", id: "movie_id", sort: true },
                    { name: "Movie Name", id: "movie_name", sort: true },
                    { name: "Runtime (mins)", id: "runtime_min", sort: true },
                    { name: "MPA Rating", id: "mpa_rating" },
                    { name: "Year", id: "movie_year", sort: true },
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
                data={async () => {
                    const movies = await axios.get(
                        "http://flip1.engr.oregonstate.edu:40594/movies"
                    );
                    return movies.data.data;
                }}
                search={true}
                pagination={{ limit: 25 }}
            />
        </div>
    );
}
