const express = require("express");
const router = express.Router();
const db = require("../db.js");

// READ functionality for moviegenres table, at '/moviegenres' endpoint
router.get("/", (req, res) => {
    console.log("GET request received.");
    db.query(
        "SELECT movie_genre_id, Movie.movie_id AS movie_id, Movie.movie_name AS movie_name, Genre.genre_id AS genre_id, Genre.genre_name AS genre_name FROM `Movie_Genre` JOIN Movie on Movie.movie_id = Movie_Genre.movie_id  JOIN Genre on Genre.genre_id = Movie_Genre.genre_id ORDER BY movie_genre_id ASC;",
        (err, data, fields) => {
            if (err) {
                console.error(err);
                res.status(500).json({ ...err });
            } else {
                res.status(200).json({
                    fields,
                    data,
                });
            }
        }
    );
});

// CREATE functionality for entries to moviegenres table, at '/moviegenres' endpoint
router.post("/", (req, res) => {
    console.log("POST request received.");
    db.query(
        "INSERT INTO `Movie_Genre` (`movie_id`, `genre_id`) VALUES(?,?);",
        [req.body.movie_id, req.body.genre_id],
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

// UPDATE functionality for moviegenres table record, at '/moviegenres/{id}' endpoint
router.put("/:id", (req, res) => {
    console.log("UPDATE request received.");
    db.query(
        "UPDATE Movie_Genre SET movie_id = ?, genre_id = ? WHERE movie_genre_id = ?",
        [req.body.movie_id, req.body.genre_id, req.params.id],
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

// DELETE functionality for moviegenres table record, at '/moviegenres/{id}' endpoint
router.delete("/:id", (req, res) => {
    console.log("DELETE request received.");
    db.query(
        `DELETE FROM Movie_Genre WHERE movie_genre_id = ?`,
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
module.exports = router;
