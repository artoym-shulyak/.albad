<?php
session_start();
$title = "Contacts";
require "../layout/header.php"
?>

<h1>Контакты</h1>

<div style="color: green"><?= $_SESSION['success']; ?></div>

<form action="../services/checkl-contact.php" method="post"><br><br>
	<input type="text" name="username" value="<?= $_SESSION['username']; ?>" placeholder="Enter name"><br>
	<div style="color: red"><?= $_SESSION['error_name']; ?></div><br>
	<input type="email" name="email" value="<?= $_SESSION['email']; ?>" placeholder="Enter email">
	<div style="color: red"><?= $_SESSION['error_email']; ?></div><br>
	<input type="text" name="subject" value="<?= $_SESSION['subject']; ?>" placeholder="Theme of message">
	<div style="color: red"><?= $_SESSION['error_subject']; ?></div><br>
	<textarea name="message" placeholder="Enter message"><?= $_SESSION['message']; ?></textarea>
	<div style="color: red"><?= $_SESSION['error_message']; ?></div><br>
	<button type="submit">Send</button>
</form>

<br>

<?php
require "../layout/footer.php"
?>