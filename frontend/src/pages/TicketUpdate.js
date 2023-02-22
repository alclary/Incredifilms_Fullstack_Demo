import React from "react";

export default function TicketUpdate() {
  return (
    <div>
      <p>Edit this ticket record below</p>
      <table>
        <tr>
          <th>Ticket ID</th>
          <th>Customer Name</th>
          <th>Showtime Date & Time</th>
          <th>Movie Name</th>
          <th>Theater Name</th>
          <th>Price</th>
          <th>Payment Method</th>
        </tr>

        <tr>
          <td className="">
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </td>
        <td className="">
          <select>
            <option>AJ Styles</option>
            <option>Stephanie Helmsley</option>
            <option>Booker T</option>
            <option>Alexa Bliss</option>
          </select>
</td>
<td className="">

          <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            </td>
          <td className="">
            <select>
              <option>Bee Movie</option>
              <option>Everything Everywhere All At Once</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </td>
          <td className="">
            <select>
              <option>IncrediFilms Rogers Park	</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </td>

          <td className="">
            <select>
              <option>5.00</option>
              <option>9.00</option>
            </select>
          </td>
          <select>
            <option>CASH</option>
            <option>CREDIT</option>
            <option>DEBIT</option>
          </select>
        </tr>
      </table>

      <button>
        <a href="./Ticket">Confirm</a>
      </button>
      <button>
        <a href="./Ticket">Cancel</a>
      </button>
    </div>
  );
}
