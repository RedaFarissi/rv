import { CodeHighlighter } from "../../path";

export default function Indentation(){
    return(
    <>
    <h1 className="heading-style heading-style-python-color"> Python Indentation</h1>
       
    <article className="mt-5">
        <p className="style_divv">
            في لغة البرمجة <b>Python</b>، المسافة الفارغة <b>(Whitespace)</b> تلعب دورًا هامًا في تنظيم الشيفرة وتحديد هيكليتها. إليك بعض الأمور المهمة التي يمكن فعلها باستخدام المسافة الفارغة في <b>Python</b> .
        </p>
        <h2 className="title-h2">1 - المسافات والتباعد .</h2>
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
        <h2 className="title-h2">2 - تحديد نهاية السطر .</h2>
        <p className="style_divv">
            نهاية السطر في <b>Python</b> تُعبر عن نهاية التعليمة، ولا يحتاج السطر إلى فاصل منفصل (مثل في لغات أخرى).
        </p>
    </article>
    </>
    )
}