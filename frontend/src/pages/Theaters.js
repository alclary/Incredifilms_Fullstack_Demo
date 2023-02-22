import React from "react";
import TheaterTable from "../components/TheaterTable";
import TheaterNew from "./TheaterNew";

export default function Theaters() {
  return (
    <div>
      <h3>Theaters</h3>
      <p>Create, Retrieve, Update or Delete a Theater</p>
      <a href="./TheaterNew" class="newPlus"> Add new theater</a>
      <input type="text" value="Search..." className="search" ></input>

      <TheaterTable />


    </div>
  );
}
