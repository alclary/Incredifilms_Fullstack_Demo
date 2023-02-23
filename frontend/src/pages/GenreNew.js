import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const GenreNew = () => {
  return (
    <>
      <article>
        <h3>Add a new genre</h3>
        <form className="form">
          <label>
            Genre Name
            <input type="text" required />
          </label>
          <br />

          <label>
            <input type="submit" />
          </label>
        </form>
      </article>

      <a href="./Genre">Return to all genres</a>
    </>
  );
};

export default GenreNew;
