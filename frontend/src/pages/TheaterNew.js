import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const TheaterNew = () => {
  return (
    <>
      <article>
        <h2>New theater form</h2>
        <p>New theater alert</p>
        <form className="form">
          <label>
            Theater Name
            <input type="text" required />
          </label>
          <br/>
          <label>
            Number of Seats
            <input type="number" min="0" required />
          </label>
          <br/>

          <label>
            <input type="submit" />
          </label>
                    <br/>

        </form>
      </article>

      <a href="./Theater">Return to all theaters</a>
    </>
  );
};

export default TheaterNew;
