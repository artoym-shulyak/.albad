<div class="bounceInLeft wow ">
<h2>Доступные записи на прием</h2>

<?php

if ($user_id == 0 ) 	{
	echo "<img src='images/lock.png' alt='Доступ запрещен' />";
	echo "<p>Запись на прием возможна только после авторизации. Пожалуйста войдите на сайт или <a  href='page-register.php''>зарегистрируйтесь</a>.</p>";
}
else{
	
	$choice = (int)$_GET['choice'];
	
	if ($choice > 0) {
		mysqli_query($connection, "UPDATE `ss_online` SET `id_user` = $user_id WHERE (`ss_online`.`id_online` = $choice) AND (`ss_online`.`id_user` = 0);");
	}


	$res = mysqli_query($connection, "SELECT * FROM `ss_online`, `ss_employees` WHERE (`ss_online`.`id_employee` = `ss_employees`.`id_employee`) AND (`ss_online`.`id_user` = 0) AND (`ss_online`.`dt` >= " . date(U) . ") ORDER BY `dt`;");
	if (mysqli_num_rows($res) == 0) {
		echo "<p>Записи отсутствуют</p>";
	}
	else{
		echo $user_id;
		echo "<table>";
		echo "<thead>";
		echo "<tr>";
		echo "<th>Специалист</th>";
		echo "<th>Дата и время</th>";
		echo "<th>Действие</th>";
                echo "</tr>";
		echo "</thead>";
		echo "<tbody>";
		while ($row = mysqli_fetch_assoc($res)) {
			echo "<tr>";
			echo "<td>$row[fio]</td>";
			echo "<td>" . date( "d.m.Y H:i", $row["dt"] ) . "</td>";
			echo "<td><a href='/online?choice=$row[id_online]' >Записаться</a></td>";
			echo "</tr>";
		}
		echo "</tbody>";
		echo "</table>";
	}

}
?>


</div>
