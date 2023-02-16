import React from "react";

export default function GenreUpdate() {
  return (
    <div>
      <p>Edit this record below</p>
      <table>
        <tr>
          <th>Genre ID</th>
          <th>Genre Name</th>
        </tr>
        <button>
          <a href="./Genre">Update</a>
        </button>

        <button>
          <a href="./Genre">Cancel</a>
        </button>
      </table>
    </div>
  );
}
