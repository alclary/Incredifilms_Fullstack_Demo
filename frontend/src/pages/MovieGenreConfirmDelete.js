import React from "react";

export default function MovieGenreConfirmDelete() {
  return (
    <form className="form">
      {/* this page needs updating */}
      <p>Are you sure you want to delete this movie?</p>
      <label>
        Select a Movie
        <select>
          <option>None</option>
          <option>
            Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb
          </option>
          <option>Interstellar</option>
          <option>Amélie</option>
          <option>The Shining</option>
          <option>Everything Everywhere All at Once</option>
        </select>
      </label>
      <br />

      <label>
        Genre Name
        <select>
          <option>None</option>
          <option>Documentary</option>
          <option>Kids</option>
          <option>Family</option>
          <option>Comedy</option>
          <option>Independent</option>
        </select>
        <br />
        <button>
          <a href="./Genre">Confirm</a>
        </button>
        <button>
          <a href="./Genre">Cancel</a>
        </button>
      </label>
    </form>
  );
}
