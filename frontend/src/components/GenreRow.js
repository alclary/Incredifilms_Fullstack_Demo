import React from "react";
import { GrFormEdit, GrFormClose } from "react-icons/gr";

export default function GenreRow({ genre, onDelete, onEdit }) {
  return (
    <tr>
      <td class="">{genre.genre_id}</td>
      <td class="">{genre.genre_name}</td>
      <td class="icon">
        <GrFormEdit onClick={() => onEdit(genre)} />
      </td>
      <td class="icon">
        <GrFormClose onClick={() => onDelete(genre._id)} />
      </td>
    </tr>
  );
}
