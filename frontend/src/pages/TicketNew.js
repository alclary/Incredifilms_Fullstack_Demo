import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const TicketNew = () => {
  return (
    <>
      <article>
        <h3>Add a new ticket</h3>
        <form className="form">
          <label>
            Customer ID
            <input type="number" min="0" required />
          </label>
          <br />
          <label>
            Showtime ID
            <input type="number" min="0" required />
          </label>
          <br />
          <label>
            Price
            <input type="number" min="0" required />
          </label>
          <br />
          <label>
            Payment method
            <select>
              <option>CASH</option>
              <option>CREDIT</option>
              <option>DEBIT</option>
            </select>
          </label>
          <br />
          <label>
            <input type="submit" />
          </label>
        </form>
      </article>

      <a href="./Ticket">Return to all tickets</a>
    </>
  );
};

export default TicketNew;
