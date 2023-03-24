/*
CS 340 - Portfolio Project
Data Manipulation Queries (DML)
Group #25 - Konami Code
Jesseline Velazquez, Anthony Logan Clary
*/

-- DROP-DOWN LIST QUERIES ------------------------------------------------------------------------
-- Get list of all genres
SELECT genre_id, genre_name FROM Genre ORDER BY genre_name ASC;

-- Get list of all movies in format [movie_name (movie_id)] and associated movie_id
-- To be used to populate dropdown list and map selection to movie_id
-- SELECT CONCAT(movie_name, ' (', movie_id, ')') AS movie, movie_id FROM Movie;
SELECT movie_id, movie_name FROM Movie ORDER BY movie_name ASC;

-- Get list of all theaters
SELECT theater_id, theater_name FROM Theater ORDER BY theater_name ASC;

-- Get list of customer names [last, first, (customer_id)] and associated customer_id
-- To be used to populate dropdown list and map selection to customer_id
SELECT CONCAT(last_name, ', ', first_name, ' (', customer_id, ')') AS customer, customer_id FROM Customer ORDER BY Customer.last_name ASC;

-- Get list of showtimes [movie name, theater name, showtime date & time)] and associated showtime_id
-- To be used to populate dropdown list and map selection to showtime_id
SELECT CONCAT(movie_name, ' @ ', theater_name, ' on ', showtime_date_time) as showtime FROM Showtime JOIN Movie ON Movie.movie_id = Showtime.movie_id JOIN Theater on Theater.theater_id = Showtime.theater_id ORDER BY theater_name ASC;

-- SELECTS -----------------------------------------------------------------------------
-- Get full Movie table
SELECT * FROM Movie ORDER BY movie_id ASC;

-- Get full Genre table
SELECT * FROM Genre ORDER BY genre_id ASC;

-- Get full Theater table
SELECT * FROM Theater ORDER BY theater_id ASC;

-- Get full Customer table
SELECT * FROM Customer ORDER BY customer_id ASC;

-- Get full Showtime table, with readable movie & theater names
SELECT Showtime.showtime_id AS showtime_id, Showtime.showtime_date_time AS date_time, Showtime.movie_id AS movie_id, Movie.movie_name AS movie_name, Showtime.theater_id AS theater_id, Theater.theater_name AS theater_name FROM Showtime LEFT JOIN Movie ON Showtime.movie_id = Movie.movie_id LEFT JOIN Theater ON Showtime.theater_id = Theater.theater_id WHERE Showtime.showtime_date_time BETWEEN ? AND ? ORDER BY showtime_id ASC;

-- Get full Ticket table, with readable customer, movie, theater
SELECT Ticket.ticket_id AS 'ticket_id', Customer.customer_id AS customer_id,CONCAT(Customer.first_name, ' ', Customer.last_name) AS customer_name, Showtime.showtime_id AS showtime_id, Showtime.showtime_date_time AS showtime_date_time, Movie.movie_id AS movie_id, Movie.movie_name AS movie_name, Theater.theater_id AS theater_id, Theater.theater_name AS theater_name, Ticket.price AS price, Ticket.payment_method AS payment_method FROM Ticket LEFT JOIN Customer ON Ticket.customer_id = Customer.customer_id LEFT JOIN Showtime ON Ticket.showtime_id = Showtime.showtime_id LEFT JOIN Movie ON Showtime.movie_id = Movie.movie_id LEFT JOIN Theater ON Showtime.theater_id = Theater.theater_id ORDER BY Ticket.ticket_id ASC;

-- Get full Movie Genre table, with readable movie, theater
SELECT movie_genre_id, Movie.movie_id AS movie_id, Movie.movie_name AS movie_name, Genre.genre_id AS genre_id, Genre.genre_name AS genre_name FROM `Movie_Genre` JOIN Movie on Movie.movie_id = Movie_Genre.movie_id  JOIN Genre on Genre.genre_id = Movie_Genre.genre_id ORDER BY movie_genre_id ASC;

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
INSERT INTO Movie_Genre (movie_id, genre_id) VALUES(:movieIdFromDropdownList,:genreIdFromDropdownList);

-- Create a showtime
INSERT INTO Showtime (showtime_date_time, movie_id, theater_id)
VALUES (:dateTimeInput,:movieIdFromDropdownList,:theaterIdFromDropdownList);

-- Create a ticket
INSERT INTO Ticket (customer_id, showtime_id, price, payment_method)
VALUES (
    :customerIdfromDropDownListOfUniqueCustomers,
    :showtimeIdfromDropDownListOfUniqueShowtimes,
    :priceInput,
    :paymentMethodFromHardCodedList
);

-- UPDATES -----------------------------------------------------------------------------
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

-- Update a movie genre relationship
UPDATE MovieGenre
SET movie_id = :movieNameFromDropdownList, genre = :genreIdFromListOrControlledInput
WHERE movie_genre_id = moviegenreIdFromListOrControlledInput


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