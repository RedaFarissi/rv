import { CodeHighlighter , CodeCommand , Result} from "../../path";

export default function Arrays(props){
    return(
    <>
        <h1 className="heading-style"> PHP Arrays </h1>
        <article className="mt-5">
            <p className="style_divv">
                في <b>PHP</b>، الـ <b>Arrays</b> تُستخدم لتخزين مجموعة من القيم تحت اسم واحد. يمكن أن تحتوي الـ <b>Arrays</b> على أنواع مختلفة من البيانات، مثل الأعداد الصحيحة، والسلاسل النصية، والأصناف الأخرى  
            </p>
            <h2 className="title-h2">1 - إنشاء Array</h2>
            <CodeHighlighter code={`<?php
    // Create an array for colors
    $colors = array("red", "green", "blue");

    // Alternatively, create an array using square brackets []
    $colors = ["red", "green", "blue"];
?>`} language="php" addclassName="mt-3 mb-3" copie={true}/>
            <h2 className="title-h2">2 - الوصول إلى العناصر في الـ Array </h2>
            <CodeHighlighter code={`<?php
    // Create an array for colors
    $colors = array("red", "green", "blue");

    // Accessing the element using the key (index)
    echo $colors[0]; // Prints "red"

?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                red
            </Result>
            <h2 className="title-h2">3 - إضافة عنصر جديد إلى الـ Array </h2>
            <CodeHighlighter code={`<?php
    // Create an array for colors
    $colors = array("red", "green", "blue");

    // Adding a new element to the end
    $colors[] = "yellow";
?>

<pre><?php var_dump($colors); ?></pre>`} language="php"  file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                array(4) {"{"}<br/>
                    &nbsp;&nbsp; [0]={">"}<br/>
                    &nbsp;&nbsp; string(3) "red"<br/>
                    &nbsp;&nbsp; [1]={">"}<br/>
                    &nbsp;&nbsp; string(5) "green"<br/>
                    &nbsp;&nbsp; [2]={">"}<br/>
                    &nbsp;&nbsp; string(4) "blue"<br/>
                    &nbsp;&nbsp; [3]={">"}<br/>
                    &nbsp;&nbsp; string(6) "yellow"<br/>
                {"}"}<br/>
            </Result>
            <h2 className="title-h2">4 -  عد عناصر المصفوفة </h2>
            <CodeHighlighter code={`<?php
    // Create an array for colors
    $colors = array("red", "green", "blue");

    // Adding a new element to the end
    $colors[] = "yellow";
?>

<h2><?php echo "Count Array Items : ".count($colors); ?></h2>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>Count Array Items : 4</h2>
            </Result>
            <h2 className="title-h2">5 - طباعة جميع العناصر في الـ Array</h2>
            <CodeHighlighter code={`<?php
    // Create an array for colors
    $colors = array("red", "green", "blue");
  
    // Adding a new element to the end
    $colors[] = "yellow";
  
    // Printing all elements using foreach
    foreach ($colors as $color) {
      echo "<h2>" . $color . "</h2>";
    }
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>red</h2>
                <h2>green</h2>
                <h2>blue</h2>
                <h2>yellow</h2>
            </Result>
            <h2 className="title-h2">6 - Arrays بمفاتيح </h2>
            <CodeHighlighter code={`<?php
    // Creating an associative array to store person information
    $person = array(
        "name" => "Reda Eskouni",
        "age" => 30,
        "city" => "Sidi Slimane"
    );

    // Accessing elements using keys
    echo "<h2>" . $person["name"] . "</h2>"; 
    $person["age"] =  27;
    echo "<h2>" . $person["age"] . "</h2>"; 
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>Reda Eskouni</h2>
                <h2>27</h2>
            </Result> 
            <h2 className="title-h2">7 - مزيد من العمليات على الـ Arrays </h2>
            <CodeHighlighter code={`<?php
    // Create an array for colors
    $colors = array("red", "green", "blue");
  
    // Adding an element to the end
    array_push($colors, "purple");

    echo "<h2>". $colors[3] ."</h2>";

    // Removing an element from the end
    $lastColor = array_pop($colors);

    echo "<h2>". $lastColor ."</h2>";
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>purple</h2>
                <h2>purple</h2>
                array(3) {"{"}<br/>
                  &nbsp; &nbsp; [0]={">"}<br/>
                  &nbsp; &nbsp; string(3) "red"<br/>
                  &nbsp; &nbsp; [1]={">"}<br/>
                  &nbsp; &nbsp; string(5) "green"<br/>
                  &nbsp; &nbsp; [2]={">"}<br/>
                  &nbsp; &nbsp; string(4) "blue"<br/>
                {"}"}
            </Result>
        </article>
    </>
    )
}