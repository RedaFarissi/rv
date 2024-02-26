import { CodeHighlighter , CodeCommand } from "../../../path";

export default function Casting(){
    return(
    <>
        <h1 className="heading-style"> PHP Casting </h1>
        <article className="mt-5">
            <p className="style_divv">
                في بعض الأحيان تحتاج إلى تغيير متغير من نوع بيانات إلى آخر، وفي بعض الأحيان تريد أن يكون للمتغير نوع بيانات محدد. <br/><br/>
                يتم إجراء عملية الإرسال في <b>PHP</b> باستخدام هذه العبارات:
                <ul>
                    <li><b className="text-success">(string) :</b>  تحويل إلى نوع البيانات سلسلة</li>
                    <li><b className="text-success">(int) :</b>     يحول إلى نوع البيانات عدد صحيح</li>
                    <li><b className="text-success">(float) :</b>  تحويل إلى نوع البيانات تعويم</li>
                    <li><b className="text-success">(bool) :</b>  يحول إلى نوع البيانات المنطقي</li>
                    <li><b className="text-success">(array) :</b>  يحول إلى نوع البيانات صفيف</li>
                    <li><b className="text-success">(object) :</b> يحول إلى كائن نوع البيانات</li>
                    <li><b className="text-success">(unset) :</b>  يحول إلى نوع البيانات NULL</li>
                </ul>
            </p>
            <h2 className="title-h2">1 - Cast to String </h2>
            <ul><li> للإرسال إلى السلسلة، استخدم العبارة <b>(string)</b> . </li></ul>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    $a = 5;       // Integer
    $b = 5.34;    // Float
    $c = "hello"; // String
    $d = true;    // Boolean
    $e = NULL;    // NULL

    $a = (string) $a;
    $b = (string) $b;
    $c = (string) $c;
    $d = (string) $d;
    $e = (string) $e;

    var_dump($a);
    var_dump($b);
    var_dump($c);
    var_dump($d);
    var_dump($e);
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand>
                C:\xampp\htdocs\php-test{">"} <span className="text-success">php index.php</span><br/>
                string(1) "5"<br/>
                string(4) "5.34"<br/>
                string(5) "hello"<br/>
                string(1) "1"<br/>
                string(0) ""<br/>
            </CodeCommand>
            <h2 className="title-h2">2 - Cast to Integer </h2>
            <ul><li>للإرسال إلى عدد صحيح، استخدم عبارة <b>(int)</b> </li></ul>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    $a = 5;       // Integer
    $b = 5.34;    // Float
    $c = "25 kilometers"; // String
    $d = "kilometers 25"; // String
    $e = "hello"; // String
    $f = true;    // Boolean
    $g = NULL;    // NULL
    
    $a = (int) $a;
    $b = (int) $b;
    $c = (int) $c;
    $d = (int) $d;
    $e = (int) $e;
    $f = (int) $f;
    $g = (int) $g;

    var_dump($a);
    var_dump($b);
    var_dump($c);
    var_dump($d);
    var_dump($e);
    var_dump($f);
    var_dump($g);
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand>
                C:\xampp\htdocs\php-test{">"} <span className="text-success">php index.php</span><br/>
                int(5)<br/>
                int(5)<br/>
                int(25)<br/>
                int(0)<br/>
                int(0)<br/>
                int(1)<br/>
                int(0)
            </CodeCommand>
            <h2 className="title-h2">3 - Cast to Float </h2>
            <ul><li>للإرسال إلى التعويم، استخدم عبارة <b>(float)</b></li></ul>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    $a = 5;       // Integer
    $b = 5.34;    // Float
    $c = "25 kilometers"; // String
    $d = "kilometers 25"; // String
    $e = "hello"; // String
    $f = true;    // Boolean
    $g = NULL;    // NULL
    
    $a = (float) $a;
    $b = (float) $b;
    $c = (float) $c;
    $d = (float) $d;
    $e = (float) $e;
    $f = (float) $f;
    $g = (float) $g;

    var_dump($a);
    var_dump($b);
    var_dump($c);
    var_dump($d);
    var_dump($e);
    var_dump($f);
    var_dump($g);
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand>
                C:\xampp\htdocs\php-test{">"} <span className="text-success">php index.php</span><br/>
                float(5)<br/>
                float(5.34)<br/>
                float(25)<br/>
                float(0)<br/>
                float(0)<br/>
                float(1)<br/>
                float(0)
            </CodeCommand>
            <h2 className="title-h2">4 - Cast to Boolean </h2>
            <ul><li>للإرسال إلى القيمة المنطقية، استخدم عبارة <b>(bool)</b> </li></ul>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    $a = 5;       // Integer
    $b = 5.34;    // Float
    $c = 0;       // Integer
    $d = -1;      // Integer
    $e = 0.1;     // Float
    $f = "hello"; // String
    $g = "";      // String
    $h = true;    // Boolean
    $i = NULL;    // NULL

    $a = (bool) $a;
    $b = (bool) $b;
    $c = (bool) $c;
    $d = (bool) $d;
    $e = (bool) $e;
    $f = (bool) $f;
    $g = (bool) $g;
    $h = (bool) $h;
    $i = (bool) $i;


    var_dump($a);
    var_dump($b);
    var_dump($c);
    var_dump($d);
    var_dump($e);
    var_dump($f);
    var_dump($g);
    var_dump($h);
    var_dump($i);
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand>
                C:\xampp\htdocs\php-test{">"} <span className="text-success">php index.php</span><br/>
                bool(true)<br/>
                bool(true)<br/>
                bool(false)<br/>
                bool(true)<br/>
                bool(true)<br/>
                bool(true)<br/>
                bool(false)<br/>
                bool(true)<br/>
                bool(false)<br/>
            </CodeCommand>
        </article>
    </>
    )
}