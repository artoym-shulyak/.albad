<div class="bounceInRight wow nice">
<?php

$res = mysqli_query($connection, "SELECT * FROM `ss_news` WHERE (`public` = 1) ORDER BY `id_new` DESC;");
while ($row = mysqli_fetch_assoc($res)) {
	echo "<h2 class='up _a-hide'>$row[head]</h2>";
	echo "<div class='up _a-hide'>$row[text]</div>";
}

?>


</div>
