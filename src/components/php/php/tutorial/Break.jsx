import { CodeHighlighter , CodeCommand } from "../../../path";

export default function Break(props){
    return(
    <>
        <h1 className="heading-style"> PHP Break </h1>
        <article className="mt-5">
            <p className="style_divv mt-5">
                يمكن استخدام عبارة <b>break</b> للقفز من أنواع مختلفة من الحلقات.
            </p>

            <h2 className="title-h2">1 - break في الحلقة for </h2>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    for ($i = 0; $i < 10; $i++) {
        echo $i . "\\n";
        if ($i === 5) {
            break; 
        }
    }
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand>
                C:\xampp\htdocs\php-test{">"} <span className="text-success">php index.php</span><br/>
                0<br/>1<br/>2<br/>3<br/>4<br/>5
            </CodeCommand>

            <h2 className="title-h2">2 - break في الحلقة while  </h2>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    $i = 0;
    while ($i < 10) {
        echo $i . "\\n";
        $i++;
        if ($i === 5) {
            break; 
        }
    }
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand>
                C:\xampp\htdocs\php-test{">"} <span className="text-success">php index.php</span><br/>
                0<br/>1<br/>2<br/>3<br/>4
            </CodeCommand>

            <h2 className="title-h2">3 - break في الحلقة do-while </h2>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    $i = 0;
    do {
        echo $i . "\\n";
        $i++;
        if ($i === 5) {
            break; 
        }
    } while ($i < 10);
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand>
                C:\xampp\htdocs\php-test{">"} <span className="text-success">php index.php</span><br/>
                0<br/>1<br/>2<br/>3<br/>4
            </CodeCommand>
            
            <h2 className="title-h2">4 - break في الحلقة foreach  </h2>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    $colors = array("red", "green", "blue", "yellow");

    foreach ($colors as $x) {
      if ($x == "blue") break;
      echo "$x \\n";
    }
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand>
                C:\xampp\htdocs\php-test{">"} <span className="text-success">php index.php</span><br/>
                red<br/>green
            </CodeCommand>
        </article>
    </>
    )
}