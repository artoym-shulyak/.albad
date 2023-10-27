<!-- HEADER  -->
<?php

$title = 'Home';
include_once('app/layout/header.php');
include_once 'admin/category/settings.php';

?>
<!-- HEADER  -->

<main>

	<!-- PERSON  -->
	<section class="person">
		<div class="person__container">
			<h2 class="person__title">Найдены персонажи:</h2>
			<div class="person__elems">
				<?php if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['term'])) : ?>
					<?php $characters = selectFromCharactersForTerm('characters', $_POST['term']); ?>
					<?php if (!empty($characters)) : ?>
						<?php foreach ($characters as $char) : ?>
							<div class="person__elem">
								<div class="person__img">
									<img src="<?= BASE_URL . 'assets/image/characters/' . $char['img']; ?>" alt="<?= $char['title'] ?>">
								</div>
								<div class="person__info">
									<h3 class="person__name"><a href="<?= BASE_URL . 'single.php?char=' . $char['id']; ?>"><?= $char['title'] ?></a></h3>
									<p class="person__descr">
										<?php
										if (strlen($char['description']) > 20) {
											echo mb_substr($char['description'], 0, 20, 'UTF-8') . '...';
										} else {
											echo $char['description'];
										}
										?>
									</p>
								</div>
							</div>
						<?php endforeach; ?>
					<?php else : ?>
						<div>Ничего не найдено.</div>
					<?php endif; ?>
				<?php endif; ?>
			</div>
		</div>
	</section>
	<!-- PERSON  -->

</main>

<!-- FOOTER  -->
<?php include_once('app/layout/footer.php'); ?>
<!-- FOOTER  -->