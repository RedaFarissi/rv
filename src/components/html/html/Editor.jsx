import images from "../imagesHtml";

export default function Editor() {

return(
<section className="section-conetent">
    <h1 className="heading-style">HTML Editor</h1>
    <article className="mt-5">
        <h2 className="title-h2">1. ما هو محرر الأكواد</h2>
        <p className="style_divv">
            محرر النصوص البرمجية ومحرر الكود هو محرر نصوص مصمم خصيصا لتحرير الأكواد المصدرية في برنامج حاسوب بواسطة مبرمج. وقد يكون تطبيقا مستقلا أو مدمجا في بيئة تطوير متكاملة.
            تتمتع محررات الأكواد المصدرية بميزات مصممة خصيصا لتبسيط إدخال الكود المصدري والإسراع به، مثل وظائف تعليم الصيغة والإكمال التلقائي
            <ul>
                <li> لتعلم <b>HTML</b> ، نوصي باستخدام محرر نصوص بسيط مثل <b>Notepad (PC)</b> أو <b>TextEdit (Mac)</b>.</li>
                <li> نعتقد أن استخدام محرر نصوص بسيط هو طريقة جيدة لتعلم <b>HTML</b> ولاكن ستقوم بكتابة الكود بنفسك دون مساعدة .</li>
               <li> ان كنت ترغب بالمساعدة ننصح بستعمال ال  <b>visual Studio Code</b>.</li>
            </ul>
        </p>
    </article>
    <article>
        <h2 className="title-h2">2. طريقة تحميل visual Studio Code </h2>
        <ul>
            <li> يعتبر <b>visual Studio Code</b> أحد أفضل المحررات</li>
            <li> عند نقر على الرابط سيتم توجيهك لتحميل محرر الأكواد <a href="https://code.visualstudio.com/#alt-downloads" title="أنقر رابط لتوجه لصفحة visual studio code" target="_blanck" style={{color: "brown"}} > .visual studio code  </a>.</li>
            <li>بعد نقر على رابط ستجد </li>
        </ul>
        <ul><li> الأن قم بتحميل على حسب نوع النضام الذي لديك بم أنني أستعمل <b>windows</b> سأنقر على زر <b>windows</b></li></ul>
        <img src={images.html_Editor_2} alt="Editor" className="img"/>
        <ul>
            <li> عند النقر سيبدأ تحميل تلقائيا </li>
            <li> بعد نتهاء تحميل قم بنقر على controls google كما مبين في صورة أسفله   </li>
        </ul>
        <img src={images.html_Editor_3} alt="Editor" className="img"/>
        <ul><li>    بعد نقر توجه إلى التحميلات   </li></ul>
        <img src={images.html_Editor_4} alt="Editor" className="img"/>
        <ul><li>    بعد نقر على التحميلات ستضهر عندك صفحة بهذا الشكل   </li></ul>
        <img src={images.html_Editor_5} alt="Editor" className="img"/>
        <ul>
            <li>  الأن قم بنقر على ذالك رابط وافق على شروط تم قم بضغط على next حتي ينتهي تحميل .</li>
            <li>  الأن بعد إنتهاء التحميل عند فتح البرنامج سيكون شكل كتالي : </li>
        </ul>
        <img src={images.html_Editor_6} alt="Editor" className="img"/>
    </article>
    <article>
        <h2 className="title-h2">3. إنشاء ملف HTML</h2>
        <ul>
            <li> لإنشاء ملف <b>HTML</b> قم بنقر على <b>File</b> </li>
            <li> بعد نقر على على <b>File</b>  ستضهر قائمة كما في المتال التالي : </li>
        </ul>
        <img src={images.html_Editor_7} alt="Editor" className="img"/>
        <ul><li> قم بنقر على <b>New File</b> كتالي :</li></ul>
        <img src={images.html_Editor_8} alt="editor exemple" className="img"/>
        <ul><li> عند نقر سيتم فتح صفحة جديدة فارغة .</li></ul>
        <img src={images.html_Editor_9} alt="editor exemple" className="img"/>
        <ul>
            <li> قم بنقر على <b>File</b> من جديد وقم بتحديد خيار <b>Save As</b>.</li>   
        </ul> 
        <img src={images.html_Editor_10} alt="Editor" className="img"/>
        <ul> 
            <li>عند نقر على Save As سيمكنك إختيار إسم لملف وإمتداده بما أننا في كورس <b>HTML</b> سنضيف إمتداد <b>html</b></li>
            <li> في المتال التالي قمنا بتسمية ملف  <b>HTML</b> بإسم coder_reda والإمتداد يأتي بعد النقطة وهو html </li>
            <li> قمنا بتحديد مكان حفض الملف داخل <b>Desktop</b></li>
        </ul>
        <img src={images.html_Editor_11} alt="Editor" className="img"/>
        <ul><li>عند تحول شكل الملف كتالي إعلم أن كل شيء يعمل بشكل جيد</li></ul>
        <img src={images.html_Editor_12} alt="Editor" className="img"/> 
    </article>

</section>
    )

}