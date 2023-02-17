import React from "react";
import CustomerRow from "./CustomerRow";
import { MdEdit, MdDeleteForever } from "react-icons/md";

export default function CustomerTable({ customers, onDelete, onEdit }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="">Customer ID</th>
          <th className="">First Name</th>
          <th className="">Last Name</th>
          <th className="">Date of Birth</th>
          <th className="">Email</th>
          <th className="">Edit Record</th>
          <th className="">Delete Record</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="">1</td>
          <td className="">AJ</td>
          <td className="">Styles</td>
          <td className="">1977-06-02</td>
          <td className="">AJ.Styles@bmail.com</td>
          <td className="">
            <a href="./CustomerUpdate"  class="icons">
              <MdEdit />
            </a>
          </td>
          <td className="">
            <a href="./CustomerConfirmDelete" class="icons">
              <MdDeleteForever />
            </a>
          </td>
        </tr>
        <tr>
          <td className="">2</td>
          <td className="">Stephanie</td>
          <td className="">Helmsley</td>
          <td className="">1976-09-24</td>
          <td className="">Stephanie.Helmsely@bmail.com</td>
          <td className="">
            <a href="./CustomerUpdate" class="icons">
              <MdEdit />
            </a>
          </td>
          <td className="">
            <a href="./CustomerConfirmDelete" class="icons">
              <MdDeleteForever />
            </a>
          </td>
        </tr>
        <tr>
          <td className="">3</td>
          <td className="">Alexa</td>
          <td className="">Bliss</td>
          <td className="">1991-08-09</td>
          <td className="">Alexa.Bliss@bmail.com</td>
          <td className="">
            <a href="./CustomerUpdate" class="icons">
              <MdEdit />
            </a>
          </td>
          <td className="">
            <a href="./CustomerConfirmDelete" class="icons">
              <MdDeleteForever />
            </a>
          </td>
        </tr>
        <tr>
          <td className="">4</td>
          <td className="">Booker</td>
          <td className="">T</td>
          <td className="">1965-03-01</td>
          <td className="">NULL</td>
          <td className="">
            <a href="./CustomerUpdate" class="icons">
              <MdEdit />
            </a>
          </td>
          <td className="">
            <a href="./CustomerConfirmDelete" class="icons">
              <MdDeleteForever />
            </a>
          </td>
        </tr>
        <tr>
          <td className="">5</td>
          <td className="">Jenna</td>
          <td className="">Andrade</td>
          <td className="">1989-11-03</td>
          <td className="">Jenna.Andrade@bmail.com</td>
          <td className="">
            <a href="./CustomerUpdate" class="icons">
              <MdEdit />
            </a>
          </td>
          <td className="">
            <a href="./CustomerConfirmDelete" class="icons">
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
