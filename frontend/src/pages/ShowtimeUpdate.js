import React from "react";

export default function ShowtimeUpdate() {
  return (
    <div>
      <p>Edit this record below</p>
      <table>
        <tr>
          <th>Showtime ID</th>
          <th>Showtime Date & Time</th>
          <th>Movie ID</th>
          <th>Theater ID</th>
        </tr>
        <button>
          <a href="./Showtime">Update</a>
        </button>

        <button>
          <a href="./Showtime">Cancel</a>
        </button>
      </table>
    </div>
  );
}
