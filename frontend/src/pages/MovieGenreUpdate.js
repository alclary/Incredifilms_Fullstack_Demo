import React from "react";

export default function MovieGenreUpdate() {
  return (
    <>
      <p>Edit a movie genre relationship below</p>
      <form className="form">
        <label>
          Select a Movie:
          <select>
            <option>None</option>
            <option>
              Dr. Strangelove or: How I Learned to Stop Worrying and Love the
              Bomb
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
          <br />
          <input className="" type="checkbox" value="" name="" id="genreID1" />
          <label for="genreID1">Documentary</label>
          <br />
          <input className="" type="checkbox" value="" name="" id="genreID1" />
          <label for="genreID1">Kids</label>
          <br />
          <input className="" type="checkbox" value="" name="" id="genreID1" />
          <label for="genreID1">Family</label>
          <br />
          <input className="" type="checkbox" value="" name="" id="genreID1" />
          <label for="genreID1">Comedy</label>
          <br />
          <input className="" type="checkbox" value="" name="" id="genreID1" />
          <label for="genreID1">Independent</label>
        </label>
        <br />

        <button>
          <a href="./MovieGenre">Update</a>
        </button>
        <button>
          <a href="./MovieGenre">Cancel</a>
        </button>
      </form>
    </>
  );
}
