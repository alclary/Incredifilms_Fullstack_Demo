import React from "react";
import CustomerRow from "./CustomerRow";

export default function CustomerTable({ customers, onDelete, onEdit }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="">Customer ID</th>
          <th className="">First Name</th>
          <th className="">Last Name</th>
          <th className="">Date of Birth</th>
          <th className="">Email</th>
          <th className="">edit</th>
          <th className="">del</th>
        </tr>
      </thead>
      <tbody>
      <tr>
      <td className=""></td>
          <td className=""></td>
          <td className=""></td>
          <td className=""></td>
          <td className=""></td>
          <td className=""><a href="">edit</a></td>
          <td className=""><a href="">del</a></td>
        </tr>
        <tr>
        <td className=""></td>
          <td className=""></td>
          <td className=""></td>
          <td className=""></td>
          <td className=""></td>
          <td className=""><a href="">edit</a></td>
          <td className=""><a href="">del</a></td>
        </tr>
        <tr>
        <td className=""></td>
          <td className=""></td>
          <td className=""></td>
          <td className=""></td>
          <td className=""></td>
          <td className=""><a href="">edit</a></td>
          <td className=""><a href="">del</a></td>
        </tr>
        <tr>
        <td className=""></td>
          <td className=""></td>
          <td className=""></td>
          <td className=""></td>
          <td className=""></td>
          <td className=""><a href="">edit</a></td>
          <td className=""><a href="">del</a></td>
        </tr>
        <tr>
        <td className=""></td>
          <td className=""></td>
          <td className=""></td>
          <td className=""></td>
          <td className=""></td>
          <td className=""><a href="">edit</a></td>
          <td className=""><a href="">del</a></td>
        </tr>

      </tbody>
      <tfoot></tfoot>
    </table>
  );
}


//        {customers.map((customer, i) => (
//  <CustomerRow
//  customer={customer}
 // onDelete={onDelete}
  //onEdit={onEdit}
 // key={i}
///>
//))}