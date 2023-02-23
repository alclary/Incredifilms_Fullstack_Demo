/* 
CS 340 - Project Step 3 
Data Manipulation Queries (DML) 
Group #25
Jesseline Velazquez, Anthony Logan Clary
*/


-- SIMPLE LISTS ------------------------------------------------------------------------
-- Get list of all genres
SELECT genre_name FROM Genre;

-- Get list of all movies
SELECT movie_name FROM Movie;

-- Get list of all theaters
SELECT theater_name FROM Theater;

-- Get list of all customers by full name
SELECT CONCAT(Customer.first_name, ' ', Customer.last_name) 
AS "Customer Name"
FROM Customer; 

-- Get list of all tickets
SELECT * FROM Ticket;

-- Get list of all showtimes
SELECT * FROM Showtime;

-- Get list of all Movie_Genre intersection table
SELECT * FROM Movie_Genre;


-- SELECTS -----------------------------------------------------------------------------
-- Get list of customer names [last, first, (customer_id)] and associated customer_id
SELECT CONCAT(last_name, ', ', first_name, ' (', customer_id, ')') AS customer, 
	customer_id 
FROM Customer ORDER BY Customer.last_name;

-- Get list of all genres associated with a given movie
SELECT Genre.genre_name AS Genre
FROM Movie_Genre
JOIN Genre ON Movie_Genre.genre_id = Genre.genre_id
JOIN Movie ON Movie_Genre.movie_id = Movie.movie_id 
    AND Movie.movie_name = :movieNameFromDropdownList
ORDER BY Genre;

-- Get list of all showtimes for a given movie
SELECT Showtime.showtime_date_time AS Showtime
FROM Movie
JOIN Showtime ON Movie.movie_id = Showtime.movie_id
WHERE Movie.movie_name = :movieNameFromDropdownList
ORDER BY Showtime;

-- Get list of all showtimes for a given movie between two given dates
SELECT Showtime.showtime_date_time AS Showtime
FROM Movie
JOIN Showtime ON Movie.movie_id = Showtime.movie_id
WHERE Movie.movie_name = :movieNameFromDropdownList
AND Showtime BETWEEN :dateTimeInput1 AND :dateTimeInput2
ORDER BY Showtime;

-- Get list of all showtimes for a given theater
SELECT Showtime.showtime_date_time AS Showtime
FROM Theater
JOIN Showtime ON Theater.theater_id = Showtime.theater_id
WHERE Theater.theater_name = :theaterNameFromDropdownList
ORDER BY Showtime;

-- Get list of all showtimes for a given theater between two given dates
SELECT Showtime.showtime_date_time AS Showtime
FROM Theater
JOIN Showtime ON Theater.theater_id = Showtime.theater_id
WHERE Theater.theater_name = :theaterNameFromDropdownList
AND Showtime BETWEEN :dateTimeInput1 AND :dateTimeInput2
ORDER BY Showtime;

-- Get list of all movies with showtimes between two given dates
SELECT Movie.movie_name AS Movie
FROM Showtime
JOIN Movie ON Showtime.movie_id = Movie.movie_id
WHERE Showtime.showtime_date_time BETWEEN :dateTimeInput1 AND :dateTimeInput2
GROUP BY Movie;

-- Get list of all theaters with showtimes between two given dates
SELECT Theater.theater_name AS Theater
FROM Showtime
JOIN Theater ON Showtime.theater_id = Theater.theater_id
WHERE Showtime.showtime_date_time BETWEEN :dateTimeInput1 AND :dateTimeInput2
GROUP BY Theater;

-- Get list of all showtime (concat format) across theaters
SELECT showtime_id,
    Theater.theater_name AS Theater, 
    CONCAT(Movie.movie_name, " ", Showtime.showtime_date_time) AS Showtime
FROM Showtime
JOIN Theater ON Showtime.theater_id = Theater.theater_id
JOIN Movie ON Showtime.movie_id = Movie.movie_id
ORDER BY Theater, Showtime.showtime_date_time;

-- Get list of all movies appropriate for Kids (PG rating and/or "Kids" Genre)

SELECT DISTINCT Movie.movie_name, Movie.runtime_min, Movie.mpa_rating, Movie.movie_year
FROM Movie

JOIN Movie_Genre
ON Movie.movie_id = Movie_Genre.movie_genre_id

AND Movie.movie_id

IN (
	SELECT Movie.movie_id
    FROM Movie
    
    JOIN Movie_Genre
    ON Movie_Genre.movie_id = Movie.movie_id
    
    JOIN Genre
    ON Genre.genre_id = Movie_Genre.genre_id
    AND (Genre.genre_name = "Kids" 
    OR Genre.genre_name = "Family")
)

