/*
CS 340 - Project Step 3
Data Manipulation Queries (DML)
Group #25
Jesseline Velazquez, Anthony Logan Clary
*/

-- DROP-DOWN LIST QUERIES ------------------------------------------------------------------------
-- Get list of all genres
SELECT genre_name FROM Genre;

-- Get list of all movies in format [movie_name (movie_id)] and associated movie_id
-- To be used to populate dropdown list and map selection to movie_id
SELECT CONCAT(movie_name, ' (', movie_id, ')') AS movie, movie_id FROM Movie;

-- Get list of all theaters
SELECT theater_name FROM Theater;

-- Get list of customer names [last, first, (customer_id)] and associated customer_id
-- To be used to populate dropdown list and map selection to customer_id
SELECT CONCAT(last_name, ', ', first_name, ' (', customer_id, ')') AS customer,
	customer_id
FROM Customer ORDER BY Customer.last_name;

-- SELECTS -----------------------------------------------------------------------------
-- Get full Movie table
SELECT movie_id AS 'Movie ID', movie_name AS "Movie Name", runtime_min AS 'Runetime (mins)', mpa_rating AS 'MPA Rating', movie_year AS 'Year'
FROM Movie;

-- Get full Genre table
SELECT genre_id AS 'Genre ID', genre_name AS 'Genre Name'
FROM Genre;

-- Get full Theater table
SELECT theater_id AS 'Theater ID', theater_name AS 'Theater Name', no_of_seats AS 'Number of seats'
FROM Theater;

-- Get full Customer table
SELECT customer_id AS 'Customer ID', first_name AS 'First Name', last_name AS 'Last Name', dob AS 'Date of Birth', email AS 'Email'
FROM Customer;

-- Get full Showtime table, with readable movie & theater names
SELECT Showtime.showtime_id AS 'Showtime ID', Showtime.showtime_date_time AS 'Datetime', Movie.movie_name AS 'Movie', Theater.theater_name AS 'Theater'
FROM Showtime
JOIN Movie ON Showtime.movie_id = Movie.movie_id
JOIN Theater ON Showtime.theater_id = Theater.theater_id;

-- Get full Ticket table, with readable customer, movie, theater
  --    This is the select I used for ticket, because we are not currently pulling in the header names. it worked out to use the ids I was passing instead.
  -- "SELECT Ticket.ticket_id AS 'ticket_id', CONCAT(Customer.first_name, ' ', Customer.last_name) AS customer_id, Showtime.showtime_date_time AS 'showtime_id', Movie.movie_name AS movie_id, Theater.theater_name AS theater_id, Ticket.price AS price, Ticket.payment_method AS payment_method FROM Ticket JOIN Customer ON Ticket.customer_id = Customer.customer_id JOIN Showtime ON Ticket.showtime_id = Showtime.showtime_id JOIN Movie ON Showtime.movie_id = Movie.movie_id JOIN Theater ON Showtime.theater_id = Theater.theater_id ORDER BY Ticket.ticket_id ASC;",


--    "SELECT Showtime.showtime_id AS showtime_id, Showtime.showtime_date_time AS date_time, Movie.movie_name AS movie_id, Theater.theater_name AS theater_id FROM Showtime JOIN Movie ON Showtime.movie_id = Movie.movie_id JOIN Theater ON Showtime.theater_id = Theater.theater_id ORDER BY showtime_id ASC;"




SELECT Ticket.ticket_id AS 'Ticket ID', CONCAT(Customer.first_name, ' ', Customer.last_name) AS Customer, Showtime.showtime_date_time AS 'Showtime Datetime', Movie.movie_name AS Movie, Theater.theater_name AS Theater, Ticket.price AS Price, Ticket.payment_method AS 'Payment Method'
FROM Ticket
JOIN Customer ON Ticket.customer_id = Customer.customer_id
JOIN Showtime ON Ticket.showtime_id = Showtime.showtime_id
JOIN Movie ON Showtime.movie_id = Movie.movie_id
JOIN Theater ON Showtime.theater_id = Theater.theater_id;

-- Get list of all movies with showtimes between two given dates
SELECT Movie.movie_name AS Movie
FROM Showtime
JOIN Movie ON Showtime.movie_id = Movie.movie_id
WHERE Showtime.showtime_date_time BETWEEN :dateTimeInput1 AND :dateTimeInput2
GROUP BY Movie;

