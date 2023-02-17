import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const TicketNew = () => {
  return (
    <>
      <article>
        <h2>New ticket form</h2>
        <p>New ticket alert</p>
        <form>
          <label>
            Customer ID:
            <input type="number" min="0" required />
          </label>
          <label>
            Showtime ID:
            <input type="number" min="0" required />
          </label>
          <label>
            Price
            <input type="number" min="0" required />
          </label>
          <label>
            Payment method
            <select>
              <option>CASH</option>
              <option>CREDIT</option>
              <option>DEBIT</option>
            </select>
          </label>
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