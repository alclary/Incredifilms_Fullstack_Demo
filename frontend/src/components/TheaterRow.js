import React from "react";
import { GrFormEdit, GrFormClose } from "react-icons/gr";

export default function TheaterRow({ theater, onDelete, onEdit }) {
  return (
    <tr>
      <td class="">{theater.theater_id}</td>
      <td class="">{theater.theater_name}</td>
      <td class="">{theater.no_of_seats}</td>
      <td class="icon">
        <GrFormEdit onClick={() => onEdit(theater)} />
      </td>
      <td class="icon">
        <GrFormClose onClick={() => onDelete(theater._id)} />
      </td>
    </tr>
  );
}
