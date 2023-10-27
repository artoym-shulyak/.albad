<?php 
$message = "Message";
$to = "tem4ik.capper@gmail.com";
$from = "artoym.shulyak.frl@gmail.com";
$subject = "Theme message";

$subject = "=?utf-8?B?" . base64_encode($subject) . "?=";
$headers = "From: $from\r\nReply-to: $from\r\nContent-type:text/plain; charset=utf-8\r\n";

mail($to, $subject, $message, $headers);
