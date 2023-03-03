const { Router } = require("express");
const express = require("express");
const router = express(Router);
const db = require("../db.js");

// TODO READ functionality for XXXX table, at '/XXXX' endpoint
// TODO CREATE functionality for entries to XXXX table, at '/XXXX' endpoint
// TODO UPDATE functionality for XXXX table record, at '/XXXX' endpoint
// TODO DELETE functionality for XXXX table record, at '/XXXX' endpoint


// READ functionality for genre table, at '/genre' endpoint
router.get("/", (req, res) => {
    console.log(req);
    db.query("SELECT * FROM Genre;", (err, data, fields) => {
      if (err) console.error(err);
      res.status(200).json({
        fields,
        data,
      });
    });
  });
  


// CREATE functionality for entries to genres table, at '/genres' endpoint

  router.post("/", (req, res) => {
    console.log("POST request received.");
    db.query(
      "INSERT INTO `Genre` (`genre_name`) VALUES (?);",
      [req.body.genre_name],
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


  module.exports = router;
