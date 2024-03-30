import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Cookie(){
    const codeExemple1= { 
    code: `      <h2 id="result"></h2>
      
     <script src="./index.js"></script>`,
    script:`let a = document.cookie = "user_name = Reda Eskouni; age = 25ans;"
document.getElementById("result").innerHTML = a + "<br>"
document.getElementById("result").innerHTML += \`<b>\${typeof(a)}</b>\``
    }
    const codeExemple2= { 
    code: `      <h2 id="result"></h2>
      
     <script src="./index.js"></script>`,
    script:`const result = document.getElementById("result")
let a = document.cookie = "user_name = Reda Eskouni; age = 25ans;"

result.innerHTML = a + "<br/>"
result.innerHTML += \`<b>\${typeof(a)}</b><br/>\`

a = document.cookie = "user_name = Adil Toumi..; age = 18ans;"
result.innerHTML += a + "<br>"`
    }

    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript cookie</h1>
    <article className="mt-5">
        <h2 className="title-h2">1- What are Cookies</h2>
        <p className="style_divv">
             تتيح لك الخاصية <b>cookie</b> تخزين معلومات المستخدم في صفحات الويب. <br/>
            ملفات تعريف الارتباط هي بيانات مخزنة في ملفات نصية صغيرة على جهاز الكمبيوتر الخاص بك.<br/><br/>
            عندما يرسل خادم الويب صفحة ويب إلى متصفح ، يتم إيقاف الاتصال ، وينسى الخادم كل شيء عن المستخدم. <br/><br/> 
            تم اختراع <b>cookie</b> لحل مشكلة كيفية تذكر المعلومات عن المستخدم <br/>
            <ul>
                <li>عندما يزور المستخدم صفحة ويب ، يمكن تخزين اسمه في <b>cookie</b> .</li>
                <li>في المرة التالية التي يزور فيها المستخدم الصفحة ، "يتذكر"  <b>cookie</b> اسمه.</li>
            </ul>
            <div className="alert alert-danger">
                لن يعمل أي من الأمثلة أدناه إذا كان المستعرض الخاص بك به دعم <b>local cookies </b>  متوقفًا عن التشغيل.
            </div>
        </p>
    </article>
    <article>
        <h2 className="title-h2">2- Create a Cookie with JavaScript</h2>
        <p className="style_divv">
            يمكن لـ <b>JavaScript</b> إنشاء ملفات تعريف الارتباط وقراءتها وحذفها باستخدام خاصية <b>document.cookie</b>.<br/>
            باستخدام <b>JavaScript</b> ، يمكن إنشاء <b>cookie</b> مثل هذا.
            <CodeHighlighter code={`document.cookie = "user_name = Reda Eskouni"`} language="js" addClass="mt-3 mb-3" copie={true} />
            يمكنك أيضًا إضافة تاريخ انتهاء الصلاحية <small><bdi>(بتوقيت UTC)</bdi></small>. افتراضيًا ، يتم حذف <b>cookie</b> عند إغلاق المتصفح
            <CodeHighlighter code={`document.cookie = "user_name = Reda Eskouni; expires=Thu, 7 April 2022 7:37:00 UTC"`} language="js" addClass="mt-3 mb-3" copie={true} />
            باستخدام معلمة المسار ، يمكنك إخبار المتصفح بالمسار الذي ينتمي إليه <b>cookie</b> . بشكل افتراضي ، ينتمي <b>cookie</b> إلى الصفحة الحالية.
            <CodeHighlighter code={`document.cookie="user_name = Reda Eskouni; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/"`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
    </article>
    <article>
        <h2 className="title-h2">3- Read a Cookie with JavaScript</h2>
        <div className="style_divv">
            باستخدام <b>JavaScript</b> ، يمكن قراءة  <b>cookie</b> على هذا النحو :  
            <CodeHighlighter code={`let x = document.cookie`} language="js" addClass="mt-3 mb-3" copie={true} />            
            سيعيد document.cookie جميع  <b>cookie</b> في سلسلة واحدة <bdi> cookie1=value; cookie2=value; cookie3=value; </bdi>
        </div>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="cookie" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title="cookie" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>user_name = Reda Eskouni; age = 25ans;<br/>string</h2>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">4- Change a Cookie with JavaScript</h2>
        <p className="style_divv">
            باستخدام <b>JavaScript</b> ، يمكنك تغيير <b>cookie</b> بنفس طريقة إنشائه . <br/>
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple2.code} language="html" is_html={true} title="cookie" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title="cookie" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> user_name = Reda Eskouni; age = 25ans;<br/>string<br/>user_name = Adil Toumi..; age = 18ans; </h2>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">5- Delete a Cookie with JavaScript </h2>
        <p className="style_divv">
            يعد حذف <b>cookie</b> أمرًا بسيطًا للغاية.<br/>
            لا يتعين عليك تحديد قيمة <b>cookie</b> عند حذفها. <br/>
            ما عليك سوى تعيين معلمة انتهاء الصلاحية على تاريخ سابق <br/>
            <CodeHighlighter code={`document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"`} language="js" addClass="mt-3 mb-3" copie={true} />
            <div className="alert alert-warning mt-2">
                يجب عليك تحديد مسار ملف تعريف الارتباط للتأكد من حذف ملف تعريف الارتباط الصحيح.<br/>
                لن تسمح لك بعض المتصفحات بحذف ملف تعريف الارتباط إذا لم تحدد المسار.
            </div>
        </p>
        <div className="alert alert-info mt-3">
            إذا كنت تريد العثور على قيمة ملف تعريف ارتباط محدد واحد ، فيجب عليك كتابة دالة <b>JavaScript</b> تبحث عن قيمة <b>cookie</b> في <bdi><b>string cookie</b></bdi> 
        </div>
    </article>
</section>
    )
}