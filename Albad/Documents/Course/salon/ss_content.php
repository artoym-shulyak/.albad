<?php

if (isset($_REQUEST['a'])) {
    $a = $_REQUEST['a'];
} else {
    $a = $_REQUEST;
}

switch ($a) {

case 1:
require "pp_reg.php";
break;

case 2:
require "pp_online.php";
break;

case 3:
require "pp_news.php";
break;

case 4:
require "pp_employees.php";
break;

case 6:
require "pp_online_edit.php";
break;

case 404:
require "pp_error404.php";
break;

default:
require "pp_main.php";
}
?>
