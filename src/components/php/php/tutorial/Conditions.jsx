import { CodeHighlighter , CodeCommand , Result} from "../../../path";

export default function Conditions(props){
    return(
    <>
        <h1 className="heading-style"> PHP Conditions </h1>
        <article className="mt-5">
            <p className="style_divv mt-5">
                في <b>PHP</b>، تُستخدم الشروط لاتخاذ قرارات في الشيفرة البرمجية الخاصة بك استنادًا إلى ما إذا كانت شرط معين صحيحًا أم خاطئًا. وسيلة الأكثر شيوعًا لتنفيذ الشروط هي باستخدام تعليمات الـ if. فيما يلي نظرة عامة أساسية عن شروط <b>PHP</b>
            </p>
            <h2 className="title-h2">1 - if </h2>
            <p className="style_divv">
                تُستخدم تعليمة <b>if</b> لتنفيذ كتلة من الشيفرة إذا كانت الشرط المحددة صحيحة.
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    $condition = true;
    
    if ($condition) {
        // Code to be executed if the condition is true
        echo "Condition is true.";
    } else {
        // Code to be executed if the condition is false
        echo "Condition is false.";
    }
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>Condition is true.</h2>
            </Result>
            <h2 className="title-h2">2 -  elseif </h2>
            <p className="style_divv">
                يمكنك استخدام <b>elseif</b> لإضافة شروط إضافية إلى عملية اتخاذ القرار.
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    $grade = 75;
    
    if ( $grade >= 90 ) {
        echo "<h2>A</h2>";
    }elseif ( $grade >= 80 ) {
        echo "<h2>B</h2>";
    }elseif ( $grade >= 70 ) {
        echo "<h2>C</h2>";
    }else {
        echo "<h2>D</h2>";
    }
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2> C </h2>
            </Result>
            <h2 className="title-h2">3 -  إختزال if </h2>
            <p className="style_divv">
                يوفر عامل التشغيل الثلاثي (? :) طريقة مختصرة لكتابة عبارات <b>if-else</b> بسيطة.
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    $age = 20;

    $result = ($age >= 18) ? "Adult" : "Minor";
    echo "<h2>".$result."</h2>";
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>Adult</h2>
            </Result>
            <h2 className="title-h2">4 -  تداخل الشروط </h2>
            <p className="style_divv">
                يمكن أن يكون لديك عبارات <b>if</b> داخل عبارات <b>if</b>، وهذا ما يسمى عبارات <b>if</b> المتداخلة.
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    $a = 13;

    if ($a > 10) {
        echo "Above 10 <br/><br/>";
        if ($a > 20) {
            echo " and also above 20 ";
        } else {
            echo " but not above 20 ";
        }
    }
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                Above 10<br/><br/>but not above 20
            </Result>
        </article>
    </>
    )
}