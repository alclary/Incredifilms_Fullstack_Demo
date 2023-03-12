import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Sidebar from "./components/Sidebar";

import Customers from "./pages/Customers";
import Genres from "./pages/Genres";
import Movies from "./pages/Movies";
import Showtimes from "./pages/Showtimes";
import Theaters from "./pages/Theaters";
import MovieGenres from "./pages/MovieGenres";
import Tickets from "./pages/Tickets";

import MovieNew from "./pages/MovieNew";
import TheaterNew from "./pages/TheaterNew";
import GenreNew from "./pages/GenreNew";
import ShowtimeNew from "./pages/ShowtimeNew";
import TicketNew from "./pages/TicketNew";
import MovieGenreNew from "./pages/MovieGenreNew";

export default function App() {
    return (
        <Router>
            <div className="App">
                <div className="sidebar">
                    <Sidebar />
                </div>

                <div className="main">
                    <main>
                        <h1>IncrediFilms Admin Dashboards</h1>

                        <Routes>
                            <Route exact path="/" element={<HomePage />} />
                            <Route
                                exact
                                path="/customer"
                                element={<Customers />}
                            />
                            <Route exact path="/movie" element={<Movies />} />
                            <Route
                                exact
                                path="/showtime"
                                element={<Showtimes />}
                            />
                            <Route
                                exact
                                path="/theater"
                                element={<Theaters />}
                            />
                            <Route exact path="/ticket" element={<Tickets />} />
                            <Route exact path="/genre" element={<Genres />} />
                            <Route
                                exact
                                path="/moviegenre"
                                element={<MovieGenres />}
                            />

                            <Route
                                exact
                                path="/ShowtimeNew"
                                element={<ShowtimeNew />}
                            />
                            <Route
                                exact
                                path="/TicketNew"
                                element={<TicketNew />}
                            />
                            <Route
                                exact
                                path="/GenreNew"
                                element={<GenreNew />}
                            />
                            <Route
                                exact
                                path="/TheaterNew"
                                element={<TheaterNew />}
                            />
                            <Route
                                exact
                                path="/MovieNew"
                                element={<MovieNew />}
                            />
                            <Route
                                exact
                                path="/MovieGenreNew"
                                element={<MovieGenreNew />}
                            />

                            <Route
                                exact
                                path="*"
                                element={<h1>Page not found</h1>}
                            />
                        </Routes>
                    </main>
                </div>
            </div>
        </Router>
    );
}
