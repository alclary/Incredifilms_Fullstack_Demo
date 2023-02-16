import React from "react";
import { GrFormEdit, GrFormClose } from "react-icons/gr";

export default function ShowtimeRow({ showtime, onDelete, onEdit }) {
  return (
    <tr>
      <td class="">{showtime.showtime_id}</td>
      <td class="">{showtime.showtime_date_time}</td>
      <td class="">{showtime.movie_id}</td>
      <td class="">{showtime.theater_id}</td>

      <td class="icon">
        <GrFormEdit onClick={() => onEdit(showtime)} />
      </td>
      <td class="icon">
        <GrFormClose onClick={() => onDelete(showtime._id)} />
      </td>
    </tr>
  );
}
