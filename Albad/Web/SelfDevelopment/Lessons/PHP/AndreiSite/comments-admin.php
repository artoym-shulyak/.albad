<?php
session_start();
if (!$_SESSION['id']) {
	echo 'result not: ' .  $_SESSION['id'];
	header('Location:' . BASE_URL . AUTH);
}

?>

<!-- HEADER  -->
<?php $title = 'Home';
include_once('app/layout/header.php');
?>
<!-- HEADER  -->

<main>
	<?php include_once 'admin/comments/index.php' ?>
</main>

<!-- FOOTER  -->
<?php include_once('app/layout/footer.php'); ?>
<!-- FOOTER  -->