import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const ShowtimeNew = () => {
  return (
    <>
      <article>
        <h2>New showtime form</h2>
        <p>New showtime alert</p>
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

          <label>
            <input type="submit" />
          </label>
        </form>
      </article>

      <a href="./Showtime">Return to all showtimes</a>
    </>
  );
};

export default ShowtimeNew;
