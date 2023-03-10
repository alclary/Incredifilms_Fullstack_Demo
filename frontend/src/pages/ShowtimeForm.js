import React, { useState } from "react";
import axios from "axios";
import { ReactWrapper } from "gridjs-react";

const API_URL = process.env.REACT_APP_API_URL;

export const ShowtimeForm = (props) => {
    console.log(props);

    async function getMovieOptions() {
        try {
            const res = await axios.get(
                API_URL + `/movies/${props.row.movie_id}`
            );
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

            <form
                onSubmit={handleSubmit}
                className="pure-form pure-form-stacked"
            >
                <label for="showtime_date_time">Datetime</label>
                <input
                    type="datetime-local"
                    id="showtime_date_time"
                    required
                    value={showtime_date_time}
                    onChange={(e) => set_showtime_date_time(e.target.value)}
                ></input>
                <label>Movie</label>
                <select onChange={handleMovieChange}>
                    <option
                        type="checkbox"
                        id="PG-13"
                        name="mpa_rating"
                        value={movie_id.value}
                    >
                        {movie_id.label}
                    </option>
                    {/* {ratings.map((mpa_rating) => ( */}
                    <option
                    // value={theater_id}
                    >
                        Blah...
                        {/* {g.label} */}
                    </option>
                    ))}
                </select>
                <label>Theater</label>
                {/* <select onChange={handleTheaterChange}>
          <option
            type="radio"
            id="PG-13"
            name="mpa_rating"
            value={mpa_rating.value}
          >
            {mpa_rating.label}
          </option>
          {ratings.map((mpa_rating) => (
            <option value={mpa_rating.value}>{mpa_rating.label}</option>
          ))}
        </select> */}
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
