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
      const res = await axios.put(API_URL + `/tickets/${props.row.ticket_id}`, {
        customer_id,
        showtime_id,
        price,
        payment_method,
      });
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
  const [customer_id, set_customer_id] = useState(
    props.row.customer_id ? props.row.customer_id : ""
  );
  const [showtime_id, set_showtime_id] = useState(
    props.row.showtime_id ? props.row.showtime_id : ""
  );
  const [price, set_price] = useState(props.row.price ? props.row.price : "");
  const [payment_method, set_payment_method] = useState(
    props.row.payment_method ? props.row.payment_method : ""
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (props.row) {
      updateSubmit();
    } else {
      newSubmit();
    }
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

  const handlePaymentChange = async (e) => {
    set_payment_method(e.target.value);
  };

  return (
    <div>
      {props.row ? <h3>Update ticket</h3> : <h3>Add a new ticket</h3>}

      <form onSubmit={handleSubmit} className="pure-form pure-form-stacked">
        <label>Customer </label>

        <select
          name="customer"
          value={customer_id}
          onChange={(e) => {
            set_customer_id(e.target.value);
          }}
        >
          <option selected value="NULL">
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
          value={payment_method}
        >
          <option selected value="NULL">
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
