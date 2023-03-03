const express = require("express");
const router = express.Router();
const db = require("../db.js");

// READ functionality for showtimes table, at '/showtimes' endpoint
router.get("/", (req, res) => {
    console.log("GET request received.");
    db.query("SELECT * FROM Showtime ORDER BY ASC;", (err, data, fields) => {
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

// DELETE functionality for showtimes table record, at '/showtimes/{id}' endpoint
router.delete("/:id", (req, res) => {
    console.log("DELETE request received.");
    db.query(
      `DELETE FROM Showtime WHERE showtime_id = ?`,
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
