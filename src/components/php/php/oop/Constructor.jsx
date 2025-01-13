import { CodeHighlighter  , Result} from "../../../path";

export default function Constructor(props){
    return(
    <>
        <h1 className="heading-style"> PHP Constructor </h1>
        <article className="mt-5">
            <p className="style_divv mt-5">
                يتيح لك المُنشئ تهيئة <b>construct</b> خصائص الكائن عند إنشاء الكائن.<br/><br/>
                إذا قمت بإنشاء دالة <bdi><b>__construct()</b></bdi>، فستستدعي <b>PHP</b> هذه الوظيفة تلقائيًا عندما تقوم بإنشاء كائن من فئة.<br/><br/>
                لاحظ أن دالة البناء تبدأ بشرطتين سفليتين <kbd>__</kbd>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php 
    // Define a basic class named 'Person'
    class Person {
        // Properties (attributes)
        public $name;
        public $age;
        public $gender;

        // Constructor method
        public function __construct($name, $age, $gender) {
            $this->name = $name;
            $this->age = $age;
            $this->gender = $gender;
        }

        // Method to display information about the person
        public function displayInfo() {
            echo "Name: {$this->name}, Age: {$this->age}, Gender: {$this->gender}";
        }
    }

    // Create an instance (object) of the 'Person' class
    $person1 = new Person("Reda Eskouni", 29 , "Male");
?>
<h2> Name : <?php echo $person1->name;  ?> </h2>
<h2> <?php echo $person1->displayInfo();  ?></h2>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>Name : Reda Eskouni</h2>
                <h2>Name: Reda Eskouni, Age: 29, Gender: Male</h2>
            </Result>
        </article>
    </>
    )
}