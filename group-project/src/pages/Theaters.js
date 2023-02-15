import React from "react";
import TheaterTable from "../components/TheaterTable";
import TheaterNew from "./TheaterNew";

export default function Theaters() {
  return (
    <div>
      <p>Theaters</p>
      <p>Needs capability to CREATE, RETRIEVE, UPDATE, DELETE</p>
      <a href="./TheaterNew">New theater</a>
      <TheaterTable />


    </div>
  );
}
