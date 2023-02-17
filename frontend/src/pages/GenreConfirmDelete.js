import React from "react";

export default function GenreConfirmDelete() {
  return (
    <div>
      <p>Are you sure you want to delete this record?</p>
      <table>
        <tr>
          <td>Genre ID</td>
          <td>Genre Name</td>
        </tr>
        <button>
          <a href="./Genre">Confirm</a>
        </button>
        <button>
          <a href="./Genre">Cancel</a>
        </button>
      </table>
    </div>
  );
}
