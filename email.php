<?php
	if($_POST){	   
	    $email = $_POST['email'];
	    $message = $_POST['message'];

	    mail("lonely.star4ever@gmail.com", "Question from" .$email, $message);
	}
?>