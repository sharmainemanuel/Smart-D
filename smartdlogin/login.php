<!DOCTYPE html>

<?php 
	$con=mysqli_connect("localhost","root","","smart-d");

		if($con)
			echo "";
			else echo "connection error".mysqli_connect_error();
			echo "";


		if(isset($_POST['submit'])){

			$user=$_POST['email'];
			$pass=$_POST['password'];
			$sql=mysqli_query($con, "SELECT * FROM customer WHERE C_email='$user' AND C_password='$pass'");
			$numrows=mysqli_num_rows($sql);
			if($numrows==1)
			echo "login successful <br>";
			while($row=mysqli_fetch_array($sql)){
			echo $row['C_email'];
		}}
else{
echo "invalid username or password";
}

?>


<html>
<head>
	<title>LOGIN</title>
</head>


<body>

<h3>Login</h3>
<form action = "login.php" method = "post">

Email: <input type = "text" placeholder = "Email" name = "email" id = "email" required><br>
Password: <input type = "password" placeholder = "***************" name = "password" id = "password" required><br>
<input type = "submit" name = "submit" value = "Login">
</form>


</body>
</html>