import { CodeHighlighter } from "../../../path";

export default function Variables(props){
    return(
    <>
        <h1 className="heading-style"> PHP Variables </h1>
        <article className="mt-5">
            <h2 className="title-h2 mt-5">1 - تعريف المتغير </h2>
            <p className="style_divv">
                <ul>
                    <li>تبدأ المتغيرات في <b>PHP</b> برمز الدولار <b>$</b> .</li>
                    <li>أسماء المتغيرات حساسة لحالة الأحرف.</li>
                    <li>يجب أن تبدأ أسماء المتغيرات بحرف أو شرطة سفلية، تليها أحرف، أرقام، أو شرطات سفلية.</li>
                </ul>
            </p>
            <CodeHighlighter  code={`<?php
$name = "John";
$age = 25;
$_count = 10;
$myVar123 = "Hello";
?>`} language="php" addclassName="mt-3 mb-3" copie={true}/>
            <h2 className="title-h2">2 - أنواع المتغيرات</h2>
            <p className="style_divv">
                <ul>
                    <li><b>PHP</b> لديها نوعية فتة، مما يعني أنه لا يلزمك تعريف نوع البيانات بشكل صريح للمتغير.</li>
                    <li>يتم تحديد أنواع المتغيرات بناءً على القيمة التي تحملها.</li>
                </ul>
            </p>
            <CodeHighlighter  code={`<?php
$stringVar = "Hello";
$integerVar = 42;
$floatVar = 3.14;
$boolVar = true;
$arrayVar = [1, 2, 3];
?>`} language="php" addclassName="mt-3 mb-3" copie={true}/>
            <h2 className="title-h2">3 - نطاق المتغير </h2>
            <p className="style_divv">
                <ul>
                    <li>يمكن أن تكون للمتغيرات نطاقات مختلفة، مثل المحلي أو العام.</li>
                    <li>المتغيرات التي تم تعريفها داخل وظيفة عادةً ما تكون محلية لتلك الوظيفة ما لم يتم تعريفها كـ <b>global</b> .</li>
                </ul>
            </p>
            <CodeHighlighter  code={`<?php
$globalVar = "I'm global"; // Global variable

function exampleFunction() {
    $localVar = "I'm local"; // Local variable
    global $globalVar; // Accessing global variable inside function
}
?>`} language="php" addclassName="mt-3 mb-3" copie={true}/>
            <h2 className="title-h2">4 - إخراج المتغير </h2>
            <p className="style_divv">
                <ul><li>يمكنك إخراج قيمة المتغير باستخدام <b>echo</b> أو <b>print</b> .</li></ul>
            </p>
            <CodeHighlighter  code={`<?php
$name = "Reda Eskouni";
echo $name; // Output: Reda Eskouni
?>`} language="php" addclassName="mt-3 mb-3" copie={true}/>
            <h2 className="title-h2">5 - الدمج</h2>
            <p className="style_divv">
                <ul><li>يمكنك دمج المتغيرات مع السلاسل باستخدام العامل .</li></ul>
            </p>
            <CodeHighlighter  code={`<?php
$firstName = "Reda";
$lastName = "Eskouni";
echo $firstName . " " . $lastName; // Output: Reda Eskouni
?>`} language="php" addclassName="mt-3 mb-3" copie={true}/>
            <h2 className="title-h2">6 - تضمين المتغير داخل السلسلة </h2>
            <p className="style_divv">
                <ul><li>داخل السلاسل المزدوجة، يمكنك تضمين قيم المتغيرات مباشرة.</li></ul>
            </p>
            <CodeHighlighter  code={`<?php
$name = "John";
echo "Hello, $name!"; // Output: Hello, John!
?>`} language="php" addclassName="mt-3 mb-3" copie={true}/>
            <p className="fs-5">
                هذه بعض الجوانب الأساسية للعمل مع المتغيرات في <b>PHP</b>. المتغيرات تلعب دورًا حاسمًا في تخزين وتلاعب البيانات داخل نصوص <b>PHP</b> الخاصة بك.
            </p>
        </article>
    </>
    )
}