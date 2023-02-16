import React from "react";
import MovieGenreTable from "../components/MovieGenreTable";
// import GenreNew from "./GenreNew";

export default function MovieGenres() {
  return (
    <div>
      <p>Movie Genres</p>
      <p>Needs capability to CREATE, RETRIEVE, UPDATE, DELETE</p>
      {/* <a href="./GenreNew">New genre</a> */}
      <MovieGenreTable />
    </div>
  );
}
