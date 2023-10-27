<?php
session_start();
include_once 'app/dataBase/request.php';
include_once 'path.config.php';

$error_name = '';
$error_email = '';
$error_confirm = '';
$error_password = '';
$isRegSuccess = '';
$isErrorAuth = '';

// Success Register or Autorization
function successUserAuthReg($user)
{
	$_SESSION['admin'] = $user['admin'];
	$_SESSION['name'] = $user['name'];
	$_SESSION['email'] = $user['email'];
	$_SESSION['id'] = $user['id'];
	$_SESSION['password'] = $user['pass'];

	if ($_SESSION['admin']) {
		header('location: ' . BASE_URL . 'characters-admin.php');
	} else {
		header('location:' . BASE_URL);
	}
}

// Form Register
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['button-reg'])) {
	$name = trim($_POST['name']);
	$email = trim($_POST['email']);
	$pass = trim($_POST['password']);
	$confirm = trim($_POST['confirm-pass']);
	$admin = 0;

	$_SESSION['name'] = $name;
	$_SESSION['email'] = $email;

	if (strlen($name) <= 4) {
		$error_name = 'Name must to be more 4 symbols.';
	} else if ($email == "") {
		$error_email = 'Email is empty.';
	} else if ($pass === '') {
		$error_password = 'Enter password.';
	} else if ($confirm === '') {
		$error_confirm = 'Enter confirm password.';
	} else if ($pass != $confirm || $pass === '') {
		$error_confirm = 'They aren\'t confirm.';
	} else {
		$isMail = getStringFromTable('users', ['email' => $email]);

		if ($isMail['email'] === $email) {
			$error_email = "It's so email is important.";
		} else {
			$isRegSuccess = 'You have successfully registered!';
			$pass = password_hash($pass, PASSWORD_DEFAULT);

			$userDate = [
				'name' => $name,
				'email' => $email,
				'pass' => $pass,
				'admin' => $admin
			];

			$id = addInsert('users', $userDate);
			$user = getStringFromTable('users', ['id' => $id]);

			successUserAuthReg($user);
		}
	}
}

// Form Autorization
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['button-log'])) {
	$email = trim($_POST['email']);
	$pass = trim($_POST['password']);

	if ($email === '' || $pass === '') {
		$isErrorAuth = 'Заполните все поля!';
	} else {
		$user = getStringFromTable('users', ['email' => $email]);
		if ($user['email'] === $email && password_verify($pass, $user['pass'])) {
			successUserAuthReg($user);
		} else {
			echo 'error';
		}
	}
}

// masha@gmail.com
// 1234