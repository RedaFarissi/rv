import { CodeHighlighter } from "../../../path";

export default function Comments(){
    return(
    <>
        <h1 className="heading-style"> PHP Comments </h1>
        <article className="mt-5">
            <p className="style_divv mt-5">
                في <b>PHP</b>، يتم استخدام التعليقات لإضافة ملاحظات توضيحية داخل الشيفرة. يتم تجاهل التعليقات من قبل مترجم <b>PHP</b> وتعتبر وسيلة للمطورين لوثائق شيفرتهم البرمجية. هناك نوعان رئيسيان من التعليقات في <b>PHP</b> : التعليقات على سطر واحد والتعليقات متعددة الأسطر.<br/><br/>
                التعليقات مفيدة لشرح هدف الشيفرة، وتوفير السياق، أو تعطيل خطوط محددة مؤقتًا خلال عمليات الاختبار أو التصحيح. من الممارسات الجيدة استخدام التعليقات لجعل شيفرتك أكثر قراءةً وصيانةً.
            </p>
            <h2 className="title-h2">1 - تعليقات على سطر واحد .</h2>
            <p className="style_divv">
                <ul>
                    <li>  تبدأ التعليقات ذات السطر الواحد بـ //  </li>
                    <li> سيتم تجاهل أي نص بين // ونهاية السطر (لن يتم تنفيذه)</li>
                    <li> يمكنك أيضًا استخدام # للتعليقات ذات السطر الواحد، ولكن في هذا البرنامج التعليمي سوف نستخدم // </li>
                </ul>
            </p>
            <ul><li>تبدأ تعليقات على سطر واحد بـ // أو # وتمتد إلى نهاية السطر.</li></ul>
            <CodeHighlighter  code={`<?php
#This is a single-line comment
$variable = 42; // Another single-line comment
?>`} language="php" addclassName="mt-3 mb-3" copie={true}/>

            
            <h2 className="title-h2">2 - تعليقات متعددة الأسطر .</h2>
            <p className="style_divv">
                <ul>
                    <li>التعليقات متعددة الأسطر تبدأ بـ /* وتنتهي بـ */</li>
                    <li>سيتم تجاهل أي نص بين /* و */</li>    
                </ul>
            </p>
            <CodeHighlighter  code={`<?php
/*
   This is a multi-line comment
   It can span multiple lines
*/
$variable = 42;
?>
`} language="php" addclassName="mt-3 mb-3" copie={true}/>
        </article>
    </>
    )
}