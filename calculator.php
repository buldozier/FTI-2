<?php

$hn = '127.0.0.1';
$un = 'root';
$pw = 'root';
$db = 'programs_ege';

$connection = new mysqli($hn, $un, $pw, $db);

if ($connection->connect_error) die("Fatal Error");

$mysqli = $connection->query("SELECT * FROM `ege`");


