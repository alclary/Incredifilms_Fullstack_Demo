import React from "react";

export default function TheaterUpdate() {
  return (
    <div>
      <p>Edit this theater record below</p>
      <table>
        <tr>
          <th>Theater ID</th>
          <th>Theater Name</th>
          <th># of Seats</th>
        </tr>
        <button>
          <a href="./Theater">Update</a>
        </button>

        <button>
          <a href="./Theater">Cancel</a>
        </button>
      </table>
    </div>
  );
}
