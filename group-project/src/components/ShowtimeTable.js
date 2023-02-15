import React from "react";
import ShowtimeRow from "./ShowtimeRow";

export default function ShowtimeTable({ showtimes, onDelete, onEdit }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="">Showtime ID</th>
          <th className="">Showtime Date & Time</th>
          <th className="">Movie ID</th>
          <th className="">Theater ID</th>
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
          <td className=""><a href="">edit</a></td>
          <td className=""><a href="">del</a></td>
        </tr>
        <tr>
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
          <td className=""><a href="">edit</a></td>
          <td className=""><a href="">del</a></td>
        </tr>
        <tr>
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