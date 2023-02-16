import React from "react";

export default function TicketUpdate() {
  return (
    <div>
      <p>Edit this record below</p>
      <table>
        <tr>
          <th>Ticket ID</th>
          <th>Customer ID</th>
          <th>Showtime ID</th>
          <th>Price</th>
          <th>Payment Method</th>
        </tr>
        <button>
          <a href="./Ticket">Confirm</a>
        </button>
        <button>
          <a href="./Ticket">Cancel</a>
        </button>
      </table>
    </div>
  );
}
