<?php session_start(); ?>
<!DOCTYPE html>
<!-- HEAD  -->
<?php include_once('app/layout/head.php');
?>
<!-- HEAD  -->

<body>
	<div class="wrapper">
		<header class="header">
			<div class="header__container">
				<a href="<?= BASE_URL; ?>" class="header__logo">ЛОГО</a>
				<nav class="header__menu menu">
					<ul class="menu__list">
						<li><a href="/">Home</a></li>
						<li><a href="<?= BASE_URL . ABOUT; ?>">About us</a></li>
						<li><a href="#">Contacts</a></li>
						<li><a href="#">News</a></li>
					</ul>
				</nav>
				<div class="header__profile">
					<?php if (isset($_SESSION['id'])) : ?>
						<div style="color: #ffc008"><?= $_SESSION['name']; ?></div>
						<?php if ($_SESSION['admin']) : ?>
							<a href="<?= BASE_URL . 'characters-admin.php'; ?>" class="header__admin">Админ панель</a>
						<?php endif; ?>
						<a href="<?= BASE_URL . 'app/log/logout.php'; ?>">Выйти</a>
					<?php else : ?>
						<a href="<?= BASE_URL . AUTH; ?>">Вход</a>
						<a href="<?= BASE_URL . REG; ?>">Регистрация</a>
					<?php endif; ?>
				</div>
			</div>
		</header>