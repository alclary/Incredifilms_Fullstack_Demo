import React from "react";

export default function ShowtimeConfirmDelete() {
  return (
    <div>
      <p>Are you sure you want to delete this record?</p>
      <table>
        <tr>
          <td>Showtime ID</td>
          <td>Showtime Date & Time</td>
          <td>Movie ID</td>
          <td>Theater ID</td>
        </tr>
        <button>
          <a href="./Showtime">Confirm</a>
        </button>
        <button>
          <a href="./Showtime">Cancel</a>
        </button>
      </table>
    </div>
  );
}
