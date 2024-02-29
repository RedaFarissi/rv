import { CodeHighlighter , CodeCommand , Result} from "../../../path";

export default function RegEx(props){
    return(
    <>
        <h1 className="heading-style"> PHP RegEx </h1>
        <article className="mt-5">
            <p className="style_divv mt-5">
                التعبير العادي عبارة عن سلسلة من الأحرف التي تشكل نمط بحث. عندما تبحث عن بيانات في نص ما، يمكنك استخدام نمط البحث هذا لوصف ما تبحث عنه.<br/><br/>
                يمكن أن يكون التعبير العادي حرفًا واحدًا أو نمطًا أكثر تعقيدًا.<br/><br/>
                يمكن استخدام التعبيرات العادية لإجراء جميع أنواع عمليات البحث عن النص واستبدال النص.
            </p>
            <h2 className="title-h2">1 - <bdi><b>preg_match()</b></bdi></h2>
            <p className="style_divv">
                ستخبرك الدالة <bdi><b>preg_match()</b></bdi> ما إذا كانت السلسلة تحتوي على تطابقات للنمط أم لا.
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    $pattern = '/hello/';
    $string = 'Hello, World!';

    echo ( preg_match($pattern, $string) )? 
        '<h1 style="color:green">Pattern found.</h1>': 
        '<h1 style="color:red">Pattern not found.</h1>';
        
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h1 style={{color:"red"}}>Pattern not found.</h1>
            </Result>

            <h2 className="title-h2">2 - <bdi><b>preg_match_all()</b></bdi></h2>
            <p className="style_divv">
                ستخبرك الدالة <bdi><b>preg_match_all()</b></bdi> بعدد التطابقات التي تم العثور عليها لنمط ما في سلسلة ما.
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    $str = "The rain in SPAIN falls mainly on the plains.";
    $pattern = "/ain/i";
?>

<h1> <?php echo preg_match_all($pattern, $str); ?></h1>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h1>4</h1>
            </Result>

            <h2 className="title-h2">3 - <bdi><b>preg_replace()</b></bdi></h2>
            <p className="style_divv">
                ستقوم الدالة <bdi><b>preg_replace()</b></bdi> باستبدال جميع مطابقات النمط في سلسلة بسلسلة أخرى.
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    $str1 = "The rain in SPAIN falls mainly on the plains.";
    $pattern1 = "/ain/i";

    $str2 = "Visit Microsoft!";
    $pattern2 = "/microsoft/i";
    
?>

<h1> <?php echo preg_replace($pattern1, "@",$str1); ?></h1>
<h1> <?php echo preg_replace($pattern2, "Reda Eskouni", $str2); ?></h1>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>The r@ in SP@ falls m@ly on the pl@s.</h2>
                <h2>Visit Reda Eskouni!</h2>
            </Result>
            
            <h2 className="title-h2">4 - Regular Expression Modifiers </h2>
            <p className="style_divv">
                يمكن للمعدلات تغيير كيفية إجراء البحث.
                <table className="table" dir="ltr">
                    <thead className="bg-secondary">
                        <tr className="text-center fs-5"><th> Modifier	</th><th> Description </th></tr>
                    </thead>
                    <tbody>
                        <tr><td><b>i</b></td> <td> يقوم بإجراء بحث غير حساس لحالة الأحرف </td></tr>
                        <tr><td><b>m</b></td> <td> إجراء بحث متعدد الأسطر (الأنماط التي تبحث عن تطابق في بداية السلسلة أو نهايتها ستتطابق الآن مع بداية كل سطر أو نهايته) </td></tr>
                        <tr><td><b>u</b></td> <td> تمكين المطابقة الصحيحة للأنماط المشفرة UTF-8</td></tr>
                    </tbody>
                </table>
            </p>

            <h2 className="title-h2">5 - Regular Expression Patterns </h2>
            <p className="style_divv">
                يمكن للمعدلات تغيير كيفية إجراء البحث.
                <table className="table" dir="ltr">
                    <thead className="bg-secondary">
                        <tr className="text-center fs-5"><th> Expression	</th><th> Description </th></tr>
                    </thead>
                    <tbody>
                        <tr><td><b>[abc]</b></td>  <td> ابحث عن واحد أو أكثر من الأحرف داخل الأقواس </td></tr>
                        <tr><td><b>[^abc]</b></td> <td> ابحث عن أي حرف ليس بين قوسين </td></tr>
                        <tr><td><b>[a-z]</b></td>  <td> البحث عن أي حرف أبجديا بين حرفين </td></tr>
                        <tr><td><b>[A-z]</b></td>  <td> ابحث عن أي حرف أبجديًا بين حرف كبير محدد وحرف صغير محدد </td></tr>
                        <tr><td><b>[A-Z]</b></td>  <td> ابحث عن أي حرف أبجديًا بين حرفين كبيرين. </td></tr>
                        <tr><td><b>[123]</b></td>  <td> ابحث عن واحد أو أكثر من الأرقام الموجودة داخل الأقواس </td></tr>
                        <tr><td><b>[0-5]</b></td>  <td> ابحث عن أي رقم بين الرقمين </td></tr>
                        <tr><td><b>[0-9]</b></td>  <td> العثور على أي أرقام </td></tr>
                    </tbody>
                </table>
            </p>

            <h2 className="title-h2">6 - Metacharacters </h2>
            <p className="style_divv">
                الأحرف الأولية هي أحرف ذات معنى خاص
                <table className="table" dir="ltr">
                    <thead className="bg-secondary">
                        <tr className="text-center fs-5"><th> Metacharacter </th><th> Description </th></tr>
                    </thead>
                    <tbody>
                        <tr> <td> <b>|</b> </td> <td> <b>|</b> ابحث عن تطابق لأي من الأنماط المفصولة بــ </td> </tr>
                        <tr> <td> <b>.</b> </td> <td>العثور على أي حرف</td> </tr>
                        <tr> <td> <b>^</b> </td> <td>يجد تطابقًا كبداية سلسلة </td> </tr>
                        <tr> <td> <b>$</b> </td> <td>يجد تطابقًا في نهاية السلسلة</td> </tr>
                        <tr> <td> <b>\d</b></td> <td>العثور على أي أرقام</td> </tr>
                        <tr> <td> <b>\D</b></td> <td>ابحث عن أي أرقام غير</td> </tr>
                        <tr> <td> <b>\s</b></td> <td>ابحث عن أي حرف مسافة بيضاء</td> </tr>
                        <tr> <td> <b>\S</b></td> <td>ابحث عن أي حرف ليس به مسافة بيضاء</td> </tr>
                        <tr> <td> <b>\w</b></td> <td>البحث عن أي حرف أبجدي (من a إلى z) ورقم (من 0 إلى 9)</td> </tr>
                        <tr> <td> <b>\W</b></td> <td>ابحث عن أي حرف غير أبجدي وغير رقمي</td> </tr>
                        <tr> <td> <b>\b</b></td> <td>ابحث عن تطابق في بداية كلمة ، أو في نهاية كلمة</td> </tr>
                        <tr> <td><b>\uxxxx</b></td> <td>ابحث عن حرف <b>Unicode</b> المحدد بالرقم السداسي العشري <b>xxxx</b></td> </tr>
                    </tbody>
                </table>
            </p>
            <div className="mital"> متال 1 : </div>
            <CodeHighlighter  code={`<?php
    $txt = "Reda Eskouni";
    $pattern = "/e/i";
    
    echo "<h2>". preg_match_all($pattern, $txt) ."</h2>";
    echo "<h2>". preg_replace($pattern, "#", $txt) ."</h2>";
?>`} language="php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>2</h2>
                <h2>R#da #skouni</h2>
            </Result>
            <div className="mital"> متال 2 : </div>
            <CodeHighlighter  code={`<?php
    $txt = "you are better than\\nyou think";
    $pattern = "/^you/m";

    echo "<h2>". preg_match_all($pattern , $txt) ."</h2>";
    echo "<h2>". preg_replace($pattern , "#" , $txt) ."</h2>";
?>`} language="php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>2</h2>
                <h2># are better than # think</h2>
            </Result>
            <div className="mital"> متال 3 : </div>
            <CodeHighlighter  code={`<?php
    $txt = "you are better than\\nyou think";
    $pattern = "/^you/";

    echo "<h2>".preg_match_all($pattern, $txt)."</h2>";
    echo "<h2>".preg_replace($pattern, "#", $txt)."</h2>";
?>`} language="php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>1</h2>
                <h2># are better than you think</h2>
            </Result>
            <div className="mital"> متال 4 : </div>
            <CodeHighlighter  code={`<?php
    $txt = "Reda Eskouni El";
    $pattern = "/[A-Z]/";

    echo "<h2>". preg_match_all($pattern, $txt) ."</h2>";
    echo "<h2>". preg_replace($pattern, "*", $txt) ."</h2>";
?> `} language="php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>3</h2>
                <h2>*eda *skouni *l</h2>
            </Result>
            <div className="mital"> متال 5 : </div>
            <CodeHighlighter  code={`<?php
    $txt = "Reda Eskouni";
    $pattern = "/[a-e]/";
    echo "<h2>". preg_match_all($pattern, $txt) ."</h2>";
    echo "<h2>". preg_replace($pattern, "#", $txt) ."</h2>";
?>`} language="php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>3</h2>
                <h2>R### Eskouni</h2>
            </Result>
            <div className="mital"> متال 6 : </div>
            <CodeHighlighter  code={`<?php
    $txt = "We have three Dogs, one Fish, but no Cats";
    $pattern = "/cat|dog|fish/i";

    echo "<h2>". preg_match_all($pattern, $txt) ."</h2>";
    echo "<h2>". preg_replace($pattern, "@", $txt) ."</h2>";
?>`} language="php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>3</h2>
                <h2>We have three @s, one @, but no @s</h2>
            </Result>
            
        </article>
    </>
    )
}