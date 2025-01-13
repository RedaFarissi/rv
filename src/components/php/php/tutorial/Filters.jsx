import { CodeHighlighter ,  Result} from "../../../path";

export default function Filters(props){
    return(
    <>
        <h1 className="heading-style"> PHP Filters </h1>
        <article className="mt-5">
            <ul className="my-5">
                <li className="mb-2"><b className="text-success">Validating data :</b> تحديد ما إذا كانت البيانات في النموذج الصحيح.</li>
                <li className="mb-2"><b className="text-success">Sanitizing data :</b> إزالة أي حرف غير قانوني من البيانات.</li>
            </ul>
            <p className="style_divv">    
                المرشحات في <b>PHP</b> هي ميزة توفر وسيلة ملائمة للتحقق من صحة وتنقية البيانات الواردة. غالبًا ما يتم استخدامها لمهام مثل التحقق من إدخال المستخدم، ومعالجة النماذج، وتصفية البيانات. تعتبر المرشحات في <b>PHP</b> جزءًا من امتداد <b>PHP Filter</b> .<br/><br/>
                هناك العديد من وظائف المرشحات المدمجة في <b>PHP</b> التي يمكنك استخدامها لأنواع مختلفة من التحقق من البيانات وتنقيتها. بعض المرشحات المستخدمة بشكل شائع تشمل:<br/><br/>
                توفر <b>PHP</b> وظيفة <bdi><b>filter_var()</b></bdi> لتصفية البيانات. يتم استخدامه لتصفية متغير باستخدام مرشح محدد.<br/>
                بالطبع! إليك بعض الفلاتر الشائعة المستخدمة في <b>PHP</b> مع وصفها:<br/><br/>
                <ul>
                    <li><b className="text-success">FILTER_VALIDATE_EMAIL:</b> يقوم بالتحقق من صحة عنوان البريد الإلكتروني .</li>
                    <li><b className="text-success">FILTER_VALIDATE_URL:</b> يقوم بالتحقق من صحة عنوان <b>URL</b> .</li>
                    <li><b className="text-success">FILTER_VALIDATE_IP:</b> يقوم بالتحقق من صحة عنوان <b>IP</b> .</li>
                    <li><b className="text-success">FILTER_VALIDATE_INT:</b> يقوم بالتحقق من صحة العدد الصحيح.</li>
                    <li><b className="text-success">FILTER_VALIDATE_FLOAT:</b> يقوم بالتحقق من صحة العدد عائم الفاصلة .</li>
                    <li><b className="text-success">FILTER_VALIDATE_BOOLEAN:</b> يقوم بالتحقق من صحة القيمة البولية .</li>
                    <li><b className="text-success">FILTER_VALIDATE_REGEXP:</b> يقوم بالتحقق من صحة القيمة مقابل تعبير منتظم .</li>
                    <li><b className="text-success">FILTER_SANITIZE_STRING:</b> يقوم بإزالة العلامات، واختياريًا يزيل أو يشفر الأحرف الخاصة .</li>
                    <li><b className="text-success">FILTER_SANITIZE_EMAIL:</b> يقوم بإزالة جميع الأحرف غير القانونية من عنوان البريد الإلكتروني .</li>
                    <li><b className="text-success">FILTER_SANITIZE_URL:</b> يقوم بإزالة جميع الأحرف غير القانونية من عنوان <b>URL</b>.</li>
                    <li><b className="text-success">FILTER_SANITIZE_NUMBER_INT:</b> يقوم بإزالة جميع الأحرف باستثناء الأرقام وعلامات <kbd>+</kbd> و <kbd>-</kbd>.</li>
                    <li><b className="text-success">FILTER_SANITIZE_NUMBER_FLOAT:</b> يقوم بإزالة جميع الأحرف باستثناء الأرقام و <kbd>+-</kbd> واختياريًا e E .</li>
                    <li><b className="text-success">FILTER_SANITIZE_SPECIAL_CHARS:</b> يقوم بتحويل الأحرف الخاصة إلى كود <b>HTML</b> .</li>
                    <li><b className="text-success">FILTER_SANITIZE_FULL_SPECIAL_CHARS:</b> يقوم بتحويل الأحرف الخاصة إلى كود <b>HTML</b> بما في ذلك علامات الاقتباس .</li>
                </ul>
            </p>
            <h2 className="title-h2">1 - FILTER VALIDATE </h2>
            <div className="mital"> متال 1 : </div>
            <CodeHighlighter  code={`<?php 
    $email = "reda@example.com";
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Valid email address";
    } else {
        echo "Invalid email address";
    }
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                Valid email address
            </Result>
            <div className="mital"> متال 2 : </div>
            <CodeHighlighter  code={`<?php 
    $url = "https://www.example.com";
    if( filter_var($url, FILTER_VALIDATE_URL) ){
        echo "Valid URL";
    } else {
        echo "Invalid URL";
    }
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                Valid URL
            </Result>
            <div className="mital"> متال 3 : </div>
            <CodeHighlighter  code={`<?php 
    $ip = "192.168.1.1";
    if (filter_var($ip, FILTER_VALIDATE_IP)) {
        echo "Valid IP address";
    } else {
        echo "Invalid IP address";
    }
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                Valid IP address
            </Result>
            <div className="mital"> متال 4 : </div>
            <CodeHighlighter  code={`<?php 
    $number = "100";
    if (filter_var($number, FILTER_VALIDATE_INT)) {
        echo "Valid integer";
    } else {
        echo "Invalid integer";
    }
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                Valid integer
            </Result>
            <div className="mital"> متال 5 : </div>
            <CodeHighlighter  code={`<?php 
    $floatNumber = "3.14";
    if( filter_var($floatNumber, FILTER_VALIDATE_FLOAT) ){
        echo "Valid floating-point number";
    } else {
        echo "Invalid floating-point number";
    }
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                Valid floating-point number
            </Result>
            <div className="mital"> متال 6 : </div>
            <CodeHighlighter  code={`<?php 
    $boolValue = "true";
    if (filter_var($boolValue, FILTER_VALIDATE_BOOLEAN)) {
        echo "Valid boolean value";
    } else {
        echo "Invalid boolean value";
    }
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                Valid boolean value
            </Result>
            <div className="mital"> متال 7 : </div>
            <CodeHighlighter  code={`<?php 
    $value = "abc123";
    $pattern = "/^[a-zA-Z0-9]/";
    if (preg_match($pattern, $value)) {
        echo "Valid value";
    } else {
        echo "Invalid value";
    }    
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                Valid value
            </Result>
            <br/>

            <h2 className="title-h2">2 - FILTER SANITIZE </h2>
            <div className="mital"> متال 1 : </div>
            <CodeHighlighter  code={`<?php 
    $htmlString = "<h2>Hello, <b>world!</b></h2>";
    $sanitizedString = filter_var($htmlString, FILTER_SANITIZE_STRING);
    echo $sanitizedString; 
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                Hello, world!
            </Result>
            <div className="mital"> متال 2 : </div>
            <CodeHighlighter  code={`<?php 
    $email = "Reda(.Eskouni)@gma//il. c o m";
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    echo "<h2>". $email ."</h2>";
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>Reda.Eskouni@gmail.com</h2>
            </Result>
            <div className="mital"> متال 3 : </div>
            <CodeHighlighter  code={`<?php 
    $dirtyNumber = "42abc0";
    $cleanNumber = filter_var($dirtyNumber, FILTER_SANITIZE_NUMBER_INT);
    echo $cleanNumber;
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                420
            </Result>
            <div className="mital"> متال 4 : </div>
            <CodeHighlighter  code={`<?php 
    $dirtyFloat = "3a.bc14";
    $cleanFloat = filter_var($dirtyFloat, FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
    echo $cleanFloat;
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                3.14
            </Result>
            <div className="mital"> متال 5 : </div>
            <CodeHighlighter  code={`<?php 
    $specialChars = "<h2>Hello, 'world'!</h2>";
    $sanitizedChars = filter_var($specialChars, FILTER_SANITIZE_SPECIAL_CHARS);
    echo $sanitizedChars;
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                {"<"}h2{">"}Hello, 'world'!{"<"}/h2{">"}
            </Result>
            
        </article>
    </>
    )
}