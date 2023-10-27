<?php
session_start();
include_once 'settings.php';
?>

<?= $_SESSION['test']; ?>

<div class="panel">
	<div class="panel__container">
		<?php include_once 'ui/side-bar.php'; ?>
		<div class="panel__body">
			<?php if ($added_char) : ?>
				<form action="characters-admin.php" method="post">
					<button type="submit" class="panel__back" name="btn-back-char">Назад</button>
				</form>
				<h2 class="panel__title">Создание персонажа</h2>
				<form action="characters-admin.php" method="post" enctype="multipart/form-data">
					<input type="text" name='title' placeholder='Enter name' value="<?= $_SESSION['title_char']; ?>">
					<div class="error-text"><?= $errorsMessage['title']; ?></div>
					<textarea name="description"><?= $_SESSION['description_char']; ?></textarea>
					<div class="error-text"><?= $errorsMessage['description']; ?></div>
					<input type="file" name='upload' placeholder='Add photo'>
					<div class="error-text"><?= $errorsMessage['upload']; ?></div>
					<select name="category-char">
						<option selected disabled>Выберите категори:</option>
						<?php foreach ($categories as $categoryChar) : ?>
							<option value="<?= $categoryChar['id']; ?>"><?= $categoryChar['name_category']; ?></option>
						<?php endforeach; ?>
					</select>
					<label class="panel__checkbox" for="checkbox">
						<input name="status" id="checkbox" type="checkbox" value="1">
						<span>Публиковать</span>
					</label>
					<div class="error-text"><?= $errorsMessage['status']; ?></div>
					<div class="error-text"><?= $errorsMessage['fields']; ?></div>
					<div class="panel__items">
						<button type="submit" class="panel__item" name="add-char">Создать</button>
					</div>
				</form>
			<?php elseif ($edit_char) : ?>
				<form action="characters-admin.php" method="post">
					<button type="submit" class="panel__back" name="btn-back-char">Назад</button>
				</form>
				<h2 class="panel__title">Редактирование персонажа</h2>
				<form action="characters-admin.php" method="post" enctype="multipart/form-data">
					<input type="hidden" name="id" value="<?= $_SESSION['id_char']; ?>">
					<input type="text" name='title' placeholder='Enter name' value="<?= $_SESSION['title_char']; ?>">
					<div class="error-text"><?= $errorsMessage['title']; ?></div>
					<textarea name="description"><?= $_SESSION['description_char']; ?></textarea>
					<div class="error-text"><?= $errorsMessage['description']; ?></div>
					<input type="file" name='upload' placeholder='Add photo' value="<?= $_SESSION['img_char']; ?>">
					<div class="error-text"><?= $errorsMessage['upload']; ?></div>
					<select name="category-char">
						<option disabled>Выберите категори:</option>
						<?php foreach ($categories as $categoryChar) : ?>
							<?php if ($categoryChar['id'] === $_SESSION['category_char']) : ?>
								<option selected value="<?= $categoryChar['id']; ?>"><?= $categoryChar['name_category']; ?></option>
							<?php else : ?>
								<option value="<?= $categoryChar['id']; ?>"><?= $categoryChar['name_category']; ?></option>
							<?php endif; ?>
						<?php endforeach; ?>
					</select>
					<?php if ($_SESSION['status_char']) : ?>
						<label class="panel__checkbox" for="checkbox">
							<input name="status" id="checkbox" type="checkbox" value="1" checked>
							<span>Статус публикации</span>
						</label>
					<?php else : ?>
						<label class="panel__checkbox" for="checkbox">
							<input name="status" id="checkbox" type="checkbox">
							<span>Статус публикации</span>
						</label>
					<?php endif; ?>
					<div class="error-text"><?= $errorsMessage['status']; ?></div>
					<div class="error-text"><?= $errorsMessage['fields']; ?></div>
					<div class="panel__items">
						<button type="submit" class="panel__item" name="edit-char">Сохранить</button>
					</div>
				</form>
			<?php else : ?>
				<h2 class="panel__title">Редактирование</h2>
				<div class="panel__head">
					<div class="panel__lead">ID</div>
					<div class="panel__lead">Name</div>
					<div class="panel__lead">Author</div>
					<div class="panel__lead">Category</div>
					<div class="panel__lead">Edit</div>
					<div class="panel__lead">Delete</div>
					<div class="panel__lead">Status</div>
				</div>
				<ul class="panel__list">
					<?php foreach ($infoChars as $char) : ?>
						<li>
							<div class="panel__el"><?= $char['id'] ?></div>
							<div class="panel__el"><?= $char['title'] ?></div>
							<div class="panel__el"><?= $char['name']; ?></div>
							<div class="panel__el"><?= $char['name_category']; ?></div>
							<a href="characters-admin.php?edit=<?= $char['id'] ?>" class="panel__el success-txt">edit</a>
							<a href="characters-admin.php?id=<?= $char['id']; ?>" class="panel__el error-text">delete</a>
							<a href="characters-admin.php?id_status=<?= $char['id'] ?>" class="panel__el">
								<?php
								if ($char['status']) {
									echo 'archive';
								} else {
									echo 'publish';
								}
								?>
							</a>
						</li>
					<?php endforeach; ?>
				</ul>
				<form action="characters-admin.php" method="post">
					<div class="panel__items">
						<button type="submit" class="panel__item" name="btn-add-char">Добавить</button>
					</div>
				</form>
			<?php endif; ?>
		</div>
	</div>
</div>