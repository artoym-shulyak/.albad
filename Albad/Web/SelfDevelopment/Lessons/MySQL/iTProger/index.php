<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>PHP + MySQL</title>
</head>

<body>
	<h1>PHP + MySQL</h1>

	<?php

	function printResults($result)
	{
		if ($result->num_rows > 0) {
			// print_r($result->fetch_all());
			while ($row = $result->fetch_assoc()) {
				echo "ID: " . $row['id'] . ",  ";
				echo "Name: " . $row['name'] . ",  ";
				echo "Bio: " . $row['bio'] . '<br><br>';
			}
		}

		echo "<hr>";
	}

	$mysql = new mysqli("localhost", "root", "", "php-mysql");
	$mysql->query("SET NAMES 'utf8'");

	$result = $mysql->query("SELECT * FROM `users`");
	printResults($result);


	$result = $mysql->query("SELECT `id`, `name` FROM `users`");
	printResults($result);

	$result = $mysql->query("SELECT `id`, `name` FROM `users` WHERE `id` > 1 ORDER BY `id` DESC");
	printResults($result);

	$result = $mysql->query("SELECT `id` FROM `users` LIMIT 1, 2");
	printResults($result);

	// for ($i = 1; $i <= 5; $i++) {
	// 	$name = "Bob #" . $i;
	// 	$mysql->query("INSERT INTO `users` (`name`, `bio`) VALUES('$name', 'Full text')");
	// }

	// $mysql->query("UPDATE `users` SET `bio` = 'Im fine' WHERE `name` = 'Bob #5'");

	// $mysql->query("DELETE FROM `users` WHERE `name` = 'Bob #5' AND `bio` = 'Im fine'");

	// if ($mysql->connect_error) {
	// 	echo 'Error Number: ' . $mysql->connect_errno . '<br>';
	// 	echo 'Error: ' . $mysql->connect_error;
	// } else {
	// 	echo 'Host info: ' . $mysql->host_info;
	// 	$mysql->query("DROP TABLE `example`");
	// 	$mysql->query("CREATE TABLE `users` (
	// 		id INT(11) NOT NULL,
	// 		name VARCHAR(50) NOT NULL,
	// 		bio TEXT NOT NULL,
	// 		PRIMARY KEY(id)
	// 	)");
	// }

	$mysql->close();
	?>

</body>

</html>