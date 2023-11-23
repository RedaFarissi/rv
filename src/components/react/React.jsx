import images from "./imagesReact";
import { CodeHighlighter , CodeCommand , Result } from "../path";
import react_logo from "../../assests/images/logo/react_logo.svg";
import ThisState from "./exemple/ThisState"
import codes from "../../assests/codes/react-js/react"


function React(){

  const arrays = codes.map(e =>{ 
    const keys = Object.keys(e) 
    var keys_map;
    if (keys.includes("title")) { 
      keys_map = keys.map((key) => (
        key === "title" ? <dt className="aside-dl-dt" key={key}><a href={`/react#${e[key]}`}><i className="fa-solid fa-caret-right"></i> {e[key]}</a></dt> : <dd className="aside-dl-dd" key={key}><a href={`/react#${key}`}>{key.replace(/_/g, ' ')}</a></dd>
      ));
    } else {
      keys_map = <dt className="aside-dl-simple" key={keys[0]}><a href={`/react#${keys[0]}`}>{keys[0].replace(/_/g, ' ')} </a></dt>;
    }
    return keys_map
  });

return(
 <main>
  <aside  className="aside">
      <h5 className="mt-3">React Tutorials</h5>
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
            <li>React هو مكتبة جافا سكريبت تم إنشاؤها بواسطة Facebook.</li>
            <li>يشار إليه أحيانًا باسم إطار عمل جافا سكريبت الأمام.</li>
            <li>يستخدم React لبناء مكونات واجهة المستخدم (UI)، خاصة في سياق تطبيقات الصفحة الواحدة.</li>
          </ul>
        </p>
        <h3 id="How_react_work" className="title-h3">2 - كيف يعمل React  </h3>
        <p className="style_divv">
          <ul>
            <li>تقوم React بإنشاء DOM افتراضي (Virtual DOM) في الذاكرة.</li>
            <li>بدلاً من التلاعب المباشر في DOM الخاص بالمستعرض ، يقوم React بإنشاء DOM افتراضي في الذاكرة ، حيث يقوم بجميع العمليات اللازمة ، قبل أن يجري التغييرات في DOM الخاص بالمستعرض.</li>
            <li>React يقوم فقط بتغيير ما يحتاج إلى التغيير.</li>
            <li>يكتشف React التغييرات التي تم إجراؤها ويقوم بتغيير ما يحتاج فقط إلى التغيير.</li>
          </ul>
        </p>
       
        <h3 className="title-h3" id="neede_to_use_React_js">3 - ما تحتاجه لاستخدام React </h3>
        <p className="style_divv">
         <ul>
          <li><span className="text-success">فهم جيد لل HTML و ES6 :</span> من المفيد أن يكون لديك فهم جيد لل HTML لبناء صفحات الويب ولـ <bdi>ES6 (ECMAScript 2015)</bdi> لكتابة رمز JavaScript الحديث.</li>
          <li><span className="text-success">تثبيت Node.js :</span> يجب تثبيت Node.js على جهاز الكمبيوتر الخاص بك. يتم بناء تطبيقات React وإدارتها عادة باستخدام Node.js ومدير حزمه (npm).</li>
          <li><span className="text-success">npm و npx :</span> يتم تثبيت npm (مدير حزم Node) و npx (تنفيذ حزمة Node) تلقائيًا عند تثبيت Node.js ، يُستخدم npm لإدارة وتثبيت الحزم ، ويُستخدم npx لتنفيذ الحزم. </li>
         </ul>
        </p>
        <h3 className="title-h3" id="Verify_required_installations">4 - التحقق من التثبيتات المطلوبة</h3>
        <h5>فحص إصدار Node.js</h5>
        <CodeCommand>node -v</CodeCommand>
        <h5>فحص إصدار npm</h5>
        <CodeCommand>npm -v</CodeCommand>
        <h5>فحص إصدار npx</h5>
        <CodeCommand>npx -v</CodeCommand>
        <h3 className="title-h3" id="ES6">4 - (ES6) </h3>
        <p className="style_divv">
          ECMAScript 6 (المعروفة أيضًا بـ ES6) هي إصدار جديد من لغة JavaScript تم نشره في عام 2015. وهي تأتي مع العديد من الميزات الجديدة والتحسينات التي تهدف إلى تحسين القراءة والكتابة للمطورين. إليك تعريف بسيط وأمثلة لبعض ميزات ES6:
        </p>
        <h5>(Classes)</h5>
        <CodeHighlighter  code={codes[0].ES6.class[0]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <h5>تعريف المتغيرات بـ let و const</h5>
        <CodeHighlighter  code={codes[0].ES6.variable[0]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <h5>الدوال السهمية (Arrow Functions)</h5>
        <CodeHighlighter  code={codes[0].ES6.arrow[0]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <h5>التفكيك (Destructuring)</h5>
        <CodeHighlighter  code={codes[0].ES6.destructuring[0]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <h5>(Modules)</h5>
        <CodeHighlighter  code={codes[0].ES6.modules[0]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <h5>تعيين قيمة افتراضية لمتغير (Default Parameter)</h5>
        <CodeHighlighter  code={codes[0].ES6.default_parameter[0]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <h5>عامل الانتشار (Spread Operator):</h5>
        <CodeHighlighter  code={codes[0].ES6.spread_operator[0]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <h5>التكرار على الكائنات (Object Iteration)</h5>
        <CodeHighlighter  code={codes[0].ES6.object_iteration[0]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <h3 className="title-h3" id="Create_React_App">5 - إنشاء تطبيق App</h3>
        <CodeCommand>npm cache verify</CodeCommand>
        <CodeCommand>npx create-react-app myproject</CodeCommand>
        <p><b>myproject</b> هو اسم المشروع الذي استخدمته</p>
        <h3 className="title-h3" id="Run_React_App"> 6 - تشغيل تطبيق App</h3>
        <CodeCommand>cd myproject</CodeCommand>
        <CodeCommand>npm start</CodeCommand>
        <h5>كنتيجة، تم تنزيل هذا الملف على npm وهو قيد الاستخدام بالفعل</h5> 
        <img src={images.react1} alt="react"  className="img"/>
        <img src={images.react2} alt="react"  className="img"/>
        <img src={images.react3} alt="react"  className="img"/>
  </article>

  <article id="Component">
    <h2 className="title-h2">2 - المكوّنات (Components) </h2>
      <p className="style_divv">
        تعريف المكوّن (Component) في سياق React:<br/><br/>
        في React، يُعتبر المكوّن هو قطعة أساسية في بناء وتنظيم واجهة المستخدم (UI). يُمثل كل مكوّن جزءًا من واجهة المستخدم، ويمكن استخدامه لإنشاء وإدارة العناصر المختلفة داخل التطبيق.
      </p>
      <h3 className="title-h3" id="JSX">1 - ما هو (JSX)</h3>
      <p className="style_divv">
        JSX تسمح لنا بكتابة عناصر HTML في JavaScript ووضعها في DOM بدون أي أساليب createElement() أو appendChild().<br/><br/>
        JSX يحول علامات HTML إلى عناصر React.<br/><br/>
        ليس من الضروري استخدام JSX، ولكن JSX يجعل من السهل كتابة تطبيقات React.<br/><br/>
        في React، يمكنك كتابة JSX في علامة HTML واحدة. إذا كنت ترغب في استخدام العديد من العلامات، استخدم <bdi>{"<>"} ..... {"</>"}</bdi>
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
        <li>يقوم بإرجاع JSX الذي يصف العناصر التي يجب عرضها.</li>
      </ul>
      <div className="mital">متال : </div>
      <ul>
        <li> في هذا المثال، قمنا بإنشاء مكونين: ComponentH2 و Paragraph .</li>
        <li>لاستخدام المكون، يلزمك استخدام خيار الاستيراد والتصدير الافتراضي. </li>
        <li>في مكون التطبيق نستخدم ComponentH2 و Paragraph. </li>
      </ul>
      <CodeHighlighter  code={codes[1].function_Component[0]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/>
      <Result title={'React App'} logo={react_logo} route="localhost:3000">
        <h1>  Component haeding</h1><br />
        <p className="p"> Component paragraph </p><br />
      </Result>
      <h3 className="title-h3" id="function_Component_props">3 - مكوّن الدالة الذي يقبل خصائص (props).</h3>
      <ul>
        <li> في React، يمكن تمرير البيانات إلى المكوّنات باستخدام الخصائص (props). الخصائص تمثل معلومات إضافية يمكن تمريرها من المكوّن الأب إلى المكوّن الابن. إليك كيفية تعريف واستخدام مكوّن دالة (Function Component) مع خصائص .</li>
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
        تمامًا مثل أحداث DOM في (Event DOM) HTML  ، يمكن لـ React القيام بإجراءات استنادًا إلى أحداث المستخدم.<br/><br/>
        React لديها نفس أحداث HTML: click، change، mouseover، إلخ.<br/><br/>
        أحداث React مكتوبة بتركيبة camelCase:
        <ul>
          <li>onClick بدلاً من onclick.</li>
          <li>onSubmit بدلاً من onsubmit.</li>
          <li>onChange بدلاً من onchange.  إلخ. </li>
        </ul>
        
        معالجو الأحداث في React يتم كتابتهم داخل أقواس معوجة:
        onClick={"{"}shoot{"}"} بدلاً من <bdi>onClick="shoot()"</bdi>
      </p>
      <CodeHighlighter code={codes[2].Events[0]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/>
      <Result title={'React App'} logo={react_logo} route="localhost:3000">
        <button onClick={()=>{alert("take Shoot function")}}>Shoot!</button>
      </Result>
      <p><ul><li>إذا كتبت <bdi>onClick={"{"}shoot(){"}"}،</bdi> فسيتم تشغيل الوظيفة <bdi>shoot()</bdi> عند بدء التطبيق.</li></ul></p>  
  </article>    

  <article id="Lists">
      <h2 className="title-h2">4 -  القوائم (Lists) </h2>
      <p className="style_divv">
        القوائم في React تشير إلى مجموعة من العناصر المترابطة يمكن عرضها أو تكرارها داخل واجهة المستخدم.<br/><br/>
        في React، ستقوم بعرض القوائم باستخدام نوع من أنواع الحلقات. وأسلوب استخدام دالة <bdi>map()</bdi> في JavaScript على الأراي (المصفوفة) هو عادة الأسلوب المفضل.
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
      يجب أن تكون الصور في مجلد src/ <br/>
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
      يمكنك أيضًا استخدام import لجلب مكتبات أو وحدات خارجية. على سبيل المثال، إذا كنت ترغب في استخدام مكتبة axios لعمل طلبات HTTP، يمكنك استيرادها بهذه الطريقة.<br/><br/>
      سنتطرق لذالك في دروس المكتبات . 
    </p>
  </article>

  <article id="props_children">
    <h2 className="title-h2">7 - الخاصية (props.children)  </h2>
    <p className="style_divv">
      في React، props.children هو خاصية تُستخدم لنقل عناصر الطفل (children) إلى داخل مكون. يمكن استخدام هذه الطريقة لتمرير المحتوى بين عناصر الفتح والإغلاق ({"<"}OpeningTag{">"}...{"<"}/ClosingTag{">"}).<br/><br/>
      تسمح props.children بتوجيه أي شيء يُمكن عرضه داخل تكوين المكون.
    </p>
    <CodeHighlighter code={codes[6].props_children[0]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/> 
    <CodeHighlighter code={codes[6].props_children[1]} language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/> 
  </article>

  <article id="hooks">
    <h2 className="title-h2">8 - (Hooks) </h2>
    <h3 className="title-h3" id="useState">1 - <bdi>useState()</bdi> </h3>
    <p className="style_divv">
      يسمح لنا React useState Hook بتتبع الحالة في مكون الوظيفة.<br/><br/>
      تشير الحالة عمومًا إلى البيانات أو الخصائص التي يجب تتبعها في التطبيق لاستخدام الحالة، يجب عليك تضمين التعليمات البرمجية أدناه في الملف Component.
    </p>
    <CodeHighlighter code={codes[7].useState[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
    <p>
      <ul><li>لإنشاء ال state</li></ul>
    </p>
    <CodeHighlighter code={codes[7].useState[1]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
    <p><ul><li>للحصول على قيمة ال state</li></ul></p>
    <CodeHighlighter code={codes[7].useState[2]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
    <p><ul><li>لتغيير قيمة ال state</li></ul></p>
    <CodeHighlighter code={codes[7].useState[3]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
    <p><ul><li>لتغيير قيمة مفتاح معين في الكائن عن طريق ال state </li></ul></p>
    <CodeHighlighter code={codes[7].useState[4]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
    <div className="mital">متال : </div>
    <img src={images.react4} alt="react"  className="img"/>
    
    <h3 className="title-h3" id="this_state">2 - this.state</h3>
    <p className="style_divv">
      نستخدم this.state عندما نعمل مع مكون الفئة (Component class)
    </p>
    <h5>1 - إنشاء حالة المكون (this.state) و إعطائه قيمة أولية </h5>
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
    <h5>2 - تغيير القيمة (this.state) </h5>
    <CodeHighlighter code={codes[7].this_state[1]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
    <Result title={'React App'} logo={react_logo} route="localhost:3000">
      <ThisState />
    </Result>
  </article>




  <article id="packages">
    <h2 className="title-h2">9 - Packages React</h2>
    <h3 className="title-h3" id='npm_list'>1 - npm list  </h3>
    <p className="style_divv">
      يقوم بعرض جميع الحزم المثبتة في مشروع Node.js بشكل تسلسلي يظهر توزيع الحزم.<br/><br/>
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
      يعتمد Axios على الوعد، مما يمنحك القدرة على الاستفادة من مزامنة JavaScript وانتظار تعليمات برمجية غير متزامنة أكثر قابلية للقراءة.<br/><br/>  
      يسهّل Axios إرسال طلبات HTTP وتلقي الاستجابات، دون الحاجة إلى القلق بشأن التفاصيل ذات المستوى المنخفض حول كيفية إرسال هذه الطلبات ومعالجتها.
    </p>
    <h5> 1 - تثبيت المكتبة </h5>
    <CodeCommand>npm install axios</CodeCommand>
    <h5> 2 - إستيراد المكتبة </h5>
    <CodeHighlighter code={codes[8].axios[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
    <h5> 3 - إرسال بيانات axios (post) </h5>
    <div className="mital">متال 1 : </div>
    <CodeHighlighter code={codes[8].axios[1]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
    <div className="mital">متال 2 : </div>
    <CodeHighlighter code={codes[8].axios[2]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
    <h5> 4 - axios.get </h5>
    <div className="mital">متال 1 : </div>
    <CodeHighlighter code={codes[8].axios[3]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
    <div className="mital">متال 2 : </div>
    <CodeHighlighter code={codes[8].axios[4]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
    <ul>
      <li>إستخدام <b className="text-success">{"{"}withCredentials: true{"}"}</b> في طلب Axios يرتبط بمعالجة مشكلة مشاركة الموارد عبر أصل الموارد (CORS) وإدراج الاعتمادات مثل (cookies) أو (session)  في الطلب.</li>
    </ul>
    


    <h3 className="title-h3" id="react_paypal_js"> 3 - مكتبة react-paypal-js </h3>
    <a href="https://paypal.github.io/react-paypal-js/?path=/story/getting-started--page"> react-paypal-js </a>
    <h3 className="title-h3" id="react_sass"> 4 - مكتبة sass</h3>
    <h5>1 - تثبيت المكتبة </h5>
    <CodeCommand>npm install sass</CodeCommand>
    <h5> 2 - إستيراد ملف sass ذاخل component </h5>
    <CodeHighlighter code={codes[8].react_sass[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
  
    <h3 className="title-h3" id="Router">5 - مكتبة Router  </h3>
    <p className="style_divv">
      مكتبة React Router هي مكتبة تستخدم في تطبيقات React لإدارة التنقل وتحديث عناوين الصفحات بطريقة ديناميكية وبدون إعادة تحميل الصفحة. يتمثل هدفها الرئيسي في توفير تجربة تصفح سلسة داخل تطبيق React دون الحاجة إلى تحميل صفحات جديدة من الخادم.
    </p>
    <h5>1 - تثبيت المكتبة </h5>
    <ul><li><small>الإصدار الأخير</small></li></ul>
    <CodeCommand>npm install react-router-dom@latest</CodeCommand>
    <ul><li><small>نسخة محددة</small></li></ul>
    <CodeCommand>npm install react-router-dom@18.2.0</CodeCommand>
    <h5>2 - الغاء تثبيت المكتبة </h5>
    <CodeCommand>npm uninstall react-router-dom</CodeCommand>
    <h5>3 - إستخدام المكتبة </h5>
    <CodeHighlighter code={codes[8].Router[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
    
    
    <h3 className="title-h3" id="useNavigate_Router">6 - useNavigate </h3>
    <div>
      <p className="style_divv">
      useNavigate عبارة عن  <bdi>(React Hook)</bdi> توفره مكتبة React Router والذي يمكن استخدامه للتنقل برمجيًا بين الصفحات أو المسارات المختلفة في تطبيق React.
      <CodeHighlighter code={codes[8].useNavigate_Router[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
      </p>
    </div>
    <h3 className="title-h3" id="useParams_Router">7- useParams </h3>
    <p className="style_divv">
        useParams عبارة عن  <bdi>(React Hook)</bdi>  توفره مكتبة React Router الذي يستخرج معلمات المسار من عنوان URL، مما يوفر الوصول إلى القيم الديناميكية مثل الارتباطات الثابتة أو المعرفات في المكونات.
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
      react-syntax-highlighter هو مكتبة React تُستخدم لتحسين تظليل وتلوين رموز المصدر (syntax highlighting) في تطبيقات React. يعتبر ذلك مفيدًا عند عرض قطعة من الشيفرة المصدرية في واجهة المستخدم لتحسين قراءة الشيفرة.
    </p>
    <h5>1 - تثبيت المكتبة </h5>
    <CodeCommand>npm install react-syntax-highlighter</CodeCommand>
    <h5> 2 - إستخدام  المكتبة </h5>
    <CodeHighlighter code={codes[8].react_syntax_highlighter[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
    <h5> 3 - إستخدام  ميزات إضافية </h5>
    <CodeHighlighter code={codes[8].react_syntax_highlighter[1]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
    
  </article>

 </section>

</main>
)
}


export default React;