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

    if (customer_id == "{null}") {
      console.log("Connecticut");

    try {
      const res = await axios.post(API_URL + "/tickets", {
        showtime_id,
        price,
        payment_method,
      });
      console.log(res);
      console.log("Alabama");
      // TODO replace with feedback of success and redirect to tickets table
    } catch (error) {
      console.error(error);
      console.log("Wyoming");
      // TODO add user feedback of failure
    }
  }


  else {    try {
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
  }}



    navigate("/Ticket");
  };

  const payment_methods = [
    { value: "CASH", label: "CASH" },
    { value: "CREDIT", label: "CREDIT" },
    { value: "DEBIT", label: "DEBIT" },
  ];
  const prices = [
    { price: "MATINEE", label: "5" },
    { price: "STANDARD", label: "9" },
  ];

  return (
    <>
      <h3>Add a new ticket</h3>
      <form className="form">
        <label>Customer </label>

        <select
          name="customer"
          onChange={(e) => {
            set_customer_id(e.target.value);
          }}
          value={customer_id}

        >
          <option selected value="">
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
        <p>
          <label>Showtime</label>

          <select
            name="showtime"
            value={showtime_id}
            required
            onChange={(e) => {
              set_showtime_id(e.target.value);
            }}
          >
            <option disabled selected value="" required>
              -- select an option --
            </option>
            {showtimeList.map((showtime, i) => {
              return (
                <option key={i} value={showtime.meow}>
                  {showtime.showtime}
                </option>
              );
            })}
          </select>
        </p>
        <label>Price</label>
        <select
          onChange={(e) => {
            set_price(e.target.value);
          }}
          required
          value={price}
        >
          {" "}
          <option disabled selected value="">
            -- select an option --
          </option>
          {prices.map((price, i) => {
            return (
              <option key={i} value={price.value}>
                {price.label}
              </option>
            );
          })}
        </select>

        <label>Payment Method</label>
        <select
          onChange={(e) => {
            set_payment_method(e.target.value);
          }}
          required
          value={payment_method}
        >
          <option selected value="">
            -- select an option --
          </option>
          {payment_methods.map((payment_method, i) => {
            return (
              <option key={i} value={payment_method.label}>
                {payment_method.label}
              </option>
            );
          })}
        </select>

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
