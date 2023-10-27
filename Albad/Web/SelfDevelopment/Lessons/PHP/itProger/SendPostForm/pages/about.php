<?php
$title = "About us";
require "../layout/header.php"
?>

<h1>Про нас</h1>

<form action="../services/check_get.php" method="get">
	<input type="text" name="username" placeholder="Enter name" value="Artoym"><br>
	<input type="email" name="email" placeholder="Enter email" value="tem4ik.capper@gmail.com"><br>
	<input type="password" name="password" placeholder="Enter password" value="1123"><br>
	<textarea name="message" placeholder="Enter message">My name is Artoym.</textarea><br>
	<input type="submit" value="Send">
</form>

<br>

<?php
require "../layout/footer.php"
?>