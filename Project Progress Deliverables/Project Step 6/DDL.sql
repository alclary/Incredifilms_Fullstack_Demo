/*
CS 340 - Portfolio Project
Data Definition Query (DDL)
Group #25 - Konami Code
Jesseline Velazquez, Anthony Logan Clary
*/
-- --------------------------------------------------------
-- Disable commits and foreign key checks to minimize errors
SET FOREIGN_KEY_CHECKS=0;
SET AUTOCOMMIT = 0;

-- Create Customer Table
DROP TABLE IF EXISTS Customer;
CREATE TABLE `Customer` (
  `customer_id` int NOT NULL AUTO_INCREMENT UNIQUE,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `dob` date NOT NULL,
  `email` varchar(254),
  PRIMARY KEY (customer_id),
  UNIQUE (first_name, last_name, dob, email)
);

-- Populate Customer Table
/* Data for the Customer Table is a blend of invented data and edited data from the following source:
		Kaggle Public Dataset: Professional Wrestling Champions (WWE/WWF)
        Author: MDABBERT
        License: Creative Commons - Attribution 4.0 International
        Source: https://www.kaggle.com/datasets/mdabbert/professional-wrestling-champions-wwewwf
        Retrieved: 2/5/2023 via the web */
INSERT INTO `Customer` (`first_name`, `last_name`, `dob`, `email`) VALUES
  ('AJ', 'Styles', '1977-06-02', 'AJ.Styles@bmail.com'),
  ('Stephanie', 'Helmsley', '1976-09-24', 'Stephanie.Helmsely@bmail.com'),
  ('Alexa', 'Bliss', '1991-08-09', 'Alexa.Bliss@bmail.com'),
  ('Booker', 'T', '1965-03-01', NULL),
  ('Jenna', 'Andrade', '1989-11-03', 'Jenna.Andrade@bmail.com'),
  ('Andre', 'Giant', '1946-05-19', NULL),
  ('Michaela', 'Hargrove', '2001-05-30', 'Michaela.Hargrove@bmail.com'),
  ('Em', 'Patterson', '2017-12-02', NULL);

-- Create Genre Table
DROP TABLE IF EXISTS Genre;
CREATE TABLE `Genre` (
  `genre_id` int NOT NULL AUTO_INCREMENT UNIQUE,
  `genre_name` varchar(45) NOT NULL UNIQUE,
  PRIMARY KEY (genre_id)
);

-- Populate Genre Table
INSERT INTO `Genre` (`genre_name`) VALUES
  ('Documentary'),
  ('Kids'),
  ('Family'),
  ('Comedy'),
  ('Independent'),
  ('International'),
  ('Drama'),
  ('Musical'),
  ('Thriller'),
  ('Horror'),
  ('Sci-Fi'),
  ('Romance'),
  ('Animated'),
  ('Sports'),
  ('Action'),
  ('Cult Classic'),
  ('Adventure'),
  ('LGBTQ+'),
  ('Crime'),
  ('Mystery'),
  ('Fantasy'),
  ('Historical');

-- Create Movie Table
DROP TABLE IF EXISTS Movie;
CREATE TABLE `Movie` (
  `movie_id` int NOT NULL AUTO_INCREMENT UNIQUE,
  `movie_name` varchar(100) NOT NULL,
  `runtime_min` int NOT NULL,
  `mpa_rating` varchar(5) NOT NULL,
  `movie_year` year NOT NULL,
   PRIMARY KEY (movie_id),
   CONSTRAINT chk_movie_mpa_rating CHECK (mpa_rating in ('G','PG','PG-13','R','NR','NC-17')),
   UNIQUE (movie_name, runtime_min, mpa_rating, movie_year)
);

-- Populate Movie Table
INSERT INTO `Movie` (`movie_name`, `runtime_min`, `mpa_rating`, `movie_year`) VALUES
  ('Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', 95, 'PG', 1964),
  ('Interstellar', 169, 'PG-13', 2014),
  ('Amélie', 122, 'R', 2001),
  ('The Shining', 146, 'R', 1980),
  ('Everything Everywhere All at Once', 139, 'R', 2022),
  ('Encanto', 102, 'PG', 2021),
  ('Bee Movie', 91, 'PG', 2007);

-- Create Theater Table
DROP TABLE IF EXISTS Theater;
CREATE TABLE `Theater` (
  `theater_id` int NOT NULL AUTO_INCREMENT UNIQUE,
  `theater_name` varchar(50) NOT NULL UNIQUE,
  `no_of_seats` int NOT NULL,
  PRIMARY KEY (theater_id)
);

-- Populate Theater Table
INSERT INTO `Theater` (`theater_name`, `no_of_seats`) VALUES
  ('IncrediFilms Rogers Park', 300),
  ('IncrediFilms Wicker Park', 500),
  ('IncrediFilms Uptown', 300),
  ('IncrediFilms Lincoln Square', 250),
  ('IncrediFilms North Center', 250),
  ('IncrediFilms Lake View', 250);

