import React from "react";
import { Grid, _ } from "gridjs-react";
import { MdEdit, MdDeleteForever } from "react-icons/md";

export default function MovieGenres() {
    return (
        <div>
            <h3>MovieGenres</h3>
            <p>Create, Retrieve, Update or Delete a Movie Genre relationship</p>
            <a href="./MovieGenreNew" class="newPlus">
                Add new movie genre relationship
            </a>
            <Grid
                data={[
                    [
                        1,
                        "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
                        "Comedy",
                    ],
                    [
                        2,
                        "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
                        "Action",
                    ],
                    [3, "Interstellar", "Sci-Fi"],
                    [4, "Interstellar", "Action"],
                    [5, "Interstellar", "Adventure"],
                    [6, "Interstellar", "Thriller"],
                    [7, "Amélie", "Romance"],
                    [8, "Amélie", "Comedy"],
                    [9, "The Shining", "Horror"],
                    [10, "The Shining", "Mystery"],
                    [11, "Everything Everywhere All at Once", "Sci-Fi"],
                    [12, "Everything Everywhere All at Once", "Comedy"],
                    [13, "Everything Everywhere All at Once", "Mystery"],
                    [14, "Encanto", "Kids"],
                    [15, "Encanto", "Family"],
                    [16, "Encanto", "Musical"],
                    [17, "Encanto", "Adventure"],
                    [18, "Bee Movie", "Family"],
                    [19, "Bee Movie", "Comedy"],
                    [20, "Bee Movie", "Action"],
                    [21, "Bee Movie", "Adventure"],
                    [22, "Bee Movie", "Cult Classic"],
                ]}
                columns={[
                    { name: "Movie Genre ID", sort: true },
                    { name: "Movie", sort: true },
                    { name: "Genre", sort: true },
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
