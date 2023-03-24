import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div>
            <Link to="/">
                <b>IncrediFilms</b>
            </Link>
            <Link to="/movie">Movies</Link>
            <Link to="/genre">Genres</Link>
            <Link to="/theater">Theaters</Link>
            <Link to="/showtime">Showtimes</Link>
            <Link to="/ticket">Tickets</Link>
            <Link to="/customer">Customers</Link>
            <Link to="/moviegenre">MovieGenres</Link>
        </div>
    );
}
