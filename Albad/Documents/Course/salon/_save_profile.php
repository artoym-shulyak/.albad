<?php

require_once "_connect.php";

$user_id = $_POST['user_id'];
$user_name = $_POST['user_name'];
$user_phone = $_POST['phone'];

mysqli_query($connection, "UPDATE `ss_users` SET `username` = '$user_name', `phone` = '$user_phone' WHERE (`id_user` = $user_id);");

header("Location: /");
exit;

?>
