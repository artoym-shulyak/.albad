<?php
session_start();
include_once 'settings.php';
?>

<div class="panel panel-category">
	<div class="panel__container">
		<?php include_once 'ui/side-bar.php'; ?>
		<div class="panel__body">
			<?php if ($added_categody) : ?>
				<form action="category-admin.php" method="post">
					<button type="submit" class="panel__back" name="btn-back-cat">Назад</button>
				</form>
				<h2 class="panel__title">Создание категории</h2>
				<form action="category-admin.php" method="post">
					<input type="text" name='name' placeholder='Enter name' value="<?= $_SESSION['name_category']; ?>">
					<textarea name="description" placeholder="Enter text"><?= $_SESSION['description_category']; ?></textarea>
					<div class="error-text"><?= $errorsMessage['description']; ?></div>
					<div class="error-text"><?= $errorsMessage['fields']; ?></div>
					<div class="panel__items">
						<button type="submit" class="panel__item" name="add-category">Создать</button>
					</div>
				</form>
			<?php elseif ($edit_categody) : ?>
				<form action="category-admin.php" method="post">
					<button type="submit" class="panel__back" name="btn-back-cat">Назад</button>
				</form>
				<h2 class="panel__title">Редактирование категории</h2>
				<form action="category-admin.php" method="post">
					<input type="hidden" name="id" value="<?= $_SESSION['id_category']; ?>">
					<input type="text" name='name' placeholder='Enter name' value="<?= $_SESSION['name_category']; ?>">
					<textarea name="description" placeholder="Enter text"><?= $_SESSION['description_category']; ?></textarea>
					<div class="error-text"><?= $errorsMessage['description']; ?></div>
					<div class="error-text"><?= $errorsMessage['fields']; ?></div>
					<div class="panel__items">
						<button type="submit" class="panel__item" name="edit-category">Сохранить</button>
					</div>
				</form>
			<?php else : ?>
				<h2 class="panel__title">Категории</h2>
				<div class="panel__head">
					<div class="panel__lead">Name</div>
					<div class="panel__lead ">Edit</div>
					<div class="panel__lead ">Delete</div>
				</div>
				<ul class="panel__list">
					<?php foreach ($categories as $category) : ?>
						<li>
							<div class="panel__el"><?= $category['name_category']; ?></div>
							<a href="category-admin.php?edit=<?= $category['id']; ?>" class="panel__el success-txt">edit</a>
							<a href="category-admin.php?id=<?= $category['id']; ?>" class="panel__el error-text">delete</a>
						</li>
					<?php endforeach; ?>
				</ul>
				<form action="category-admin.php" method="post">
					<div class="panel__items">
						<button type="submit" class="panel__item" name="btn-add-cat">Добавить</button>
					</div>
				</form>
			<?php endif; ?>
		</div>
	</div>
</div>