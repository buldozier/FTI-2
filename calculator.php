<?php

$hn = '127.0.0.1';
$un = 'root';
$pw = 'root';
$db = 'programs_ege';

$connection = new mysqli($hn, $un, $pw, $db);

$score_phys = $_GET['egeSumPhys'];
$score_inf = $_GET['egeSumInf'];
$score_chem = $_GET['egeSumChem'];

if($score_phys !== 0) {
	$phys_list = $connection->query("SELECT * FROM `ege` WHERE score < $score_phys");
}

if($score_inf !== 0) {
	$inf_list = $connection->query("SELECT * FROM `ege` WHERE score < $score_inf AND test_inf = 1");
}

if($score_inf !== 0) {
	$chem_list = $connection->query("SELECT * FROM `ege` WHERE score < $score_chem AND test_chem = 1");
}

$data = array();
$data['0'] = $phys_list->fetch_all();
$data['1'] = $inf_list->fetch_all();
$data['2'] = $chem_list->fetch_all();
echo json_encode($data);

// for($i = 0; $i < count($phys_list); $i++) {
// 	for($i = 0; $i < count($inf_list); $i++) {
	
// 	}
// }
