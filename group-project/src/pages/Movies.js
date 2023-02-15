import React from "react";
import MovieTable from "../components/MovieTable";

export default function Movies() {
  return (
    <div>
      <p>Movies</p>
      <p>Needs capability to CREATE, RETRIEVE, UPDATE, DELETE</p>
      <a href="">New movie</a>
      <MovieTable />
    </div>
  );
}
