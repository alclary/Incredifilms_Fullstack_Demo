import React from "react";

export default function CustomerUpdate() {
  return (
    <div>
      <p>Edit this record customer below</p>
      <table>
        <tr>
          <th>Customer ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
          <th>Email</th>

        </tr>
        <button>
          <a href="./Customer">Update</a>
        </button>

        <button>
          <a href="./Customer">Cancel</a>
        </button>

      </table>
    </div>
  );
}
