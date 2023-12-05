<?php
// headers 
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

// initializing our api
include_once('../core/initialize.php');

// instantiate user
$user = new Users($db);

// get raw posted data
$data = json_decode(file_get_contents("php://input"));

$user->id = $data->id;
$user->name = $data->name;
$user->surname = $data->surname;
$user->country = $data->country;
$user->city = $data->city;

// update user
if($user->update()){
    echo json_encode(
        array('message' => 'User info updated.')
    );
    
}else{
    echo json_encode(
        array('message' => 'User info not updated.')
    );
}

