import React from "react";
import GenreRow from "./GenreRow";
import { MdEdit, MdDeleteForever } from 'react-icons/md';


export default function GenreTable({ genres, onDelete, onEdit }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="">Genre ID</th>
          <th className="">Genre Name</th>
          <th className="">Edit Record</th>
          <th className="">Delete Record</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="">1</td>
          <td className="">Documentary</td>
          <td className="">
            <a href="./GenreUpdate"  class="icons"><MdEdit/></a>
          </td>
          <td className="">
            <a href="./GenreConfirmDelete" class="icons"><MdDeleteForever/></a>
          </td>
        </tr>
        <tr>
          <td className="">2</td>
          <td className="">Kids</td>
          <td className="">
            <a href="./GenreUpdate" class="icons"><MdEdit/></a>
          </td>
          <td className="">
            <a href="./GenreConfirmDelete" class="icons"><MdDeleteForever/></a>
          </td>
        </tr>
        <tr>
          <td className="">3</td>
          <td className="">Family</td>
          <td className="">
            <a href="./GenreUpdate" class="icons"><MdEdit/></a>
          </td>
          <td className="">
            <a href="./GenreConfirmDelete" class="icons"><MdDeleteForever/></a>
          </td>
        </tr>
        <tr>
          <td className="">4</td>
          <td className="">Comedy</td>
          <td className="">
            <a href="./GenreUpdate" class="icons"><MdEdit/></a>
          </td>
          <td className="">
            <a href="./GenreConfirmDelete" class="icons"><MdDeleteForever/></a>
          </td>
        </tr>
        <tr>
          <td className="">5</td>
          <td className="">Independent</td>
          <td className="">
            <a href="./GenreUpdate" class="icons"><MdEdit/></a>
          </td>
          <td className="">
            <a href="./GenreConfirmDelete" class="icons"><MdDeleteForever/></a>
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
