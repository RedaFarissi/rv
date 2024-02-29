import { CodeHighlighter } from "../../../path";

export default function EchoPrint(){
    return(
    <>
        <h1 className="heading-style"> PHP Echo and Print </h1>
        <article className="mt-5">
            <p className="style_divv mt-5">
                في <b>PHP</b> ، يتم استخدام كل من <b>echo</b> و <b>print</b> كبنى اللغة لإخراج البيانات إلى المتصفح أو العميل. غالباً ما يتم استخدامهما لعرض المعلومات أو المتغيرات أو محتوى <b>HTML</b> داخل صفحة الويب. بينما يقدمون أغراضًا مماثلة ، هناك بعض الفروق بينهما
            </p>
            <h2 className="title-h2">1 - الاستخدام </h2>
            <ul><li><b className="text-success">echo :</b> يمكن لـ <b>echo</b> أن يأخذ عدة معلمات ، ولا يحتوي على قيمة إرجاع. عادةً ما يكون أسرع من <b>print</b> . </li></ul>
            <CodeHighlighter  code={`echo "Hello, World!";`} language="php" addclassName="mt-3 mb-3" copie={true}/>
            <ul><li><b className="text-success">print:</b> يمكن لـ <b>print</b> أن يأخذ فقط وسيطًا واحدًا ، ويعيد دائمًا 1. إنها أبطأ قليلاً من <b>echo</b> . </li></ul>
            <CodeHighlighter  code={`print "Hello, World!";`} language="php" addclassName="mt-3 mb-3" copie={true}/>
            <h2 className="title-h2">2 - قيمة الإرجاع </h2>
            <ul>
                <li><b className="text-success">echo:</b> لا توجد قيمة إرجاع.</li>
                <li><b className="text-success">print:</b> دائمًا ما تعيد 1 ، لذلك يمكن استخدامها في التعابير.</li>
            </ul>
            <CodeHighlighter  code={`$result = print "Hello";
// $result will be 1`} language="php" addclassName="mt-3 mb-3" copie={true}/>
            <h2 className="title-h2">3 - الاستخدام في HTML</h2>
            <ul><li>يمكن استخدام كل من <b>echo</b> و <b>print</b> لإخراج محتوى <b>HTML</b>. ومع ذلك ، يُستخدم <b>echo</b> عادةً بشكل أكثر شيوعًا لهذا الغرض.</li></ul>
            <CodeHighlighter  code={`echo "<h1>Welcome to PHP</h1>";`} language="php" addclassName="mt-3 mb-3" copie={true}/>
            <h2 className="title-h2">4 - الأداء </h2>
            <ul><li>بشكل عام ، يُعتبر <b>echo</b> أسرع قليلاً من <b>print</b> لأنه لا يحتوي على قيمة إرجاع. ومع ذلك ، فإن الفارق في الأداء عادةً ما يكون ضئيلًا.</li></ul>
            <CodeHighlighter  code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP TEST</title>
</head>
<body>
    <?php
        $start = microtime(true);
        for ($i = 0; $i < 100000; $i++) {
            echo "Hello <br/>";
        }
        $end = microtime(true);
        echo "time Echo: " . ($end - $start) . " ثانية";
        
        $start = microtime(true);
        for ($i = 0; $i < 100000; $i++) {
            print "Hello <br/>";
        }
        $end = microtime(true);
        echo "time Print: " . ($end - $start) . " ثانية";
    ?>
</body>
</html>`} language="php" addclassName="mt-3 mb-3" copie={true}/>
        </article>
    </>
    )
}