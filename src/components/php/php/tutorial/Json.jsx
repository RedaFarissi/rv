import { CodeHighlighter , CodeCommand , Result} from "../../../path";

export default function Json(props){
    return(
    <>
        <h1 className="heading-style"> PHP JSON </h1>
        <article className="mt-5">
            <p className="style_divv">
                يرمز <b>JSON</b> إلى <b>JavaScript Object Notation</b>، وهو عبارة عن صيغة لتخزين البيانات وتبادلها.<br/><br/>
                نظرًا لأن تنسيق <b>JSON</b> هو تنسيق قائم على النص، فيمكن إرساله بسهولة من وإلى الخادم واستخدامه كتنسيق بيانات بواسطة أي لغة برمجة.
            </p>
            <h2 className="title-h2">1 - PHP و JSON</h2>
            <p className="style_divv">
                لدى <b>PHP</b> بعض الوظائف المضمنة للتعامل مع <b>JSON</b>.<br/><br/>
                أولاً، سننظر في الوظيفتين التاليتين:
                <ul dir="ltr" className="mt-2">
                    <li><bdi><b>json_encode()</b></bdi></li>
                    <li><bdi><b>json_decode()</b></bdi></li>
                </ul>
            </p>
            <h2 className="title-h2">2 - <bdi>json_encode()</bdi> </h2>
            <p className="style_divv">
                الدالة <bdi><b>json_encode()</b></bdi> في <b>PHP</b> تُستخدم لتحويل هيكل بيانات <b>PHP</b> (مثل مصفوفة أو كائن) إلى تمثيل <b>JSON</b> لهذا الهيكل. تأخذ هذه الدالة بيانات <b>PHP</b> كمدخلات وتعيد سلسلة <b>JSON</b> المشفرة.
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php 
    $data = array(
        "name" => "Reda Eskouni",
        "age" => 28,
        "city" => "Sidi Slimane"
    );

    $jsonString = json_encode($data);
    echo $jsonString;
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <span className="text-secondary">// 20240227031741 </span><br/>
                <span className="text-secondary">// http://localhost/php-test/index.php</span><br/>
                <br/>
                <span className="text-secondary">{"{"}</span><br/>
                 &nbsp; &nbsp; "name": <span className="text-success">"Reda Eskouni"</span>,<br/>
                 &nbsp; &nbsp; "age": <span style={{color:"#905"}}>28</span> ,<br/>
                 &nbsp; &nbsp; "city": <span className="text-success">"Sidi Slimane"</span><br/>
                <span className="text-secondary">{"}"}</span><br/>
            </Result>
            <h2 className="title-h2">3 - <bdi>json_decode()</bdi> </h2>
            <p className="style_divv">
                تقوم الدالة <bdi><b>json_decode()</b></bdi> بإرجاع كائن بشكل افتراضي. تحتوي الدالة <bdi><b>json_decode()</b></bdi> على معلمة ثانية، وعند ضبطها على القيمة <b>true</b>، يتم فك تشفير كائنات <b>JSON</b> إلى صفائف ترابطية.
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php 
    $jsonobj = '{"name":"Reda Eskouni", "age":28, "city":"Sidi Slimane"}';

    $arr = json_decode($jsonobj, true);

    echo "<h2>" . $arr['name'] . "</h2>";
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>Reda Eskouni</h2>
            </Result>
        </article>
    </>
    )
}