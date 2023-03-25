const express = require("express");
const router = express.Router();
const db = require("../db.js");

const ENDPOINT = "/genre";

// READ functionality for genre table, at '/genre' endpoint
router.get("/", (req, res) => {
    console.log("GET request received at", ENDPOINT);
    db.query(
        "SELECT * FROM Genre ORDER BY genre_id ASC;",
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

// CREATE functionality for entries to genres table, at '/genres' endpoint
router.post("/", (req, res) => {
    console.log("POST request received at", ENDPOINT);
    db.query(
        "INSERT INTO `Genre` (`genre_name`) VALUES (?);",
        [req.body.genre_name],
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

// UPDATE functionality for genres table record, at '/genres/{id}' endpoint
router.put("/:id", (req, res) => {
    console.log("UPDATE request received at", ENDPOINT + "/" + req.params.id);
    db.query(
        `UPDATE Genre SET genre_name = ? WHERE genre_id = ?`,
        [req.body.genre_name, req.params.id],
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

// DELETE functionality for genres table record, at '/genres/{id}' endpoint
router.delete("/:id", (req, res) => {
    console.log("DELETE request received at", ENDPOINT + "/" + req.params.id);
    db.query(
        `DELETE FROM Genre WHERE genre_id = ?`,
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

// READ functionality for genre names only, at '/genres/names' endpoint
router.get("/categories", (req, res) => {
    console.log("GET request received at", ENDPOINT + "/names");
    db.query(
        "SELECT genre_id, genre_name FROM Genre ORDER BY genre_name ASC;",
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

module.exports = router;
