const express = require("express");
const router = express.Router();
const db = require("../db.js");

// READ functionality for moviegenres table, at '/moviegenres' endpoint
router.get("/", (req, res) => {
  console.log("GET request received.");
  db.query(
    "SELECT movie_genre_id, Movie.movie_name, Genre.genre_name FROM `Movie_Genre` JOIN Movie on Movie.movie_id = Movie_Genre.movie_id AS movie_id JOIN Genre on Genre.genre_id = Movie_Genre.genre_id AS genre_id ORDER BY movie_genre_id ASC;",
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

// DELETE functionality for moviegenres table record, at '/moviegenres/{id}' endpoint
router.delete("/:id", (req, res) => {
  console.log("DELETE request received.");
  db.query(
    `DELETE FROM Customer WHERE movie_genre_id = ?`,
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
