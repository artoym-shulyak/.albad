<?php

session_start();
require_once "_connect.php";

// Checks autoriaztion
$user_id = 0;
if (isset($_COOKIE['ss_token'])) {
	$user_token = $_COOKIE['ss_token'];
} else {
	$user_token = null;
}
$res = mysqli_query($connection, "SELECT * FROM `ss_users` WHERE (`token` = '$user_token') LIMIT 1;");
if (mysqli_num_rows($res) > 0) {
	$row = mysqli_fetch_assoc($res);

	$user_id = $row['id_user'];
	$user_email = $row['email'];
	$user_name = $row['username'];
	$user_phone = $row['phone'];
	$user_type = $row['type'];
}

?>
<!doctype html>
<html>
<head>
<title>Запись на прием</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="description" content="Салон красоты Glamur" />
<meta name="viewport" content="width=device-width, initial-scale=0.30, minimum-scale=0, maximum-scale=5.0, user-scalable=yes" />
<link rel="icon" href="favicon.ico?0" type="image/x-icon" />
<link rel="shortcut icon" href="favicon.ico?0" type='image/x-icon' />
<link rel="stylesheet" type="text/css" href="css/main.css?3" />
<link href="css/datepicker.min.css" rel="stylesheet" type="text/css">
</head>
<body>

<div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
      <div class="cube"></div>

<!-- Header -->
<div class="site-wrapper-container">


<!-- Header -->
<div class="site-wrapper-container">
<div class='light x1'></div>
  <div class='light x2'></div>
  <div class='light x3'></div>
  <div class='light x4'></div>
  <div class='light x5'></div>
  <div class='light x6'></div>
  <div class='light x7'></div>
  <div class='light x8'></div>
  <div class='light x9'></div>
<div class="site-header-container">
<?php require_once 'ss_header.php'; ?>
</div>
<!-- Header -->

<!-- Menu -->
<div class="site-menu-container">
<?php require_once 'ss_menu.php'; ?>
</div>
<!-- Menu -->

<!-- Записи  -->
<div class="site-content-container">
    <div class="bounceInLeft wow">
            <h2>Доступные записи на прием</h2>

            <?php

            if (!isset($_SESSION['user_id']) or $_SESSION['user_id'] == 0) {
                echo "<img src='images/lock.png' alt='Доступ запрещен' />";
                echo "<p>Запись на прием возможна только после авторизации. Пожалуйста войдите на сайт или <a href='../register/'>зарегистрируйтесь</a>.</p>";
            } else {

                $user_id = $_SESSION['user_id'];

                if (isset($_GET['choice'])) {
                    $choice = (int)$_GET['choice'];
                } else {
                    $choice = 0;
                }

                if ($choice > 0) {
                    mysqli_query($connection, "UPDATE `ss_online` SET `id_user` = $user_id WHERE (`ss_online`.`id_online` = $choice) AND (`ss_online`.`id_user` = 0);");
                }

                $res = mysqli_query($connection, "SELECT * FROM `ss_online`, `ss_employees` WHERE (`ss_online`.`id_employee` = `ss_employees`.`id_employee`) AND (`ss_online`.`id_user` = 0) AND (`ss_online`.`dt` >= " . date("U") . ") ORDER BY `dt`;");
                if (mysqli_num_rows($res) == 0) {
                    echo "<p>Записи отсутствуют</p>";
                } else {
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
                        echo "<td style='color: #fff; font-weight: 700;'>$row[fio]</td>";
                        echo "<td style='color: #fff; font-weight: 700;'>" . date("d.m.Y H:i", $row["dt"]) . "</td>";
                        echo "<td ><a href='online.php?choice=$row[id_online]' >Записаться</a></td>";
                        echo "</tr>";
                    }
                    echo "</tbody>";
                    echo "</table>";
                }
            }
            ?>
        </div>
    </div>
</div>
<!-- Записи  -->

<!-- Footer -->
<div class="site-footer-container">
    <?php require_once 'ss_footer.php'; ?>
</div>
<!-- Footer -->

</div>


<script defer src="./scripts/tablePicker.js"></script>
<script type="text/javascript" src="scripts/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="scripts/datepicker.min.js"></script>
<script type="text/javascript" src="scripts/jquery.tablesorter.min.js"></script>
<script type="text/javascript">
	$(document).ready(function(){
		$("table").tablesorter();
	});
</script>
</body>
</html>


