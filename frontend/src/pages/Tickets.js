import React from "react";
import TicketTable from "../components/TicketTable";
import TicketNew from "./TicketNew";

export default function Tickets() {
  return (
    <div>
      <h3>Tickets</h3>
      <p>Needs capability to CREATE, RETRIEVE, UPDATE, DELETE</p>
      <a href="./TicketNew" class="newPlus">
        Add new ticket
      </a>
      <TicketTable />
    </div>
  );
}
