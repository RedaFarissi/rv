import { CodeHighlighter } from "../../path";

export default function Indentation(){
    return(
    <article className="mt-5">
        <h2 id="indentation" className="title-h2"> المسافة الفارغة في بايثون  .</h2>
        <p className="style_divv">
            في لغة البرمجة <b>Python</b>، المسافة الفارغة <b>(Whitespace)</b> تلعب دورًا هامًا في تنظيم الشيفرة وتحديد هيكليتها. إليك بعض الأمور المهمة التي يمكن فعلها باستخدام المسافة الفارغة في <b>Python</b> .
        </p>
        <h3 className="title-h3">1 - المسافات والتباعد .</h3>
        <p className="style_divv">
            المسافات في بداية السطر <b>(indentation)</b> تُستخدم لتحديد الكتل البرمجية. يتوجب أن تكون جميع الأسطر في نطاق <b>(block)</b> معينة متداخلة بنفس عدد المسافات أو الأقواس التي تبدأ في السطر الذي يسبقها. 
            <CodeHighlighter code={`if True:
print("This is indented.")`} language="python" addclassName="mt-3 mb-3" copie={true}/>
        </p>
        <div className="mital">متال : </div>
        <CodeHighlighter code={`if 5 > 2:
print("Five is greater than two!")`} language="python" addclassName="mt-3 mb-3" copie={true}/>

        <div  className="alert alert-danger p-1 py-2">
            <ul><li>سوف تعطيك بايثون خطأً إذا تخطيت المسافة البادئة</li></ul>
            <CodeHighlighter code={`if 5 > 2:
print("Five is greater than two!")`} language="python" addclassName="mt-3 mb-3" copie={true}/>
        </div>
        <h3 className="title-h3">2 - تحديد نهاية السطر .</h3>
        <p className="style_divv">
            نهاية السطر في <b>Python</b> تُعبر عن نهاية التعليمة، ولا يحتاج السطر إلى فاصل منفصل (مثل في لغات أخرى).
        </p>
    </article>
    )
}