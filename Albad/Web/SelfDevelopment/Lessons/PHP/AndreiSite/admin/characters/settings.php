<?php
session_start();

include_once 'app/dataBase/request.php';
include_once 'path.config.php';

$categories = getTableOfName('category');
$characters = getTableOfName('characters');
$infoChars = selectFromUsersAndCategory('characters', 'users', 'category');

// Messages are errors
$errorsMessage = [
	'title' => '',
	'fileds' => '',
	'description' => '',
	'upload' => '',
	'status' => '',
];

// -> Add char
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['btn-add-char'])) {
	$added_char = 1;
	$edit_char = 0;
	unset($_SESSION['title_char']);
	unset($_SESSION['description_char']);
	unset($_SESSION['status_char']);
}

// -> Back char
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['btn-back-char'])) {
	$added_char = 0;
	$edit_char = 0;
	unset($_SESSION['title_char']);
	unset($_SESSION['description_char']);
	unset($_SESSION['status_char']);
}

// -> Edit char
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['edit'])) {
	$added_char = 0;
	$edit_char = 1;

	$char = getStringFromTable('characters', ['id' => $_GET['edit']]);

	$_SESSION['id_char'] = $char['id'];
	$_SESSION['title_char'] = $char['title'];
	$_SESSION['description_char'] = $char['description'];
	$_SESSION['status_char'] = $char['status'];
	$_SESSION['category_char'] = $char['id_category_char'];
	$_SESSION['img_char'] = $char['img'];
}

// Added string
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['add-char'])) {

	if (!empty($_FILES['upload']['name'])) {
		$imgName = time() . '_' .  $_FILES['upload']['name']; // name img
		$imgType = $_FILES['upload']['type']; // type img
		$imgTemplate = $_FILES['upload']['tmp_name']; // path upload img
		$destination = ROOT_PATH . '\assets\image\characters\\' . $imgName; // loading upload img in the folder
		$isImgType = strpos($imgType, 'image') === false;

		if (move_uploaded_file($imgTemplate, $destination)) {
			$_POST['upload'] = $imgName;
		} else {
			$errorsMessage['upload'] = 'Ошибка загрузки изображении на сервер';
		}
	} else {
		$errorsMessage['upload'] = 'Ошибка получения изображения';
	}

	$title = $_POST['title'];
	$description = $_POST['description'];
	$img = $_POST['upload'];
	$status = isset($_POST['status']) ? 1 : 0;
	$categoryChar = $_POST['category-char'];

	$_SESSION['title_char'] = $title;
	$_SESSION['description_char'] = $description;
	$_SESSION['status_char'] = $status;

	if ($title === '' || $description === '' || $_FILES['upload']['name'] === '') {
		$errorsMessage['fields'] = 'Заполните все поля!';
		$added_char = 1;
		$edit_char = 0;
	} else if (strlen($title) <= 2) {
		$errorsMessage['title'] = 'Имя должно быть более 2-х символов.';
		$added_char = 1;
		$edit_char = 0;
	} else if (strpos($imgType, 'image') === false) {
		$errorsMessage['upload'] = 'Загружать можно только изображения!1';
		$added_char = 1;
		$edit_char = 0;
	} else if (!isset($status)) {
		$added_char = 1;
		$edit_char = 0;
		$errorsMessage['status'] = 'Вы не выбрали статус публикации!';
	} else {
		$added_char = 0;
		$edit_char = 0;

		addInsert('characters', ['title' => $title, 'description' => $description, 'img' => $img, 'author' => $_SESSION['id'], 'status' => $status, 'id_category_char' => $categoryChar]);

		unset($_SESSION['title_char']);
		unset($_SESSION['description_char']);
		unset($_SESSION['status_char']);
		header('Location: ' . BASE_URL . 'characters-admin.php');
	}
}

// Delete string
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['id'])) {
	deleteString('characters', $_GET['id']);
	header('Location: ' . BASE_URL . 'characters-admin.php');
}

// // Update string
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['edit-char'])) {
	$imgTemplate = null;
	$destination = null;

	if (!empty($_FILES['upload']['name'])) {
		$imgName = time() . '_' .  $_FILES['upload']['name']; // name img
		$imgType = $_FILES['upload']['type']; // type img
		$imgTemplate = $_FILES['upload']['tmp_name']; // path upload img
		$destination = ROOT_PATH . '\assets\image\characters\\' . $imgName; // loading upload img in the folder
		$isImgType = strpos($imgType, 'image') === false;

		if (move_uploaded_file($imgTemplate, $destination)) {
			$_POST['upload'] = $imgName;
		} else {
			$errorsMessage['upload'] = 'Ошибка загрузки изображении на сервер';
		}
	} else {
		$errorsMessage['upload'] = 'Ошибка получения изображения';
	}

	$title = $_POST['title'];
	$description = $_POST['description'];
	$img = $_POST['upload'];
	$status = isset($_POST['status']) ? 1 : 0;
	$categoryChar = $_POST['category-char'];

	$_SESSION['title_char'] = $title;
	$_SESSION['description_char'] = $description;
	$_SESSION['status_char'] = $status;

	if ($title === '' || $description === '' || $_FILES['upload']['name'] === '') {
		$errorsMessage['fields'] = 'Заполните все поля!';
		$added_char = 0;
		$edit_char = 1;
	} else if (strlen($title) <= 2) {
		$errorsMessage['title'] = 'Имя должно быть более 2-х символов.';
		$added_char = 0;
		$edit_char = 1;
	} else if (strpos($imgType, 'image') === false) {
		$errorsMessage['upload'] = 'Загружать можно только изображения!';
		$added_char = 0;
		$edit_char = 1;
	} else if (!isset($status)) {
		$added_char = 0;
		$edit_char = 1;
		$errorsMessage['status'] = 'Вы не выбрали статус публикации!';
	} else {
		$added_char = 0;
		$edit_char = 0;

		updateString('characters', $_SESSION['id_char'], ['title' => $title, 'description' => $description, 'img' => $img, 'author' => $_SESSION['id'], 'status' => $status, 'id_category_char' => $categoryChar]);

		unset($_SESSION['title_char']);
		unset($_SESSION['description_char']);
		unset($_SESSION['status_char']);
		header('Location: ' . BASE_URL . 'characters-admin.php');
	}
}

// Update status string
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['id_status'])) {
	$char = getStringFromTable('characters', ['id' =>  $_GET['id_status']]);
	updateString('characters', $_GET['id_status'], ['status' => $char['status'] == 1 ? 0 : 1]);
	header('Location: ' . BASE_URL . 'characters-admin.php');
}
