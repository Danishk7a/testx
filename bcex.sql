-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 23, 2023 at 04:56 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bcex`
--

-- --------------------------------------------------------

--
-- Table structure for table `addresses`
--

CREATE TABLE `addresses` (
  `userid` varchar(255) NOT NULL,
  `usdtaddress` varchar(255) NOT NULL,
  `ethaddress` varchar(255) NOT NULL,
  `btcaddress` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `addresses`
--

INSERT INTO `addresses` (`userid`, `usdtaddress`, `ethaddress`, `btcaddress`) VALUES
('747bcee4-2cb3-4c3d-b3d3-91096b135310', '0x3DB379C1029C99b59f9C36595af49c42f18286c5', '0xeCBf3A65aE64333006642d30ad2032b10B8dA7a9', '0xf581a660AE3Ec4Bf46A71626b9F627B44Ce9cafB'),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', '0x41EA16F9aA5cb22E998D4CC216e2afc66809B4D5', '0x9462Ee592186f12c629Cc6884115d5bf8C72B8E1', '0xFA609Fe05a062589e77c5B9D3F23051105320F45'),
('A20307F1', '0xCb0efC201b7AA55A7c9424aDa3E5c0792967Ed70', '0xCd10a5125bfae44F8bFCf1446038355e8A9bf91E', '0x7ee8f3790894d834B601B51CBC2FbD2bF0B8c8Bb'),
('4BCE6829', '0x90C953bDEffF185741Ec2FE180c8DB88CC243Af2', '0x33c30eBaf04cA2A1852b1762D3D6B716DB27017c', '0x3762E0656a8368190D0e49D2C1baC32e0e402841'),
('110C2A61', '0xF56307Fe0096Fb4DDd973Fb2AE95A29b971c5cDD', '0x8a2F48cae04d325Eb388D9981e7FCcD3Aaa93f00', '0x024eb055527ceBbb65191AbC72D9Bfa9Df3Cb90e'),
('924E4BB7', '0xb1F4E44A0bE1aEd30bA49b271af86290b448cb05', '0x0834Aed55b368cf9D4e62C0c228D547837Af8C89', '0xAE00CC7B97cAc398FBc41f1bc5e5739AC4da9F96'),
('60BBDB81', '0x5523E15503972BA1d9DE2B63C7e412b54DE56759', '0x3Ec54e7f8cc3CA3E4F57ca4A4fE2b64ef94f558b', '0xaBaBbBCD87cdCca540e8e4421893D324D788C9A5'),
('41D09240', '0x93dB605CD167ED2Aa6DD095e7d81cEE1b15deBf1', '0x14add5aD60Bb6A5eCb08a70fE1F34CF35aE3Ae68', '0xbD8c5fC43545b35F268021cCefF74F965448e55E'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', '0x3DB379C1029C99b59f9C36595af49c42f18286c5', '0xeCBf3A65aE64333006642d30ad2032b10B8dA7a9', '0xf581a660AE3Ec4Bf46A71626b9F627B44Ce9cafB'),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', '0x41EA16F9aA5cb22E998D4CC216e2afc66809B4D5', '0x9462Ee592186f12c629Cc6884115d5bf8C72B8E1', '0xFA609Fe05a062589e77c5B9D3F23051105320F45'),
('A20307F1', '0xCb0efC201b7AA55A7c9424aDa3E5c0792967Ed70', '0xCd10a5125bfae44F8bFCf1446038355e8A9bf91E', '0x7ee8f3790894d834B601B51CBC2FbD2bF0B8c8Bb'),
('4BCE6829', '0x90C953bDEffF185741Ec2FE180c8DB88CC243Af2', '0x33c30eBaf04cA2A1852b1762D3D6B716DB27017c', '0x3762E0656a8368190D0e49D2C1baC32e0e402841'),
('110C2A61', '0xF56307Fe0096Fb4DDd973Fb2AE95A29b971c5cDD', '0x8a2F48cae04d325Eb388D9981e7FCcD3Aaa93f00', '0x024eb055527ceBbb65191AbC72D9Bfa9Df3Cb90e'),
('924E4BB7', '0xb1F4E44A0bE1aEd30bA49b271af86290b448cb05', '0x0834Aed55b368cf9D4e62C0c228D547837Af8C89', '0xAE00CC7B97cAc398FBc41f1bc5e5739AC4da9F96'),
('60BBDB81', '0x5523E15503972BA1d9DE2B63C7e412b54DE56759', '0x3Ec54e7f8cc3CA3E4F57ca4A4fE2b64ef94f558b', '0xaBaBbBCD87cdCca540e8e4421893D324D788C9A5'),
('41D09240', '0x93dB605CD167ED2Aa6DD095e7d81cEE1b15deBf1', '0x14add5aD60Bb6A5eCb08a70fE1F34CF35aE3Ae68', '0xbD8c5fC43545b35F268021cCefF74F965448e55E');

-- --------------------------------------------------------

--
-- Table structure for table `coinlist`
--

CREATE TABLE `coinlist` (
  `coinid` int(11) NOT NULL,
  `Name` varchar(55) NOT NULL,
  `symbol` varchar(10) NOT NULL,
  `coin` varchar(55) NOT NULL,
  `backCoin` varchar(55) NOT NULL,
  `quantity` double DEFAULT NULL,
  `price` float DEFAULT NULL,
  `custom` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `coinlist`
--

INSERT INTO `coinlist` (`coinid`, `Name`, `symbol`, `coin`, `backCoin`, `quantity`, `price`, `custom`) VALUES
(786501, 'bitcoin', 'BTCUSDT', 'BTC', 'USDT', NULL, NULL, 0),
(786502, 'ethereum', 'ETHUSDT', 'ETH', 'USDT', NULL, NULL, 0),
(786503, 'altcoins', 'DOGEUSDT', 'DOGE', 'USDT', NULL, NULL, 0),
(786504, '', 'LUNAUSDT', 'LUNA', 'USDT', NULL, NULL, 0),
(786505, 'ripple', 'XRPUSDT', 'XRP', 'USDT', NULL, NULL, 0),
(786506, 'cardano', 'ADAUSDT', 'ADA', 'USDT', NULL, NULL, 0),
(786507, 'solana', 'SOLUSDT', 'SOL', 'USDT', NULL, NULL, 0),
(786508, 'litecoin', 'LTCUSDT', 'LTC', 'USDT', NULL, NULL, 0),
(786509, 'binancecoin', 'BNBUSDT', 'BNB', 'USDT', NULL, NULL, 0),
(786511, '', 'BTCBUSD', 'BTC', 'BUSD', NULL, NULL, 0),
(786512, '', 'BCEXUSDT', 'BCEX', 'USDT', -16523.304353252868, 0.05, 1),
(786523, '', 'SHIBUSDT', 'SHIB', 'USDT', NULL, NULL, 0),
(786524, 'polkadot', 'DOTUSDT', 'DOT', 'USDT', NULL, NULL, 0),
(786525, 'tron', 'TRXUSDT', 'TRX', 'USDT', NULL, NULL, 0),
(786526, '', 'EOSUSDT', 'EOS', 'USDT', NULL, NULL, 0),
(786527, '', 'MTLUSDT', 'MTL', 'USDT', NULL, NULL, 0),
(786528, '', 'GMTUSDT', 'GMT', 'USDT', NULL, NULL, 0),
(786529, '', 'SXPUSDT', 'SXP', 'USDT', NULL, NULL, 0),
(786530, '', 'RUNEUSDT', 'RUNE', 'USDT', NULL, NULL, 0),
(786531, '', 'XLMUSDT', 'XLM', 'USDT', NULL, NULL, 0),
(786532, '', 'ARPAUSDT', 'ARPA', 'USDT', NULL, NULL, 0),
(786533, '', 'PEPEUSDT', 'PEPE', 'USDT', NULL, NULL, 0),
(786534, '', 'CAKEUSDT', 'CAKE', 'USDT', NULL, NULL, 0),
(786535, '', 'WAVESUSDT', 'WAVES', 'USDT', NULL, NULL, 0),
(786536, '', 'MANAUSDT', 'MANA', 'USDT', NULL, NULL, 0),
(786537, '', 'JOEUSDT', 'JOE', 'USDT', NULL, NULL, 0),
(786538, '', 'SNXUSDT', 'SNX', 'USDT', NULL, NULL, 0),
(786539, '', 'NEOUSDT', 'NEO', 'USDT', NULL, NULL, 0),
(786542, '', 'TRXBUSD', 'TRX', 'BUSD', NULL, NULL, 0),
(786544, '', 'XRPBTC', 'XRP', 'BTC', NULL, NULL, 0),
(786545, '', 'XRPDOGE', 'XRP', 'DOGE', NULL, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `customcoin`
--

CREATE TABLE `customcoin` (
  `coinid` int(11) NOT NULL,
  `symbol` varchar(55) NOT NULL,
  `quantity` float NOT NULL,
  `price` float NOT NULL,
  `dt` datetime NOT NULL DEFAULT current_timestamp(),
  `type` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customcoin`
--

INSERT INTO `customcoin` (`coinid`, `symbol`, `quantity`, `price`, `dt`, `type`) VALUES
(1, 'BCEXUSDT', -131.407, 0.15, '2023-05-20 01:59:09', 1),
(2, 'BCEXUSDT', -356.94, 0.25, '2023-05-20 01:59:58', 1),
(3, 'BCEXUSDT', -575.84, 0.35, '2023-05-20 02:00:42', 1),
(4, 'BCEXUSDT', -671.36, 0.45, '2023-05-20 02:08:18', 1),
(5, 'BCEXUSDT', -750.96, 0.55, '2023-05-20 02:12:48', 1),
(6, 'BCEXUSDT', -787.142, 0.65, '2023-05-20 02:14:48', 1),
(7, 'BCEXUSDT', -822.35, 0.75, '2023-05-20 02:32:56', 1),
(8, 'BCEXUSDT', -874.396, 0.85, '2023-05-20 02:35:07', 1),
(9, 'BCEXUSDT', -919.306, 0.8501, '2023-05-20 04:56:30', 1),
(10, 'BCEXUSDT', -1010.6, 0.9501, '2023-05-20 04:59:06', 1),
(11, 'BCEXUSDT', -1088.45, 0.95, '2023-05-20 04:59:33', 1),
(12, 'BCEXUSDT', -1088.45, 0.9499, '2023-05-20 15:18:14', 1),
(13, 'BCEXUSDT', -1109.4, 0.9498, '2023-05-20 15:25:20', 1),
(14, 'BCEXUSDT', -1128.25, 0.9499, '2023-05-21 16:01:40', 1),
(15, 'BCEXUSDT', -1160.19, 0.9498, '2023-05-21 16:01:52', 1),
(16, 'BCEXUSDT', -1192.13, 0.9497, '2023-05-22 01:48:37', 1),
(17, 'BCEXUSDT', -1231.97, 0.9498, '2023-05-22 01:59:54', 1),
(18, 'BCEXUSDT', -1451.53, 0.9499, '2023-05-22 12:32:01', 1),
(19, 'BCEXUSDT', -1453.32, 0.95, '2023-05-22 15:41:47', 1),
(20, 'BCEXUSDT', -1456.32, 0.9499, '2023-05-22 15:42:01', 1),
(21, 'BCEXUSDT', -1476.28, 0.95, '2023-05-22 15:46:55', 1),
(22, 'BCEXUSDT', -1499.23, 0.9499, '2023-05-22 15:47:08', 1),
(23, 'BCEXUSDT', -1579.07, 0.95, '2023-05-22 16:06:26', 1),
(24, 'BCEXUSDT', -1584.06, 0.9499, '2023-05-22 16:06:28', 1),
(25, 'BCEXUSDT', -1616, 0.9498, '2023-05-22 16:19:39', 1),
(26, 'BCEXUSDT', -1815.6, 0.9497, '2023-05-26 17:14:43', 1),
(27, 'BCEXUSDT', -10724.4, 0.9496, '2023-05-26 17:46:49', 1),
(28, 'BCEXUSDT', -11775.3, 0.9497, '2023-05-26 17:48:26', 1),
(29, 'BCEXUSDT', -11828.7, 0.0499, '2023-05-26 17:52:37', 1),
(30, 'BCEXUSDT', -12327.7, 0.0499, '2023-05-26 17:57:56', 1),
(31, 'BCEXUSDT', -14327.7, 0.05, '2023-05-26 18:01:44', 1),
(32, 'BCEXUSDT', -16323.7, 0.0501, '2023-05-26 18:02:21', 1),
(33, 'BCEXUSDT', -16523.3, 0.05, '2023-05-26 18:02:47', 1);

-- --------------------------------------------------------

--
-- Table structure for table `emailverification`
--

CREATE TABLE `emailverification` (
  `UserId` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `vcode` int(11) NOT NULL,
  `createddate` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `emailverification`
--

INSERT INTO `emailverification` (`UserId`, `email`, `vcode`, `createddate`) VALUES
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 'wearning52@gmail.com', 808250, '2023-04-21 03:38:08'),
('d8591c30-7545-4501-b633-96e650d2a5a0', 'zaratarakkum@gmail.com', 527232, '2023-04-21 03:54:17'),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', 'cryptobtc349@gmail.com', 733957, '2023-05-13 02:08:48'),
('0239ab3a-da59-42b2-a16f-e79dadec4869', 'kabac79405@carpetra.com', 544001, '2023-05-13 02:10:15'),
('110C2A61', 'qnextsolution262@gmail.com', 117906, '2023-05-13 02:12:27'),
('924E4BB7', 'adm.globiz@gmail.com', 969728, '2023-05-13 22:23:17'),
('80a28164-1f22-4656-aabb-051b9bc1f7ba', 'arbtoken369@gmail.com', 485697, '2023-05-13 22:28:56'),
('4BCE6829', 'danielforry10@gmail.com', 526881, '2023-05-25 19:30:06'),
('A20307F1', 'shadan7053sid@gmail.com', 897272, '2023-05-31 15:53:50'),
('D190A240', 'mebahij708@ozatvn.com', 872870, '2023-05-31 17:03:18'),
('60BBDB81', 'yiripan278@ozatvn.com', 796163, '2023-06-03 18:16:50'),
('41D09240', 'bemideb533@ozatvn.com', 956979, '2023-06-03 22:40:32'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 'wearning52@gmail.com', 808250, '2023-04-21 03:38:08'),
('d8591c30-7545-4501-b633-96e650d2a5a0', 'zaratarakkum@gmail.com', 527232, '2023-04-21 03:54:17'),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', 'cryptobtc349@gmail.com', 733957, '2023-05-13 02:08:48'),
('0239ab3a-da59-42b2-a16f-e79dadec4869', 'kabac79405@carpetra.com', 544001, '2023-05-13 02:10:15'),
('110C2A61', 'qnextsolution262@gmail.com', 117906, '2023-05-13 02:12:27'),
('924E4BB7', 'adm.globiz@gmail.com', 969728, '2023-05-13 22:23:17'),
('80a28164-1f22-4656-aabb-051b9bc1f7ba', 'arbtoken369@gmail.com', 485697, '2023-05-13 22:28:56'),
('4BCE6829', 'danielforry10@gmail.com', 526881, '2023-05-25 19:30:06'),
('A20307F1', 'shadan7053sid@gmail.com', 897272, '2023-05-31 15:53:50'),
('D190A240', 'mebahij708@ozatvn.com', 872870, '2023-05-31 17:03:18'),
('60BBDB81', 'yiripan278@ozatvn.com', 796163, '2023-06-03 18:16:50'),
('41D09240', 'bemideb533@ozatvn.com', 956979, '2023-06-03 22:40:32');

