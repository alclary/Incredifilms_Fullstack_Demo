const express = require("express");
const router = express.Router();
const db = require("../db.js");

// READ functionality for showtimes table, at '/showtimes' endpoint
router.get("/", (req, res) => {
  console.log("GET request received.");
  db.query(
    "SELECT Showtime.showtime_id AS showtime_id, Showtime.showtime_date_time AS date_time, Movie.movie_name AS movie_id, Theater.theater_name AS theater_id FROM Showtime JOIN Movie ON Showtime.movie_id = Movie.movie_id JOIN Theater ON Showtime.theater_id = Theater.theater_id ORDER BY showtime_id ASC;",
    (err, data, fields) => {
      if (err) {
        console.error(err);
      } // TODO Better error handling
      res.status(200).json({
        fields,
        data,
      });
    }
  );
});

// TODO CREATE functionality for entries to showtimes table, at '/showtimes' endpoint
router.post("/", (req, res) => {
  console.log("POST request received.");
  db.query(
    "INSERT INTO `Customer` (`showtime_date_time`, `movie_id`, `theatre_id`) VALUES (?, (SELECT movie_id FROM Movie WHERE movie_name = ?), (SELECT theater_id FROM Theater WHERE theater_name = ?));",
    [req.body.showtime_date_time, req.body.movie_id, req.body.theatre_id],
    (err, data, fields) => {
      if (err) {
        console.error(err);
      } // TODO Better error handling
      res.status(200).json({
        // TODO decide if appropriate response
        fields,
        data,
      });
      console.log("POST request successful.");
    }
  );
});

// UPDATE functionality for showtimes table record, at '/showtimes/{id}' endpoint
router.put("/:id", (req, res) => {
  console.log("UPDATE request received.");
  db.query(
    `UPDATE Showtime
      SET showtime_date_time = ?, movie_id = ?, theater_id = ?
      WHERE showtime_id = ?`,
    [
      req.body.showtime_date_time,
      req.body.movie_id,
      req.body.theater_id,
      req.params.id,
    ],
    (err, data, fields) => {
      if (err) {
        console.error(err);
      } // TODO Better error handling
      res.status(200).json({
        fields,
        data,
      });
      console.log("UPDATE request successful.");
    }
  );
});

// DELETE functionality for showtimes table record, at '/showtimes/{id}' endpoint
router.delete("/:id", (req, res) => {
  console.log("DELETE request received.");
  db.query(
    `DELETE FROM Showtime WHERE showtime_id = ?`,
    [req.params.id],
    (err, data, fields) => {
      if (err) {
        console.error(err);
      } // TODO Better error handling
      res.status(200).json({
        fields,
        data,
      });
      console.log("DELETE request successful.");
    }
  );
});

module.exports = router;
