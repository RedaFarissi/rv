import { CodeHighlighter , CodeCommand , Result} from "../../../path";

export default function Numbers(props){
    return(
    <>
        <h1 className="heading-style"> PHP Numbers </h1>
        <article className="mt-5">
            <p className="style_divv mt-5">
                هناك ثلاثة أنواع رقمية رئيسية في <b>PHP</b>:
                <ul>
                    <li><b>Integer</b></li>
                    <li><b>Float</b></li>
                    <li><b>Number Strings</b></li>
                </ul>
                بالإضافة إلى ذلك، لدى <b>PHP</b> نوعين آخرين من البيانات المستخدمة للأرقام:
                <ul>
                    <li><b>Infinity</b></li>
                    <li><b>NaN</b></li>
                </ul>
                يتم إنشاء متغيرات الأنواع الرقمية عندما تقوم بتعيين قيمة لها:
            </p>
            <h2 className="title-h2">1 - Integer </h2>
            <p className="style_divv">
                لعدد الصحيح هو رقم بدون أي جزء عشري.<br/><br/>
                نوع البيانات الصحيح هو رقم غير عشري بين <b><bdi>-2147483648</bdi></b> و <b>2147483647</b> في أنظمة <b>32</b> بت، وبين <b><bdi>-9223372036854775808</bdi></b> و <b>9223372036854775807</b> في أنظمة <b>64</b> بت. سيتم تخزين القيمة الأكبر (أو الأقل) من هذا على أنها عائمة، لأنها تتجاوز حد العدد الصحيح.<br/><br/>
                فيما يلي بعض القواعد للأعداد الصحيحة:
                <ul>
                    <li>يجب أن يحتوي العدد الصحيح على رقم واحد على الأقل</li>
                    <li>يجب ألا يحتوي العدد الصحيح على نقطة عشرية</li>
                    <li>يمكن أن يكون العدد الصحيح موجبًا أو سالبًا</li>
                    <li>يمكن تحديد الأعداد الصحيحة بثلاثة تنسيقات: عشري (أساس 10)، سداسي عشري (أساس 16 - مسبوق بـ 0x)، ثماني (أساس 8 - مسبوق بـ 0) أو ثنائي (أساس 2 - مسبوق بـ 0b)</li>
                </ul><br/><br/>
                لدى PHP الوظائف التالية للتحقق مما إذا كان نوع المتغير عددًا صحيحًا:
                <ul>
                    <li><bdi><b>is_int()</b></bdi></li>
                    <li><bdi><b>is_integer()</b></bdi> - الاسم المستعار لـ <bdi><b>is_int()</b></bdi></li>
                    <li><bdi><b>is_long()</b></bdi> - الاسم المستعار لـ <bdi><b>is_int()</b></bdi></li>
                </ul>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    $x = 5985;
    var_dump(is_int($x));

    echo "<br/><br/>";
    
    $x = 59.85;
    var_dump(is_int($x));
?> `} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                bool(true)<br/><br/>bool(false)
            </Result>
            <h2 className="title-h2">2 - Floats </h2>
            <p className="style_divv">
                العدد العائم هو رقم ذو علامة عشرية أو رقم في شكل أسي.<br/>
                2.0، 256.4، 10.358، 7.64E+5، 5.56E-5 كلها عوامات.<br/>
                يمكن لنوع البيانات العائمة عادةً تخزين قيمة تصل إلى 1.7976931348623 E+308 (يعتمد على النظام الأساسي)، وبدقة قصوى تصل إلى 14 رقمًا.<br/><br/>
                
                يحتوي <b>PHP</b> على الثوابت المحددة مسبقًا التالية للعوامات:
                <ul>
                    <li><b>PHP_FLOAT_MAX :</b> - أكبر رقم عائم يمكن تمثيله</li>
                    <li><b>PHP_FLOAT_MIN :</b> - أصغر رقم فاصلة عائمة موجب يمكن تمثيله</li>
                    <li><b>PHP_FLOAT_DIG :</b> - عدد الأرقام العشرية التي يمكن تقريبها إلى عدد عشري والعودة دون فقدان الدقة</li>
                    <li><b>PHP_FLOAT_EPSILON :</b> - أصغر رقم موجب يمكن تمثيله x، بحيث يكون x + 1.0 != 1.0</li>
                </ul><br/>
                لدى <b>PHP</b> الوظائف التالية للتحقق مما إذا كان نوع المتغير عائمًا:
                <ul>
                    <li><bdi><b>is_float()</b></bdi></li>
                    <li><bdi><b>is_double()</b></bdi>  - الاسم المستعار لـ <bdi><b>is_float()</b></bdi></li>
                </ul>
            </p>
            <div className="mital"> متال 1 : </div>
            <CodeHighlighter  code={`<?php
    $x = 10.365;
    var_dump(is_float($x));
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                bool(true)
            </Result>
            <div className="mital"> متال 2 : </div>
            <CodeHighlighter  code={`<?php
        echo PHP_FLOAT_MAX ."\\n";
        echo PHP_FLOAT_MIN ."\\n";
        echo PHP_FLOAT_DIG ."\\n";
        echo PHP_FLOAT_EPSILON ."\\n";
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand>
                C:\xampp\htdocs\php-test{">"} <span className="text-success">php index.php</span><br/>
                1.7976931348623E+308<br/>
                2.2250738585072E-308<br/>
                15<br/>
                2.2204460492503E-16<br/>
            </CodeCommand>
            <h2 className="title-h2">3 - Infinity </h2>
            <p className="style_divv">
                القيمة الرقمية الأكبر من <b>PHP_FLOAT_MAX</b> تعتبر لا نهائية.<br/>
                لدى <b>PHP</b> الوظائف التالية للتحقق مما إذا كانت القيمة الرقمية محدودة أم لا نهائية:
                <ul>
                    <li><bdi><b>is_finite()</b></bdi></li>
                    <li><bdi><b>is_infinite()</b></bdi></li>
                </ul>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    if( is_infinite(log(0)) ){
        echo "log(0) => is infinite <br/>";
    }
    if( is_infinite(2) === false ){
        echo "2 => is not infinite";
    }
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                log(0) ={">"} is infinite<br/>
                2 ={">"} is not infinite
            </Result>
            <h2 className="title-h2">4 - NaN </h2>
            <p className="style_divv">
                <b>NaN</b> تعني ليس رقمًا.<br/> 
                يستخدم <b>NaN</b> للعمليات الرياضية المستحيلة.<br/>
                لدى <b>PHP</b> الوظائف التالية للتحقق مما إذا كانت القيمة ليست رقمًا:
                <ul>
                    <li><bdi><b>is_nan()</b></bdi></li>
                </ul>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php echo is_nan(acos(1.01));  ?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                1
            </Result>
        </article>  
    </>
    )
}