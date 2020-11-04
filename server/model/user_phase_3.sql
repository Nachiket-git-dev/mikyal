-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 02, 2020 at 08:41 AM
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
  `company` varchar(300) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `street` varchar(200) DEFAULT NULL,
  `zip` varchar(50) DEFAULT NULL,
  `city` varchar(200) DEFAULT NULL,
  `note` varchar(500) DEFAULT NULL,
  `create_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `invoices`
--

CREATE TABLE `invoices` (
  `invoice_id` int(20) NOT NULL,
  `invoice_name` varchar(200) DEFAULT NULL,
  `client_id` int(20) DEFAULT NULL,
  `project_id` int(10) DEFAULT NULL,
  `due_date` varchar(200) DEFAULT NULL,
  `tax` int(5) NOT NULL DEFAULT '0',
  `discount` int(5) NOT NULL DEFAULT '0',
  `tax_amount` decimal(12,2) DEFAULT NULL,
  `discount_amount` decimal(12,2) DEFAULT NULL,
  `house_no` varchar(200) DEFAULT NULL,
  `street` varchar(200) DEFAULT NULL,
  `city` varchar(200) DEFAULT NULL,
  `zip` varchar(200) DEFAULT NULL,
  `created_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `billing_address` varchar(200) DEFAULT NULL,
  `subtotal` decimal(10,0) DEFAULT NULL,
  `discount_amt` decimal(10,0) DEFAULT NULL,
  `total` decimal(10,2) DEFAULT NULL,
  `status` int(2) DEFAULT '0',
  `client_note` varchar(500) DEFAULT NULL,
  `paiddate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `invoice_line_item`
--

CREATE TABLE `invoice_line_item` (
  `item_id` int(20) NOT NULL,
  `invoice_id` int(20) NOT NULL,
  `service_name` varchar(200) DEFAULT NULL,
  `qty` varchar(200) DEFAULT NULL,
  `discount` decimal(10,0) DEFAULT '0',
  `description` varchar(500) DEFAULT NULL,
  `unit_price` varchar(300) DEFAULT NULL,
  `price` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `portfolio_settings`
--

CREATE TABLE `portfolio_settings` (
  `portfolio_id` int(20) NOT NULL,
  `header_title` varchar(300) DEFAULT NULL,
  `header_description` varchar(500) DEFAULT NULL,
  `sub_header` varchar(500) DEFAULT NULL,
  `content` varchar(500) DEFAULT NULL,
  `footer` varchar(500) DEFAULT NULL,
  `social_facebook` varchar(500) DEFAULT NULL,
  `social_twitter` varchar(500) DEFAULT NULL,
  `social_google` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `project_id` int(50) NOT NULL,
  `client_id` int(20) DEFAULT NULL,
  `client_name` varchar(200) DEFAULT NULL,
  `client_email` varchar(200) DEFAULT NULL,
  `project_owner` varchar(200) DEFAULT NULL,
  `project_name` varchar(200) DEFAULT NULL,
  `project_subject` varchar(500) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `start_date` varchar(50) DEFAULT NULL,
  `end_date` varchar(50) DEFAULT NULL,
  `status` varchar(100) DEFAULT '0',
  `budget` decimal(10,2) DEFAULT NULL,
  `project_expenses` decimal(10,2) DEFAULT NULL,
  `create_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `portfolio` int(6) NOT NULL DEFAULT '0',
  `address1` varchar(400) DEFAULT NULL,
  `address2` varchar(400) DEFAULT NULL,
  `city` varchar(200) DEFAULT NULL,
  `state` varchar(200) DEFAULT NULL,
  `postcode` varchar(400) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `project_address`
--

