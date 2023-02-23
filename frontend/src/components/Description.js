import React from "react";

export default function Description() {
  return (
    <article className="description">
      <p>
        IncrediFilms™ is a burgeoning player in the world of movie-goer
        experience. IncrediFilms theaters seek to celebrate a fusion between the
        nostalgic atmosphere of the red-velvet curtain theater and the web
        native systems that today’s audience expects. Each IncrediFilms theater
        remains community-owned and operated, while utilizing a modern logistics
        backend—orchestrating scheduling, stock, and operational needs across
        their 12 locations. IncrediFilms prides itself in keeping costs to
        consumers low—no $12 popcorn, here—and employee compensation fair. The
        organization is proud to state that all employees receive a living wage,
        at minimum.
      </p>

      <p>
        In order to accomplish each of their defining qualities, the
        organization relies on a modern tech backend that keeps operations
        efficient, organized, and intuitive across all locations. The number of
        IncrediFilms cinema screens statewide increased 20% between 2019 and
        2023 to 12, with overall attendance growing more than 40% in the same
        time frame to a record 4 million unique movie-goers and counting (as
        reported in their earnings report.) With plans to open another two
        locations in the next two years, they can no longer rely on their fleet
        of Etch-A-Sketches alone to handle record keeping. To this end,
        IncrediFilms requires a web-enabled frontend that facilitates employee
        and patron needs. Underlying this frontend and other interface systems,
        a well-structured and robust database is crucial for managing
        organizational data.
      </p>

      <p>
        Phase I of this database implementation is to streamline Movie
        scheduling amongst IncrediFilms’ flagship Theaters and track financial
        performance of each Movie and Movie Genre via Tickets sold to Customers
        to decide Showtimes for the following week. This system must be capable
        of recording sales for 5,000 Showtimes in its 12 Theaters annually.
        Additionally, in acting as a record of IncrediFilm’s screening history,
        the database should track basic movie details such as year, runtime, and
        its genre categorizations. These details will help to inform the online
        information system and ticket-buying experience for customers. Finally,
        IncrediFilms seeks to manage its loyal customer fanbase. The system will
        also need to keep track of IncrediFilms customer records, supplying
        contact information and linking customers with their ticket purchases.
        It is hoped that the data gleaned from these records will inform
        IncrediFilms decisions and strategy in the future, catering the
        experience to the organization’s most prolific customers.
      </p>
    </article>
  );
}
