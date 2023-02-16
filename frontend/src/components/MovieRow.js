import React from "react";
import { GrFormEdit, GrFormClose } from "react-icons/gr";

export default function MovieRow({ movie, onDelete, onEdit }) {
  return (
    <tr>
      <td class="">{movie.movie_id}</td>
      <td class="">{movie.movie_name}</td>
      <td class="">{movie.runtime_min}</td>
      <td class="">{movie.mpa_rating}</td>
      <td class="">{movie.movie_year}</td>

      <td class="icon">
        <GrFormEdit onClick={() => onEdit(movie)} />
      </td>
      <td class="icon">
        <GrFormClose onClick={() => onDelete(movie._id)} />
      </td>
    </tr>
  );
}
