const express = require("express");
const router = express.Router();
const db = require("../db.js");


// READ functionality for movies table, at '/movies' endpoint
router.get("/", (req, res) => {
  console.log(req);
  db.query("SELECT * FROM Movie;", (err, data, fields) => {
    if (err) console.error(err);
    res.status(200).json({
      fields,
      data,
    });
  });
});


// CREATE functionality for entries to movies table, at '/movies' endpoint
router.post("/", (req, res) => {
    console.log("POST request received.");
    db.query(
        "INSERT INTO `Movie` (`movie_name`, `runtime_min`, `mpa_rating`, `movie_year`) VALUES(?,?,?,?);",
      [req.body.movie_name, req.body.runtime_min,
        eq.body.mpa_rating, req.body.movie_year
    ],
      (err, data, fields) => {
        if (err) {
          console.error(err);
          res.status();
        }
        res.status(200).json({
          fields,
          data,
        });
        console.log("POST request successful.");
      }
    );
  });

// TODO READ functionality for XXXX table, at '/XXXX' endpoint
// TODO CREATE functionality for entries to XXXX table, at '/XXXX' endpoint
// TODO UPDATE functionality for XXXX table record, at '/XXXX' endpoint
// TODO DELETE functionality for XXXX table record, at '/XXXX' endpoint





module.exports = router;
