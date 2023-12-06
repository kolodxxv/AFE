<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: DELETE');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

// initializing api
include_once('../core/initialize.php');

// instantiate user
$user = new Users($db);

$user->id = isset($_GET['id']) ? $_GET['id'] : die();
if($user->delete_one()){
    echo json_encode(
        array('message' => 'User deleted.')
    );
}else{
    echo json_encode(
        array('message' => 'User not deleted.')
    );
}
