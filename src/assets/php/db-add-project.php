<?php
$servername = "domicilegroup.co.za";
$username = "domicile_admin";
$password = "Mahobala";
$dbname = "domicile_maindb";
$port = 3306;

$conn = new mysqli($servername, $username, $password, $dbname, $port);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$id = $_POST["id"];
$projTitle = $_POST["projTitle"];
$projDesc = $_POST["projDesc"];

$sql = "INSERT INTO project_objects (ID, TITLE, DESCRIPTION) VALUES ('$id', '$projTitle', '$projDesc')";

if ($conn->query($sql) === TRUE) {
  echo "Success";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
