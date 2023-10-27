<?php session_start(); ?>
<?php include_once 'app/controllers/users.php' ?>

<!-- HEADER  -->
<?php $title = 'Auth';
include_once('app/layout/header.php'); ?>
<!-- HEADER  -->

<main>

	<!-- FORM  -->
	<section class="form">
		<div class="form__container">
			<h1 class="form__title">Form Autorization</h1>
			<form action="auth.php" class="form__body" method="post">
				<input type="email" name='email' placeholder='Enter your email'>
				<div class="error-text"><?= $error_email; ?></div>
				<input type="password" name='password' placeholder='Enter your password'>
				<div class="error-text"><?= $error_password; ?></div>
				<div class="error-text"><?= $isErrorAuth ?></div>
				<div class="form___btns">
					<button type='submit' name="button-log">Вход</button>
					<a href="<?= BASE_URL . REG; ?>">Регистрация</a>
				</div>
			</form>
		</div>
	</section>
	<!-- FORM  -->

</main>

<!-- FOOTER  -->
<?php include_once('app/layout/footer.php'); ?>
<!-- FOOTER  -->