import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

export const ShowtimeForm = (props) => {
  console.log(props);

  const [movieList, setMovieList] = useState([]);
  const [theaterList, setTheaterList] = useState([]);

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
    async function getTheaterList() {
      try {
        const theaters = await axios.get(API_URL + "/theaters/locations");
        setTheaterList(theaters.data.data);
      } catch (error) {
        console.error(error);
        // TODO add user feedback of failure
      }
    }

    getTheaterList();
    getMovieList();
  }, []);

  async function getMovieOptions() {
    try {
      const res = await axios.get(API_URL + `/movies/${props.row.movie_id}`);
      const data = res.data;

      const movie_options = data.map((d) => ({
        value: d.movie_id,
        label: d.movie_name,
      }));
      this.setState({ selectMovie: movie_options });

      if (res.status === 200) {
        props.parentRerender();
      }
      // TODO replace with feedback of success and redirect to movies table
    } catch (error) {
      console.error(error);
      // TODO add user feedback of failure
    }
  }

  //   async function getTheaterOptions()
  //   {const res = await axios.get(API_URL + `/theaters/${props.row.theater_id}`)
  //     const data = res.data

  //     const movie_options = data.map(d => ({
  //         "value" : d.theater_id,
  //         "label" : d.theater_name
  //     }))
  //     this.setState({selectTheater: theater_options})
  //   };

  async function newSubmit() {
    try {
      const res = await axios.post(API_URL + "/showtimes", {
        showtime_date_time,
        movie_id,
        theater_id,
      });
      console.log(res);
      // TODO replace with feedback of success and redirect to showtimes table
    } catch (error) {
      console.error(error);
      // TODO add user feedback of failure
    }
  }

  async function updateSubmit() {
    try {
      const res = await axios.put(
        API_URL + `/showtimes/${props.row.showtime_id}`,
        {
          showtime_date_time,
          movie_id,
          theater_id,
        }
      );
      if (res.status === 200) {
        props.parentRerender();
      }
      // TODO replace with feedback of success and redirect to showtimes table
    } catch (error) {
      console.error(error);
      // TODO add user feedback of failure
    }
    props.showForm(false);
  }

  // State definitions
  const [showtime_date_time, set_showtime_date_time] = useState(
    props.row.first_name ? props.row.first_name : ""
  );
  const [movie_id, set_movie_id] = useState(
    props.row.last_name ? props.row.last_name : ""
  );
  const [theater_id, set_theater_id] = useState(
    props.row.dob ? props.row.dob.split("T")[0] : ""
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (props.row) {
      updateSubmit();
    } else {
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
        <label for="showtime_date_time">Datetime</label>
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
            name="theater"
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
        </label>
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

export default ShowtimeForm;
