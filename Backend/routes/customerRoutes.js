const express = require("express");
const router = express.Router();
const db = require("../db.js");

// READ functionality for customers table, at '/customers' endpoint
router.get("/", (req, res) => {
    console.log("GET request received.");
    db.query("SELECT * FROM Customer;", (err, data, fields) => {
        if (err) {
            console.error(err);
        } // TODO Better error handling
        res.status(200).json({
            fields,
            data,
        });
    });
});
3
// CREATE functionality for customers table records, at '/customers' endpoint
router.post("/", (req, res) => {
    console.log("POST request received.");
    db.query(
        "INSERT INTO `Customer` (`first_name`, `last_name`, `dob`, `email`) VALUES (?,?,?,?);",
        [req.body.fname, req.body.lname, req.body.dob, req.body.email],
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

// UPDATE functionality for customers table record, at '/customers/{id}' endpoint
router.put("/:id", (req, res) => {
    console.log("UPDATE request received.");
    db.query(
        `UPDATE Customer
        SET first_name = ?, last_name = ?, dob = ?, email = ?
        WHERE customer_id = ?`,
        [
            req.body.fname,
            req.body.lname,
            req.body.dob,
            req.body.email,
            req.params.id,
        ],
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

// DELETE functionality for customers table record, at '/customers/{id}' endpoint
router.delete("/:id", (req, res) => {
    console.log("DELETE request received.");
    db.query(
        `DELETE FROM Customer WHERE customer_id = ?`,
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
