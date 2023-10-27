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

<!-- About us -->
<div class="site-content-container">
<div class="bounceInRight wow">

        <h2>Запись на прием</h2>
        <?php

        $user_id = $_SESSION['user_id'];
        $user_type = $_SESSION['user_type'];
        $user_phone = $_SESSION['user_phone'];
        $user_name = $_SESSION['user_name'];

        if ($user_id > 0) {

            if (isset($_GET['delete'])) {
                $delete = (int)$_GET['delete'];
            } else {
                $delete = 0;
            }

            if (($delete > 0) and ($user_type == 1)) {
                mysqli_query($connection, "DELETE FROM `ss_online` WHERE (`ss_online`.`id_online` = $delete);");
            }

            if (isset($_GET['release'])) {
                $release = (int)$_GET['release'];
            } else {
                $release = 0;
            }
            if ($release > 0) {
                mysqli_query($connection, "UPDATE `ss_online` SET `id_user` = 0 WHERE (`ss_online`.`id_online` = $release);");
            }

            if (isset($_GET['status'])) {
                $status = (int)$_GET['status'];
            } else {
                $status = 0;
            }

            if (($status > 0) and ($user_type == 1)) {
                $s = (int)$_GET['s'];
                mysqli_query($connection, "UPDATE `ss_online` SET `status` = $s WHERE (`ss_online`.`id_online` = $status);");
            }

            if (isset($_GET['archive'])) {
                $archive = (int)$_GET['archive'];
            } else {
                $archive = 0;
            }

            if (($archive > 0) and ($user_type == 1)) {
                mysqli_query($connection, "UPDATE `ss_online` SET `archive` = 1 WHERE (`ss_online`.`id_online` = $archive);");
            }


            if (isset($_GET['archive_view']) and !empty($_GET['archive_view'])) {
                $archive_view = " AND (`ss_online`.`archive` = " . (int)$_GET['archive_view'] . ") ";
            }

            if (isset($_GET['archive_view'])) {
                $archive_view = (int)$_GET['archive_view'];
            } else {
                $archive_view = 0;
            }

            $swf = "";
            if ($archive_view == 1) $swf = " AND (`ss_online`.`archive` = 0) ";
            if ($archive_view == 2) $swf = " AND (`ss_online`.`archive` = 1) ";



            if ($user_type == 1) {
                $res = mysqli_query($connection, "SELECT * FROM `ss_online`, `ss_employees`, `ss_users` WHERE (`ss_online`.`id_employee` = `ss_employees`.`id_employee`) AND (`ss_online`.`id_user` = `ss_users`.`id_user`) $swf ORDER BY `dt`;");
            } else {
                $res = mysqli_query($connection, "SELECT * FROM `ss_online`, `ss_employees`, `ss_users` WHERE (`ss_online`.`id_employee` = `ss_employees`.`id_employee`) AND (`ss_online`.`id_user` = `ss_users`.`id_user`) AND (`ss_online`.`id_user` = $user_id) AND (`ss_online`.`status` = 0) $swf ORDER BY `dt`;");
            }


            if (mysqli_num_rows($res) == 0) {
                echo "<p>Записи отсутствуют</p>";
            } else {
                if ($user_type == 1) {
                    echo "<a style='color: #fff;' href='online-edit.php' >Показать все</a> | <a style='color: #fff;' href='online-edit.php?archive_view=1' >Только актуальные</a> | <a style='color: #fff;' href='online-edit.php?archive_view=2' >Только архивные</a><br /><br />";
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
                    if ($row["status"] == 1) $sss = "true";
                    if ($row["status"] == 2) $sss = "false";

                    $aaa = "";
                    if ($row["archive"] == 1) $aaa = "archive_true";

                    echo "<td style='color: #fff; font-weight: 700;'  class='$sss'>$row[fio]</td>";
                    echo "<td style='color: #fff;' >" . date("d.m.Y H:i", $row["dt"]) . "</td>";
                    echo "<td style='color: #fff;' >$row[username]</td>";
                    echo "<td style='color: #fff;' >$row[phone]</td>";

                    if ($user_type == 1) {
                        echo "<td class='$aaa'>";
                        echo "<a  style='color: #fff;' href='online-edit.php?delete=$row[id_online]' >Удалить</a><br /><br />";
                        echo "<a style='color: #fff;' href='online-edit.php?release=$row[id_online]' >Отменить запись</a><br /><br />";

                        if ($row["status"] == 0) {
                            echo "<a style='color: #fff;' href='online-edit.php?status=$row[id_online]&s=1' >Клиент ПРИШЕЛ</a><br /><br />";
                            echo "<a style='color: #fff;' href='online-edit.php?status=$row[id_online]&s=2' >Клиент НЕ ПРИШЕЛ</a><br /><br />";
                        }

                        if ($row["archive"] == 0) {
                            echo "<a style='color: #fff;' href='online-edit.php?archive=$row[id_online]' >Переместить в архив</a>";
                        }

                        echo "</td>";
                    } else {
                        echo "<td class='$aaa'><a href='online-edit.php?release=$row[id_online]' >Отменить</a></td>";
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
                    <form action="../_online_add.php" method="POST">

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
                <form action="../_save_profile.php" method="POST">
                    <input type="hidden" name="user_id" value="<?= $user_id; ?>" />
                    <input type="text" name="user_name" value="<?= $user_name; ?>" />
                    <input type="text" name="phone" value="<?= $user_phone; ?>" />
                    <button type="submit" />Сохранить</button>
                </form>
            </div>
        <?php

        } else {
            echo "<img src='images/lock.png' alt='Доступ запрещен' />";
            echo "<p>Просмотр разрешен только после авторизации. Пожалуйста войдите на сайт или <a href='../register/'>зарегистрируйтесь</a>.</p>";
        }
        ?>
    </div>
</div>
<!-- About us -->

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


