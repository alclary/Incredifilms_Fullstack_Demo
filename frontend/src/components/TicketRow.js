import React from "react";
import { GrFormEdit, GrFormClose } from "react-icons/gr";

export default function TicketRow({ ticket, onDelete, onEdit }) {
  return (
    <tr>
      <td class="">{ticket.ticket_id}</td>
      <td class="">{ticket.customer_id}</td>
      <td class="">{ticket.showtime_id}</td>
      <td class="">{ticket.price}</td>
      <td class="">{ticket.payment_method}</td>

      <td class="icon">
        <GrFormEdit onClick={() => onEdit(ticket)} />
      </td>
      <td class="icon">
        <GrFormClose onClick={() => onDelete(ticket._id)} />
      </td>
    </tr>
  );
}
