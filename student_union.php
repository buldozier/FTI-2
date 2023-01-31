<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Физтех</title>
    <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
    <link rel="manifest" href="favicon/site.webmanifest">
    <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#000000">
    <link rel="stylesheet" href="css/header.css" />
		<link rel="stylesheet" href="css/student_union.css" />
    <link rel="stylesheet" href="css/footer.css" />
    <!-- <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" /> -->
  </head>
  <body>

<?php
$selected = 'selected_nav';

$header3 = $selected;

require('components/header.php');
require('components/student_union_component.php');
require('components/footer.php');
?>

	</body>
  <script src="js/main.js"></script>
	<script src="js/events_object.js" type="module"></script>
	<script src="js/student_union.js" type="module"></script>

</html>
