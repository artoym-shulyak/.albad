<?php require_once '../_connect.php' ?>

<!doctype html>
<html lang='ru'>

<head>
    <!-- Required meta tags -->
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>
    <title>Новости</title>
</head>

<body>
    <div class="bounceInRight wow">

        <?php

        $res = mysqli_query($connection, "SELECT * FROM `ss_news` WHERE (`public` = 1) ORDER BY `id_new` DESC;");
        while ($row = mysqli_fetch_assoc($res)) {
            echo "<h2>$row[head]</h2>";
            echo $row["text"];
        }

        ?>


    </div>

</body>

</html>