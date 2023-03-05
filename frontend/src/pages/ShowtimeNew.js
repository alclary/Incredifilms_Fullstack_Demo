import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const ShowtimeNew = () => {

  const [] = useState("");
  const [] = useState("");
  const [] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO implement POST request to API
};


  return (
    <>
      <article>
        <h3>Add a new showtime</h3>
        <form className="form">
          <label>
            Date & Time
            <input type="datetime-local" required />
          </label>
          <br />

          <label>
            Movie
            <input type="text" required />
          </label>
          <br />

          <label>
            Theater
            <input type="text" required />
          </label>
          <br />

          <button type="submit" className="pure-button pure-button-primary">
                    Submit
                </button>
        </form>
      </article>

      <a href="./Showtime">Return to all showtimes</a>
    </>
  );
};

export default ShowtimeNew;
