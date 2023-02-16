import React from "react";

export default function MovieUpdate() {
  return (
    <div>
      <p>Edit this record below</p>

      <table>
        <tr>
          <th>Movie ID</th>
          <th>Movie Name</th>
          <th>Runtime (Mins)</th>
          <th>MPA Rating</th>
          <th>Year</th>
        </tr>
        <button>
          <a href="./Movie">Update</a>
        </button>

        <button>
          <a href="./Movie">Cancel</a>
        </button>

      </table>
    </div>
  );
}
