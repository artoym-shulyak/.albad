<?php
session_start();
include_once 'settings.php';
?>

<div class="panel panel-comments">
	<div class="panel__container">
		<?php include_once 'ui/side-bar.php'; ?>
		<div class="panel__body">
			<?php if ($edit_comment) : ?>
				<a href="<?= BASE_URL . 'comments-admin.php' ?>" class="panel__back">Назад</a>
				<h2 class="panel__title">Редактирование комментрий</h2>
				<form action="comments-admin.php" method="post">
					<input type="email" name='email' readonly placeholder='Enter your email' value="<?= $_SESSION['email']; ?>">
					<textarea name="comment" placeholder="Enter your comment"><?= $_SESSION['comment']; ?></textarea>
					<dxiv class="error-text"><?= $errorsMessage['comment']; ?></dxiv>
					<?php if ($_SESSION['comment_status']) : ?>
						<label class="panel__checkbox" for="checkbox">
							<input name="status" id="checkbox" type="checkbox" value="1" checked>
							<span>Статус публикации комментри</span>
						</label>
					<?php else : ?>
						<label class="panel__checkbox" for="checkbox">
							<input name="status" id="checkbox" type="checkbox">
							<span>Статус публикации комментарий</span>
						</label>
					<?php endif; ?>
					<div class="error-text"><?= $errorsMessage['fields']; ?></div>
					<div class="panel__items">
						<button type="submit" class="panel__item" name="edit-comment">Сохранить</button>
					</div>
				</form>
			<?php else : ?>
				<h2 class="panel__title">Комментарии</h2>
				<div class="panel__head">
					<div class="panel__lead">ID</div>
					<div class="panel__lead">Text</div>
					<div class="panel__lead">Email</div>
					<div class="panel__lead">Edit</div>
					<div class="panel__lead">Delete</div>
					<div class="panel__lead">Status</div>
				</div>
				<ul class="panel__list">
					<?php foreach ($comments as $comment) : ?>
						<li>
							<div class="panel__el"><?= $comment['id'] ?></div>
							<div class="panel__el"><?= $comment['comment'] ?></div>
							<div class="panel__el"><?= $comment['email']; ?></div>
							<a href="comments-admin.php?edit=<?= $comment['id'] ?>" class="panel__el success-txt">edit</a>
							<a href="comments-admin.php?id=<?= $comment['id']; ?>" class="panel__el error-text">delete</a>
							<a href="comments-admin.php?id_status=<?= $comment['id'] ?>" class="panel__el">
								<?php
								if ($comment['status']) {
									echo 'archive';
								} else {
									echo 'publish';
								}
								?>
							</a>
						</li>
					<?php endforeach; ?>
				</ul>
			<?php endif ?>
		</div>
	</div>
</div>