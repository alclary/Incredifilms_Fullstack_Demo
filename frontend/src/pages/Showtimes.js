import React from "react";
import ShowtimeTable from "../components/ShowtimeTable";
import ShowtimeNew from "./ShowtimeNew";

export default function Showtimes() {
  return (
    <div>
      <p>Showtimes</p>
      <p>Needs capability to CREATE, RETRIEVE, UPDATE, DELETE</p>
      <a href="./ShowtimeNew">New showtime</a>
      <ShowtimeTable />

    </div>
  );
}
