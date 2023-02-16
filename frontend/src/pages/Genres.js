import React from "react";
import GenreTable from "../components/GenreTable";
import GenreNew from "./GenreNew";

export default function Genres() {
  return (
    <div>
      <p>Genres</p>
      <p>Needs capability to CREATE, RETRIEVE, UPDATE, DELETE</p>
      <a href="./GenreNew">New genre</a>
      <GenreTable />
    </div>
  );
}
