import codes from "../../assests/codes/react-js/react"
import images from "./imagesReact";
import { CodeHighlighter , CodeCommand , Result } from "../path";
import react_logo from "../../assests/images/logo/react_logo.svg";
import {ThisState, EventExemple, EventExemple2} from "./pathExemple"


function React(props){
  
  const arrays = codes.map(e =>{ 
    const keys = Object.keys(e) 
    var keys_map;
    if (keys.includes("title")) { 
      keys_map = keys.map((key) => (
        key === "title" ? <dt className="aside-dl-dt" key={key}><a href={`/react#${e[key]}`}><i className="fa-solid fa-caret-right"></i> {e[key]}</a></dt> : <dd className="aside-dl-dd" key={key}><a href={`/react#${key}`}><i class="fa-solid fa-circle"></i> {key.replace(/_/g, ' ')}</a></dd>
      ));
    } else {
      keys_map = <dt className="aside-dl-simple" key={keys[0]}><a href={`/react#${keys[0]}`}><i className="fa-solid fa-caret-right"></i> {keys[0].replace(/_/g, ' ')} </a></dt>;
    }
    return keys_map
  });

return(
 <main>
  <aside  className="aside">
      <dl className="list-group m-0">
        {arrays}
      </dl>
  </aside>
  <section className="section-conetent">
    <h1 className="heading-style heading-style-react-color"> REACT JS </h1>
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
        <CodeHighlighter  code={codes[0].ES6.class[0]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <h5 className="title-h5">تعريف المتغيرات بـ let و const</h5>
        <CodeHighlighter  code={codes[0].ES6.variable[0]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <h5 className="title-h5">الدوال السهمية (Arrow Functions)</h5>
        <CodeHighlighter  code={codes[0].ES6.arrow[0]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <h5 className="title-h5">التفكيك (Destructuring)</h5>
        <CodeHighlighter  code={codes[0].ES6.destructuring[0]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <h5 className="title-h5">(Modules)</h5>
        <CodeHighlighter  code={codes[0].ES6.modules[0]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <h5 className="title-h5">تعيين قيمة افتراضية لمتغير (Default Parameter)</h5>
        <CodeHighlighter  code={codes[0].ES6.default_parameter[0]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <h5 className="title-h5">عامل الانتشار (Spread Operator):</h5>
        <CodeHighlighter  code={codes[0].ES6.spread_operator[0]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <h5 className="title-h5">التكرار على الكائنات (Object Iteration)</h5>
        <CodeHighlighter  code={codes[0].ES6.object_iteration[0]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/>
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

    <article id="Component">
        <h2 className="title-h2">2 - المكوّنات (Components) </h2>
        <p className="style_divv">
          تعريف المكوّن <b>(Component)</b> في سياق <b>React</b> :<br/><br/>
          في <b>React</b>، يُعتبر المكوّن هو قطعة أساسية في بناء وتنظيم واجهة المستخدم <b>(UI)</b>. يُمثل كل مكوّن جزءًا من واجهة المستخدم، ويمكن استخدامه لإنشاء وإدارة العناصر المختلفة داخل التطبيق.
        </p>
        <h3 className="title-h3" id="JSX">1 - ما هو (JSX)</h3>
        <p className="style_divv">
            <b>JSX</b> تسمح لنا بكتابة عناصر <b>HTML</b> في <b>JavaScript</b> ووضعها في <b>DOM</b> بدون أي أساليب <bdi><b>createElement()</b></bdi> أو <bdi><b>appendChild()</b></bdi>.<br/><br/>
            <b>JSX</b> يحول علامات <b>HTML</b> إلى عناصر <b>React</b>.<br/><br/>
            ليس من الضروري استخدام <b>JSX</b>، ولكن <b>JSX</b> يجعل من السهل كتابة تطبيقات <b>React</b>.<br/><br/>
            في <b>React</b>، يمكنك كتابة <b>JSX</b> في علامة <b>HTML</b> واحدة. إذا كنت ترغب في استخدام العديد من العلامات، استخدم <bdi>{"<>"} ..... {"</>"}</bdi>
        </p>         
        <div className="mital">متال : </div>
        <CodeHighlighter  code={codes[1].JSX[0]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <Result title={'React App'} logo={react_logo} route="localhost:3000">
          <ul className="m-2">
            <li> a = 2 </li>
            <li> b = 9 </li>
            <li> a+b = 11 </li>
          </ul>
        </Result>
        <h3 className="title-h3" id="function_Component">2 - مكوّن الدالة (Function Component):</h3>
        <ul>
          <li>هو نوع من المكوّنات يُنشئ باستخدام دالة.</li>
          <li>يقوم بإرجاع <b>JSX</b> الذي يصف العناصر التي يجب عرضها.</li>
        </ul>
        <div className="mital">متال : </div>
        <ul>
          <li> في هذا المثال، قمنا بإنشاء مكونين: <b>ComponentH2</b> و <b>Paragraph</b> .</li>
          <li>لاستخدام المكون، يلزمك استخدام خيار الاستيراد والتصدير الافتراضي. </li>
          <li>في مكون التطبيق نستخدم <b>ComponentH2</b> و <b>Paragraph</b>. </li>
        </ul>
        <CodeHighlighter  code={codes[1].function_Component[0]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <Result title={'React App'} logo={react_logo} route="localhost:3000">
          <h1>  Component haeding</h1><br />
          <p className="p"> Component paragraph </p><br />
        </Result>
        <h3 className="title-h3" id="function_Component_props">3 - مكوّن الدالة الذي يقبل خصائص (props).</h3>
        <ul>
          <li> في <b>React</b>، يمكن تمرير البيانات إلى المكوّنات باستخدام الخصائص <b>(props)</b>. الخصائص تمثل معلومات إضافية يمكن تمريرها من المكوّن الأب إلى المكوّن الابن. إليك كيفية تعريف واستخدام مكوّن دالة <b>(Function Component)</b> مع خصائص .</li>
        </ul>
        <CodeHighlighter  code={codes[1].function_Component_props[0]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <Result title={'React App'} logo={react_logo} route="localhost:3000">
            <div>Hello, John!</div>
            <div>Hello, Sara!</div>
        </Result>
  
        <h3 className="title-h3" id="class_Component">4 - مكوّن الفئة (Class Component)</h3>
        <CodeHighlighter code={codes[1].class_Component[0]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <h3 className="title-h3" id="class_Component_this_props">4 - مكوّن الفئة (Class Component this.props)</h3>
        <CodeHighlighter code={codes[1].class_Component_this_props[0]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={codes[1].class_Component_this_props[1]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <Result title={'React App'} logo={react_logo} route="localhost:3000">
           <p style={{backgroundColor:"red",color:"white"}}> Learn React  </p>
        </Result>
        <h3 className="title-h3" id="Components_in_Component">5 - المكونات في المكون </h3>
        <CodeHighlighter code={codes[1].Components_in_Component[0]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={codes[1].Components_in_Component[1]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={codes[1].Components_in_Component[2]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/>
    </article>  

    <article id="Events">
        <h2 className="title-h2">3 - الأحداث (Events) </h2>
        <p className="style_divv">
            تمامًا مثل أحداث <b>DOM</b> في <b>(Event DOM HTML)</b>  ، يمكن لـ <b>React</b> القيام بإجراءات استنادًا إلى أحداث المستخدم.<br/><br/>
            <b>React</b> لديها نفس أحداث <b>HTML: click، change، mouseover</b>، إلخ.<br/><br/>
            أحداث <b>React</b> مكتوبة بتركيبة <b>camelCase</b>:
            <ul>
              <li><b>onClick</b> بدلاً من <b>onclick</b>.</li>
              <li><b>onSubmit</b> بدلاً من <b>onsubmit</b>.</li>
              <li><b>onChange</b> بدلاً من <b>onchange</b>.  إلخ. </li>
            </ul>
            معالجو الأحداث في <b>React</b> يتم كتابتهم داخل أقواس معوجة:
            onClick={"{"}shoot{"}"} بدلاً من <bdi>onClick="shoot()"</bdi>
        </p>
        <div className="mital">متال 1 : </div>
        <CodeHighlighter code={codes[2].Events[0]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <EventExemple images={images.html_logo}/>
        <p><ul><li>إذا كتبت <bdi>onClick={"{"}shoot(){"}"}،</bdi> فسيتم تشغيل الوظيفة <bdi><b>shoot()</b></bdi> عند بدء التطبيق.</li></ul></p>  
        <div className="mital">متال 2 : </div>
        <CodeHighlighter code={codes[2].Events[1]} language="css" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={codes[2].Events[2]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <Result title={'React App'} logo={react_logo} route="localhost:3000">
            <EventExemple2 />
        </Result>
    </article>    

    <article id="Lists">
        <h2 className="title-h2">4 -  القوائم (Lists) </h2>
        <p className="style_divv">
          القوائم في <b>React</b> تشير إلى مجموعة من العناصر المترابطة يمكن عرضها أو تكرارها داخل واجهة المستخدم.<br/><br/>
          في <b>React</b>، ستقوم بعرض القوائم باستخدام نوع من أنواع الحلقات. وأسلوب استخدام دالة <bdi><b>map()</b></bdi> في <b>JavaScript</b> على الأراي (المصفوفة) هو عادة الأسلوب المفضل.
        </p>
        <div className="mital">متال 1 : </div>
        <CodeHighlighter code={codes[3].Lists[0]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/> 
        <Result title={'React App'} logo={react_logo} route="localhost:3000">
          <ul className="m-0">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </Result>
        <div className="mital">متال 2 : </div>
        <CodeHighlighter code={codes[3].Lists[1]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/> 
        <Result title={'React App'} logo={react_logo} route="localhost:3000">
          <table className="table">
            <tr> <th>name</th> <th>age</th> </tr>
            <tr> <td>kama186758"</td> <td>26</td> </tr>
            <tr> <td>ama186758</td> <td>29</td> </tr>
            <tr> <td>kamila58</td> <td>23</td> </tr>
            <tr> <td>thami08</td> <td>19</td> </tr>
            <tr> <td>Reda6758</td> <td>16</td> </tr>
          </table>
        </Result>
        <div className="mital">متال 3 : </div>
        <CodeHighlighter code={codes[3].Lists[2]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/> 
        <Result title={'React App'} logo={react_logo} route="localhost:3000">
          <h1  className="m-0">My Garage</h1>
          <ul className="m-0">
            <li>Ford</li>
            <li>BMW</li>
            <li>Audi</li>
          </ul>    
        </Result>
    </article>

    <article id="Handle_images_react">
        <h2 className="title-h2">5 - التعامل مع الصور في React </h2>
        <p className="style_divv">
          يجب أن تكون الصور في مجلد <kbd>src/</kbd> <br/>
        </p>
        <div className="mital">متال : </div>
        <ul><li> في هذا المتال قمن بجلب الصورة من مسارها مباشرة  </li></ul>
        <CodeHighlighter code={codes[4].Handle_images_react[0]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/> 
        <CodeHighlighter code={codes[4].Handle_images_react[1]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/> 
        <Result title={'React App'} logo={react_logo} route="localhost:3000">
          <img src={react_logo} className="w-25 " alt="logo react" />
        </Result>
        <ul><li>ماذا لو إحتجت لجلب عدة صور ، الطريقة المستعملة في المثال السبق ستكون طريقة <span className="text-danger">غير عملية</span> لذلك <span className="text-success">قم بإنشاء ملف بامتداد js</span> لمعالجة تنظيم الصور</li></ul>
        <CodeHighlighter code={codes[4].Handle_images_react[2]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/> 
        <CodeHighlighter code={codes[4].Handle_images_react[3]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/> 
    </article>

    <article id="Handle_import">
        <h2 className="title-h2">6 -  استيراده ملف آخر (import)  </h2>
        <h3 className="title-h3">1 - استيراد مكوّنات (Components)</h3>
        <div className="style_divv">قبل نقوم باستيراد كل مكون من مساره  <bdi className="text-danger">(وهذا غير عملي)</bdi></div>
        <CodeHighlighter code={codes[5].Handle_import[0]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/> 
        <CodeHighlighter code={codes[5].Handle_import[1]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/> 
        <CodeHighlighter code={codes[5].Handle_import[2]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/> 
        <CodeHighlighter code={codes[5].Handle_import[3]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/> 
        <Result title={'React App'} logo={react_logo} route="localhost:3000">
          <h1>Header</h1>
          <p>This is the content of the app.</p>
          <h3>Footer</h3>
        </Result>
        <p className="style_divv">
          للحصول على مكونات تقع في مسارات مختلفة داخل مكون آخر بسهولة، <span className="text-success">نحتاج إلى إنشاء ملف بامتداد js</span> واستخدامه لإستراد كل الكونات .
        </p>
        <CodeHighlighter code={codes[5].Handle_import[4]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/> 
        <CodeHighlighter code={codes[5].Handle_import[5]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/> 
        <Result title={'React App'} logo={react_logo} route="localhost:3000">
          <h1>Header</h1>
          <p>This is the content of the app.</p>
          <h3>Footer</h3>
        </Result>
        <h3 className="title-h3">2 - استيراد مكتبات أو وحدات خارجية </h3>
        <p className="style_divv">
          يمكنك أيضًا استخدام <b>import</b> لجلب مكتبات أو وحدات خارجية. على سبيل المثال، إذا كنت ترغب في استخدام مكتبة <b>axios</b> لعمل طلبات <b>HTTP</b>، يمكنك استيرادها بهذه الطريقة.<br/><br/>
          سنتطرق لذالك في دروس المكتبات . 
        </p>
    </article>

  <article id="props_children">
    <h2 className="title-h2">7 - الخاصية (props.children)  </h2>
    <p className="style_divv">
      في <b>React</b>، <b>props.children</b> هو خاصية تُستخدم لنقل عناصر الطفل <b>(children)</b> إلى داخل مكون. يمكن استخدام هذه الطريقة لتمرير المحتوى بين عناصر الفتح والإغلاق ({"<"}OpeningTag{">"}...{"<"}/ClosingTag{">"}).<br/><br/>
      تسمح <b>props.children</b> بتوجيه أي شيء يُمكن عرضه داخل تكوين المكون.
    </p>
    <CodeHighlighter code={codes[6].props_children[0]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/> 
    <CodeHighlighter code={codes[6].props_children[1]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/> 
  </article>

  <article id="hooks">
    <h2 className="title-h2">8 - (Hooks) </h2>
    <h3 className="title-h3" id="useState">1 - <bdi>useState()</bdi> </h3>
    <p className="style_divv">
      يسمح لنا <b>React useState Hook</b> بتتبع الحالة في مكون الوظيفة.<br/><br/>
      تشير الحالة عمومًا إلى البيانات أو الخصائص التي يجب تتبعها في التطبيق لاستخدام الحالة، يجب عليك تضمين التعليمات البرمجية أدناه في الملف <b>Component</b>.
    </p>
    <CodeHighlighter code={codes[7].useState[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
    <p>
      <ul><li>لإنشاء ال <b>state</b></li></ul>
    </p>
    <CodeHighlighter code={codes[7].useState[1]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
    <p><ul><li>للحصول على قيمة ال <b>state</b></li></ul></p>
    <CodeHighlighter code={codes[7].useState[2]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
    <p><ul><li>لتغيير قيمة ال <b>state</b></li></ul></p>
    <CodeHighlighter code={codes[7].useState[3]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
    <p><ul><li>لتغيير قيمة مفتاح معين في الكائن عن طريق ال <b>state</b> </li></ul></p>
    <CodeHighlighter code={codes[7].useState[4]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
    <div className="mital">متال : </div>
    <img src={images.react4} alt="react"  className="img"/>
    
    <h3 className="title-h3" id="this_state">2 - this.state</h3>
    <p className="style_divv">
      نستخدم <b>this.state</b> عندما نعمل مع مكون الفئة <b>(Component class)</b>
    </p>
    <h5 className="title-h5">1 - إنشاء حالة المكون (this.state) و إعطائه قيمة أولية </h5>
    <CodeHighlighter code={codes[7].this_state[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
    <Result title={'React App'} logo={react_logo} route="localhost:3000">
      <ul>
        <li style={{fontSize: "24px", color: "red"}}>Admin</li>
        <li style={{fontSize: "24px", color: "red"}}>1</li>
        <li style={{fontSize: "24px", color: "red"}}>Reda Eskouni</li>
        <li>
          the state this.state[2] is true
        </li>
      </ul>
    </Result>
    <h5 className="title-h5">2 - تغيير القيمة (this.state) </h5>
    <CodeHighlighter code={codes[7].this_state[1]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
    <Result title={'React App'} logo={react_logo} route="localhost:3000">
      <ThisState />
    </Result>
  </article>




  <article id="packages">
    <h2 className="title-h2">9 - Packages React</h2>
    <h3 className="title-h3" id='npm_list'>1 - npm list  </h3>
    <p className="style_divv">
      يقوم بعرض جميع الحزم المثبتة في مشروع <b>Node.js</b> بشكل تسلسلي يظهر توزيع الحزم.<br/><br/>
      يتم عرض تفاصيل حول كل حزمة، بما في ذلك الإصدار المثبت وإصدارات الحزم الفرعية.  
    </p>
    <CodeCommand>npm list</CodeCommand>
    <p className="style_divv">
      يقوم أيضًا بعرض قائمة بالحزم المثبتة في المشروع، ولكن يقوم بتقليل التفاصيل للحزم الرئيسية فقط دون عرض الحزم الفرعية.<br/><br/>
      يعرض فقط الحزم الرئيسية دون التفصيل في الحزم الفرعية.
    </p>
    <CodeCommand>npm list --depth=0</CodeCommand>
    <h3 className="title-h3" id="axios">2 - مكتبة axios  </h3>
    <p className="style_divv">
      يعتمد <b>Axios</b> على الوعد، مما يمنحك القدرة على الاستفادة من مزامنة <b>JavaScript</b> وانتظار تعليمات برمجية غير متزامنة أكثر قابلية للقراءة.<br/><br/>  
      يسهّل <b>Axios</b> إرسال طلبات <b>HTTP</b> وتلقي الاستجابات، دون الحاجة إلى القلق بشأن التفاصيل ذات المستوى المنخفض حول كيفية إرسال هذه الطلبات ومعالجتها.
    </p>
    <h5 className="title-h5"> 1 - تثبيت المكتبة </h5>
    <CodeCommand>npm install axios</CodeCommand>
    <h5 className="title-h5"> 2 - إستيراد المكتبة </h5>
    <CodeHighlighter code={codes[8].axios[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
    <h5 className="title-h5"> 3 - إرسال بيانات axios (post) </h5>
    <div className="mital">متال 1 : </div>
    <CodeHighlighter code={codes[8].axios[1]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
    <div className="mital">متال 2 : </div>
    <CodeHighlighter code={codes[8].axios[2]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
    <h5 className="title-h5"> 4 - axios.get </h5>
    <div className="mital">متال 1 : </div>
    <CodeHighlighter code={codes[8].axios[3]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
    <div className="mital">متال 2 : </div>
    <CodeHighlighter code={codes[8].axios[4]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
    <ul>
      <li>إستخدام <b className="text-success">{"{"}withCredentials: true{"}"}</b> في طلب <b>Axios</b> يرتبط بمعالجة مشكلة مشاركة الموارد عبر أصل الموارد <b>(CORS)</b> وإدراج الاعتمادات مثل <b>(cookies)</b> أو <b>(session)</b>  في الطلب.</li>
    </ul>
    


    <h3 className="title-h3" id="react_paypal_js"> 3 - مكتبة react-paypal-js </h3>
    <a href="https://paypal.github.io/react-paypal-js/?path=/story/getting-started--page"> react-paypal-js </a>
    <h3 className="title-h3" id="react_sass"> 4 - مكتبة sass</h3>
    <h5 className="title-h5">1 - تثبيت المكتبة </h5>
    <CodeCommand>npm install sass</CodeCommand>
    <h5 className="title-h5"> 2 - إستيراد ملف sass ذاخل component </h5>
    <CodeHighlighter code={codes[8].react_sass[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
  
    <h3 className="title-h3" id="Router">5 - مكتبة Router  </h3>
    <p className="style_divv">
      مكتبة <b>React Router</b> هي مكتبة تستخدم في تطبيقات <b>React</b> لإدارة التنقل وتحديث عناوين الصفحات بطريقة ديناميكية وبدون إعادة تحميل الصفحة. يتمثل هدفها الرئيسي في توفير تجربة تصفح سلسة داخل تطبيق <b>React</b> دون الحاجة إلى تحميل صفحات جديدة من الخادم.
    </p>
    <h5 className="title-h5">1 - تثبيت المكتبة </h5>
    <ul><li><small>الإصدار الأخير</small></li></ul>
    <CodeCommand>npm install react-router-dom@latest</CodeCommand>
    <ul><li><small>نسخة محددة</small></li></ul>
    <CodeCommand>npm install react-router-dom@18.2.0</CodeCommand>
    <h5 className="title-h5">2 - الغاء تثبيت المكتبة </h5>
    <CodeCommand>npm uninstall react-router-dom</CodeCommand>
    <h5 className="title-h5">3 - إستخدام المكتبة </h5>
    <CodeHighlighter code={codes[8].Router[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
    
    
    <h3 className="title-h3" id="useNavigate_Router">6 - useNavigate </h3>
    <div>
      <p className="style_divv">
      <b>useNavigate</b> عبارة عن  <b>(React Hook)</b> توفره مكتبة <b>React Router</b> والذي يمكن استخدامه للتنقل برمجيًا بين الصفحات أو المسارات المختلفة في تطبيق <b>React</b>.
      <CodeHighlighter code={codes[8].useNavigate_Router[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
      </p>
    </div>
    <h3 className="title-h3" id="useParams_Router">7- useParams </h3>
    <p className="style_divv">
        <b>useParams</b> عبارة عن  <b>(React Hook)</b>  توفره مكتبة <b>React Router</b> الذي يستخرج معلمات المسار من عنوان <b>URL</b>، مما يوفر الوصول إلى القيم الديناميكية مثل الارتباطات الثابتة أو المعرفات في المكونات.
      <CodeCommand>npm install react-router-dom</CodeCommand>
    </p>
    <ul><li>نستخدم <bdi>(App Component)</bdi> فقط لإنشاء المسار وإخباره أن المسار يحتاج إلى معلمة باسم محدد</li></ul>
    <CodeHighlighter code={codes[8].useParams_Router[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
    <ul><li> في بيانات محتوى المكون، نقوم بإنشاء رابط للانتقال إلى المسار المحدد في التطبيق وتحديد المعلمة</li></ul>
    <CodeHighlighter code={codes[8].useParams_Router[1]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
    <ul><li> في تفاصيل المكون أحتاج فقط إلى استخدام <kbd>useParams</kbd> للحصول على parameter واستخدامها.  </li></ul>
    <CodeHighlighter code={codes[8].useParams_Router[2]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
  
    <h3 className="title-h3" id='react_syntax_highlighter'> 8 - مكتبة react-syntax-highlighter </h3>
    <p className="style_divv">
        <b>react-syntax-highlighter</b> هو مكتبة <b>React</b> تُستخدم لتحسين تظليل وتلوين رموز المصدر <b>(syntax highlighting)</b> في تطبيقات <b>React</b>. يعتبر ذلك مفيدًا عند عرض قطعة من الشيفرة المصدرية في واجهة المستخدم لتحسين قراءة الشيفرة.
    </p>
    <h5 className="title-h5">1 - تثبيت المكتبة </h5>
    <CodeCommand>npm install react-syntax-highlighter</CodeCommand>
    <h5 className="title-h5"> 2 - إستخدام  المكتبة </h5>
    <CodeHighlighter code={codes[8].react_syntax_highlighter[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
    <h5 className="title-h5"> 3 - إستخدام  ميزات إضافية </h5>
    <CodeHighlighter code={codes[8].react_syntax_highlighter[1]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
    <h5 className="title-h5"> 4 - الحصول على جميع التصاميم الممكنة في المكتبةالخاصة بي </h5>
    <CodeCommand>ls node_modules/react-syntax-highlighter/dist/esm/styles/prism</CodeCommand>
  </article>

 </section>

</main>
)
}


export default React;