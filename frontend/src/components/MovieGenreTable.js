import React from "react";
import MovieGenreRow from "./MovieGenreRow";

export default function MovieGenreTable({ moviegenres, onDelete, onEdit }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="">Movie Genre ID</th>
          <th className="">Movie ID </th>
          <th className="">Movie Name</th>
          <th className="">Genre ID </th>
          <th className="">Genre Name </th>

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
