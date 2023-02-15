import React from "react";
import MovieRow from "./MovieRow";

export default function MovieTable({ movies, onDelete, onEdit }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="">Movie ID</th>
          <th className="">Movie Name</th>
          <th className="">Runtime (Mins)</th>
          <th className="">MPA Rating</th>
          <th className="">Year</th>
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
