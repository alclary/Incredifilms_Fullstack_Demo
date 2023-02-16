import React from "react";

export default function TheaterConfirmDelete() {
  return (
    <div>
      <p>Are you sure you want to delete this record?</p>
      <table>
        <tr>
          <td>Theater ID</td>
          <td>Theater Name</td>
          <td># of Seats</td>
        </tr>
        <button>
          <a href="./Theater">Confirm</a>
        </button>
        <button>
          <a href="./Theater">Cancel</a>
        </button>
      </table>
    </div>
  );
}
