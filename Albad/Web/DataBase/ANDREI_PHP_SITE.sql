-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Авг 01 2023 г., 07:33
-- Версия сервера: 8.0.30
-- Версия PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `site`
--

-- --------------------------------------------------------

--
-- Структура таблицы `category`
--

CREATE TABLE `category` (
  `id` int NOT NULL,
  `name_category` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `category`
--

INSERT INTO `category` (`id`, `name_category`, `description`) VALUES
(10, 'Blich', 'Anime isnt very bad'),
(20, 'Naruto', 'Anime is very excellent.'),
(22, 'Attack of Titan', 'My the best adn favorite form all current Anime.'),
(29, 'TOP TOP TOP', 'TOP TOP TOP'),
(30, 'топфывыфвв', 'ыфвфв');

-- --------------------------------------------------------

--
-- Структура таблицы `characters`
--

CREATE TABLE `characters` (
  `id` int NOT NULL,
  `title` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `author` int NOT NULL,
  `img` varchar(255) NOT NULL,
  `status` tinyint NOT NULL,
  `description` text NOT NULL,
  `id_category_char` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `characters`
--

INSERT INTO `characters` (`id`, `title`, `author`, `img`, `status`, `description`, `id_category_char`) VALUES
(19, 'Levi Akerman', 10, '1690660447_photo_1@14-12-2019_13-04-39.jpg', 1, 'The best from all characters.', 22),
(20, 'Ichigo Kurasaku', 10, '1690660474_ava_tt.png', 1, 'I loveyou', 10),
(21, 'Naruto', 10, '1690661370_ава 1.png', 1, 'The beeest', 20),
(22, 'Hinata U', 10, '1690741457_e0f714253c0ceaeeedb2f7565b1bd236.jpg', 0, 'sadsadadas', 20),
(26, 'Mikasa', 18, '1690756220_photo_2023-07-30_03-09-12.jpg', 1, 'Asdas af', 22),
(28, 'Malum', 18, '1690764908_ава 1.png', 1, 'Существуют две основные трактовки понятия «текст»: имманентная (расширенная, философски нагруженная) и репрезентативная (более частная). Имманентный подход подразумевает отношение к тексту как к автономной реальности, нацеленность на выявление его внутренней структуры. Репрезентативный — рассмотрение текста как особой формы представления информации о внешней тексту действительности.', 29),
(29, 'КАДИО', 18, '1690764923_ава 1.png', 0, 'Существуют две основные трактовки понятия «текст»: имманентная (расширенная, философски нагруженная) и репрезентативная (более частная). Имманентный подход подразумевает отношение к тексту как к автономной реальности, нацеленность на выявление его внутренней структуры. Репрезентативный — рассмотрение текста как особой формы представления информации о внешней тексту действительности.', 29),
(30, 'ЗОРО', 18, '1690764932_b0b20cc16333dbb0f92463c530c08204.jpg', 1, 'Существуют две основные трактовки понятия «текст»: имманентная (расширенная, философски нагруженная) и репрезентативная (более частная). Имманентный подход подразумевает отношение к тексту как к автономной реальности, нацеленность на выявление его внутренней структуры. Репрезентативный — рассмотрение текста как особой формы представления информации о внешней тексту действительности.', 29),
(31, 'Artoym', 18, '1690764947_aa.png', 1, 'Существуют две основные трактовки понятия «текст»: имманентная (расширенная, философски нагруженная) и репрезентативная (более частная). Имманентный подход подразумевает отношение к тексту как к автономной реальности, нацеленность на выявление его внутренней структуры. Репрезентативный — рассмотрение текста как особой формы представления информации о внешней тексту действительности.', 29),
(32, 'Nastya', 18, '1690764960_e0f714253c0ceaeeedb2f7565b1bd236.jpg', 1, 'Существуют две основные трактовки понятия «текст»: имманентная (расширенная, философски нагруженная) и репрезентативная (более частная). Имманентный подход подразумевает отношение к тексту как к автономной реальности, нацеленность на выявление его внутренней структуры. Репрезентативный — рассмотрение текста как особой формы представления информации о внешней тексту действительности.', 29);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `admin` tinyint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `pass`, `created`, `admin`) VALUES
(10, 'Artoym', 'tem4ik.capper@gmail.com', '$2y$10$eO5mNHgPzGtJdHE3YP0dk.o0sTZjNaulxrwEsVFezXsPTfkXElFE6', '2023-07-27 22:54:22', 1),
(18, 'Valera', 'valera@gmail.com', '$2y$10$UkH055uNjyqWDOstbXBR/eSC0X2tS5t//0EyQPyhoQbj7TO5mby8m', '2023-07-30 22:29:40', 1);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `characters`
--
ALTER TABLE `characters`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_category_char` (`id_category_char`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `category`
--
ALTER TABLE `category`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT для таблицы `characters`
--
ALTER TABLE `characters`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `characters`
--
ALTER TABLE `characters`
  ADD CONSTRAINT `characters_ibfk_1` FOREIGN KEY (`id_category_char`) REFERENCES `category` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
