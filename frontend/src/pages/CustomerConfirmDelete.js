import React from "react";

export default function CustomerConfirmDelete() {
  return (
    <div>
      <p>Are you sure you want to delete this record?</p>
      <table>
        <tr>
          <td>Customer ID</td>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Date of Birth</td>
          <td>Email</td>
        </tr>
        <button>
          <a href="./Customer">Confirm</a>
        </button>
        <button>
          <a href="./Customer">Cancel</a>
        </button>
      </table>
    </div>
  );
}
