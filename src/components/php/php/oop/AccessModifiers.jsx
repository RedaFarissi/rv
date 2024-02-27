import { CodeHighlighter , CodeCommand , Result} from "../../../path";
 
export default function AccessModifiers(props){
    return(
    <>
        <h1 className="heading-style"> PHP Access Modifiers </h1>
        <article className="mt-5">
            <p className="style_divv">
                في <b>PHP</b> ، تعتبر الوسوم أو الكلمات الرئيسية لتحديد الوصول هي الكلمات المستخدمة للتحكم في رؤية خصائص وطرق الفصل. هناك ثلاثة <b>access modifiers</b> رئيسية في <b>PHP</b>:  
                <ul dir="ltr">
                    <li><b>public</b></li>
                    <li><b>protected</b></li>
                    <li><b>private</b></li>
                </ul>
            </p>
            <h2 className="title-h2">1 - Public</h2>
            <p className="style_divv">
                <ul>
                    <li>يمكن الوصول إلى الأعضاء العامة من خارج الفصل .</li>
                    <li>يمكن الوصول إليها مباشرة باستخدام كائن الفصل .</li>
                </ul>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php 
    class MyClass {
        public $publicProperty;
        
        public function publicMethod() {
            echo $this->publicProperty ;
        }
    }

    $obj = new MyClass();
    $obj->publicProperty = "Reda Eskouni";

    echo "<h2>" . $obj->publicProperty . "</h2>";
    $obj->publicMethod();
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>Reda Eskouni</h2>
                Reda Eskouni
            </Result>
            <h2 className="title-h2">2 - Protected</h2>
            <p className="style_divv">
                <ul>
                    <li>الأعضاء المحمية يمكن الوصول إليها فقط داخل الفصل  نفسه وداخل فصوله (أي الفصول التي تمتد من الفصل).</li>
                    <li>لا يمكن الوصول إليها مباشرة من خارج الفصل.</li>
                </ul>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php 
    class MyClass {
        protected $num;
        protected function protectedMethod(){
            $this->num += 1;
        }
    }

    class AnotherClass extends MyClass {
        public function accessProtected() {

            $this->num = 0 ;
            echo "<h2> {$this->num} </h2>";
            
            $this->protectedMethod();
            echo "<h2> {$this->num} </h2>";

        }
    }

    $obj = new AnotherClass();
    $obj->accessProtected(); 
    # $obj->num = 9; // Error 
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>0</h2>
                <h2>1</h2>
            </Result>
            <h2 className="title-h2">3 - Private</h2>
            <p className="style_divv">
                <ul>
                    <li>الأعضاء الخاصة يمكن الوصول إليها فقط داخل الفصل نفسه.</li>
                    <li>لا يمكن الوصول إليها من خارج الفصل أو فصوله.</li>
                </ul>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php 
    class Calcule {
        private $num1;
        private $num2;
        
        private function sum() {
            $this->num1;
            $this->num2;
        }
    }

    $obj = new Calcule();

    # $obj->num1 = 3;    // Error
    # $obj->sum();     // Error
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>
        </article>
    </>
    )
}