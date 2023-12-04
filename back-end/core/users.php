<?php 
    class Users {
        private $conn;
        private $table = 'users';

        // users props
        public $id;
        public $name;
        public $surname;
        public $country;
        public $city;

        // constructor with db connection
        public function __construct($db) {
            $this->conn = $db;
        }

        public function read() {
            // create query 
            $query = 'SELECT 
                id, 
                name,
                surname, 
                country, 
                city 
                FROM 
                ' .$this->table;

            $stmt = $this->conn->prepare($query);

            $stmt->execute();

            return $stmt;
        }

        public function read_single() {
            $query = 'SELECT
                id,
                name,
                surname,
                country,
                city
                FROM
                ' .$this->table . '
                WHERE id = ? LIMIT 1';

            // prepare statement
            $stmt = $this->conn->prepare($query);
            // binding param
            $stmt->bindParam(1, $this->id);
            // execute the query
            $stmt->execute();
            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            $this->name = $row['name'];
            $this->surname = $row['surname'];
            $this->country = $row['country'];
            $this->city = $row['city'];

        }
    }



    // try {
    //     // check if table exists
    //     $check = "SELECT * FROM users";
    //     $result = $conn->query($check);

    //     if ($result->rowCount() > 0) {
    //         echo "Table found, proceeding \n";
    //     } else {
    //          // create table if non exists
    //         $sql = "CREATE TABLE IF NOT EXISTS `users` (
    //             `id` INT AUTO_INCREMENT NOT NULL,
    //             `name` varchar(255) NOT NULL, 
    //             `surname` varchar(255) NOT NULL, 
    //             `country` varchar(255) NOT NULL, 
    //             `city` varchar(255) NOT NULL, 
    //             PRIMARY KEY (id) 
    //             )";
        
    //             $conn->exec($sql);
    //             echo "Table users created sucessfully";
    //         }
    
    // } catch(PDOException $e) {
    //     echo $sql . "<br>" . $e;
    //     $conn = null;
    // }
        
    // // this class is required in order to print data
    // class TableRows extends RecursiveIteratorIterator {
    //     function __construct($it) {
    //         parent::__construct($it, self::LEAVES_ONLY);
    //     }
    
    //     function current() {
    //         return ' ' . parent::current();
    //     }
    
    //     function beginChildren() {
    //         echo '';
    //     }
    
    //     function endChildren() {
    //         echo "\n";
    //     }
    // }

    // // fetching data from table 
    // try {
    //     $stmt = $conn->prepare("SELECT id, name, surname, country, city FROM users");
    //     $stmt->execute();

    //     // set the resulting array to associative
    //     $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
    //     foreach(new TableRows(new RecursiveArrayIterator($stmt->fetchAll())) as $k=>$v) {
    //         echo $v;
    //     }

    // } catch(PDOException $e) {
    //     echo "Error: " . $e;
    // }
    // $conn = null;
   
?>