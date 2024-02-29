import { CodeHighlighter , CodeCommand , Result} from "../../../path";

export default function StaticMethods(props){
    return(
    <>
        <h1 className="heading-style"> PHP Static Methods </h1>
        <article className="mt-5">
            <p className="style_divv mt-5">
                في برمجة <b>PHP</b> كائنية التوجه <b>(OOP)</b>، تعد الطريقة الثابتة نوع خاص من الطرق يتم تعريفها باستخدام الكلمة الأساسية <b>static</b>.  تقدم هذه الطرق وظائف فريدة مقارنة بالطرق العادية :<br/><br/>
                <b className="text-danger">الخصائص الأساسية :</b>
                <ul>
                    <li className="mb-2"><b className="text-suuccess">يمكن الوصول إليها بدون إنشاء كائن:</b> على عكس الطرق العادية التي تتطلب إنشاء مثيل كائن لاستدعائها، يمكن استدعاء الطرق الثابتة مباشرة باستخدام اسم الفئة ومتعامل حل النطاق <kbd>::</kbd> .</li>
                    <li className="mb-2"><b className="text-suuccess">لا يمكن الوصول إلى $this:</b> بما أنها غير مرتبطة بمثيل كائن معين، لا يمكن للطرق الثابتة الوصول إلى المتغير <b>$this</b> داخل الطريقة .</li>
                    <li className="mb-2"><b className="text-suuccess">وصول محدود:</b> يمكنها فقط الوصول إلى الخصائص والطرق الثابتة للفصلة، وليس الأعضاء غير الثابتة .</li>
                </ul>
                <b className="text-danger">حالات الاستخدام :</b>
                <ul>
                    <li className="mb-2">وظائف المساعدة التي تعمل على البيانات دون الاعتماد على حالة الكائن، مثل العمليات الحسابية أو معالجة النصوص .</li>
                    <li className="mb-2">وظائف المساعدة التي تقوم بمهام متعلقة بالفئة نفسها، مثل إنشاء مثيلات جديدة أو التحقق من صحة البيانات .</li>
                    <li className="mb-2">طرق المصنع التي تقوم بإنشاء كائنات من الفئة .</li>
                </ul>
            </p>
            <div className="mital"> متال 1 : </div>
            <CodeHighlighter  code={`<?php 
    class Math {
        public static function add(int $x, int $y): int {
            return $x + $y;
        }
  
        public static function square(int $x): int {
            return $x * $x;
        }

        public static function multi(float $x , float $y): float {
            return $x * $y;
        }
    }
  
    echo "<h2>" . Math::add(10 , 10) . "</h2>";
    echo "<h2>" . Math::square(4) . "</h2>";
    echo "<h2>" . Math::multi(4.3 , 2) . "</h2>";
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>20</h2>
                <h2>16</h2>
                <h2>8.6</h2>
            </Result>
            <div className="mital"> متال 2 : </div>
            <CodeHighlighter  code={`<?php 
     class Greeting {
        public function __construct() {
            self::hello();
        }
        public static function hello(): void {
            echo "<h2> Hello World </h2>";
        }
    }
    
    new Greeting();
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>Hello World</h2>     
            </Result>
        </article>
    </>
    )
}