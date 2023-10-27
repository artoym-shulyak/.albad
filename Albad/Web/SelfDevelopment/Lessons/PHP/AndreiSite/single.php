<!-- HEADER  -->
<?php
session_start();
$title = 'Home';
include_once('app/layout/header.php');
include_once 'admin/category/settings.php';

$char = getStringFromTable('characters', ['id' => $_GET['char']]);
?>
<!-- HEADER  -->

<main>

	<!-- PERSON  -->
	<section class="person">
		<div class="person__container">
			<div class="person__elem">
				<div class="person__img">
					<img src="<?= BASE_URL . 'assets/image/characters/' . $char['img']; ?>" alt="<?= $char['title'] ?>">
				</div>
				<div class="person__info">
					<h3 class="person__name"><a href="<?= BASE_URL . 'single.php?char=' . $char['id']; ?>"><?= $char['title'] ?></a></h3>
					<p class="person__descr">
						<?= $char['description']; ?>
					</p>
				</div>
			</div>
		</div>
	</section>
	<!-- PERSON  -->


	<!-- COMMENTS  -->
	<?php include_once 'admin/comments/comments.component.php'; ?>
	<!-- COMMENTS  -->

</main>

<!-- FOOTER  -->
<?php include_once('app/layout/footer.php'); ?>
<!-- FOOTER  -->