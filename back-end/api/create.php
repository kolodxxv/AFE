<?php
// headers 
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

// initializing our api
include_once('../core/initialize.php');

// instantiate user
$user = new Users($db);

// get raw posted data
$data = json_decode(file_get_contents("php://input"));

$user->name = $data->name;
$user->surname = $data->surname;
$user->country = $data->country;
$user->city = $data->city;

// create user
if($user->create()){
    echo json_encode(
        array('message' => 'User created.')
    );
    
}else{
    echo json_encode(
        array('message' => 'User not created.')
    );
}

