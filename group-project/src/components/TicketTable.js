import React from "react";
import TicketRow from "./TicketRow";

export default function TicketTable({ tickets, onDelete, onEdit }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="">Ticket ID</th>
          <th className="">Customer ID</th>
          <th className="">Showtime ID</th>
          <th className="">Price</th>
          <th className="">Payment Method</th>
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
          <td className="">
            <a href="">edit</a>
          </td>
          <td className="">
            <a href="">del</a>
          </td>
        </tr>
        <tr>
          <td className=""></td>
          <td className=""></td>
          <td className=""></td>
          <td className=""></td>
          <td className=""></td>
          <td className="">
            <a href="">edit</a>
          </td>
          <td className="">
            <a href="">del</a>
          </td>
        </tr>
        <tr>
          <td className=""></td>
          <td className=""></td>
          <td className=""></td>
          <td className=""></td>
          <td className=""></td>
          <td className="">
            <a href="">edit</a>
          </td>
          <td className="">
            <a href="">del</a>
          </td>
        </tr>
        <tr>
          <td className=""></td>
          <td className=""></td>
          <td className=""></td>
          <td className=""></td>
          <td className=""></td>
          <td className="">
            <a href="">edit</a>
          </td>
          <td className="">
            <a href="">del</a>
          </td>
        </tr>
        <tr>
          <td className=""></td>
          <td className=""></td>
          <td className=""></td>
          <td className=""></td>
          <td className=""></td>
          <td className="">
            <a href="">edit</a>
          </td>
          <td className="">
            <a href="">del</a>
          </td>
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
