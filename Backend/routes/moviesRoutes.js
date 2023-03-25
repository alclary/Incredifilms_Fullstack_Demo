const express = require("express");
const router = express.Router();
const db = require("../db.js");

const ENDPOINT = "/movies";

// READ functionality for movies table, at '/movies' endpoint
router.get("/", (req, res) => {
    console.log("GET request received at", ENDPOINT);
    db.query(
        "SELECT * FROM Movie ORDER BY movie_id ASC;",
        (err, data, fields) => {
            if (err) {
                console.error(err);
                res.status(500).json({ ...err });
            } else {
                res.status(200).json({
                    fields,
                    data,
                });
                console.log("GET request successful.");
            }
        }
    );
});

// CREATE functionality for entries to movies table, at '/movies' endpoint
router.post("/", (req, res) => {
    console.log("POST request received at", ENDPOINT);
    db.query(
        "INSERT INTO `Movie` (`movie_name`, `runtime_min`, `mpa_rating`, `movie_year`) VALUES(?,?,?,?);",
        [req.body.movieName, req.body.runtime, req.body.rating, req.body.year],
        (err, data, fields) => {
            if (err) {
                console.error(err);
                res.status(500).json({ ...err });
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

// UPDATE functionality for movies table record, at '/movies/{id}' endpoint
router.put("/:id", (req, res) => {
    console.log("UPDATE request received at", ENDPOINT + "/" + req.params.id);
    db.query(
        `UPDATE Movie
      SET movie_name = ?, runtime_min = ?, mpa_rating = ?, movie_year = ?
      WHERE movie_id = ?`,
        [
            req.body.movieName,
            req.body.runtime,
            req.body.rating,
            req.body.year,
            req.params.id,
        ],
        (err, data, fields) => {
            if (err) {
                console.error(err);
                res.status(500).json({ ...err });
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

// DELETE functionality for movies table record, at '/movies/{id}' endpoint
router.delete("/:id", (req, res) => {
    console.log("DELETE request received at", ENDPOINT + "/" + req.params.id);
    db.query(
        `DELETE FROM Movie WHERE movie_id = ?`,
        [req.params.id],
        (err, data, fields) => {
            if (err) {
                console.error(err);
                res.status(500).json({ ...err });
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

// READ functionality for movie titles only, at '/movies/titles' endpoint
router.get("/titles", (req, res) => {
    console.log("GET request received at", ENDPOINT + "/titles");
    db.query(
        "SELECT movie_id, movie_name FROM Movie ORDER BY movie_name ASC;",
        (err, data, fields) => {
            if (err) {
                console.error(err);
                res.status(500).json({ ...err });
            } else {
                res.status(200).json({
                    fields,
                    data,
                });
                console.log("GET request successful.");
            }
        }
    );
});

module.exports = router;
