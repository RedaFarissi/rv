import { CodeHighlighter , CodeCommand , Result} from "../../../path";

export default function DateAndTime(props){
    return(
    <>
        <h1 className="heading-style"> PHP Date and Time </h1>
        <article className="mt-5">
            <p className="style_divv">
                في <b>PHP</b>، يمكنك التعامل مع التواريخ والأوقات باستخدام وظيفة <bdi><b>date()</b></bdi> لتنسيق التواريخ ووظيفة <bdi><b>strtotime()</b></bdi> لتحليل سلاسل التواريخ. بالإضافة إلى ذلك، توفر <b>PHP</b> فئة <b>DateTime</b> لإجراء عمليات تلاعب متقدمة على التواريخ والأوقات.
            </p>
            <h2 className="title-h2">1 - التاريخ والوقت الحالي </h2>
            <CodeHighlighter  code={`<?php 
    $currentDateTime = date('Y-m-d H:i:s');
    echo $currentDateTime;
?>`} language="php" addclassName="mt-3 mb-3" copie={true}/>

            <h2 className="title-h2">2 - تنسيق تاريخ معين </h2>
            <CodeHighlighter  code={`<?php 
    $specificDate = strtotime('2024-02-26');
    $formattedDate = date('F j, Y', $specificDate);
    echo $formattedDate;        //February 26, 2024
?>`} language="php" addclassName="mt-3 mb-3" copie={true}/>

            <h2 className="title-h2">3 - إضافة و طرح الوقت </h2>
            <CodeHighlighter  code={`<?php 
    $dateTime = new DateTime('2024-02-20');
    echo "<h2>".$dateTime->format('Y-m-d')."</h2>";       //2024-02-20
?>
<br/><br/>
<?php 
    $dateTime->modify('+1 week');
    echo "<h2>" . $dateTime->format('Y-m-d') . "</h2>";     //2024-02-27
?>
<br/><br/>
<?php 
    $dateTime->modify('+1 day');
    echo "<h2>" . $dateTime->format('Y-m-d') . "</h2>";     //2024-02-28
?>`} language="php" addclassName="mt-3 mb-3" copie={true}/>
            
            <h2 className="title-h2">4 - استخدام فئة DateTime </h2>
            <CodeHighlighter  code={`<?php 
    $dateTime = new DateTime('2024-02-26');
    echo "<h2>". $dateTime->format('Y-m-d') ."</h2>";       //2024-02-26
?>
<br /><br />
<?php 
    $dateTime->modify('+1 day');
    echo "<h2>". $dateTime->format('Y-m-d') ."</h2>";   // 2024-02-27
?>`} language="php" addclassName="mt-3 mb-3" copie={true}/>
            
            <h2 className="title-h2">5 - التعامل مع المناطق الزمنية </h2>
            <CodeHighlighter  code={`<?php 
    $dateTime = new DateTime('2024-02-20 02:41:07', new DateTimeZone('UTC'));
    $dateTime->setTimezone(new DateTimeZone('America/New_York'));
    echo $dateTime->format('Y-m-d H:i:s');           //2024-02-19 21:41:07
?>`} language="php" addclassName="mt-3 mb-3" copie={true}/>
        </article>
    </>
    )
}