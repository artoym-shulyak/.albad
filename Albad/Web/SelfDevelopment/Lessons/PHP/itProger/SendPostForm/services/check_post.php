<?php
$name = $_POST['username'];
$email = $_POST['email'];
$pass = $_POST['password'];

if (trim($name) == "")
	echo "You don't enter name";
else if (strlen(trim($name)) <= 3)
	echo 'Your name too small!';
else if (trim($email) == "")
	echo 'Enter your email!';
else {
	// $_POST['password'] = md5($pass);
	// echo "<h1>Все данные</h1>";
	// foreach ($_POST as $key => $value)
	// 	echo "<p>$value</p>";

	header('Location: ../pages/about.php');
	exit;
}
