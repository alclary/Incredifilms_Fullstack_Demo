import React from "react";

export default function ShowtimeUpdate() {
  return (
    <div>
      <p>Edit this record below</p>
      <table>
        <tr>
          <td>Showtime ID</td>
          <td>Showtime Date & Time</td>
          <td>Movie ID</td>
          <td>Theater ID</td>
        </tr>
        <button>
          <a href="./Showtime">Update</a>
        </button>
      </table>
    </div>
  );
}
