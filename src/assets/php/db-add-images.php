<?php
// connect and login to FTP server
$ftp_server = "ftp.domicilegroup.co.za";
$ftp_username = "imageRepo@domicilegroup.co.za";
$ftp_userpass = "Mahobala";
$ftp_conn = ftp_connect($ftp_server) or die("Could not connect to $ftp_server");
print_r($_FILES);
$login = ftp_login($ftp_conn, $ftp_username, $ftp_userpass);
ftp_pasv($ftp_conn,true);
$fileName = $_FILES["photos"]["name"];
$filePath = $_FILES["photos"]["tmp_name"];

echo "name " . $fileName;
echo "path " . $filePath;
//ftp_chdir($ftp_conn, "/home/domicile/etc/";
if (ftp_put($ftp_conn, "/".$fileName, $filePath, FTP_BINARY))
{
  echo "Successfully uploaded";
}
else
{
  echo "Error uploading";
}

ftp_close($ftp_conn);

?>
