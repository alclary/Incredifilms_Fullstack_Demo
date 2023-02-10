/* 
CS 340 - Project Step 2 
Data Definition Query (DDL) 
Group #25
Jesseline Velazquez, Anthony Logan Clary
*/
-- --------------------------------------------------------

-- Diable commits and foreign key checks to minimize errors
SET FOREIGN_KEY_CHECKS=0;
SET AUTOCOMMIT = 0;

-- Create Customer Table
CREATE TABLE `Customer` (
  `customer_id` int NOT NULL AUTO_INCREMENT UNIQUE,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `dob` date NOT NULL,
  `email` varchar(254) UNIQUE,
  PRIMARY KEY (customer_id),
);

-- Populate Customer Table
INSERT INTO `Customer` (`customer_id`, `first_name`, `last_name`, `dob`, `email`) VALUES
	(1, 'AJ', 'Styles', '1977-06-02', 'AJ.Styles@bmail.com'),
	(2, 'Stephanie', 'Helmsley', '1976-09-24', 'Stephanie.Helmsely@bmail.com'),
  (3, 'Alexa', 'Bliss', '1991-08-09', 'Alexa.Bliss@bmail.com'),
  (4, 'Booker', 'T', '1965-03-01', NULL),
  (5, 'Jenna', 'Andrade', '1989-11-03', 'Jenna.Andrade@bmail.com'),
  (6, 'Andre', 'Giant', '1946-05-19', NULL),
  (7, 'Michaela', 'Hargrove', '2001-05-30', 'Michaela.Hargrove@bmail.com'),
  (8, 'Em', 'Patterson', '2017-12-02', NULL);

-- Create Genre Table
CREATE TABLE `Genre` (
  `genre_id` int NOT NULL AUTO_INCREMENT UNIQUE,
  `genre_name` varchar(45) NOT NULL,
  PRIMARY KEY (genre_id)
);

-- Populate Genre Table
INSERT INTO `Genre` (`genre_id`, `genre_name`) VALUES
	(1, 'Documentary'),
  (2, 'Kids'),
  (3, 'Family'),
  (4, 'Comedy'),
  (5, 'Independent'),
  (6, 'International'),
  (7, 'Drama'),
  (8, 'Musical'),
  (9, 'Thriller'),
  (10, 'Horror'),
  (11, 'Sci-Fi'),
  (12, 'Romance'),
  (13, 'Animated'),
  (14, 'Sports'),
  (15, 'Action'),
  (16, 'Cult Classic'),
  (17, 'Adventure'),
  (18, 'LGBTQ+'),
  (19, 'Crime'),
  (20, 'Mystery'),
  (21, 'Fantasy'),
  (22, 'Historical');

-- Create Movie Table
CREATE TABLE `Movie` (
  `movie_id` int NOT NULL AUTO_INCREMENT UNIQUE,
  `movie_name` varchar(100) NOT NULL,
  `runtime_min` int(4) NOT NULL,
  `mpa_rating` varchar(5) NOT NULL,
  `movie_year` year NOT NULL,
   PRIMARY KEY (movie_id)
);

-- Populate Movie Table
INSERT INTO `Movie` (`movie_id`, `movie_name`, `runtime_min`, `mpa_rating`, `movie_year`) VALUES
	(1, 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', 95, 'PG', 1964),
  (2, 'Interstellar', 169, 'PG-13', 2014),
  (3, 'Amélie', 122, 'R', 2001),
  (4, 'The Shining', 146, 'R', 1980),
  (5, 'Everything Everywhere All at Once', 139, 'R', 2022),
  (6, 'Encanto', 102, 'PG', 2021),
  (7, 'Bee Movie', 91, 'PG', 2007);

-- Create Movie_Genre Table
CREATE TABLE `Movie_Genre` (
  `movie_genre_id` int NOT NULL,
  `movie_id` int,
  `genre_id` int,
  PRIMARY KEY (movie_genre_id),
  FOREIGN KEY (movie_id) REFERENCES Movie(movie_id),
  FOREIGN KEY (genre_id) REFERENCES Genre(genre_id)
);

-- Populate Movie_Genre Table
INSERT INTO `Movie_Genre` (`movie_genre_id`, `movie_id`, `genre_id`) VALUES
  (1, 1, 4),
  (2, 1, 15),
  (3, 2, 11),
  (4, 2, 15),
  (5, 2, 17),
  (6, 2, 9),
  (7, 3, 12),
  (8, 3, 4),
  (9, 4, 10),
  (10, 4, 20),
  (11, 5, 11),
  (12, 5, 4),
  (13, 5, 20),
  (14, 6, 2),
  (15, 6, 3),
  (16, 6, 8),
  (17, 6, 17),
  (18, 7, 3),
  (19, 7, 4),
  (20, 7, 15),
  (21, 7, 17),
  (22, 7, 16);

-- TODO Create Showtime Table
CREATE TABLE `Showtime` (
  `showtime_id` int NOT NULL AUTO_INCREMENT UNIQUE,
  `showtime_date_time` datetime NOT NULL,
  `movie_id` int,
  `theater_id` int,
  PRIMARY KEY (showtime_id)
);

-- TODO Populate Showtime Table
INSERT INTO `Showtime` (`showtime_id`, `showtime_date_time`, `movie_id`, `theater_id`) VALUES
	(3, '2023-02-10 16:00:00', 1, 1),
	(4, '2023-02-10 15:00:00', 2, 4),
	(5, '2023-02-14 17:00:00', 2, 4),
	(6, '2023-02-14 18:00:00', 3, 2),
	(7, '2023-02-16 12:00:00', 3, 5),
	(8, '2023-02-16 15:30:00', 4, 1);

-- TODO Create Theater Table
CREATE TABLE `Theater` (
  `theater_id` int NOT NULL AUTO_INCREMENT UNIQUE,
  `theater_name` varchar(50),
  `no_of_seats` int(4) NOT NULL,
  PRIMARY KEY (theater_id)
);

-- TODO Populate Theater Table
INSERT INTO `Theater` (`theater_id`, `theater_name`, `no_of_seats`) VALUES
	(6, 'IncrediFilms Lake View', 250),
	(4, 'IncrediFilms Lincoln Square', 250),
	(5, 'IncrediFilms North Center', 250),
	(1, 'IncrediFilms Rogers Park', 300),
	(3, 'IncrediFilms Uptown', 300),
	(2, 'IncrediFilms West Ridge', 300);

-- TODO Create Ticket Table
CREATE TABLE `Ticket` (
  `ticket_id` int NOT NULL AUTO_INCREMENT UNIQUE,
  `customer_id` int,
  `price` decimal(5,2) NOT NULL,
  `payment_method` varchar(45),
  `showtime_id` int,
  PRIMARY KEY (ticket_id)
);
 
-- TODO Populate Ticket Table
INSERT INTO `Ticket` (`ticket_id`, `customer_id`, `price`, `payment_method`, `showtime_id`) VALUES
	(1, 10, '9.00', 'CASH', 3),
	(2, 1, '9.00', 'CASH', 3),
	(3, 1, '9.00', 'CARD', 8);

-- Re-enable commits and foreign key checks
SET FOREIGN_KEY_CHECKS=1;
COMMIT;