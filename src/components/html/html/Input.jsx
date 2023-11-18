import images from "../imagesHtml";
import { CodeHighlighter } from "../pathHtml";

export default function Italic(){
    const code1 = `<input type="text" name="choise_name" required>`
    const code2 = `<input type="hidden" name="choise_name" required>`
    const code3 = `<input type="radio" name="choise_name" required>`
    const code4 = `<input type="checkbox" name="choise_name" required>`
    const code5 = `<input type="email" name="choise_name" required>`
    const code6 = `<input type="password" name="choise_name" required>`
    const code7 = `<input type="tel" name="choise_name" required>`
    const code8 = `<input type="button" name="choise_name" required>`
    const code9 = `<input type="date" name="choise_name" required>`
    const code10 = `<input type="time" name="choise_name" required>`
    const code11 = `<input type="number" name="choise_name" required>`
    const code12 = `<input type="reset" name="choise_name" required>`
    const code13 = `<input type="url" name="choise_name" required>`
    const code14 = `<input type="range" name="choise_name" required>`
    
    return(
<section className="section-conetent">
    <h1 className="heading-style-html">HTML Input</h1>
    <article>
        <h2 className="title-h2">1. الوسم input</h2>
        <p className="style_divv">
            يحدد الوسم <bdi><strong>&lt;input&gt;</strong></bdi> حقل إدخال حيث يمكن للمستخدم إدخال البيانات وهو وسم فردي . <br/>
            يعتبر الوسم <bdi><strong>&lt;input&gt;</strong></bdi> عنصر النموذج الأكثر أهمية . بحيت يمكننا من إختيار نوع الإدخال الذي سيقوم به المستخدم وذالك من خلال السمة <b>type</b>.<br/>
            يمكن التعديل على تصميم حقل الإدخال عبر لغة <b>CSS</b>
        </p>
        <CodeHighlighter  code={code1} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={code2} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={code3} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={code4} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={code5} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={code6} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={code7} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={code8} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={code9} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={code10} language="html" addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={code11} language="html" addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={code12} language="html" addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={code13} language="html" addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={code14} language="html" addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html33_input} alt="input" className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <div className="style-result"><b>entrer votre Prénom:</b> <input type="text"/></div>
        </div>
    </article>
    <article>
        <h2 className="title-h2">2.  السمة type</h2> 
        <h5>1. القيمة text </h5>
        <p className="style_divv">
            يعرف الوسم <kbd>&lt;input type="text"&gt;</kbd> مع السمة <bdi>type="text"</bdi> (قيمة فتراضية) حقل إدخال نص يتكون من سطر واحد.
            العرض الافتراضي لحقل النص هو 20 حرفا.<br/>
            نصيحة: أضف دائما علامة <kbd>&lt;label&gt;</kbd> للحصول على أفضل ممارسات إمكانية الوصول!
        </p>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html33_input2} alt="input" className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <div className="style-result">
                First name: <input type="text"/>
            </div>
        </div>
        <h5>2. القيمة hidden</h5>
        <p className="style_divv">
            يعرف الوسم  <kbd>&lt;input type="hidden"&gt;</kbd> مع السمة <b>type="hidden"</b> حقل إدخال مخفي .
            يسمح الحقل المخفي لمطوري الويب بتضمين بيانات لا يمكن للمستخدمين رؤيتها أو تعديلها عند إرسال نموذج.
            يخزن الحقل المخفي غالبا  سجل قاعدة البيانات الذي يحتاج إلى تحديث عند إرسال النموذج.<br/>
            لا يتم عرض الحقل المخفي للمستخدم، ولكن يتم إرسال البيانات عند إرسال النموذج.
        </p>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html33_input3} alt="input" className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <div className="style-result"><input type="hidden"/> <button>OK</button></div>
        </div>
        <ul>
            <li>سيتم إرسال القيمة  المخزنة داخل السمة value إلى الخادم عند النقر على الزر . </li>
            <li> يمكن إستعمال الوسم <kbd>&lt;input&gt;</kbd> مع <b>JavaScript</b> وذالك بدون إستخدام الوسم <kbd>&lt;form&gt;</kbd></li>
        </ul>
        <h5>3. القيمة radio</h5>
        <p className="style_divv">
            يعرف الوسم  <kbd>&lt;input type="radio"&gt;</kbd> مع السمة <bdi>type="radio"</bdi> زر من نوع راديو .<br/>
            عادة ما يتم عرض أزرار الراديو في مجموعات الراديو (مجموعة من أزرار الراديو تصف مجموعة من الخيارات ذات الصلة). يمكن تحديد زر اختيار واحد فقط في المجموعة وذالك بإعطائهم نفس قيمة السمة <b>name</b> في نفس الوقت.
        </p>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html33_input4} alt="input" className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <div className="style-result">
                 <input type="radio" name="test-raddio"/> HTML <br/>
                 <input type="radio" name="test-raddio"/> CSS <br/>
                 <input type="radio" name="test-raddio"/> JavaScript <br/>
            </div>
        </div>
        <ul><li>في المتال قمنا بإعطاء نفس القيمة لجميع السمات المعرفة بإسم <b>name</b> ويعني ذالك أن المستخدم يستطيع إدخال قيمة واحدة فقط .  </li></ul>
        <h5>4. القيمة checkbox</h5>
        <p className="style_divv">
            يعرف الوسم  <kbd>&lt;input type="checkbox"&gt;</kbd> مع السمة <bdi>type="checkbox"</bdi> زر من نوع علامة إختيار .<br/>
            يظهر مربع الاختيار كمربع تم وضع علامة عليه (تم تحديدها) عند تنشيطه.
            يتم استخدام خانات الاختيار للسماح للمستخدم بتحديد خيار واحد أو أكثر من عدد محدود من الخيارات.
            نصيحة: أضف دائما علامة <kbd>&lt;label&gt;</kbd>  للحصول على أفضل ممارسات إمكانية الوصول!
        </p>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html33_input5} alt="input" className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <div className="style-result">
                 <input type="checkbox" name="radiditese"/> HTML <br/>
                 <input type="checkbox" name="radiditese"/> CSS <br/>
                 <input type="checkbox" name="radiditese"/> JavaScript <br/>
            </div>
        </div>
        <h5> 5. القيمة email </h5>
        <p className="style_divv">
            يتم استخدام نوع <kbd>&lt;input type="email"&gt;</kbd> مع السمة <bdi>type="email"</bdi>  لإنشاء حقل إدخال من نوع  <b>email</b> .<br/>
            لحقول الإدخال التي يجب أن تحتوي على عنوان بريد إلكتروني. اعتمادا على دعم المستعرض، يمكن التحقق من صحة عنوان البريد الإلكتروني تلقائيا عند إرساله. تتعرف بعض الهواتف الذكية على نوع البريد الإلكتروني، وتضيف "com." إلى لوحة المفاتيح لمطابقة إدخال البريد الإلكتروني
        </p>
        <div className="sum_exemple_style">
            <h4 className="green"> الكود </h4>
            <img src={images.html33_input6} alt="input" className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <div className="style-result">
                input email : <input type="email"/><button type="submit">OK</button>
            </div>
        </div>
        <h5> 6. القيمة password </h5>
        <p className="style_divv">
            يتم استخدام نوع <kbd>&lt;input type="password"&gt;</kbd> مع السمة <bdi>type="password"</bdi>  لإنشاء حقل إدخال من نوع  <b>password</b> <small><small>(يتم حماية الأحرف )</small></small>.<br/>
            يجب تقديم أي نماذج تتضمن معلومات حساسة مثل كلمات المرور عبر <b>HTTPS</b>.<br/>
            نصيحة: أضف دائماالوسم  <kbd>&lt;label&gt;</kbd> للحصول على أفضل ممارسات إمكانية الوصول!
        </p>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html33_input7} alt="input" className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <div className="style-result">
                input your email : <input type="email"/><br/>
                input your password : <input type="password" /><button type="submit">OK</button>
            </div>
        </div>
        <h5> 6. القيمة tel </h5>
        <p className="style_divv">
            يتم استخدام نوع <kbd>&lt;input type="tel"&gt;</kbd> مع السمة <bdi>type="tel"</bdi>  لإنشاء حقل إدخال من نوع رقم هاتف  <b>tel</b>.<br/>
            المتصفحات التي لا تدعم السمة  <bdi>type="tel"</bdi> تتراجع إلى كونها إدخال من النوع النصي  "text" قياسي.<br/>
            نصيحة: أضف دائما الوسم <kbd>&lt;label&gt;</kbd> للحصول على أفضل ممارسات إمكانية الوصول .
        </p>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html33_input8} alt="input" className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <div className="style-result">
               insert phone number : <input type="tel"/>
            </div>
        </div>
        <h5> 7. القيمة button </h5>
        <p className="style_divv">
            يتم استخدام نوع <kbd>&lt;input type="button"&gt;</kbd> مع السمة <bdi>type="button"</bdi>  لإنشاء زر قابل للنقر (يستخدم في الغالب مع جافا سكريبت لتنشيط برنامج نصي) .<br/>
            غالبا نقوم بتحديد السمة <b>value</b> داخل الوسم <b>input</b>  وذالك من أجل إعطاء قيمة للزر أنضر المتال .
        </p>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html33_input9} alt="input" className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <div className="style-result">
               <input type="button" value="Click me"/>
            </div>
        </div>
        <ul><li> ستتعلم كيف تقوم بستغلال هذه العناصر داخل دروس جافا سكريبت   </li></ul>
        <h5> 8. القيمة date </h5>
        <p className="style_divv">
            يتم استخدام السمة <kbd>&lt;input type="date"&gt;</kbd> مع السمة <bdi>type="date"</bdi>  لإنشاء حقل إدخال من نوع التاريخ  (تتضمن القيمة الناتجة السنة والشهر واليوم)  ولكن ليس الوقت  .<br/>
        </p>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html33_input10} alt="input" className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <div className="style-result">
                Birthday: <input type="date"/>
            </div>
        </div>
        <h5> 9. القيمة time </h5>
        <p className="style_divv">
            يتم استخدام السمة <kbd>&lt;input type="time"&gt;</kbd> مع السمة <bdi>type="time"</bdi>  لإنشاء حقل إدخال من نوع الوقت  .<br/>
        </p>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html33_input11} alt="input" className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <div className="style-result">
              Select a time : <input type="time"/>
            </div>
        </div>
        <h5> 10. القيمة number </h5>
        <p className="style_divv">
            يتم استخدام الوسم <kbd>&lt;input type="number"&gt;</kbd> مع السمة <bdi>type="number"</bdi>  لإنشاء حقل إدخال من نوع الأرقام .<br/>
            استخدم السمات التالية لتحديد القيود:<br/>
            <ul>
                <li> max - يحدد القيمة القصوى المسموح بها </li>
                <li> min - يحدد الحد الأدنى للقيمة المسموح بها </li>
                <li> step - تحديد الفواصل الزمنية للأرقام القانونية </li>
                <li> value - تحديد القيمة الافتراضية </li>
            </ul>
            نصيحة: أضف دائما الوسم <kbd>&lt;label&gt;</kbd> للحصول على أفضل ممارسات إمكانية الوصول!
        </p>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html33_input12} alt="input" className="img"/> 
            <h4 className="green"> بعد تشغيل الكود </h4>
            <div className="style-result">
                Quantity (between 1 and 5): <input type="number" min="1" max="5"/>
            </div>
        </div>
        <ul>
            <li>   في المتال بما أننا قمنا بإعطاء الوسم input السمة min و max وذالك لتحديد قيمة قصوى وقيمة  دنيا .</li>
            <li> إن قام المستعمل بإدخال رقم أكبر من القيمة القصوى سيقوم المتصفح بعرض رسالة خطأ  .</li>
            <li> إن قام المستعمل بإدخال رقم أصغر من القيمة الدنيا سيقوم المتصفح بعرض رسالة خطأ  .</li>
        </ul>
        <h5> 11. القيمة reset  </h5>
        <p className="style_divv">
            يتم استخدام الوسم <kbd>&lt;input type="reset"&gt;</kbd> مع السمة <bdi>type="reset"</bdi> لتعيين كافة قيم النموذج إلى القيم الأولية الخاصة به  .<br/>
        </p>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html33_input13} alt="input" className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <div className="style-result">
                Select a time : <input type="time" value="00:00"/><input type="button" value="OK"/> <input type="reset" value="Annuler"/>
            </div>
        </div>
        <h5> 12. القيمة url  </h5>
        <p className="style_divv">
            يتم استخدام الوسم <kbd>&lt;input type="url"&gt;</kbd> مع السمة <bdi>type="url"</bdi>  لإنشاء حقل إدخال من نوع  <b>URL</b>  .<br/>
        </p>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html33_input14} alt="input" className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <div className="style-result">
                Add your homepage  <input type="url"/>
            </div>
        </div>
        <h5> 13. القيمة range  </h5>
        <p className="style_divv">
            يتم استخدام الوسم <kbd>&lt;input type="range"&gt;</kbd> مع السمة <bdi>type="range"</bdi>  لإنشاء حقل إدخال  لإدخال رقم قيمته الدقيقة غير مهمة   .<br/>
            النطاق الافتراضي هو 0 إلى 100. ومع ذلك، يمكنك تعيين قيود على الأرقام المقبولة مع السمات أدناه.<br/>
            <ul>
                <li>max - يحدد القيمة القصوى المسموح بها</li>
                <li>min - يحدد الحد الأدنى للقيمة المسموح بها</li>
                <li>step - تحديد الفواصل الزمنية للأرقام القانونية</li>
                <li>value - تحديد القيمة الافتراضية</li>
            </ul>
        </p>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html33_input15} alt="input" className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <div className="style-result">
                Points (between 0 and 10): <input type="range" min="0" max="10"/>
            </div>
        </div>
        <h3>2.  السمة name</h3> 
        <p className="style_divv">
        تحدد سمة <b>name</b> إسم الوسم <kbd>&lt;input&gt;</kbd> .<br/>
        يتم استخدام السمة <b>name</b> للإشارة إلى الوسم في <b>JavaScript</b>  أو لإراسال البيانات الذي قام المستخدم بإدخالها إلى الخادم من اجل تنفيد أكواد برمجية أخرى  .<br/>
        سيتم تمرير قيم عناصر النموذج التي تحتوي على سمة اسم فقط عند إرسال نموذج غالبا يستخدم مع لغة <b>php</b>  وذالك عبر الوسم <kbd>&lt;form&gt;</kbd> .
        </p>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4> 
            <img src={images.html33_input16} alt="input" className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <img src={images.html33_input16_2} alt="input reult" className="img"/>
        </div>
    </article>
    <article>
        <h2 className="title-h2">3.  السمة required </h2> 
        <p className="style_divv">
            تستعمل  السمة <b>required</b>  لتحديد أن الحقل يجب ملأه بشكل إجباري .<br/>
            تعتبر هذه السمة من أكتر السمات أهمية لأنه في حالة إستعمال الوسم <kbd>&lt;form&gt;</kbd> إذا قام المستخدم بإرسال بيانات فارغة إلى الخدم سيتم إرسالها رغم أنها فارغة ذالك قد يسبب مشاكل . 
        </p>
    </article>
</section>
    )
    }