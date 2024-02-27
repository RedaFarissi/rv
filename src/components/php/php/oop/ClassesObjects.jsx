import { CodeHighlighter , CodeCommand , Result} from "../../../path";

export default function ClassesObjects(props){
    return(
    <>
        <h1 className="heading-style"> PHP Classes Objects </h1>
        <article className="mt-5">
            <p className="style_divv">
                الفئة <b>(class)</b> عبارة عن قالب للكائنات <b>(objects)</b> ، والكائن هو مثيل للفئة.
            </p>
            <h2 className="title-h2">1 - تحديد فئة </h2>
            <p className="style_divv">
                يتم تعريف الفئة باستخدام الكلمة الأساسية <b>class</b>، متبوعة باسم الفئة وزوج من الأقواس المتعرجة {"{}"}. جميع خصائصها وطرقها تدخل داخل الأقواس:
                <CodeHighlighter  code={`<?php 
    class ClassName {
        // code goes here...
    }      
?>`} language="php" addclassName="mt-3 mb-3" copie={true}/>   
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    class Person {
        // Properties (attributes)
        public $name;
        public $age;
       
        // Methods
        function set_data($name , $age) {
            $this->name = $name ;
            $this->age = $age ;
        }
        function get_data() {
            return "Name : " . $this->name . " and age is " . $this->age;
        }
    }
?>`} language="php" addclassName="mt-3 mb-3" copie={true}/>   
            
            <h2 className="title-h2">2 - تعريف الكائنات </h2>
            <p className="style_divv">
                <b>Classes</b> لا شيء بدون كائنات! يمكننا إنشاء كائنات متعددة من فئة. يحتوي كل كائن على كافة الخصائص والأساليب المحددة في الفئة، ولكن سيكون لها قيم خصائص مختلفة.<br/><br/>
                يتم إنشاء كائنات الفصل باستخدام الكلمة الأساسية <b>new</b> .
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    class Person {
        // Properties (attributes)
        public $name;
        public $age;
       
        // Methods
        function set_data($name , $age) {
            $this->name = $name ;
            $this->age = $age ;
        }
        function get_data() {
            return "Name : " . $this->name . " and age is " . $this->age;
        }
    }

    $person1 = new Person();
    $person2 = new Person();
   
    $person1->set_data("Reda Eskouni" , 27);
    $person2->set_data("Amal El" , 24);

    echo "<h2>" . $person1->get_data() . "</h2>";
    echo "<h2>" . $person2->get_data() . "</h2>";
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>Name : Reda Eskouni and age is 27</h2>
                <h2>Name : Amal El and age is 24</h2>
            </Result>   
        </article>
    </>
    )
}