const express = require("express");
const router = express.Router();
const db = require("../db.js");


// READ functionality for movies table, at '/movies' endpoint
router.get("/", (req, res) => {
  console.log("GET request received.");
  db.query("SELECT * FROM Movie ORDER BY ASC;", (err, data, fields) => {
      if (err) {
          console.error(err);
      } // TODO Better error handling
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

// TODO UPDATE functionality for XXXX table record, at '/XXXX' endpoint

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




module.exports = router;