CREATE TABLE `project_address` (
  `address_id` int(10) NOT NULL,
  `addr_project_id` int(10) NOT NULL,
  `address1` varchar(500) DEFAULT NULL,
  `address2` varchar(500) DEFAULT NULL,
  `city` varchar(200) DEFAULT NULL,
  `state` varchar(200) DEFAULT NULL,
  `postcode` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `project_cover`
--

CREATE TABLE `project_cover` (
  `proj_cover_id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `cover_image` mediumblob,
  `cover_header` varchar(500) DEFAULT NULL,
  `cover_text` varchar(500) DEFAULT NULL,
  `project_name` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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

-- --------------------------------------------------------

--
-- Table structure for table `project_milestone`
--

CREATE TABLE `project_milestone` (
  `milestone_id` int(10) NOT NULL,
  `project_id` int(10) NOT NULL,
  `milestone` varchar(500) DEFAULT NULL,
  `stage` int(10) DEFAULT NULL,
  `create_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `scrumboad_list`
--

CREATE TABLE `scrumboad_list` (
  `id` int(11) NOT NULL,
  `name` varchar(500) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `scrum_card`
--

CREATE TABLE `scrum_card` (
  `id` int(11) NOT NULL,
  `scrum_id` int(11) DEFAULT NULL,
  `title` varchar(400) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `description` varchar(400) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  `start_date` date DEFAULT NULL,
  `stage` int(10) DEFAULT '0',
  `isdone` tinyint(1) NOT NULL DEFAULT '0',
  `autogenerated` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user_goals`
--

CREATE TABLE `user_goals` (
  `goal_id` int(50) NOT NULL,
  `goal_type` varchar(200) DEFAULT NULL,
  `total_goal` varchar(300) DEFAULT NULL,
  `goal_duration` varchar(100) DEFAULT NULL,
  `completed_goal` varchar(300) DEFAULT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  ADD PRIMARY KEY (`invoice_id`),
  ADD KEY `project_id` (`project_id`);

--
-- Indexes for table `invoice_line_item`
--
ALTER TABLE `invoice_line_item`
  ADD PRIMARY KEY (`item_id`),
  ADD KEY `invoice_id` (`invoice_id`);

--
-- Indexes for table `portfolio_settings`
--
ALTER TABLE `portfolio_settings`
  ADD PRIMARY KEY (`portfolio_id`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`project_id`),
  ADD KEY `client_id` (`client_id`);

--
-- Indexes for table `project_address`
--
ALTER TABLE `project_address`
  ADD PRIMARY KEY (`address_id`),
  ADD KEY `addr_project_id` (`addr_project_id`);

--
-- Indexes for table `project_cover`
--
ALTER TABLE `project_cover`
  ADD PRIMARY KEY (`proj_cover_id`),
  ADD UNIQUE KEY `project_id` (`project_id`);

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
-- Indexes for table `project_milestone`
--
ALTER TABLE `project_milestone`
  ADD PRIMARY KEY (`milestone_id`);

--
-- Indexes for table `scrumboad_list`
--
ALTER TABLE `scrumboad_list`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `scrum_card`
--
ALTER TABLE `scrum_card`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`task_id`);

--
-- Indexes for table `user_goals`
--
ALTER TABLE `user_goals`
  ADD PRIMARY KEY (`goal_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `client`
--
ALTER TABLE `client`
  MODIFY `client_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `invoices`
--
ALTER TABLE `invoices`
  MODIFY `invoice_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
--
-- AUTO_INCREMENT for table `invoice_line_item`
--
ALTER TABLE `invoice_line_item`
  MODIFY `item_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
--
-- AUTO_INCREMENT for table `portfolio_settings`
--
ALTER TABLE `portfolio_settings`
  MODIFY `portfolio_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `project_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
--
-- AUTO_INCREMENT for table `project_address`
--
ALTER TABLE `project_address`
  MODIFY `address_id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `project_cover`
--
ALTER TABLE `project_cover`
  MODIFY `proj_cover_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `project_file`
--
ALTER TABLE `project_file`
  MODIFY `project_file_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
--
-- AUTO_INCREMENT for table `project_images`
--
ALTER TABLE `project_images`
  MODIFY `image_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `project_link`
--
ALTER TABLE `project_link`
  MODIFY `link_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT for table `project_milestone`
--
ALTER TABLE `project_milestone`
  MODIFY `milestone_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `scrumboad_list`
--
ALTER TABLE `scrumboad_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `scrum_card`
--
ALTER TABLE `scrum_card`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `task_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;
--
-- AUTO_INCREMENT for table `user_goals`
--
ALTER TABLE `user_goals`
  MODIFY `goal_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
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
-- Constraints for table `project_address`
--
ALTER TABLE `project_address`
  ADD CONSTRAINT `project_id_adress` FOREIGN KEY (`addr_project_id`) REFERENCES `project` (`project_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `project_cover`
--
ALTER TABLE `project_cover`
  ADD CONSTRAINT `project_id_fk_cover_images` FOREIGN KEY (`project_id`) REFERENCES `project` (`project_id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
