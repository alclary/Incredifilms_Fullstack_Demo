const express = require("express");
const router = express.Router();
const db = require("../db.js");
const moment = require("moment");

// READ functionality for showtimes table, at '/showtimes' endpoint
router.get("/", (req, res) => {
    console.log("GET request received.");
    // console.log(req.query.startdate, req.query.enddate);
    db.query(
        "SELECT Showtime.showtime_id AS showtime_id, Showtime.showtime_date_time AS date_time, Showtime.movie_id AS movie_id, Movie.movie_name AS movie_name, Showtime.theater_id AS theater_id, Theater.theater_name AS theater_name FROM Showtime LEFT JOIN Movie ON Showtime.movie_id = Movie.movie_id LEFT JOIN Theater ON Showtime.theater_id = Theater.theater_id WHERE Showtime.showtime_date_time BETWEEN ? AND ? ORDER BY showtime_id ASC;",
        [
            moment(req.query.startdate).format("YYYY/MM/DD HH:mm:ss"),
            moment(req.query.enddate).format("YYYY/MM/DD HH:mm:ss"),
        ],
        (err, data, fields) => {
            if (err) {
                console.error(err);
            } else {
                res.status(200).json({
                    fields,
                    data,
                });
            }
        }
    );
});

// CREATE functionality for entries to showtimes table, at '/showtimes' endpoint
router.post("/", (req, res) => {
    console.log("POST request received.");
    db.query(
        "INSERT INTO `Showtime` (`showtime_date_time`, `movie_id`, `theater_id`) VALUES (?, ?, ?);",
        [req.body.showtime_date_time, req.body.movie_id, req.body.theater_id],
        (err, data, fields) => {
            if (err) {
                console.error(err);
            } else {
                res.status(200).json({
                    fields,
                    data,
                });
                console.log("POST request successful.");
            }
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
            } else {
                res.status(200).json({
                    fields,
                    data,
                });
                console.log("UPDATE request successful.");
            }
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
            } else {
                res.status(200).json({
                    fields,
                    data,
                });
                console.log("DELETE request successful.");
            }
        }
    );
});

// READ functionality for showtimes  only, at '/showtimes/showings' endpoint
router.get("/showings", (req, res) => {
    console.log("GET request received.");
    db.query(
        "SELECT showtime_id as meow, CONCAT(movie_name, ' @ ', theater_name, ' on ', showtime_date_time) as showtime FROM Showtime JOIN Movie ON Movie.movie_id = Showtime.movie_id JOIN Theater on Theater.theater_id = Showtime.theater_id ORDER BY theater_name ASC;",
        (err, data, fields) => {
            if (err) {
                console.error(err);
            } else {
                res.status(200).json({
                    fields,
                    data,
                });
            }
        }
    );
});

module.exports = router;
