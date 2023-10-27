<?php session_start(); ?>
<?php include_once 'app/controllers/users.php' ?>

<!-- HEADER  -->
<?php $title = 'Register';
include_once('app/layout/header.php'); ?>
<!-- HEADER  -->

<main>

	<!-- FORM  -->
	<section class="form">
		<div class="form__container">
			<h1 class="form__title">Form Register</h1>
			<form action="register.php" class="form__body" method="post">
				<input type="text" name='name' placeholder='Enter your name' value="<?= $_SESSION['name']; ?>">
				<div class="error-text"><?= $error_name; ?></div>
				<input type="email" name='email' placeholder='Enter your email' value="<?= $_SESSION['email']; ?>">
				<div class="error-text"><?= $error_email; ?></div>
				<input type="password" name='password' placeholder='Enter your password'>
				<div class="error-text"><?= $error_password; ?></div>
				<input type="password" name='confirm-pass' placeholder='Confirm your password'>
				<div class="error-text"><?= $error_confirm; ?></div>
				<div class="form___btns">
					<button type='submit' name="button-reg">Регистрация</button>
					<a href="<?= BASE_URL . 'auth.php'; ?>">Вход</a>
				</div>
			</form>
			<div class="success-text"><?= $isRegSuccess; ?></div>
		</div>
	</section>
	<!-- FORM  -->

</main>

<!-- FOOTER  -->
<?php include_once('app/layout/footer.php'); ?>
<!-- FOOTER  -->