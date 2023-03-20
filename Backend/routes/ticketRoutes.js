const express = require("express");
const router = express.Router();
const db = require("../db.js");

// READ functionality for tickets table, at '/tickets' endpoint
router.get("/", (req, res) => {
    console.log("GET request received.");
    db.query(
        "SELECT Ticket.ticket_id AS 'ticket_id', Customer.customer_id AS customer_id,CONCAT(Customer.first_name, ' ', Customer.last_name) AS customer_name, Showtime.showtime_id AS showtime_id, Showtime.showtime_date_time AS showtime_date_time, Movie.movie_id AS movie_id, Movie.movie_name AS movie_name, Theater.theater_id AS theater_id, Theater.theater_name AS theater_name, Ticket.price AS price, Ticket.payment_method AS payment_method FROM Ticket LEFT JOIN Customer ON Ticket.customer_id = Customer.customer_id JOIN Showtime ON Ticket.showtime_id = Showtime.showtime_id JOIN Movie ON Showtime.movie_id = Movie.movie_id JOIN Theater ON Showtime.theater_id = Theater.theater_id ORDER BY Ticket.ticket_id ASC;",
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

// CREATE functionality for entries to tickets table, at '/tickets' endpoint
router.post("/", (req, res) => {
    console.log("POST request received.");
    db.query(
        "INSERT INTO Ticket (customer_id, showtime_id, price, payment_method)  VALUES (?,?,?,?);",
        [
            req.body.customer_id,
            req.body.showtime_id,
            req.body.price,
            req.body.payment_method,
        ],
        (err, data, fields) => {
            if (err) {
                console.error(err);
            } // TODO Better error handling
            else {
                res.status(200).json({
                    // TODO decide if appropriate response
                    fields,
                    data,
                });
                console.log("POST request successful.");
            }
        }
    );
});

// TODO UPDATE functionality for tickets table record, at '/tickets/{id}' endpoint
router.put("/:id", (req, res) => {
    console.log("UPDATE request received.");
    db.query(
        `UPDATE Ticket SET customer_id = ?, showtime_id = ?, price = ?, payment_method = ?
      WHERE ticket_id = ?`,
        [
            req.body.customer_id,
            req.body.showtime_id,
            req.body.price,
            req.body.payment_method,
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
