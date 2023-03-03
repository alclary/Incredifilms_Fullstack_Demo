import React, { useState } from "react";
import axios from "axios";
import { ReactWrapper } from "gridjs-react";

export const MovieForm = (props) => {
  console.log(props);

  async function newSubmit() {
    try {
      const res = await axios.post("http://localhost:3001/movies", {});
      console.log(res);
      // TODO replace with feedback of success and redirect to movies table
    } catch (error) {
      console.error(error);
      // TODO add user feedback of failure
    }
  }

  async function updateSubmit() {
    try {
      const res = await axios.put(
        `http://localhost:3001/movies/${props.row.movie_id}`,
        {
          movie_name,
          runtime_min,
          mpa_rating,
          movie_year,
        }
      );
      if (res.status === 200) {
        props.parentRerender();
      }
      // TODO replace with feedback of success and redirect to movies table
    } catch (error) {
      console.error(error);
      // TODO add user feedback of failure
    }
    props.showForm(false);
  }

  // State definitions
  const [movie_name, set_movie_name] = useState(
    props.row.movie_name ? props.row.movie_name : ""
  );
  const [runtime_min, set_runtime_min] = useState(
    props.row.runtime_min ? props.row.runtime_min : ""
  );
  const [mpa_rating, set_mpa_rating] = useState(
    props.row.mpa_rating ? props.row.mpa_rating : ""
  );
  const [movie_year, set_movie_year] = useState(
    props.row.movie_year ? props.row.movie_year : ""
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (props.row) {
      updateSubmit();
    } else {
      newSubmit();
    }
  };

  return (
    <div>
      {props.row ? <h3>Update movie</h3> : <h3>Add a new movie</h3>}

      <form onSubmit={handleSubmit} className="pure-form pure-form-stacked">
        <label>Movie name</label>
        <input
          type="text"
          id="stacked-fname"
          required
          value={movie_name}
          onChange={(e) => set_movie_name(e.target.value)}
        />
        <label>Runtime (mins)</label>
        <input
          // TODO DATA VALIDATION

          type="number"
          required
          value={runtime_min}
          onChange={(e) => set_runtime_min(e.target.value)}
        />
        <label>MPA rating</label>
        <input
          // TODO DATA VALIDATION
          type="text"
          required
          value={mpa_rating}
          onChange={(e) => set_mpa_rating(e.target.value)}
        />
        <label>Year</label>
        <input
          // TODO DATA VALIDATION

          type="number"
          value={movie_year}
          onChange={(e) => set_movie_year(e.target.value)}
        />
        <button type="submit" class="pure-button pure-button-primary">
          Submit
        </button>
        <button
          type="button"
          class="pure-button pure-button"
          onClick={() => {
            props.showForm(false);
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default MovieForm;