-- --------------------------------------------------------

--
-- Table structure for table `gfa`
--

CREATE TABLE `gfa` (
  `userid` varchar(255) NOT NULL,
  `secret` varchar(255) NOT NULL,
  `dt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `inandouthistory`
--

CREATE TABLE `inandouthistory` (
  `userid` varchar(255) NOT NULL,
  `fromadd` varchar(100) NOT NULL,
  `toadd` varchar(100) NOT NULL,
  `coin` varchar(45) NOT NULL,
  `amount` float NOT NULL,
  `type` varchar(45) NOT NULL,
  `dt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `inandouthistory`
--

INSERT INTO `inandouthistory` (`userid`, `fromadd`, `toadd`, `coin`, `amount`, `type`, `dt`) VALUES
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 'admin@bcex', '747bcee4-2cb3-4c3d-b3d3-91096b135310', 'usdt', 1200, 'Deposite', '2023-05-30 02:28:20'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 'admin@bcex', '747bcee4-2cb3-4c3d-b3d3-91096b135310', 'usdt', 200, 'Deposite', '2023-05-30 02:28:25'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 'wearning52@gmail.com', 'cryptobtc349@gmail.com', 'ETH', 5, 'withdraw', '2023-05-31 15:46:03'),
('A20307F1', 'admin@bcex', 'A20307F1', 'usdt', 1200, 'Deposite', '2023-05-31 17:06:13'),
('A20307F1', 'shadan7053sid@gmail.com', 'wearning52@gmail.com', 'USDT', 300, 'withdraw', '2023-06-02 16:03:54'),
('A20307F1', 'shadan7053sid@gmail.com', 'wearning52@gmail.com', 'USDT', 230, 'withdraw', '2023-06-02 16:06:17'),
('A20307F1', 'shadan7053sid@gmail.com', 'wearning52@gmail.com', 'USDT', 80, 'withdraw', '2023-06-02 16:10:15'),
('A20307F1', 'shadan7053sid@gmail.com', 'wearning52@gmail.com', 'USDT', 12, 'withdraw', '2023-06-02 16:11:33'),
('60BBDB81', 'admin@bcex', '60BBDB81', 'usdt', 1200, 'Deposite', '2023-06-03 18:19:21'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 'admin@bcex', '747bcee4-2cb3-4c3d-b3d3-91096b135310', 'usdt', 1200, 'Deposite', '2023-05-30 02:28:20'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 'admin@bcex', '747bcee4-2cb3-4c3d-b3d3-91096b135310', 'usdt', 200, 'Deposite', '2023-05-30 02:28:25'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 'wearning52@gmail.com', 'cryptobtc349@gmail.com', 'ETH', 5, 'withdraw', '2023-05-31 15:46:03'),
('A20307F1', 'admin@bcex', 'A20307F1', 'usdt', 1200, 'Deposite', '2023-05-31 17:06:13'),
('A20307F1', 'shadan7053sid@gmail.com', 'wearning52@gmail.com', 'USDT', 300, 'withdraw', '2023-06-02 16:03:54'),
('A20307F1', 'shadan7053sid@gmail.com', 'wearning52@gmail.com', 'USDT', 230, 'withdraw', '2023-06-02 16:06:17'),
('A20307F1', 'shadan7053sid@gmail.com', 'wearning52@gmail.com', 'USDT', 80, 'withdraw', '2023-06-02 16:10:15'),
('A20307F1', 'shadan7053sid@gmail.com', 'wearning52@gmail.com', 'USDT', 12, 'withdraw', '2023-06-02 16:11:33'),
('60BBDB81', 'admin@bcex', '60BBDB81', 'usdt', 1200, 'Deposite', '2023-06-03 18:19:21'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 'wearning52@gmail.com', 'cryptobtc349@gmail.com', 'ETH', 2, 'withdraw', '2023-08-15 05:01:47'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 'wearning52@gmail.com', 'cryptobtc349@gmail.com', 'USDT', 223, 'withdraw', '2023-08-15 05:02:53'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 'wearning52@gmail.com', 'cryptobtc349@gmail.com', 'USDT', 100, 'withdraw', '2023-08-15 05:55:28'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 'wearning52@gmail.com', 'cryptobtc349@gmail.com', 'USDT', 900, 'withdraw', '2023-08-15 06:04:47'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 'wearning52@gmail.com', 'cryptobtc349@gmail.com', 'USDT', 3, 'withdraw', '2023-08-15 06:07:26'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 'wearning52@gmail.com', 'cryptobtc349@gmail.com', 'USDT', 12, 'withdraw', '2023-08-15 06:13:48'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 'wearning52@gmail.com', 'cryptobtc349@gmail.com', 'USDT', 34, 'withdraw', '2023-08-15 06:18:18'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 'wearning52@gmail.com', 'cryptobtc349@gmail.com', 'USDT', 23, 'withdraw', '2023-08-15 06:19:36'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 'wearning52@gmail.com', 'cryptobtc349@gmail.com', 'USDT', 34, 'withdraw', '2023-08-15 06:21:33');

-- --------------------------------------------------------

--
-- Table structure for table `orderbook`
--

