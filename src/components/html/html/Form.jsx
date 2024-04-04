import { CodeHighlighter ,  Result} from "../../path";
import { useState , useRef} from "react";

export default function Form(props){
    
    const code = `    <form action="/submit_form" method="post">
        <!-- Text Input -->
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>

        <!-- Password Input -->
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>

        <!-- Radio Button -->
        <label>Gender:</label>
        <input type="radio" id="male" name="gender" value="male" checked>
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label>

        <!-- Checkbox -->
        <label for="subscribe">Subscribe to newsletter:</label>
        <input type="checkbox" id="subscribe" name="subscribe" value="yes">

        <!-- Dropdown Menu -->
        <label for="country">Country:</label>
        <select id="country" name="country">
            <option value="usa">United States</option>
            <option value="canada">Canada</option>
            <option value="uk">United Kingdom</option>
            <!-- Add more options as needed -->
            </select>

            <!-- Submit Button -->
        <input type="submit" value="Submit">
    </form>`
        const codeExemple1 = `    <form>
        <label>Full Name : </label>
        <input type="text" name="full_name"/>
        <input type="submit" value="Submit"/>
    </form>`

    const inputRefExemple1 = useRef(null);
    const [codeExemple1Route , setCodeExemple1Route] = useState("")         
    const codeExemple1RouteHandle =()=>{
        setCodeExemple1Route(`?full_name=${inputRefExemple1.current.value}`)
    }

    return(
<>
    <h1 className="heading-style">HTML Form</h1>
    <article className="mt-5">
        <h2 className="title-h2">1. الوسم form</h2>
        <p className="style_divv">
            يستخدم الوسم  <kbd>&lt;form&gt;</kbd> لإرسال المعلومات إلى الخادم وهو مهم جدا للأشخاص المهتمة بلغة <b>php</b> ولغات أخرى .<br/>
            الوسم <kbd>&lt;form&gt;</kbd> في العادة عبارة عن مجموعة عناصر توضع في الصفحة بهدف جعل المستخدم يدخل بيانات فيها. من الأمثلة الشائعة التي نتعامل فيها مع نماذج, هي صفحات تسجيل الدخول, صفحات إنشاء حساب جديد, إضافة تعليق, إضافة منشور إلخ.. <br/>
            الوسم <kbd>&lt;form&gt;</kbd>  بحد ذاته ليس شيئاً يتم عرضه في الصفحة بل هو بمثابة حاوية للوسوم التي نضعها فيه.<br/>
        </p>
        <CodeHighlighter  code={code} language="html" is_html={true}  addclassName="mt-3 mb-3" number={true} copie={true}/>
        <div className="mital">مثال : </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1} language="html" is_html={true} title="Form" addClass="mt-3 mb-3" copie={true}/>
        <Result title='Form' url_change={codeExemple1Route} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html" logo={props.html_logo}>
            <label>Full Name : </label> 
            <input type="text" ref={inputRefExemple1} name="full_name"/>
            <input type="submit" value="Submit" onClick={codeExemple1RouteHandle}/>
        </Result>
        <ul><li> عند النقر على الزر OK سيتم إرسال البيانات إلى الخادم .  </li></ul>
        <ul>    
            <li> لا تقلق إن لم تفهم الوسم <kbd>&lt;input&gt;</kbd> و الوسم <kbd>&lt;button&gt;</kbd> سنشرح ذالك في دروس القادمة . </li>
            <li> كل ما عليك فهمه  هو أن الوسم <kbd>&lt;form&gt;</kbd> يستعمل لإرسال البيانات إلى الخادم . </li>
        </ul>
    </article>
    <article>
        <h2 className="title-h2">2. مفوم الخادم </h2>
        <h5 className="title-h5">ما هو  الخادم</h5>
        <p className="style_divv">
        <b>السيرفر</b> أو <b>الخادم</b> أو <b>المخدم</b> أو <b> المزود</b> كلها مسميات تم ترجمتها من الكلمة الإنجليزية <b>Server</b>، والسيرفر هو عبارة عن جهاز حاسوب / كمبيوتر له القدرة على تحمل ظروف التشغيل بإستمرار لفترات طويلة قد تصل لأكثر من عام
        ، ويتم توصيل الخادم بالشبكة (أي كان نوعها أو حجمها - سواء شبكة داخلية أو شبكة الإنترنت)، ويتم تخصيص هذا الجهاز للقيام بمهام محددة لخدمة باقي الأجهزة المتصلة بنفس الشبكة، وطبقا للمهام التي يتخصص بها جهاز الخادم / السيرفر يتم تحديد عتاد الجهاز، فهناك مهام تحتاج لمعالجة الكثير من البيانات، وبالتالي يتم إختيار جهاز خادم يحتوي على أكثر من نواة - Core - في وحدة المعالجة المركزية، وهناك مهام تحتاج إلى الكثير من المساحات التخزينية، وبالتالي يتم إستخدام خادم يحتوي على وحدات تخزين كبيرة، وهكذا يتم تحديد العتاد الخاص بجهاز الخادم، ومع التطور في تصنيع أجهزة الكمبيوتر، فإن أي جهاز حاسوب ذو عتاد جيد (مواصفات الجهاز - Hardware) يمكن أن يستخدم كخادم في أي شبكة.
        </p>
        <h5 className="title-h5"> خادم الويب </h5>
        <p className="style_divv">
        وهو الجهاز الذي يحتوي على الملفات البرمجية للمواقع الإلكترونية، بحيث يقوم بإستقبال ومعالجة الطلبات القادمة من الشبكة (من خلال متصفحات المستخدمين)، وتقديم صفحات بمحتوى الموقع الإلكتروني، وتسمى الخدمة المقدمة في هذا النوع من الخوادم بـ إستضافة المواقع الإلكترونية.<br/>
        البرامج: يوجد العديد من البرامج التي يمكن إستخدامها لتقوم بمهمة خادم الويب ومنها على سبيل المثال وبترتيب الأكثر إستخداما <b>Apache Httpd</b> وهو الأكثر إستخداما في هذه الأيام، ويوجد أيضا برنامج <b>nginx</b> وبرنامج <b>IIS</b> وغيرها الكثير من البرامج.<br/>
        البروتوكولات: <b>http</b>, <b>https</b> <br/>
        العتاد: توجد عدة عوامل تؤثر في إختيار العتاد الخاص بخادم الويب، وأهم هذه العوامل هي عدد المستخدمين للموقع الإلكتروني ونوع الخدمة التي يقدمها الموقع المستضاف على خادم الويب، ولكن في أغلب الأحيان ولمعظم المواقع فإن خادم بمواصفات متوسطة يؤدي خدمة الويب بكفائة جيدة.<br/>
        </p>
        <ul><li> ستتعرف  على سمات  <b>form</b> أتناء تعلم دروس <b>php</b></li></ul>
    </article>
</>
    )
}