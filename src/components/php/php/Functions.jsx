import { CodeHighlighter , CodeCommand , Result} from "../../path";

export default function Functions(props){
    
    return(
    <>
        <h1 className="heading-style"> PHP Functions </h1>
        <article className="mt-5">
            <p className="style_divv">
                الوظائف في <b>PHP</b> هي مجموعات من الشيفرة القابلة لإعادة الاستخدام التي تقوم بأداء مهمة محددة. <b>PHP</b> لديها مجموعة واسعة من الوظائف المدمجة، ويمكنك أيضًا إنشاء وظائف مخصصة خاصة بك
            </p>
            <h2 className="title-h2">1 - إنشاء و إستدعاء وظيفة </h2>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    function myName() {
        echo "<h2>Reda Eskouni</h2>";
    }

    myName();
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>Reda Eskouni</h2>
            </Result>
            <h2 className="title-h2">2 -  الوظيفة مع Arguments </h2>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    function add($num1, $num2) {
        return "<h2>". $num1 + $num2 ."</h2>";
    }

    echo add(5, 3);
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
               <h2>8</h2>
            </Result>

            <h2 className="title-h2">3 - الوظيفة والإرجاع </h2>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    function familyName($fname, $year) {
        echo "<h2>$fname Refsnes. Born in $year </h2>";
    }

    familyName("Reda Eskouni", "1996");
    familyName("Amal El", "1978");
?>

<hr/>

<?php
    function familyName2($fname, $year) {
        return "<h2>$fname Refsnes. Born in $year </h2>";
    }
    echo familyName("Reda Eskouni", "1996");
    echo familyName("Amal El", "1978");
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>Reda Eskouni Refsnes. Born in 1996</h2>
                <h2>Amal El Refsnes. Born in 1978</h2>
                <hr />
                <h2>Reda Eskouni Refsnes. Born in 1996</h2>
                <h2>Amal El Refsnes. Born in 1978</h2>
            </Result>

            <h2 className="title-h2">4 - Closures </h2>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    $greatName = function($name) {
        echo "<h2 style='color:red'> Hello, $name </h2>";
    };

    $greatName("Reda Eskouni");
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2 style={{color:"red"}}>Hello, Reda Eskouni</h2>
            </Result>
            
        </article>
    </>
    )
}