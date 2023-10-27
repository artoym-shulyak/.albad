<?php
session_start();

unset($_SESSION['error_name']);
unset($_SESSION['error_email']);
unset($_SESSION['error_password']);

unset($_SESSION['name']);
unset($_SESSION['email']);
unset($_SESSION['password']);

$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];
$subject = 'My Form';

function redirect()
{
	header('Location: /');
	exit();
}

$_SESSION['name'] = $name;
$_SESSION['email'] = $email;
$_SESSION['password'] = $password;

if (strlen($name) <= 5) {
	$_SESSION['error_name'] = 'Enter your name more 5 symbols.';
	redirect();
} else if (strlen($email) <= 2) {
	$_SESSION['error_email'] = 'Enter your email correctly.';
	redirect();
} else if (strlen($password) <= 6) {
	$_SESSION['error_password'] = 'Enter your password more 6 symbols.';
	redirect();
} else {
	$subject = "=?utf-8?B?" . base64_encode($subject) . "?=";
	$headers = "From: $email\r\nReply-to: $email\r\nContent-type:text/plain; charset=utf-8\r\n";
	mail("tem4ik.capper@gmail.com", $subject, $name, $headers);
	$_SESSION['success'] = 'SUCCESS';
	redirect();
}

redirect();
