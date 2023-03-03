// Import Routes
const customerRoutes = require("./routes/customerRoutes.js");
const theaterRoutes = require("./routes/theaterRoutes.js");
const genreRoutes = require("./routes/genreRoutes.js");


const movieGenreRoutes = require("./routes/movieGenreRoutes");
const moviesRoutes = require("./routes/moviesRoutes");
const ticketRoutes = require("./routes/ticketRoutes");
const showtimeRoutes = require("./routes/showtimeRoutes");


// Import CORS middleware for express
const cors = require("cors");

// Express configuration
const express = require("express");
const app = express();
const port = 3001;

// Enable CORS for localhost origin
app.use(cors({ origin: "http://localhost:3000" }));

// Enable express json middleware
app.use(express.json());

// Enable routes as defined in their respective routes files
app.use("/customers", customerRoutes);

app.use("/theaters", theaterRoutes);

app.use("/genres", genreRoutes)

app.use("/movies", moviesRoutes)

app.use("/tickets", ticketRoutes)

app.use("/showtimes", showtimeRoutes)

app.use("/moviegenres", movieGenreRoutes)


// app.post("/MovieNew", (req, res) => {
//     db.query(
//         "INSERT INTO `Movie` (`movie_name`, `runtime_min`, `mpa_rating`, `movie_year`) VALUES(?,?,?,?);"
//     );
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

app.get("/", (req, res) => {
  res.json("Welcome");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
