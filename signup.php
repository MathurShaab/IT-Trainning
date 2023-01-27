<?php
$servername = "localhost";
$username = "id19000193_admin";
$password = "Aakanshajatin@2101";
$dbname = "id19000193_ittraining";


$conn = new mysqli($servername, $username, $password, $dbname);

$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$password = $_POST['password'];
$city = $_POST['city'];
$state = $_POST['state'];
$qual = $_POST['qual'];
$query= "insert into userinfo(fname,lname,email,password,city,state,qual)
values('$fname','$lname','$email','$password','$city','$state','$qual')";

mysqli_query($conn,$query);

header("Location: login.html");

?>