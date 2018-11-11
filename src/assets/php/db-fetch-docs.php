<?php
$servername = "domicilegroup.co.za";
$username = "domicile_admin";
$password = "Mahobala";
$dbname = "domicile_maindb";
$port = 3306;

$conn = new mysqli($servername, $username, $password, $dbname,$port);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM links WHERE UPLOAD_TYPE = 'Document'";
$result = $conn->query($sql);
$counter = 0;
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $resultArray[$counter] = $row;
        $counter++;
    }
    echo json_encode($resultArray);
} else {
    echo "0 results";
}
$conn->close();
?>
