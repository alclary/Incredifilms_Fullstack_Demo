import React from "react";
import { GrFormEdit, GrFormClose } from "react-icons/gr";

export default function CustomerRow({ customer, onDelete, onEdit }) {
  return (
    <tr>
      <td class="">{customer.customer_id}</td>
      <td class="">{customer.first_name}</td>
      <td class="">{customer.last_name}</td>
      <td class="">{customer.dob}</td>
      <td class="">{customer.dob.toLocaleString("en-US").substring(0, 10)}</td>
      <td class="icon">
        <GrFormEdit onClick={() => onEdit(customer)} />
      </td>
      <td class="icon">
        <GrFormClose onClick={() => onDelete(customer._id)} />
      </td>
    </tr>
  );
}
