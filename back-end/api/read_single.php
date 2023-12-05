<?php
// headers 
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// initializing our api
include_once('../core/initialize.php');

// instantiate user
$user = new Users($db);

$user->id = isset($_GET['id']) ? $_GET['id'] : die();
$user->read_single();

$user_arr = array(
    'id' => $user->id,
    'name' => $user->name,
    'surname' => $user->surname,
    'country' => $user->country,
    'city' => $user->city
);

// make a json
print_r(json_encode($user_arr));

