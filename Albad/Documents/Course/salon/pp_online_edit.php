<div class="bounceInRight wow">

<h2>Запись на прием</h2>
<?php

if ($user_id > 0) {

	$delete = (int)$_GET['delete'];
	if ( ($delete > 0) AND ($user_type == 1) ) {
		mysqli_query($connection, "DELETE FROM `ss_online` WHERE (`ss_online`.`id_online` = $delete);");
	}


	$release = (int)$_GET['release'];
	if ($release > 0) {
		mysqli_query($connection, "UPDATE `ss_online` SET `id_user` = 0 WHERE (`ss_online`.`id_online` = $release);");
	}


	$status = (int)$_GET['status'];
	if ( ($status > 0) AND ($user_type == 1) ) {
		$s = (int)$_GET['s'];
		mysqli_query($connection, "UPDATE `ss_online` SET `status` = $s WHERE (`ss_online`.`id_online` = $status);");
	}


	$archive = (int)$_GET['archive'];
	if ( ($archive > 0) AND ($user_type == 1) ) {
		mysqli_query($connection, "UPDATE `ss_online` SET `archive` = 1 WHERE (`ss_online`.`id_online` = $archive);");
	}


	if ( !empty($_GET['archive_view']) ) {
		$archive_view = " AND (`ss_online`.`archive` = " . (int)$_GET['archive_view'] . ") ";
	}

	$archive_view = (int)$_GET['archive_view'];
	$swf = "";
	if ( $archive_view == 1 ) $swf = " AND (`ss_online`.`archive` = 0) "; 
	if ( $archive_view == 2 ) $swf = " AND (`ss_online`.`archive` = 1) "; 



	if ($user_type == 1) {
		$res = mysqli_query($connection, "SELECT * FROM `ss_online`, `ss_employees`, `ss_users` WHERE (`ss_online`.`id_employee` = `ss_employees`.`id_employee`) AND (`ss_online`.`id_user` = `ss_users`.`id_user`) $swf ORDER BY `dt`;");
	}
	else {
		$res = mysqli_query($connection, "SELECT * FROM `ss_online`, `ss_employees`, `ss_users` WHERE (`ss_online`.`id_employee` = `ss_employees`.`id_employee`) AND (`ss_online`.`id_user` = `ss_users`.`id_user`) AND (`ss_online`.`id_user` = $user_id) AND (`ss_online`.`status` = 0) $swf ORDER BY `dt`;");
	}


	if (mysqli_num_rows($res) == 0) {
		echo "<p>Записи отсутствуют</p>";
	}
	else{
		if ($user_type == 1) {
			echo "<a href='/online-edit' >Показать все</a> | <a href='/online-edit?archive_view=1' >Только актуальные</a> | <a href='/online-edit?archive_view=2' >Только архивные</a><br /><br />";
		}

		echo "<table>";
		echo "<thead>";
		echo "<tr>";
		echo "<th>Специалист</th>";
		echo "<th>Дата и время</th>";
		echo "<th>Пользователь</th>";
		echo "<th>Телефон</th>";
		echo "<th>Действие</th>";
		echo "</tr>";
		echo "</thead>";
		echo "<tbody>";
		while ($row = mysqli_fetch_assoc($res)) {
			echo "<tr>";

			$sss = "";
			if ($row[status] == 1) $sss = "true";
			if ($row[status] == 2) $sss = "false";

			$aaa = "";
			if ($row[archive] == 1) $aaa = "archive_true";

			echo "<td class='$sss'>$row[fio]</td>";
			echo "<td>" . date( "d.m.Y H:i", $row[dt] ) . "</td>";
			echo "<td>$row[username]</td>";
			echo "<td>$row[phone]</td>";

			if ($user_type == 1) {
				echo "<td class='$aaa'>";
				echo "<a href='/online-edit?delete=$row[id_online]' >Удалить</a><br /><br />";
				echo "<a href='/online-edit?release=$row[id_online]' >Отменить запись</a><br /><br />";
				
				if ($row[status] == 0){
					echo "<a href='/online-edit?status=$row[id_online]&s=1' >Клиент ПРИШЕЛ</a><br /><br />";
					echo "<a href='/online-edit?status=$row[id_online]&s=2' >Клиент НЕ ПРИШЕЛ</a><br /><br />";
				}

				if ($row[archive] == 0){
					echo "<a href='/online-edit?archive=$row[id_online]' >Переместить в архив</a>";
				}

				echo "</td>";

			}
			else{
				echo "<td class='$aaa'><a href='/online-edit?release=$row[id_online]' >Отменить</a></td>";
			}

			echo "</tr>";
		}
		echo "</tbody>";
		echo "</table>";
	}


if ($user_id == 1) {	
?>

<h2>Добавление</h2>
<div class="column-center">
<form action="/online-add" method="POST">

<select required name="id_employee">

<?php
$res = mysqli_query($connection, "SELECT * FROM `ss_employees`;");
while ($row = mysqli_fetch_assoc($res)) {
	echo "<option value='$row[id_employee]' >$row[fio]</option>";
}
?>

</select>

<input type="text" name="dt" class="datepicker-here" data-timepicker="true" data-time-format="hh:ii" data-position="right top" /><br />
<button type="submit" />Добавить</button>
</form>
</div>

<?php
}

?>
<h2>Личные данные</h2>
<div class="column-center">
<form action="/save-profile" method="POST">
<input type="hidden" name="user_id" value="<?=$user_id; ?>" />
<input type="text" name="user_name" value="<?=$user_name; ?>" />
<input type="text" name="phone" value="<?=$user_phone; ?>" />
<button type="submit" />Сохранить</button>
</form>
</div>
<?php

}
else{
	echo "<img src='images/lock.png' alt='Доступ запрещен' />";
	echo "<p>Просмотр разрешен только после авторизации. Пожалуйста войдите на сайт или <a href='/reg'>зарегистрируйтесь</a>.</p>";
}
?>
</div>
