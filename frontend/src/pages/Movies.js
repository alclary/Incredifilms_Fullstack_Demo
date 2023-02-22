import React from "react";
import MovieTable from "../components/MovieTable";
import MovieNew from "./MovieNew";

export default function Movies() {
  return (
    <div>
      <h3>Movies</h3>
      <p>Create, Retrieve, Update or Delete a Movie Record</p>
      <a href="./MovieNew" class="newPlus">
        Add new movie
      </a>
      <input type="text" value="Search..." className="search"></input>
      <MovieTable />
    </div>
  );
}
