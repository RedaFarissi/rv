import { CodeHighlighter , CodeCommand , Result} from "../../../path";

export default function Operators(props){
    return(
    <>
        <h1 className="heading-style"> PHP Operators </h1>
        <article className="mt-5">
            <p className="style_divv mt-5">
                <b>PHP</b> تدعم مجموعة من العوامل التي تُستخدم لتنفيذ عمليات على المتغيرات والقيم. 
            </p>
            <h2 className="title-h2">1 - العوامل الحسابية </h2>
            <p className="style_divv">
                <ul>
                    <li><b className="text-success">+ :</b> الجمع</li>
                    <li><b className="text-success">- :</b> الطرح</li>
                    <li><b className="text-success">* :</b> الضرب</li>
                    <li><b className="text-success">/ :</b> القسمة</li>
                    <li><b className="text-success">% :</b> الباقي (الباقي بعد القسمة)</li>
                    <li><b className="text-success">** :</b> التربيع </li>
                </ul>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    $a = 10;
    $b = 5;

    $sum = $a + $b; // 15
    $difference = $a - $b; // 5
    $product = $a * $b; // 50
    $quotient = $a / $b; // 2
    $remainder = $a % $b; // 0
    $power = $a ** $b; // 100000

    echo  "<h2>",$sum."</h2>";
    echo  "<h2>",$difference."</h2>";
    echo  "<h2>",$product."</h2>";
    echo  "<h2>",$quotient."</h2>";
    echo  "<h2>",$remainder."</h2>";
    echo  "<h2>",$power."</h2>";
?>`} language="php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>15</h2> 
                <h2>5</h2> 
                <h2>50</h2> 
                <h2>2</h2> 
                <h2>0</h2> 
                <h2>100000</h2> 
            </Result>
            <h2 className="title-h2">2 -  العوامل التعيين </h2>
            <p className="style_divv">
                <ul>
                    <li><b className="text-success">= :</b> التعيين</li>
                    <li><b className="text-success">+= :</b> التعيين بالجمع</li>
                    <li><b className="text-success">-= :</b> التعيين بالطرح</li>
                    <li><b className="text-success">*= :</b> التعيين بالضرب</li>
                    <li><b className="text-success">/= :</b> التعيين بالقسمة</li>
                    <li><b className="text-success">%= :</b> التعيين بالباقي</li>
                </ul>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    $x = 5;
    
    $x += 3; 
    echo  "<h2>",$x."</h2>";  // Output :  5 + 3 = 8
    $x -= 2; 
    echo  "<h2>",$x."</h2>";  // Output :  8 - 2 = 6
    $x *= 4; 
    echo  "<h2>",$x."</h2>";  // Output :  6 * 4 = 24
    $x /= 3; 
    echo  "<h2>",$x."</h2>";  // Output :   24 / 3 = 8
?>`} language="php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>8</h2>
                <h2>6</h2>
                <h2>24</h2>
                <h2>8</h2>
            </Result>
            <h2 className="title-h2">3 - العوامل المقارنة </h2>
            <p className="style_divv">
                <ul>
                    <li><b className="text-success">== :</b> يساوي </li>
                    <li><b className="text-success">=== :</b> متطابق (قيمة ونوع متطابقين) </li>
                    <li><b className="text-success">!= :</b> أو {"<>"} لا يساوي </li>
                    <li><b className="text-success">!== :</b> غير متطابق </li>
                    <li><b className="text-success">{"<"} :</b> أقل من </li>
                    <li><b className="text-success">{">"} :</b> أكبر من </li>
                    <li><b className="text-success">{"<="} :</b> أقل من أو يساوي </li>
                    <li><b className="text-success">{">="} :</b> أكبر من أو يساوي </li>
                </ul>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    $a = 5;
    $b = "5";
    
    var_dump($a == $b); 
    echo "<br/>";
    var_dump($a === $b); 
?>`} language="php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                bool(true)<br/>bool(false)
            </Result>
            <h2 className="title-h2">4 - العوامل المنطقية </h2>
            <p className="style_divv">
                <ul>
                    <li><b className="text-success">and, && :</b> منطقي (و)</li>
                    <li><b className="text-success">or, || :</b> منطقي (أو)</li>
                    <li><b className="text-success">xor :</b> يُرجع عامل التشغيل <b>XOR</b> (الخاص أو) في <b>PHP</b> القيمة <b>true</b> إذا كان أحد المعاملين صحيحًا، ولكن ليس كلاهما.</li>
                    <li><b className="text-success">! :</b> منطقي <b>NOT</b></li>
                </ul>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    $x = true;
    $y = false; 
?>

<h2><?php var_dump($x xor $y); ?></h2>
<h2><?php var_dump($x && $y);  ?></h2>
<h2><?php var_dump($x || $y); ?></h2>
<h2><?php var_dump(!$x);  ?></h2>`} language="php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>bool(true)</h2>
                <h2>bool(false)</h2>
                <h2>bool(true)</h2>
                <h2>bool(false)</h2>
            </Result>
            <h2 className="title-h2">5 - العوامل التزايد/النقص </h2>
            <p className="style_divv">
                <ul>
                    <li><b className="text-success">++ :</b> تزايد</li>
                    <li><b className="text-success">-- :</b> نقص</li>
                </ul>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
   $a = 5;
   
   $a++;
   echo "<h2>". $a ."</h2>";
   
   $a--;
   echo "<h2>". $a ."</h2>";
?>`} language="php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>6</h2>
                <h2>5</h2>
            </Result>
            <h2 className="title-h2">6 - عامل الاتصال</h2>
            <p className="style_divv"> <ul><li><b className="text-success">. :</b>الاتصال (يستخدم لدمج السلاسل)</li></ul> </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    $f_name = "Reda";
    $l_name = "Eskouni";

    $result = $f_name." ".$l_name; 

    echo $result;
?>`} language="php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                Reda Eskouni
            </Result>
        </article>
    </>
    )
}