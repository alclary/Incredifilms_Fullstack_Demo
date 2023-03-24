const express = require("express");
const router = express.Router();
const db = require("../db.js");

// READ functionality for movies table, at '/movies' endpoint
router.get("/", (req, res) => {
    console.log("GET request received.");
    db.query(
        "SELECT * FROM Movie ORDER BY movie_id ASC;",
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

// CREATE functionality for entries to movies table, at '/movies' endpoint
router.post("/", (req, res) => {
    console.log("POST request received.");
    db.query(
        "INSERT INTO `Movie` (`movie_name`, `runtime_min`, `mpa_rating`, `movie_year`) VALUES(?,?,?,?);",
        [
            req.body.movie_name,
            req.body.runtime_min,
            req.body.mpa_rating,
            req.body.movie_year,
        ],
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

// UPDATE functionality for movies table record, at '/movies/{id}' endpoint
router.put("/:id", (req, res) => {
    console.log("UPDATE request received.");
    db.query(
        `UPDATE Movie
      SET movie_name = ?, runtime_min = ?, mpa_rating = ?, movie_year = ?
      WHERE movie_id = ?`,
        [
            req.body.movie_name,
            req.body.runtime_min,
            req.body.mpa_rating,
            req.body.movie_year,
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

// DELETE functionality for movies table record, at '/movies/{id}' endpoint
router.delete("/:id", (req, res) => {
    console.log("DELETE request received.");
    db.query(
        `DELETE FROM Movie WHERE movie_id = ?`,
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

// READ functionality for movie titles only, at '/movies/titles' endpoint
router.get("/titles", (req, res) => {
    console.log("GET request received.");
    db.query(
        "SELECT movie_id, movie_name FROM Movie ORDER BY movie_name ASC;",
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

module.exports = router;
