<?php
session_start();
require_once "_connect.php";

function RndString($len = 20){
	$chars = "abdefhiknrstyzABDEFGHKNQRSTYZ23456789";
	$numChars = strlen($chars);
	$str = "";
	for ($i = 0; $i < $len; $i++) $str .= substr($chars, rand(1, $numChars) - 1, 1);
	return $str;
}

$user_email = $_POST['user_email'];
$user_pass = $_POST['user_pass'];

$res = mysqli_query($connection, "SELECT * FROM `ss_users` WHERE `email` = '$user_email' AND `password` = '$user_pass'");

if (mysqli_num_rows($res) > 0) {

	$user_token = RndString(128);

	$row = mysqli_fetch_assoc($res);
	mysqli_query($connection, "UPDATE `ss_users` SET `token` = '$user_token' WHERE (`id_user` = $row[id_user]);");

	setcookie('ss_token', $user_token, time() + 3600, '/');

	$_SESSION['user_id'] = $row["id_user"];
	$_SESSION['user_type'] = $row["type"];
	$_SESSION['user_name'] = $row["username"];
	$_SESSION['user_phone'] = $row["phone"];
	
}

header('Location: ' . $_SERVER['HTTP_REFERER']);
exit;

?>
