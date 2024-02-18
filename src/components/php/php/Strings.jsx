import { CodeHighlighter , CodeCommand , Result} from "../../path";

export default function Strings(props){
    return(
    <>
        <h1 className="heading-style"> PHP Strings </h1>
        <article className="mt-5">
            <details  className="mt-5 my-4">
                <summary className='text-danger'> جميع العناوين  </summary>
                <ul dir="ltr">
                    <li><a className="text-decoration-none" href="#string_length"> String Length </a></li>
                    <li><a className="text-decoration-none" href="#word_count"> Word Count </a></li>
                    <li><a className="text-decoration-none" href="#Search_For_Text_Within_a_String"> Search For Text Within a String </a></li>
                    <li><a className="text-decoration-none" href="#upper_case"> Upper Case </a></li>
                    <li><a className="text-decoration-none" href="#lower_case"> Lower Case </a></li>
                    <li><a className="text-decoration-none" href="#replace_string"> Replace String </a></li>
                    <li><a className="text-decoration-none" href="#reverse_a_string"> Reverse a String </a></li>
                    <li><a className="text-decoration-none" href="#remove_whitespace"> Remove Whitespace </a></li>
                    <li><a className="text-decoration-none" href="#convert_string_into_array"> Convert String into Array </a></li>
                    <li><a className="text-decoration-none" href="#concatenate_strings"> Concatenate Strings </a></li>
                    <li><a className="text-decoration-none" href="#slicing"> Slicing </a></li>
                    <li><a className="text-decoration-none" href="#escape_characters">  Escape Characters </a></li>
                </ul>
            </details>
            <p className="style_divv">
                في <b>PHP</b>، السلاسل هي تسلسلات من الأحرف، ويمكن تعريفها باستخدام علامات الاقتباس الفردية <b>(')</b> أو الاقتباس المزدوج <b>(")</b>. فيما يلي بعض الجوانب الهامة للعمل مع السلاسل في <b>PHP</b>:
            </p>
            <h2 className="title-h2" id="string_length">1 - طول سلسلة </h2>
            <p className="style_divv">
                تقوم الدالة <bdi><b>PHP strlen()</b></bdi> بإرجاع طول السلسلة.
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP TEST</title>
</head>
<body>
    <h2><?php echo strlen("Hello world!"); ?></h2>
</body>
</html>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="PHP TEST" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">     
                <h2>12</h2>                
            </Result>
            <h2 className="title-h2" id="word_count">2 - عدد الكلمات </h2>
            <p className="style_divv">
                تقوم الدالة <bdi><b>str_word_count()</b></bdi> في <b>PHP</b> بحساب عدد الكلمات في السلسلة.
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>str_word_count</title>
</head>
<body>
    <h2><?php echo str_word_count("Hello world!"); ?></h2>
    <h2><?php echo str_word_count("AA BB CC D"); ?></h2>
</body>
</html>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="str_word_count"  logo={props.xampp_logo}  route="http://localhost/php-test/index.php">     
                 <h2>2</h2>     
                 <h2>4</h2>     
            </Result>
            <h2 className="title-h2" id="Search_For_Text_Within_a_String">3 - البحث عن نص داخل سلسلة </h2>
            <p className="style_divv">
                تبحث الدالة <bdi><b>PHP strpos()</b></bdi> عن نص محدد داخل سلسلة.<br/>
                إذا تم العثور على تطابق، تقوم الدالة بإرجاع موضع الحرف للمطابقة الأولى. إذا لم يتم العثور على تطابق، فسيتم إرجاع <b>FALSE</b>.
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>strpos</title>
</head>
<body>
    <h2>
        <?php 
            $haystack = "Hello, World!";
            $needle = "World";
            
            $position = strpos($haystack, $needle);
            
            if ($position !== false) {
                echo "Substring found at position: $position";
            } else {
                echo "Substring not found";
            }
        ?></h2>
</body>
</html>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="strpos" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">     
                <h2>Substring found at position: 7</h2>     
            </Result>
            <h2 className="title-h2" id="upper_case">4 - الأحرف الكبيرة </h2>
            <p className="style_divv">
                لتحويل سلسلة نصية إلى حروف كبيرة في <b>PHP</b>، يمكنك استخدام وظيفة <bdi><b>strtoupper()</b></bdi>، وهي تأخذ سلسلة نصية كإدخال وتعيد سلسلة جديدة حيث يتم تحويل جميع الأحرف الأبجدية إلى حروف كبيرة. فيما يلي مثال:
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>strtoupper</title>
</head>
<body>
    <h2>
        <?php 
            $str = "Hello, World!";
            $uppercaseStr = strtoupper($str);
            
            echo $uppercaseStr;   
        ?>
    </h2>
</body>
</html>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="strtoupper" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">     
                <h2>HELLO, WORLD!</h2>
            </Result>
            <h2 className="title-h2" id="lower_case">5 - الأحرف صغيرة </h2>
            <p className="style_divv">
                لتحويل سلسلة نصية إلى حروف صغيرة في <b>PHP</b>، يمكنك استخدام وظيفة <bdi><b>strtolower()</b></bdi>، حيث تأخذ هذه الوظيفة سلسلة نصية كإدخال وتعيد سلسلة جديدة حيث يتم تحويل جميع الأحرف الأبجدية إلى حروف صغيرة.
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> strtolower </title>
</head>
<body>
    <h2>
        <?php 
            $str = "A B C D E F  .... Z";
            $lowercaseStr = strtolower($str);
            
            echo $lowercaseStr; 
        ?>
    </h2>
</body>
</html>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="strtolower" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">     
                <h2>a b c d e f .... z</h2>
            </Result>
            <h2 className="title-h2" id="replace_string">6 - استبدال السلسلة </h2>
            <p className="style_divv">
                في <b>PHP</b>، يمكنك استخدام وظيفة <bdi><b>str_replace()</b></bdi> لاستبدال سلسلة نصية معينة داخل سلسلة أخرى. تأخذ هذه الوظيفة ثلاثة معلمات:
                <ol className="mt-4">
                    <li>السلسلة الفرعية التي تريد البحث عنها.</li>
                    <li>السلسلة البديلة.</li>
                    <li>السلسلة الأصلية.</li>
                </ol>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>str_replace</title>
</head>
<body>
    <h2>
        <?php 
            $originalString = "Reda Eskouni";

            $substringToReplace = "Eskouni";
            
            $replacementString = "El";
            
            $newString = str_replace($substringToReplace, $replacementString, $originalString);            
            
            echo $newString;
        ?>
    </h2>
</body>
</html>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="str_replace" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">     
                <h2>Reda El</h2>
            </Result>
            <h2 className="title-h2" id="reverse_a_string">7 - عكس سلسلة </h2>
            <p className="style_divv">
                تقوم الدالة <bdi><b>strrev()</b></bdi> بعكس السلسلة.
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>strrev</title>
</head>
<body>
    <h2>
        <?php 
            $var = "Hello World!";
            echo strrev($var);
        ?>
    </h2>
</body>
</html>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="strrev" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">     
                <h2>!dlroW olleH</h2>
            </Result>
            <h2 className="title-h2" id="remove_whitespace">8 - إزالة المسافة البيضاء </h2>
            <p className="style_divv">
                المسافة البيضاء هي المسافة قبل أو بعد النص الفعلي، وفي كثير من الأحيان تريد إزالة هذه المسافة.
            </p>
            <h3 className="title-h3">1 - باستخدام وظيفة <bdi>trim()</bdi> .</h3>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>strrev</title>
</head>
<body>
    <h2>
        <?php 
            $name = "    Reda Eskouni    ";
            $trimmedStr = trim($name);
            echo $trimmedStr; 
        ?>
    </h2>
</body>
</html>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="strrev" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">     
                <h2>Reda Eskouni</h2>
            </Result>
            <h3 className="title-h3">2 - استخدام <bdi>preg_replace()</bdi> مع تعبير عادي  .</h3>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>preg_replace</title>
</head>
<body>
    <h2>
        <?php 
            $str = "   Hello World   ";
            $trimmedStr = preg_replace('/\s+/', '', $str);
            echo $trimmedStr; 
        ?>
    </h2>
</body>
</html>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="preg_replace" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">     
                <h2>HelloWorld</h2>
            </Result>
            <h3 className="title-h3">3 - استخدام <bdi>str_replace()</bdi> لإزالة أحرف المسافات البيضاء المحددة .</h3>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>str_replace</title>
</head>
<body>
    <h2>
        <?php 
            $name = "   Reda Eskouni   ";
            $trimmedStr = str_replace(' ', '', $name);
            echo $trimmedStr; 
        ?>
    </h2>
</body>
</html>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="str_replace" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">     
                <h2>RedaEskouni</h2>
            </Result>
            <h2 className="title-h2" id="convert_string_into_array">9 - تحويل السلسلة إلى array </h2>
            <p className="style_divv">
                تقوم وظيفة <bdi><b>PHP Explosion()</b></bdi> بتقسيم السلسلة إلى مصفوفة.<br/>
                تمثل المعلمة الأولى للدالة <bdi><b>Explode()</b></bdi> "الفاصل". يحدد "الفاصل" مكان تقسيم السلسلة.
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>explode</title>
</head>
<body>
    <h2>
        <?php 
            $x = "Hello World!";
            $y = explode(" ", $x);
            
            print_r($y);
            echo "<div style='color:red'>". $y[0] ."</div>";
            echo "<div style='color:green'>". $y[1] ."</div>";
        ?>
    </h2>
</body>
</html>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="explode" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">     
                <h2>
                    Array ( [0] ={">"} Hello [1] ={">"} World! )
                    <div style={{color:"red"}}>Hello</div>
                    <div style={{color:"green"}}>World!</div>
                </h2>
            </Result>
            <h2 className="title-h2" id="concatenate_strings">10 - تسلسل السلاسل (Concatenate) </h2>
            <p className="style_divv">
                لربط سلسلتين أو دمجهما، يمكنك استخدام الملف . المشغل أو العامل
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Concatenation</title>
</head>
<body>
    <?php 
        $f_name = "Reda" ;
        $l_name = "Eskouni" ;

        $a = $f_name . $l_name ;
        $b = $f_name . " " . $l_name ;
    ?>

    <h2 style="color:red"> <?php echo $a; ?> </h2>
    <h2 style="color:green"> <?php echo $b; ?> </h2>
    
</body>
</html>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="Concatenation" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">     
                <h2 style={{color:"red"}}> Reda </h2>
                <h2 style={{color:"green"}}> Eskouni </h2>
            </Result>
            <h2 className="title-h2" id="slicing">11 - التقطيع (Slicing) </h2>
            <h3 className="title-h3">1 - التقطيع </h3>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>substr</title>
</head>
<body>
    <?php 
        $x = "Reda Eskouni";
    ?>
    <h2> <?php echo substr($x, 5, 2); ?> </h2>
    <h2> <?php echo substr($x, 2); ?> </h2>
</body>
</html>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="substr" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">     
                <h2>Es</h2>
                <h2>da Eskouni</h2>
            </Result>
            <h3 className="title-h3">2 - قطع من الأحرف الأخيرة </h3>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>substr</title>
</head>
<body>
    <?php 
       $str = "Hello, World!";
       $substring1 = substr($str, -6); // Extract the last 6 characters
       $substring2 = substr($str, -5, 3);; # Get the 3 characters, starting from 'o' 
    ?>
    <h2><?php echo $substring1; ?></h2>
    <h2><?php echo $substring2; ?></h2>
</body>
</html>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="substr" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">     
                <h2>World!</h2>
                <h2>orl</h2>
            </Result>
            <h3 className="title-h2" id="escape_characters"> 12 - Escape Characters </h3>
            <table className="table" dir="ltr">
                <thead className="bg-secondary">
                    <tr className="text-center fs-5"><th> Code  </th><th> Result </th></tr>
                </thead>
                <tbody>
                    <tr><td>\'</td> <td> اقتباس واحد</td></tr>
                    <tr><td>\"</td> <td> اقتباس مزدوج</td></tr>
                    <tr><td>\$</td> <td> متغيرات PHP</td></tr>
                    <tr><td>\\</td> <td> شرطة مائلة عكسية</td></tr>
                    <tr><td>\n</td> <td> خط جديد</td></tr>
                    <tr><td>\r</td> <td> إرجاع</td></tr>
                    <tr><td>\t</td> <td> فاتورة غير مدفوعة</td></tr>
                    <tr><td>\ooo</td><td> القيمة الثماني (Octal value)</td> </tr>
                    <tr><td>\xhh</td><td> قيمة سداسية (Hex value)</td> </tr>
                </tbody>
            </table>
            <div className="mital"> متال 1: </div>
            <CodeHighlighter  code={`<?php 
    echo "Hello\\nWorld";    # \\n
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand>
                C:\xampp\htdocs\php-test{">"} <span className="text-success">php index.php</span><br/>
                Hello<br/>
                World
            </CodeCommand>
            <div className="mital"> متال 2: </div>
            <CodeHighlighter  code={`<?php
    $x = "\\x48\\x65\\x6c\\x6c\\x6f";   #\\xhh
    echo $x;
?> 
`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand>
                C:\xampp\htdocs\php-test{">"} <span className="text-success">php index.php</span><br/>
                Hello
            </CodeCommand>
            <div className="mital"> متال 3 : </div>
            <CodeHighlighter  code={`<?php
$x = "Escape php variable name \$myvar";
echo $x;
?> `} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand>
                C:\xampp\htdocs\php-test{">"} <span className="text-success">php index.php</span><br/>
                Escape php variable name $myvar
            </CodeCommand>
        </article>
    </>
    )
}