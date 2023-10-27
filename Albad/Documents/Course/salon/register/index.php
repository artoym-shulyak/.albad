<!doctype html>
<html lang='ru'>

<head>
    <!-- Required meta tags -->
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>
    <title>Регистрация</title>
</head>

<body>
    <div class="wow bounceInDown center">

        <h2>Регистрация</h2>

        <p>
            Заполните форму ниже и нажмите кнопку "Зарегистрироваться".
        </p>

        <div class="column-center">
            <form action="../_register.php" method="POST">
                <input type="text" name="user_name" placeholder="Имя пользователя" /><br />
                <input type="text" name="phone" placeholder="Телефон" /><br />
                <input type="text" name="user_email" placeholder="Email" /><br />
                <input type="password" name="user_pass" placeholder="Пароль от 8 до 30 символов" />
                <button type="submit" />Зарегистрироваться</button>
            </form>
        </div>

    </div>

</body>

</html>