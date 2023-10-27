<?php
session_start();
include_once 'app/dataBase/request.php';
include_once 'path.config.php';

$users = getTableOfName('users');

$error_name = '';
$error_email = '';
$error_confirm = '';
$error_password = '';
$error_role = '';

// -> Add user
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['btn-add-user'])) {
	$added_user = 1;
	$edit_user = 0;
}

// -> Back char
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['btn-back-user'])) {
	$added_user = 0;
	$edit_user = 0;
}

// -> Edit user
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['edit'])) {
	$added_user = 0;
	$edit_user = 1;

	$user = getStringFromTable('users', ['id' => $_GET['edit']]);

	$_SESSION['name_user'] = $user['name'];
	$_SESSION['email_user'] = $user['email'];
	$_SESSION['admin_user'] = $user['admin'];
	$_SESSION['id_user'] = $user['id'];
}

// Added string
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['add-user'])) {
	$name = trim($_POST['name']);
	$email = trim($_POST['email']);
	$pass = trim($_POST['password']);
	$confirm = trim($_POST['confirm-pass']);
	$admin = trim($_POST['admin']);

	$_SESSION['name_user'] = $name;
	$_SESSION['email_user'] = $email;
	$_SESSION['admin_user'] = $admin;
	$_SESSION['password_user'] = $pass;
	$_SESSION['confirm_user'] = $confirm;


	if (strlen($name) <= 4) {
		$error_name = 'Name must to be more 4 symbols.';
		$added_user = 1;
		$edit_user = 0;
	} else if ($email == "") {
		$added_user = 1;
		$edit_user = 0;
		$error_email = 'Email is empty.';
	} else if ($pass === '') {
		$added_user = 1;
		$edit_user = 0;
		$error_password = 'Enter password.';
	} else if ($confirm === '') {
		$added_user = 1;
		$edit_user = 0;
		$error_confirm = 'Enter confirm password.';
	} else if ($admin === '') {
		$added_user = 1;
		$edit_user = 0;
		$error_role = 'Enter role.';
	} else if ($pass != $confirm || $pass === '') {
		$added_user = 1;
		$edit_user = 0;
		$error_confirm = 'They aren\'t confirm.';
	} else {
		$isMail = getStringFromTable('users', ['email' => $email]);

		if ($isMail['email'] === $email) {
			$added_user = 1;
			$edit_user = 0;
			$error_email = "It's so email is important.";
		} else {
			$pass = password_hash($pass, PASSWORD_DEFAULT);
			$added_user = 0;
			$edit_user = 0;
			$id = addInsert('users', ['name' => $name, 'email' => $email, 'pass' => $pass, 'admin' => $admin]);
			unset($_SESSION['name_user']);
			unset($_SESSION['email_user']);
			unset($_SESSION['admin_user']);
			unset($_SESSION['password_user']);
			unset($_SESSION['confirm_user']);
			header('Location: ' . BASE_URL . 'users-admin.php');
		}
	}
}

// Delete string
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['id'])) {
	deleteString('users', $_GET['id']);
	header('Location: ' . BASE_URL . 'users-admin.php');
}

// // Update string
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['edit-user'])) {
	$name = trim($_POST['name']);
	$pass = trim($_POST['password']);
	$confirm = trim($_POST['confirm-pass']);
	$admin = trim($_POST['admin']);

	$_SESSION['name_user'] = $name;
	$_SESSION['admin_user'] = $admin;
	$_SESSION['password_user'] = $pass;
	$_SESSION['confirm_user'] = $confirm;


	if (strlen($name) <= 4) {
		$error_name = 'Name must to be more 4 symbols.';
		$added_user = 0;
		$edit_user = 1;
	} else if ($pass === '') {
		$added_user = 0;
		$edit_user = 1;
		$error_password = 'Enter password.';
	} else if ($confirm === '') {
		$added_user = 0;
		$edit_user = 1;
		$error_confirm = 'Enter confirm password.';
	} else if ($admin === '') {
		$added_user = 0;
		$edit_user = 1;
		$error_role = 'Enter role.';
	} else if ($pass != $confirm || $pass === '') {
		$added_user = 0;
		$edit_user = 1;
		$error_confirm = 'They aren\'t confirm.';
	} else {
		$pass = password_hash($pass, PASSWORD_DEFAULT);
		$added_user = 0;
		$edit_user = 0;

		updateString('users', $_SESSION['id_user'],  ['name' => $name, 'pass' => $pass, 'admin' => $admin]);

		unset($_SESSION['name_user']);
		unset($_SESSION['admin_user']);
		unset($_SESSION['password_user']);
		unset($_SESSION['confirm_user']);
		header('Location: ' . BASE_URL . 'users-admin.php');
	}
}
