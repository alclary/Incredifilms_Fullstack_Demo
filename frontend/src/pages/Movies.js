import React from "react";
import MovieTable from "../components/MovieTable";
import MovieNew from "./MovieNew";

export default function Movies() {
  return (
    <div>
      <h3>Movies</h3>
      <p>Needs capability to CREATE, RETRIEVE, UPDATE, DELETE</p>
      <a href="./MovieNew" class="newPlus">Add new movie</a>
      <MovieTable />


    </div>
  );
}
