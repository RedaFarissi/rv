import images from "../images";
import { CodeHighlighter } from "../pathHtml";

export default function Introduction(){
    const code = `<!DOCTYPE html>
<html>
   <head>
      <title> Page Title </title>
      <!-- to work with different device -->
      <meta name="viewport" content="width=device-width, initial-scale=1">
   </head >
   <body>
     Content
   </body>
</html>`
    return(
<section className="section-conetent">
    <h1 className="heading-style-html"> HTML Introduction </h1>
    <article>
        <h2 className="title-h2">1. ما هي HTML ؟</h2>
        <p className="style_divv">
         ترمز <b>HTML</b> إلى <b>Hyper Text Markup Language</b> و هي لغة الترميز القياسية لإنشاء صفحات الويب .<br/>
          يصف <b>HTML</b>  بنية صفحة الويب ويتكون  من سلسلة من العناصر .<br/>
            تخبر عناصر <b>HTML</b> المتصفح بكيفية عرض المحتوى و تسمي عناصر <b>HTML</b> أجزاء من المحتوى مثل <q>هذا عنوان</q> ، <q>هذه فقرة</q> ، <q>هذا ارتباط</q> ، إلخ.
        </p>
    </article>
    <article>
        <h2 className="title-h2">2. HTML-المحررات </h2>
        <p className="style_divv">
            لتعلم <b>HTML</b> ، نوصي باستخدام محرر نصوص بسيط مثل <b>Notepad</b> (PC) أو <b>TextEdit</b> (Mac) .<br/>
            نعتقد أن استخدام محرر نصوص بسيط هو طريقة جيدة لتعلم <b>HTML</b> ولاكن ستقوم بكتابة الكود بنفسك دون مساعدة .<br/>
            ان كنت ترغي بالمساعدة ننصح بستعمال ال  <b>visual Studio Code</b> .
        </p>
    </article>
    <article>
        <h2 className="title-h2">3. التعليقات في لغة HTML  </h2>
        <p className="style_divv">
        التعليق (Comment) عبارة عن وسم خاص يمكنك وضعه في أي مكان تريد في الصفحة بهدف كتابة ملاحظات تساعدك في الشرح أو لتذكر سبب استخدام الوسوم في حال أردت مستقبلاً مراجعة كود الصفحة و التعديل عليه.
        لوضع تعليق إستخدم الوسم و أكتب النص بداخله كالتالي.<br/>
        <span className="green">&lt;-- Comment --!&gt;</span>
        </p>
    </article>
    <article>
        <h2 className="title-h2">4. مكونات صفحة الويب</h2>
        <p className="style_divv">
            بشكل عام, لتبني صفحات ويب إحترافية عليك تعلم اللغات التالية و بنفس الترتيب :<br/><br/>
            1.لغة <b>HTML</b> من أجل تحديد العناصر التي نريد إضافتها في الصفحة.<br/>
            2.لغة <b>CSS</b> من أجل تصميم العناصر الموجودة في الصفحة.<br/>
            3.لغة <b>Javascript</b> و نستخدمها لإضافة مؤثرات في صفحات الويب و لمعالجة البيانات التي يتم إدخالها و عرضها في الصفحات.<br/>
        </p>
    </article>
    <article>
        <h2 className="title-h2">5. معلومة تقنية</h2>
        <p className="style_divv">
        عند استخدام وسم فردي يمكنك عدم وضع الرمز / في آخره إن أردت و لكن يفضّل وضعه للإشارة إلى أنه وسم فردي.
        <div style={{color:"yellow", padding:"15px"}}>مثال : </div>
        <ul>
        <li>  سواء قمت بكتابة <kbd><bdi>&lt;hr&gt;</bdi></kbd> أو <kbd><bdi>&lt;hr/&gt;</bdi></kbd> فالنتيجة هي نفسها تماماً. </li>
        <li>  الوسم الزوجي عبارة عن وسم له بداية و نهاية. </li>
        </ul>
        نهاية الوسم الزوجي تكون بإضافة الرمز / في أول إسم الوسم فقط.
        <div className="mital">مثال : </div>
        <ul><li> الوسم الزوجي div نبدأه بالوسم <kbd>&lt;div&gt;</kbd> و ننهيه بالوسم <kbd><bdi>&lt;/div&gt;</bdi></kbd>.</li></ul>
        <div className="alert alert-danger mt-3" style={{color:"red",padding:"15px"}}><b>ملاحظة هامة :</b><br/>
            يجب تأكد  من  إنهاء كل الأوسمة الزوجية الموجودة داخل موقعك لكي لا تحدت مشاكل أتناء تشغيل الكود
        </div>
        </p>
    </article>
    <article>
        <h2 className="title-h2">6. مستند HTML بسيط</h2>
        <CodeHighlighter 
            code={code} language="html" 
            addClass="addClass m-auto mt-3 mb-3"
            copie={true}
            number={true}
        /> 
    </article>
    <article>
        <h2 className="title-h2"> DOCTYPE html .7</h2>
        <p className="style_divv">
        <kbd>&lt;DOCTYPE html!&gt;</kbd> &nbsp; فعلياً لا يعتبر وسم من وسوم لغة <b>HTML</b> نفسها بل هو مجرد معلومة يتوقع المتصفح أن يقرأها في بداية أي ملف إمتداده ... <b>HTML</b> لكي يعرف إصدار اللغة المستخدمة في الملف. لإعلام المتصفح أننا نستخدم الإصدار <bdi><b>HTML 5</b></bdi> لا بد من إضافة المعلومة التالية كأول معلومة في الملف.    
        </p>  
    </article>
    <article>
        <h2 className="title-h2">8. العنصر html</h2>
        <p className="style_divv">
        وتبع إعلان نوع الملف وسم <kbd>&lt;html&gt;</kbd> وهذا هو الإشارة الفعلية على بداية ملف <b>html</b> (صفحة الويب). إذاً فجميع المحتوى الموجود في ملف <b>HTML</b> لابد أن يكون محاط بوسمين <kbd>&lt;html&gt;</kbd> و <kbd><bdi>&lt;/html&gt;</bdi></kbd> وكل شئ داخل هذين الوسمين يعتبر جزء من العنصر <kbd>&lt;html&gt;</kbd>
        </p>
        <h2 className="title-h2">9. العنصر Head في لغة HTML</h2>
        <div className="style_divv">
            العنصر <kbd>&lt;head&gt;</kbd> هو في الأساس العنصرالمحتوي على جميع عناصر الرأس ، والتي توفر معلومات إضافية حول المستند (البيانات الوصفية) ، أو مرجع إلى الموارد الأخرى المطلوبة لعرض المستند في متصفح الويب بالشكل الصحيح.<br/>
            تصف عناصر الرأس بشكل جماعي خصائص المستند مثل العنوان title ، وتوفر معلومات وصفية مثل مجموعة الأحرف character set ، وتوجه المتصفح إلى مكان العثور على أوراق الأنماط أو البرامج النصية التي تسمح لنا بتوسيع نطاق صفحة <b>HTML</b> بطرق نشطة وتفاعلية للغاية.
            عناصر <b>HTML</b> التي يمكن استخدامها داخل عنصر <kbd>&lt;head&gt;</kbd> هي:<br/>
              <bdi><kbd>&lt;title&gt;</kbd> ، <kbd>&lt;meta&gt;</kbd> ، <kbd>&lt;link&gt;</kbd> ، <kbd>&lt;style&gt;</kbd></bdi> <br/>
            سنقوم بشرح كل هاده الأمور في دروس القادمة .
        </div>
    </article>
    <article>
        <h2 className="title-h2">10. العنصر Body في لغة HTML</h2>
        <p className="style_divv">
        يُمثِّل العنصر <kbd>&lt;body&gt;</kbd> محتوى مستند <b>HTML</b>، ولا يجوز أن يكون هنالك أكثر من عنصر <kbd>&lt;body&gt;</kbd> واحد في المستند.<br/>
        مثال عن بنية مستند <b>HTML</b> بسيط يظهر فيه العنصر <kbd>&lt;body&gt;</kbd>، مع العنصر <kbd>&lt;head&gt;</kbd> الذي يحتوي على عنوان المستند العنصر <kbd>&lt;title&gt;</kbd> :
        </p>
        <div className="sum_exemple_style">
            <h4 className="green"> الكود </h4>
            <img src={images.html0_Introduction} className="img" />
            <h4 className="green">  بعد تشغيل الكود </h4>
            <div className="style-result">reda Eskouni</div>
        </div>
        <ul>
            <li>خلال هاذه الدورة من تعلم <b>HTML</b> ستتعرف على كل الوسوم <b>HTML</b> مما سيأهلك لتعلم لغة <b>CSS</b> و <b>JavaScript</b> ولغات أخرى  .</li>
            <li> تعتبر <b>HTML</b> لغة أساسية لمطوري الويب . </li>
            <li>  من خلال هذه الدورة ستتعرف على كل العناصر التي تلزمك للإنطلاق في عالم البرمجة . </li>
        </ul>
    </article>
</section>
)
}