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

        public function create(){
            // create query
            $query = 'INSERT INTO ' . $this->table . ' SET name = :name, surname = :surname, country = :country, city = :city';
            // prepare statement
            $stmt = $this->conn->prepare($query);
            // clean data
            $this->name    = htmlspecialchars(strip_tags($this->name));
            $this->surname = htmlspecialchars(strip_tags($this->surname));
            $this->country = htmlspecialchars(strip_tags($this->country));
            $this->city    = htmlspecialchars(strip_tags($this->city));
            // binding of parameters
            $stmt->bindParam(':name', $this->name);
            $stmt->bindParam(':surname', $this->surname);
            $stmt->bindParam(':country', $this->country);
            $stmt->bindParam(':city', $this->city);
            // execute the query
            if($stmt->execute()){
                return true;
            }
        }

        public function update(){
            // create query
            $query = 'UPDATE ' . $this->table . ' SET name = :name, surname = :surname, country = :country, city = :city
            WHERE id = :id';
            // prepare statement
            $stmt = $this->conn->prepare($query);
            // clean data
            $this->id      = htmlspecialchars(strip_tags($this->id));
            $this->name    = htmlspecialchars(strip_tags($this->name));
            $this->surname = htmlspecialchars(strip_tags($this->surname));
            $this->country = htmlspecialchars(strip_tags($this->country));
            $this->city    = htmlspecialchars(strip_tags($this->city));
            // binding of parameters
            $stmt->bindParam(':id', $this->id);
            $stmt->bindParam(':name', $this->name);
            $stmt->bindParam(':surname', $this->surname);
            $stmt->bindParam(':country', $this->country);
            $stmt->bindParam(':city', $this->city);
            // execute the query
            if($stmt->execute()){
                return true;
            }else{
                printf("Error %s. \n", $stmt->error);
                return false;
            }
        }

        public function delete(){
            // create query
            $query = 'DELETE FROM ' . $this->table . ' WHERE id = :id';
            // prepare statement
            $stmt = $this->conn->prepare($query);
            // clean the data
            $this->id = htmlspecialchars(strip_tags($this->id));
            $stmt->bindParam(':id', $this->id);
            // execute the query
            if($stmt->execute()){
                return true;
            } else {
                printf("Error %s. \n", $stmt->error);
                return false;
            }
        }

    }
?>