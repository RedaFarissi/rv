import images from "../imagesHtml";
import { CodeHighlighter } from "../pathHtml";

export default function Attributes() {
const code1 = `<img src="name_image.type">`; 
const code2 = `<img src="name_image.type" alt="وصف الصورة">`; 
const code3 = `<div style="color:red"> content </div>`; 
const code4 = `<div id="id_name"> content </div>`; 
const code5 = `<div id="id_name"> content </div>`; 
const code6 = `<img src="name_image.type" alt="وصف الصورة" id="id_name">`; 
const code7 = `<span id="id_name"> content </span>`; 
const code8 = `<div class="class_name"> content </div>`; 
const code9 = `<img src="name_image.type" alt="وصف الصورة" class="class_name" >`; 
const code10 = `<span class="class_name"> content </span>`; 
const code11 = `<body dir="ltr"> content </body>`; 
const code12 = `<div dir="rtl"> content </div>`; 
const code13 = `<span dir="auto"> content </span>`; 
return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-html-color"> HTML Attributes </h1>
    <article className="mt-5">
        <h2 className="title-h2">1. ما هو attribute </h2>
        <p className="style_divv">
            تحدد السمات <b>(Attributes)</b> خصائص إضافية مثل عرض الصورة وارتفاعها. توضع السمات دائمًا في وسم البدء (أو وسم الفتح) <code> &lt; &gt; </code> وعادة ما تكون على شكل أزواج اسم و قيمة وتكتب بالشكل التالي : <q>name=</q>value . يجب دائمًا إحاطة قيم السمات بعلامات اقتباس.<br/>
            أيضا ، بعض السمات َضرورية لعمل عناصر معينة. على سبيل المثال ، يجب أن يحتوي الوسم <kbd>&lt;img&gt;</kbd> على سمات <b>src</b> و <b>alt</b>
            <ul>
                <li>يمكن أن تحتوي جميع عناصر <b>HTML</b> على <b>attributes</b></li>
                <li> يتم تحديد  <b>attributes</b> دائمًا في بداية الوسم</li>
            </ul>
        </p>
        <CodeHighlighter  code={code1} language="html"  addClass="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={code2} language="html"  addClass="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={code3} language="html"  addClass="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={code4} language="html"  addClass="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital"> متال :</div>
            <h4 style={{color: "green"}}> الكود </h4>
            <img src={images.html_Attributes} alt='Attributes' className="img" />
            <ol>
                <li>في المثال أعلاه <b>src</b> داخل الوسم <kbd>&lt;img&gt;</kbd> هو سمة <small>(Attributes)</small> ومسار الصورة المقدمة هو قيمة السمة <small>(value)</small>.</li>
                <li>ايضا <b>href</b> داخل الوسم <strong>&lt;a&gt;</strong> هي سمة <small>(Attributes)</small> والرابط المقدم هو قيمته <small>(value)</small>، وهكذا</li>
            </ol>
            <h4 style={{color: "green"}}> بعد تشغيل الكود </h4>
            <img src={images.html_Attributes_2} className="img" alt='Attributes' />
        </div>
        <div style={{color:"blueviolet"}}> ملاحظة  </div>
        <small><ul><li>لا تقلق إن لم تفهم الوسم <kbd>&lt;img&gt;</kbd> و الوسم <kbd>&lt;a&gt;</kbd> ستجد كل شيء مشروح في دروس القادمة  </li></ul></small>
    </article>
    <article>
        <h2 className="title-h2">2. السمة <small>(HTML id Attributes)</small>  </h2>
        <p className="style_divv">
            يُمكن إضافته <b>id Attributes</b>  الى أي عنصر <b>html</b> وتكون قيمته عبارة عن اسم خاص (قم بختيار الإسم بنفسك) . ونستخدم هذا الاسم لتنسيق العُنصر بواسطة اكواد لغة <b>CSS</b> او نستخدم هذا الاسم لعمل بعض التغيرات على العنصر بواسطة لغة <b>JavaScript</b>.
            <ul>
                <li style={{marginBottom:"15px"}}> تحدد السمة <b>id</b> معرفًا فريدًا لعنصر <b>HTML</b>. يجب أن تكون قيمة سمة المعرف فريدة داخل مستند <b>HTML</b>.<br/>ويعني ذالك انه لا يمكنك إعطاء نفس ال <b>id</b> لعنصر <b>HTML</b> أخر .</li>
                <li> تُستخدم سمة <b>id</b> للإشارة إلى إعلان نمط معين في ورقة أنماط. يتم استخدامه أيضًا بواسطة <b>JavaScript</b> للوصول إلى العنصر ومعالجته بالمعرف المحدد</li>
                <li> يمكنك إستعمال عدد غير محدد من <b>id</b> داخل صفحتك ولاكن بقيم مختلفة. </li>
                <li>نقوم بتحديد ال <b>id</b> بوضع <small>(#)</small> قبل اسم ال <b>id</b> </li>
            </ul>
        </p>
        <CodeHighlighter  code={code5} language="html"  addClass="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={code6} language="html"  addClass="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={code7} language="html"  addClass="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital"> مثال: </div>
            في المثال التالي لدينا عنصر <kbd>&lt;h2&gt;</kbd> يشير إلى اسم المعرف "coder_reda". سيتم تصميم عنصر <kbd>&lt;h2&gt;</kbd> هذا وفقًا لتعريف نمط coder_reda# في قسم الرأس:
            <h4 style={{color: "green"}}> الكود </h4>
            <img src={images.html_Attributes2} className="img" alt='Attributes' />
            <h4 style={{color: "green"}}>  بعد تشغيل الكود </h4>
            <div className="style-result"><h2 style={{color:"green",fontSize:"45px"}}> title </h2> paragraph </div>
        </div>
        <small><ul><li>لا تقلق كل ما عليك فهمه في هذه الفقرة أن المعرف <b>id</b>  هو عبارة عن <b>Attribute</b> يمكن استعماله في إعطاء شكل جميل لكل   عناصر <b>HTML</b> <br/><small> ستتعلم كل شيء عن تصميم في دروس <b>CSS</b> </small></li></ul></small>
    </article>
    <article>
        <h2 className="title-h2">3. السمة <small>(HTML class Attributes)</small>  </h2>
        <p className="style_divv">
            يُمكن إضافته <b>attribute</b>  الى أي عنصر <b>html</b> وتكون قيمته عبارة عن اسم خاص (قم بختيار الإسم بنفسك) . ونستخدم هذا الاسم لتنسيق العُنصر بواسطة اكواد لغة <b>CSS</b> او نستخدم هذا الاسم لعمل بعض التغيرات على العنصر بواسطة لغة <b>JavaScript</b>.
            <ul>
                <li>يُمكننا إضافة نفس ال <b>class</b> في أكثر من وسم عكس ال id الذي يكون في وسم واحد فقط .</li>
                <li>نقوم بتحديد ال <b>class</b> بوضع (نقطة) قبل اسم لكلاس</li>
            </ul>
        </p>
        <CodeHighlighter  code={code8} language="html"  addClass="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={code9} language="html"  addClass="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={code10} language="html"  addClass="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital"> مثال: </div>
            في المثال التالي لدينا ثلاثة عناصر <kbd>&lt;h2&gt;</kbd> مع سمة <b>class</b> بقيمة "class_tile". سيتم تصميم جميع عناصر <kbd>&lt;h2&gt;</kbd> الثلاثة بالتساوي لقسم الرأس
            <h4 style={{color: "green"}}> الكود </h4>
            <img src={images.html_Attributes3} className="img" alt='Attributes' />
            <h4 style={{color: "green"}}>  بعد تشغيل الكود </h4>
            <div className="style-result"> 
                <h2 style={{color:"green",fontSize:"35px"}}>title</h2> 
                <h2 style={{color:"green",fontSize:"35px"}}>title2</h2>
                <h2 style={{color:"green",fontSize:"35px"}}>title3</h2>
            </div>
        </div>
        <ul><li>تم  تنفيد  الأوامر على كل العناصر التي تملك نفس ال <b>class</b>. </li></ul>
    </article>
    <article>
        <h2 className="title-h2">4. السمة <small>(HTML dir Attributes)</small>  </h2>
        <p className="style_divv">
            السمة <b>dir</b>  هي سمة مقيدة تشير إلى اتجاه النص الموجود في العنصر.<br/>
            القيم المسموح بها لهذه السمة هي:<br/>
            <ul>
                <li style={{marginBottom:"9px"}}><b>ltr</b> تعني من اليسار إلى اليمين ، وتستخدم للغات المكتوبة من اليسار إلى اليمين (مثل الفرنسية أو الإنجليزية على سبيل المثال)</li>
                <li style={{marginBottom:"9px"}}><b>rtl</b> وتعني من اليمين إلى اليسار ، وتستخدم للغات المكتوبة من اليمين إلى اليسار (مثل العربية على سبيل المثال).</li>
                <li style={{marginBottom:"9px"}}><b>auto</b> الذي يفوض وكيل المستخدم القرار. الخوارزمية المستخدمة بسيطة نسبيًا: يتم تحليل المحتوى النصي وعندما يتم مواجهة الحرف الأول الذي له اتجاه "قوي" ، يتم أخذ هذا الاتجاه للعنصر بأكمله.</li>
            </ul>
        </p>
        <CodeHighlighter  code={code11} language="html"  addClass="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={code12} language="html"  addClass="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={code13} language="html"  addClass="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital"> مثال: </div>
            <h4 style={{color: "green"}}> الكود </h4>
            <img src={images.html_Attributes4} className="img" alt={images.html_Attributes4}/>
            <h4 style={{color: "green"}}>  بعد تشغيل الكود </h4>
            <img src={images.html_Attributes4_2} className="img" alt={images.html_Attributes4_2}/>
        </div>
    </article>
    <article>
        <h2 className="title-h2">5. أهم السمات(Attributes) مع شرح مبسط  </h2>
        <table className="table table-bordered text-light">
            <thead className="bg-secondary">
                <tr className="text-center fs-5"> <th> القيمة</th><th> الوصف </th><th>السمات </th></tr>
            </thead>
            <tbody>
                <tr> <td> (مفتاح الاختصار)  <b>shortcut key</b></td><td> يحدد  <b>مفتاح اختصار لعنصر</b>  ليتم استخدامه بدلاً من لوحة المفاتيح.</td><td> accesskey </td></tr>
                <tr> <td>(نمط CSS)<br/> CSS Style</td><td>يحدد <b>نمط CSS <br/> مضمنًا (Inline-style) لعنصر.</b></td><td>style</td> </tr>
                <tr> <td>(رقم) number</td><td>يحدد <b>ترتيب الجدولة</b>  لعنصر.</td><td>tabindex</td></tr>
                <tr> <td>(صح) true<br/>(خطأ) false</td><td>يحدد ما إذا كان محتوى عنصر ما قابلاً للتعديل أم لا .</td><td>contenteditable</td></tr>
                <tr> <td>(معرف القائمة) <br/> menu-id</td><td>يحدد <b>قائمة سياق</b> لعنصر.</td><td>contextmenu</td></tr>
                <tr> <td>(بيانات) </td> <td>يستخدم <b>لتخزين البيانات المخصصة المرتبطة بالعنصر أو الخاصة بالصفحة</b>.</td> <td>data</td></tr>
                <tr> <td>(مخفى) <b>hidden</b></td><td>يحدد أن العنصر <b>لم يعد ملائمًا بعد أو لم يعد مناسبًا</b>.</td><td>hidden</td></tr>
                <tr> <td>(صح) <b>true</b><br/>(خطأ) <b>false</b> </td><td>يحدد ما إذا كان <b>العنصر قابلاً للسحب أم لا</b>.</td><td>draggable</td></tr>
                <tr> <td>(نقل) <b>move</b><br/>(نسخ) <b>copy</b><br/>(ربط) <b>link</b></td><td>يحدد ما إذا كان سيتم <b>نقل البيانات المسحوبة أو نسخها أو ربطها عند إسقاطها</b>.</td><td>dropzone</td></tr>
                <tr> <td>(رمز اللغة) <b>language-code</b></td><td>يحدد <b>لغة محتوى العنصر</b></td><td>lang</td></tr>
                <tr> <td>(نعم) <b>yes</b><br/>(لا)<b>no</b></td><td>يحدد ما إذا كان يجب <b>ترجمة المحتوى النصي لعنصر أم لا</b></td><td>translate</td></tr>
                <tr> <td>(صح) <b>true</b><br/>(خطأ) <b>false</b></td><td>يحدد ما إذا كان يمكن <b>فحص العنصر بحثًا عن أخطاء إملائية او نحوية أم لا</b>.</td><td>spellcheck</td></tr>
            </tbody>
        </table> 
    </article>
</section>
)
}