import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

export const MovieGenreNew = () => {
  const navigate = useNavigate();

  const [movieList, setMovieList] = useState([]);
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    async function getMovieList() {
      try {
        const movies = await axios.get(API_URL + "/movies/titles");
        setMovieList(movies.data.data);
      } catch (error) {
        console.error(error);
        // TODO add user feedback of failure
      }
    }
    async function getGenreList() {
      try {
        const genres = await axios.get(API_URL + "/genres/names");
        setGenreList(genres.data.data);
      } catch (error) {
        console.error(error);
        // TODO add user feedback of failure
      }
    }

    getGenreList();
    getMovieList();
  }, []);

  const [movie_id, set_movie_id] = useState("");
  const [genre_id, set_genre_id] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(API_URL + "/moviegenres", {
        movie_id,
        genre_id,
      });
      console.log(res);
      // TODO replace with feedback of success and redirect to moviegenres table
    } catch (error) {
      console.error(error);
      // TODO add user feedback of failure
    }

    navigate("/MovieGenre");
  };

  return (
    <>
      <h3>Assign a Movie to its Genre(s)</h3>

      <form className="form">
        <label>
          Movie
          <select
            name="movie"
            value={movie_id}
            onChange={(e) => {
              set_movie_id(e.target.value);
            }}
            required
          >
            <option disabled selected value="">
              -- select an option --
            </option>
            {movieList.map((movie, i) => {
              return (
                <option key={i} value={movie.movie_id}>
                  {movie.movie_name}
                </option>
              );
            })}
          </select>
        </label>
        <br />
        <label>
          Genre
          <ul>
            {genreList.map((genre, i) => {
              return (
                <li key={i} value={genre.genre_id}>
                  <input
                    type="checkbox"
                    id={genre.genre_id}
                    // name={genre.genre_name}
                    value={genre.genre_id}
                  />
                  <label>{genre.genre_name}</label>
                </li>
              );
            })}
          </ul>
          {/* <select
            name="genre"
            value={genre_id}
            onChange={(e) => {
              set_genre_id(e.target.value);
            }}
            required
          >
            <option disabled selected value="">
              -- select an option --
            </option>
            {genreList.map((genre, i) => {
              return (
                <option key={i} value={genre.genre_id}>
                  {genre.genre_name}
                </option>
              );
            })}
          </select> */}
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

      <a href="./MovieGenre">Return to all movie genres</a>
    </>
  );
};

export default MovieGenreNew;
