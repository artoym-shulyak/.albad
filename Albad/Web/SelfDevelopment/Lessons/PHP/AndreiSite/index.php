<!-- HEADER  -->
<?php

$title = 'Home';
include_once('app/layout/header.php');
include_once 'admin/category/settings.php';

$page = isset($_GET['page']) ? $_GET['page'] : 1; // current page
$limitCharactersPage = 3; // limit chars in page
$offset = $limitCharactersPage * ($page - 1); // 
$totalPages = countRow('characters') / $limitCharactersPage; // 10 : 3 = 3... pages

$characters = selectFromCharactesStatusTrue('characters', $limitCharactersPage, $offset);
$charactersTop = selectFromCharactersTop('characters');

?>
<!-- HEADER  -->

<main>

	<!-- NEWS  -->
	<article class="news">
		<div class="news__container">
			<?php foreach ($charactersTop as $idx => $char) : ?>
				<?php if ($idx < 3) : ?>
					<div class="news__elem">
						<div class="news__img">
							<img src="<?= BASE_URL . 'assets/image/characters/' . $char['img']; ?>" alt="<?= $char['title'] ?>">
						</div>
						<a href="#" class="news__link"><?= $char['title'] ?></a>
					</div>
				<?php endif; ?>
			<?php endforeach; ?>
		</div>
	</article>
	<!-- NEWS  -->

	<!-- ABOUT AUTHOR  -->
	<section class="author">
		<div class="author__container">
			<h1 class="author__title">
				Arotym Shulyak
			</h1>
		</div>
	</section>
	<!-- ABOUT AUTHOR  -->

	<!-- PAGINATION  -->
	<div class="person__pagination">
		<ul>
			<?php if ($page > 1) : ?>
				<li><a href="?page=<?= ($page - 1); ?>">Назад</a></li>
				<li><a href="?page=<?= $page - 1 ?>"><?= $page - 1 ?></a></li>
			<?php endif; ?>
			<li><a style="color: red" href="?page=<?= $page ?>"><?= $page ?></a></li>
			<?php if ($page < $totalPages) : ?>
				<li><a href="?page=<?= $page + 1 ?>"><?= $page + 1 ?></a></li>
				<li><a href="?page=<?= ($page + 1) ?>">Вперед</a></li>
			<?php endif; ?>
		</ul>
	</div>
	<!-- PAGINATION  -->

	<!-- PERSON  -->
	<section class="person">
		<div class="person__container">
			<h2 class="person__title">Новости</h2>
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
				</div>
			</div>
		</div>
	</section>
	<!-- PERSON  -->

</main>

<!-- FOOTER  -->
<?php include_once('app/layout/footer.php'); ?>
<!-- FOOTER  -->