-- Create Movie_Genre Table
DROP TABLE IF EXISTS Movie_Genre;
CREATE TABLE `Movie_Genre` (
  `movie_genre_id` int NOT NULL AUTO_INCREMENT UNIQUE,
  `movie_id` int NOT NULL,
  `genre_id` int NOT NULL,
  PRIMARY KEY (movie_genre_id),
  CONSTRAINT fk_movie_genre_movie_id FOREIGN KEY (movie_id) REFERENCES Movie(movie_id) ON DELETE CASCADE,
  CONSTRAINT fk_movie_genre_genre_id FOREIGN KEY (genre_id) REFERENCES Genre(genre_id) ON DELETE CASCADE,
  UNIQUE(movie_id, genre_id)
);

-- Populate Movie_Genre Table
INSERT INTO `Movie_Genre` (`movie_id`, `genre_id`) VALUES
  ((SELECT movie_id FROM Movie WHERE movie_name = 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb'), (SELECT genre_id FROM Genre WHERE genre_name = 'Comedy')),
  ((SELECT movie_id FROM Movie WHERE movie_name = 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb'), (SELECT genre_id FROM Genre WHERE genre_name = 'Action')),
  ((SELECT movie_id FROM Movie WHERE movie_name = 'Interstellar'), (SELECT genre_id FROM Genre WHERE genre_name = 'Sci-Fi')),
  ((SELECT movie_id FROM Movie WHERE movie_name = 'Interstellar'), (SELECT genre_id FROM Genre WHERE genre_name = 'Action')),
  ((SELECT movie_id FROM Movie WHERE movie_name = 'Interstellar'), (SELECT genre_id FROM Genre WHERE genre_name = 'Adventure')),
  ((SELECT movie_id FROM Movie WHERE movie_name = 'Interstellar'), (SELECT genre_id FROM Genre WHERE genre_name = 'Thriller')),
  ((SELECT movie_id FROM Movie WHERE movie_name = 'Amélie'), (SELECT genre_id FROM Genre WHERE genre_name = 'Romance')),
  ((SELECT movie_id FROM Movie WHERE movie_name = 'Amélie'), (SELECT genre_id FROM Genre WHERE genre_name = 'Comedy')),
  ((SELECT movie_id FROM Movie WHERE movie_name = 'The Shining'), (SELECT genre_id FROM Genre WHERE genre_name = 'Horror')),
  ((SELECT movie_id FROM Movie WHERE movie_name = 'The Shining'), (SELECT genre_id FROM Genre WHERE genre_name = 'Mystery')),
  ((SELECT movie_id FROM Movie WHERE movie_name = 'Everything Everywhere All at Once'), (SELECT genre_id FROM Genre WHERE genre_name = 'Sci-Fi')),
  ((SELECT movie_id FROM Movie WHERE movie_name = 'Everything Everywhere All at Once'), (SELECT genre_id FROM Genre WHERE genre_name = 'Comedy')),
  ((SELECT movie_id FROM Movie WHERE movie_name = 'Everything Everywhere All at Once'), (SELECT genre_id FROM Genre WHERE genre_name = 'Mystery')),
  ((SELECT movie_id FROM Movie WHERE movie_name = 'Encanto'), (SELECT genre_id FROM Genre WHERE genre_name = 'Kids')),
  ((SELECT movie_id FROM Movie WHERE movie_name = 'Encanto'), (SELECT genre_id FROM Genre WHERE genre_name = 'Family')),
  ((SELECT movie_id FROM Movie WHERE movie_name = 'Encanto'), (SELECT genre_id FROM Genre WHERE genre_name = 'Musical')),
  ((SELECT movie_id FROM Movie WHERE movie_name = 'Encanto'), (SELECT genre_id FROM Genre WHERE genre_name = 'Adventure')),
  ((SELECT movie_id FROM Movie WHERE movie_name = 'Bee Movie'), (SELECT genre_id FROM Genre WHERE genre_name = 'Family')),
  ((SELECT movie_id FROM Movie WHERE movie_name = 'Bee Movie'), (SELECT genre_id FROM Genre WHERE genre_name = 'Comedy')),
  ((SELECT movie_id FROM Movie WHERE movie_name = 'Bee Movie'), (SELECT genre_id FROM Genre WHERE genre_name = 'Action')),
  ((SELECT movie_id FROM Movie WHERE movie_name = 'Bee Movie'), (SELECT genre_id FROM Genre WHERE genre_name = 'Adventure')),
  ((SELECT movie_id FROM Movie WHERE movie_name = 'Bee Movie'), (SELECT genre_id FROM Genre WHERE genre_name = 'Cult Classic'));

-- Create Showtime Table
DROP TABLE IF EXISTS Showtime;
CREATE TABLE `Showtime` (
  `showtime_id` int NOT NULL AUTO_INCREMENT UNIQUE,
  `showtime_date_time` datetime NOT NULL,
  `movie_id` int,
  `theater_id` int,
  PRIMARY KEY (showtime_id),
  CONSTRAINT fk_showtime_movie_id FOREIGN KEY (movie_id) REFERENCES Movie(movie_id) ON DELETE SET NULL,
  CONSTRAINT fk_showtime_theater_id FOREIGN KEY (theater_id) REFERENCES Theater(theater_id) ON DELETE SET NULL
);

-- Populate Showtime Table
INSERT INTO `Showtime` (`showtime_date_time`, `movie_id`, `theater_id`) VALUES
  ('2023-02-10 16:00:00', (SELECT movie_id FROM Movie WHERE movie_name =  'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb'), (SELECT theater_id FROM Theater WHERE theater_name = 'IncrediFilms Rogers Park')),
  ('2023-02-10 15:00:00', (SELECT movie_id FROM Movie WHERE movie_name =  'Interstellar'), (SELECT theater_id FROM Theater WHERE theater_name = 'IncrediFilms Lincoln Square')),
  ('2023-02-14 17:00:00', (SELECT movie_id FROM Movie WHERE movie_name =  'Interstellar'), (SELECT theater_id FROM Theater WHERE theater_name = 'IncrediFilms Lincoln Square')),
  ('2023-02-14 18:00:00', (SELECT movie_id FROM Movie WHERE movie_name =  'Bee Movie'), (SELECT theater_id FROM Theater WHERE theater_name = 'IncrediFilms Wicker Park')),
  ('2023-02-14 18:00:00', (SELECT movie_id FROM Movie WHERE movie_name =  'Bee Movie'), (SELECT theater_id FROM Theater WHERE theater_name = 'IncrediFilms Rogers Park')),
  ('2023-02-16 12:00:00', (SELECT movie_id FROM Movie WHERE movie_name =  'Amélie'), (SELECT theater_id FROM Theater WHERE theater_name = 'IncrediFilms North Center')),
  ('2023-02-16 15:30:00', (SELECT movie_id FROM Movie WHERE movie_name =  'The Shining'), (SELECT theater_id FROM Theater WHERE theater_name = 'IncrediFilms Rogers Park'));


-- Create Ticket Table
DROP TABLE IF EXISTS Ticket;
CREATE TABLE `Ticket` (
  `ticket_id` int NOT NULL AUTO_INCREMENT UNIQUE,
  `customer_id` int,
  `showtime_id` int,
  `price` decimal(5,2) NOT NULL,
  `payment_method` varchar(45),
  PRIMARY KEY (ticket_id),
  CONSTRAINT fk_ticket_customer_id FOREIGN KEY (customer_id) REFERENCES Customer(customer_id) ON DELETE SET NULL,
  CONSTRAINT fk_ticket_showtime_id FOREIGN KEY (showtime_id) REFERENCES Showtime(showtime_id) ON DELETE SET NULL,
  CONSTRAINT chk_ticket_payment_method CHECK (payment_method in ('CASH', 'CREDIT', 'DEBIT', NULL))
);

-- Populate Ticket Table
INSERT INTO `Ticket` (`customer_id`, `showtime_id`, `price`, `payment_method`) VALUES
  ((SELECT customer_id FROM Customer WHERE first_name = 'Stephanie' AND last_name = 'Helmsley'), (SELECT showtime_id from Showtime WHERE showtime_date_time = '2023-02-14 18:00:00' AND theater_id = '1'), 9, 'CREDIT'),
  ((SELECT customer_id FROM Customer WHERE first_name = 'Stephanie' AND last_name = 'Helmsley'), (SELECT showtime_id from Showtime WHERE showtime_date_time = '2023-02-16 12:00:00' AND theater_id = '5'), 5, 'CREDIT'),
  ((SELECT customer_id FROM Customer WHERE first_name = 'Em' AND last_name = 'Patterson'), (SELECT showtime_id from Showtime WHERE showtime_date_time = '2023-02-10 16:00:00' AND theater_id = '1'), 9, 'CASH'),
  (NULL, (SELECT showtime_id from Showtime WHERE showtime_date_time = '2023-02-10 16:00:00' AND theater_id = '1'), 9, 'DEBIT'),
  ((SELECT customer_id FROM Customer WHERE first_name = 'Alexa' AND last_name = 'Bliss'), (SELECT showtime_id from Showtime WHERE showtime_date_time = '2023-02-10 15:00:00' AND theater_id = '4'), 9, 'CREDIT'),
  ((SELECT customer_id FROM Customer WHERE first_name = 'Booker' AND last_name = 'T'), (SELECT showtime_id from Showtime WHERE showtime_date_time = '2023-02-14 18:00:00' AND theater_id = '2'), 9, NULL),
    (NULL, (SELECT showtime_id from Showtime WHERE showtime_date_time = '2023-02-14 18:00:00' AND theater_id = '2'), 9, NULL);

-- Re-enable commits and foreign key checks
SET FOREIGN_KEY_CHECKS=1;
COMMIT;