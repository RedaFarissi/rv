import { CodeHighlighter } from "../pathCss";

export default function Introduction(){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Introduction </h1>
    <article>
        <h2 className="title-h2">1. ما هي CSS ؟</h2>
        <p className="style_divv">
            ترمز <b>CSS</b> إلى <b>Cascading Style Sheets</b> و يصف <b>CSS</b> كيفية عرض عناصر <b>HTML</b> على الشاشة أو الورق أو في وسائط أخرى
            <b>CSS</b> يوفر الكثير من العمل. يمكن التحكم في تخطيط صفحات الويب متعددة في كل مرة .<br/>
            يتم كتابة أكواد <b>CSS</b> في ملفات أو في الوسم <b>head</b> أو داخل السمات كما تعلمنا في دروس <b>HTML</b> لاكن الطريقة التي تعتبر أكتر كفائة هي الملفات
        </p>
    </article>
    <article>
        <h2 className="title-h2">2. طريقة إنشاء ملف CSS </h2>
        <h5>1. طريقة إنشاء الملف</h5>
        <div className="style_divv">
            لإنشاء ملف <b>CSS</b> كل ما عليك فعله إنشاء ملف وأن تقوم بئعطائه إسم و صيغة <b>CSS</b> تم التأكد أن ملف داخل نفس المجلد الذي يحتوي ملف <b>html</b> .
        </div>
        <div className="sum_exemple_style">
            <div className="mital">متال : </div>
            <ul><li>في هاذا المتال قمنا بتسمية الملفين <b>reda</b> ولاكن يختلف الإمتداد فالملف الأول يحمل إمتداد <b>css</b> والملف التاني يحمل إمتداد <b>html</b> .</li></ul>
            <img src="{% static 'css/css0_Introduction.png' %}" className="img"/>
        </div>
        <h5>2. طريقة ربط الملف html ب css</h5>
        <div className="style_divv">
            لربط ملف <b>html</b> بملف <b>css</b> يجب إستخدام الوسم <kbd>&lt;link&gt;</kbd> مع السمة <b>rel</b> وقيمة <b>stylesheet</b> .<br/> 
        </div>
        <div className="sum_exemple_style">
            <div className="mital">متال :  </div>
            <h4 className="green"> ملف html </h4>
            <img src="{% static 'css/css0_Introduction2.png' %}" className="img"/>
            <h4 className="green"> ملف css </h4>
            <img src="{% static 'css/css0_Introduction2 2.png' %}" className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <img src="{% static 'css/css0_Introduction2 3.png' %}" className="img"/>
        </div>
    </article>
    <article>
        <h2 className="title-h2">3. تحديد عناصر  CSS عبر id </h2>
        <div className="style_divv">
            <ul>
                <li> يمكن إعطاء أي وسم من وسوم html السمة id تم كقيمة لهذه السمة يمكنك إعطاء أي إسم تريد و إعطاء أوامر CSS من خلاله .</li>
                <li> لتحديد وسم html عن طريق id يجب وضع هده العلامة # تم قيمة ال id .</li>
                <li> السمة id  هي سمة خاصة و يعني ذالك أنه لا يمكن تحيديد نفس ال id مرتين .</li>
            </ul>
        </div>
        <div className="sum_exemple_style">
            <div className="mital">متال :  </div>
            <h4 className="green">  </h4>
            <img src="{% static 'css/css0_Introduction3.png' %}" className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <img src="{% static 'css/css0_Introduction3 2.png' %}" className="img"/>
        </div>
        <ul><li> يمكنك دائما كتابة أكواد css داخل ملف خاص ب <b>css</b> وربطهم عن طريق الوسم <b>link</b> كما هو مذكور فوق .</li></ul>
    </article>
    <article>
        <h2 className="title-h2">4. تحديد عناصر  CSS عبر class </h2>
        <div className="style_divv">
            <ul>
                <li> يمكن إعطاء أي وسم من وسوم <b>html</b> السمة <b>class</b> تم كقيمة لهذه السمة يمكنك إعطاء أي إسم تريد و إعطاء أوامر CSS من خلاله .</li>
                <li> لتحديد وسم <b>html</b> عن طريق <b>class</b> يجب وضع نقطة قبل إسم ال  <b>class</b> .</li>
                <li> السمة <b>class</b>  هي سمة يمكن إعطائها لعدة أوسم <b>html</b>  وتنفيد الأكواد على كل العناصر دفعة واحدة.</li>
            </ul>
        </div>
        <div className="sum_exemple_style">
        <div className="mital">متال :  </div>
        <h4 className="green"> الكود </h4>
        <img src="{% static 'css/css0_Introduction4.png' %}" className="img"/>
        <h4 className="green"> بعد تشغيل الكود </h4>
        <img src="{% static 'css/css0_Introduction4 2.png' %}" className="img"/>
        </div>
    </article>
    <article>
        <h2 className="title-h2">5. التعليقات - CSS Comments</h2>
        <div className="style_divv">
            يتم استخدام التعليقات لشرح التعليمات البرمجية، وقد تساعد عند تحرير التعليمات البرمجية المصدر في تاريخ لاحق.
            يتم تجاهل التعليقات من قبل المتصفحات.<br/>
            تعليق <b>CSS</b> يتم وضع داخل <kbd>&lt;style&gt;</kbd> أو داخل ملف css،  ويبدأ مع */ وينتهي ب /*:
        </div>
        <div className="sum_exemple_style">
        <div className="mital">متال :  </div>
        <img src="{% static 'css/css0_Introduction6.png' %}" className="img"/>
        </div>
    </article>
    <article>
        <h2 className="title-h2">6.  معلومات تقنية </h2>
        <div className="style_divv">
            يمكن إعطاء خصائص <b>CSS</b> عبر <b>id</b>  و ذالك يكون خاص بوسم واحد لأنه كما سبق ورؤينا السمة <b>id</b> هي سمة لا يمكن تكرارها بنفس القيمة ويجب إستعمال # من أجل تعريفها داخل <b>CSS</b> .<br/>
            أو السمة <b>class</b>  وهي سمة مفيدة جدا بحيت تمكنك من إعطاء نفس التصميم لعدة عناصر <b>html</b> دفعتا واحدة .<br/>
            يمكنك أيضا إعطاء تصاميم <b>CSS</b> من خلال إسم الوسم ونتيجتا لذالك كل وسوم <b>html</b> التي من نفس النوع سوف تأخد هاذا التصميم .
        </div>
        <div className="sum_exemple_style">
        <div className="mital">متال :  </div>
            <ul><li>لاحض أن تصميم تم تنفيده على كل  وسوم h2 .</li></ul>
            <h4 className="green"> الكود </h4>
            <img src="{% static 'css/css0_Introduction5.png' %}" className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <img src="{% static 'css/css0_Introduction5 2.png' %}" className="img"/>
        </div>
    </article>
</section>
)
}