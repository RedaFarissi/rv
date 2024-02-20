import { CodeHighlighter , CodeCommand , Result} from "../../path";

export default function Constants(props){
    return(
    <>
        <h1 className="heading-style"> PHP Constants </h1>
        <article className="mt-5">
            <p className="style_divv">
                في <b>PHP</b> ، تشبه الثوابت المتغيرات ، ولكن بمجرد تعريفها ، لا يمكن تغييرها أو إعادة تعريفها. تكون الثوابت مفيدة لتخزين القيم التي يجب عدم تغييرها أثناء تنفيذ البرنامج النصي. توفر وسيلة لإعطاء أسماء للقيم وجعل الشيفرة البرمجية أكثر قراءة.<br/>
                إليك كيفية تعريف الثوابت في <b>PHP</b>:
                <CodeHighlighter  code={`<?php
    // Define a constant
    define("PI", 3.14);

    // Use the constant
    echo PI; // Outputs: 3.14
?>`} language="php" addclassName="mt-3 mb-3" copie={true}/>   
                في المثال أعلاه ، نعرف ثابتًا باسم <b>"PI"</b> بقيمة <b>3.14</b> بمجرد تعريفه ، يمكنك استخدام هذا الثابت في جميع أنحاء النصي ، وتظل قيمته ثابتة.<br/><br/>
                بعض النقاط المهمة حول ثوابت <b>PHP</b>:<br/>
                <ol>
                    <li>الثوابت حساسة لحالة الأحرف افتراضيًا.</li>
                    <li>بمجرد التعريف ، لا يمكن إعادة تعريف الثوابت أو إلغاء تعريفها.</li>
                    <li>يمكنك استخدام الكلمة الرئيسية <b>const</b> لتعريف الثوابت داخل الفصول ، حيث يتم استخدام <b>define</b> للثوابت العامة.</li>
                    <li>يمكن للثوابت أن تحتوي على أنواع البيانات الجزئية (الأعداد الصحيحة والأعداد العشرية والسلاسل النصية والقيم البولية) ، ولكن لا يمكنها استيعاب المصفوفات أو الكائنات.</li>
                </ol>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    // Define a constant within a class
    class MyClass {
        const MY_CONSTANT = "Hello, World!";
    }

    // Access the constant
    echo MyClass::MY_CONSTANT; // Outputs: Hello, World!
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                Hello, World!
            </Result>
        </article>
    </>
    )
}

/*
    <div className="mital"> متال : </div>
    <CodeHighlighter  code={``} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
    <Result title="" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
    </Result>
*/