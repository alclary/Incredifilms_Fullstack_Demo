import React from "react";

export default function EntityTable() {
    return (
        <div className="entityTable">
            <h3>Entity Table</h3>
            <table className="pure-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Customer</td>
                        <td>
                            An entity that records and stores information about
                            each customer and/or potential customer.
                        </td>
                    </tr>

                    <tr>
                        <td>Genre</td>
                        <td>
                            An entity that records and stores information about
                            possible genres associated with movies.
                        </td>
                    </tr>

                    <tr>
                        <td>Movie</td>
                        <td>
                            An entity that records and stores information of
                            each movie IncrediFilms shows in their theaters.
                        </td>
                    </tr>

                    <tr>
                        <td>Showtime</td>
                        <td>
                            An entity that records and stores information about
                            each showtime
                        </td>
                    </tr>

                    <tr>
                        <td>Theater</td>
                        <td>
                            An entity that records and stores information about
                            each IncrediFilms theater location.
                        </td>
                    </tr>

                    <tr>
                        <td>Ticket</td>
                        <td>
                            An entity that records and stores the details of
                            each movie ticket.
                        </td>
                    </tr>

                    <tr>
                        <td>Movie_Genre</td>
                        <td>
                            An intersection table that facilitates the M:N
                            relationship between Movie and Genre entities.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
