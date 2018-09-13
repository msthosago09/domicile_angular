<?php
// connect and login to FTP server
$ftp_server = "ftp.domicilegroup.co.za";
$ftp_username = "domicile";
$ftp_userpass = "x0k837iRgE";
$ftp_conn = ftp_connect($ftp_server) or die("Could not connect to $ftp_server");

$login = ftp_login($ftp_conn, $ftp_username, $ftp_userpass);
ftp_pasv($ftp_conn,true);
ftp_chdir($ftp_conn, "public_html/project_pictures");

$counter = 0;

while (array_key_exists($counter,$_FILES["photos"]["name"])){
  $fileName = $_FILES["photos"]["name"][$counter];
  $filePath = $_FILES["photos"]["tmp_name"][$counter];
  if (ftp_put($ftp_conn, $fileName, $filePath, FTP_BINARY)){
    echo "Successfully uploaded";
  } else {
    echo "Error uploading";
  }
  $counter++;
}

ftp_close($ftp_conn);

?>
