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
            </Routes>
          </Router>
        </main>
      </div>
    </div>
  );
}
