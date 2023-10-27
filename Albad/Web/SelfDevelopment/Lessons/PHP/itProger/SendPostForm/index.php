<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Form PHP</title>
	<link rel="stylesheet" href="styles/main.css">
</head>

<body>

	<div class="wrapper">
		<header>
			<div class="container">HEADER</div>
		</header>
		<main>
			<section class="form">
				<div class="container">
					<h1>FORM</h1>

					<?php
					if ($_SESSION['success'] == 'SUCCESS') {
					?>
						<form action="exit.php">
							<div style="color: green">You success send form!</div>
							<button type="submit">Exit</button>
						</form>
					<?php
					} else {
					?>
						<form action="form.php" method="post">
							<label for="name">
								<span>Enter your name.</span>
								<input id="name" type="text" name="name" value="<?= $_SESSION['name']; ?>">
								<div style="color: red"><?= $_SESSION['error_name'] ?></div>
							</label>
							<label for="email">
								<span>Enter your email.</span>
								<input id="email" type="email" name="email" value="<?= $_SESSION['email']; ?>">
								<div style="color: red"><?= $_SESSION['error_email'] ?></div>
							</label>
							<label for="password">
								<span>Enter your password.</span>
								<input id="password" type="password" name="password" value="<?= $_SESSION['password']; ?>">
								<div style="color: red"><?= $_SESSION['error_password'] ?></div>
							</label>
							<button type="submit">Send</button>
						</form>
					<?php } ?>

				</div>
			</section>

		</main>
		<footer>
			<div class="container">FOOTER</div>
		</footer>
	</div>

</body>

</html>