CREATE TABLE `orderbook` (
  `userid` varchar(255) NOT NULL,
  `orderid` varchar(255) NOT NULL,
  `currency` varchar(98) NOT NULL,
  `price` float NOT NULL,
  `amount` float NOT NULL,
  `status` varchar(55) NOT NULL,
  `dt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orderbook`
--

INSERT INTO `orderbook` (`userid`, `orderid`, `currency`, `price`, `amount`, `status`, `dt`) VALUES
('747bcee4-2cb3-4c3d-b3d3-91096b135310', '6b663f86-d57b-4870-aca9-d93ebdbaedac', 'ethusdt', 12900, 22159.9, 'Pending', '2023-05-28 14:03:33'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', '6b663f86-d57b-4870-aca9-d93ebdbaedac', 'ethusdt', 12900, 22159.9, 'Pending', '2023-05-28 14:03:33');

-- --------------------------------------------------------

--
-- Table structure for table `ordertable`
--

CREATE TABLE `ordertable` (
  `currency` varchar(55) NOT NULL,
  `amount` float NOT NULL,
  `Price` float NOT NULL,
  `Total` float NOT NULL,
  `id` varchar(255) NOT NULL,
  `dt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `userid` varchar(255) NOT NULL,
  `fromaddsr` varchar(255) NOT NULL,
  `toaddsr` varchar(255) NOT NULL,
  `contractaddsr` varchar(255) NOT NULL,
  `coin` varchar(100) NOT NULL,
  `amount` float NOT NULL,
  `hash` varchar(255) NOT NULL,
  `type` varchar(55) NOT NULL,
  `timestamp` datetime NOT NULL DEFAULT current_timestamp(),
  `dt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `referral`
--

CREATE TABLE `referral` (
  `userid` varchar(255) NOT NULL,
  `yourcode` varchar(255) DEFAULT NULL,
  `ReferralCode` varchar(255) DEFAULT NULL,
  `dt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `referral`
--

INSERT INTO `referral` (`userid`, `yourcode`, `ReferralCode`, `dt`) VALUES
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 'B1498FB1', '', '2023-04-21 03:56:20'),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', 'C5A7A16F', '', '2023-05-26 17:04:12'),
('A20307F1', '7120E6FD', 'sid', '2023-05-31 17:04:49'),
('4BCE6829', '32CB0302', '7120E6FD', '2023-06-02 17:09:41'),
('110C2A61', 'E5D2E203', '7120E6FD', '2023-06-02 17:30:27'),
('924E4BB7', '2A600F08', '7120E6FD', '2023-06-02 22:27:00'),
('60BBDB81', '9A892004', '7120E6FD', '2023-06-03 18:16:50'),
('41D09240', '306BFD59', 'B1498FB1', '2023-06-03 22:40:32'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 'B1498FB1', '', '2023-04-21 03:56:20'),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', 'C5A7A16F', '', '2023-05-26 17:04:12'),
('A20307F1', '7120E6FD', 'sid', '2023-05-31 17:04:49'),
('4BCE6829', '32CB0302', '7120E6FD', '2023-06-02 17:09:41'),
('110C2A61', 'E5D2E203', '7120E6FD', '2023-06-02 17:30:27'),
('924E4BB7', '2A600F08', '7120E6FD', '2023-06-02 22:27:00'),
('60BBDB81', '9A892004', '7120E6FD', '2023-06-03 18:16:50'),
('41D09240', '306BFD59', 'B1498FB1', '2023-06-03 22:40:32');

-- --------------------------------------------------------

--
-- Table structure for table `referralwallet`
--

CREATE TABLE `referralwallet` (
  `userid` varchar(70) NOT NULL,
  `currency` varchar(55) NOT NULL,
  `quantity` int(11) NOT NULL,
  `refercode` varchar(55) NOT NULL,
  `dt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `referralwallet`
--

INSERT INTO `referralwallet` (`userid`, `currency`, `quantity`, `refercode`, `dt`) VALUES
('924E4BB7', 'BCEX', 20, '7120E6FD', '2023-06-02 22:27:03'),
('A20307F1', 'BCEX', 10, '2A600F08', '2023-06-02 22:27:03'),
('60BBDB81', 'BCEX', 20, '7120E6FD', '2023-06-03 18:16:53'),
('A20307F1', 'BCEX', 10, '9A892004', '2023-06-03 18:16:53'),
('41D09240', 'BCEX', 20, 'B1498FB1', '2023-06-03 22:40:35'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 'BCEX', 10, '306BFD59', '2023-06-03 22:40:35'),
('924E4BB7', 'BCEX', 20, '7120E6FD', '2023-06-02 22:27:03'),
('A20307F1', 'BCEX', 10, '2A600F08', '2023-06-02 22:27:03'),
('60BBDB81', 'BCEX', 20, '7120E6FD', '2023-06-03 18:16:53'),
('A20307F1', 'BCEX', 10, '9A892004', '2023-06-03 18:16:53'),
('41D09240', 'BCEX', 20, 'B1498FB1', '2023-06-03 22:40:35'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 'BCEX', 10, '306BFD59', '2023-06-03 22:40:35');

-- --------------------------------------------------------

--
-- Table structure for table `transactionhistory`
--

CREATE TABLE `transactionhistory` (
  `UserId` varchar(55) NOT NULL,
  `quantity` float NOT NULL,
  `amount` float NOT NULL,
  `quantityvalue` float NOT NULL,
  `currency` varchar(55) NOT NULL,
  `type` varchar(55) NOT NULL,
  `orderid` varchar(255) NOT NULL,
  `status` varchar(55) NOT NULL,
  `fee` float NOT NULL,
  `feepercentage` float NOT NULL,
  `Total` float NOT NULL,
  `dt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transactionhistory`
--

INSERT INTO `transactionhistory` (`UserId`, `quantity`, `amount`, `quantityvalue`, `currency`, `type`, `orderid`, `status`, `fee`, `feepercentage`, `Total`, `dt`) VALUES
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0549757, 1809.89, 99.5, 'ETH', 'credit', '2e52d30d-3e24-4b74-a334-b8132474dc57', 'success', 0.5, 0.5, 100, '2023-05-20 00:56:00'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 99.5, 1810.21, 99.5, 'ETH', 'debit', '04db1296-d991-47f9-ae0b-5ac0dbf2f802', 'success', 0.5, 0.5, 100, '2023-05-20 00:56:19'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.164852, 1810.71, 298.5, 'ETH', 'credit', '589fca3f-ce11-49fa-b241-5bde3bb8d8e7', 'success', 1.5, 0.5, 300, '2023-05-20 01:03:32'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 188.055, 1810.72, 188.055, 'ETH', 'debit', '4dd32216-2d88-48c8-834a-4267b96f703e', 'success', 0.945, 0.5, 189, '2023-05-20 01:03:40'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 44.775, 1810.54, 44.775, 'ETH', 'debit', '4f693681-c3a9-430e-af40-571b4c34c1b9', 'success', 0.225, 0.5, 45, '2023-05-20 01:04:03'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0126398, 1810.55, 22.885, 'ETH', 'credit', '20f52d9b-fad8-49a3-9769-e978a8fbc685', 'success', 0.115, 0.5, 23, '2023-05-20 01:04:09'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 33.83, 1810.46, 33.83, 'ETH', 'debit', '0ae9eeb0-0a84-4feb-904a-73671a22ebd2', 'success', 0.17, 0.5, 34, '2023-05-20 01:04:13'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.00385085, 1808.69, 6.965, 'ETH', 'credit', '75848ce8-31a4-4197-8cca-ca10c9b1cd32', 'success', 0.035, 0.5, 7, '2023-05-20 01:07:55'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0187044, 1808.67, 33.83, 'ETH', 'credit', 'da58930d-83dc-46c9-be17-ef04e72eca4b', 'success', 0.17, 0.5, 34, '2023-05-20 01:10:24'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0368521, 1808.99, 66.665, 'ETH', 'credit', '819e3593-be46-402d-b169-2ae09dbbb150', 'success', 0.335, 0.5, 67, '2023-05-20 01:11:02'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0428943, 1809.33, 77.61, 'ETH', 'credit', '16dcee30-5f2f-46a0-bd5e-52a50ba3d9e2', 'success', 0.39, 0.5, 78, '2023-05-20 01:11:08'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.00219934, 1809.63, 3.98, 'ETH', 'credit', '106f8d8f-8b52-4b19-9087-dba8c70c3622', 'success', 0.02, 0.5, 4, '2023-05-20 01:16:47'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.00274917, 1809.64, 4.975, 'ETH', 'credit', '8f25df0b-4f32-49e1-8485-115b975b9fbb', 'success', 0.025, 0.5, 5, '2023-05-20 01:16:59'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.00274953, 1809.4, 4.975, 'ETH', 'credit', '0133dc79-99bf-4b60-87c7-5a706e82ea82', 'success', 0.025, 0.5, 5, '2023-05-20 01:17:53'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.12401, 1810.31, 224.497, 'ETH', 'credit', 'b7fa34c4-6c54-46ba-8741-16420b14959a', 'success', 1.12812, 0.5, 225.625, '2023-05-20 01:19:26'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0620054, 1810.3, 112.248, 'ETH', 'credit', 'd883f1b8-5689-49f3-9583-3e9777a8bae0', 'success', 0.564062, 0.5, 112.812, '2023-05-20 01:19:28'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0620054, 1810.3, 112.248, 'ETH', 'credit', 'c3508556-09c2-4da4-a8ce-adaa119b7a59', 'success', 0.564062, 0.5, 112.812, '2023-05-20 01:19:28'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0620054, 1810.3, 112.248, 'ETH', 'credit', '80c03306-33e5-4603-9c03-1f3e5a9d6fbc', 'success', 0.564062, 0.5, 112.812, '2023-05-20 01:19:28'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.00329774, 1810.33, 5.97, 'ETH', 'credit', '98e0bf7b-2e14-4491-8d66-54d8837d2575', 'success', 0.03, 0.5, 6, '2023-05-20 01:19:44'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 55.72, 1810.19, 55.72, 'ETH', 'debit', '2546dc20-0538-4cc2-afb5-54e9e29b5a5c', 'success', 0.28, 0.5, 56, '2023-05-20 01:20:02'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 457.7, 0.05, 22.885, 'BCEX', 'credit', 'c2f3804e-1d2b-417d-83e3-a21503c77fc9', 'success', 0.115, 0.5, 23, '2023-05-20 01:20:22'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0357133, 1810.95, 64.675, 'ETH', 'credit', '69ec95bc-3e24-422e-82c1-2398966f0c73', 'success', 0.325, 0.5, 65, '2023-05-20 01:26:44'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0368051, 1811.3, 66.665, 'ETH', 'credit', '07b1e153-3dc6-400c-b6a1-aee15f4e80b2', 'success', 0.335, 0.5, 67, '2023-05-20 01:27:42'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.00219689, 1811.65, 3.98, 'ETH', 'credit', '21c981f0-d9ce-4b4b-b625-018f4b40c714', 'success', 0.02, 0.5, 4, '2023-05-20 01:28:50'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 597, 1811.55, 597, 'ETH', 'debit', '3fc3a491-5a68-4bee-b284-b8ae6da62304', 'success', 3, 0.5, 600, '2023-05-20 01:32:08'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0247025, 1812.57, 44.775, 'ETH', 'credit', '876e3c7e-39c5-4de2-a705-056edf81089d', 'success', 0.225, 0.5, 45, '2023-05-20 01:37:52'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 22.885, 1812.57, 22.885, 'ETH', 'debit', '492decb4-e779-4c9c-a5b8-1d92fd336447', 'success', 0.115, 0.5, 23, '2023-05-20 01:38:20'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 2.985, 1812.77, 2.985, 'ETH', 'debit', 'f918bc7d-65b8-402c-8c02-ba39ba21eb93', 'success', 0.015, 0.5, 3, '2023-05-20 01:38:50'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 77.61, 1813.86, 77.61, 'ETH', 'debit', 'fb6a30f9-fa19-4408-aa50-f3ca91779348', 'success', 0.39, 0.5, 78, '2023-05-20 01:43:25'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 11.94, 1813.39, 11.94, 'ETH', 'debit', '2566b389-fae6-4be3-8723-d810831c0390', 'success', 0.06, 0.5, 12, '2023-05-20 01:47:00'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 4.975, 1812.93, 4.975, 'ETH', 'debit', '414cd133-06ae-449a-9f33-b7f29780e501', 'success', 0.025, 0.5, 5, '2023-05-20 01:50:47'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 1.99, 1812.93, 1.99, 'ETH', 'debit', '87b41557-da40-4e81-9ea6-cd8af784a180', 'success', 0.01, 0.5, 2, '2023-05-20 01:52:10'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 1.99, 1812.93, 1.99, 'ETH', 'debit', '4e87d3c4-eb15-45e7-84ff-d9ea3460c9b4', 'success', 0.01, 0.5, 2, '2023-05-20 01:52:15'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0296371, 1812.93, 53.73, 'ETH', 'credit', '76610d58-273c-4867-b5bc-f96f5bc62c02', 'success', 0.27, 0.5, 54, '2023-05-20 01:52:59'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 4.975, 1813.33, 4.975, 'ETH', 'debit', 'ca9b1986-c5a9-4940-8fc2-cc3013189325', 'success', 0.025, 0.5, 5, '2023-05-20 01:56:34'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 4.975, 1813.33, 4.975, 'ETH', 'debit', '387e3629-81c9-4032-bd7f-92d14c25bdb3', 'success', 0.025, 0.5, 5, '2023-05-20 01:57:09'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.003841, 1813.33, 6.965, 'ETH', 'credit', '5bbe8a58-cb66-4776-8920-1d86b97bfa99', 'success', 0.035, 0.5, 7, '2023-05-20 01:57:12'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 6.965, 1813.33, 6.965, 'ETH', 'debit', 'eaf20f21-95a5-4c0b-ba25-8edc4dda4176', 'success', 0.035, 0.5, 7, '2023-05-20 01:57:14'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.030728, 1813.33, 55.72, 'ETH', 'credit', 'e5a00f23-7da3-4772-acec-dc0773a6e604', 'success', 0.28, 0.5, 56, '2023-05-20 01:57:27'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 33.83, 1813.33, 33.83, 'ETH', 'debit', 'ed43771f-0c0d-4bb0-ab08-98bcde83fd0e', 'success', 0.17, 0.5, 34, '2023-05-20 01:57:30'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.00658457, 1813.33, 11.94, 'ETH', 'credit', 'd7b3d9cf-4ca0-4169-a59a-07a379b9f447', 'success', 0.06, 0.5, 12, '2023-05-20 01:57:33'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 33.83, 1813.33, 33.83, 'ETH', 'debit', '288348a2-5fcd-4a04-926b-fd52c7aed829', 'success', 0.17, 0.5, 34, '2023-05-20 01:57:35'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.00219486, 1813.33, 3.98, 'ETH', 'credit', '90ce2025-8148-4801-a655-ffba38fde16b', 'success', 0.02, 0.5, 4, '2023-05-20 01:57:38'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 2.985, 1813.34, 2.985, 'ETH', 'debit', '30bf600f-2941-4342-be10-7de17ebc819d', 'success', 0.015, 0.5, 3, '2023-05-20 01:57:40'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 44.775, 1815.42, 44.775, 'ETH', 'debit', '8f1687db-3147-4dee-be17-79ea0f2a1927', 'success', 0.225, 0.5, 45, '2023-05-20 01:58:31'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.170989, 1815.4, 310.413, 'ETH', 'credit', 'cd800932-a292-4eaf-9173-73c5d31f30f9', 'success', 1.55986, 0.5, 311.973, '2023-05-20 01:58:34'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0186389, 1815.02, 33.83, 'ETH', 'credit', '3dcf8630-3250-44d4-a419-03d97bb82266', 'success', 0.17, 0.5, 34, '2023-05-20 01:58:41'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 33.83, 1815.02, 33.83, 'ETH', 'debit', '3939fdd3-9cb0-4e17-a7f0-5f80b2370223', 'success', 0.17, 0.5, 34, '2023-05-20 01:58:43'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 676.6, 0.05, 33.83, 'BCEX', 'credit', '139295b1-5418-4f31-ac40-beddee109b1d', 'success', 0.17, 0.5, 34, '2023-05-20 01:59:09'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0186516, 1813.79, 33.83, 'ETH', 'credit', '86fc9790-490b-42f7-a25a-ca39e0059911', 'success', 0.17, 0.5, 34, '2023-05-20 01:59:35'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 225.533, 0.15, 33.83, 'BCEX', 'credit', '1e003844-d5a4-4d69-843a-af2673d39dfd', 'success', 0.17, 0.5, 34, '2023-05-20 01:59:58'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 44.775, 1813.03, 44.775, 'ETH', 'debit', '586d0833-643d-49ca-871c-6bcd15854847', 'success', 0.225, 0.5, 45, '2023-05-20 02:00:17'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 44.775, 1813.12, 44.775, 'ETH', 'debit', 'e84c7bf5-4e91-4a21-92d0-f4bdfd6bd476', 'success', 0.225, 0.5, 45, '2023-05-20 02:00:37'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 218.9, 0.25, 218.9, 'BCEX', 'debit', '06601ddc-0f70-4134-98eb-1b772be7ba83', 'success', 0.275, 0.5, 55, '2023-05-20 02:00:42'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 95.52, 0.25, 95.52, 'BCEX', 'debit', 'a3bf4496-97ec-4503-8a55-42c3bec71f09', 'success', 0.12, 0.5, 24, '2023-05-20 02:08:18'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 79.6, 0.25, 19.9, 'BCEX', 'credit', 'fddfcede-a5e3-4fff-a9e5-5499082db34e', 'success', 0.1, 0.5, 20, '2023-05-20 02:12:48'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 36.1818, 0.55, 36.1818, 'BCEX', 'debit', '8be4a801-6ecc-4c12-9e11-b7f5ecd248c7', 'success', 0.1, 0.5, 20, '2023-05-20 02:14:48'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 35.2077, 0.65, 22.885, 'BCEX', 'credit', '87b1d3e9-8465-4f4a-abb1-9b87f8572b2b', 'success', 0.115, 0.5, 23, '2023-05-20 02:32:56'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 52.0462, 0.65, 52.0462, 'BCEX', 'debit', '3f0adc85-4203-4858-a0e7-59cdf9b64bfe', 'success', 0.17, 0.5, 34, '2023-05-20 02:35:07'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 33.932, 0.85, 33.932, 'BCEX', 'debit', 'b4a89845-81e6-411e-aef5-733bdc9894ad', 'success', 0.068, 0.2, 34, '2023-05-20 04:41:51'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 44.91, 0.85, 44.91, 'BCEX', 'debit', 'e86d201e-9964-4bc8-9a18-2f51ab769416', 'success', 0.09, 0.2, 45, '2023-05-20 04:43:23'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 354.29, 0.85, 354.29, 'BCEX', 'debit', '0f138fa4-140f-4f9a-b7f8-d539833e255f', 'success', 0.71, 0.2, 355, '2023-05-20 04:48:56'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 64.87, 0.85, 64.87, 'BCEX', 'debit', '1fe53fa4-8d6c-469e-aa32-cadbc61448f2', 'success', 0.13, 0.2, 65, '2023-05-20 04:50:06'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 44.91, 0.85, 44.91, 'BCEX', 'debit', '568d48f6-bd9c-4e89-afa3-6313123c5b76', 'success', 0.09, 0.2, 45, '2023-05-20 04:56:30'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0477416, 1813.2, 86.565, 'ETH', 'credit', '0c346607-e5d0-49cb-976e-4b1d146d33bf', 'success', 0.435, 0.5, 87, '2023-05-20 04:58:50'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 91.2951, 0.8501, 77.61, 'BCEX', 'credit', '05aded66-c354-4c99-bf27-0a0fc4e1e50b', 'success', 0.39, 0.5, 78, '2023-05-20 04:59:06'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 77.844, 1813.21, 77.844, 'ETH', 'debit', 'a1368d1f-6a61-4f92-8967-56166410eaf4', 'success', 0.156, 0.2, 78, '2023-05-20 04:59:20'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 77.844, 0.9501, 77.844, 'BCEX', 'debit', '44319a3a-7f07-4445-9c14-3307d17577ad', 'success', 0.156, 0.2, 78, '2023-05-20 04:59:33'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.00274456, 1812.68, 4.975, 'ETH', 'credit', 'e9b64442-af1b-4864-833d-54ccd888cab1', 'success', 0.025, 0.5, 5, '2023-05-20 15:16:55'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 4.99, 1812.68, 4.99, 'ETH', 'debit', '9d2754e9-717c-4c6e-a6f3-174bbdf851c2', 'success', 0.01, 0.2, 5, '2023-05-20 15:16:58'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 4.99, 1812.54, 4.99, 'ETH', 'debit', '37a9b5ed-8ac8-45a5-948a-1df7e44e0df6', 'success', 0.01, 0.2, 5, '2023-05-20 15:17:02'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 4.99, 1812.54, 4.99, 'ETH', 'debit', '5d2d29cd-7371-44e3-9258-2550be05bbd3', 'success', 0.01, 0.2, 5, '2023-05-20 15:17:07'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.246287, 20.2, 4.975, 'SOL', 'credit', 'c5fd8117-5ae6-4f7f-b3bc-c4a8d141e771', 'success', 0.025, 0.5, 5, '2023-05-20 15:17:48'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 1.996, 20.2, 1.996, 'SOL', 'debit', '3bebb505-23e2-402d-aba4-d00cd900f7ca', 'success', 0.004, 0.2, 2, '2023-05-20 15:17:55'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 1.996, 20.19, 1.996, 'SOL', 'debit', 'a1ae52bb-e5ce-4e10-9bfa-6d9acb75059b', 'success', 0.004, 0.2, 2, '2023-05-20 15:17:57'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0, 0.95, 0, 'BCEX', 'debit', 'ed8724ef-f557-4fef-8bf2-49240f65c021', 'success', 0, 0.2, 0, '2023-05-20 15:18:14'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.3992, 20.2, 0.3992, 'SOL', 'debit', 'b0a5c5de-97ea-4d7b-9b24-20f709695462', 'success', 0.0008, 0.2, 0.4, '2023-05-20 15:19:09'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.2994, 20.19, 0.2994, 'SOL', 'debit', '25923f0f-1127-46a1-b1ba-5a22943ed1cc', 'success', 0.0006, 0.2, 0.3, '2023-05-20 15:24:45'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 20.958, 0.9499, 20.958, 'BCEX', 'debit', '960e5340-4cc7-4a38-9535-8f11c4a1a63f', 'success', 0.042, 0.2, 21, '2023-05-20 15:25:20'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 66.866, 1817.6, 66.866, 'ETH', 'debit', 'fc94b961-34fb-46ac-a98d-444c99ffc17d', 'success', 0.134, 0.2, 67, '2023-05-21 07:28:31'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0366787, 1817.54, 66.665, 'ETH', 'credit', '3ec6b1c5-6a16-4d63-b061-1106e461caa8', 'success', 0.335, 0.5, 67, '2023-05-21 07:28:34'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 19.0561, 0.3655, 6.965, 'ADA', 'credit', '4b1041d6-458a-4526-804e-54bf284e659d', 'success', 0.035, 0.5, 7, '2023-05-21 07:28:39'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0486882, 1818.82, 88.555, 'ETH', 'credit', '1b7c1104-4ead-47ef-b664-29aef95927fc', 'success', 0.445, 0.5, 89, '2023-05-21 09:24:56'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 86.826, 1818.82, 86.826, 'ETH', 'debit', '76963a62-71be-4f92-8180-c9830ee65f36', 'success', 0.174, 0.2, 87, '2023-05-21 09:25:01'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 77.844, 1818.12, 77.844, 'ETH', 'debit', 'bf5551a5-9ade-419b-ba51-734941fa2aaf', 'success', 0.156, 0.2, 78, '2023-05-21 09:32:47'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 18.8511, 1.8, 33.932, 'BCEX', 'credit', '90c57a06-9d9e-49fa-bbc5-84d539bb08b1', 'success', 0.068, 0.2, 34, '2023-05-21 16:01:40'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 31.936, 1.8, 31.936, 'BCEX', 'debit', 'e98e32f8-edf1-4d13-b49e-4da3ca5ce95e', 'success', 0.064, 0.2, 32, '2023-05-21 16:01:52'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 114.786, 0.4695, 53.892, 'XRP', 'credit', '35d47329-a261-4d46-b008-056eaea26436', 'success', 0.108, 0.2, 54, '2023-05-21 16:02:45'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 19.96, 0.4695, 19.96, 'XRP', 'debit', '7504804d-f313-4c3a-a72c-48eb32c57a7d', 'success', 0.04, 0.2, 20, '2023-05-21 16:03:08'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 11.976, 0.4695, 11.976, 'XRP', 'debit', '4791448d-7d0a-42e8-9077-4624966ebd2a', 'success', 0.024, 0.2, 12, '2023-05-21 16:03:18'),
('6f208ab9-171e-4d01-8218-237f6eeda1d5', 1.17566, 1809.82, 2127.74, 'ETH', 'credit', '7d534116-b470-417c-8fe4-740636ed59a3', 'success', 4.264, 0.2, 2132, '2023-05-22 01:48:01'),
('6f208ab9-171e-4d01-8218-237f6eeda1d5', 31.936, 1809.82, 31.936, 'ETH', 'debit', 'c475ab0d-c58e-4a36-9cba-92a6ad989427', 'success', 0.064, 0.2, 32, '2023-05-22 01:48:20'),
('6f208ab9-171e-4d01-8218-237f6eeda1d5', 458.164, 0.0501, 22.954, 'BCEX', 'credit', 'b3170aa9-ff21-4e9f-8f36-75b3df1523b7', 'success', 0.046, 0.2, 23, '2023-05-22 01:48:29'),
('6f208ab9-171e-4d01-8218-237f6eeda1d5', 31.936, 0.0501, 31.936, 'BCEX', 'debit', '6d388ccd-1919-412c-9a6d-1ba3154b84da', 'success', 0.064, 0.2, 32, '2023-05-22 01:48:37'),
('6f208ab9-171e-4d01-8218-237f6eeda1d5', 0, 26896.1, 0, 'BTC', 'credit', 'aecbc70c-1a70-4880-a9bf-64e9aaba4ef6', 'success', 0, 0.2, 0, '2023-05-22 01:49:54'),
('6f208ab9-171e-4d01-8218-237f6eeda1d5', 0, 26896.1, 0, 'BTC', 'credit', '1bb30652-2e1d-426f-b14b-10aae53ae921', 'success', 0, 0.2, 0, '2023-05-22 01:50:30'),
('6f208ab9-171e-4d01-8218-237f6eeda1d5', 0, 0.07229, 0, 'DOGE', 'credit', 'eec0cf50-461c-43ff-a5f7-dd5b6c0f72c0', 'success', 0, 0.2, 0, '2023-05-22 01:53:21'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0165441, 1809.71, 29.94, 'ETH', 'credit', '72a04c80-6c94-4c0a-a291-2b7c1d34e3fc', 'success', 0.06, 0.2, 30, '2023-05-22 01:57:29'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 251.689, 0.912, 229.54, 'LUNA', 'credit', '0a9de929-f49e-4e1a-bead-9b28badd7107', 'success', 0.46, 0.2, 230, '2023-05-22 01:57:45'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 22.954, 0.9121, 22.954, 'LUNA', 'debit', 'cfe4deaa-b025-4db7-a48a-adbf49eba671', 'success', 0.046, 0.2, 23, '2023-05-22 01:57:49'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 179.596, 0.3612, 64.87, 'ADA', 'credit', 'b14869d8-40e2-4f15-9e99-55a9674d7874', 'success', 0.13, 0.2, 65, '2023-05-22 01:58:57'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 616.322, 0.3611, 222.554, 'ADA', 'credit', '017570bd-0e31-4602-978e-a5e4433a73bb', 'success', 0.446, 0.2, 223, '2023-05-22 01:59:18'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 39.8403, 0.0501, 1.996, 'BCEX', 'credit', '25cf2fd0-6a2b-41f7-bda7-fd0595f66eff', 'success', 0.004, 0.2, 2, '2023-05-22 01:59:54'),
('6f208ab9-171e-4d01-8218-237f6eeda1d5', 0.0121315, 1809.84, 21.956, 'ETH', 'credit', '461e0d61-e56d-4e2d-b45f-712e86791c2d', 'success', 0.044, 0.2, 22, '2023-05-22 02:01:51'),
('6f208ab9-171e-4d01-8218-237f6eeda1d5', 3.992, 1809.84, 3.992, 'ETH', 'debit', 'a52d8131-add1-4cec-a7e2-d17c1b94c9d0', 'success', 0.008, 0.2, 4, '2023-05-22 02:02:03'),
('6f208ab9-171e-4d01-8218-237f6eeda1d5', 0, 26889.6, 0, 'BTC', 'credit', '2858412e-8f76-41ed-b383-573fe1f1fd00', 'success', 0, 0.2, 0, '2023-05-22 02:02:18'),
('6f208ab9-171e-4d01-8218-237f6eeda1d5', 0, 0.4629, 0, 'XRP', 'credit', 'a0ec081e-7aec-4734-9498-8b09e9fd264e', 'success', 0, 0.2, 0, '2023-05-22 02:04:11'),
('6f208ab9-171e-4d01-8218-237f6eeda1d5', 15.0918, 0.4629, 6.986, 'XRP', 'credit', 'b95bb710-1146-4ffb-8363-aef3141877f7', 'success', 0.014, 0.2, 7, '2023-05-22 02:10:44'),
('6f208ab9-171e-4d01-8218-237f6eeda1d5', 0, 0.9112, 0, 'LUNA', 'credit', 'acbc9d72-d04c-4517-b30e-df33db153ea9', 'success', 0, 0.2, 0, '2023-05-22 02:14:31'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0, 1808.8, 0, 'ETH', 'credit', '854588b8-e3cd-4f84-9ea7-0cbfbfead62c', 'success', 0, 0.2, 0, '2023-05-22 02:16:21'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 27.6072, 0.0723, 1.996, 'DOGE', 'credit', '093f454b-2849-4292-8d0b-5ecd0dcb25aa', 'success', 0.004, 0.2, 2, '2023-05-22 02:18:51'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 69.018, 0.0723, 4.99, 'DOGE', 'credit', '5224a5d4-e479-40a9-a961-c186a2043f22', 'success', 0.01, 0.2, 5, '2023-05-22 02:19:03'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 5.988, 0.0723, 5.988, 'DOGE', 'debit', '09f944b3-0e54-4a2e-940e-2be267e90412', 'success', 0.012, 0.2, 6, '2023-05-22 02:19:12'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.210412, 308.3, 64.87, 'BNB', 'credit', 'd949fa29-e6b2-4bc3-a94b-49752ab62c0c', 'success', 0.13, 0.2, 65, '2023-05-22 02:19:25'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0360355, 1800.17, 64.87, 'ETH', 'credit', 'c23aa93f-a8d1-4552-a2f5-329f707555e2', 'success', 0.13, 0.2, 65, '2023-05-22 02:38:54'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 1.996, 0.4643, 1.996, 'XRP', 'debit', 'fd206666-da0d-405f-a7ed-c687e66cc6c5', 'success', 0.004, 0.2, 2, '2023-05-22 11:33:04'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0247998, 1810.9, 44.91, 'ETH', 'credit', 'cb6d0b6e-d705-41b1-b776-4364d1614436', 'success', 0.09, 0.2, 45, '2023-05-22 12:15:01'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 55.888, 0.3634, 55.888, 'ADA', 'debit', '3b03d8ab-82bf-4cd4-981a-711a1b78079b', 'success', 0.112, 0.2, 56, '2023-05-22 12:15:29'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.181986, 307.1, 55.888, 'BNB', 'credit', 'f5c7c959-cd2b-441c-a195-4d28b2d5438e', 'success', 0.112, 0.2, 56, '2023-05-22 12:23:19'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0611541, 1809.89, 110.682, 'ETH', 'credit', '9a794c41-6740-4f52-bc0f-4d9751f725d2', 'success', 0.221808, 0.2, 110.904, '2023-05-22 12:26:41'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0126825, 1809.9, 22.954, 'ETH', 'credit', '1315e785-6965-492c-b869-8a098466b410', 'success', 0.046, 0.2, 23, '2023-05-22 12:26:52'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 55.888, 1809.38, 55.888, 'ETH', 'debit', 'e986c8e8-cf22-451b-bcfd-75603a08b61b', 'success', 0.112, 0.2, 56, '2023-05-22 12:28:26'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 22.954, 1809.38, 22.954, 'ETH', 'debit', '62eab843-8bd6-46ea-b101-a296a321b35d', 'success', 0.046, 0.2, 23, '2023-05-22 12:28:38'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.977785, 90.84, 88.822, 'LTC', 'credit', '5914898f-0c72-4707-9d16-3dc8d12240e2', 'success', 0.178, 0.2, 89, '2023-05-22 12:30:02'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 219.56, 0.05, 10.978, 'BCEX', 'credit', 'e3a72fd1-d28e-4b6f-8a6c-3d9ae37ada68', 'success', 0.022, 0.2, 11, '2023-05-22 12:32:01'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.613817, 91.05, 55.888, 'LTC', 'credit', '0bffc15a-da27-4e93-8dfa-d0fe1c1b4245', 'success', 0.112, 0.2, 56, '2023-05-22 12:46:56'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 22.954, 91.03, 22.954, 'LTC', 'debit', 'c3e24fca-be0f-41b7-b6e0-f8605bb69231', 'success', 0.046, 0.2, 23, '2023-05-22 12:47:21'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0012259, 26865.2, 32.934, 'BTC', 'credit', '5bd0dcff-3ead-49be-8c5e-8f8afe5a8f7c', 'success', 0.066, 0.2, 33, '2023-05-22 15:28:50'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 1.7964, 0.05, 0.08982, 'BCEX', 'credit', 'e57a427b-677d-46ed-9dfd-94dfc74371fd', 'success', 0.00018, 0.2, 0.09, '2023-05-22 15:41:47'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 2.994, 0.05, 2.994, 'BCEX', 'debit', '16074273-d769-4c81-b332-94195f346c82', 'success', 0.006, 0.2, 3, '2023-05-22 15:42:01'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 19.96, 0.05, 0.998, 'BCEX', 'credit', '29b9a20c-77ac-4031-977a-83a6d0710355', 'success', 0.002, 0.2, 1, '2023-05-22 15:46:55'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 22.954, 0.05, 22.954, 'BCEX', 'debit', '29082f64-8f9c-4fa4-ab95-1a6b9e2b2f3f', 'success', 0.046, 0.2, 23, '2023-05-22 15:47:08'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 79.84, 0.05, 3.992, 'BCEX', 'credit', '23c16406-5ee9-414c-9383-542932609976', 'success', 0.008, 0.2, 4, '2023-05-22 16:06:26'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 4.99, 0.05, 4.99, 'BCEX', 'debit', '00a642cb-8e47-4a1d-b638-f7d450e4675a', 'success', 0.01, 0.2, 5, '2023-05-22 16:06:28'),
('01c2f618-1efd-4ecf-a0ed-a9e53e378817', 0.017584, 1816.2, 31.936, 'ETH', 'credit', '492a21a0-00a7-426a-84fe-bb1833f88f8f', 'success', 0.064, 0.2, 32, '2023-05-22 16:19:10'),
('01c2f618-1efd-4ecf-a0ed-a9e53e378817', 20.958, 1816.19, 20.958, 'ETH', 'debit', '0db58426-060e-4137-9a09-a400a068eaa5', 'success', 0.042, 0.2, 21, '2023-05-22 16:19:20'),
('01c2f618-1efd-4ecf-a0ed-a9e53e378817', 2455.08, 0.05, 122.754, 'BCEX', 'credit', '24bb91e1-dc3f-4d7e-bf67-bbea74a7d3d9', 'success', 0.246, 0.2, 123, '2023-05-22 16:19:33'),
('01c2f618-1efd-4ecf-a0ed-a9e53e378817', 31.936, 0.05, 31.936, 'BCEX', 'debit', '35828107-ddb8-4fb3-ae4b-520b3a6003b0', 'success', 0.064, 0.2, 32, '2023-05-22 16:19:39'),
('01c2f618-1efd-4ecf-a0ed-a9e53e378817', 310.441, 0.07394, 22.954, 'DOGE', 'credit', '98545a0b-02dc-49f2-8989-851ac02a665d', 'success', 0.046, 0.2, 23, '2023-05-22 16:21:13'),
('01c2f618-1efd-4ecf-a0ed-a9e53e378817', 73.43, 0.4621, 33.932, 'XRP', 'credit', 'eca87120-e0ef-499d-a5f8-e771c0b83880', 'success', 0.068, 0.2, 34, '2023-05-22 16:22:14'),
('01c2f618-1efd-4ecf-a0ed-a9e53e378817', 4.31941, 0.4621, 1.996, 'XRP', 'credit', 'c76d12d8-f2ba-4df8-b204-ef990b1656c0', 'success', 0.004, 0.2, 2, '2023-05-22 16:22:23'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0, 1855.41, 0, 'ETH', 'credit', '9acf6e8c-07ad-432d-b430-d378eab5cd21', 'success', 0, 0.2, 0, '2023-05-23 14:42:45'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 1.996, 19.78, 39.4809, 'SOL', 'credit', 'ce9aa149-d73f-4900-9d85-adf62f77c4c2', 'success', 0.07912, 0.2, 39.56, '2023-05-23 15:40:43'),
('a5bfcd9a-312f-48b8-9def-e240ea299815', 0.0189163, 26379.4, 499, 'BTC', 'credit', 'e2144c94-08ee-4aa7-8c1c-0a05ccbd1136', 'success', 1, 0.2, 500, '2023-05-25 19:31:43'),
('a41630bd-1e2e-464e-a7ba-5ddad82a002f', 0.018954, 26326.8, 499, 'BTC', 'credit', '60f45833-58f2-4dd8-aa18-ce4bdfff42fc', 'success', 1, 0.2, 500, '2023-05-25 19:39:22'),
('a41630bd-1e2e-464e-a7ba-5ddad82a002f', 0.00758749, 26306.4, 199.6, 'BTC', 'credit', 'd29e45b0-76b6-4bac-9ce9-37aa7f3a72bb', 'success', 0.4, 0.2, 200, '2023-05-25 19:39:57'),
('a41630bd-1e2e-464e-a7ba-5ddad82a002f', 199.6, 26305.2, 199.6, 'BTC', 'debit', '8ea8bc28-502a-4070-a9f2-bbe691991ad1', 'success', 0.4, 0.2, 200, '2023-05-25 19:41:02'),
('80a28164-1f22-4656-aabb-051b9bc1f7ba', 0.0550308, 1813.53, 99.8, 'ETH', 'credit', '3552c054-44aa-4086-9789-4d82ee9aa849', 'success', 0.2, 0.2, 100, '2023-05-26 16:53:09'),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', 0.652501, 305.9, 199.6, 'BNB', 'credit', '40148b57-6f9d-44e4-af1d-a16198361d87', 'success', 0.4, 0.2, 200, '2023-05-26 17:10:05'),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', 99.8, 305.9, 99.8, 'BNB', 'debit', '28e13c9f-edf2-47ec-af02-65702b4abcd3', 'success', 0.2, 0.2, 100, '2023-05-26 17:11:31'),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', 10040.2, 0.0497, 499, 'BCEX', 'credit', 'b43d09a4-47b2-4664-b89d-6ff3e0bc1867', 'success', 1, 0.2, 500, '2023-05-26 17:12:10'),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', 199.6, 0.0497, 199.6, 'BCEX', 'debit', '9e3aa5ec-7835-4bcc-aac7-331eec8f5258', 'success', 0.4, 0.2, 200, '2023-05-26 17:14:43'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 19.96, 26494.6, 19.96, 'BTC', 'debit', '710c12c0-eb2b-41d1-a7a9-845600e78011', 'success', 0.04, 0.2, 20, '2023-05-26 17:18:52'),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', 8908.76, 0.9497, 8908.76, 'BCEX', 'debit', '56e4312c-3c08-42b2-9e2f-4ba0f9d4d258', 'success', 17.8532, 0.2, 8926.61, '2023-05-26 17:46:49'),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', 1050.97, 0.9496, 998, 'BCEX', 'credit', '43cad997-767d-4ff7-b1c8-4d8c0f123253', 'success', 2, 0.2, 1000, '2023-05-26 17:48:26'),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', 53.3815, 0.05, 53.3815, 'BCEX', 'debit', 'b30d89c7-bf13-4cf5-a148-db0c27320263', 'success', 0.106977, 0.2, 53.4885, '2023-05-26 17:52:37'),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', 19960, 0.05, 998, 'BCEX', 'credit', '4fcb3001-49da-4eed-9364-8be9a5578117', 'success', 2, 0.2, 1000, '2023-05-26 17:56:44'),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', 499, 0.05, 499, 'BCEX', 'debit', 'b41436bc-bffa-48c2-99d3-056f94766587', 'success', 1, 0.2, 500, '2023-05-26 17:57:56'),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', 2000, 0.0499, 99.8, 'BCEX', 'credit', 'bded82a8-0c39-4e5d-b306-c677b1d1cf59', 'success', 0.2, 0.2, 100, '2023-05-26 18:01:44'),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', 1996, 0.05, 99.8, 'BCEX', 'credit', '3bbd3e67-27bb-41eb-9927-9a9b40dc5656', 'success', 0.2, 0.2, 100, '2023-05-26 18:02:21'),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', 199.6, 0.0501, 199.6, 'BCEX', 'debit', '420d6492-205b-4394-8a66-d9235fd22b41', 'success', 0.4, 0.2, 200, '2023-05-26 18:02:47'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 6.93188, 0.872, 6.93188, 'LUNA', 'debit', 'aba5809d-4e74-4621-9879-13803b4be543', 'success', 0.0138915, 0.2, 6.94577, '2023-05-29 16:06:30'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0138638, 0.8712, 0.0138638, 'LUNA', 'debit', 'b78c9eaa-5482-4893-a703-339547c3190b', 'success', 0.0000277831, 0.2, 0.0138916, '2023-05-29 16:14:52'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.580306, 0.07317, 0.580306, 'DOGE', 'debit', 'cb885484-5655-46f1-95ab-205dc8b50baf', 'success', 0.00116294, 0.2, 0.581469, '2023-05-29 16:16:31'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 614.112, 0.07313, 44.91, 'DOGE', 'credit', 'a569e857-9f1b-4262-9feb-e4c5a25919ca', 'success', 0.09, 0.2, 45, '2023-05-29 16:17:06'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 40940.8, 0.07313, 2994, 'DOGE', 'credit', 'dd3dacaf-0e8c-4732-b945-f5f57aac4f2d', 'success', 6, 0.2, 3000, '2023-05-29 16:17:18'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.414764, 1898.48, 787.422, 'ETH', 'credit', '446631be-dde6-4b21-8e7e-14de4566b5b8', 'success', 1.578, 0.2, 789, '2023-05-29 16:21:32'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.414738, 1898.6, 787.422, 'ETH', 'credit', '446f95e7-b2a5-4f73-b771-08dcc1996e50', 'success', 1.578, 0.2, 789, '2023-05-29 16:22:15'),
('e4fe82c7-aef2-40ff-8208-8ecfcc659f77', 987.141, 0.5055, 499, 'XRP', 'credit', 'df2f39a1-10a0-4934-9448-99a42870bc00', 'success', 1, 0.2, 500, '2023-05-31 15:56:21'),
('e4fe82c7-aef2-40ff-8208-8ecfcc659f77', 1.2999, 307.1, 399.2, 'BNB', 'credit', 'df1592d2-8ce7-493f-87ef-e9870bef8284', 'success', 0.8, 0.2, 400, '2023-05-31 15:57:24'),
('A20307F1', 7984, 0.05, 399.2, 'BCEX', 'credit', '87c90629-60c9-4c31-abf3-72ebafd45951', 'success', 0.8, 0.2, 400, '2023-05-31 17:07:20'),
('A20307F1', 0.0233539, 1901.65, 44.411, 'ETH', 'credit', 'efa39298-b401-4864-befe-29894283c7e0', 'success', 0.089, 0.2, 44.5, '2023-06-03 15:49:09'),
('60BBDB81', 9980, 0.05, 499, 'BCEX', 'credit', '71b29a61-0e66-47e6-8140-0184968d770e', 'success', 1, 0.2, 500, '2023-06-03 18:19:43'),
('60BBDB81', 4.70533, 21.21, 99.8, 'SOL', 'credit', 'b0e82f00-ce7e-4f37-a0ae-351147e2e26b', 'success', 0.2, 0.2, 100, '2023-06-03 18:20:16'),
('60BBDB81', 0.104819, 1904.23, 199.6, 'ETH', 'credit', '9fc6776c-606c-440a-bee2-69abc730164c', 'success', 0.4, 0.2, 200, '2023-06-03 18:20:24'),
('60BBDB81', 0.974609, 307.2, 299.4, 'BNB', 'credit', 'f6e1eba4-e783-4452-8e1d-3de51b1470ad', 'success', 0.6, 0.2, 300, '2023-06-03 18:20:36'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0549757, 1809.89, 99.5, 'ETH', 'credit', '2e52d30d-3e24-4b74-a334-b8132474dc57', 'success', 0.5, 0.5, 100, '2023-05-20 00:56:00'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 99.5, 1810.21, 99.5, 'ETH', 'debit', '04db1296-d991-47f9-ae0b-5ac0dbf2f802', 'success', 0.5, 0.5, 100, '2023-05-20 00:56:19'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.164852, 1810.71, 298.5, 'ETH', 'credit', '589fca3f-ce11-49fa-b241-5bde3bb8d8e7', 'success', 1.5, 0.5, 300, '2023-05-20 01:03:32'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 188.055, 1810.72, 188.055, 'ETH', 'debit', '4dd32216-2d88-48c8-834a-4267b96f703e', 'success', 0.945, 0.5, 189, '2023-05-20 01:03:40'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 44.775, 1810.54, 44.775, 'ETH', 'debit', '4f693681-c3a9-430e-af40-571b4c34c1b9', 'success', 0.225, 0.5, 45, '2023-05-20 01:04:03'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0126398, 1810.55, 22.885, 'ETH', 'credit', '20f52d9b-fad8-49a3-9769-e978a8fbc685', 'success', 0.115, 0.5, 23, '2023-05-20 01:04:09'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 33.83, 1810.46, 33.83, 'ETH', 'debit', '0ae9eeb0-0a84-4feb-904a-73671a22ebd2', 'success', 0.17, 0.5, 34, '2023-05-20 01:04:13'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.00385085, 1808.69, 6.965, 'ETH', 'credit', '75848ce8-31a4-4197-8cca-ca10c9b1cd32', 'success', 0.035, 0.5, 7, '2023-05-20 01:07:55'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0187044, 1808.67, 33.83, 'ETH', 'credit', 'da58930d-83dc-46c9-be17-ef04e72eca4b', 'success', 0.17, 0.5, 34, '2023-05-20 01:10:24'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0368521, 1808.99, 66.665, 'ETH', 'credit', '819e3593-be46-402d-b169-2ae09dbbb150', 'success', 0.335, 0.5, 67, '2023-05-20 01:11:02'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0428943, 1809.33, 77.61, 'ETH', 'credit', '16dcee30-5f2f-46a0-bd5e-52a50ba3d9e2', 'success', 0.39, 0.5, 78, '2023-05-20 01:11:08'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.00219934, 1809.63, 3.98, 'ETH', 'credit', '106f8d8f-8b52-4b19-9087-dba8c70c3622', 'success', 0.02, 0.5, 4, '2023-05-20 01:16:47'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.00274917, 1809.64, 4.975, 'ETH', 'credit', '8f25df0b-4f32-49e1-8485-115b975b9fbb', 'success', 0.025, 0.5, 5, '2023-05-20 01:16:59'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.00274953, 1809.4, 4.975, 'ETH', 'credit', '0133dc79-99bf-4b60-87c7-5a706e82ea82', 'success', 0.025, 0.5, 5, '2023-05-20 01:17:53'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.12401, 1810.31, 224.497, 'ETH', 'credit', 'b7fa34c4-6c54-46ba-8741-16420b14959a', 'success', 1.12812, 0.5, 225.625, '2023-05-20 01:19:26'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0620054, 1810.3, 112.248, 'ETH', 'credit', 'd883f1b8-5689-49f3-9583-3e9777a8bae0', 'success', 0.564062, 0.5, 112.812, '2023-05-20 01:19:28'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0620054, 1810.3, 112.248, 'ETH', 'credit', 'c3508556-09c2-4da4-a8ce-adaa119b7a59', 'success', 0.564062, 0.5, 112.812, '2023-05-20 01:19:28'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0620054, 1810.3, 112.248, 'ETH', 'credit', '80c03306-33e5-4603-9c03-1f3e5a9d6fbc', 'success', 0.564062, 0.5, 112.812, '2023-05-20 01:19:28'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.00329774, 1810.33, 5.97, 'ETH', 'credit', '98e0bf7b-2e14-4491-8d66-54d8837d2575', 'success', 0.03, 0.5, 6, '2023-05-20 01:19:44'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 55.72, 1810.19, 55.72, 'ETH', 'debit', '2546dc20-0538-4cc2-afb5-54e9e29b5a5c', 'success', 0.28, 0.5, 56, '2023-05-20 01:20:02'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 457.7, 0.05, 22.885, 'BCEX', 'credit', 'c2f3804e-1d2b-417d-83e3-a21503c77fc9', 'success', 0.115, 0.5, 23, '2023-05-20 01:20:22'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0357133, 1810.95, 64.675, 'ETH', 'credit', '69ec95bc-3e24-422e-82c1-2398966f0c73', 'success', 0.325, 0.5, 65, '2023-05-20 01:26:44'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0368051, 1811.3, 66.665, 'ETH', 'credit', '07b1e153-3dc6-400c-b6a1-aee15f4e80b2', 'success', 0.335, 0.5, 67, '2023-05-20 01:27:42'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.00219689, 1811.65, 3.98, 'ETH', 'credit', '21c981f0-d9ce-4b4b-b625-018f4b40c714', 'success', 0.02, 0.5, 4, '2023-05-20 01:28:50'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 597, 1811.55, 597, 'ETH', 'debit', '3fc3a491-5a68-4bee-b284-b8ae6da62304', 'success', 3, 0.5, 600, '2023-05-20 01:32:08'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0247025, 1812.57, 44.775, 'ETH', 'credit', '876e3c7e-39c5-4de2-a705-056edf81089d', 'success', 0.225, 0.5, 45, '2023-05-20 01:37:52'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 22.885, 1812.57, 22.885, 'ETH', 'debit', '492decb4-e779-4c9c-a5b8-1d92fd336447', 'success', 0.115, 0.5, 23, '2023-05-20 01:38:20'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 2.985, 1812.77, 2.985, 'ETH', 'debit', 'f918bc7d-65b8-402c-8c02-ba39ba21eb93', 'success', 0.015, 0.5, 3, '2023-05-20 01:38:50'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 77.61, 1813.86, 77.61, 'ETH', 'debit', 'fb6a30f9-fa19-4408-aa50-f3ca91779348', 'success', 0.39, 0.5, 78, '2023-05-20 01:43:25'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 11.94, 1813.39, 11.94, 'ETH', 'debit', '2566b389-fae6-4be3-8723-d810831c0390', 'success', 0.06, 0.5, 12, '2023-05-20 01:47:00'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 4.975, 1812.93, 4.975, 'ETH', 'debit', '414cd133-06ae-449a-9f33-b7f29780e501', 'success', 0.025, 0.5, 5, '2023-05-20 01:50:47'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 1.99, 1812.93, 1.99, 'ETH', 'debit', '87b41557-da40-4e81-9ea6-cd8af784a180', 'success', 0.01, 0.5, 2, '2023-05-20 01:52:10'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 1.99, 1812.93, 1.99, 'ETH', 'debit', '4e87d3c4-eb15-45e7-84ff-d9ea3460c9b4', 'success', 0.01, 0.5, 2, '2023-05-20 01:52:15'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0296371, 1812.93, 53.73, 'ETH', 'credit', '76610d58-273c-4867-b5bc-f96f5bc62c02', 'success', 0.27, 0.5, 54, '2023-05-20 01:52:59'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 4.975, 1813.33, 4.975, 'ETH', 'debit', 'ca9b1986-c5a9-4940-8fc2-cc3013189325', 'success', 0.025, 0.5, 5, '2023-05-20 01:56:34'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 4.975, 1813.33, 4.975, 'ETH', 'debit', '387e3629-81c9-4032-bd7f-92d14c25bdb3', 'success', 0.025, 0.5, 5, '2023-05-20 01:57:09'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.003841, 1813.33, 6.965, 'ETH', 'credit', '5bbe8a58-cb66-4776-8920-1d86b97bfa99', 'success', 0.035, 0.5, 7, '2023-05-20 01:57:12'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 6.965, 1813.33, 6.965, 'ETH', 'debit', 'eaf20f21-95a5-4c0b-ba25-8edc4dda4176', 'success', 0.035, 0.5, 7, '2023-05-20 01:57:14'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.030728, 1813.33, 55.72, 'ETH', 'credit', 'e5a00f23-7da3-4772-acec-dc0773a6e604', 'success', 0.28, 0.5, 56, '2023-05-20 01:57:27'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 33.83, 1813.33, 33.83, 'ETH', 'debit', 'ed43771f-0c0d-4bb0-ab08-98bcde83fd0e', 'success', 0.17, 0.5, 34, '2023-05-20 01:57:30'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.00658457, 1813.33, 11.94, 'ETH', 'credit', 'd7b3d9cf-4ca0-4169-a59a-07a379b9f447', 'success', 0.06, 0.5, 12, '2023-05-20 01:57:33'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 33.83, 1813.33, 33.83, 'ETH', 'debit', '288348a2-5fcd-4a04-926b-fd52c7aed829', 'success', 0.17, 0.5, 34, '2023-05-20 01:57:35'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.00219486, 1813.33, 3.98, 'ETH', 'credit', '90ce2025-8148-4801-a655-ffba38fde16b', 'success', 0.02, 0.5, 4, '2023-05-20 01:57:38'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 2.985, 1813.34, 2.985, 'ETH', 'debit', '30bf600f-2941-4342-be10-7de17ebc819d', 'success', 0.015, 0.5, 3, '2023-05-20 01:57:40'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 44.775, 1815.42, 44.775, 'ETH', 'debit', '8f1687db-3147-4dee-be17-79ea0f2a1927', 'success', 0.225, 0.5, 45, '2023-05-20 01:58:31'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.170989, 1815.4, 310.413, 'ETH', 'credit', 'cd800932-a292-4eaf-9173-73c5d31f30f9', 'success', 1.55986, 0.5, 311.973, '2023-05-20 01:58:34'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0186389, 1815.02, 33.83, 'ETH', 'credit', '3dcf8630-3250-44d4-a419-03d97bb82266', 'success', 0.17, 0.5, 34, '2023-05-20 01:58:41'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 33.83, 1815.02, 33.83, 'ETH', 'debit', '3939fdd3-9cb0-4e17-a7f0-5f80b2370223', 'success', 0.17, 0.5, 34, '2023-05-20 01:58:43'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 676.6, 0.05, 33.83, 'BCEX', 'credit', '139295b1-5418-4f31-ac40-beddee109b1d', 'success', 0.17, 0.5, 34, '2023-05-20 01:59:09'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0186516, 1813.79, 33.83, 'ETH', 'credit', '86fc9790-490b-42f7-a25a-ca39e0059911', 'success', 0.17, 0.5, 34, '2023-05-20 01:59:35'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 225.533, 0.15, 33.83, 'BCEX', 'credit', '1e003844-d5a4-4d69-843a-af2673d39dfd', 'success', 0.17, 0.5, 34, '2023-05-20 01:59:58'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 44.775, 1813.03, 44.775, 'ETH', 'debit', '586d0833-643d-49ca-871c-6bcd15854847', 'success', 0.225, 0.5, 45, '2023-05-20 02:00:17'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 44.775, 1813.12, 44.775, 'ETH', 'debit', 'e84c7bf5-4e91-4a21-92d0-f4bdfd6bd476', 'success', 0.225, 0.5, 45, '2023-05-20 02:00:37'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 218.9, 0.25, 218.9, 'BCEX', 'debit', '06601ddc-0f70-4134-98eb-1b772be7ba83', 'success', 0.275, 0.5, 55, '2023-05-20 02:00:42'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 95.52, 0.25, 95.52, 'BCEX', 'debit', 'a3bf4496-97ec-4503-8a55-42c3bec71f09', 'success', 0.12, 0.5, 24, '2023-05-20 02:08:18'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 79.6, 0.25, 19.9, 'BCEX', 'credit', 'fddfcede-a5e3-4fff-a9e5-5499082db34e', 'success', 0.1, 0.5, 20, '2023-05-20 02:12:48'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 36.1818, 0.55, 36.1818, 'BCEX', 'debit', '8be4a801-6ecc-4c12-9e11-b7f5ecd248c7', 'success', 0.1, 0.5, 20, '2023-05-20 02:14:48'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 35.2077, 0.65, 22.885, 'BCEX', 'credit', '87b1d3e9-8465-4f4a-abb1-9b87f8572b2b', 'success', 0.115, 0.5, 23, '2023-05-20 02:32:56'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 52.0462, 0.65, 52.0462, 'BCEX', 'debit', '3f0adc85-4203-4858-a0e7-59cdf9b64bfe', 'success', 0.17, 0.5, 34, '2023-05-20 02:35:07'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 33.932, 0.85, 33.932, 'BCEX', 'debit', 'b4a89845-81e6-411e-aef5-733bdc9894ad', 'success', 0.068, 0.2, 34, '2023-05-20 04:41:51'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 44.91, 0.85, 44.91, 'BCEX', 'debit', 'e86d201e-9964-4bc8-9a18-2f51ab769416', 'success', 0.09, 0.2, 45, '2023-05-20 04:43:23'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 354.29, 0.85, 354.29, 'BCEX', 'debit', '0f138fa4-140f-4f9a-b7f8-d539833e255f', 'success', 0.71, 0.2, 355, '2023-05-20 04:48:56'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 64.87, 0.85, 64.87, 'BCEX', 'debit', '1fe53fa4-8d6c-469e-aa32-cadbc61448f2', 'success', 0.13, 0.2, 65, '2023-05-20 04:50:06'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 44.91, 0.85, 44.91, 'BCEX', 'debit', '568d48f6-bd9c-4e89-afa3-6313123c5b76', 'success', 0.09, 0.2, 45, '2023-05-20 04:56:30'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0477416, 1813.2, 86.565, 'ETH', 'credit', '0c346607-e5d0-49cb-976e-4b1d146d33bf', 'success', 0.435, 0.5, 87, '2023-05-20 04:58:50'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 91.2951, 0.8501, 77.61, 'BCEX', 'credit', '05aded66-c354-4c99-bf27-0a0fc4e1e50b', 'success', 0.39, 0.5, 78, '2023-05-20 04:59:06'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 77.844, 1813.21, 77.844, 'ETH', 'debit', 'a1368d1f-6a61-4f92-8967-56166410eaf4', 'success', 0.156, 0.2, 78, '2023-05-20 04:59:20'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 77.844, 0.9501, 77.844, 'BCEX', 'debit', '44319a3a-7f07-4445-9c14-3307d17577ad', 'success', 0.156, 0.2, 78, '2023-05-20 04:59:33'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.00274456, 1812.68, 4.975, 'ETH', 'credit', 'e9b64442-af1b-4864-833d-54ccd888cab1', 'success', 0.025, 0.5, 5, '2023-05-20 15:16:55'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 4.99, 1812.68, 4.99, 'ETH', 'debit', '9d2754e9-717c-4c6e-a6f3-174bbdf851c2', 'success', 0.01, 0.2, 5, '2023-05-20 15:16:58'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 4.99, 1812.54, 4.99, 'ETH', 'debit', '37a9b5ed-8ac8-45a5-948a-1df7e44e0df6', 'success', 0.01, 0.2, 5, '2023-05-20 15:17:02'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 4.99, 1812.54, 4.99, 'ETH', 'debit', '5d2d29cd-7371-44e3-9258-2550be05bbd3', 'success', 0.01, 0.2, 5, '2023-05-20 15:17:07'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.246287, 20.2, 4.975, 'SOL', 'credit', 'c5fd8117-5ae6-4f7f-b3bc-c4a8d141e771', 'success', 0.025, 0.5, 5, '2023-05-20 15:17:48'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 1.996, 20.2, 1.996, 'SOL', 'debit', '3bebb505-23e2-402d-aba4-d00cd900f7ca', 'success', 0.004, 0.2, 2, '2023-05-20 15:17:55'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 1.996, 20.19, 1.996, 'SOL', 'debit', 'a1ae52bb-e5ce-4e10-9bfa-6d9acb75059b', 'success', 0.004, 0.2, 2, '2023-05-20 15:17:57'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0, 0.95, 0, 'BCEX', 'debit', 'ed8724ef-f557-4fef-8bf2-49240f65c021', 'success', 0, 0.2, 0, '2023-05-20 15:18:14'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.3992, 20.2, 0.3992, 'SOL', 'debit', 'b0a5c5de-97ea-4d7b-9b24-20f709695462', 'success', 0.0008, 0.2, 0.4, '2023-05-20 15:19:09'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.2994, 20.19, 0.2994, 'SOL', 'debit', '25923f0f-1127-46a1-b1ba-5a22943ed1cc', 'success', 0.0006, 0.2, 0.3, '2023-05-20 15:24:45'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 20.958, 0.9499, 20.958, 'BCEX', 'debit', '960e5340-4cc7-4a38-9535-8f11c4a1a63f', 'success', 0.042, 0.2, 21, '2023-05-20 15:25:20'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 66.866, 1817.6, 66.866, 'ETH', 'debit', 'fc94b961-34fb-46ac-a98d-444c99ffc17d', 'success', 0.134, 0.2, 67, '2023-05-21 07:28:31'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0366787, 1817.54, 66.665, 'ETH', 'credit', '3ec6b1c5-6a16-4d63-b061-1106e461caa8', 'success', 0.335, 0.5, 67, '2023-05-21 07:28:34'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 19.0561, 0.3655, 6.965, 'ADA', 'credit', '4b1041d6-458a-4526-804e-54bf284e659d', 'success', 0.035, 0.5, 7, '2023-05-21 07:28:39'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0486882, 1818.82, 88.555, 'ETH', 'credit', '1b7c1104-4ead-47ef-b664-29aef95927fc', 'success', 0.445, 0.5, 89, '2023-05-21 09:24:56'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 86.826, 1818.82, 86.826, 'ETH', 'debit', '76963a62-71be-4f92-8180-c9830ee65f36', 'success', 0.174, 0.2, 87, '2023-05-21 09:25:01'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 77.844, 1818.12, 77.844, 'ETH', 'debit', 'bf5551a5-9ade-419b-ba51-734941fa2aaf', 'success', 0.156, 0.2, 78, '2023-05-21 09:32:47'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 18.8511, 1.8, 33.932, 'BCEX', 'credit', '90c57a06-9d9e-49fa-bbc5-84d539bb08b1', 'success', 0.068, 0.2, 34, '2023-05-21 16:01:40'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 31.936, 1.8, 31.936, 'BCEX', 'debit', 'e98e32f8-edf1-4d13-b49e-4da3ca5ce95e', 'success', 0.064, 0.2, 32, '2023-05-21 16:01:52'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 114.786, 0.4695, 53.892, 'XRP', 'credit', '35d47329-a261-4d46-b008-056eaea26436', 'success', 0.108, 0.2, 54, '2023-05-21 16:02:45'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 19.96, 0.4695, 19.96, 'XRP', 'debit', '7504804d-f313-4c3a-a72c-48eb32c57a7d', 'success', 0.04, 0.2, 20, '2023-05-21 16:03:08'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 11.976, 0.4695, 11.976, 'XRP', 'debit', '4791448d-7d0a-42e8-9077-4624966ebd2a', 'success', 0.024, 0.2, 12, '2023-05-21 16:03:18'),
('6f208ab9-171e-4d01-8218-237f6eeda1d5', 1.17566, 1809.82, 2127.74, 'ETH', 'credit', '7d534116-b470-417c-8fe4-740636ed59a3', 'success', 4.264, 0.2, 2132, '2023-05-22 01:48:01'),
('6f208ab9-171e-4d01-8218-237f6eeda1d5', 31.936, 1809.82, 31.936, 'ETH', 'debit', 'c475ab0d-c58e-4a36-9cba-92a6ad989427', 'success', 0.064, 0.2, 32, '2023-05-22 01:48:20'),
('6f208ab9-171e-4d01-8218-237f6eeda1d5', 458.164, 0.0501, 22.954, 'BCEX', 'credit', 'b3170aa9-ff21-4e9f-8f36-75b3df1523b7', 'success', 0.046, 0.2, 23, '2023-05-22 01:48:29'),
('6f208ab9-171e-4d01-8218-237f6eeda1d5', 31.936, 0.0501, 31.936, 'BCEX', 'debit', '6d388ccd-1919-412c-9a6d-1ba3154b84da', 'success', 0.064, 0.2, 32, '2023-05-22 01:48:37'),
('6f208ab9-171e-4d01-8218-237f6eeda1d5', 0, 26896.1, 0, 'BTC', 'credit', 'aecbc70c-1a70-4880-a9bf-64e9aaba4ef6', 'success', 0, 0.2, 0, '2023-05-22 01:49:54'),
('6f208ab9-171e-4d01-8218-237f6eeda1d5', 0, 26896.1, 0, 'BTC', 'credit', '1bb30652-2e1d-426f-b14b-10aae53ae921', 'success', 0, 0.2, 0, '2023-05-22 01:50:30'),
('6f208ab9-171e-4d01-8218-237f6eeda1d5', 0, 0.07229, 0, 'DOGE', 'credit', 'eec0cf50-461c-43ff-a5f7-dd5b6c0f72c0', 'success', 0, 0.2, 0, '2023-05-22 01:53:21'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0165441, 1809.71, 29.94, 'ETH', 'credit', '72a04c80-6c94-4c0a-a291-2b7c1d34e3fc', 'success', 0.06, 0.2, 30, '2023-05-22 01:57:29'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 251.689, 0.912, 229.54, 'LUNA', 'credit', '0a9de929-f49e-4e1a-bead-9b28badd7107', 'success', 0.46, 0.2, 230, '2023-05-22 01:57:45'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 22.954, 0.9121, 22.954, 'LUNA', 'debit', 'cfe4deaa-b025-4db7-a48a-adbf49eba671', 'success', 0.046, 0.2, 23, '2023-05-22 01:57:49'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 179.596, 0.3612, 64.87, 'ADA', 'credit', 'b14869d8-40e2-4f15-9e99-55a9674d7874', 'success', 0.13, 0.2, 65, '2023-05-22 01:58:57'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 616.322, 0.3611, 222.554, 'ADA', 'credit', '017570bd-0e31-4602-978e-a5e4433a73bb', 'success', 0.446, 0.2, 223, '2023-05-22 01:59:18'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 39.8403, 0.0501, 1.996, 'BCEX', 'credit', '25cf2fd0-6a2b-41f7-bda7-fd0595f66eff', 'success', 0.004, 0.2, 2, '2023-05-22 01:59:54'),
('6f208ab9-171e-4d01-8218-237f6eeda1d5', 0.0121315, 1809.84, 21.956, 'ETH', 'credit', '461e0d61-e56d-4e2d-b45f-712e86791c2d', 'success', 0.044, 0.2, 22, '2023-05-22 02:01:51'),
('6f208ab9-171e-4d01-8218-237f6eeda1d5', 3.992, 1809.84, 3.992, 'ETH', 'debit', 'a52d8131-add1-4cec-a7e2-d17c1b94c9d0', 'success', 0.008, 0.2, 4, '2023-05-22 02:02:03'),
('6f208ab9-171e-4d01-8218-237f6eeda1d5', 0, 26889.6, 0, 'BTC', 'credit', '2858412e-8f76-41ed-b383-573fe1f1fd00', 'success', 0, 0.2, 0, '2023-05-22 02:02:18'),
('6f208ab9-171e-4d01-8218-237f6eeda1d5', 0, 0.4629, 0, 'XRP', 'credit', 'a0ec081e-7aec-4734-9498-8b09e9fd264e', 'success', 0, 0.2, 0, '2023-05-22 02:04:11'),
('6f208ab9-171e-4d01-8218-237f6eeda1d5', 15.0918, 0.4629, 6.986, 'XRP', 'credit', 'b95bb710-1146-4ffb-8363-aef3141877f7', 'success', 0.014, 0.2, 7, '2023-05-22 02:10:44'),
('6f208ab9-171e-4d01-8218-237f6eeda1d5', 0, 0.9112, 0, 'LUNA', 'credit', 'acbc9d72-d04c-4517-b30e-df33db153ea9', 'success', 0, 0.2, 0, '2023-05-22 02:14:31'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0, 1808.8, 0, 'ETH', 'credit', '854588b8-e3cd-4f84-9ea7-0cbfbfead62c', 'success', 0, 0.2, 0, '2023-05-22 02:16:21'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 27.6072, 0.0723, 1.996, 'DOGE', 'credit', '093f454b-2849-4292-8d0b-5ecd0dcb25aa', 'success', 0.004, 0.2, 2, '2023-05-22 02:18:51'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 69.018, 0.0723, 4.99, 'DOGE', 'credit', '5224a5d4-e479-40a9-a961-c186a2043f22', 'success', 0.01, 0.2, 5, '2023-05-22 02:19:03'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 5.988, 0.0723, 5.988, 'DOGE', 'debit', '09f944b3-0e54-4a2e-940e-2be267e90412', 'success', 0.012, 0.2, 6, '2023-05-22 02:19:12'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.210412, 308.3, 64.87, 'BNB', 'credit', 'd949fa29-e6b2-4bc3-a94b-49752ab62c0c', 'success', 0.13, 0.2, 65, '2023-05-22 02:19:25'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0360355, 1800.17, 64.87, 'ETH', 'credit', 'c23aa93f-a8d1-4552-a2f5-329f707555e2', 'success', 0.13, 0.2, 65, '2023-05-22 02:38:54'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 1.996, 0.4643, 1.996, 'XRP', 'debit', 'fd206666-da0d-405f-a7ed-c687e66cc6c5', 'success', 0.004, 0.2, 2, '2023-05-22 11:33:04'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0247998, 1810.9, 44.91, 'ETH', 'credit', 'cb6d0b6e-d705-41b1-b776-4364d1614436', 'success', 0.09, 0.2, 45, '2023-05-22 12:15:01'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 55.888, 0.3634, 55.888, 'ADA', 'debit', '3b03d8ab-82bf-4cd4-981a-711a1b78079b', 'success', 0.112, 0.2, 56, '2023-05-22 12:15:29');
INSERT INTO `transactionhistory` (`UserId`, `quantity`, `amount`, `quantityvalue`, `currency`, `type`, `orderid`, `status`, `fee`, `feepercentage`, `Total`, `dt`) VALUES
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.181986, 307.1, 55.888, 'BNB', 'credit', 'f5c7c959-cd2b-441c-a195-4d28b2d5438e', 'success', 0.112, 0.2, 56, '2023-05-22 12:23:19'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0611541, 1809.89, 110.682, 'ETH', 'credit', '9a794c41-6740-4f52-bc0f-4d9751f725d2', 'success', 0.221808, 0.2, 110.904, '2023-05-22 12:26:41'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0126825, 1809.9, 22.954, 'ETH', 'credit', '1315e785-6965-492c-b869-8a098466b410', 'success', 0.046, 0.2, 23, '2023-05-22 12:26:52'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 55.888, 1809.38, 55.888, 'ETH', 'debit', 'e986c8e8-cf22-451b-bcfd-75603a08b61b', 'success', 0.112, 0.2, 56, '2023-05-22 12:28:26'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 22.954, 1809.38, 22.954, 'ETH', 'debit', '62eab843-8bd6-46ea-b101-a296a321b35d', 'success', 0.046, 0.2, 23, '2023-05-22 12:28:38'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.977785, 90.84, 88.822, 'LTC', 'credit', '5914898f-0c72-4707-9d16-3dc8d12240e2', 'success', 0.178, 0.2, 89, '2023-05-22 12:30:02'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 219.56, 0.05, 10.978, 'BCEX', 'credit', 'e3a72fd1-d28e-4b6f-8a6c-3d9ae37ada68', 'success', 0.022, 0.2, 11, '2023-05-22 12:32:01'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.613817, 91.05, 55.888, 'LTC', 'credit', '0bffc15a-da27-4e93-8dfa-d0fe1c1b4245', 'success', 0.112, 0.2, 56, '2023-05-22 12:46:56'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 22.954, 91.03, 22.954, 'LTC', 'debit', 'c3e24fca-be0f-41b7-b6e0-f8605bb69231', 'success', 0.046, 0.2, 23, '2023-05-22 12:47:21'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0012259, 26865.2, 32.934, 'BTC', 'credit', '5bd0dcff-3ead-49be-8c5e-8f8afe5a8f7c', 'success', 0.066, 0.2, 33, '2023-05-22 15:28:50'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 1.7964, 0.05, 0.08982, 'BCEX', 'credit', 'e57a427b-677d-46ed-9dfd-94dfc74371fd', 'success', 0.00018, 0.2, 0.09, '2023-05-22 15:41:47'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 2.994, 0.05, 2.994, 'BCEX', 'debit', '16074273-d769-4c81-b332-94195f346c82', 'success', 0.006, 0.2, 3, '2023-05-22 15:42:01'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 19.96, 0.05, 0.998, 'BCEX', 'credit', '29b9a20c-77ac-4031-977a-83a6d0710355', 'success', 0.002, 0.2, 1, '2023-05-22 15:46:55'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 22.954, 0.05, 22.954, 'BCEX', 'debit', '29082f64-8f9c-4fa4-ab95-1a6b9e2b2f3f', 'success', 0.046, 0.2, 23, '2023-05-22 15:47:08'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 79.84, 0.05, 3.992, 'BCEX', 'credit', '23c16406-5ee9-414c-9383-542932609976', 'success', 0.008, 0.2, 4, '2023-05-22 16:06:26'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 4.99, 0.05, 4.99, 'BCEX', 'debit', '00a642cb-8e47-4a1d-b638-f7d450e4675a', 'success', 0.01, 0.2, 5, '2023-05-22 16:06:28'),
('01c2f618-1efd-4ecf-a0ed-a9e53e378817', 0.017584, 1816.2, 31.936, 'ETH', 'credit', '492a21a0-00a7-426a-84fe-bb1833f88f8f', 'success', 0.064, 0.2, 32, '2023-05-22 16:19:10'),
('01c2f618-1efd-4ecf-a0ed-a9e53e378817', 20.958, 1816.19, 20.958, 'ETH', 'debit', '0db58426-060e-4137-9a09-a400a068eaa5', 'success', 0.042, 0.2, 21, '2023-05-22 16:19:20'),
('01c2f618-1efd-4ecf-a0ed-a9e53e378817', 2455.08, 0.05, 122.754, 'BCEX', 'credit', '24bb91e1-dc3f-4d7e-bf67-bbea74a7d3d9', 'success', 0.246, 0.2, 123, '2023-05-22 16:19:33'),
('01c2f618-1efd-4ecf-a0ed-a9e53e378817', 31.936, 0.05, 31.936, 'BCEX', 'debit', '35828107-ddb8-4fb3-ae4b-520b3a6003b0', 'success', 0.064, 0.2, 32, '2023-05-22 16:19:39'),
('01c2f618-1efd-4ecf-a0ed-a9e53e378817', 310.441, 0.07394, 22.954, 'DOGE', 'credit', '98545a0b-02dc-49f2-8989-851ac02a665d', 'success', 0.046, 0.2, 23, '2023-05-22 16:21:13'),
('01c2f618-1efd-4ecf-a0ed-a9e53e378817', 73.43, 0.4621, 33.932, 'XRP', 'credit', 'eca87120-e0ef-499d-a5f8-e771c0b83880', 'success', 0.068, 0.2, 34, '2023-05-22 16:22:14'),
('01c2f618-1efd-4ecf-a0ed-a9e53e378817', 4.31941, 0.4621, 1.996, 'XRP', 'credit', 'c76d12d8-f2ba-4df8-b204-ef990b1656c0', 'success', 0.004, 0.2, 2, '2023-05-22 16:22:23'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0, 1855.41, 0, 'ETH', 'credit', '9acf6e8c-07ad-432d-b430-d378eab5cd21', 'success', 0, 0.2, 0, '2023-05-23 14:42:45'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 1.996, 19.78, 39.4809, 'SOL', 'credit', 'ce9aa149-d73f-4900-9d85-adf62f77c4c2', 'success', 0.07912, 0.2, 39.56, '2023-05-23 15:40:43'),
('a5bfcd9a-312f-48b8-9def-e240ea299815', 0.0189163, 26379.4, 499, 'BTC', 'credit', 'e2144c94-08ee-4aa7-8c1c-0a05ccbd1136', 'success', 1, 0.2, 500, '2023-05-25 19:31:43'),
('a41630bd-1e2e-464e-a7ba-5ddad82a002f', 0.018954, 26326.8, 499, 'BTC', 'credit', '60f45833-58f2-4dd8-aa18-ce4bdfff42fc', 'success', 1, 0.2, 500, '2023-05-25 19:39:22'),
('a41630bd-1e2e-464e-a7ba-5ddad82a002f', 0.00758749, 26306.4, 199.6, 'BTC', 'credit', 'd29e45b0-76b6-4bac-9ce9-37aa7f3a72bb', 'success', 0.4, 0.2, 200, '2023-05-25 19:39:57'),
('a41630bd-1e2e-464e-a7ba-5ddad82a002f', 199.6, 26305.2, 199.6, 'BTC', 'debit', '8ea8bc28-502a-4070-a9f2-bbe691991ad1', 'success', 0.4, 0.2, 200, '2023-05-25 19:41:02'),
('80a28164-1f22-4656-aabb-051b9bc1f7ba', 0.0550308, 1813.53, 99.8, 'ETH', 'credit', '3552c054-44aa-4086-9789-4d82ee9aa849', 'success', 0.2, 0.2, 100, '2023-05-26 16:53:09'),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', 0.652501, 305.9, 199.6, 'BNB', 'credit', '40148b57-6f9d-44e4-af1d-a16198361d87', 'success', 0.4, 0.2, 200, '2023-05-26 17:10:05'),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', 99.8, 305.9, 99.8, 'BNB', 'debit', '28e13c9f-edf2-47ec-af02-65702b4abcd3', 'success', 0.2, 0.2, 100, '2023-05-26 17:11:31'),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', 10040.2, 0.0497, 499, 'BCEX', 'credit', 'b43d09a4-47b2-4664-b89d-6ff3e0bc1867', 'success', 1, 0.2, 500, '2023-05-26 17:12:10'),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', 199.6, 0.0497, 199.6, 'BCEX', 'debit', '9e3aa5ec-7835-4bcc-aac7-331eec8f5258', 'success', 0.4, 0.2, 200, '2023-05-26 17:14:43'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 19.96, 26494.6, 19.96, 'BTC', 'debit', '710c12c0-eb2b-41d1-a7a9-845600e78011', 'success', 0.04, 0.2, 20, '2023-05-26 17:18:52'),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', 8908.76, 0.9497, 8908.76, 'BCEX', 'debit', '56e4312c-3c08-42b2-9e2f-4ba0f9d4d258', 'success', 17.8532, 0.2, 8926.61, '2023-05-26 17:46:49'),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', 1050.97, 0.9496, 998, 'BCEX', 'credit', '43cad997-767d-4ff7-b1c8-4d8c0f123253', 'success', 2, 0.2, 1000, '2023-05-26 17:48:26'),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', 53.3815, 0.05, 53.3815, 'BCEX', 'debit', 'b30d89c7-bf13-4cf5-a148-db0c27320263', 'success', 0.106977, 0.2, 53.4885, '2023-05-26 17:52:37'),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', 19960, 0.05, 998, 'BCEX', 'credit', '4fcb3001-49da-4eed-9364-8be9a5578117', 'success', 2, 0.2, 1000, '2023-05-26 17:56:44'),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', 499, 0.05, 499, 'BCEX', 'debit', 'b41436bc-bffa-48c2-99d3-056f94766587', 'success', 1, 0.2, 500, '2023-05-26 17:57:56'),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', 2000, 0.0499, 99.8, 'BCEX', 'credit', 'bded82a8-0c39-4e5d-b306-c677b1d1cf59', 'success', 0.2, 0.2, 100, '2023-05-26 18:01:44'),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', 1996, 0.05, 99.8, 'BCEX', 'credit', '3bbd3e67-27bb-41eb-9927-9a9b40dc5656', 'success', 0.2, 0.2, 100, '2023-05-26 18:02:21'),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', 199.6, 0.0501, 199.6, 'BCEX', 'debit', '420d6492-205b-4394-8a66-d9235fd22b41', 'success', 0.4, 0.2, 200, '2023-05-26 18:02:47'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 6.93188, 0.872, 6.93188, 'LUNA', 'debit', 'aba5809d-4e74-4621-9879-13803b4be543', 'success', 0.0138915, 0.2, 6.94577, '2023-05-29 16:06:30'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0138638, 0.8712, 0.0138638, 'LUNA', 'debit', 'b78c9eaa-5482-4893-a703-339547c3190b', 'success', 0.0000277831, 0.2, 0.0138916, '2023-05-29 16:14:52'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.580306, 0.07317, 0.580306, 'DOGE', 'debit', 'cb885484-5655-46f1-95ab-205dc8b50baf', 'success', 0.00116294, 0.2, 0.581469, '2023-05-29 16:16:31'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 614.112, 0.07313, 44.91, 'DOGE', 'credit', 'a569e857-9f1b-4262-9feb-e4c5a25919ca', 'success', 0.09, 0.2, 45, '2023-05-29 16:17:06'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 40940.8, 0.07313, 2994, 'DOGE', 'credit', 'dd3dacaf-0e8c-4732-b945-f5f57aac4f2d', 'success', 6, 0.2, 3000, '2023-05-29 16:17:18'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.414764, 1898.48, 787.422, 'ETH', 'credit', '446631be-dde6-4b21-8e7e-14de4566b5b8', 'success', 1.578, 0.2, 789, '2023-05-29 16:21:32'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.414738, 1898.6, 787.422, 'ETH', 'credit', '446f95e7-b2a5-4f73-b771-08dcc1996e50', 'success', 1.578, 0.2, 789, '2023-05-29 16:22:15'),
('e4fe82c7-aef2-40ff-8208-8ecfcc659f77', 987.141, 0.5055, 499, 'XRP', 'credit', 'df2f39a1-10a0-4934-9448-99a42870bc00', 'success', 1, 0.2, 500, '2023-05-31 15:56:21'),
('e4fe82c7-aef2-40ff-8208-8ecfcc659f77', 1.2999, 307.1, 399.2, 'BNB', 'credit', 'df1592d2-8ce7-493f-87ef-e9870bef8284', 'success', 0.8, 0.2, 400, '2023-05-31 15:57:24'),
('A20307F1', 7984, 0.05, 399.2, 'BCEX', 'credit', '87c90629-60c9-4c31-abf3-72ebafd45951', 'success', 0.8, 0.2, 400, '2023-05-31 17:07:20'),
('A20307F1', 0.0233539, 1901.65, 44.411, 'ETH', 'credit', 'efa39298-b401-4864-befe-29894283c7e0', 'success', 0.089, 0.2, 44.5, '2023-06-03 15:49:09'),
('60BBDB81', 9980, 0.05, 499, 'BCEX', 'credit', '71b29a61-0e66-47e6-8140-0184968d770e', 'success', 1, 0.2, 500, '2023-06-03 18:19:43'),
('60BBDB81', 4.70533, 21.21, 99.8, 'SOL', 'credit', 'b0e82f00-ce7e-4f37-a0ae-351147e2e26b', 'success', 0.2, 0.2, 100, '2023-06-03 18:20:16'),
('60BBDB81', 0.104819, 1904.23, 199.6, 'ETH', 'credit', '9fc6776c-606c-440a-bee2-69abc730164c', 'success', 0.4, 0.2, 200, '2023-06-03 18:20:24'),
('60BBDB81', 0.974609, 307.2, 299.4, 'BNB', 'credit', 'f6e1eba4-e783-4452-8e1d-3de51b1470ad', 'success', 0.6, 0.2, 300, '2023-06-03 18:20:36'),
('A20307F1', 0.294887, 77.84, 22.954, 'LTC', 'credit', '76abdfb2-6b5e-4d42-8964-a3fec783d8bf', 'success', 0.046, 0.2, 23, '2023-06-11 18:51:36'),
('A20307F1', 66.9799, 0.5066, 33.932, 'XRP', 'credit', '1be3cdb1-1323-4520-bf82-124f01699527', 'success', 0.068, 0.2, 34, '2023-06-11 18:59:23'),
('A20307F1', 5.903, 0.5072, 2.994, 'XRP', 'credit', '705636c2-6da5-4588-9557-f442543c7bad', 'success', 0.006, 0.2, 3, '2023-06-11 19:04:30'),
('A20307F1', 0.0065933, 1816.39, 11.976, 'ETH', 'credit', '5dd04307-d617-4ba4-8c40-acd7aa5497b7', 'success', 0.024, 0.2, 12, '2023-08-16 22:01:15');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `sno` int(11) NOT NULL,
  `userid` varchar(55) NOT NULL,
  `Name` varchar(55) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `email` varchar(255) NOT NULL,
  `Phone` varchar(15) DEFAULT NULL,
  `Pancard` varchar(99) DEFAULT NULL,
  `adharcard` varchar(99) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `referral` varchar(45) DEFAULT NULL,
  `Active` tinyint(1) NOT NULL,
  `Role` tinyint(1) NOT NULL,
  `verified` tinyint(1) NOT NULL,
  `lastlogin` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`sno`, `userid`, `Name`, `date`, `email`, `Phone`, `Pancard`, `adharcard`, `password`, `referral`, `Active`, `Role`, `verified`, `lastlogin`) VALUES
