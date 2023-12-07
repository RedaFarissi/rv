import { CodeHighlighter ,  Result} from "../../path";
import { useState , useRef} from "react";

export default function Input(props){
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
    const codeExemple1 =  `        <label>First Name : </label> 
        <input type="text" name="first_name"/>`
    const codeExemple2 = `        <input type="hidden" name="first_name"/>
        <button> OK </button>`
    const codeExemple3 = `        <input type="radio" name="test-raddio"/> HTML <br/>
        <input type="radio" name="test-raddio"/> CSS <br/>
        <input type="radio" name="test-raddio"/> JavaScript <br/>`
    const codeExemple4 = `<label for="checkbox">Select an option:</label><br/><br/>
    <input type="checkbox" id="checkbox" name="option1" value="Option 1"/>
    <label for="option1">Option 1</label><br/>

    <input type="checkbox" id="checkbox" name="option2" value="Option 2"/>
    <label for="option2">Option 2</label><br/>

    <input type="checkbox" id="checkbox" name="option3" value="Option 3"/>
    <label for="option3">Option 3</label>`
    const codeExemple5 = `        <form>
            <label>Email : </label> 
            <input type="email" ref={inputRefExemple5} name="email"/>
            <input type="submit" value="Submit" onClick={codeExemple5RouteHandle}/>
    </form>`
    const inputRefExemple5 = useRef(null);
    const [codeExemple5Route , setCodeExemple5Route] = useState("")         
    const codeExemple5RouteHandle =(e)=>{
       setCodeExemple5Route(`?email=${inputRefExemple5.current.value}`)
    }
    

    const codeExemple6 = `     <label>input your email : </label><input type="email" name='email'/><br/>
    <label>input your password :</label> <input type="password" name="password" /><br/>`
    const codeExemple7 = `     <label>Insert Phone Number : </label> 
    <input type="tel" name="phone-number"/>`
    const codeExemple8 = `     <input type="button" value="Click"/>`
    const codeExemple9 = `       Birthday: <input type="date" />`
    const codeExemple10 = `      Select a time : <input type="time"/>`
    const codeExemple11 = `      Quantity (between 1 and 5): <input type="number" />`
    const codeExemple12 = `      Points (between 0 and 10): <input type="range" min="0" value="7" max="10"/>`
    const codeExemple13 = `      <form>
            <label>First Name : </label> 
            <input ref={inputRefExemple13F} type="text" name="first_name"/><br/>
            <label>Last Name : </label> 
            <input type="text" ref={inputRefExemple13L} name="last_name"/><br/>
            <input type="submit" value="Submit" onClick={codeExemple13RouteHandle} />
    </form>`
    const inputRefExemple13F = useRef(null);
    const inputRefExemple13L = useRef(null);
    const [codeExemple13Route , setCodeExemple13Route] = useState("")         
    const codeExemple13RouteHandle =()=>{
        setCodeExemple13Route(`?first_name=${inputRefExemple13F.current.value}&last_name=${inputRefExemple13L.current.value}`)
    }
    
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-html-color">HTML Input</h1>
    <article>
        <h2 className="title-h2">1. الوسم input</h2>
        <p className="style_divv">
            يحدد الوسم <bdi><strong>&lt;input&gt;</strong></bdi> حقل إدخال حيث يمكن للمستخدم إدخال البيانات وهو وسم فردي . <br/>
            يعتبر الوسم <bdi><strong>&lt;input&gt;</strong></bdi> عنصر النموذج الأكثر أهمية . بحيت يمكننا من إختيار نوع الإدخال الذي سيقوم به المستخدم وذالك من خلال السمة <b>type</b>.<br/>
            يمكن التعديل على تصميم حقل الإدخال عبر لغة <b>CSS</b>
        </p>
        <CodeHighlighter  code={code1}  language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={code2}  language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={code3}  language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={code4}  language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={code5}  language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={code6}  language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={code7}  language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={code8}  language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={code9}  language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={code10} language="html" addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={code11} language="html" addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={code12} language="html" addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={code13} language="html" addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={code14} language="html" addclassName="mt-3 mb-3" copie={true}/>
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
            <CodeHighlighter file_name="index.html" code={codeExemple1} language="html" is_html={true} title="Input Text" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Input Text' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <label>First Name : </label> 
                <input type="text" name="first_name"/>
            </Result>
        </div>          <h5>2. القيمة hidden</h5>
        <p className="style_divv">
            يعرف الوسم  <kbd>&lt;input type="hidden"&gt;</kbd> مع السمة <b>type="hidden"</b> حقل إدخال مخفي .
            يسمح الحقل المخفي لمطوري الويب بتضمين بيانات لا يمكن للمستخدمين رؤيتها أو تعديلها عند إرسال نموذج.
            يخزن الحقل المخفي غالبا  سجل قاعدة البيانات الذي يحتاج إلى تحديث عند إرسال النموذج.<br/>
            لا يتم عرض الحقل المخفي للمستخدم، ولكن يتم إرسال البيانات عند إرسال النموذج.
        </p>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <CodeHighlighter file_name="index.html" code={codeExemple2} language="html" is_html={true} title="Input Hidden" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Input Hidden' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <button> OK </button>
            </Result>
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
            <CodeHighlighter file_name="index.html" code={codeExemple3} language="html" is_html={true} title="Input Radio" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Input Radio' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <input type="radio" name="test-raddio"/> HTML <br/>
                 <input type="radio" name="test-raddio"/> CSS <br/>
                 <input type="radio" name="test-raddio"/> JavaScript <br/>
            </Result>
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
            <CodeHighlighter file_name="index.html" code={codeExemple4} language="html" is_html={true} title="Input Checkbox" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Input Checkbox' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                    <label htmlFor="checkbox">Select an option:</label><br/><br/>
                    <input type="checkbox" id="checkbox" name="option1" value="Option 1"/>
                    <label htmlFor="option1" className="ms-2"> Option 1</label><br/>

                    <input type="checkbox" id="checkbox" name="option2" value="Option 2"/>
                    <label htmlFor="option2" className="ms-2"> Option 2</label><br/>

                    <input type="checkbox" id="checkbox" name="option3" value="Option 3"/>
                    <label htmlFor="option3" className="ms-2">Option 3</label>
            </Result>
        </div>
        <h5> 5. القيمة email </h5>
        <p className="style_divv">
            يتم استخدام نوع <kbd>&lt;input type="email"&gt;</kbd> مع السمة <bdi>type="email"</bdi>  لإنشاء حقل إدخال من نوع  <b>email</b> .<br/>
            لحقول الإدخال التي يجب أن تحتوي على عنوان بريد إلكتروني. اعتمادا على دعم المستعرض، يمكن التحقق من صحة عنوان البريد الإلكتروني تلقائيا عند إرساله. تتعرف بعض الهواتف الذكية على نوع البريد الإلكتروني، وتضيف "com." إلى لوحة المفاتيح لمطابقة إدخال البريد الإلكتروني
        </p>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <CodeHighlighter file_name="index.html" code={codeExemple5} language="html" is_html={true} title="Input Email" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Input Email' url_change={codeExemple5Route} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html" logo={props.html_logo}>
                    <label>Email : </label> 
                    <input type="email" ref={inputRefExemple5} name="full_name" required/>
                    <input type="submit" value="Submit" onClick={codeExemple5RouteHandle}/>
            </Result>
        </div>
        <h5> 6. القيمة password </h5>
        <p className="style_divv">
            يتم استخدام نوع <kbd>&lt;input type="password"&gt;</kbd> مع السمة <bdi>type="password"</bdi>  لإنشاء حقل إدخال من نوع  <b>password</b> <small><small>(يتم حماية الأحرف )</small></small>.<br/>
            يجب تقديم أي نماذج تتضمن معلومات حساسة مثل كلمات المرور عبر <b>HTTPS</b>.<br/>
            نصيحة: أضف دائماالوسم  <kbd>&lt;label&gt;</kbd> للحصول على أفضل ممارسات إمكانية الوصول!
        </p>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <CodeHighlighter file_name="index.html" code={codeExemple6} language="html" is_html={true} title="Input Email" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Input Email' route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html" logo={props.html_logo}>
                <label>input your email : </label><input type="email" name='email'/><br/>
                <label>input your password :</label> <input type="password" name="password" /><br/>
            </Result>
        </div>
        <h5> 6. القيمة tel </h5>
        <p className="style_divv">
            يتم استخدام نوع <kbd>&lt;input type="tel"&gt;</kbd> مع السمة <bdi>type="tel"</bdi>  لإنشاء حقل إدخال من نوع رقم هاتف  <b>tel</b>.<br/>
            المتصفحات التي لا تدعم السمة  <bdi>type="tel"</bdi> تتراجع إلى كونها إدخال من النوع النصي  "text" قياسي.<br/>
            نصيحة: أضف دائما الوسم <kbd>&lt;label&gt;</kbd> للحصول على أفضل ممارسات إمكانية الوصول .
        </p>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <CodeHighlighter file_name="index.html" code={codeExemple7} language="html" is_html={true} title="Input Tel" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Input Tel' route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html" logo={props.html_logo}>
                <label>Insert Phone Number : </label> 
                <input type="tel" name="phone-number"/>
            </Result>
        </div>
        <h5> 7. القيمة button </h5>
        <p className="style_divv">
            يتم استخدام نوع <kbd>&lt;input type="button"&gt;</kbd> مع السمة <bdi>type="button"</bdi>  لإنشاء زر قابل للنقر (يستخدم في الغالب مع جافا سكريبت لتنشيط برنامج نصي) .<br/>
            غالبا نقوم بتحديد السمة <b>value</b> داخل الوسم <b>input</b>  وذالك من أجل إعطاء قيمة للزر أنضر المتال .
        </p>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <CodeHighlighter file_name="index.html" code={codeExemple8} language="html" is_html={true} title="Input Button" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Input Button' route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html" logo={props.html_logo}>
                <input type="button" value="Click"/>
            </Result>
        </div>
        <ul><li> ستتعلم كيف تقوم بستغلال هذه العناصر داخل دروس جافا سكريبت   </li></ul>
        <h5> 8. القيمة date </h5>
        <p className="style_divv">
            يتم استخدام السمة <kbd>&lt;input type="date"&gt;</kbd> مع السمة <bdi>type="date"</bdi>  لإنشاء حقل إدخال من نوع التاريخ  (تتضمن القيمة الناتجة السنة والشهر واليوم)  ولكن ليس الوقت  .<br/>
        </p>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <CodeHighlighter file_name="index.html" code={codeExemple9} language="html" is_html={true} title="Input Date" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Input Date' route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html" logo={props.html_logo}>
                Birthday: <input type="date" />
            </Result>
        </div>
        <h5> 9. القيمة time </h5>
        <p className="style_divv">
            يتم استخدام السمة <kbd>&lt;input type="time"&gt;</kbd> مع السمة <bdi>type="time"</bdi>  لإنشاء حقل إدخال من نوع الوقت  .<br/>
        </p>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <CodeHighlighter file_name="index.html" code={codeExemple10} language="html" is_html={true} title="Input Time" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Input Time' route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html" logo={props.html_logo}>
                Select a time : <input type="time"/>
            </Result>
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
            <CodeHighlighter file_name="index.html" code={codeExemple11} language="html" is_html={true} title="Input Number" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Input Number' route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html" logo={props.html_logo}>
                Quantity (between 1 and 5): <input type="number"/>
            </Result>
        </div>
        <ul>
            <li>   في المتال بما أننا قمنا بإعطاء الوسم input السمة min و max وذالك لتحديد قيمة قصوى وقيمة  دنيا .</li>
            <li> إن قام المستعمل بإدخال رقم أكبر من القيمة القصوى سيقوم المتصفح بعرض رسالة خطأ  .</li>
            <li> إن قام المستعمل بإدخال رقم أصغر من القيمة الدنيا سيقوم المتصفح بعرض رسالة خطأ  .</li>
        </ul>
        
        <h5> 11. القيمة range  </h5>
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
            <CodeHighlighter file_name="index.html" code={codeExemple12} language="html" is_html={true} title="Input Number" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Input Number' route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html" logo={props.html_logo}>
                Points (between 0 and 10): <input type="range" min="0" value="7" max="10"/>
            </Result>
        </div>
        <h3>2.  السمة name</h3> 
        <p className="style_divv">
        تحدد سمة <b>name</b> إسم الوسم <kbd>&lt;input/&gt;</kbd> .<br/>
        يتم استخدام السمة <b>name</b> للإشارة إلى الوسم في <b>JavaScript</b>  أو لإراسال البيانات الذي قام المستخدم بإدخالها إلى الخادم من اجل تنفيد أكواد برمجية أخرى  .<br/>
        سيتم تمرير قيم عناصر النموذج التي تحتوي على سمة اسم فقط عند إرسال نموذج غالبا يستخدم مع لغة <b>php</b>  وذالك عبر الوسم <kbd>&lt;form&gt;</kbd> .
        </p>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <CodeHighlighter file_name="index.html" code={codeExemple13} language="html" is_html={true} title="Input Number" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Input Number' url_change={codeExemple13Route} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html" logo={props.html_logo}>
                <label>First Name : </label> 
                <input ref={inputRefExemple13F} type="text" name="first_name"/><br/>
                <label>Last Name : </label> 
                <input type="text" ref={inputRefExemple13L} name="last_name"/><br/>
                <input type="submit" value="Submit" onClick={codeExemple13RouteHandle} />
            </Result>
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