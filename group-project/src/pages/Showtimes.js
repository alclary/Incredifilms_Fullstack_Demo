import React from "react";
import ShowtimeTable from "../components/ShowtimeTable";

export default function Showtimes() {
  return (
    <div>
      <p>Showtimes</p>
      <p>Needs capability to CREATE, RETRIEVE, UPDATE, DELETE</p>
      <a href="">New showtime</a>
      <ShowtimeTable />
    </div>
  );
}
