import { CodeHighlighter  , Result} from "../../../path";

export default function Destructor(props){
    return(
    <>
        <h1 className="heading-style"> PHP Destructor </h1>
        <article className="mt-5">
            <p className="style_divv mt-5">
                يتم استدعاء المدمر <b>(destructor)</b> عندما يتم تدمير الكائن أو إيقاف البرنامج النصي أو الخروج منه.<br/><br/>
                إذا قمت بإنشاء دالة <bdi><b>__destruct()</b></bdi>، فستستدعي <b>PHP</b> هذه الوظيفة تلقائيًا في نهاية البرنامج النصي.<br/><br/>
                لاحظ أن وظيفة التدمير تبدأ بشرطتين سفليتين <kbd>__</kbd>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    class Person {
        public $name;
        public $age;

        function __construct($name,$age) {
            $this->name = $name;
            $this->age = $age;
        }
        function __destruct() {
            echo "<div style='border: 2px solid red; margin: 9px'>
                <h2 style='color:red'> Destruct </h2>
                <ul>
                    <li> name {$this->name} . </li>
                    <li> age {$this->age} . </li>
                </ul>
            </div>";
        }
        function getName() {
            echo "<h2 style='color:green'>The name is {$this->name}.<h2>";
        }
    }

    $obj1 = new Person("Reda Eskouni",28);
    $obj2 = new Person("Amal El",25);
    $obj3 = new Person("Achraf El",28);
    
    $obj1->getName();
    $obj2->getName();
    $obj3->getName();
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2 style={{color:"green"}}> The name is Reda Eskouni. </h2>
                <h2 style={{color:"green"}}> The name is Amal El. </h2>
                <h2 style={{color:"green"}}> The name is Achraf El. </h2>
                <br />
                <div style={{border: "2px solid red", margin: "9px"}}>
                    <h2 style={{color:'red'}}> Destruct </h2>
                    <ul>
                        <li> name Achraf El  . </li>
                        <li> age 28 . </li>
                    </ul>
                </div>
                <div style={{border: "2px solid red", margin: "9px"}}>
                    <h2 style={{color:'red'}}> Destruct </h2>
                    <ul>
                        <li> name Amal El  . </li>
                        <li> age 25 . </li>
                    </ul>
                </div>
                <div style={{border: "2px solid red", margin: "9px"}}>
                    <h2 style={{color:'red'}}> Destruct </h2>
                    <ul>
                        <li> name Reda Eskouni  . </li>
                        <li> age 28 . </li>
                    </ul>
                </div>
            </Result>
        </article>
    </>
    )
}