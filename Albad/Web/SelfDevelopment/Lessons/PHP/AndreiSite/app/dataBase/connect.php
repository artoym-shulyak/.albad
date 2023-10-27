<?php

$driver = 'mysql';
$host = 'localhost';
$db_name = 'site';
$db_login = 'root';
$db_pass = '0863629a';
$charset = 'utf8';
$options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC];

try {
	$pdo = new 	PDO("$driver:host=$host;dbname=$db_name;charset=$charset", $db_login, $db_pass, $options);
} catch (PDOException $i) {
	die('Error connection to BD.');
}
