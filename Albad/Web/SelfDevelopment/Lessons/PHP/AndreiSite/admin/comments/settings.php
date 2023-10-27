<?php
session_start();
include_once '../../path.config.php';
include_once 'app/dataBase/request.php';

// Messages are errors
$errorsMessage = [
	'fileds' => '',
	'comment' => '',
	'email' => '',
];

if (isset($_GET['char'])) {
	$comments = getTableOfName('comments', ['char_id' => $_GET['char'], 'status' => 1]);
} else {
	$comments = getTableOfName('comments');
}

// Send comment
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['send-comment'])) {

	$email = trim($_POST['email']);
	$comment = $_POST['comment'];
	$char_id = $_GET['char'];
	$status = 0;

	$_SESSION['comment'] = $comment;
	$_SESSION['email'] = $email;

	if ($comment === '' || $email === '') {
		$errorsMessage['fields'] = 'Не все заполнены поля!';
	} else if ($email === '') {
		$errorsMessage['email'] = 'Введите Ваш email!';
	} else if (strlen($comment) <= 3) {
		$errorsMessage['comment'] = 'Комментарий должен соответствовать не менее 3-х символов.';
	} else {
		$user = getStringFromTable('users');
		if ($user['email'] === $email && $user['admin'] === 1) {
			$status = 1;
		}

		addInsert('comments', ['email' => $email, 'comment' => $comment, 'char_id' => $char_id, 'status' => $status]);

		unset($_SESSION['comment']);
		unset($_SESSION['email']);

		header('Location: ' . BASE_URL . 'single.php?char=' . $char_id);
	}
}

// Delete string
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['id'])) {
	deleteString('comments', $_GET['id']);
	header('Location: ' . BASE_URL . 'comments-admin.php');
}

// Update status string
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['id_status'])) {
	$comm = getStringFromTable('comments', ['id' =>  $_GET['id_status']]);
	updateString('comments', $_GET['id_status'], ['status' => $comm['status'] == 1 ? 0 : 1]);
	header('Location: ' . BASE_URL . 'comments-admin.php');
}

// -> Edit string
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['edit'])) {
	$edit_comment = 1;

	$comm = getStringFromTable('comments', ['id' => $_GET['edit']]);

	$_SESSION['comment'] = $comm['comment'];
	$_SESSION['email'] = $comm['email'];
	$_SESSION['comment_status'] = $comm['status'];
	$_SESSION['id_char_comment'] = $_GET['edit'];
}

// -> Update string
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['edit-comment'])) {
	$comment = $_POST['comment'];
	$status = isset($_POST['status']) ? 1 : 0;

	// chekingTest($_);

	$_SESSION['comment'] = $comment;
	$_SESSION['comment_status'] = $status;

	if ($comment === '') {
		$edit_comment = 1;
		$errorsMessage['fields'] = 'Не все заполнены поля!';
	} else if (strlen($comment) <= 3) {
		$edit_comment = 1;
		$errorsMessage['comment'] = 'Комментарий должен соответствовать не менее 3-х символов.';
	} else {
		updateString('comments', $_SESSION['id_char_comment'], ['comment' => $comment, 'status' => $status]);

		$edit_comment = 0;
		unset($_SESSION['comment']);
		unset($_SESSION['comment_status']);
		header('Location: ' . BASE_URL . 'comments-admin.php');
	}
}
