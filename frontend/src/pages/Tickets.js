import React from "react";
import TicketTable from "../components/TicketTable";
import TicketNew from "./TicketNew";

export default function Tickets() {
  return (
    <div>
      <h3>Tickets</h3>
      <p>Create, Retrieve, Update or Delete a Ticket</p>
      <a href="./TicketNew" class="newPlus">
        Add new ticket
      </a>
      <input type="text" value="Search..." className="search"></input>

      <TicketTable />
    </div>
  );
}
