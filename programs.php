<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Физтех</title>
    <link rel="stylesheet" href="css/header.css" />
		<link rel="stylesheet" href="css/programs.css" />
    <link rel="stylesheet" href="css/footer.css" />
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
/>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
  </head>
  <body>

<?php
$selected = 'selected__nav';

$header2 = $selected;

require('components/header.php');
require('components/programs_component.php');
require('components/footer.php');
?>

	</body>
	<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
	<script src="js/main.js"></script>
	<script src="js/swiper.js" type="module"></script>
	<script src="js/programs.js" type="module"></script>
	<script src="js/swiper.js" type="module"></script>
	<script src="js/calculator.js" type="module"></script>
</html>
