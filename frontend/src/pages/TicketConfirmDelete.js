import React from "react";

export default function TicketConfirmDelete() {
  return (
    <div>
      <p>Are you sure you want to delete this record?</p>
      <table>
        <tr>
          <td>Ticket ID</td>
          <td>Customer ID</td>
          <td>Showtime ID</td>
          <td>Price</td>
          <td>Payment Method</td>
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
