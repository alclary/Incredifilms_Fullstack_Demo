import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Customers from "./pages/Customers";
import Genres from "./pages/Genres";
import Movies from "./pages/Movies";
import Showtimes from "./pages/Showtimes";
import Theaters from "./pages/Theaters";

import Sidebar from "./components/Sidebar";
import Tickets from "./pages/Tickets";
import CustomerNew from "./pages/CustomerNew";
import MovieNew from "./pages/MovieNew";
import TheaterNew from "./pages/TheaterNew";
import GenreNew from "./pages/GenreNew";
import ShowtimeNew from "./pages/ShowtimeNew";
import TicketNew from "./pages/TicketNew";

export default function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="main">
        <main>
          <p>~~~~~~~~~~~~Dashboards~~~~~~~~~~~~</p>
          <Router>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/customer" element={<Customers />} />
              <Route exact path="/movie" element={<Movies />} />
              <Route exact path="/showtime" element={<Showtimes />} />
              <Route exact path="/theater" element={<Theaters />} />
              <Route exact path="/ticket" element={<Tickets />} />
              <Route exact path="/genre" element={<Genres />} />

              <Route exact path="/CustomerNew" element={<CustomerNew />} />
              <Route exact path="/ShowtimeNew" element={<ShowtimeNew />} />
              <Route exact path="/TicketNew" element={<TicketNew />} />
              <Route exact path="/GenreNew" element={<GenreNew />} />
              <Route exact path="/TheaterNew" element={<TheaterNew />} />
              <Route exact path="/MovieNew" element={<MovieNew />} />
              <Route exact path="*" element={<h1>Page not found</h1>} />
            </Routes>
          </Router>
        </main>
      </div>
    </div>
  );
}
