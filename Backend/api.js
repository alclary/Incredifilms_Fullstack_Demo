const db = require("./db.js");

// Express configuration
const express = require("express");
const app = express();
const port = 3001;

app.get("/customers", (req, res) => {
    db.query("SELECT * FROM customer;", (err, data, fields) => {
        if (err) console.error(err);
        res.status(200).json({
            fields,
            data,
        });
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
