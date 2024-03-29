<?php
// headers 
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: DELETE');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

// initializing our api
include_once('../core/initialize.php');

// instantiate user
$user = new Users($db);

// get raw posted data
$data = json_decode(file_get_contents("php://input"));

$user->id = $data->id;

// update user
if($user->delete()){
    echo json_encode(
        array('message' => 'User deleted.')
    );
    
}else{
    echo json_encode(
        array('message' => 'User not deleted.')
    );
}

