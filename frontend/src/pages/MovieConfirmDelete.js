import React from "react";

export default function MovieConfirmDelete() {
  return (
    <div>
      <p>Are you sure you want to delete this movie?</p>
      <table>
        <tr>
          <td>Movie ID</td>
          <td>Movie Name</td>
          <td>Runtime (Mins)</td>
          <td>MPA Rating</td>
          <td>Year</td>
        </tr>
        <button>
          <a href="./Movie">Confirm</a>
        </button>
        <button>
          <a href="./Movie">Cancel</a>
        </button>
      </table>
    </div>
  );
}
