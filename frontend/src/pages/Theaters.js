import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, _ } from "gridjs-react";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import axios from "axios";

export default function Theaters() {

  return (
    <div>
      <h3>Theaters</h3>
      <p>Create, Retrieve, Update or Delete a Theater</p>
      <Link to="./TheaterNew" class="newPlus">
        {" "}
        Add new theater
      </Link>

      <Grid
        columns={[
          { name: "Theater ID", id: "theater_id", sort: true },
          { name: "Theater Name", id: "theater_name", sort: true },
          { name: "Number of seats", id:"no_of_seats", sort: true },
          {
            name: "Edit Item",
            data: _(<MdEdit onClick={() => alert("clicked!")} />),
          },
          {
            name: "Delete Item",
            data: _(<MdDeleteForever onClick={() => alert("clicked!")} />),
          },
        ]}

        data={
          async () => {
          const theaters = await axios.get(
              "http://localhost:3001/theaters"
          );
          return theaters.data.data;
      }
    }

        search={true}
        pagination={{ limit: 25 }}
      />
    </div>
  );
};
