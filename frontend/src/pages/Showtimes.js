import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, _ } from "gridjs-react";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import axios from "axios";
// import { ShowtimeForm } from "./ShowtimeForm";

// Fetch and return data array of showtimes from API
async function fetchShowtimes() {
  const showtimes = await axios.get("http://localhost:3001/showtimes");
  return showtimes.data.data;
}

// Functional Component Definition for Showtimes Component
export default function Showtimes() {
  // State definition for the showtimes data array
  const [showtimes, setShowtimes] = useState(
    async () => await fetchShowtimes()
  );

  function fetchAndSetShowtimes() {
    setShowtimes(async () => await fetchShowtimes());
  }

  // State definition for whether or not to hide form
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(null);

  // Function to confirm and handle deletion of table record, via the delete
  //   icon in the delete column.
  async function handleDelete(row) {
    if (
      window.confirm(
        `Are you sure you want to DELETE the record for showtime ID = ${row.showtime_id}?`
      ) === true
    ) {
      let deleted = await axios.delete(
        `http://localhost:3001/showtimes/${row.showtime_id}`
      );
      if (deleted.status === 200) {
        fetchAndSetShowtimes();
      }
    }
  }

  function handleEdit(row) {
    setFormData(row);
    setShowForm(true);
  }

  // Showtime Component Contents
  return (
    <div>
      <h3>Showtimes</h3>
      <p>Create, Retrieve, Update or Delete a Showtime</p>
      <p>
        To display only showtimes between two given dates please indicate a
        start and end date:
      </p>
      <label for="start">Start date:</label>
      <input type="date" id="start" name="start-input"></input>
      <label for="end">End date:</label>
      <input type="date" id="end" name="end-input"></input>
      <a href="./ShowtimeNew" class="newPlus">
        Add new showtime
      </a>
      <Grid
        columns={[
          { name: "Showtime ID",  id:"showtime_id", sort: true },
          { name: "Datetime",  id:"showtime_date_time",  sort: true },
          { name: "Movie",   id:"movie_id", sort: true },
          { name: "Theater",  id:"theater_id" },
          {
            name: "Edit Item",
            data: (row) => _(<MdEdit onClick={() => handleEdit(row)} />),
            width: "6%",
          },
          {
            name: "Delete Item",
            data: (row) =>
              _(<MdDeleteForever onClick={() => handleDelete(row)} />),
            width: "6%",
          },
        ]}
        data={async () => await showtimes}
        search={true}
        pagination={{ limit: 25 }}
      />
      <Link to="/ShowtimeNew" className="newPlus">
        Add new showtime
      </Link>
      {/* {showForm ? (
                    <TicketForm
                      row={formData}
                      showForm={setShowForm}
                      parentRerender={() => fetchAndSetTickets()}
                    ></TicketForm>
                  ) : null} */}
    </div>
  );
}
