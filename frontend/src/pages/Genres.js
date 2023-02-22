import React from "react";
import GenreTable from "../components/GenreTable";
import GenreNew from "./GenreNew";

export default function Genres() {
  return (
    <div>
      <h3>Genres</h3>
      <p>Create, Retrieve, Update or Delete a Genre</p>
      <a href="./GenreNew" class="newPlus">Add new genre</a>
      <input type="text" value="Search..." className="search" ></input>

      <GenreTable />
    </div>
  );
}
