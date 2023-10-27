<?php include_once 'settings.php'; ?>

<div class="comment">
	<div class="comment__container">
		<h2 class="comment__title">Оставить ваш отзыв:</h2>

		<!-- form  -->
		<form action="<?= BASE_URL . 'single.php?char=' . $_GET['char']; ?>" class="comment__from" method="post">
			<input name="char_id" type="hidden" value="<?= $_GET['char']; ?>">
			<input type="email" name='email' placeholder='Enter your email' value="">
			<div class="error-text"><?= $errorsMessage['email']; ?></div>
			<textarea name="comment" placeholder="Enter your comment"><?= $_SESSION['comment']; ?></textarea>
			<dxiv class="error-text"><?= $errorsMessage['fields']; ?></dxiv>
			<dxiv class="error-text"><?= $errorsMessage['comment']; ?></dxiv>
			<button class="comment__send" type="submit" name="send-comment">Отправить</button>
		</form>
		<!-- form  -->

		<?php if (count($comments)) : ?>
			<div class="comment__sub-title">Комментарии:</div>
			<!-- comments  -->
			<div class="comment__items">
				<?php foreach ($comments as $comment) : ?>
					<div class="comment__item">
						<div class="commetn__email"><?= $comment['email'] ?></div>
						<div class="commetn__comment"><?= $comment['comment'] ?></div>
					</div>
				<?php endforeach; ?>
			</div>
			<!-- comments  -->
		<?php endif ?>


	</div>
</div>