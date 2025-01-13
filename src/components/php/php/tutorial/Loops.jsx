import { CodeHighlighter , CodeCommand } from "../../../path";

export default function Loops(props){
    return(
    <>
        <h1 className="heading-style"> PHP Loops </h1>
        <article className="mt-5">
            <p className="style_divv mt-5">
                في <b>PHP</b>، هناك عدة أنواع من الحلقات <b>(Loops)</b> التي يمكنك استخدامها لتكرار تنفيذ قطعة من الشيفرة. الأنواع الرئيسية للحلقات في <b>PHP</b>
            </p>
            <h2 className="title-h2">1 - حلقة for </h2>
            <p className="style_divv">
                تُستخدم حلقة <b>for</b> لتكرار تنفيذ قطعة من الشيفرة لعدد محدد من المر
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    for ($i = 0; $i < 5; $i++) {
        echo $i . "\\n";
    }
?>`} language="php" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand>
                C:\xampp\htdocs\php-test{">"} <span className="text-success">php index.php</span><br/>
                0<br/>
                1<br/>
                2<br/>
                3<br/>
                4<br/>
            </CodeCommand>
            <h2 className="title-h2">2 - حلقة while </h2>
            <p className="style_divv">
                تستخدم حلقة <b>while</b> لتكرار تنفيذ قطعة من الشيفرة طالما تظل الشرط صحيحًا.
            </p>
            <CodeHighlighter  code={`<?php
    $i = 0;
    while ($i < 5) {
        echo $i . "\\n";
        $i++;
    }
?>`} language="php" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand>
                C:\xampp\htdocs\php-test{">"} <span className="text-success">php index.php</span><br/>
                0<br/>1<br/>2<br/>3<br/>4
            </CodeCommand>
            <h2 className="title-h2">3 - حلقة do-while </h2>
            <p className="style_divv">
                تستخدم حلقة <b>do...while</b> لتنفيذ قطعة من الشيفرة مرة واحدة على الأقل، ثم تستمر في التكرار طالما يظل الشرط صحيحًا.
            </p>
            <CodeHighlighter  code={`<?php
    $i = 0;
    do {
        echo $i . "\\n";
        $i++;
    } while ($i < 5);
?>`} language="php" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand>
                C:\xampp\htdocs\php-test{">"} <span className="text-success">php index.php</span><br/>
                0<br/>1<br/>2<br/>3<br/>4
            </CodeCommand>
            <h2 className="title-h2">4 - foreach </h2>
            <p className="style_divv">
                تُستخدم حلقة <b>foreach</b> لتكرار عبر عناصر مصفوفة.
            </p>
            <CodeHighlighter  code={`<?php
    $colors = array("red", "green", "blue");

    foreach ($colors as $color) {
        echo $color . "\\n";
    }
?>`} language="php" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand>
                C:\xampp\htdocs\php-test{">"} <span className="text-success">php index.php</span><br/>
                red<br/>green<br/>blue
            </CodeCommand>
        </article>
    </>
    )
}