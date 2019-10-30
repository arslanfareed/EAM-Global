<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$host = "localhost";
$userName = "root";
$password = "";
$db = "hotel";

$conn = mysqli_connect($host, $userName, $password, $db);
if($conn->connect_error){
	echo "Failed To Connect";
	}
	

$dataObj = array();
$empName = $_GET['empName'];
$designationId = $_GET['designationId'];
$headId = $_GET['managerId'];

	$sql = "INSERT INTO employee (empName, designationId, headId)
	VALUES ('$empName', '$designationId', '$headId')";


	if (mysqli_query($conn, $sql)) {
		echo "New record created successfully";
	} else {
		echo "Error: " . $sql . "<br>" . mysqli_error($conn);
	}





$result1 = json_encode($dataObj);
echo $result1;

?>