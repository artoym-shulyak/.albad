<?php
session_start();
include_once 'app/dataBase/request.php';
include_once 'path.config.php';

$categories = getTableOfName('category');

// Messages are errors
$errorsMessage = [
	'fileds' => '',
	'description' => '',
];


// -> Add category
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['btn-add-cat'])) {
	$added_categody = 1;
	$edit_categody = 0;
	unset($_SESSION['name_category']);
	unset($_SESSION['description_category']);
}

// -> Back category
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['btn-back-cat'])) {
	$added_categody = 0;
	$edit_categody = 0;
	unset($_SESSION['name_category']);
	unset($_SESSION['description_category']);
}

// -> Edit category
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['edit'])) {
	$added_categody = 0;
	$edit_categody = 1;

	$category = getStringFromTable('category', ['id' => $_GET['edit']]);

	$_SESSION['name_category'] = $category['name'];
	$_SESSION['description_category'] = $category['description'];
	$_SESSION['id_category'] = $category['id'];
}

// Added string
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['add-category'])) {

	$name = $_POST['name'];
	$description = $_POST['description'];

	$_SESSION['name_category'] = $name;
	$_SESSION['description_category'] = $description;

	if ($name === '' || $description === '') {
		$added_categody = 1;
		$edit_categody = 0;
		$errorsMessage['fields'] = 'Заполните все поля!';
	} else if (strlen($description) <= 5) {
		$added_categody = 1;
		$edit_categody = 0;
		$errorsMessage['description'] = 'Описание должно иметь не менее 5 символов';
	} else {
		$added_categody = 0;
		$edit_categody = 0;
		addInsert('category', ['name_category' => $name, 'description' => $description]);

		unset($_SESSION['name_category']);
		unset($_SESSION['description_category']);
		header('Location: ' . BASE_URL . 'category-admin.php');
	}
}

// Delete string
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['id'])) {
	deleteString('category', $_GET['id']);
	header('Location: ' . BASE_URL . 'category-admin.php');
}

// Update string
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['edit-category'])) {
	$name = $_POST['name'];
	$description = $_POST['description'];

	$_SESSION['name_category'] = $name;
	$_SESSION['description_category'] = $description;

	if ($name === '' || $description === '') {
		$errorsMessage['fields'] = 'Заполните все поля!';
		$added_categody = 0;
		$edit_categody = 1;
	} else if (strlen($description) <= 5) {
		$errorsMessage['description'] = 'Описание должно иметь не менее 5 символов';
		$added_categody = 0;
		$edit_categody = 1;
	} else {
		$added_categody = 0;
		$edit_categody = 0;
		updateString('category', $_SESSION['id_category'], ['name_category' => $name, 'description' => $description]);

		unset($_SESSION['name_category']);
		unset($_SESSION['description_category']);
		unset($_SESSION['id_category']);
		header('Location: ' . BASE_URL . 'category-admin.php');
	}
}
