import React from "react";
import TicketRow from "./TicketRow";
import { MdEdit, MdDeleteForever } from "react-icons/md";

export default function TicketTable({ tickets, onDelete, onEdit }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="">Ticket ID</th>
          <th className="">Customer Name</th>
          <th className="">Showtime Date & Time</th>
          <th className="">Movie Name</th>
          <th className="">Theater Name</th>
          <th className="">Price</th>
          <th className="">Payment Method</th>
          <th className="">Edit Record</th>
          <th className="">Delete Record</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="">1</td>
          <td className="">Stephanie Helmsley</td>
          <td className="">2023-02-14 18:00:00</td>
          <td className="">Bee Movie</td>
          <td className="">IncrediFilms Rogers Park</td>
          <td className="">9.00</td>
          <td className="">CREDIT</td>
          <td className="">
            <a href="./TicketUpdate" class="icons">
              <MdEdit />
            </a>
          </td>
          <td className="">
            <a href="./TicketConfirmDelete" class="icons">
              <MdDeleteForever />
            </a>
          </td>
        </tr>
        <tr>
          <td className="">2</td>
          <td className="">Stephanie Helmsley</td>
          <td className="">2023-02-16 12:00:00</td>
          <td className="">Amélie</td>
          <td className="">IncrediFilms North Center</td>
          <td className="">5.00</td>
          <td className="">CREDIT</td>
          <td className="">
            <a href="./TicketUpdate" class="icons">
              <MdEdit />
            </a>
          </td>
          <td className="">
            <a href="./TicketConfirmDelete" class="icons">
              <MdDeleteForever />
            </a>
          </td>
        </tr>
        <tr>
          <td className="">3</td>
          <td className="">Em Patterson</td>
          <td className="">2023-02-10 16:00:00</td>
          <td className="">
            Dr. Strangelove or: How I Learned to Stop Worrying...
          </td>
          <td className="">IncrediFilms Rogers Park</td>
          <td className="">9.00</td>
          <td className="">CASH</td>
          <td className="">
            <a href="./TicketUpdate" class="icons">
              <MdEdit />
            </a>
          </td>
          <td className="">
            <a href="./TicketConfirmDelete" class="icons">
              <MdDeleteForever />
            </a>
          </td>
        </tr>
        <tr>
          <td className="">4</td>
          <td className="">Alexa Bliss</td>
          <td className="">2023-02-10 15:00:00</td>
          <td className="">Interstellar</td>
          <td className="">IncrediFilms Lincoln Square</td>
          <td className="">9.00</td>
          <td className="">DEBIT</td>
          <td className="">
            <a href="./TicketUpdate" class="icons">
              <MdEdit />
            </a>
          </td>
          <td className="">
            <a href="./TicketConfirmDelete" class="icons">
              <MdDeleteForever />
            </a>
          </td>
        </tr>
        <tr>
          <td className="">5</td>
          <td className="">Booker T</td>
          <td className="">2023-02-14 18:00:00</td>
          <td className="">Bee Movie</td>
          <td className="">IncrediFilms Wicker Park</td>
          <td className="">9.00</td>
          <td className="">CREDIT</td>
          <td className="">
            <a href="./TicketUpdate" class="icons">
              <MdEdit />
            </a>
          </td>
          <td className="">
            <a href="./TicketConfirmDelete" class="icons">
              <MdDeleteForever />
            </a>
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
