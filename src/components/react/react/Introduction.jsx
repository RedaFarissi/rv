import codes from "../../../assests/codes/react-js/react";
import images from "../imagesReact";
import { CodeHighlighter , CodeCommand  } from "../../path";


export default function Introduction(){
    return(
    <article id="Introduction">
        <h2 className="title-h2 mt-5"> 1 -مقدمة حول React.js  </h2>
        <h3 id="What_is_React" className="title-h3">1 - ما هو React  </h3>
        <p className="style_divv">
            <ul>
              <li><b>React</b> هو مكتبة جافا سكريبت تم إنشاؤها بواسطة <b>Facebook</b>.</li>
              <li>يشار إليه أحيانًا باسم إطار عمل جافا سكريبت الأمام.</li>
              <li>يستخدم <b>React</b> لبناء مكونات واجهة المستخدم <b>(UI)</b>، خاصة في سياق تطبيقات الصفحة الواحدة.</li>
            </ul>
        </p>
        <h3 id="How_react_work" className="title-h3">2 - كيف يعمل React  </h3>
        <p className="style_divv">
          <ul>
            <li>تقوم <b>React</b> بإنشاء <b>DOM</b> افتراضي <b>(Virtual DOM)</b> في الذاكرة.</li>
            <li>بدلاً من التلاعب المباشر في <b>DOM</b> الخاص بالمستعرض ، يقوم <b>React</b> بإنشاء <b>DOM</b> افتراضي في الذاكرة ، حيث يقوم بجميع العمليات اللازمة ، قبل أن يجري التغييرات في <b>DOM</b> الخاص بالمستعرض.</li>
            <li><b>React</b> يقوم فقط بتغيير ما يحتاج إلى التغيير.</li>
            <li>يكتشف <b>React</b> التغييرات التي تم إجراؤها ويقوم بتغيير ما يحتاج فقط إلى التغيير.</li>
          </ul>
        </p>
        <h3 className="title-h3" id="What_you_need_to_get_started">3 - ما تحتاجه لاستخدام React </h3>
        <p className="style_divv">
         <ul>
          <li><b className="text-success">فهم جيد لل HTML و ES6 :</b> من المفيد أن يكون لديك فهم جيد لل <b>HTML</b> لبناء صفحات الويب ولـ <bdi>ES6 (ECMAScript 2015)</bdi> لكتابة رمز <b>JavaScript</b> الحديث.</li>
          <li><b className="text-success">تثبيت <b>Node.js</b> :</b> يجب تثبيت <b>Node.js</b> على جهاز الكمبيوتر الخاص بك. يتم بناء تطبيقات <b>React</b> وإدارتها عادة باستخدام <b>Node.js</b> ومدير حزمه (npm).</li>
          <li><b className="text-success">npm و npx :</b> يتم تثبيت <b>npm</b> (مدير حزم Node) و <b>npx</b> (تنفيذ حزمة Node) تلقائيًا عند تثبيت <b>Node.js</b> ، يُستخدم <b>npm</b> لإدارة وتثبيت الحزم ، ويُستخدم <b>npx</b> لتنفيذ الحزم. </li>
         </ul>
        </p>
        <h3 className="title-h3" id="multiple_versions_of_Node">4 - استخدم nvm لإدارة إصدارات متعددة من Node.js </h3>
        <p className="style_divv">
          في <b>React</b>، يشير <b>nvm</b> إلى <b>Node Version Manager</b>، وهي أداة تُستخدم لإدارة إصدارات <b>Node.js</b> المتعددة على جهازك. ومع ذلك، في سياق تطوير <b>React</b>، قد تشير إلى شيء آخر أو استخدام محدد لـ "nvm".
        </p>
        <h5 className="title-h5">1 - تثبيت  nvm</h5>
        <p className="style_divv">
            أولا عليك تثبيت <b>nvm</b>. يمكنك اتباع تعليمات التثبيت المتوفرة في مستودع <a className="text-success" href="https://github.com/coreybutler/nvm-windows/releases">GitHub </a>.
        </p>
        <img src={images.react5} className="w-100" alt="react5" />
        <ul><li> تحقق من نجاح التثبيت </li></ul>
        <CodeCommand>nvm version</CodeCommand>
        <ul><li>حدد الإصدارات المتوفرة من <b>Node.js</b> التي يمكنك تثبيتها باستخدام <b>nvm</b></li></ul>
        <CodeCommand>nvm list available</CodeCommand>
        
        <h5 className="title-h5">2 - قم بتثبيت إصدارات Node.js</h5>
        <p className="style_divv">
            بمجرد تثبيت <b>nvm</b>، يمكنك استخدامه لتثبيت إصدارات مختلفة من <b>Node.js</b>. على سبيل المثال، لتثبيت الإصدار <b>12</b> من <b>Node.js</b>، يمكنك استخدام الأمر التالي:
            <CodeCommand>nvm install 12</CodeCommand>
            <CodeCommand>nvm install latest</CodeCommand>
            يمكنك تثبيت إصدارات متعددة من <b>Node.js</b> باستخدام أوامر مماثلة.
        </p>
        <h5 className="title-h5">3 - التبديل بين إصدارات Node.js</h5>
        <p className="style_divv">
            يمكنك التبديل بسهولة بين إصدارات <b>Node.js</b> المثبتة باستخدام الأمر التالي:
            <CodeCommand>nvm use 12</CodeCommand>
            يؤدي هذا إلى تعيين الإصدار <b>12</b> من <b>Node.js</b> باعتباره الإصدار النشط لجلستك الطرفية الحالية.
        </p>
        <h5 className="title-h5">4 - قم بتعيين إصدار Node.js الافتراضي</h5>
        <p className="style_divv">
            إذا كنت تريد تعيين إصدار <b>Node.js</b> افتراضي لجلسات العمل الطرفية الجديدة، فيمكنك استخدام:
            <CodeCommand>nvm alias default 15</CodeCommand>
        </p>
        <h3 className="title-h3" id="Verify_required_installations">5 - التحقق من التثبيتات المطلوبة</h3>
        <h5 className="title-h5">فحص إصدار Node.js</h5>
        <CodeCommand>node -v</CodeCommand>
        <h5 className="title-h5">فحص إصدار npm</h5>
        <CodeCommand>npm -v</CodeCommand>
        <h5 className="title-h5">فحص إصدار npx</h5>
        <CodeCommand>npx -v</CodeCommand>
        <h3 className="title-h3" id="ES6">6 - (ES6) </h3>
        <p className="style_divv">
          <b>ECMAScript 6</b> (المعروفة أيضًا بـ ES6) هي إصدار جديد من لغة <b>JavaScript</b> تم نشره في عام 2015. وهي تأتي مع العديد من الميزات الجديدة والتحسينات التي تهدف إلى تحسين القراءة والكتابة للمطورين. إليك تعريف بسيط وأمثلة لبعض ميزات <b>ES6</b>:
        </p>
        <h5 className="title-h5">class</h5>
        <CodeHighlighter  code={codes[0].ES6.class[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <h5 className="title-h5">تعريف المتغيرات بـ let و const</h5>
        <CodeHighlighter  code={codes[0].ES6.variable[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <h5 className="title-h5">الدوال السهمية (Arrow Functions)</h5>
        <CodeHighlighter  code={codes[0].ES6.arrow[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <h5 className="title-h5">التفكيك (Destructuring)</h5>
        <CodeHighlighter  code={codes[0].ES6.destructuring[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <h5 className="title-h5">(Modules)</h5>
        <CodeHighlighter  code={codes[0].ES6.modules[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <h5 className="title-h5">تعيين قيمة افتراضية لمتغير (Default Parameter)</h5>
        <CodeHighlighter  code={codes[0].ES6.default_parameter[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <h5 className="title-h5">عامل الانتشار (Spread Operator):</h5>
        <CodeHighlighter  code={codes[0].ES6.spread_operator[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <h5 className="title-h5">التكرار على الكائنات (Object Iteration)</h5>
        <CodeHighlighter  code={codes[0].ES6.object_iteration[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <h3 className="title-h3" id="Create_React_App">7 - إنشاء تطبيق App</h3>
        <CodeCommand>npm cache verify</CodeCommand>
        <CodeCommand>npx create-react-app myproject</CodeCommand>
        <p><b>myproject</b> هو اسم المشروع الذي استخدمته</p>
        <h3 className="title-h3" id="Run_React_App"> 8 - تشغيل تطبيق App</h3>
        <CodeCommand>cd myproject</CodeCommand>
        <CodeCommand>npm start</CodeCommand>
        <h5 className="title-h5">كنتيجة، تم تنزيل هذا الملف على npm وهو قيد الاستخدام بالفعل</h5> 
        <img src={images.react1} alt="react"  className="img"/>
        <img src={images.react2} alt="react"  className="img"/>
        <img src={images.react3} alt="react"  className="img"/>
    </article>

    )
}