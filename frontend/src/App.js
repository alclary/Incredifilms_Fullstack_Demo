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
import CustomerNew from "./pages/CustomerNew";
import MovieNew from "./pages/MovieNew";
import TheaterNew from "./pages/TheaterNew";
import GenreNew from "./pages/GenreNew";
import ShowtimeNew from "./pages/ShowtimeNew";
import TicketNew from "./pages/TicketNew";
import MovieGenreNew from "./pages/MovieGenreNew";

import CustomerConfirmDelete from "./pages/CustomerConfirmDelete";
import GenreConfirmDelete from "./pages/GenreConfirmDelete";
import MovieConfirmDelete from "./pages/MovieConfirmDelete";
import MovieGenreConfirmDelete from "./pages/MovieGenreConfirmDelete";
import ShowtimeConfirmDelete from "./pages/ShowtimeConfirmDelete";
import TheaterConfirmDelete from "./pages/TheaterConfirmDelete";
import TicketConfirmDelete from "./pages/TicketConfirmDelete";

import CustomerUpdate from "./pages/CustomerUpdate";
import GenreUpdate from "./pages/GenreUpdate";
import MovieUpdate from "./pages/MovieUpdate";
import MovieGenreUpdate from "./pages/MovieGenreUpdate";
import ShowtimeUpdate from "./pages/ShowtimeUpdate";
import TheaterUpdate from "./pages/TheaterUpdate";
import TicketUpdate from "./pages/TicketUpdate";

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
                                path="/CustomerNew"
                                element={<CustomerNew />}
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
                                path="/MovieUpdate"
                                element={<MovieUpdate />}
                            />
                            <Route
                                exact
                                path="/CustomerUpdate"
                                element={<CustomerUpdate />}
                            />
                            <Route
                                exact
                                path="/GenreUpdate"
                                element={<GenreUpdate />}
                            />
                            <Route
                                exact
                                path="/ShowtimeUpdate"
                                element={<ShowtimeUpdate />}
                            />
                            <Route
                                exact
                                path="/TicketUpdate"
                                element={<TicketUpdate />}
                            />
                            <Route
                                exact
                                path="/TheaterUpdate"
                                element={<TheaterUpdate />}
                            />
                            <Route
                                exact
                                path="/MovieGenreUpdate"
                                element={<MovieGenreUpdate />}
                            />

                            <Route
                                exact
                                path="CustomerConfirmDelete"
                                element={<CustomerConfirmDelete />}
                            />
                            <Route
                                exact
                                path="MovieConfirmDelete"
                                element={<MovieConfirmDelete />}
                            />
                            <Route
                                exact
                                path="GenreConfirmDelete"
                                element={<GenreConfirmDelete />}
                            />
                            <Route
                                exact
                                path="MovieGenreConfirmDelete"
                                element={<MovieGenreConfirmDelete />}
                            />
                            <Route
                                exact
                                path="TicketConfirmDelete"
                                element={<TicketConfirmDelete />}
                            />
                            <Route
                                exact
                                path="ShowtimeConfirmDelete"
                                element={<ShowtimeConfirmDelete />}
                            />
                            <Route
                                exact
                                path="TheaterConfirmDelete"
                                element={<TheaterConfirmDelete />}
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
