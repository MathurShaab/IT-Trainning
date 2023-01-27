<?php

$servername = "localhost";
$username = "id19000193_admin";
$password = "Aakanshajatin@2101";
$dbname = "id19000193_ittraining";

$conn = new mysqli($servername, $username, $password, $dbname);

if (!$conn) {

    echo "Connection failed!";

}
?>