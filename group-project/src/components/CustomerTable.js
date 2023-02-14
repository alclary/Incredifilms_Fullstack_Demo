import React from "react";
import CustomerRow from "./CustomerRow";

export default function CustomerTable({ customers, onDelete, onEdit }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th class="tdtext">Name</th>
          <th class="tdnum">Reps</th>
          <th class="tdnum">Weight/</th>
          <th class="tdtext">Unit</th>
          <th class="tdtext">Date</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer, i) => (
          <CustomerRow
            customer={customer}
            onDelete={onDelete}
            onEdit={onEdit}
            key={i}
          />
        ))}
      </tbody>
      <tfoot></tfoot>
    </table>
  );
}
