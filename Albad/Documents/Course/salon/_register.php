<?php

require_once "_connect.php";

$user_name = $_POST['user_name'];
$user_phone = $_POST['phone'];
$user_email = $_POST['user_email'];
$user_pass = $_POST['user_pass'];

if ( preg_match('/^([а-яА-ЯЁёa-zA-Z0-9 ]{8,30}+)$/u', $user_pass) ) {

	mysqli_query($connection, "INSERT INTO `ss_users` VALUES (NULL, '$user_email', '$user_pass', '$user_name', '$user_phone', NULL, 0);");
}

header("Location: index.php");
exit;

?>
