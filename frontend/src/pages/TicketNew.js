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

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO implement POST request to API

        navigate("/Ticket");
    };

    return (
        <>
            <article>
                <h3>Add a new ticket</h3>
                <form className="form">
                    <label>
                        Customer ID
                        <input type="number" min="0" required />
                    </label>
                    <br />
                    <label>
                        Showtime ID
                        <input type="number" min="0" required />
                    </label>
                    <br />
                    <label>
                        Price
                        <input type="number" min="0" required />
                    </label>
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
            </article>

            <a href="./Ticket">Return to all tickets</a>
        </>
    );
};

export default TicketNew;
