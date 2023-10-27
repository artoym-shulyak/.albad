<!-- HEADER  -->
<?php

$title = 'Category';
include_once('app/layout/header.php');
include_once 'admin/category/settings.php';

?>
<!-- HEADER  -->

<main>

	<!-- PERSON  -->
	<section class="person">
		<div class="person__container">
			<h2 class="person__title"><?= $category['name'] ?></h2>
			<div class="person__body">
				<div class="person__head">
					<div class="person__sub-title">Поиск:</div>
					<form action="search.php" method="post" class="person__search">
						<input name="term" type="text" placeholder='Find...'>
					</form>
					<div class="person__sub-title">Категории:</div>
					<ul class="person__category">
						<?php foreach ($categories as $category) : ?>
							<li><a href="<?= BASE_URL . 'category.php?category_id=' . $category['id'] ?>"><?= $category['name_category']; ?></a></li>
						<?php endforeach; ?>
					</ul>
				</div>
				<div class="person__elems">
					<?php if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['category_id'])) : ?>
						<?php
						$category = getStringFromTable('category', ['id' => $_GET['category_id']]);
						$characters = getTableOfName('characters', ['id_category_char' => $category['id']]);
						?>
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
							<div>По этой категории нет персонажей.</div>
						<?php endif; ?>
					<?php endif; ?>
				</div>
			</div>
		</div>
	</section>
	<!-- PERSON  -->


</main>

<!-- FOOTER  -->
<?php include_once('app/layout/footer.php'); ?>
<!-- FOOTER  -->