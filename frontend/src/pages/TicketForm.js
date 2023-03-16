import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

export const TicketForm = (props) => {
  console.log(props);

  const [customerList, setCustomerList] = useState([]);
  const [showtimeList, setShowtimeList] = useState([]);

  useEffect(() => {
    async function getCustomerList() {
      try {
        const customers = await axios.get(API_URL + "/customers/names");
        setCustomerList(customers.data.data);
      } catch (error) {
        console.error(error);
        // TODO add user feedback of failure
      }
    }
    async function getShowtimeList() {
      try {
        const showtimes = await axios.get(API_URL + "/showtimes/showings");
        setShowtimeList(showtimes.data.data);
      } catch (error) {
        console.error(error);
        // TODO add user feedback of failure
      }
    }

    getCustomerList();
    getShowtimeList();
  }, []);


  async function getCustomerOptions() {
    try {
      const res = await axios.get(API_URL + `/customers/${props.row.customer_id}`);
      const data = res.data;

      const customer_options = data.map((d) => ({
        value: d.customer_id,
        label: d.customer_name,
      }));
      this.setState({ selectMovie: customer_options });

      if (res.status === 200) {
        props.parentRerender();
      }
      // TODO replace with feedback of success and redirect to movies table
    } catch (error) {
      console.error(error);
      // TODO add user feedback of failure
    }
  }




  async function getShowtimeOptions() {
    try {
      const res = await axios.get(API_URL + `/showtimes/${props.row.showtime_id}`);
      const data = res.data;

      const showtime_options = data.map((d) => ({
        value: d.showtime_id,
        label: d.showtime,
      }));
      this.setState({ selectMovie: showtime_options });

      if (res.status === 200) {
        props.parentRerender();
      }
      // TODO replace with feedback of success and redirect to movies table
    } catch (error) {
      console.error(error);
      // TODO add user feedback of failure
    }
  }


  async function newSubmit() {
    try {
      const res = await axios.post(API_URL + "/tickets", {
        customer_id,
        showtime_id,
        price,
        payment_method,
      });
      console.log(res);
      // TODO replace with feedback of success and redirect to tickets table
    } catch (error) {
      console.error(error);
      // TODO add user feedback of failure
    }
  }


  async function updateSubmit() {
    try {
      const res = await axios.put(
        API_URL + `/tickets/${props.row.ticket_id}`,
        {
            customer_id,
            showtime_id,
            price,
            payment_method,
        }
      );
      if (res.status === 200) {
        props.parentRerender();
      }
      // TODO replace with feedback of success and redirect to tickets table
    } catch (error) {
      console.error(error);
      // TODO add user feedback of failure
    }
    props.showForm(false);
  }





  // State definitions
  const [customer_id, set_customer_id] = useState("");
  const [showtime_id, set_showtime_id] = useState("");
  const [price, set_price] = useState("");
  const [payment_method, set_payment_method] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
{
      newSubmit();
    }
  };

  const handleMovieChange = async (e) => {
    set_payment_method(e.target.value);
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

export default TicketForm;
