import { CodeHighlighter } from "../../../path";

export default function DataTypes(){
    return(
    <>
        <h1 className="heading-style"> PHP Data Types </h1>
        <article className="mt-5">
            <p className="style_divv mt-5">
                <b>PHP</b> تدعم العديد من أنواع البيانات التي تتيح لك تخزين وتلاعب بأنواع مختلفة من المعلومات. فيما يلي أهم أنواع البيانات في <b>PHP</b>
            </p>
            <h2 className="title-h2">1 - الأعداد الصحيحة</h2>
            <p className="style_divv">
                <ul><li>تُمثل الأرقام الصحيحة بدون نقطة عشرية.</li></ul>
                <CodeHighlighter  code={`$num = 42;`} language="php" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h2 className="title-h2">2 - الأعداد العائمة (Floats أو Doubles)</h2>
            <p className="style_divv">
                <ul><li>تُمثل الأرقام بنقطة عشرية أو في شكل علمي.</li></ul>
                <CodeHighlighter  code={`$floatNum = 3.14;`} language="php" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h2 className="title-h2">3 - السلاسل النصية (Strings)</h2>
            <p className="style_divv">
                <ul><li>تُمثل سلاسل من الأحرف.</li></ul>
                <CodeHighlighter  code={`$text = "Hello, World!";`} language="php" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h2 className="title-h2">4 - القيم البولية (Booleans)</h2>
            <p className="style_divv">
                <ul><li>تُمثل قيم <b>true</b> أو <b>false</b>.</li></ul>
                <CodeHighlighter  code={`$isTrue = true;`} language="php" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h2 className="title-h2">5 - المصفوفات (Arrays)</h2>
            <p className="style_divv">
                <ul><li>تحمل قيمًا متعددة كقائمة مرتبة.</li></ul>
                <CodeHighlighter  code={`$colors = array("red", "green", "blue");`} language="php" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h2 className="title-h2">6 - الكائنات (Objects)</h2>
            <p className="style_divv">
                <ul><li>حالات من فئات محددة من قبل المستخدم.</li></ul>
                <CodeHighlighter  code={`class Person {
    public $name;
    public $age;
}

$person = new Person();
$person->name = "John";
$person->age = 30;`} language="php" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h2 className="title-h2">7 - NULL</h2>
            <p className="style_divv">
                <ul><li>تُمثل متغيرًا بدون قيمة أو مؤشرًا فارغًا.</li></ul>
                <CodeHighlighter  code={`$var = null;`} language="php" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h2 className="title-h2">8 - المورد (Resource)</h2>
            <p className="style_divv">
                <ul><li>متغير خاص يحمل مرجعًا إلى مورد خارجي (على سبيل المثال: مقبض ملف).</li></ul>
                <CodeHighlighter  code={`$file = fopen("example.txt", "r");`} language="php" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h2 className="title-h2">9 - القابلة للاستدعاء (Callable)</h2>
            <p className="style_divv">
                <ul><li>تُمثل كيانًا "قابلًا للاستدعاء" ، عادةً دالة أو طريقة.</li></ul>
                <CodeHighlighter  code={`function myFunction() {
    echo "Hello from myFunction!";
}

$callableFunction = 'myFunction';
$callableFunction();  // Calls the function`} language="php" addclassName="mt-3 mb-3" copie={true}/>
            </p>
        </article>
    </>
    )
}