import { CodeHighlighter  , Result} from "../../../path";

export default function CallbackFunctions(props){
    return(
    <>
        <h1 className="heading-style"> PHP Callback Functions </h1>
        <article className="mt-5">
            <p className="style_divv mt-5">
                في <b>PHP</b>، يشير مصطلح "دالة الاستدعاء العكسي" إلى دالة يمكن تمريرها كوسيط إلى دالة أخرى. تُستخدم دوال الاستدعاء العكسي في العديد من السيناريوهات حيث ترغب في تخصيص سلوك دالة ما أو عندما ترغب في تنفيذ وظيفة معينة بطريقة أكثر مرونة.
            </p>
            <h2 className="title-h2">1 - الدوال التي تقبل دوال الاستدعاء </h2>
            <p className="style_divv">
                تأخذ بعض الدوال في <b>PHP</b> دوال الاستدعاء كمعاملات. على سبيل المثال، تأخذ الدوال المتعلقة بالمصفوفات مثل <b>array_map</b>، <b>array_filter</b>، و <b>array_walk</b> دوال الاستدعاء لتحديد السلوك المخصص.
            </p>
            <div className="mital"> متال 1 : </div>
            <CodeHighlighter  code={`<?php 
    $numbers = [1, 2, 3, 4, 5, 6, 7, 8];

    $squaredNumbers = array_map(function($num) {
        return $num * $num;
    },$numbers);
    
    foreach($squaredNumbers as $item){
        echo "<h2>". $item ."</h2>";
    }    
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>1</h2>
                <h2>4</h2>
                <h2>9</h2>
                <h2>16</h2>
                <h2>25</h2>
                <h2>36</h2>
                <h2>49</h2>
                <h2>64</h2>
            </Result>
            <div className="mital"> متال 2 : </div>
            <CodeHighlighter  code={`<?php 
    $numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function filterMode($num) {
        return ($num % 2 == 0);
    }

    $evenNumbers = array_filter($numbers, "filterMode");

    echo "Original Numbers: <b>" . implode(', ', $numbers) . "</b><br/>";
    echo "Even Numbers: <b>" . implode(', ', $evenNumbers) . "</b>";  
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                Original Numbers: <b>1, 2, 3, 4, 5, 6, 7, 8, 9, 10</b> <br/>
                Even Numbers: <b>2, 4, 6, 8, 10</b>
            </Result>
            <h2 className="title-h2">2 - دوال استدعاء محددة من قبل المستخدم </h2>
            <p className="style_divv">
                يمكنك تعريف دوال خاصة بك واستخدامها كدوال استدعاء. يكون ذلك مفيدًا عندما تريد تجميع وظيفة واستخدامها في أماكن مختلفة.
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php 
    $numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    
    function multi_2($value){ 
        return $value * 2;
    }

    $result = array_map('multi_2', $numbers);

    foreach ($result as $item){
        echo "<h2>". $item ."</h2>";
    }
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>2</h2>
                <h2>4</h2>
                <h2>6</h2>
                <h2>8</h2>
                <h2>10</h2>
                <h2>12</h2>
                <h2>14</h2>
                <h2>16</h2>
            </Result>
            <h2 className="title-h2">3 - دالة استدعاء مع أساليب الفئة </h2>
            <p className="style_divv">
                يمكنك استخدام دوال الاستدعاء مع أساليب الفئة عن طريق تمرير مصفوفة تحتوي على كائن واسم الطريقة.
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php 
    $numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    
    class MathOperations {
        public static function square($num) {
            return $num * $num;
        }
    }

    $result = array_map(['MathOperations', 'square'], $numbers);

    print_r($result);
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                Array ( [0] {"=>"} 1 [1] {"=>"} 4 [2] {"=>"} 9 [3] {"=>"} 16 [4] {"=>"} 25 [5] {"=>"} 36 [6] {"=>"} 49 [7] {"=>"} 64 )
            </Result>




        </article>
    </>
    )
}