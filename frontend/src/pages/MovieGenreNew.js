import React, { useState } from "react";
import { useHistory } from "react-router-dom";


export const MovieGenreNew = () => {
  return (
    <>
    <form>
      <label>
        Add a new movie-genre:
      </label>

      <label>
        Select a Movie:
        <select>
          <option>
            Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb
          </option>
          <option>Interstellar</option>
          <option>Amélie</option>
          <option>The Shining</option>
          <option>Everything Everywhere All at Once</option>
        </select>
      </label>

      <label>
        Genre Name
        <select>
          <option>Documentary</option>
          <option>Kids</option>
          <option>Family</option>
          <option>Comedy</option>
          <option>Independent</option>
        </select>
      </label>
    </form>

<a href="./MovieGenre">Return to all movie genres</a>
</>
  );
}

export default MovieGenreNew;