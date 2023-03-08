import React, { useState } from "react";
import { useHistory, useNavigate } from "react-router-dom";

export const TicketNew = () => {
  const navigate = useNavigate();

  const [] = useState("");
  const [] = useState("");
  const [] = useState("");
  const [] = useState("");
  const [] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO implement POST request to API

    navigate("/Ticket");
  };

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
          <button
            type="submit"
            className="pure-button pure-button-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </article>

      <a href="./Ticket">Return to all tickets</a>
    </>
  );
};

export default TicketNew;
