import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";

export const TheaterNew = () => {

    const [tname, setTname] = useState("");
    const [seats, setSeats] = useState("");
    const [theaterlist, setTheaterList] = useState("");



    const addTheatre = () => {
      Axios.post("http://localhost:3001/TheaterNew",
      {
      tname: tname,
      seats: seats
    }).then(()=> {console.log("Success")})}


        const handleSubmit = (e) => {
        e.preventDefault();
        // TODO implement POST request to API
    };

  return (
    <>
      <article>
        <h3>Add a new theater</h3>
        <form onSubmit={handleSubmit} className="pure-form pure-form-stacked">
          <label>
            Theater Name
            <input type="text" required 
             value={tname}
                    onChange={(e) => setTname(e.target.value)}
            />
          </label>
          <br />
          <label>
            Number of Seats
            <input type="number" min="0" required
             value={seats}
                    onChange={(e) => setSeats(e.target.value)}
            />
          </label>
          <br />
          <button type="submit" className="pure-button pure-button-primary" onClick={addTheatre()}>
                    Submit
                </button>
          <br />
        </form>
      </article>

      <a href="./Theater">Return to all theaters</a>
    </>
  );
};

export default TheaterNew;
