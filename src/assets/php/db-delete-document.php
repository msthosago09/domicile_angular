<?php
$docTitle = $_POST["docTitle"];

$servername = "domicilegroup.co.za";
$username = "domicile_admin";
$password = "Mahobala";
$dbname = "domicile_maindb";
$port = 3306;

$conn = new mysqli($servername, $username, $password, $dbname, $port);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
// Needs to be fixed
$sql = "DELETE FROM links WHERE TITLE = '" . $docTitle . "'";

if ($conn->query($sql) === TRUE) {
  echo "Success";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
