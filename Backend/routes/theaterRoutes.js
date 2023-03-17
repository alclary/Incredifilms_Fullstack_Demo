const express = require("express");
const router = express.Router();
const db = require("../db.js");

// READ functionality for theaters table, at '/theaters' endpoint
router.get("/", (req, res) => {
  console.log("GET request received.");
  db.query(
    "SELECT * FROM Theater ORDER BY theater_id ASC;",
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

// CREATE functionality for entries to theaters table, at '/theaters' endpoint
router.post("/", (req, res) => {
  console.log("POST request received.");
  db.query(
    "INSERT INTO `Theater` (`theater_name`, `no_of_seats`) VALUES (?,?);",
    [req.body.theater_name, req.body.no_of_seats],
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

// UPDATE functionality for theaters table record, at '/theaters/{id}' endpoint
router.put("/:id", (req, res) => {
  console.log("UPDATE request received.");
  db.query(
    `UPDATE Theater
      SET theater_name = ?, no_of_seats = ?
      WHERE theater_id = ?`,
    [req.body.theater_name, req.body.no_of_seats, req.params.id],
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

// DELETE functionality for theaters table record, at '/theaters/{id}' endpoint
router.delete("/:id", (req, res) => {
  console.log("DELETE request received.");
  db.query(
    `DELETE FROM Theater WHERE theater_id = ?`,
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

// GET list of theaters, at '/theater/locations' endpoint
router.get("/locations", (req, res) => {
  console.log("GET request received.");
  db.query(
    "SELECT theater_id, theater_name FROM Theater ORDER BY theater_name ASC;",
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
