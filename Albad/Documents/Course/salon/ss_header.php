<div class='header-left'>
    <img class="logo logo_a _a-hide" src="images/logo.png" />
    <h1 class="down  _a-hide">Салон красоты<br /><span>Glamur</span></h1>
</div>

<div class='header-right show _a-hide'>
    <?php

    if ($user_id > 0) {

        echo "<img src='images/user.png' /> <b>$user_name</b><br /><br />";

        echo "<a href='online-edit.php'>Личный кабинет</a><br />";
        echo "<a href='./_logout.php'>Выйти</a>";
    } else {

    ?>

        <form action="./_login.php" method="POST">
            <input type="text" name="user_email" placeholder="Email" required /><br />
            <input type="password" name="user_pass" placeholder="Пароль" required/>
            <button type="submit" />Войти</button>
        </form>
        <a href="page-register.php">Регистрация</a>

    <?php

    }

    ?>


</div>