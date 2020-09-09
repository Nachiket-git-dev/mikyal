-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 21, 2020 at 01:47 PM
-- Server version: 5.7.14
-- PHP Version: 7.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `user_phase_3`
--

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

CREATE TABLE `client` (
  `client_id` int(10) NOT NULL,
  `first_name` varchar(200) DEFAULT NULL,
  `last_name` varchar(200) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `street` varchar(200) DEFAULT NULL,
  `zip` varchar(50) DEFAULT NULL,
  `city` varchar(200) DEFAULT NULL,
  `note` varchar(500) DEFAULT NULL,
  `create_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `client`
--

INSERT INTO `client` (`client_id`, `first_name`, `last_name`, `email`, `phone`, `street`, `zip`, `city`, `note`, `create_date`, `modified_date`) VALUES
(4, 'test123', 'last123', 'test1234@test.com', '1234567890', 'street1 abc street', '411023', 'pune', 'some notes', '2020-05-05 16:34:00', '2020-05-05 16:34:00');

-- --------------------------------------------------------

--
-- Table structure for table `invoices`
--

CREATE TABLE `invoices` (
  `invoice_id` int(20) NOT NULL,
  `invoice_name` varchar(200) DEFAULT NULL,
  `client_id` int(20) DEFAULT NULL,
  `due_date` varchar(200) DEFAULT NULL,
  `tax` int(5) NOT NULL DEFAULT '0',
  `discount` int(5) NOT NULL DEFAULT '0',
  `tax_amount` decimal(12,2) DEFAULT NULL,
  `discount_amount` decimal(12,2) DEFAULT NULL,
  `created_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `billing_address` varchar(200) DEFAULT NULL,
  `total` decimal(10,2) DEFAULT NULL,
  `status` int(2) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `invoices`
--

INSERT INTO `invoices` (`invoice_id`, `invoice_name`, `client_id`, `due_date`, `tax`, `discount`, `tax_amount`, `discount_amount`, `created_date`, `billing_address`, `total`, `status`) VALUES
(10, 'test', 4, '2020-05-22', 10, 5, '60.60', '30.00', '2020-05-20 19:00:28', 'pashan,hadapsar', '627.00', 0),
(11, 'INV_4', 4, '2020-05-22', 0, 0, '0.00', '0.00', '2020-05-20 19:03:35', 'pashan123', '0.00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `invoice_line_item`
--

CREATE TABLE `invoice_line_item` (
  `item_id` int(20) NOT NULL,
  `invoice_id` int(20) NOT NULL,
  `service_name` varchar(200) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `price` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `invoice_line_item`
--

INSERT INTO `invoice_line_item` (`item_id`, `invoice_id`, `service_name`, `description`, `price`) VALUES
(7, 10, 'test service', 'test descri', '200'),
(8, 11, 'testr', 'test descr', '200'),
(9, 10, 'test', 'googlesky', '200'),
(11, 10, 'test', 'googlesky', '200');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `project_id` int(50) NOT NULL,
  `client_id` int(20) DEFAULT NULL,
  `client_name` varchar(200) DEFAULT NULL,
  `project_name` varchar(200) DEFAULT NULL,
  `project_subject` varchar(500) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `start_date` varchar(50) DEFAULT NULL,
  `end_date` varchar(50) DEFAULT NULL,
  `status` varchar(100) DEFAULT '0',
  `budget` int(100) DEFAULT NULL,
  `create_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `portfolio` int(6) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`project_id`, `client_id`, `client_name`, `project_name`, `project_subject`, `description`, `start_date`, `end_date`, `status`, `budget`, `create_date`, `portfolio`) VALUES
(30, NULL, NULL, 'test last', 'test descriptioh', '<p>adgrgrwgrw</p>', '2020-05-08', '2020-05-15', '0', 200, '2020-05-02 18:53:41', 0),
(32, 4, 'test123 last123', 'test demo project', 'this is demo project subject', '<p>this is project description </p>', '2020-05-05', '2020-05-14', '0', 200, '2020-05-05 16:42:17', 0);

-- --------------------------------------------------------

--
-- Table structure for table `project_file`
--

CREATE TABLE `project_file` (
  `project_file_id` int(50) NOT NULL,
  `project_id` int(50) DEFAULT NULL,
  `filename` varchar(200) DEFAULT NULL,
  `size` varchar(200) DEFAULT NULL,
  `file_path` varchar(200) DEFAULT NULL,
  `file_blob` mediumblob,
  `create_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `project_images`
--

CREATE TABLE `project_images` (
  `image_id` int(10) NOT NULL,
  `project_id` int(10) NOT NULL,
  `imgblob` mediumblob,
  `image_name` varchar(200) DEFAULT NULL,
  `portfolio` int(4) NOT NULL DEFAULT '0' COMMENT '0:no,1:yes'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `project_link`
--

CREATE TABLE `project_link` (
  `link_id` int(20) NOT NULL,
  `project_id` int(20) NOT NULL,
  `project_token` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `project_link`
--

INSERT INTO `project_link` (`link_id`, `project_id`, `project_token`) VALUES
(8, 30, '676c8473ef533c71dc790b95a06d5e24'),
(9, 32, '722de694cb7b3eb477f2a1253d59e0e2');

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `task_id` int(20) NOT NULL,
  `project_id` int(11) DEFAULT NULL,
  `task_header` varchar(400) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `created_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `stage` int(10) DEFAULT NULL,
  `isdone` tinyint(1) NOT NULL DEFAULT '0',
  `autogenerated` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`task_id`, `project_id`, `task_header`, `description`, `created_date`, `stage`, `isdone`, `autogenerated`) VALUES
(1, NULL, 'Meeting with Client At 4Pm', 'wfeqfe ethtetgdr yturttrref  ', '2020-04-30 19:24:15', 2, 1, 0),
(4, NULL, 'testing Task', 'this is testinh des', '2020-05-02 13:24:55', 1, 1, 0),
(5, 30, 'create Project MilesStones', NULL, '2020-05-02 18:53:41', 0, 0, 1),
(6, 30, 'Make Project Documents', NULL, '2020-05-02 18:53:41', 0, 0, 1),
(7, 30, 'get First Payment of 400', NULL, '2020-05-02 19:55:35', 2, 0, 0),
(8, 31, 'create Project MilesStones', NULL, '2020-05-04 13:55:14', 0, 0, 1),
(9, 31, 'Make Project Documents', NULL, '2020-05-04 13:55:15', 0, 0, 1),
(10, 24, 'deplyoed the project', NULL, '2020-05-04 18:02:50', 2, 0, 0),
(11, NULL, 'some random task', NULL, '2020-05-05 16:36:24', 0, 0, 0),
(12, 30, 'make  server ready', NULL, '2020-05-05 16:39:46', 0, 1, 0),
(13, 32, 'Create Project MilesStones', NULL, '2020-05-05 16:42:17', 0, 0, 1),
(14, 32, 'Make Project Documents', NULL, '2020-05-05 16:42:17', 0, 0, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`client_id`);

--
-- Indexes for table `invoices`
--
ALTER TABLE `invoices`
  ADD PRIMARY KEY (`invoice_id`);

--
-- Indexes for table `invoice_line_item`
--
ALTER TABLE `invoice_line_item`
  ADD PRIMARY KEY (`item_id`),
  ADD KEY `invoice_id` (`invoice_id`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`project_id`),
  ADD KEY `client_id` (`client_id`);

--
-- Indexes for table `project_file`
--
ALTER TABLE `project_file`
  ADD PRIMARY KEY (`project_file_id`),
  ADD KEY `project_id` (`project_id`);

--
-- Indexes for table `project_images`
--
ALTER TABLE `project_images`
  ADD PRIMARY KEY (`image_id`),
  ADD KEY `project_id` (`project_id`);

--
-- Indexes for table `project_link`
--
ALTER TABLE `project_link`
  ADD PRIMARY KEY (`link_id`),
  ADD UNIQUE KEY `project_id` (`project_id`);

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`task_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `client`
--
ALTER TABLE `client`
  MODIFY `client_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `invoices`
--
ALTER TABLE `invoices`
  MODIFY `invoice_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `invoice_line_item`
--
ALTER TABLE `invoice_line_item`
  MODIFY `item_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `project_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
--
-- AUTO_INCREMENT for table `project_file`
--
ALTER TABLE `project_file`
  MODIFY `project_file_id` int(50) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `project_images`
--
ALTER TABLE `project_images`
  MODIFY `image_id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `project_link`
--
ALTER TABLE `project_link`
  MODIFY `link_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `task_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `invoice_line_item`
--
ALTER TABLE `invoice_line_item`
  ADD CONSTRAINT `fk_invoice_id` FOREIGN KEY (`invoice_id`) REFERENCES `invoices` (`invoice_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `project`
--
ALTER TABLE `project`
  ADD CONSTRAINT `client_id_fk` FOREIGN KEY (`client_id`) REFERENCES `client` (`client_id`);

--
-- Constraints for table `project_file`
--
ALTER TABLE `project_file`
  ADD CONSTRAINT `project_id_fk` FOREIGN KEY (`project_id`) REFERENCES `project` (`project_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `project_images`
--
ALTER TABLE `project_images`
  ADD CONSTRAINT `project_id_image` FOREIGN KEY (`project_id`) REFERENCES `project` (`project_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `project_link`
--
ALTER TABLE `project_link`
  ADD CONSTRAINT `project_id_link` FOREIGN KEY (`project_id`) REFERENCES `project` (`project_id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
