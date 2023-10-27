<?php
session_start();
include_once 'settings.php';
?>

<div class="panel users">
	<div class="panel__container">
		<?php include_once 'ui/side-bar.php'; ?>
		<div class="panel__body">
			<?php if ($added_user) : ?>
				<form action="users-admin.php" method="post">
					<button type="submit" class="panel__back" name="btn-back-user">Назад</button>
				</form>
				<h2 class="panel__title">Создание пользователя</h2>
				<form action="users-admin.php" method="post">
					<input type="text" name='name' placeholder='Enter name' value="<?= $_SESSION['name_user']; ?>">
					<div class="error-text"><?= $error_name; ?></div>
					<input type="email" name='email' placeholder='Enter email' value="<?= $_SESSION['email_user']; ?>">
					<div class="error-text"><?= $error_email; ?></div>
					<input type="text" name='admin' placeholder="Enter 0 or 1" value="<?= $_SESSION['admin_user']; ?>">
					<div class="error-text"><?= $error_role; ?></div>
					<input type="password" name='password' placeholder="Enter password" value="<?= $_SESSION['password_user']; ?>">
					<div class="error-text"><?= $error_password; ?></div>
					<input type="password" name='confirm-pass' placeholder="Confirm password" value="<?= $_SESSION['confirm_user']; ?>">
					<div class="error-text"><?= $error_confirm; ?></div>
					<div class="panel__items">
						<button type="submit" class="panel__item" name="add-user">Создать</button>
					</div>
				</form>
			<?php elseif ($edit_user) : ?>
				<form action="users-admin.php" method="post">
					<button type="submit" class="panel__back" name="btn-back-user">Назад</button>
				</form>
				<h2 class="panel__title">Редактирование пользователя</h2>
				<form action="users-admin.php" method="post">
					<input type="hidden" name="id" value="<?= $_SESSION['id_user']; ?>">
					<input type="text" name='name' placeholder='Enter name' value="<?= $_SESSION['name_user']; ?>">
					<div class="error-text"><?= $error_name; ?></div>
					<input readonly type="email" name='email' placeholder='Enter email' value="<?= $_SESSION['email_user']; ?>">
					<input type="text" name='admin' placeholder="Enter 0 or 1" value="<?= $_SESSION['admin_user']; ?>">
					<div class="error-text"><?= $error_role; ?></div>
					<input type="password" name='password' placeholder="Enter password" value="<?= $_SESSION['password_user']; ?>">
					<div class="error-text"><?= $error_password; ?></div>
					<input type="password" name='confirm-pass' placeholder="Confirm password" value="<?= $_SESSION['confirm_user']; ?>">
					<div class="error-text"><?= $error_confirm; ?></div>
					<div class="panel__items">
						<button type="submit" class="panel__item" name="edit-user">Сохранить</button>
					</div>
				</form>
			<?php else : ?>
				<h2 class="panel__title">Пользователи</h2>
				<div class="panel__head">
					<div class="panel__lead">ID</div>
					<div class="panel__lead">Name</div>
					<div class="panel__lead">Роль</div>
					<div class="panel__lead">Edit</div>
					<div class="panel__lead">Delete</div>
				</div>
				<ul class="panel__list">
					<?php foreach ($users as $user) : ?>
						<li>
							<div class="panel__el"><?= $user['id']; ?></div>
							<div class="panel__el"><?= $user['name']; ?></div>
							<div class="panel__el"><?= $user['admin'] == 1 ? 'admin' : 'user'; ?></div>
							<a href="users-admin.php?edit=<?= $user['id']; ?>" class="panel__el success-txt">edit</a>
							<a href="users-admin.php?id=<?= $user['id']; ?>" class="panel__el error-text">delete</a>
						</li>
					<?php endforeach; ?>
				</ul>
				<form action="users-admin.php" method="post">
					<div class="panel__items">
						<button type="submit" class="panel__item" name="btn-add-user">Добавить</button>
					</div>
				</form>
			<?php endif; ?>
		</div>
	</div>
</div>