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
	
//$countryName = $_GET['country'];

//$sql = "SELECT * FROM `".$countryName."`";
$dataObj = array();

	$sql = "SELECT * FROM employee WHERE designationId = '1'";
	$query = mysqli_query($conn, $sql);

	while($data = mysqli_fetch_array($query,  MYSQLI_ASSOC)){

		
			array_push($dataObj, $data);
			


		}	


//$result = json_encode($myArray);


$result1 = json_encode($dataObj);
echo $result1;

?>