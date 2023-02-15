import React from "react";
import MovieTable from "../components/MovieTable";
import MovieNew from "./MovieNew";

export default function Movies() {
  return (
    <div>
      <p>Movies</p>
      <p>Needs capability to CREATE, RETRIEVE, UPDATE, DELETE</p>
      <a href="./MovieNew">New movie</a>
      <MovieTable />


    </div>
  );
}
