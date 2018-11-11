<?php
//ftp connections
$ftp_server = "ftp.domicilegroup.co.za";
$ftp_username = "domicile";
$ftp_userpass = "x0k837iRgE";
$ftp_conn = ftp_connect($ftp_server) or die("Could not connect to $ftp_server");

$login = ftp_login($ftp_conn, $ftp_username, $ftp_userpass);
ftp_pasv($ftp_conn, true);
ftp_chdir($ftp_conn, "public_html/assets/documents");
//sql connections
$servername = "domicilegroup.co.za";
$username = "domicile_admin";
$password = "Mahobala";
$dbname = "domicile_maindb";
$port = 3306;

$conn = new mysqli($servername, $username, $password, $dbname, $port);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
//main logic
$counter = 0;
$fileName = $_FILES["documents"]["name"][$counter];
$filePath = $_FILES["documents"]["tmp_name"][$counter];
if (ftp_put($ftp_conn, $fileName, $filePath, FTP_BINARY)) {
  $id = generateRandomString();
  $title = $_POST["Title"];
  $description = $_POST["Description"];
  uploadToSql($conn, $id, $title, $description, $fileName);
  echo "Successfully uploaded";
} else {
  echo "Error uploading";
}

ftp_close($ftp_conn);
$conn->close();

function uploadToSql($connection, $selectedId,$tit, $desc,$name)
{
  $sql = "INSERT INTO links (ID, TITLE, URL,UPLOAD_TYPE, Description) VALUES ('$selectedId', '$tit', '$name','Document','$desc')";

  if ($connection->query($sql) === TRUE) {
    echo "Success";
  } else {
    echo "Error: " . $sql . "<br>" . $connection->error;
  }

}

function generateRandomString()
{
  $characters = '0123456789';
  $charactersLength = strlen($characters);
  $randomString = '';
  for ($i = 0; $i < 6; $i++) {
    $randomString .= $characters[rand(0, $charactersLength - 1)];
  }
  return $randomString;
}

?>
