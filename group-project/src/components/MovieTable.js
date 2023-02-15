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
          <td className="">1</td>
          <td className="">Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb</td>
          <td className="">95</td>
          <td className="">PG</td>
          <td className="">1964</td>
          <td className="">
            <a href="">edit</a>
          </td>
          <td className="">
            <a href="">del</a>
          </td>
        </tr>
        <tr>
          <td className="">2</td>
          <td className="">Interstellar</td>
          <td className="">169</td>
          <td className="">PG-13</td>
          <td className="">2014</td>
          <td className="">
            <a href="">edit</a>
          </td>
          <td className="">
            <a href="">del</a>
          </td>
        </tr>
        <tr>
          <td className="">3</td>
          <td className="">Amélie</td>
          <td className="">122</td>
          <td className="">R</td>
          <td className="">2001</td>
          <td className="">
            <a href="">edit</a>
          </td>
          <td className="">
            <a href="">del</a>
          </td>
        </tr>
        <tr>
          <td className="">4</td>
          <td className="">The Shining</td>
          <td className="">146</td>
          <td className="">R</td>
          <td className="">1980</td>
          <td className="">
            <a href="">edit</a>
          </td>
          <td className="">
            <a href="">del</a>
          </td>
        </tr>
        <tr>
          <td className="">5</td>
          <td className="">Everything Everywhere All at Once</td>
          <td className="">139</td>
          <td className="">R</td>
          <td className="">2022</td>
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
