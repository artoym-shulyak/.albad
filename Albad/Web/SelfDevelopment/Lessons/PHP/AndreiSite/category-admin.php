<!-- HEADER  -->
<?php $title = 'Home';
include_once('app/layout/header.php');
if (!$_SESSION['id']) {
	echo 'result not: ' .  $_SESSION['id'];
	header('Location:' . BASE_URL . AUTH);
}
?>
<!-- HEADER  -->

<main>
	<?php include_once 'admin/category/index.php' ?>
</main>

<!-- FOOTER  -->
<?php include_once('app/layout/footer.php'); ?>
<!-- FOOTER  -->