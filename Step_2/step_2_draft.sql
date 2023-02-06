-- phpMyAdmin SQL Dump
-- version 5.2.0-1.el7.remi
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 05, 2023 at 05:11 PM
-- Server version: 10.6.11-MariaDB-log
-- PHP Version: 8.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cs340_velazqje`
--

-- --------------------------------------------------------

--
-- Table structure for table `Customer`
--

CREATE TABLE `Customer` (
  `customer_id` int(11) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `dob` date NOT NULL,
  `email` varchar(254) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `Customer`
--

INSERT INTO `Customer` (`customer_id`, `first_name`, `last_name`, `dob`, `email`) VALUES
(1, 'AJ', 'Styles', '1977-06-02', 'AJ.Styles@incredifilms.com'),
(2, 'Alberto', 'Rio', '1977-05-25', 'Alberto.Rio@incredifilms.com'),
(3, 'Alexa', 'Bliss', '1991-08-09', 'Alexa.Bliss@incredifilms.com'),
(4, 'Alundra', 'Blayze', '1964-02-09', 'Alundra.Blayze@incredifilms.com'),
(5, 'Andrade', 'Andrade', '1989-11-03', 'Andrade.Andrade@incredifilms.com'),
(6, 'Andre', 'Giant', '1946-05-19', 'Andre.Giant@incredifilms.com'),
(7, 'Antonio', 'Cesaro', '1980-12-27', 'Antonio.Cesaro@incredifilms.com'),
(8, 'Antonio', 'Inoki', '1943-02-20', 'Antonio.Inoki@incredifilms.com'),
(9, 'Apollo', 'Crews', '1987-08-22', 'Apollo.Crews@incredifilms.com'),
(10, 'Asuka', 'Asuka', '1981-09-26', 'Asuka.Asuka@incredifilms.com');

-- --------------------------------------------------------

--
-- Table structure for table `Genre`
--

CREATE TABLE `Genre` (
  `genre_id` int(11) NOT NULL,
  `genre_name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `Genre`
--

INSERT INTO `Genre` (`genre_id`, `genre_name`) VALUES
(2, 'Children & Family Movies'),
(3, 'Comedies'),
(1, 'Documentaries'),
(6, 'Dramas'),
(4, 'Independent Movies'),
(5, 'International Movies'),
(7, 'Music & Musicals'),
(8, 'Thrillers');

-- --------------------------------------------------------

--
-- Table structure for table `Movie`
--

