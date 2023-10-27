<?php
session_start();
include_once '../../path.config.php';

unset($_SESSION['admin']);
unset($_SESSION['name']);
unset($_SESSION['email']);
unset($_SESSION['id']);
unset($_SESSION['password']);

header('location:' . BASE_URL);
