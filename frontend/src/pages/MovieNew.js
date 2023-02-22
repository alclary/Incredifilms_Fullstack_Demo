import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const MovieNew = () => {
  return (
    <>
      <article>
        {/* <h2>New movie form</h2> */}
        <p>Add a new Movie</p>
        <form className="form">
          <label>
            Movie name
            <input type="text" required />
          </label>
          <br/>
          <label>
            Runtime (Mins)
            <input type="number" min="1" required />
          </label>
          <br/>
          <label>
            MPA Rating
            <input type="radio" id="rating1" name="rating" value="PG-13" />
            <label>PG-13</label>
            <input type="radio" id="rating2" name="rating" value="PG-13" />
            <label>PG</label>
            <input type="radio" id="rating3" name="rating" value="PG-13" />
            <label>R</label>
          </label>
          <br/>
          <label>
            Year
            <input type="number" min="1900" max="2023" />
          </label>
          <br/>
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
