import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, _ } from "gridjs-react";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import axios from "axios";

export default function Genres() {
    return (
        <div>
            <h3>Genres</h3>
            <p>Create, Retrieve, Update or Delete a Genre</p>
            <Link to="./GenreNew" class="newPlus">
                Add new genre
            </Link>
            <Grid
                columns={[
                    { name: "Genre ID", id:"genre_id", sort: true },
                    { name: "Genre Name", id:"genre_name", sort: true },
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

                data={
                    async () => {
                    const genres = await axios.get(
                        "http://localhost:3001/genres"
                    );
                    return genres.data.data;
                }
              }

                search={true}
                pagination={{ limit: 25 }}
            />
        </div>
    );
}
