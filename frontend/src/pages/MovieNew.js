import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const MovieNew = () => {

  const [] = useState("");
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
        <h3>Add a new Movie</h3>
        <form className="form">
          <label>
            Movie name
            <input type="text" required />
          </label>
          <br />
          <label>
            Runtime (Mins)
            <input type="number" min="1" required />
          </label>
          <br />
          <label>
            MPA Rating
            <input type="radio" id="rating1" name="rating" value="PG-13" />
            <label>PG-13</label>
            <input type="radio" id="rating2" name="rating" value="PG-13" />
            <label>PG</label>
            <input type="radio" id="rating3" name="rating" value="PG-13" />
            <label>R</label>
          </label>
          <br />
          <label>
            Year
            <input type="number" min="1900" max="2023" />
          </label>
          <br />
          <button type="submit" className="pure-button pure-button-primary">
                    Submit
                </button>
        </form>
      </article>

      <a href="./Movie">Return to all movies</a>
    </>
  );
};

export default MovieNew;
