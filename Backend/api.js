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

app.use("/genres", genreRoutes);

app.use("/movies", moviesRoutes);

app.use("/tickets", ticketRoutes);

app.use("/showtimes", showtimeRoutes);

app.use("/moviegenres", movieGenreRoutes);

app.get("/", (req, res) => {
  res.json("Welcome");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
