import { CodeHighlighter , CodeCommand , Result} from "../../../path";

export default function CreateTable(props){
    return(
    <>
        <h1 className="heading-style"> PHP Create Table </h1>
        <article className="mt-5">
            <h2 className="title-h2">1 - إنشاء جدول باستخدام PDO </h2>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "my_db_pdo"; 

    // Specify the database name
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        // Set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql = "CREATE TABLE IF NOT EXISTS MyUsers (
            id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            firstname VARCHAR(30) NOT NULL,
            lastname VARCHAR(30) NOT NULL,
            email VARCHAR(50) 
        )";
        // Use exec() because no results are returned
        $conn->exec($sql);
        echo "Table created successfully <br/>";
    } catch (PDOException $e) {
        echo $sql . "<br>" . $e->getMessage();
    }
    $conn = null;
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                Table created successfully
            </Result>
            <h2 className="title-h2">2 -  إنشاء جدول باستخدام MySQLi </h2>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "myDB";

    // Create connection
    $conn = mysqli_connect($servername, $username, $password);

    // Check connection
    if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
    }

    // Create the database
    $createDatabase = "CREATE DATABASE IF NOT EXISTS $dbname";
    if (mysqli_query($conn, $createDatabase)) {
        echo "Database created successfully or already exists<br>";
    } else {
        echo "Error creating database: " . mysqli_error($conn) . "<br>";
    }

    // Select the database
    mysqli_select_db($conn, $dbname);

    // SQL to create table
    $sql = "CREATE TABLE IF NOT EXISTS MyGuests (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        firstname VARCHAR(30) NOT NULL,
        lastname VARCHAR(30) NOT NULL,
        email VARCHAR(50)
    )";

    // Execute the query
    if (mysqli_query($conn, $sql)) {
        echo "Table MyGuests created successfully";
    } else {
        echo "Error creating table: " . mysqli_error($conn);
    }

    // Close the connection
    mysqli_close($conn);
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                Database created successfully or already exists <br/>
                Table MyGuests created successfully
            </Result>
        </article>
    </>
    )
}