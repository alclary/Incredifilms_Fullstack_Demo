const express = require("express");
const router = express.Router();
const db = require("../db.js");

// READ functionality for tickets table, at '/tickets' endpoint
router.get("/", (req, res) => {
  console.log("GET request received.");
  db.query(
    "SELECT Ticket.ticket_id AS 'ticket_id', CONCAT(Customer.first_name, ' ', Customer.last_name) AS customer_id, Showtime.showtime_date_time AS 'showtime_id', Movie.movie_name AS movie_id, Theater.theater_name AS theater_id, Ticket.price AS price, Ticket.payment_method AS payment_method FROM Ticket JOIN Customer ON Ticket.customer_id = Customer.customer_id JOIN Showtime ON Ticket.showtime_id = Showtime.showtime_id JOIN Movie ON Showtime.movie_id = Movie.movie_id JOIN Theater ON Showtime.theater_id = Theater.theater_id ORDER BY Ticket.ticket_id ASC;",
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

// TODO CREATE functionality for entries to XXXX table, at '/XXXX' endpoint

// TODO UPDATE functionality for XXXX table record, at '/XXXX' endpoint

// DELETE functionality for tickets table record, at '/tickets/{id}' endpoint
router.delete("/:id", (req, res) => {
  console.log("DELETE request received.");
  db.query(
    `DELETE FROM Ticket WHERE ticket_id = ?`,
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
