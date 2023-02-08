/* 
CS 340 - Project Step 2 
Data Definition Query (DDL) 
Group #25
Jesseline Velazquez, Anthony Logan Clary
*/
-- --------------------------------------------------------

-- Create Customer Table
CREATE TABLE `Customer` (
  `customer_id` int(11) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `dob` date NOT NULL,
  `email` varchar(254) DEFAULT NULL
);

-- TODO Populate Customer Table
INSERT INTO `Customer` (`customer_id`, `first_name`, `last_name`, `dob`, `email`) VALUES
	(1, 'AJ', 'Styles', '1977-06-02', 'AJ.Styles@bmail.com'),
	(2, 'Alberto', 'Rio', '1977-05-25', 'Alberto.Rio@bmail.com'),
	(3, 'Alexa', 'Bliss', '1991-08-09', 'Alexa.Bliss@bmail.com'),
	(4, 'Alundra', 'Blayze', '1964-02-09', 'Alundra.Blayze@bmail.com'),
	(5, 'Andrade', 'Andrade', '1989-11-03', 'Andrade.Andrade@bmail.com'),
	(6, 'Andre', 'Giant', '1946-05-19', 'Andre.Giant@bmail.com'),
	(7, 'Antonio', 'Cesaro', '1980-12-27', 'Antonio.Cesaro@bmail.com'),
	(8, 'Antonio', 'Inoki', '1943-02-20', 'Antonio.Inoki@bmail.com'),
	(9, 'Apollo', 'Crews', '1987-08-22', 'Apollo.Crews@bmail.com'),
	(10, 'Asuka', 'Asuka', '1981-09-26', 'Asuka.Asuka@bmail.com');

-- TODO Create Genre Table
CREATE TABLE `Genre` (
  `genre_id` int(11) NOT NULL,
  `genre_name` varchar(45) NOT NULL
);

-- TODO Populate Genre Table
INSERT INTO `Genre` (`genre_id`, `genre_name`) VALUES
	(2, 'Children & Family Movies'),
	(3, 'Comedies'),
	(1, 'Documentaries'),
	(6, 'Dramas'),
	(4, 'Independent Movies'),
	(5, 'International Movies'),
	(7, 'Music & Musicals'),
	(8, 'Thrillers');

-- TODO Create Movie Table
CREATE TABLE `Movie` (
  `movie_id` int(11) NOT NULL,
  `movie_name` varchar(100) NOT NULL,
  `runtime_min` int(4) NOT NULL,
  `mpa_rating` varchar(5) NOT NULL,
  `movie_year` year(4) NOT NULL
);

-- TODO Populate Movie Table
INSERT INTO `Movie` (`movie_id`, `movie_name`, `runtime_min`, `mpa_rating`, `movie_year`) VALUES
	(2, 'Confessions of an Invisible Girl', 91, 'TV-PG', 2021),
	(1, 'Dick Johnson Is Dead', 90, 'PG-13', 2020),
	(6, 'Je Suis Karl', 127, 'TV-MA', 2021),
	(5, 'Motu Patlu in the Game of Zones', 87, 'TV-Y7', 2019),
	(3, 'Sankofa', 125, 'TV-MA', 1993),
	(4, 'The Starling', 104, 'PG-13', 2021);

-- TODO Create Movie_Genre Table
CREATE TABLE `Movie_Genre` (
  `movie_genre_id` int(11) NOT NULL,
  `movie_id` int(11) DEFAULT NULL,
  `genre_id` int(11) DEFAULT NULL
);

-- TODO Populate Movie_Genre Table
INSERT INTO `Movie_Genre` (`movie_genre_id`, `movie_id`, `genre_id`) VALUES
(); 
-- TODO --------------------------------------------------------

-- TODO Create Showtime Table
CREATE TABLE `Showtime` (
  `showtime_id` int(11) NOT NULL,
  `showtime_date_time` datetime NOT NULL,
  `movie_id` int(11) DEFAULT NULL,
  `theater_id` int(11) DEFAULT NULL
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
  `theater_id` int(11) NOT NULL,
  `theater_name` varchar(50) DEFAULT NULL,
  `no_of_seats` int(4) NOT NULL
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
  `ticket_id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `price` decimal(3,2) NOT NULL,
  `payment_method` varchar(45) DEFAULT NULL,
  `showtime_id` int(11) DEFAULT NULL
);
 
-- TODO Populate Ticket Table
INSERT INTO `Ticket` (`ticket_id`, `customer_id`, `price`, `payment_method`, `showtime_id`) VALUES
	(1, 10, '9.00', 'CASH', 3),
	(2, 1, '9.00', 'CASH', 3),
	(3, 1, '9.00', 'CARD', 8);