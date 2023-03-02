const { Router } = require("express");
const express = require("express");
const router = express(Router);
const db = require("../db.js");

// READ functionality for theaters table, at '/theater' endpoint
router.get("/", (req, res) => {
  console.log(req);
  db.query("SELECT * FROM Theater;", (err, data, fields) => {
    if (err) console.error(err);
    res.status(200).json({
      fields,
      data,
    });
  });
});

// CREATE functionality for entries to customers table, at '/customers' endpoint
router.post("/", (req, res) => {
  console.log("POST request received.");
  db.query(
    "INSERT INTO `Theater` (`theater_name`, `no_of_seats`) VALUES (?,?);",
    [req.body.theater_name, req.body.no_of_seats],
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

// app.post("/TheaterNew", (req,res) => {
//     const theater_name = req.body.theater_name;
//     const no_of_seats = req.body.no_of_seats;

//     (db.query(
//         "INSERT INTO `Theater` (`theater_name`, `no_of_seats`) VALUES(?,?)",
//         [theater_name, no_of_seats],
//         (err,result) => {

//         if (err) {
//             console.log(err); }
//         else {
//             console.log(result);
//             }
//         }
//         );
//  });

// TODO CREATE functionality for entries to XXXX table, at '/XXXX' endpoint
// TODO UPDATE functionality for XXXX table record, at '/XXXX' endpoint
// TODO DELETE functionality for XXXX table record, at '/XXXX' endpoint

module.exports = router;
