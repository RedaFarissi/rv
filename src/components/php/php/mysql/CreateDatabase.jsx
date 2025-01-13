import { CodeHighlighter , Result} from "../../../path";

export default function CreateDatabase(props){
    return(
    <>
        <h1 className="heading-style"> PHP Create Database </h1>
        <article className="mt-5">
            <h2 className="title-h2 mt-5">1 - إنشاء قاعدة بيانات باستخدام PDO</h2>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    $servername = "localhost";
    $username = "root";
    $password = "**************";

    try {
        $conn = new PDO("mysql:host=$servername", $username, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        $sql = "CREATE DATABASE IF NOT EXISTS my_db_pdo";
        
        // use exec() because no results are returned
        $conn->exec($sql);
        echo "Database created successfully <br/>";
    } catch(PDOException $e) {
        echo $sql . "<br>" . $e->getMessage();
    }

    $conn = null;
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                Database created successfully
            </Result>
            <h2 className="title-h2">2 - إنشاء قاعدة بيانات باستخدام MySQLi</h2>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    $servername = "localhost";
    $username = "root";
    $password = "**************";

    // Create connection
    $conn = mysqli_connect($servername, $username, $password);
    
    // Check connection
    if ( !$conn ) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // Create database
    $sql = "CREATE DATABASE IF NOT EXISTS my_app";
    if (mysqli_query($conn, $sql)) {
        echo "Database created successfully";
    } else {
        echo "Error creating database: " . mysqli_error($conn);
    }

    mysqli_close($conn);
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                Database created successfully
            </Result>
        </article>
    </>
    )
}