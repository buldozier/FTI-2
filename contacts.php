<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Физтех</title>
    <link rel="stylesheet" href="css/header.css" />
		<link rel="stylesheet" href="css/contacts.css" />
    <link rel="stylesheet" href="css/footer.css" />
    <!-- <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" /> -->
  </head>
  <body>

<?php
$selected = 'selected_nav';

$header4 = $selected;

require('components/header.php');
require('components/contacts_component.php');
require('components/footer.php');
?>

	</body>
  <script src="js/main.js"></script>
	<script src="js/contacts.js" type="module"></script>

</html>