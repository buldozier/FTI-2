<?php

$hn = '127.0.0.1';
$un = 'root';
$pw = 'root';
$db = 'programs_ege';

$connection = new mysqli($hn, $un, $pw, $db);

$form = $_GET['russ'];

$mysqli = $connection->query("SELECT * FROM `ege`");

echo json_encode($form);
