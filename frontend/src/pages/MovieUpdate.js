import React from "react";

export default function MovieUpdate() {
  return (
    <div>
      <p>Edit this record below</p>

      <table>
        <tr>
          <td>Movie ID</td>
          <td>Movie Name</td>
          <td>Runtime (Mins)</td>
          <td>MPA Rating</td>
          <td>Year</td>
        </tr>
        <button>
          <a href="./Movie">Update</a>
        </button>

      </table>
    </div>
  );
}
