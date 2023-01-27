<?php
$servername = "localhost";
$username = "id19000193_admin";
$password = "Aakanshajatin@2101";
$dbname = "id19000193_ittraining";
$conn = new mysqli($servername, $username, $password, $dbname);

// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['feedback']))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['feedback'];
	
// Create the email and send the message
$to = 'ittraining2101@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Contact Form:  $name";
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nMessage:\n$message";
$headers = "From: jatin.mathur0710@gmail.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
header('Location: index.html');
$query= "insert into feedbacks(name,email,msg) values('$name','$email_address','$message')";

mysqli_query($conn,$query);

return true;

?>