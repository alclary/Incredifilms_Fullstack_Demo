import React from "react";
import GenreTable from "../components/GenreTable";
import GenreNew from "./GenreNew";

export default function Genres() {
  return (
    <div>
      <h3>Genres</h3>
      <p>Needs capability to CREATE, RETRIEVE, UPDATE, DELETE</p>
      <a href="./GenreNew" class="newPlus">Add new genre</a>
      <GenreTable />
    </div>
  );
}
