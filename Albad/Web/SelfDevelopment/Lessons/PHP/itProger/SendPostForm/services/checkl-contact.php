<?php
session_start();

unset($_SESSION['username']);
unset($_SESSION['email']);
unset($_SESSION['subject']);
unset($_SESSION['message']);

unset($_SESSION['error_name']);
unset($_SESSION['error_email']);
unset($_SESSION['error_subject']);
unset($_SESSION['error_message']);

function redirect()
{
	header('Location: ../pages/contacts.php');
	exit();
}

$user_name = htmlspecialchars(trim($_POST['username']));
$from = htmlspecialchars(trim($_POST['email']));
$subject = htmlspecialchars(trim($_POST['subject']));
$message = htmlspecialchars(trim($_POST['message']));

$_SESSION['username'] = $user_name;
$_SESSION['email'] = $from;
$_SESSION['subject'] = $subject;
$_SESSION['message'] = $message;

if (strlen($user_name) <= 3) {
	$_SESSION['error_name'] = "Enter correct name";
	redirect();
} else if (strlen($from) < 5 || strpos($from, "@") == false) {
	$_SESSION['error_email'] = "Enter correct email";
	redirect();
} else if (strlen($subject) <= 10) {
	$_SESSION['error_subject'] = "Enter correct subject";
	redirect();
} else if (strlen($message) <= 10) {
	$_SESSION['error_message'] = "Enter correct message";
	redirect();
} else {
	$subject = "=?utf-8?B?" . base64_encode($subject) . "?=";
	$headers = "From: $from\r\nReply-to: $from\r\nContent-type:text/plain; charset=utf-8\r\n";
	mail("tem4ik.capper@gmail.com", $subject, $message, $headers);
	$_SESSION['success'] = "You send message success!";
	redirect();
}