(163, '747bcee4-2cb3-4c3d-b3d3-91096b135310', 'wearning web', '2023-04-21 03:56:20', 'wearning52@gmail.com', '234', '432', '324', '$2b$10$sl0zjWfHtUO8xRPxbHsYrusdo319jhq4XkDuUKbvtPfEYCzRltxly', NULL, 1, 1, 1, '2023-08-15 22:27:47'),
(189, '9b7d8370-422a-41c7-adda-fd84a706c3d4', 'Crypto', '2023-05-26 17:04:12', 'cryptobtc349@gmail.com', NULL, NULL, NULL, '$2b$10$d/DBvQjvtUBOi3zsJv9OOOhmNYBZ5.KDxmBvjte5uesNlAKch9pIu', NULL, 1, 0, 1, '2023-05-31 15:45:33'),
(192, 'A20307F1', 'sid', '2023-05-31 17:04:49', 'shadan7053sid@gmail.com', NULL, NULL, NULL, '$2b$10$VZC8jLIgwWVcIMVr2jbmFuKg55Sl7Y0MthMZ2QFQSdPR/Rk9/BIlG', NULL, 1, 0, 1, '2023-08-17 17:11:42'),
(193, '4BCE6829', 'Danny', '2023-06-02 17:09:41', 'danielforry10@gmail.com', NULL, NULL, NULL, '$2b$10$zPnrLJJ40WuGvB8Sp04xy.FEDkzTtlr7PBSXpTANuCrl3P8jSnhBa', NULL, 1, 0, 1, NULL),
(194, '110C2A61', 'q next', '2023-06-02 17:30:27', 'qnextsolution262@gmail.com', NULL, NULL, NULL, '$2b$10$C82Wee/.SQ5847O7ekn23.WnrHC.zQoNwcVJQOWu2Z1JFrgw.QBTi', NULL, 1, 0, 1, NULL),
(195, '924E4BB7', 'Admin', '2023-06-02 22:27:00', 'adm.globiz@gmail.com', NULL, NULL, NULL, '$2b$10$FI5oRZTl8u/8Qnj0yCLaqe5jFg6gsApnTDKh/jG9Wd5wHcAJlzBZC', NULL, 1, 0, 1, NULL),
(196, '60BBDB81', 'TEMP', '2023-06-03 18:16:50', 'yiripan278@ozatvn.com', NULL, NULL, NULL, '$2b$10$UjRI9SFj/z5sG3T2h6F4JussOyz0I2J3PTvC.hh0iL2z7XmTLG3Iq', NULL, 1, 0, 1, NULL),
(197, '41D09240', 'HEllo', '2023-06-03 22:40:32', 'bemideb533@ozatvn.com', NULL, NULL, NULL, '$2b$10$y01ffLOI/RcM84gULa8R0OpEUGV/gKopN2yD7/l2H4hMTnupwxaKa', NULL, 1, 0, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `validatemail`
--

CREATE TABLE `validatemail` (
  `userid` varchar(55) NOT NULL,
  `code` int(11) NOT NULL,
  `dt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `validatemail`
--

INSERT INTO `validatemail` (`userid`, `code`, `dt`) VALUES
('A20307F1', 141212, '2023-06-02 15:56:21'),
('A20307F1', 141212, '2023-06-02 15:56:21'),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 311745, '2023-08-15 05:01:21');

-- --------------------------------------------------------

--
-- Table structure for table `wallet`
--

CREATE TABLE `wallet` (
  `UserId` varchar(55) NOT NULL,
  `quantity` float NOT NULL,
  `currency` varchar(55) NOT NULL,
  `custom` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `wallet`
--

INSERT INTO `wallet` (`UserId`, `quantity`, `currency`, `custom`) VALUES
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 1.7948, 'ETH', NULL),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 7.96533, 'BCEX', NULL),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 19.9653, 'SOL', NULL),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 7.96533, 'ADA', NULL),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 7.96533, 'XRP', NULL),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0000172619, 'LUNA', NULL),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 41554.9, 'DOGE', NULL),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 7.96533, 'BNB', NULL),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 7.96533, 'LTC', NULL),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 7.96533, 'BTC', NULL),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', 112073, 'usdt', NULL),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', 13860.2, 'BNB', NULL),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', 13860.2, 'BCEX', NULL),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 4894, 'USDT', NULL),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', 18, 'ETH', NULL),
('A20307F1', 61.5, 'usdt', NULL),
('A20307F1', 7984, 'BCEX', NULL),
('A20307F1', 0.0299472, 'ETH', NULL),
('60BBDB81', 100, 'usdt', NULL),
('60BBDB81', 9980, 'BCEX', NULL),
('60BBDB81', 4.70533, 'SOL', NULL),
('60BBDB81', 0.104819, 'ETH', NULL),
('60BBDB81', 0.974609, 'BNB', NULL),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 1.7948, 'ETH', NULL),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 7.96533, 'BCEX', NULL),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 19.9653, 'SOL', NULL),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 7.96533, 'ADA', NULL),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 7.96533, 'XRP', NULL),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 0.0000172619, 'LUNA', NULL),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 41554.9, 'DOGE', NULL),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 7.96533, 'BNB', NULL),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 7.96533, 'LTC', NULL),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 7.96533, 'BTC', NULL),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', 112073, 'usdt', NULL),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', 13860.2, 'BNB', NULL),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', 13860.2, 'BCEX', NULL),
('747bcee4-2cb3-4c3d-b3d3-91096b135310', 4894, 'USDT', NULL),
('9b7d8370-422a-41c7-adda-fd84a706c3d4', 18, 'ETH', NULL),
('A20307F1', 61.5, 'usdt', NULL),
('A20307F1', 7984, 'BCEX', NULL),
('A20307F1', 0.0299472, 'ETH', NULL),
('60BBDB81', 100, 'usdt', NULL),
('60BBDB81', 9980, 'BCEX', NULL),
('60BBDB81', 4.70533, 'SOL', NULL),
('60BBDB81', 0.104819, 'ETH', NULL),
('60BBDB81', 0.974609, 'BNB', NULL),
('A20307F1', 0.294887, 'LTC', NULL),
('A20307F1', 72.8829, 'XRP', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addresses`
--
ALTER TABLE `addresses`
  ADD KEY `rr` (`userid`);

--
-- Indexes for table `coinlist`
--
ALTER TABLE `coinlist`
  ADD PRIMARY KEY (`coinid`);

--
-- Indexes for table `customcoin`
--
ALTER TABLE `customcoin`
  ADD PRIMARY KEY (`coinid`);

--
-- Indexes for table `gfa`
--
ALTER TABLE `gfa`
  ADD KEY `us` (`userid`);

--
-- Indexes for table `inandouthistory`
--
ALTER TABLE `inandouthistory`
  ADD KEY `id` (`userid`);

--
-- Indexes for table `ordertable`
--
ALTER TABLE `ordertable`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD KEY `yy` (`userid`);

--
-- Indexes for table `referral`
--
ALTER TABLE `referral`
  ADD KEY `ss` (`userid`);

--
-- Indexes for table `transactionhistory`
--
ALTER TABLE `transactionhistory`
  ADD KEY `UserId` (`UserId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`sno`),
  ADD UNIQUE KEY `userid` (`userid`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `referral` (`referral`),
  ADD UNIQUE KEY `Phone` (`Phone`);

--
-- Indexes for table `wallet`
--
ALTER TABLE `wallet`
  ADD KEY `userid` (`UserId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `coinlist`
--
ALTER TABLE `coinlist`
  MODIFY `coinid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=786547;

--
-- AUTO_INCREMENT for table `customcoin`
--
ALTER TABLE `customcoin`
  MODIFY `coinid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `sno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=198;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `addresses`
--
ALTER TABLE `addresses`
  ADD CONSTRAINT `rr` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `gfa`
--
ALTER TABLE `gfa`
  ADD CONSTRAINT `us` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `inandouthistory`
--
ALTER TABLE `inandouthistory`
  ADD CONSTRAINT `id` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `yy` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `referral`
--
ALTER TABLE `referral`
  ADD CONSTRAINT `ss` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `wallet`
--
ALTER TABLE `wallet`
  ADD CONSTRAINT `userid` FOREIGN KEY (`UserId`) REFERENCES `users` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
