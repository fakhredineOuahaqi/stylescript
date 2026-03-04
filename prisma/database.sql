-- Database snapshot: proj_d6d2bb86
-- Created at: 2026-03-04 03:37:15.128063
-- Include structure: True
-- Include data: True

SET FOREIGN_KEY_CHECKS = 0;

-- Table structure for `admin_user`
DROP TABLE IF EXISTS `admin_user`;
CREATE TABLE `admin_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` enum('customer','admin','super_admin') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'admin',
  `status` enum('active','suspended','deleted') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `admin_user_username_key` (`username`),
  UNIQUE KEY `admin_user_email_key` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data for table `admin_user`
INSERT INTO `admin_user` (`id`, `username`, `email`, `password`, `role`, `status`, `created_at`, `updated_at`) VALUES
(1, 'karim_manager', 'karim.b@moroccodevs.com', 'a109e36947ad56de1dca1cc49f0ef8ac9ad9a7b1aa0df41fb3c4cb73c1ff01ea', 'super_admin', 'active', '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(2, 'layla_ops', 'layla.z@moroccodevs.com', 'hashed_password_placeholder', 'admin', 'active', '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(3, 'youssef_support', 'youssef.k@moroccodevs.com', 'hashed_password_placeholder', 'admin', 'active', '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(4, 'samira_logistics', 'samira.h@moroccodevs.com', 'hashed_password_placeholder', 'admin', 'active', '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(5, 'hassan_inventory', 'hassan.m@moroccodevs.com', 'hashed_password_placeholder', 'admin', 'active', '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(6, 'nora_content', 'nora.f@moroccodevs.com', 'hashed_password_placeholder', 'admin', 'active', '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(7, 'driss_tech', 'driss.l@moroccodevs.com', 'hashed_password_placeholder', 'admin', 'active', '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(8, 'amina_finance', 'amina.r@moroccodevs.com', 'hashed_password_placeholder', 'admin', 'active', '2026-03-03 15:04:54', '2026-03-03 15:04:54');

-- Table structure for `cart`
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `subtotal_price` decimal(10,2) NOT NULL DEFAULT '0.00',
  `total_price` decimal(10,2) NOT NULL DEFAULT '0.00',
  `shipping_fee` decimal(10,2) NOT NULL DEFAULT '0.00',
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cart_user_id_fkey` (`user_id`),
  CONSTRAINT `cart_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data for table `cart`
INSERT INTO `cart` (`id`, `user_id`, `subtotal_price`, `total_price`, `shipping_fee`, `created_at`, `updated_at`) VALUES
(1, 2, '45.00', '50.00', '5.00', '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(2, 4, '45.00', '50.00', '5.00', '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(3, 6, '45.00', '50.00', '5.00', '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(4, 8, '45.00', '50.00', '5.00', '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(5, 10, '45.00', '50.00', '5.00', '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(6, 11, '0.00', '0.00', '0.00', '2026-03-03 15:14:04', '2026-03-03 15:14:04');

-- Table structure for `cart_item`
DROP TABLE IF EXISTS `cart_item`;
CREATE TABLE `cart_item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cart_id` int NOT NULL,
  `product_id` int NOT NULL,
  `quantity` int NOT NULL DEFAULT '1',
  `unit_price` decimal(10,2) NOT NULL,
  `selected_size` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `selected_color` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cart_item_cart_id_fkey` (`cart_id`),
  KEY `cart_item_product_id_fkey` (`product_id`),
  CONSTRAINT `cart_item_cart_id_fkey` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `cart_item_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data for table `cart_item`
INSERT INTO `cart_item` (`id`, `cart_id`, `product_id`, `quantity`, `unit_price`, `selected_size`, `selected_color`, `created_at`, `updated_at`) VALUES
(1, 1, 10, 1, '45.00', 'L', 'Black', '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(2, 2, 3, 1, '45.00', 'L', 'Black', '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(3, 3, 6, 1, '45.00', 'L', 'Black', '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(4, 4, 11, 1, '45.00', 'L', 'Black', '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(5, 5, 5, 1, '45.00', 'L', 'Black', '2026-03-03 15:04:54', '2026-03-03 15:04:54');

-- Table structure for `category`
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `cover_image_url` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_visible` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `category_slug_key` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data for table `category`
INSERT INTO `category` (`id`, `name`, `slug`, `description`, `cover_image_url`, `is_visible`, `created_at`, `updated_at`) VALUES
(1, 'Hoodies', 'hoodies', 'Warm hoodies for late night coding sessions.', 'https://images.pexels.com/photos/5926385/pexels-photo-5926385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 1, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(2, 'T-Shirts', 't-shirts', 'Breathable tees with geeky prints.', 'https://images.pexels.com/photos/34156907/pexels-photo-34156907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 1, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(3, 'Hats & Caps', 'hats-caps', 'Keep your head in the game.', 'https://images.pexels.com/photos/9935865/pexels-photo-9935865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 1, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(4, 'Laptop Stickers', 'stickers', 'Decorate your machine.', 'https://images.pexels.com/photos/25435665/pexels-photo-25435665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 1, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(5, 'Mugs', 'mugs', 'Coffee is fuel for code.', 'https://images.pexels.com/photos/29279566/pexels-photo-29279566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 1, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(6, 'Accessories', 'accessories', 'Mousepads, keychains and more.', 'https://images.pexels.com/photos/32313567/pexels-photo-32313567.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 1, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(7, 'Gift Cards', 'gift-cards', 'The perfect gift for a dev.', 'https://images.pexels.com/photos/6149054/pexels-photo-6149054.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 1, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(8, 'Limited Edition', 'limited', 'Exclusive Moroccan Tech drops.', 'https://images.pexels.com/photos/4502961/pexels-photo-4502961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 1, '2026-03-03 15:04:54', '2026-03-03 15:04:54');

-- Table structure for `order`
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_number` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int NOT NULL,
  `status` enum('pending','confirmed','shipped','delivered','cancelled','refunded') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `payment_method` enum('cash_on_delivery','credit_card','bank_transfer') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'cash_on_delivery',
  `total_amount` decimal(10,2) NOT NULL,
  `total_price` decimal(10,2) NOT NULL,
  `shipping_fee` decimal(10,2) NOT NULL DEFAULT '0.00',
  `shipping_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `shipping_phone` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `shipping_address` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `shipping_city` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tracking_number` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `refund_reason` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `order_order_number_key` (`order_number`),
  KEY `order_user_id_fkey` (`user_id`),
  CONSTRAINT `order_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data for table `order`
INSERT INTO `order` (`id`, `order_number`, `user_id`, `status`, `payment_method`, `total_amount`, `total_price`, `shipping_fee`, `shipping_name`, `shipping_phone`, `shipping_address`, `shipping_city`, `tracking_number`, `refund_reason`, `created_at`, `updated_at`) VALUES
(1, 'ORD-2023000', 1, 'delivered', 'credit_card', '60.00', '55.00', '5.00', 'Amine El Idrissi', '+212 612 345 678', '456 Hassan II Blvd, Rabat', 'Rabat', NULL, NULL, '2026-02-05 15:04:54', '2026-02-05 15:04:54'),
(2, 'ORD-2023001', 2, 'delivered', 'credit_card', '60.00', '55.00', '5.00', 'Sarah Smith', '+212 612 345 678', '456 Hassan II Blvd, Rabat', 'Rabat', NULL, NULL, '2026-03-02 15:04:54', '2026-03-02 15:04:54'),
(3, 'ORD-2023002', 3, 'delivered', 'credit_card', '60.00', '55.00', '5.00', 'Mohamed Benali', '+212 612 345 678', '456 Hassan II Blvd, Rabat', 'Rabat', NULL, NULL, '2026-02-02 15:04:54', '2026-02-02 15:04:54'),
(4, 'ORD-2023003', 4, 'delivered', 'credit_card', '60.00', '55.00', '5.00', 'Fatima Zahra', '+212 612 345 678', '456 Hassan II Blvd, Rabat', 'Rabat', NULL, NULL, '2026-03-02 15:04:54', '2026-03-02 15:04:54'),
(5, 'ORD-2023004', 5, 'delivered', 'credit_card', '60.00', '55.00', '5.00', 'John Doe', '+212 612 345 678', '456 Hassan II Blvd, Rabat', 'Rabat', NULL, NULL, '2026-02-13 15:04:54', '2026-02-13 15:04:54'),
(6, 'ORD-2023005', 6, 'delivered', 'credit_card', '60.00', '55.00', '5.00', 'Kenza Bouzidi', '+212 612 345 678', '456 Hassan II Blvd, Rabat', 'Rabat', NULL, NULL, '2026-02-28 15:04:54', '2026-02-28 15:04:54'),
(7, 'ORD-2023006', 7, 'delivered', 'credit_card', '60.00', '55.00', '5.00', 'Omar Khalil', '+212 612 345 678', '456 Hassan II Blvd, Rabat', 'Rabat', NULL, NULL, '2026-02-22 15:04:54', '2026-02-22 15:04:54'),
(8, 'ORD-2023007', 8, 'delivered', 'credit_card', '60.00', '55.00', '5.00', 'Lisa Williams', '+212 612 345 678', '456 Hassan II Blvd, Rabat', 'Rabat', NULL, NULL, '2026-02-26 15:04:54', '2026-02-26 15:04:54'),
(9, 'ORD-2023008', 9, 'delivered', 'credit_card', '60.00', '55.00', '5.00', 'Rachid Mouline', '+212 612 345 678', '456 Hassan II Blvd, Rabat', 'Rabat', NULL, NULL, '2026-02-24 15:04:54', '2026-02-24 15:04:54'),
(10, 'ORD-2023009', 10, 'delivered', 'credit_card', '60.00', '55.00', '5.00', 'Sofia Alami', '+212 612 345 678', '456 Hassan II Blvd, Rabat', 'Rabat', NULL, NULL, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(11, 'ORD-1772550889700-678', 11, 'pending', 'cash_on_delivery', '0.00', '0.00', '0.00', 'Fakhre Dine', '+212627573120', 'issil marrrakech, marrakech', 'marrakech', NULL, NULL, '2026-03-03 15:14:49', '2026-03-03 15:14:49');

-- Table structure for `order_item`
DROP TABLE IF EXISTS `order_item`;
CREATE TABLE `order_item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `product_id` int NOT NULL,
  `product_title` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_cover_image_url` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `quantity` int NOT NULL,
  `unit_price` decimal(10,2) NOT NULL,
  `price_at_purchase` decimal(10,2) NOT NULL,
  `selected_size` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `selected_color` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `order_item_order_id_fkey` (`order_id`),
  KEY `order_item_product_id_fkey` (`product_id`),
  CONSTRAINT `order_item_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `order_item_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data for table `order_item`
INSERT INTO `order_item` (`id`, `order_id`, `product_id`, `product_title`, `product_cover_image_url`, `quantity`, `unit_price`, `price_at_purchase`, `selected_size`, `selected_color`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'Full Stack Hero Hoodie', NULL, 1, '55.00', '55.00', 'M', 'Navy', '2026-02-05 15:04:54', '2026-02-05 15:04:54'),
(2, 2, 2, 'Git Commit Push Force Tee', NULL, 1, '55.00', '55.00', 'M', 'Navy', '2026-03-02 15:04:54', '2026-03-02 15:04:54'),
(3, 3, 3, 'Python Snake Embroidered Cap', NULL, 1, '55.00', '55.00', 'M', 'Navy', '2026-02-02 15:04:54', '2026-02-02 15:04:54'),
(4, 4, 4, 'React.js Component Mug', NULL, 1, '55.00', '55.00', 'M', 'Navy', '2026-03-02 15:04:54', '2026-03-02 15:04:54'),
(5, 5, 5, 'Docker Container Boxers', NULL, 1, '55.00', '55.00', 'M', 'Navy', '2026-02-13 15:04:54', '2026-02-13 15:04:54'),
(6, 6, 6, 'Casablanca Tech Hub Sticker Pack', NULL, 1, '55.00', '55.00', 'M', 'Navy', '2026-02-28 15:04:54', '2026-02-28 15:04:54'),
(7, 7, 7, '404 Brain Not Found Hoodie', NULL, 1, '55.00', '55.00', 'M', 'Navy', '2026-02-22 15:04:54', '2026-02-22 15:04:54'),
(8, 8, 8, 'TypeScript Strictly Typed Tee', NULL, 1, '55.00', '55.00', 'M', 'Navy', '2026-02-26 15:04:54', '2026-02-26 15:04:54'),
(9, 9, 9, 'Linux Penguin Plushie', NULL, 1, '55.00', '55.00', 'M', 'Navy', '2026-02-24 15:04:54', '2026-02-24 15:04:54'),
(10, 10, 10, 'HTML5 is a Programming Language Mug', NULL, 1, '55.00', '55.00', 'M', 'Navy', '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(11, 11, 9, 'Linux Penguin Plushie', 'https://images.pexels.com/photos/28773403/pexels-photo-28773403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 1, '22.00', '22.00', 'S,M,L,XL,XXL', 'Black,White,Grey,Navy', '2026-03-03 15:14:50', '2026-03-03 15:14:50');

-- Table structure for `product`
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `sku` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description_short` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `description_long` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `price` decimal(10,2) NOT NULL,
  `sale_price` decimal(10,2) DEFAULT NULL,
  `compare_at_price` decimal(10,2) DEFAULT NULL,
  `cover_image_url` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hover_image_url` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_url_list` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `stock_quantity` int NOT NULL DEFAULT '0',
  `available_sizes` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `available_colors` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `material_info` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `care_instructions` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `size_chart_url` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` enum('active','inactive','out_of_stock') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `category_id` int NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `product_sku_key` (`sku`),
  KEY `product_category_id_fkey` (`category_id`),
  CONSTRAINT `product_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data for table `product`
INSERT INTO `product` (`id`, `title`, `name`, `sku`, `description_short`, `description_long`, `price`, `sale_price`, `compare_at_price`, `cover_image_url`, `hover_image_url`, `image_url_list`, `stock_quantity`, `available_sizes`, `available_colors`, `material_info`, `care_instructions`, `size_chart_url`, `status`, `category_id`, `created_at`, `updated_at`) VALUES
(1, 'Full Stack Hero Hoodie', 'Full Stack Hero Hoodie', 'HD-FS-001', 'High quality material designed for developers.', 'This product is designed with the modern coder in mind. Featuring durable fabric and a comfortable fit, it is perfect for long coding sessions or casual wear. Ships directly from Morocco.', '45.00', NULL, NULL, 'https://images.pexels.com/photos/28758001/pexels-photo-28758001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', NULL, 'https://images.pexels.com/photos/12555790/pexels-photo-12555790.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940|https://images.pexels.com/photos/7655627/pexels-photo-7655627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 50, 'S,M,L,XL,XXL', 'Black,White,Grey,Navy', NULL, NULL, NULL, 'active', 1, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(2, 'Git Commit Push Force Tee', 'Git Commit Push Force Tee', 'TS-GIT-002', 'High quality material designed for developers.', 'This product is designed with the modern coder in mind. Featuring durable fabric and a comfortable fit, it is perfect for long coding sessions or casual wear. Ships directly from Morocco.', '25.00', NULL, NULL, 'https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/05a13066f900473ca2d062488b441ce3.png', NULL, 'https://images.pexels.com/photos/34975075/pexels-photo-34975075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940|https://images.pexels.com/photos/2112636/pexels-photo-2112636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 50, 'S,M,L,XL,XXL', 'Black,White,Grey,Navy', NULL, NULL, NULL, 'active', 2, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(3, 'Python Snake Embroidered Cap', 'Python Snake Embroidered Cap', 'CP-PY-003', 'High quality material designed for developers.', 'This product is designed with the modern coder in mind. Featuring durable fabric and a comfortable fit, it is perfect for long coding sessions or casual wear. Ships directly from Morocco.', '18.00', NULL, NULL, 'https://images.pexels.com/photos/33611287/pexels-photo-33611287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', NULL, 'https://images.pexels.com/photos/26956136/pexels-photo-26956136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940|https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/7c069669d68a4a338fdaece226180566.png', 50, 'S,M,L,XL,XXL', 'Black,White,Grey,Navy', NULL, NULL, NULL, 'active', 3, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(4, 'React.js Component Mug', 'React.js Component Mug', 'MG-RCT-004', 'High quality material designed for developers.', 'This product is designed with the modern coder in mind. Featuring durable fabric and a comfortable fit, it is perfect for long coding sessions or casual wear. Ships directly from Morocco.', '12.50', NULL, NULL, 'https://images.pexels.com/photos/10458210/pexels-photo-10458210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', NULL, 'https://images.pexels.com/photos/1656025/pexels-photo-1656025.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940|https://images.pexels.com/photos/6312184/pexels-photo-6312184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 50, 'S,M,L,XL,XXL', 'Black,White,Grey,Navy', NULL, NULL, NULL, 'active', 4, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(5, 'Docker Container Boxers', 'Docker Container Boxers', 'UW-DCK-005', 'High quality material designed for developers.', 'This product is designed with the modern coder in mind. Featuring durable fabric and a comfortable fit, it is perfect for long coding sessions or casual wear. Ships directly from Morocco.', '15.00', NULL, NULL, 'https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/1377e0871a0d45e7bf66f8e7f43c4c3b.png', NULL, 'https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/647e8d19241d4356bc67c7f43c7db65d.png|https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/907f8aad44a34aff9acf07400dbaf90e.png', 50, 'S,M,L,XL,XXL', 'Black,White,Grey,Navy', NULL, NULL, NULL, 'active', 5, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(6, 'Casablanca Tech Hub Sticker Pack', 'Casablanca Tech Hub Sticker Pack', 'ST-CSB-006', 'High quality material designed for developers.', 'This product is designed with the modern coder in mind. Featuring durable fabric and a comfortable fit, it is perfect for long coding sessions or casual wear. Ships directly from Morocco.', '8.00', NULL, NULL, 'https://images.pexels.com/photos/19987743/pexels-photo-19987743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', NULL, 'https://images.pexels.com/photos/24381087/pexels-photo-24381087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940|https://images.pexels.com/photos/20065419/pexels-photo-20065419.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 50, 'S,M,L,XL,XXL', 'Black,White,Grey,Navy', NULL, NULL, NULL, 'active', 6, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(7, '404 Brain Not Found Hoodie', '404 Brain Not Found Hoodie', 'HD-404-007', 'High quality material designed for developers.', 'This product is designed with the modern coder in mind. Featuring durable fabric and a comfortable fit, it is perfect for long coding sessions or casual wear. Ships directly from Morocco.', '48.00', NULL, NULL, 'https://images.pexels.com/photos/29996222/pexels-photo-29996222.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', NULL, 'https://images.pexels.com/photos/6311647/pexels-photo-6311647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940|https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/ba3f9a28cd1e4472b04a1c7462bf76a6.png', 50, 'S,M,L,XL,XXL', 'Black,White,Grey,Navy', NULL, NULL, NULL, 'active', 7, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(8, 'TypeScript Strictly Typed Tee', 'TypeScript Strictly Typed Tee', 'TS-TYP-008', 'High quality material designed for developers.', 'This product is designed with the modern coder in mind. Featuring durable fabric and a comfortable fit, it is perfect for long coding sessions or casual wear. Ships directly from Morocco.', '28.00', NULL, NULL, 'https://images.pexels.com/photos/1933589/pexels-photo-1933589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', NULL, 'https://images.pexels.com/photos/12922525/pexels-photo-12922525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940|https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/b213f9f807294d60a139f0308db27825.png', 50, 'S,M,L,XL,XXL', 'Black,White,Grey,Navy', NULL, NULL, NULL, 'active', 8, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(9, 'Linux Penguin Plushie', 'Linux Penguin Plushie', 'AC-TUX-009', 'High quality material designed for developers.', 'This product is designed with the modern coder in mind. Featuring durable fabric and a comfortable fit, it is perfect for long coding sessions or casual wear. Ships directly from Morocco.', '22.00', NULL, NULL, 'https://images.pexels.com/photos/28773403/pexels-photo-28773403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', NULL, 'https://images.pexels.com/photos/5868299/pexels-photo-5868299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940|https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/7a18590d71d941f69c09d868a0527b30.png', 50, 'S,M,L,XL,XXL', 'Black,White,Grey,Navy', NULL, NULL, NULL, 'active', 1, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(10, 'HTML5 is a Programming Language Mug', 'HTML5 is a Programming Language Mug', 'MG-HTM-010', 'High quality material designed for developers.', 'This product is designed with the modern coder in mind. Featuring durable fabric and a comfortable fit, it is perfect for long coding sessions or casual wear. Ships directly from Morocco.', '12.50', NULL, NULL, 'https://images.pexels.com/photos/6312270/pexels-photo-6312270.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', NULL, 'https://images.pexels.com/photos/28668425/pexels-photo-28668425.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940|https://images.pexels.com/photos/6312176/pexels-photo-6312176.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 50, 'S,M,L,XL,XXL', 'Black,White,Grey,Navy', NULL, NULL, NULL, 'active', 2, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(11, 'Keyboard Warrior Wrist Rest', 'Keyboard Warrior Wrist Rest', 'AC-WRI-011', 'High quality material designed for developers.', 'This product is designed with the modern coder in mind. Featuring durable fabric and a comfortable fit, it is perfect for long coding sessions or casual wear. Ships directly from Morocco.', '30.00', NULL, NULL, 'https://images.pexels.com/photos/4383926/pexels-photo-4383926.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', NULL, 'https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/a3fff6cd060048ed9bf7046e3f7c11e5.png|https://images.pexels.com/photos/31497028/pexels-photo-31497028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 50, 'S,M,L,XL,XXL', 'Black,White,Grey,Navy', NULL, NULL, NULL, 'active', 3, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(12, 'Marrakech Digital Nomad Backpack', 'Marrakech Digital Nomad Backpack', 'BG-MRK-012', 'High quality material designed for developers.', 'This product is designed with the modern coder in mind. Featuring durable fabric and a comfortable fit, it is perfect for long coding sessions or casual wear. Ships directly from Morocco.', '85.00', NULL, NULL, 'https://images.pexels.com/photos/10450995/pexels-photo-10450995.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', NULL, 'https://images.pexels.com/photos/3829552/pexels-photo-3829552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940|https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/54a662f7dc0e40d4b21c8b3d0168a697.png', 50, 'S,M,L,XL,XXL', 'Black,White,Grey,Navy', NULL, NULL, NULL, 'active', 4, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(14, 'full', 'fullstackdev', '001', NULL, NULL, '20.00', '10.00', NULL, 'https://res.cloudinary.com/dr3znrr01/image/upload/v1772561731/Image_36_foyq81.webp', NULL, NULL, 20, 'XS', 'Grey', NULL, NULL, NULL, 'active', 2, '2026-03-03 18:01:15', '2026-03-03 18:16:30'),
(15, 'fffff', 'fullstdff', '0023', NULL, 'dddd', '100.00', NULL, NULL, 'https://res.cloudinary.com/dr3znrr01/image/upload/v1772561731/Image_36_foyq81.webp', NULL, 'https://res.cloudinary.com/dr3znrr01/image/upload/v1772589919/Image_34_1_mklhld.webp', 0, 'XS', 'Red', NULL, NULL, NULL, 'active', 1, '2026-03-04 02:06:07', '2026-03-04 02:06:07');

-- Table structure for `promotion`
DROP TABLE IF EXISTS `promotion`;
CREATE TABLE `promotion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `subtitle` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `background_image_url` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data for table `promotion`
INSERT INTO `promotion` (`id`, `title`, `subtitle`, `background_image_url`, `created_at`, `updated_at`) VALUES
(1, 'Summer Code Camp Sale', 'Get 20% off all T-shirts', 'https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/56fccf076f1041c9a8930ee7bbd86a82.png', '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(2, 'Back to School', 'Upgrade your gear for the new semester', 'https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/4fca009521fb41d88036f72c28d25866.png', '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(3, 'Ramadan Nights', 'Cozy Hoodies for long coding nights', 'https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/51e8cec7cbc34374a71dd8a781509880.png', '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(4, 'Cyber Monday', 'Biggest Tech Deals of the Year', 'https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/b3049dc7e0734f988cf8f994096bc298.png', '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(5, 'Developer Day Special', 'Free stickers with every order', 'https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/cbaedc3828324b119e8572134492f29a.png', '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(6, 'Winter Collection', 'Stay warm, code cool', 'https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/a8ef14c2a2994a41ad33e3248d917c7e.png', '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(7, 'New Arrivals', 'Check out the latest Moroccan Tech fashion', 'https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/3c33229c2a2444f984414860ee9fdfb8.png', '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(8, 'Clearance', 'Last chance to buy', 'https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/d8d1eebda3e144a298d68af62497ead7.png', '2026-03-03 15:04:55', '2026-03-03 15:04:55');

-- Table structure for `review`
DROP TABLE IF EXISTS `review`;
CREATE TABLE `review` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `user_id` int NOT NULL,
  `user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `rating_value` int NOT NULL,
  `comment_text` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `review_product_id_fkey` (`product_id`),
  KEY `review_user_id_fkey` (`user_id`),
  CONSTRAINT `review_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `review_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data for table `review`
INSERT INTO `review` (`id`, `product_id`, `user_id`, `user_name`, `rating_value`, `comment_text`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'Amine El Idrissi', 4, 'Great quality! Really love the design and the fabric feels premium. Delivery to Rabat was fast.', '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(2, 2, 2, 'Sarah Smith', 5, 'Great quality! Really love the design and the fabric feels premium. Delivery to Rabat was fast.', '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(3, 3, 3, 'Mohamed Benali', 4, 'Great quality! Really love the design and the fabric feels premium. Delivery to Rabat was fast.', '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(4, 4, 4, 'Fatima Zahra', 5, 'Great quality! Really love the design and the fabric feels premium. Delivery to Rabat was fast.', '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(5, 5, 5, 'John Doe', 4, 'Great quality! Really love the design and the fabric feels premium. Delivery to Rabat was fast.', '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(6, 6, 6, 'Kenza Bouzidi', 5, 'Great quality! Really love the design and the fabric feels premium. Delivery to Rabat was fast.', '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(7, 7, 7, 'Omar Khalil', 4, 'Great quality! Really love the design and the fabric feels premium. Delivery to Rabat was fast.', '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(8, 8, 8, 'Lisa Williams', 5, 'Great quality! Really love the design and the fabric feels premium. Delivery to Rabat was fast.', '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(9, 9, 9, 'Rachid Mouline', 4, 'Great quality! Really love the design and the fabric feels premium. Delivery to Rabat was fast.', '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(10, 10, 10, 'Sofia Alami', 5, 'Great quality! Really love the design and the fabric feels premium. Delivery to Rabat was fast.', '2026-03-03 15:04:54', '2026-03-03 15:04:54');

-- Table structure for `user`
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `avatar_url` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` enum('customer','admin','super_admin') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'customer',
  `status` enum('active','suspended','deleted') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `last_login` datetime(3) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_username_key` (`username`),
  UNIQUE KEY `user_email_key` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data for table `user`
INSERT INTO `user` (`id`, `username`, `email`, `password`, `phone_number`, `avatar_url`, `role`, `status`, `last_login`, `created_at`, `updated_at`) VALUES
(1, 'amine_code', 'amine.dev@gmail.com', '3203293a50dcec60e5002302dd583220b1fff71d0c133b751f97b0e608044139', NULL, 'https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/c56e5763ff074676b5e958b306c72fba.png', 'customer', 'active', NULL, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(2, 'sarah_js', 'sarah.smith@outlook.com', 'hashed_password_placeholder', NULL, 'https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/c56e5763ff074676b5e958b306c72fba.png', 'customer', 'active', NULL, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(3, 'mohamed_py', 'mohamed.benali@yahoo.fr', 'hashed_password_placeholder', NULL, 'https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/c56e5763ff074676b5e958b306c72fba.png', 'customer', 'active', NULL, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(4, 'fatima_web', 'fatima.zahra@gmail.com', 'hashed_password_placeholder', NULL, 'https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/c56e5763ff074676b5e958b306c72fba.png', 'customer', 'active', NULL, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(5, 'john_doe_dev', 'john.doe.coding@protonmail.com', 'hashed_password_placeholder', NULL, 'https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/c56e5763ff074676b5e958b306c72fba.png', 'customer', 'active', NULL, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(6, 'kenza_react', 'kenza.b@icloud.com', 'hashed_password_placeholder', NULL, 'https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/c56e5763ff074676b5e958b306c72fba.png', 'customer', 'active', NULL, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(7, 'omar_fullstack', 'omar.khalil@gmail.com', 'hashed_password_placeholder', NULL, 'https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/c56e5763ff074676b5e958b306c72fba.png', 'customer', 'active', NULL, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(8, 'lisa_frontend', 'lisa.williams@gmail.com', 'hashed_password_placeholder', NULL, 'https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/c56e5763ff074676b5e958b306c72fba.png', 'customer', 'active', NULL, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(9, 'rachid_backend', 'rachid.m@live.com', 'hashed_password_placeholder', NULL, 'https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/c56e5763ff074676b5e958b306c72fba.png', 'customer', 'active', NULL, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(10, 'sofi_ux', 'sofia.design@gmail.com', 'hashed_password_placeholder', NULL, 'https://productp.s3.us-west-2.amazonaws.com/background/zaki_prod/generated/c56e5763ff074676b5e958b306c72fba.png', 'customer', 'active', NULL, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(11, 'fcodes', 'fakhre@gmail.com', '09fcc8f6774e18529b307750358ee10f33693e9c50f83967a49a00381c79ddce', '', 'https://commons.wikimedia.org/wiki/File:React-icon.svg', 'customer', 'active', '2026-03-03 15:11:59', '2026-03-03 15:11:59', '2026-03-03 15:13:46');

-- Table structure for `user_address`
DROP TABLE IF EXISTS `user_address`;
CREATE TABLE `user_address` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `recipient_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `address_line_1` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `address_line_2` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `postal_code` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `zip_code` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_default` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_address_user_id_fkey` (`user_id`),
  CONSTRAINT `user_address_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data for table `user_address`
INSERT INTO `user_address` (`id`, `user_id`, `recipient_name`, `phone_number`, `address_line_1`, `address_line_2`, `city`, `postal_code`, `zip_code`, `is_default`, `created_at`, `updated_at`) VALUES
(1, 1, 'Amine El Idrissi', '+212 600 000 000', '123 Mohammed V Avenue', NULL, 'Casablanca', '20000', NULL, 1, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(2, 2, 'Sarah Smith', '+212 600 000 000', '123 Mohammed V Avenue', NULL, 'Casablanca', '20000', NULL, 1, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(3, 3, 'Mohamed Benali', '+212 600 000 000', '123 Mohammed V Avenue', NULL, 'Casablanca', '20000', NULL, 1, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(4, 4, 'Fatima Zahra', '+212 600 000 000', '123 Mohammed V Avenue', NULL, 'Casablanca', '20000', NULL, 1, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(5, 5, 'John Doe', '+212 600 000 000', '123 Mohammed V Avenue', NULL, 'Casablanca', '20000', NULL, 1, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(6, 6, 'Kenza Bouzidi', '+212 600 000 000', '123 Mohammed V Avenue', NULL, 'Casablanca', '20000', NULL, 1, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(7, 7, 'Omar Khalil', '+212 600 000 000', '123 Mohammed V Avenue', NULL, 'Casablanca', '20000', NULL, 1, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(8, 8, 'Lisa Williams', '+212 600 000 000', '123 Mohammed V Avenue', NULL, 'Casablanca', '20000', NULL, 1, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(9, 9, 'Rachid Mouline', '+212 600 000 000', '123 Mohammed V Avenue', NULL, 'Casablanca', '20000', NULL, 1, '2026-03-03 15:04:54', '2026-03-03 15:04:54'),
(10, 10, 'Sofia Alami', '+212 600 000 000', '123 Mohammed V Avenue', NULL, 'Casablanca', '20000', NULL, 1, '2026-03-03 15:04:54', '2026-03-03 15:04:54');

SET FOREIGN_KEY_CHECKS = 1;
