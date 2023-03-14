import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

export const MovieGenreForm = (props) => {
  console.log(props);

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


  async function newSubmit() {
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
  }


  // State definitions
  const [movie_id, set_movie_id] = useState(
    props.row.movie_id ? props.row.movie_id : ""
  );
  const [genre_id, set_genre_id] = useState(
    props.row.genre_id ? props.row.genre_id : ""
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
{
      newSubmit();
    }
  };

  const handleMovieChange = async (e) => {
    set_movie_id(e.target.value);
  };

  return (
    <div>
      {props.row ? <h3>Update showtime</h3> : <h3>Add a new showtime</h3>}

      <form onSubmit={handleSubmit} className="pure-form pure-form-stacked">
        {/* <label for="showtime_date_time">Datetime</label>
        <input
          type="datetime-local"
          id="showtime_date_time"
          required
          value={showtime_date_time}
          onChange={(e) => set_showtime_date_time(e.target.value)}
        ></input>

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
        <label>
          Theater
          <select
            name="movie"
            value={theater_id}
            onChange={(e) => {
              set_theater_id(e.target.value);
            }}
            required
          >
            <option disabled selected value="">
              -- select an option --
            </option>
            {theaterList.map((theater, i) => {
              return (
                <option key={i} value={theater.theater_id}>
                  {theater.theater_name}
                </option>
              );
            })}
          </select>
        </label> */}
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

export default MovieGenreForm;
