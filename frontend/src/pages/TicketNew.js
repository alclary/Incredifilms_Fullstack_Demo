import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

export const TicketNew = () => {
  const navigate = useNavigate();

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

  const [customer_id, set_customer_id] = useState("");
  const [showtime_id, set_showtime_id] = useState("");
  const [price, set_price] = useState("");
  const [payment_method, set_payment_method] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
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

    navigate("/Ticket");
  };

  return (
    <>
      <h3>Add a new ticket</h3>
      <form className="form">
        <label>Customer </label>

        <select
          name="customer"
          value={customer_id}
          onChange={(e) => {
            set_customer_id(e.target.value);
          }}
        >
          <option disabled selected value="">
            -- select an option --
          </option>
          {customerList.map((customer, i) => {
            return (
              <option key={i} value={customer.customer_id}>
                {customer.customer}
              </option>
            );
          })}
        </select>

        <label>Showtime </label>

        <select
          name="showtime"
          value={showtime_id}
          onChange={(e) => {
            set_showtime_id(e.target.value);
          }}
        >
          <option disabled selected value="" required>
            -- select an option --
          </option>
          {showtimeList.map((showtime, i) => {
            return (
              <option key={i} value={showtime.showtime_id}>
                {showtime.showtime}
              </option>
            );
          })}
        </select>
        <br />
        <label>
          Payment method
          <select>
            <option>CASH</option>
            <option>CREDIT</option>
            <option>DEBIT</option>
          </select>
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

      <a href="./Ticket">Return to all tickets</a>
    </>
  );
};

export default TicketNew;
