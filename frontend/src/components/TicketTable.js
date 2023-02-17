import React from "react";
import TicketRow from "./TicketRow";
import { MdEdit, MdDeleteForever } from "react-icons/md";


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
          <th className="">Edit Record</th>
          <th className="">Delete Record</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="">1</td>
          <td className="">2</td>
          <td className="">5</td>
          <td className="">9.00</td>
          <td className="">CREDIT</td>
          <td className=""><a href="./TicketUpdate" class="icons"><MdEdit/></a></td>
          <td className=""><a href="./TicketConfirmDelete" class="icons"><MdDeleteForever/></a></td>
        </tr>
        <tr>
          <td className="">2</td>
          <td className="">2</td>
          <td className="">6</td>
          <td className="">5.00</td>
          <td className="">CREDIT</td>
          <td className=""><a href="./TicketUpdate" class="icons"><MdEdit/></a></td>
          <td className=""><a href="./TicketConfirmDelete" class="icons"><MdDeleteForever/></a></td>
        </tr>
        <tr>
          <td className="">3</td>
          <td className="">8</td>
          <td className="">1</td>
          <td className="">9.00</td>
          <td className="">CASH</td>
          <td className=""><a href="./TicketUpdate" class="icons"><MdEdit/></a></td>
          <td className=""><a href="./TicketConfirmDelete" class="icons"><MdDeleteForever/></a></td>
        </tr>
        <tr>
          <td className="">4</td>
          <td className="">6</td>
          <td className="">1</td>
          <td className="">9.00</td>
          <td className="">DEBIT</td>
          <td className=""><a href="./TicketUpdate" class="icons"><MdEdit/></a></td>
          <td className=""><a href="./TicketConfirmDelete" class="icons"><MdDeleteForever/></a></td>
        </tr>
        <tr>
          <td className="">5</td>
          <td className="">3</td>
          <td className="">2</td>
          <td className="">9.00</td>
          <td className="">CREDIT</td>
          <td className=""><a href="./TicketUpdate" class="icons"><MdEdit/></a></td>
          <td className=""><a href="./TicketConfirmDelete" class="icons"><MdDeleteForever/></a></td>
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
