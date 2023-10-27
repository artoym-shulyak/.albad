<?php

require_once "_connect.php";

$id_employee = $_POST['id_employee'];
$dt = $_POST['dt'];
$dt = strtotime($dt);

mysqli_query($connection, "INSERT INTO `ss_online` VALUES (NULL, '$id_employee', $dt, 0, 0, 0);");

header('Location: ' . $_SERVER['HTTP_REFERER']);
exit;

?>
