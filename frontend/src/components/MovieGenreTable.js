import React from "react";
import MovieGenreRow from "./MovieGenreRow";
import { MdEdit, MdDeleteForever } from 'react-icons/md';


export default function MovieGenreTable({ moviegenres, onDelete, onEdit }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="">Movie Genre ID</th>
          <th className="">Movie Name</th>
          <th className="">Genre Name </th>

          <th className="">Edit Record</th>
          <th className="">Delete Record</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="">1</td>
          <td className="">
            Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb
          </td>
          <td className="">Comedy</td>
          <td className=""><a href="./MovieGenreUpdate" class="icons"><MdEdit /></a></td>
          <td className=""><a href="./MovieGenreConfirmDelete" class="icons"><MdDeleteForever/></a></td>
        </tr>
        <tr>
          <td className="">2</td>
          <td className="">
            Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb
          </td>
          <td className="">Action</td>
          <td className=""><a href="./MovieGenreUpdate" class="icons"><MdEdit /></a></td>
          <td className=""><a href="./MovieGenreConfirmDelete" class="icons"><MdDeleteForever/></a></td>
        </tr>
        <tr>
          <td className="">3</td>
          <td className="">Interstellar</td>
          <td className="">Sci-Fi</td>
          <td className=""><a href="./MovieGenreUpdate" class="icons"><MdEdit /></a></td>
          <td className=""><a href="./MovieGenreConfirmDelete" class="icons"><MdDeleteForever/></a></td>
        </tr>
        <tr>
          <td className="">4</td>
          <td className="">Interstellar</td>
          <td className="">Action</td>
          <td className=""><a href="./MovieGenreUpdate" class="icons"><MdEdit /></a></td>
          <td className=""><a href="./MovieGenreConfirmDelete" class="icons"><MdDeleteForever/></a></td>
        </tr>
        <tr>
          <td className="">5</td>
          <td className="">Interstellar</td>
          <td className="">Adventure</td>
          <td className=""><a href="./MovieGenreUpdate" class="icons"><MdEdit /></a></td>
          <td className=""><a href="./MovieGenreConfirmDelete" class="icons"><MdDeleteForever/></a></td>
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
