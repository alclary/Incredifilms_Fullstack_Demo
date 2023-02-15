import React from "react";
import TicketTable from "../components/TicketTable";

export default function Tickets() {
  return (
    <div>
      <p>Tickets</p>
      <p>Needs capability to CREATE, RETRIEVE, UPDATE, DELETE</p>
      <a href="">New ticket</a>
      <TicketTable />
    </div>
  );
}
