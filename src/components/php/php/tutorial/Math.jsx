import { CodeHighlighter , Result} from "../../../path";

export default function Math(props){
    return(
    <>
        <h1 className="heading-style"> PHP Math </h1>
        <article className="mt-5">
            <p className="style_divv mt-5">
                في <b>PHP</b>، هناك مجموعة من الدوال الرياضية المتوفرة للقيام بالعديد من العمليات الرياضية والحسابات .
            </p>
            <h2 className="title-h2">1 - <bdi>abs()</bdi> - قيمة مطلقة</h2>
            <p className="style_divv">
                ترجع قيمة مطلقة للعدد المعطى
                <CodeHighlighter  code={`$result = abs(-5);    // $result = 5`} language="php" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h2 className="title-h2">2 - <bdi>sqrt()</bdi> - جذر تربيعي </h2>
            <p className="style_divv">
                ترجع القيمة الإيجابية للجذر التربيعي للعدد المعطى.
                <CodeHighlighter  code={`$result = sqrt(16);   // $result =  4`} language="php" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h2 className="title-h2">3 - <bdi>pow()</bdi> - أس </h2>
            <p className="style_divv">
                ترجع قيمة العدد المعطى مرفوعاً إلى قوة محددة.
                <CodeHighlighter  code={`$result = pow(2, 3);   // $result = 8`} language="php" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h2 className="title-h2">4 - <bdi>round()</bdi> - تقريب إلى أقرب عدد صحيح </h2>
            <p className="style_divv">
                تقرب العدد المعطى إلى أقرب عدد صحيح.
                <CodeHighlighter  code={`$result = round(3.75);  // $result = 4`} language="php" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h2 className="title-h2">5 - <bdi>ceil()</bdi> - تقريب لأقرب عدد صحيح كبير</h2>
            <p className="style_divv">
                تقرب العدد المعطى للعدد الصحيح الذي يكون أكبر منه.
                <CodeHighlighter  code={`$result = ceil(3.1);   // $result = 4`} language="php" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h2 className="title-h2">6 - <bdi>floor()</bdi> - تقريب لأقرب عدد صحيح صغير </h2>
            <p className="style_divv">
                تقرب العدد المعطى للعدد الصحيح الذي يكون أصغر منه.
                <CodeHighlighter  code={`$result = floor(3.9);  // $result = 3`} language="php" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h2 className="title-h2">7 - <bdi>rand()</bdi> - رقم عشوائي </h2>
            <p className="style_divv">
                توليد رقم عشوائي.
                <CodeHighlighter  code={`$result = rand(1, 10);  //Generates a random number between 1 and 10`} language="php" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h2 className="title-h2">8 - <bdi>min()</bdi> - الحد الأدنى </h2>
            <p className="style_divv">
                ترجع القيمة الصغرى من بين القيم المعطاة.
                <CodeHighlighter  code={`$resultMin = min(5, 3, 8);  //$resultMin = 3`} language="php" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h2 className="title-h2">9 - <bdi>max()</bdi> - الحد الأعلى </h2>
            <p className="style_divv">
                ترجع القيمة الكبرى من بين القيم المعطاة.
                <CodeHighlighter  code={`$resultMax = max(5, 3, 8);  // $resultMax = 8`} language="php" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    $arr = array(3,9,1,12,-22);
?>
<h2 style="color:red">  <?php echo min($arr); ?>  </h2>
<h2 style="color:green">  <?php echo max($arr); ?>  </h2>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2 style={{color:"red"}}>-22</h2>
                <h2 style={{color:"green"}}>12</h2>
            </Result>
        </article>
    </>
    )
}