-- INSERTS -----------------------------------------------------------------------------
-- Add a movie
INSERT INTO Movie (movie_name, runtime_min, mpa_rating, movie_year)
VALUES (:movieNameInput, :runtimeMinInput, :mpaRatingInput, :movieYearInput);

-- Add a genre
INSERT INTO Genre (genre_name)
VALUES (:genreInput);

-- Add a theater
INSERT INTO Theater (theater_name, no_of_seats)
VALUES (:theaterNameInput, :noOfSeatsInput);

-- Add a customer
INSERT INTO Customer (first_name, last_name, dob, email)
VALUES (:fnameInput, :lnameInput, :dobInput, :emailInput);

-- Associate a genre with a movie
INSERT INTO Movie_Genre (movie_id, genre_id)
VALUES (
    (SELECT movie_id FROM Movie WHERE movie_name = :movieNameFromDropdownList),
    (SELECT genre_id FROM Genre WHERE genre_name = :genreNameFromDropdownList)
);

-- Create a showtime
INSERT INTO Showtime (showtime_date_time, movie_id, theatre_id)
VALUES (
    :dateTimeInput,
    (SELECT movie_id FROM Movie WHERE movie_name = :movieNameFromDropdownList),
    (SELECT theater_id FROM Theater WHERE theater_name = :theaterNameFromDropdownList)
);

-- Create a ticket
INSERT INTO Ticket (customer_id, showtime_id, price, payment_method)
VALUES (
    (SELECT customer_id FROM Customer WHERE customer_id = :customerIdfromDropDownListOfUniqueCustomers),
    (SELECT showtime_id FROM Showtime WHERE showtime_id = :showtimeIdfromDropDownListOfUniqueShowtimes),
    :priceInput,
    :paymentMethodFromHardCodedList
);

-- UPDATES -----------------------------------------------------------------------------
/* NOTE: Movie_Genre table is not permitted to be updated directly (cascade or delete+recreate);
Tickets table is not permitted to be updated directly (cascade or delete+recreate).*/

-- Update a movie
UPDATE Movie
SET movie_name = :movieNameInput, runtime_min = :runtimeMinInput, mpa_rating = :ratingFromHardcodedList, movie_year = :movieYearInput
WHERE movie_id = :movieIdFromListOrControlledInput

-- Update a genre (i.e. mispelling)
UPDATE Genre
SET genre_name = :genreNameInput
WHERE genre_id = :genreIdFromListOrControlledInput

-- Update a theater
UPDATE Theater
SET theater_name = :theaterNameInput, no_of_seats = :noOfSeatsInput
WHERE theater_id = :theaterIdFromListOrControlledInput

-- Update a customer
UPDATE Customer
SET first_name = :fnameInput, last_name = :lnameInput, dob = :dobInput, email = :emailInput
WHERE customer_id = :customerIdFromListOrControlledInput

-- Update a ticket
UPDATE Ticket
SET customer_id = :customerIdfromDropDownListOfUniqueCustomers,
    showtime_id = :showtimeIdfromDropDownListOfUniqueShowtimes,
    price = :priceInput,
    payment_method = :paymentMethodFromHardCodedList
WHERE ticket_id = :ticketIdFromListOrControlledInput

-- Update a showtime
UPDATE Showtime
SET showtime_date_time = :dateTimeInput,
    movie_id = :movieNameFromDropdownList,
    theater_id = :theaterNameFromDropdownList
WHERE showtime_id = :showtimeIdFromListOrControlledInput

-- DELETES -----------------------------------------------------------------------------
/* With great power comes great responsibility */

-- Delete a customer
DELETE FROM Customer WHERE customer_id = :customerIdFromListOrControlledInput

-- Delete a genre
DELETE FROM Genre WHERE genre_id = :genreIdFromListOrControlledInput

-- Delete a movie
DELETE FROM Movie WHERE movie_id = :movieIdFromListOrControlledInput

-- Delete a theater
DELETE FROM Theater WHERE theater_id = :theaterIdFromListOrControlledInput

-- Delete a showtime
DELETE FROM Showtime WHERE showtime_id = :showtimeIdFromListOrControlledInput

-- Delete a ticket
DELETE FROM Ticket WHERE ticket_id = :ticketIdFromListOrControlledInput

-- Delete a movie-genre association
DELETE FROM Movie_genre WHERE movie_genre_id = :movieGenreIdFromListOrControlledInput