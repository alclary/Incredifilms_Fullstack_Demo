import React from "react";
import MovieGenreTable from "../components/MovieGenreTable";

export default function MovieGenres() {
  return (
    <div>
      <p>MovieGenres</p>
      <p>Needs capability to CREATE, RETRIEVE, UPDATE, DELETE</p>
      <a href="./MovieGenreNew">New movie genre relationship to fixx</a>

      <MovieGenreTable />
    </div>
  );
}