CREATE TABLE `Movie` (
  `movie_id` int(11) NOT NULL,
  `movie_name` varchar(100) NOT NULL,
  `runtime_min` int(4) NOT NULL,
  `mpa_rating` varchar(5) NOT NULL,
  `movie_year` year(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `Movie`
--

INSERT INTO `Movie` (`movie_id`, `movie_name`, `runtime_min`, `mpa_rating`, `movie_year`) VALUES
(2, 'Confessions of an Invisible Girl', 91, 'TV-PG', 2021),
(1, 'Dick Johnson Is Dead', 90, 'PG-13', 2020),
(6, 'Je Suis Karl', 127, 'TV-MA', 2021),
(5, 'Motu Patlu in the Game of Zones', 87, 'TV-Y7', 2019),
(3, 'Sankofa', 125, 'TV-MA', 1993),
(4, 'The Starling', 104, 'PG-13', 2021);

-- --------------------------------------------------------

--
-- Table structure for table `Movie_Genre`
--

CREATE TABLE `Movie_Genre` (
  `movie_genre_id` int(11) NOT NULL,
  `movie_id` int(11) DEFAULT NULL,
  `genre_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `Movie_Genre`
--

INSERT INTO `Movie_Genre` (`movie_genre_id`, `movie_id`, `genre_id`) VALUES
(143, 1, 1),
(144, 2, 2),
(145, 2, 3),
(146, 3, 6),
(147, 3, 4),
(148, 3, 5),
(149, 4, 3),
(150, 4, 6);

-- --------------------------------------------------------

--
-- Table structure for table `Showtime`
--

CREATE TABLE `Showtime` (
  `showtime_id` int(11) NOT NULL,
  `showtime_date_time` datetime NOT NULL,
  `movie_id` int(11) DEFAULT NULL,
  `theater_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `Showtime`
--

INSERT INTO `Showtime` (`showtime_id`, `showtime_date_time`, `movie_id`, `theater_id`) VALUES
(3, '2023-02-10 16:00:00', 1, 1),
(4, '2023-02-10 15:00:00', 2, 4),
(5, '2023-02-14 17:00:00', 2, 4),
(6, '2023-02-14 18:00:00', 3, 2),
(7, '2023-02-16 12:00:00', 3, 5),
(8, '2023-02-16 15:30:00', 4, 1);

-- --------------------------------------------------------

--
-- Table structure for table `Theater`
--

CREATE TABLE `Theater` (
  `theater_id` int(11) NOT NULL,
  `theater_name` varchar(50) DEFAULT NULL,
  `no_of_seats` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `Theater`
--

INSERT INTO `Theater` (`theater_id`, `theater_name`, `no_of_seats`) VALUES
(6, 'IncrediFilms Lake View', 250),
(4, 'IncrediFilms Lincoln Square', 250),
(5, 'IncrediFilms North Center', 250),
(1, 'IncrediFilms Rogers Park', 300),
(3, 'IncrediFilms Uptown', 300),
(2, 'IncrediFilms West Ridge', 300);

-- --------------------------------------------------------

--
-- Table structure for table `Ticket`
--

CREATE TABLE `Ticket` (
  `ticket_id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `price` decimal(3,2) NOT NULL,
  `payment_method` varchar(45) DEFAULT NULL,
  `showtime_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `Ticket`
--

INSERT INTO `Ticket` (`ticket_id`, `customer_id`, `price`, `payment_method`, `showtime_id`) VALUES
(1, 10, '9.00', 'CASH', 3),
(2, 1, '9.00', 'CASH', 3),
(3, 1, '9.00', 'CARD', 8);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Customer`
--
ALTER TABLE `Customer`
  ADD PRIMARY KEY (`customer_id`),
  ADD UNIQUE KEY `customer_id` (`customer_id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `Key` (`first_name`,`last_name`,`dob`,`email`);

--
-- Indexes for table `Genre`
--
ALTER TABLE `Genre`
  ADD PRIMARY KEY (`genre_id`),
  ADD UNIQUE KEY `genre_id` (`genre_id`),
  ADD KEY `Key` (`genre_name`);

--
-- Indexes for table `Movie`
--
ALTER TABLE `Movie`
  ADD PRIMARY KEY (`movie_id`),
  ADD UNIQUE KEY `movie_id` (`movie_id`),
  ADD KEY `Key` (`movie_name`,`runtime_min`,`mpa_rating`,`movie_year`);

--
-- Indexes for table `Movie_Genre`
--
ALTER TABLE `Movie_Genre`
  ADD PRIMARY KEY (`movie_genre_id`),
  ADD KEY `movie_id` (`movie_id`),
  ADD KEY `genre_id` (`genre_id`);

--
-- Indexes for table `Showtime`
--
ALTER TABLE `Showtime`
  ADD PRIMARY KEY (`showtime_id`),
  ADD UNIQUE KEY `showtime_id` (`showtime_id`),
  ADD KEY `movie_id` (`movie_id`),
  ADD KEY `theater_id` (`theater_id`),
  ADD KEY `Key` (`showtime_date_time`);

--
-- Indexes for table `Theater`
--
ALTER TABLE `Theater`
  ADD PRIMARY KEY (`theater_id`),
  ADD UNIQUE KEY `theater_id` (`theater_id`),
  ADD KEY `Key` (`theater_name`,`no_of_seats`);

--
-- Indexes for table `Ticket`
--
ALTER TABLE `Ticket`
  ADD PRIMARY KEY (`ticket_id`),
  ADD UNIQUE KEY `ticket_id` (`ticket_id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `showtime_id` (`showtime_id`),
  ADD KEY `Key` (`price`,`payment_method`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Customer`
--
ALTER TABLE `Customer`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=178;

--
-- AUTO_INCREMENT for table `Genre`
--
ALTER TABLE `Genre`
  MODIFY `genre_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `Movie`
--
ALTER TABLE `Movie`
  MODIFY `movie_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `Movie_Genre`
--
ALTER TABLE `Movie_Genre`
  MODIFY `movie_genre_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=151;

--
-- AUTO_INCREMENT for table `Showtime`
--
ALTER TABLE `Showtime`
  MODIFY `showtime_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `Theater`
--
ALTER TABLE `Theater`
  MODIFY `theater_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `Ticket`
--
ALTER TABLE `Ticket`
  MODIFY `ticket_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Movie_Genre`
--
ALTER TABLE `Movie_Genre`
  ADD CONSTRAINT `genre_id` FOREIGN KEY (`genre_id`) REFERENCES `Genre` (`genre_id`),
  ADD CONSTRAINT `movie_id` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`movie_id`);

--
-- Constraints for table `Showtime`
--
ALTER TABLE `Showtime`
  ADD CONSTRAINT `Showtime_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`movie_id`),
  ADD CONSTRAINT `Showtime_ibfk_2` FOREIGN KEY (`theater_id`) REFERENCES `Theater` (`theater_id`);

--
-- Constraints for table `Ticket`
--
ALTER TABLE `Ticket`
  ADD CONSTRAINT `Ticket_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `Customer` (`customer_id`),
  ADD CONSTRAINT `Ticket_ibfk_2` FOREIGN KEY (`showtime_id`) REFERENCES `Showtime` (`showtime_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
