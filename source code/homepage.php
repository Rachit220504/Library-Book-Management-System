<?php
session_start();
include("connect.php");

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Homepage</title>
    <link rel="stylesheet" href="homepage.css">
</head>
<body>
    <div style="text-align:center; padding:15%;">
      <p  style="font-size:50px; font-weight:bold;">
       Hello  <?php 
       if(isset($_SESSION['email'])){
        $email=$_SESSION['email'];
        $query=mysqli_query($conn, "SELECT users.* FROM `users` WHERE users.email='$email'");
        while($row=mysqli_fetch_array($query)){
            echo $row['firstName'].' '.$row['lastName'];
        }
       }
       ?>
       :)
      </p>
      <a href="logout.php">Logout</a>
    </div>
    <div class="container" id="booksin" style="display: none;">
        <button class="add button">Add</button>
        <button class="student button">Update</button>
        <button class="delete button">Delete</button>
    </div>
    <div class="container" id="studentsin" style="display: none;">
        <button class="add button">Add</button>
        <button class="student button">Remove</button>
    </div>
    <div class="container" id="issuein" style="display: none;">
        <button class="add button">Add</button>
        <button class="student button">Update</button>
        <button class="delete button">Delete</button>
    </div>
    <div class="container" id="homepage">
        <button class="button" id="books">Books</button>
        <button class="button" id="students">Students</button>
        <button class="button" id="issue/return">Issue/Return</button>
    </div>
    <script src="homepage.js"></script>
</body>
</html>