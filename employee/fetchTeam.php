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
	

$id = $_GET['managerId'];
$myArray = array();
array_push($myArray, $id);
$dataObj = array("manager"=>1, "cook"=>0, "taster"=>0);

$empId = 1;

do{
	$sql = "SELECT * FROM employee WHERE headId = ".$myArray[0]."";
	$query = mysqli_query($conn, $sql);

	while($data = mysqli_fetch_array($query,  MYSQLI_ASSOC)){

		if($data['designationId']==1){
			array_push($myArray, $data['empId']);
			$dataObj['manager'] += 1;
		}

		if($data['designationId']==2){
			$dataObj['cook'] += 1;
		
		}

		if($data['designationId']==3){
			$dataObj['taster'] += 1;
		}
		

		}
	array_shift($myArray);	
}
while (count($myArray));



$result1 = json_encode($dataObj);
echo $result1;

?>