import React from "react";
import ShowtimeTable from "../components/ShowtimeTable";
import ShowtimeNew from "./ShowtimeNew";
import { IoMdAdd } from "react-icons/io";


export default function Showtimes() {
  return (
    <div>
      <h3>Showtimes </h3>
      <p>Needs capability to CREATE, RETRIEVE, UPDATE, DELETE</p>
      <a href="./ShowtimeNew" class="newPlus">Add new showtime</a>
      <ShowtimeTable />

    </div>
  );
}
