import { CodeHighlighter  , Result} from "../../../path";

export default function Traits(props){
    return(
    <>
        <h1 className="heading-style"> PHP Traits </h1>
        <article className="mt-5">
            <p className="style_divv mt-5">
                تدعم لغة <b>PHP</b> الوراثة الفردية فقط: يمكن للفئة الفرعية أن ترث من والد واحد فقط.<br/><br/>
                تُستخدم السمات للإعلان عن الأساليب التي يمكن استخدامها في فئات متعددة. يمكن أن تحتوي السمات على طرق وأساليب مجردة يمكن استخدامها في فئات متعددة، ويمكن أن تحتوي الأساليب على أي معدّل وصول <b>(public, private, protected)</b>.<br/><br/>
                يتم الإعلان عن السمات باستخدام الكلمة الأساسية <b>trait</b>.
            </p>
            <div className="mital"> متال 1 : </div>
            <CodeHighlighter  code={`<?php
    trait message1 {
        public function helloWord() {
            echo "<h2> Hello Word </h2>";
        }
    }

    class Welcome {
        use message1;
    }

    $obj = new Welcome();
    $obj->helloWord();
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>Hello Word</h2>
            </Result>
            <div className="mital"> متال 2: </div>
            <CodeHighlighter  code={`<?php
    trait AnimalTrait {
        public function eat(): void {
            echo "<h2 style='color:green'>{$this->name} is eating.</h2>";
        }
        public function sleep(): void {
            echo "<h2 style='color:green'> {$this->name} is sleeping.</h2>";
        }
    }


    class Cat {
        use AnimalTrait;
        private string $name;
        public function __construct(string $name) {
          $this->name = $name;
        }
      
        public function meow(): void {
          echo "<h2 style='color:red'> {$this->name} says meow. </h2>" ;
        }
    }

    class Dog {
        use AnimalTrait;
        private string $name;
        public function __construct(string $name) {
            $this->name = $name;
        }
        public function bark(): void {
            echo "<h2 style='color:red'> {$this->name} says woof. </h2>";
        }
    }
      

    $cat = new Cat("Kitty");
    $cat->eat();
    $cat->sleep();
    $cat->meow();

    $dog = new Dog("Sparky");
    $dog->eat();
    $dog->sleep();
    $dog->bark();  

?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2 style={{color:"green"}}>Kitty is eating.</h2>
                <h2 style={{color:"green"}}>Kitty is sleeping.</h2>
                <h2 style={{color:"red"}}>Kitty says meow.</h2>
                <h2 style={{color:"green"}}>Sparky is eating.</h2>
                <h2 style={{color:"green"}}>Sparky is sleeping.</h2>
                <h2 style={{color:"red"}}>Sparky says woof.</h2>
            </Result>
        </article>
    </>
    )
}