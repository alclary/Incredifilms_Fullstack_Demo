import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const ShowtimeForm = (props) => {
  // State definitions
  //      If formType mode "edit", populate fields with record data to edit,
  //      else form field empty (for new entry)

  const [movieList, setMovieList] = useState([]);
  const [theaterList, setTheaterList] = useState([]);
  const [showtime_date_time, set_showtime_date_time] = useState(
    props.formType === "edit"
      ? props.rowData.showtime_date_time.split("T")[0]
      : ""
  );
  const [movie_id, set_movie_id] = useState(
    props.formType === "edit" ? props.rowData.movie_id : ""
  );
  const [theater_id, set_theater_id] = useState(
    props.formType === "edit" ? props.rowData.theater_id : ""
  );

  async function newSubmit() {
    try {
      const res = await axios.post(API_URL + "/showtimes", {
        showtime_date_time,
        movie_id,
        theater_id,
      });
      if (res === 200) {
    }
    // Success toast notification
    toast.success(`Record ID ${res.data.data.insertId} created.`);
    // Reload entity table / grid.js component (for updates)
    props.gridReload();
} catch (error) {
    toast.error(error.message);
    console.error(error);
}
props.resetForm();
}

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

      // Handle "edit" record form submissions
      async function editSubmit() {
        try {
            const res = await axios.put(
                API_URL + `/showtimes/${props.rowData.showtime_id}`,
                {
                    showtime_date_time,
                    movie_id,
                    theater_id,
                }
            );
            if (res.status === 200) {
            }
            // Success toast notification
            toast.success(`Record updated.`);
            // Reload entity table / grid.js component (for updates)
            props.gridReload();
        } catch (error) {
            toast.error(error.message);
            console.error(error);
        }
        props.resetForm();
    }

  // async function getMovieOptions() {
  //     try {
  //         const res = await axios.get(
  //             API_URL + `/movies/${props.row.movie_id}`
  //         );
  //         const data = res.data;

  //         const movie_options = data.map((d) => ({
  //             value: d.movie_id,
  //             label: d.movie_name,
  //         }));
  //         this.setState({ selectMovie: movie_options });

  //         if (res.status === 200) {
  //             props.parentRerender();
  //         }
  //         // TODO replace with feedback of success and redirect to movies table
  //     } catch (error) {
  //         console.error(error);
  //         // TODO add user feedback of failure
  //     }
  // }

  //   async function getTheaterOptions()
  //   {const res = await axios.get(API_URL + `/theaters/${props.row.theater_id}`)
  //     const data = res.data

  //     const movie_options = data.map(d => ({
  //         "value" : d.theater_id,
  //         "label" : d.theater_name
  //     }))
  //     this.setState({selectTheater: theater_options})
  //   };

    // Handle submit of bi-modal form; submit action based on form mode
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (props.formType === "edit") {
            editSubmit();
        } else {
            newSubmit();
        }
    };

  return (
    <div className="form_wrapper">
            {/* Form title based on mode ("edit" or "new") */}
            {props.formType === "edit" ? (
                <h3>Update showtime</h3>
            ) : (
                <h3>Add a new showtime</h3>
            )}
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
        <button
                    type="submit"
                    className="pure-button pure-button-primary"
                >
                    Submit
                </button>
                {/* Cancel button only displayed for "edit" form modality */}
                {props.formType === "edit" ? (
                    <button
                        type="button"
                        className="pure-button pure-button"
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

export default ShowtimeForm;
