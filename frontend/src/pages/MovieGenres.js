import React from "react";
import MovieGenreTable from "../components/MovieGenreTable";

export default function MovieGenres() {
  return (
    <div>
      <h3>MovieGenres</h3>
      <p>Create, Retrieve, Update or Delete a Movie Genre relationship</p>
      <a href="./MovieGenreNew" class="newPlus">Add new movie genre relationship</a>
      <input type="text" value="Search..." className="search" ></input>

      <MovieGenreTable />
    </div>
  );
}
