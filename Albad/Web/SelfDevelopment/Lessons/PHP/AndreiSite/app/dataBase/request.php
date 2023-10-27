<?php

require 'connect.php';

// Cheking get request
function chekingError($query)
{
	$errorInfo = $query->errorInfo();
	if ($errorInfo[0] != PDO::ERR_NONE) {
		echo $errorInfo[2];
		exit();
	}
}

// Get for table of name
function getTableOfName($table, $params = [])
{
	global $pdo;
	$sql = "SELECT * FROM $table";

	if (!empty($params)) {
		$count = 0;

		foreach ($params as $key => $value) {
			if (!is_numeric($value)) {
				$value = "'" . $value . "'";
			}

			if ($count === 0) {
				$sql = $sql . " WHERE $key = $value";
			} else {
				$sql = $sql . " AND $key = $value";
			}

			$count++;
		}
	}

	$query = $pdo->prepare($sql);
	$query->execute();

	chekingError($query);

	return $query->fetchAll();
}

// Get one String on from Table
function getStringFromTable($table, $params = [])
{
	global $pdo;
	$sql = "SELECT * FROM $table";

	if (!empty($params)) {
		$count = 0;

		foreach ($params as $key => $value) {
			if (!is_numeric($value)) {
				$value = "'" . $value . "'";
			}

			if ($count === 0) {
				$sql = $sql . " WHERE $key = $value";
			} else {
				$sql = $sql . " AND $key = $value";
			}

			$count++;
		}
	}

	$query = $pdo->prepare($sql);
	$query->execute();

	chekingError($query);

	// print_r($query->fetch());

	return $query->fetch();
}

// Add INSTER
function addInsert($table, $params)
{
	global $pdo;

	$coll = null;
	$meaning = null;
	$count = 0;

	foreach ($params as $key => $value) {
		if ($count === 0) {
			$coll = $coll . $key;
			$meaning =  $meaning . "'" . $value . "'";
		} else {
			$coll = $coll . ", " . $key;
			$meaning =  $meaning . ", " . "'" . $value . "'";
		}

		$count++;
	}

	$sql = "INSERT INTO $table ($coll) VALUES ($meaning)";

	$query = $pdo->prepare($sql);
	$query->execute();

	chekingError($query);

	return $pdo->lastInsertId();
}

// Update string
function updateString($table, $id,  $params)
{
	global $pdo;

	$property = null;
	$count = 0;

	foreach ($params as $key => $value) {
		if ($count === 0) {
			$property = "`" . $key . "` = '" . $value . "'";
		} else {
			$property = $property . ", `" . $key . "` = '" . $value . "'";
		}

		$count++;
	}

	$sql = "UPDATE $table SET $property WHERE `id` = $id";

	$query = $pdo->prepare($sql);
	$query->execute();

	chekingError($query);
}

// Delete string
function deleteString($table, $id)
{
	global $pdo;

	$sql = "DELETE FROM $table WHERE `id` = $id";

	$query = $pdo->prepare($sql);
	$query->execute();

	chekingError($query);
}

// Selecets from `users`, `category`
function selectFromUsersAndCategory($t1, $t2, $t3)
{
	global $pdo;

	$sql = "SELECT
	$t1.id,
	$t1.title,
	$t1.img,
	$t1.status,
	$t1.description,
	$t2.name,
	$t3.name_category
	FROM $t1
	INNER JOIN $t2 ON $t1.author = $t2.id
	INNER JOIN $t3 ON $t1.id_category_char = $t3.id";

	// $sql = "SELECT
	// $t1.id,
	// $t1.title,
	// $t1.img,
	// $t1.status,
	// $t1.description,
	// $t2.name
	// FROM $t1 JOIN $t2 ON $t1.author = $t2.id
	// AND 
	//  $t1 JOIN $t3 ON $t1.id_category_char = $t3.id";

	$query = $pdo->prepare($sql);
	$query->execute();
	chekingError($query);

	return $query->fetchAll();
}

// Selecets from `users`, `category`
function selectFromCharactersTop($table)
{
	global $pdo;

	$sql = "SELECT * FROM $table WHERE $table.status = 1 AND $table.id_category_char = 29";

	$query = $pdo->prepare($sql);
	$query->execute();
	chekingError($query);

	return $query->fetchAll();
}

// Selecets from `characters` for SEARCH
function selectFromCharactersForTerm($table, $term)
{
	$text = strip_tags(stripcslashes(htmlspecialchars($term)));
	global $pdo;

	$sql = "SELECT * FROM $table WHERE $table.status = 1 AND $table.title LIKE '%$text%' OR $table.description LIKE '%$text%'";

	$query = $pdo->prepare($sql);
	$query->execute();
	chekingError($query);

	return $query->fetchAll();
}

function countRow($table)
{
	global $pdo;

	$sql = "SELECT COUNT(*) FROM $table WHERE status = 1";

	$query = $pdo->prepare($sql);
	$query->execute();
	chekingError($query);

	return $query->fetchColumn();
}

// Selecet from 'Characters' with status 1
function selectFromCharactesStatusTrue($table, $limit, $offset)
{
	global $pdo;

	$sql = "SELECT * FROM $table WHERE status = 1 LIMIT $limit OFFSET $offset";

	$query = $pdo->prepare($sql);
	$query->execute();
	chekingError($query);

	return $query->fetchAll();
}

// Cheking get or post params
function chekingTest($info)
{
	echo '<pre>';
	print_r($info);
	echo '</pre>';
	exit();
}


// Cheking get or post params
function chekingTestEcho($info)
{
	echo '<pre>';
	print_r($info);
	echo '</pre>';
}



// deleteString('users', 3);
// getTableOfName('users', '');
// getStringFromTable('users', $params);
// addInsert('users', $params);
