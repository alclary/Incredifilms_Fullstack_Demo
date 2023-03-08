import React, { useState } from "react";
import axios from "axios";
import { useHistory, useNavigate } from "react-router-dom";

export const MovieNew = () => {
  const navigate = useNavigate();

  const [movie_name, set_movie_name] = useState("");
  const [runtime_min, set_runtime_min] = useState("");
  const [mpa_rating, set_mpa_rating] = useState("");
  const [movie_year, set_movie_year] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/movies", {
        movie_name,
        runtime_min,
        mpa_rating,
        movie_year,
      });
      console.log(res);
      // TODO replace with feedback of success and redirect to movies table
    } catch (error) {
      console.error(error);
      // TODO add user feedback of failure
    }
    navigate("/Movie");
  };

  const ratings = [
    { rating: "R", label: "R" },
    { rating: "NR", label: "NR" },
    { rating: "NC-17", label: "NC-17" },
    { rating: "G", label: "G" },
    { rating: "PG", label: "PG" },
    { rating: "PG-13", label: "PG-13" },
  ];

  const handleRatingChange = async (e) => {
    set_mpa_rating(e.target.value);
  };

  return (
    <>
      <article>
        <h3>Add a new Movie</h3>
        <form onSubmit={handleSubmit} className="pure-form pure-form-stacked">
          <label>
            Movie name
            <input
              type="text"
              required
              value={movie_name}
              onChange={(e) => set_movie_name(e.target.value)}
            />
          </label>
          <br />
          <label>
            Runtime (Mins)
            <input
              type="number"
              min="1"
              required
              value={runtime_min}
              onChange={(e) => set_runtime_min(e.target.value)}
            />
          </label>
          <br />
          <div>
            <label>MPA Rating</label>
            <select onChange={handleRatingChange}>
              <option type="radio" name="mpa_rating" value={mpa_rating.value}>
                {mpa_rating.label}
              </option>
              {ratings.map((mpa_rating) => (
                <option value={mpa_rating.value}>{mpa_rating.label}</option>
              ))}
            </select>
          </div>
          <br />
          <label>
            Year
            <input
              type="number"
              min="1900"
              max="2023"
              value={movie_year}
              onChange={(e) => set_movie_year(e.target.value)}
            />
          </label>
          <br />
          <button
            type="submit"
            className="pure-button pure-button-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </article>

      <a href="./Movie">Return to all movies</a>
    </>
  );
};

export default MovieNew;
