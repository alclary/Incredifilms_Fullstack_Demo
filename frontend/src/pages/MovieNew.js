import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const MovieNew = () => {
  return (
    <>
      <article>
        <h2>New movie form</h2>
        <p>New movie alert</p>
        <form>
          <label>
            Movie name:
            <input type="text" required />
          </label>

          <label>
            Runtime (Mins):
            <input type="number" min="1" required />
          </label>
          <label>
            MPA Rating
            <input type="radio" id="" name="" value="PG-13" />
            <label>PG-13</label>
            <input type="radio" id="" name="" value="PG-13" />
            <label>PG</label>
            <input type="radio" id="" name="" value="PG-13" />
            <label>R</label>
          </label>

          <label>
            Year
            <input type="number" min="1900" max="2023" />
          </label>

          <label>
            <input type="submit" />
          </label>
        </form>
      </article>

      <a href="./Movie">Return to all movies</a>
    </>
  );
};

export default MovieNew;
