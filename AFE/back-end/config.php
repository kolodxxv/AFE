<?php 

    $host = "localhost";
    $dbname = "afe_db";
    $user = "afe_admin";
    $pass = "";

    // connect by using PDO

    try {
        $conn = new PDO("mysql:host=$host;dbname=$dbname;", $user, $pass);  
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo 'Connected successfully ';

    } catch(PDOException $e) {
        echo 'Connection failed: ' . $e;
        exit();
    }

?>