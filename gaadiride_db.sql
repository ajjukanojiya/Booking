-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 16, 2026 at 03:06 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gaadiride_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `id` int(11) NOT NULL,
  `rideId` int(11) NOT NULL,
  `passenger` varchar(191) NOT NULL DEFAULT 'Guest',
  `seats` int(11) NOT NULL DEFAULT 1,
  `totalPrice` int(11) NOT NULL DEFAULT 0,
  `status` varchar(191) NOT NULL DEFAULT 'Confirmed',
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`id`, `rideId`, `passenger`, `seats`, `totalPrice`, `status`, `createdAt`) VALUES
(1, 5, 'Guest User', 1, 200, 'Confirmed', '2026-05-16 08:12:54.071'),
(2, 5, 'Guest User', 1, 200, 'Confirmed', '2026-05-16 08:13:08.127'),
(3, 6, 'Guest User', 1, 200, 'Confirmed', '2026-05-16 09:28:10.841'),
(4, 5, 'Guest User', 1, 200, 'Confirmed', '2026-05-16 12:31:27.710'),
(5, 7, 'demo', 1, 200, 'Confirmed', '2026-05-16 12:38:56.413');

-- --------------------------------------------------------

--
-- Table structure for table `ride`
--

CREATE TABLE `ride` (
  `id` int(11) NOT NULL,
  `pickup` varchar(191) NOT NULL,
  `dropoff` varchar(191) NOT NULL,
  `date` varchar(191) DEFAULT NULL,
  `time` varchar(191) DEFAULT NULL,
  `passengers` int(11) NOT NULL DEFAULT 1,
  `driverName` varchar(191) NOT NULL DEFAULT 'Anonymous',
  `price` int(11) NOT NULL DEFAULT 0,
  `rating` varchar(191) NOT NULL DEFAULT '5.0',
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ride`
--

INSERT INTO `ride` (`id`, `pickup`, `dropoff`, `date`, `time`, `passengers`, `driverName`, `price`, `rating`, `createdAt`) VALUES
(1, 'Noida', 'Gurugram', NULL, NULL, 1, 'Ravi Kumar', 90, '5.0', '2026-05-16 06:21:41.635'),
(2, 'Delhi', 'Noida', NULL, NULL, 1, 'Sharad', 120, '4.8', '2026-05-16 06:21:41.635'),
(3, 'Faridabad', 'Delhi', NULL, NULL, 1, 'Amit', 85, '4.5', '2026-05-16 06:21:41.635'),
(4, 'Gurugram', 'Faridabad', NULL, NULL, 1, 'Rahul', 150, '4.9', '2026-05-16 06:21:41.635'),
(5, 'NOIDA', 'JABALPUR', '2026-05-16', '15:45', 1, 'New Driver', 200, '5.0', '2026-05-16 07:21:35.709'),
(6, 'jabalpur', 'bhopal', '2026-05-16', '14:56', 2, 'Ajay', 200, '5.0', '2026-05-16 09:26:37.658'),
(7, 'noida', 'barili', '2026-05-17', '19:08', 2, 'demo', 200, '5.0', '2026-05-16 12:38:02.465');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `createdAt`) VALUES
(1, 'Ajay', 'ajay@yopmail.com', '$2b$10$6bBn2ZfXhuS/pOUQnZuwKu9GFyOla7u1clZJCCP7pgrScyULMjVfu', '2026-05-16 09:25:06.085'),
(2, 'satish', 'satish@yopmail.com', '$2b$10$kwI9EO78Zfa9vgzccylrG.oc9xAxoYiQPIU2Vwrf8VFaJbJZQEFhO', '2026-05-16 12:16:56.226'),
(3, 'demo', 'demo@yopmail.com', '$2b$10$ZFQbz9Cl9DQt5wUTIJ5vZOZT8LKOyXZwylAlrsERvvieG2RxHe5V2', '2026-05-16 12:33:59.963');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ride`
--
ALTER TABLE `ride`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_email_key` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `ride`
--
ALTER TABLE `ride`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
