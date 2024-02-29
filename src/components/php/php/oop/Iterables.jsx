import { CodeHighlighter , CodeCommand , Result} from "../../../path";

export default function Iterables(props){
    return(
    <>
        <h1 className="heading-style"> PHP Iterables </h1>
        <article className="mt-5">
            <p className="style_divv mt-5">
                في <b>PHP</b> ، الـ <b>Iterable</b> هو نوع بيانات تم إدخاله في <b>PHP 7.1</b> يسمح لدالة أو بنية لغوية بقبول إما مصفوفة أو كائن ينفذ واجهة <b>Traversable</b>. الـ <b>Iterable</b> توفر وسيلة أكثر مرونة للعمل مع هياكل البيانات بطريقة موحدة.
            </p>
            <h2 className="title-h2">1 - الصيغة لمتغيرات الدوال </h2>
            <p className="style_divv">
                عند توقع متغير يجب أن يكون <b>Iterable</b> ، يمكنك تعريفه باستخدام الكلمة المحجوزة <b>iterable</b>.
            </p>
            <div className="mital"> متال 1 : </div>
            <CodeHighlighter  code={`<?php
    function processIterable(iterable $data) {
        foreach ($data as $item) {
            echo "<h2>" . $item . "</h2>";
        }
    }

    $arr = array(1, 2, 3, 4, 5);
    processIterable($arr);
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>1</h2>
                <h2>2</h2>
                <h2>3</h2>
                <h2>4</h2>
                <h2>5</h2>
            </Result>
            <div className="mital"> متال 2 : </div>
            <CodeHighlighter  code={`<?php
    function getIterable():iterable {
        return ["A", "B", "C", "D"];
    }

    $myIterable = getIterable();
    
    foreach( $myIterable as $item ) {
        echo "<h2>" . $item . "</h2>";
    }
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>A</h2>
                <h2>B</h2>
                <h2>C</h2>
                <h2>D</h2>
            </Result>
            <div className="mital"> متال 3 : </div>
            <CodeHighlighter  code={`<?php
    function createH2(iterable $names):iterable {
        $arr = array();
        foreach($names as $name){
            $arr[] = "<h2>" . $name . " El <h2>";
        }
        return $arr;
    }
    
    $names = array("Reda" , "Amal" , "Adil" , "Aya");
    
    $myIterable = createH2($names);
    
    foreach($myIterable as $item){
        echo $item;
    }
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>Reda El</h2>
                <h2>Amal El</h2>
                <h2>Adil El</h2>
                <h2>Aya El</h2>
            </Result>
        </article>
    </>
    )
}