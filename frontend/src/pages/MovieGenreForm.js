import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

export const MovieGenreForm = (props) => {
  // State definitions
  //      If formType mode "edit", populate fields with record data to edit,
  //      else form field empty (for new entry)
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
        const genres = await axios.get(API_URL + "/genres/categories");
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
    props.formType === "edit" ? props.rowData.movie_id : ""
  );
  const [genre_id, set_genre_id] = useState(
    props.formType === "edit" ? props.rowData.genre_id : ""
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

  const handleGenreChange = async (e) => {
  set_genre_id(e.target.value)
  };

  // const handleGenreChange = async (e) => {
  //   set_genre_id(e.target.value)

  //   const is_checked = e.target.checked;


  //   if (is_checked) {
  //     set_genre_id([genreList, genre_id]);
  //   } else {
  //     const filteredList = genreList.filter((i) => i !== genre_id);
  //     set_genre_id([filteredList]);
  //   };




  return (
    <div>
      {/* Form title based on mode ("edit" or "new") */}
      {props.formType === "edit" ? (
        <h3>Update movie genre relationship</h3>
      ) : (
        <h3>Add a new movie genre relationship</h3>
      )}
      <form onSubmit={handleSubmit} className="pure-form pure-form-stacked">
        <label>Movie </label>

        <select
          name="movie"
          value={movie_id}
          onChange={handleMovieChange}
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
        <br />
        <label>Genre</label>

        {genreList.map((genre, i) => {
          return (
            <div key={genre.id}>
              <input
                type="checkbox"
                name="genres"
                value={genre.genre_id}
                onChange={handleGenreChange}
              ></input>
              <label>{genre.genre_name}</label>
            </div>
          );
        })}

        {/* <ul>



          {genreList.map((genre, i) => {
            return (
              <li key={i} value={genre.genre_id}  onSelect={handleGenreChange}
              >
                <input
                  type="checkbox"
                  id={genre.genre_id}
                  value={genre_id}
                />
                <label>{genre.genre_name}</label>
              </li>
            );
          })}
        </ul> */}

        <button type="submit" class="pure-button pure-button-primary">
          Submit
        </button>
        {/* Cancel button only displayed for "edit" form modality */}
        {props.formType === "edit" ? (
          <button
            type="button"
            class="pure-button pure-button"
            // Cancel button resets form to cancel edit attempt
            onClick={() => {
              props.resetForm();
            }}
          >
            Cancel
          </button>
        ) : undefined}
      </form>
    </div>
  );
};

export default MovieGenreForm;
