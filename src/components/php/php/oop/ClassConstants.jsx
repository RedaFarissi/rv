import { CodeHighlighter , CodeCommand , Result} from "../../../path";

export default function ClassConstants(props){
    return(
    <>
        <h1 className="heading-style"> PHP Class Constants </h1>
        <article className="mt-5">
            <p className="style_divv">
                في <b>PHP</b> ، تمثل الثوابت في الفئة قيمًا ترتبط بفئة معينة وتظل ثابتة طوال تنفيذ البرنامج النصي. على عكس خصائص الفئة، لا يمكن تغيير الثوابت في الفئة بمجرد تعريفها. يتم تعريفها باستخدام كلمة <b>const</b> داخل فئة.
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php 
    class MyClass {
        const PI = 3.14;
        const MAX_VALUE = 100;

        public function printConstants() {
            echo "PI: " . self::PI . "<br />";
            echo "<h3> Max Value: " . self::MAX_VALUE . "</h3>";
        }
    }

    echo "<h2>" . MyClass::PI . "</h2>"; 

    $obj = new MyClass();
    $obj->printConstants();
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>3.14</h2>
                PI: 3.14
                <h3>Max Value: 100</h3>
            </Result>
            <ul><li>في المثال أعلاه، <b>PI</b> و <b>MAX_VALUE</b> هما ثوابت في الفئة. يتم الوصول إليها باستخدام مشغل نطاق الفئة <kbd>::</kbd> مع اسم الفئة. الثوابت في الفئة تكون مفيدة لتحديد القيم التي ترتبط بفئة ولا يجب تغييرها خلال تنفيذ البرنامج النصي.</li></ul>
        </article>
    </>
    )
}