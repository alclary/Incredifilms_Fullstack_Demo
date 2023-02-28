const db = require("./db.js");
const cors = require("cors");

// Express configuration
const express = require("express");
const app = express();
const port = 3001;

// Enable CORS for localhost origin
app.use(cors({ origin: "http://localhost:3000" }));
// Enable express json middleware
app.use(express.json());

app.get("/customers", (req, res) => {
    console.log(req);
    db.query("SELECT * FROM Customer;", (err, data, fields) => {
        if (err) console.error(err);
        res.status(200).json({
            fields,
            data,
        });
    });
});

// i didn't make any changes above this line

app.post("/customers", (req, res) => {
    console.log("POST request received.");
    db.query(
        "INSERT INTO `Customer` (`first_name`, `last_name`, `dob`, `email`) VALUES (?,?,?,?);",
        [req.body.fname, req.body.lname, req.body.dob, req.body.email],
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

// app.get("/theaters", (req, res) => {
//     db.query("SELECT * FROM Theater;", (err, data, fields) => {
//         if (err) console.error(err);
//         res.status(200).json({
//             fields,
//             data,
//         });
//     });
// });

// app.post("/TheaterNew", (req, res) => {
//     db.query(
//         "INSERT INTO `Theater` (`theater_name`, `no_of_seats`) VALUES(?,?);"
//     );
// });

// app.get("/movies", (req, res) => {
//     db.query("SELECT * FROM Movie;", (err, data, fields) => {
//         if (err) console.error(err);
//         res.status(200).json({
//             fields,
//             data,
//         });
//     });
// });

// app.post("/MovieNew", (req, res) => {
//     db.query(
//         "INSERT INTO `Movie` (`movie_name`, `runtime_min`, `mpa_rating`, `movie_year`) VALUES(?,?,?,?);"
//     );
// });

// app.get("/genres", (req, res) => {
//     db.query("SELECT * FROM Genre;", (err, data, fields) => {
//         if (err) console.error(err);
//         res.status(200).json({
//             fields,
//             data,
//         });
//     });
// });

// app.post("/GenreNew", (req, res) => {
//     db.query("INSERT INTO `Genre` (`genre_name`) VALUES(?);");
// });

// app.get("/showtimes", (req, res) => {
//     db.query("SELECT * FROM Showtime;", (err, data, fields) => {
//         if (err) console.error(err);
//         res.status(200).json({
//             fields,
//             data,
//         });
//     });
// });

// app.post("/ShowtimeNew", (req, res) => {
//     db.query(
//         "INSERT INTO `Showtime` (`showtime_date_time`, `movie_id`, `theater_id`) VALUES(?,?,?);"
//     );
// });

// app.get("/tickets", (req, res) => {
//     db.query("SELECT * FROM Ticket;", (err, data, fields) => {
//         if (err) console.error(err);
//         res.status(200).json({
//             fields,
//             data,
//         });
//     });
// });

// app.post("/TicketNew", (req, res) => {
//     db.query(
//         "INSERT INTO `Theater` (`theater_name`, `no_of_seats`) VALUES(?,?);"
//     );
// });

// app.get("/moviegenres", (req, res) => {
//     db.query("SELECT * FROM MovieGenres;", (err, data, fields) => {
//         if (err) console.error(err);
//         res.status(200).json({
//             fields,
//             data,
//         });
//     });
// });

// app.post("/MovieGenreNew", (req, res) => {
//     db.query("INSERT INTO `Movie_Genre` (`movie_id`, `genre_id`) VALUES(?,?)");
// });

// i didn't make any changes below this line

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
