import React from "react";
import ShowtimeTable from "../components/ShowtimeTable";
import ShowtimeNew from "./ShowtimeNew";
import { IoMdAdd } from "react-icons/io";

export default function Showtimes() {
  return (
    <div>
      <h3>Showtimes</h3>
      <p>Create, Retrieve, Update or Delete a Showtime</p>
      <a href="./ShowtimeNew" class="newPlus">
        Add new showtime
      </a>
      <input type="text" value="Search..." className="search"></input>

      <ShowtimeTable />
    </div>
  );
}
