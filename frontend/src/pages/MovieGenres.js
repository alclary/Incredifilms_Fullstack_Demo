import React from "react";
import MovieGenreTable from "../components/MovieGenreTable";

export default function MovieGenres() {
  return (
    <div>
      <h3>MovieGenres</h3>
      <p>Needs capability to CREATE, RETRIEVE, UPDATE, DELETE</p>
      <a href="./MovieGenreNew" class="newPlus">Add new movie genre relationship</a>

      <MovieGenreTable />
    </div>
  );
}
