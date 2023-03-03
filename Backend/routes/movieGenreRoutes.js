const express = require("express");
const router = express.Router();
const db = require("../db.js");


// READ functionality for movieGenres table, at '/movieGenre' endpoint
router.get("/", (req, res) => {
  console.log("GET request received.");
  db.query("SELECT * FROM MovieGenre ORDER BY ASC;", (err, data, fields) => {
      if (err) {
          console.error(err);
      } // TODO Better error handling
      res.status(200).json({
          fields,
          data,
      });
  });
});


// TODO CREATE functionality for entries to XXXX table, at '/XXXX' endpoint
// TODO UPDATE functionality for XXXX table record, at '/XXXX' endpoint
// TODO DELETE functionality for XXXX table record, at '/XXXX' endpoint

module.exports = router;
