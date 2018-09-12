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

$projId = $_POST["projId"];
$commName = $_POST["commName"];
$comment = $_POST["commentText"];
$commentId = $_POST["commentId"];

$sql = "INSERT INTO project_comments (PROJECT_ID, COMMENTOR_NAME, COMMENT, COMMENT_ID) VALUES ('$projId', '$commName', '$comment','$commentId')";

if ($conn->query($sql) === TRUE) {
  echo "Success";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
