import { CodeHighlighter , CodeCommand , Result} from "../../../path";

export default function Inheritance(props){
    return(
    <>
        <h1 className="heading-style"> PHP Inheritance </h1>
        <article className="mt-5">
            <p className="style_divv">
                <b>Inheritance</b> التوريث هو مفهوم أساسي في برمجة الكائنات الموجهة <b>(OOP)</b> الذي يتيح للفئة أن ترث الخصائص والأساليب من فئة أخرى. في <b>PHP</b>، يمكنك تحقيق التوريث باستخدام كلمة <b>extends</b> .<br/>
                سوف يرث الفصل الفرعي جميع الخصائص والأساليب العامة والمحمية من الفصل الأصلي. وبالإضافة إلى ذلك، يمكن أن يكون لها خصائصها وأساليبها الخاصة.
            </p>
            <div className="mital"> متال 1 : </div>
            <CodeHighlighter  code={`<?php 
    class Animal {
        public $name;
        public function __construct($name) {
            $this->name = $name;
        }
        public function sound() {
            echo "<h2 style='color:green'> Generic Animal Sound </h2>";
        }
    }

    class Dog extends Animal {
        public function fetch() {
            $this->sound();
            echo "<b>$this->name</b> is fetching the ball.";
        }        
    }

    $myDog = new Dog("Droga");
    $myDog->fetch();
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2 style={{color:"green"}}>Generic Animal Sound</h2>
                <b>Droga</b> is fetching the ball.
            </Result>
            <div className="mital"> متال 2 : </div>
            <CodeHighlighter  code={`<?php
    class Fruit {
        public $name;
        public $color;
        
        public function __construct($name, $color) {
            $this->name = $name;
            $this->color = $color;
        }
        
        protected function intro() {
            echo "<h2> The fruit is {$this->name} and the color is {$this->color} .</h2>";
        }
    }

    class Strawberry extends Fruit {
        public function message() {
            echo "<h2> Am I a fruit or a berry? </h2>";
        }
    }

    $strawberry = new Strawberry("Strawberry", "red");
    $strawberry->message();
    # $strawberry->intro(); // Error. intro() is protected
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>Am I a fruit or a berry?</h2>
            </Result>
            <div className="mital"> متال 3 : </div>
            <CodeHighlighter  code={`<?php
    class Fruit {
        public $name;
        public $color;
        public function __construct($name, $color) {
            $this->name = $name;
            $this->color = $color;
        }
        public function intro() {
            echo "The fruit is {$this->name} and the color is {$this->color}.";
        }
    }

    class Strawberry extends Fruit {
        public $weight;
        public function __construct($name, $color, $weight) {
            $this->name = $name;
            $this->color = $color;
            $this->weight = $weight;
        }
        public function intro() {
            echo "The fruit is {$this->name}, the color is {$this->color}, and the weight is {$this->weight} gram.";
        }
    }

    $strawberry = new Strawberry("Strawberry", "red", 50);
    $strawberry->intro();
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                The fruit is Strawberry, the color is red, and the weight is 50 gram.
            </Result>
        </article>
    </>
    )
}