import { CodeHighlighter , CodeCommand , Result} from "../../path";

export default function Switch(props){
    return(
    <>
        <h1 className="heading-style"> PHP Switch </h1>
        <article className="mt-5">
            <p className="style_divv">
                في <b>PHP</b>، تستخدم تعليمة <b>switch</b> لتحديد كتلة من الشيفرة التي تريد تنفيذها على أساس قيمة متغير محددة. إليك مثال بسيط على كيفية استخدام تعليمة <b>switch</b>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    $day = "Monday";

    switch ($day) {
        case "Monday":
            echo "<h2>It's the start of the week.</h2>";
            break;
        case "Friday":
            echo "<h2>It's the end of the week.</h2>";
            break;
        default:
            echo "<h2>It's a regular day.</h2>";
    }
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>It's the start of the week.</h2>
            </Result>
        </article>
    </>
    )
}