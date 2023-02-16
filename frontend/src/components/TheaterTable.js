import React from "react";
import TheaterRow from "./TheaterRow";

export default function TheaterTable({ theaters, onDelete, onEdit }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="">Theater ID</th>
          <th className="">Theater Name</th>
          <th className=""># of seats</th>
          <th className="">edit</th>
          <th className="">del</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="">1</td>
          <td className="">IncrediFilms Rogers Park</td>
          <td className="">300</td>
          <td className="">
            <a href="">edit</a>
          </td>
          <td className="">
            <a href="">del</a>
          </td>
        </tr>
        <tr>
          <td className="">2</td>
          <td className="">IncrediFilms Wicker Park</td>
          <td className="">500</td>
          <td className="">
            <a href="">edit</a>
          </td>
          <td className="">
            <a href="">del</a>
          </td>
        </tr>
        <tr>
          <td className="">3</td>
          <td className="">IncrediFilms Uptown</td>
          <td className="">300</td>
          <td className="">
            <a href="">edit</a>
          </td>
          <td className="">
            <a href="">del</a>
          </td>
        </tr>
        <tr>
          <td className="">4</td>
          <td className="">IncrediFilms Lincoln Square</td>
          <td className="">250</td>
          <td className="">
            <a href="">edit</a>
          </td>
          <td className="">
            <a href="">del</a>
          </td>
        </tr>
        <tr>
          <td className="">5</td>
          <td className="">IncrediFilms North Center</td>
          <td className="">250</td>
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
