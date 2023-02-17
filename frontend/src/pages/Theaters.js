import React from "react";
import TheaterTable from "../components/TheaterTable";
import TheaterNew from "./TheaterNew";

export default function Theaters() {
  return (
    <div>
      <h3>Theaters</h3>
      <p>Needs capability to CREATE, RETRIEVE, UPDATE, DELETE</p>
      <a href="./TheaterNew" class="newPlus"> Add new theater</a>
      <TheaterTable />


    </div>
  );
}
