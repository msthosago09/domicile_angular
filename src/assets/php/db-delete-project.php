<?php
$servername = "domicilegroup.co.za";
$username = "domicile_admin";
$password = "Mahobala";
$dbname = "domicile_maindb";
$port = 3306;

$projTitle = $_POST["projTitle"];

$conn = new mysqli($servername, $username, $password, $dbname, $port);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "DELETE FROM project_objects WHERE TITLE = '" . $projTitle ."'";

if ($conn->query($sql) === TRUE) {
  echo "Success";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$ftp_server = "ftp.domicilegroup.co.za";
$ftp_username = "domicile";
$ftp_userpass = "x0k837iRgE";
$ftp_conn = ftp_connect($ftp_server) or die("Could not connect to $ftp_server");
$login = ftp_login($ftp_conn, $ftp_username, $ftp_userpass);

$projId = $_POST["projID"];

$getListSql = "SELECT * FROM project_images WHERE PROJECT_ID = '". $projId."'";
$result = $conn->query($getListSql);
while($row = $result->fetch_assoc()) {
  if (ftp_delete($ftp_conn, "public_html/assets/project_images/" . $row["IMAGE_LINK"])) {

    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }

    $sql = "DELETE FROM project_images WHERE PROJECT_ID = '" . $projId."'";

    if ($conn->query($sql) === TRUE) {
      echo "Success";
    } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
  } else {
  }
}

ftp_close($ftp_conn);
?>

