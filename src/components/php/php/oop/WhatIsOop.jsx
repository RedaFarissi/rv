import { CodeHighlighter , CodeCommand , Result} from "../../../path";

export default function WhatIsOop(props){
    return(
    <>
        <h1 className="heading-style"> PHP What is OOP </h1>
        <article className="mt-5">
            <p className="style_divv mt-5">
                <b>OOP</b> تعني البرمجة الشيئية.<br/><br/>
                البرمجة الإجرائية تدور حول كتابة الإجراءات أو الوظائف التي تنفذ العمليات على البيانات، في حين أن البرمجة الموجهة للكائنات تدور حول إنشاء كائنات تحتوي على كل من البيانات والوظائف.<br/><br/>
                تتميز البرمجة الموجهة للكائنات بالعديد من المزايا مقارنة بالبرمجة الإجرائية:<br/>
                <ol>
                    <li><b>OOP</b> أسرع وأسهل في التنفيذ</li>
                    <li>يوفر <b>OOP</b> بنية واضحة للبرامج</li>
                    <li>يساعد <b>OOP</b> في الحفاظ على كود PHP جافًا "لا تكرر نفسك"، ويجعل صيانة الكود وتعديله وتصحيحه أسهل</li>
                    <li>يتيح <b>OOP</b> إنشاء تطبيقات كاملة قابلة لإعادة الاستخدام برمز أقل ووقت تطوير أقصر</li>
                    <li>نصيحة: مبدأ "لا تكرر نفسك" <b>(DRY)</b> يتعلق بتقليل تكرار التعليمات البرمجية. يجب عليك استخراج الرموز المشتركة للتطبيق، ووضعها في مكان واحد وإعادة استخدامها بدلاً من تكرارها.</li>
                </ol><br/>

                في البرمجة الشيئية، تتضمن المبادئ الرئيسية :<br/>
                <ul>
                    <li className="mb-2"><b className="text-success">التغليف (Encapsulation):</b> يتضمن ربط البيانات (السمات) والوظائف (الدوال) التي تعمل على هذه البيانات في وحدة واحدة تسمى الفئة. يساعد ذلك في إخفاء تفاصيل التنفيذ الداخلية للكائن وتقديم ما هو ضروري فقط.</li>
                    <li className="mb-2"><b className="text-success">التوريث (Inheritance):</b> يسمح لفئة (فئة فرعية/فرع) بتوريث الخصائص والوظائف من فئة أخرى (فئة رئيسية/أصلية). يعزز هذا إعادة استخدام الشيفرة وإنشاء تسلسل للفئات.</li>
                    <li className="mb-2"><b className="text-success">التعددية (Polymorphism):</b> يسمح لكائنات فئات مختلفة بالتعامل ككائنات لفئة أساسية مشتركة. تمكن التعددية من المرونة والتوسع في الشيفرة.</li>
                    <li className="mb-2"><b className="text-success">التجريد (Abstraction):</b> يتضمن التجريد تبسيط الأنظمة المعقدة من خلال نمذجة الفئات بناءً على الخصائص والسلوكيات الأساسية التي تشترك فيها. يساعد في إنشاء فصل واضح بين ما يفعل الكائن وكيف يحقق هذا الوظيفة.</li>
                </ul>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php 
    class Car {
        // Properties
        public $brand;
        public $model;
        public $color;
    
        // Constructor
        public function __construct($brand, $model, $color) {
            $this->brand = $brand;
            $this->model = $model;
            $this->color = $color;
        }
    
        // Method
        public function startEngine() {
            return $this->brand . ' ' . $this->model . ' engine started.';
        }
    }
    
    // Creating an instance of the Car class
    $myCar = new Car('Toyota', 'Camry', 'Green');
    
    // Accessing properties
    echo $myCar->brand."<br />"; // Outputs: Toyota
    
    // Calling a method
    echo $myCar->startEngine(); // Outputs: Toyota Camry engine started.
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                Toyota<br/>
                Toyota Camry engine started.
            </Result>
        </article>
    </>
    )
}