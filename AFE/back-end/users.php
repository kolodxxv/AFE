<?php require "config.php"; ?>


<?php 
    try {
         // create table if non exists
        $sql = "CREATE TABLE IF NOT EXISTS `users` (
        `id` INT AUTO_INCREMENT NOT NULL,
        `name` varchar(255) NOT NULL, 
        `surname` varchar(255) NOT NULL, 
        `country` varchar(255) NOT NULL, 
        `city` varchar(255) NOT NULL, 
        PRIMARY KEY (id) 
        )";

        $conn->exec($sql);
        echo "Table users created sucessfully";
        // TODO: check if table exists;

    } catch(PDOException $e) {
        echo $sql . "<br>" . $e;
        $conn = null;
    }

    class TableRows extends RecursiveIteratorIterator {
        function __construct($it) {
            parent::__construct($it, self::LEAVES_ONLY);
        }
    
        function current() {
            return ' ' . parent::current();
        }
    
        function beginChildren() {
            echo '';
        }
    
        function endChildren() {
            echo "\n";
        }
    }

    try {
        $stmt = $conn->prepare("SELECT id, name, surname, country, city FROM users");
        $stmt->execute();

        // set the resulting array to associative
        $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
        foreach(new TableRows(new RecursiveArrayIterator($stmt->fetchAll())) as $k=>$v) {
            echo $v;
        }

    } catch(PDOException $e) {
        echo "Error: " . $e;
    }
    $conn = null;
   
?>