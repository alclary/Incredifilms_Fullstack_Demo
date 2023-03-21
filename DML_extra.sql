/*
CS 340 - Project Step 3
Data Manipulation Extra Queries (DML)
Group #25
Jesseline Velazquez, Anthony Logan Clary
*/

-- DROP-DOWN LIST QUERIES ------------------------------------------------------------------------
-- Get list of all customers by full name
SELECT CONCAT(Customer.first_name, ' ', Customer.last_name)
AS "Customer Name"
FROM Customer;

-- SELECTS -----------------------------------------------------------------------------
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

-- UPDATES -----------------------------------------------------------------------------

-- DELETES -----------------------------------------------------------------------------

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

-- Get list of all movies with showtimes between two given dates
SELECT Movie.movie_name AS Movie
FROM Showtime
JOIN Movie ON Showtime.movie_id = Movie.movie_id
WHERE Showtime.showtime_date_time BETWEEN :dateTimeInput1 AND :dateTimeInput2
GROUP BY Movie;