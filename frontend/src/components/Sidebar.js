import Customers from "../pages/Customers";
import Movies from "../pages/Movies";
import Tickets from "../pages/Tickets";
import Theaters from "../pages/Theaters";
import Showtimes from "../pages/Showtimes";
import Genres from "../pages/Genres";
import React from "react";

export default function Sidebar() {
  return (
    <div>
        <a href="/" className="">IncrediFilms</a>
        <a href="/movie" className="">Movies</a>
        <a href="/genre" className="">Genres</a>
        <a href="/theater" className="">Theatres</a>
        <a href="/showtime" className="">Showtimes</a>
        <a href="/ticket" className="">Tickets</a>
        <a href="/customer" className="">Customers</a>
        <a href="/moviegenre">MovieGenres</a>
       

    </div>
  );
}