OR Movie.mpa_rating = "PG"

ORDER BY Movie.movie_name;


-- INSERTS -----------------------------------------------------------------------------
-- Add a customer
INSERT INTO Customer (first_name, last_name, dob, email)
VALUES (:fnameInput, :lnameInput, :dobInput, :emailInput);

-- Add a genre
INSERT INTO Genre (genre_name) 
VALUES (:genreInput);

-- Add a movie
INSERT INTO Movie (movie_name, runtime_min, mpa_rating, movie_year)
VALUES (:movieNameInput, :runtimeMinInput, :mpaRatingInput, :movieYearInput);

-- Add a theater
INSERT INTO Theater (theater_name, no_of_seats) 
VALUES (:theaterNameInput, :noOfSeatsInput);

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

-- Update a customer
UPDATE Customer
SET first_name = :fnameInput, last_name = :lnameInput, dob = :dobInput, email = :emailInput
WHERE customer_id = :customerIdFromListOrControlledInput

-- Update a genre (i.e. mispelling)
UPDATE Genre
SET genre_name = :genreNameInput
WHERE genre_id = :genreIdFromListOrControlledInput

-- Update a movie
UPDATE Movie
SET movie_name = :movieNameInput, runtime_min = :runtimeMinInput, mpa_rating = :ratingFromHardcodedList, movie_year = :movieYearInput
WHERE movie_id = :movieIdFromListOrControlledInput

-- Update a theater
UPDATE Theater
SET theater_name = :theaterNameInput, no_of_seats = :noOfSeatsInput
WHERE theater_id = :theaterIdFromListOrControlledInput

-- Update a ticket
UPDATE Ticket
SET 

-- Update a showtime date/time ONLY
UPDATE Showtime
SET showtime_date_time = :dateTimeInput
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


-- JOINS to make FK user friendly ---------------------------------------

-- For Ticket UI: Display Ticket ID, Customer name (first + last name), Movie Name, Theater Name, Price, Payment Method

SELECT Ticket.ticket_id as "Ticket ID", 
CONCAT(Customer.first_name, ' ', Customer.last_name) as "Customer Name",
Movie.movie_name as "Movie Name", 
Theater.theater_name as "Theater Name", 
Ticket.price as "Price", 
Ticket.payment_method as "Payment Method"
FROM Ticket
INNER JOIN Customer
ON Customer.customer_id = Ticket.customer_id
INNER JOIN Showtime
ON Ticket.showtime_id = Showtime.showtime_id
INNER JOIN Movie
ON Movie.movie_id = Showtime.movie_id
INNER JOIN Theater
ON Theater.theater_id = Showtime.showtime_id
ORDER BY Ticket.ticket_id;

-- For Movie_Genre UI: Display Movie Name, Genre Name

SELECT Movie_Genre.movie_genre_id AS "Movie Genre ID",
Movie.movie_name AS "Movie Name",
Genre.genre_name AS "Genre Name"
FROM Movie_Genre
INNER JOIN Movie
ON Movie.movie_id = Movie_Genre.movie_id
INNER JOIN Genre
ON Genre.genre_id = Movie_Genre.genre_id
ORDER BY Movie.movie_name;

--  For Showtime UI: Display Showtime ID, Showtime Date & Time, Movie Name, Theater Name

SELECT Showtime.showtime_id as "Showtime ID", Showtime.showtime_date_time as "Showtime Date & Time", Movie.movie_name as "Movie Name", Theater.theater_name as "Theater Name"
FROM Showtime
JOIN Movie
ON Movie.movie_id = Showtime.showtime_id
JOIN Theater
on Theater.theater_id = Showtime.theater_id
ORDER BY showtime_date_time ASC;

-- For Ticket UI: Display Ticket ID, Customer Name, Movie Name, Theater Name, Price, Payment Method

SELECT Ticket.ticket_id AS "Ticket ID", 
CONCAT(Customer.first_name, ' ', Customer.last_name) as "Customer Name", Showtime.showtime_date_time AS "Showtime Date & Time", 
Movie.movie_name as "Movie Name", 
Theater.theater_name as "Theater Name", 
Ticket.price as "Price", Ticket.payment_method as "Payment Method"

FROM Ticket

JOIN Customer
ON Customer.customer_id = Ticket.customer_id

JOIN Showtime
ON Showtime.showtime_id = Ticket.showtime_id

JOIN Movie
ON Movie.movie_id = Showtime.movie_id

JOIN Theater 
ON Theater.theater_id = Showtime.theater_id

ORDER BY Ticket.ticket_id;