import { CodeHighlighter , CodeCommand , Result} from "../../../path";

export default function Exceptions(props){
    return(
    <>
        <h1 className="heading-style"> PHP Exceptions </h1>
        <article className="mt-5">
            <p className="style_divv">
                الاستثناءات في <b>PHP</b> توفر وسيلة للتعامل مع الأخطاء أو المواقف الاستثنائية في الشيفرة البرمجية. عند حدوث موقف استثنائي، يتم إلقاء كائن استثناء، وتتمكن من التعامل مع هذه الاستثناءات والتعامل مع الأخطاء بشكل أنيق
            </p>
            <h2 className="title-h2">1 - إلقاء استثناء </h2>
            <p className="style_divv">
                لإلقاء استثناء، يتم استخدام التعليمة <b>throw</b>. يمكنك إلقاء مثيل من أي فئة تمتد من الفئة المدمجة <b>Exception</b> أو أي فئة استثناء مدمجة.
            </p>
            <div className="mital"> متال : </div>
            <ul><li>تقوم الدالة <b>divide</b> بفحص إذا كان المقام يساوي صفر ثم تلقي استثناء مع رسالة إذا كان كذلك.</li></ul>
            <CodeHighlighter  code={`<?php 
    function divide($numerator, $denominator) {
        if ($denominator == 0) {
            throw new Exception("Division by zero is not allowed.");
        }
        return $numerator / $denominator;
    }

    try {
        echo divide(10, 0);
    } catch (Exception $e) {
        echo "<h2 style='color:red'>" . $e->getMessage() . "</h2>"; 
    }
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2 style={{color:"red"}}>Division by zero is not allowed.</h2>
            </Result>

            <h2 className="title-h2">2 - التقاط استثناء </h2>
            <p className="style_divv">
                للتقاط استثناء، يتم استخدام كتلة <bdi><b>try...catch</b></bdi>. يتم مراقبة الشيفرة داخل الكتلة <b>try</b> للكشف عن الاستثناءات، وإذا تم إلقاء أحدها، يتم التقاطه في كتلة <b>catch</b>
                <CodeHighlighter  code={`<?php 
    try {
        // Code that may throw an exception
        echo divide(10, 0);
    } catch (Exception $e) {
        // Code to handle the exception
        echo "Caught exception: " . $e->getMessage();
    }
?>`} language="php" addclassName="mt-3 mb-3" copie={true}/>   
            </p>

            <h2 className="title-h2">3 - كتل متعددة للتقاط الاستثناء </h2>
            <p className="style_divv">
                يمكنك وضع عدة كتل <b>catch</b> للتعامل مع أنواع مختلفة من الاستثناءات.
                <CodeHighlighter  code={`<?php 
    try {
        // Code that may throw an exception
        // ...
    } catch (CustomException $e) {
        // Handle CustomException
    } catch (AnotherException $e) {
        // Handle AnotherException
    } catch (Exception $e) {
        // Catch any other exception
    }
?>`} language="php" addclassName="mt-3 mb-3" copie={true}/>   
            </p>
            
            <h2 className="title-h2"> 4 - كتلة finally</h2>
            <p className="style_divv">
                يمكنك استخدام كتلة <b>finally</b> لتحديد الشيفرة التي يجب تنفيذها بغض النظر عما إذا كان تم إلقاء استثناء أم لا.
                <CodeHighlighter  code={`<?php 
    try {
        // Code that may throw an exception
    } catch (Exception $e) {
        // Handle the exception
    } finally {
        // Code that always runs
    }    
?>`} language="php" addclassName="mt-3 mb-3" copie={true}/> 
            </p>
        </article>
    </>
    )
}