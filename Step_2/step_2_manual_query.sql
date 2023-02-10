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
DROP TABLE IF EXISTS Customer CASCADE;
CREATE TABLE `Customer` (
  `customer_id` int NOT NULL AUTO_INCREMENT UNIQUE,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `dob` date NOT NULL,
  `email` varchar(254),
  PRIMARY KEY (customer_id),
);

-- Populate Customer Table
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
DROP TABLE IF EXISTS Genre CASCADE;
CREATE TABLE `Genre` (
  `genre_id` int NOT NULL AUTO_INCREMENT UNIQUE,
  `genre_name` varchar(45) NOT NULL,
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
DROP TABLE IF EXISTS Movie CASCADE;
CREATE TABLE `Movie` (
  `movie_id` int NOT NULL AUTO_INCREMENT UNIQUE,
  `movie_name` varchar(100) NOT NULL,
  `runtime_min` int(4) NOT NULL,
  `mpa_rating` varchar(5) NOT NULL,
  `movie_year` year NOT NULL,
   PRIMARY KEY (movie_id)
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
DROP TABLE IF EXISTS Theater CASCADE;
CREATE TABLE `Theater` (
  `theater_id` int NOT NULL AUTO_INCREMENT UNIQUE,
  `theater_name` varchar(50),
  `no_of_seats` int(4) NOT NULL,
  PRIMARY KEY (theater_id)
);

-- Populate Theater Table
INSERT INTO `Theater` (`theater_id`, `theater_name`, `no_of_seats`) VALUES
  ('IncrediFilms Rogers Park', 300),
  ('IncrediFilms Wicker Park', 500),
  ('IncrediFilms Uptown', 300),
  ('IncrediFilms Lincoln Square', 250),
  ('IncrediFilms North Center', 250),
  ('IncrediFilms Lake View', 250);

-- Create Movie_Genre Table
DROP TABLE IF EXISTS Movie_Genre CASCADE;
CREATE TABLE `Movie_Genre` (
  `movie_genre_id` int NOT NULL,
  `movie_id` int NOT NULL,
  `genre_id` int NOT NULL,
  PRIMARY KEY (movie_genre_id),
  FOREIGN KEY (movie_id) REFERENCES Movie(movie_id),
  FOREIGN KEY (genre_id) REFERENCES Genre(genre_id)
);

-- Populate Movie_Genre Table
INSERT INTO `Movie_Genre` (`movie_id`, `genre_id`) VALUES
  (1, 4),
  (1, 15),
  (2, 11),
  (2, 15),
  (2, 17),
  (2, 9),
  (3, 12),
  (3, 4),
  (4, 10),
  (4, 20),
  (5, 11),
  (5, 4),
  (5, 20),
  (6, 2),
  (6, 3),
  (6, 8),
  (6, 17),
  (7, 3),
  (7, 4),
  (7, 15),
  (7, 17),
  (7, 16);

-- Create Showtime Table
DROP TABLE IF EXISTS Showtime CASCADE;
CREATE TABLE `Showtime` (
  `showtime_id` int NOT NULL AUTO_INCREMENT UNIQUE,
  `showtime_date_time` datetime NOT NULL,
  `movie_id` int NOT NULL,
  `theater_id` int NOT NULL,
  PRIMARY KEY (showtime_id),
  FOREIGN KEY (movie_id) REFERENCES Movie(movie_id),
  FOREIGN KEY (theater_id) REFERENCES Theater(theater_id)
);

-- Populate Showtime Table
INSERT INTO `Showtime` (`showtime_date_time`, `movie_id`, `theater_id`) VALUES
	('2023-02-10 16:00:00', 1, 1),
  ('2023-02-10 15:00:00', 2, 4),
  ('2023-02-14 17:00:00', 2, 4),
  ('2023-02-14 18:00:00', 7, 2),
  ('2023-02-14 18:00:00', 7, 1),
  ('2023-02-16 12:00:00', 3, 5),
  ('2023-02-16 15:30:00', 4, 1);

-- Create Ticket Table
CREATE TABLE `Ticket` (
  `ticket_id` int NOT NULL AUTO_INCREMENT UNIQUE,
  `customer_id` int NOT NULL,
  `showtime_id` int NOT NULL,
  `price` decimal(5,2) NOT NULL,
  `payment_method` varchar(45),
  PRIMARY KEY (ticket_id),
  FOREIGN KEY (customer_id) REFERENCES Customer(customer_id),
  FOREIGN KEY (showtime_id) REFERENCES Showtime(showtime_id)
);
 
-- Populate Ticket Table
INSERT INTO `Ticket` (`customer_id`, `showtime_id`, `price`, `payment_method`) VALUES
	(2, 5, 9, 'CREDIT'),
  (2, 6, 5, 'CREDIT'),
  (8, 1, 9, 'CASH'),
  (6, 1, 9, 'DEBIT'),
  (3, 2, 9, 'CREDIT'),
  (4, 4, 9, 'CASH');

-- Re-enable commits and foreign key checks
SET FOREIGN_KEY_CHECKS=1;
COMMIT;