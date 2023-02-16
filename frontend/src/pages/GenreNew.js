import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const GenreNew = () => {
  return (
    <>
      <article>
        <h2>New genre form</h2>
        <p>New genre alert</p>
        <form>
          <label>
            Genre Name:
            <input type="text" required />
          </label>
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
