import React from "react";
import TicketTable from "../components/TicketTable";
import TicketNew from "./TicketNew";

export default function Tickets() {
  return (
    <div>
      <p>Tickets</p>
      <p>Needs capability to CREATE, RETRIEVE, UPDATE, DELETE</p>
      <a href="./TicketNew">New ticket</a>
      <TicketTable />

    </div>
  );
}
