import { CodeHighlighter  , Result} from "../../../path";

export default function AbstractClasses(props){
    return(
    <>
        <h1 className="heading-style"> PHP Abstract Classes </h1>
        <article className="mt-5">
            <p className="style_divv mt-5">
                في <b>PHP</b>، تعتبر الفئة المجردة <b>(abstract class)</b> هي فئة لا يمكن إنشاء مثيل منها مباشرة. تعتبر كنموذجًا لغيرها من الفئات وقد تحتوي على أساليب مجردة يجب تنفيذها من قبل أي فئة فعلية (غير مجردة) تمتد منها. يتم تعريف الفئات المجردة باستخدام الكلمة المفتاحية <b>abstract</b>.
            </p>
            <div className="mital"> متال 1 : </div>
            <CodeHighlighter  code={`<?php
    abstract class Shape {
        protected $color;
        public function __construct($color) {
            $this->color = $color;
        }
        // Abstract method without implementation
        abstract public function calculateArea();
    }

    class Circle extends Shape {
        private $radius;
        public function __construct($color, $radius) {
            parent::__construct($color);
            $this->radius = $radius;
        }
        // Implementation of the abstract method
        public function calculateArea() {
            return pi() * pow($this->radius, 2);
        }
    }
  
    class Square extends Shape {
        private $side;
        public function __construct($color, $side) {
            parent::__construct($color);
            $this->side = $side;
        }
        // Implementation of the abstract method
        public function calculateArea() {
            return pow($this->side, 2);
        }
    }
  
    // Creating instances of concrete classes
    $circle = new Circle('red', 5);
    $square = new Square('blue', 4);
?>
<h2> Circle Area: <?php echo $circle->calculateArea(); ?></h2>
<h2> Square Area: <?php echo $square->calculateArea(); ?> </h2>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>Circle Area: 78.539816339745</h2>
                <h2>Square Area: 16</h2>
            </Result>
            <div className="mital"> متال 2 : </div>
            <CodeHighlighter  code={`<?php
    abstract class Car {
        public $name;
        public function __construct($name) {
            $this->name = $name;
        }
        abstract public function intro() : string; 
    }

    class Audi extends Car {
        public function intro() : string {
            return "Choose German quality! I'm an $this->name!"; 
        }
    }

    class Volvo extends Car {
        public function intro() : string {
            return "Proud to be Swedish! I'm a $this->name!"; 
        }
    }

    class Citroen extends Car {
        public function intro() : string {
            return "French extravagance! I'm a $this->name!"; 
        }
    }

    $audi = new audi("Audi");
    echo "<h2>" . $audi->intro() . "</h2>";
  
    $volvo = new volvo("Volvo");
    echo "<h2>" . $volvo->intro() . "</h2>";
    
    $citroen = new citroen("Citroen");
    echo "<h2>" . $citroen->intro() . "</h2>";
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>Choose German quality! I'm an Audi!</h2>
                <h2>Proud to be Swedish! I'm a Volvo!</h2>
                <h2>French extravagance! I'm a Citroen!</h2>
            </Result>
        </article>
    </>
    )
}