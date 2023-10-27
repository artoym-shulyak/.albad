<?php
session_start();

unset($_SESSION['error_name']);
unset($_SESSION['error_email']);
unset($_SESSION['error_password']);
unset($_SESSION['success']);

unset($_SESSION['name']);
unset($_SESSION['email']);
unset($_SESSION['password']);

function redirect()
{
	header('Location: /');
	exit();
}

redirect();
