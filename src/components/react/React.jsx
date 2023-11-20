import images from "./imagesReact";
import { CodeHighlighter } from "../path";

export default function React(){
  const codes = [
    {
      title:"Introduction", 
      What_is_React:"",
      How_react_work:"",
      What_you_need_to_get_started:"",
      Verify_required_installations:[`node -v`,`npm -v`,`npx -v`],
      ES6:{
class:`class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(\`\${this.name} says \${this.sound}\`);
  }
}

// Creating an instance of the class
const cat = new Animal('Cat', 'Meow');
cat.makeSound();        //Cat says Meow`,
variable:`let x = 5;
const pi = 3.14;`,      
arrow:`const multiply = (a, b) => a * b;
console.log(multiply(20,2))      //40`,
destructuring:`const person = { name: 'Ahmed', age: 25 };
const { name, age } = person;`,
modules:`// Exporting a module
export const add = (a, b) => a + b;

// Importing a module
import { add } from './math';`,
default_parameter:`function greet(name = 'Guest') {
  console.log(\`Hello, \${name}!\`);
}`,
spread_operator:`const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];`,
object_iteration:`const person = { name: 'Sara', age: 30 };
for (let key in person) {
  console.log(\`\${key}: \${person[key]}\`);
}`,
      },
      Create_React_App:[`npm cache verify`,`npx create-react-app myproject`],
      Run_React_App:[`cd myproject`,`npm start`]
    },
    { JSX:"" },
    {
      title:"Component",
      function_Component:"",
      function_Component_props:"",
      class_Component_this_props:"",
      Components_in_Components:"",
    },
    {Events:""},
    {state:""},
    {this_state:""},
    {Lists:""},
    {hindle_file_images_react:""},
    {hindle_import:""},
    {props_children:""},
    {
      title:"hooks",
      useNavigate:"",
      useParams:""
    },
    {
      title:"packages",
      npm_list:"",
      Router:"",
      axios:"",
      react_paypal_js:"",
      react_sass:"",
      react_syntax_highlighter:""
    }
  ]
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
      <h5 className="ms-2 mt-3">React Tutorials</h5>
      <dl className="list-group m-0">
        {arrays}
      </dl>
  </aside>
  <section className="section-conetent">
  <h1 className="heading-style-html"> REACT JS </h1>
  <article id="Introduction">
        <h2 className="title-h2 mt-5"> 1 -مقدمة في React.js  </h2>
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
        <CodeHighlighter  code={codes[0].Verify_required_installations[0]} addclassName="mt-3 mb-3" copie={true}/>
        <h5>فحص إصدار npm</h5>
        <CodeHighlighter  code={codes[0].Verify_required_installations[1]} addclassName="mt-3 mb-3" copie={true}/>
        <h5>فحص إصدار npx</h5>
        <CodeHighlighter  code={codes[0].Verify_required_installations[2]} addclassName="mt-3 mb-3" copie={true}/>
        <h3 className="title-h3" id="ES6">4 - (ES6) </h3>
        <p className="style_divv">
          ECMAScript 6 (المعروفة أيضًا بـ ES6) هي إصدار جديد من لغة JavaScript تم نشره في عام 2015. وهي تأتي مع العديد من الميزات الجديدة والتحسينات التي تهدف إلى تحسين القراءة والكتابة للمطورين. إليك تعريف بسيط وأمثلة لبعض ميزات ES6:
        </p>
        <h5>(Classes)</h5>
        <CodeHighlighter  code={codes[0].ES6.class} language="js" addclassName="mt-3 mb-3" copie={true}/>
        <h5>تعريف المتغيرات بـ let و const</h5>
        <CodeHighlighter  code={codes[0].ES6.variable} language="js" addclassName="mt-3 mb-3" copie={true}/>
        <h5>الدوال السهمية (Arrow Functions)</h5>
        <CodeHighlighter  code={codes[0].ES6.arrow} language="js" addclassName="mt-3 mb-3" copie={true}/>
        <h5>التفكيك (Destructuring)</h5>
        <CodeHighlighter  code={codes[0].ES6.destructuring} language="js" addclassName="mt-3 mb-3" copie={true}/>
        <h5>(Modules)</h5>
        <CodeHighlighter  code={codes[0].ES6.modules} language="js" addclassName="mt-3 mb-3" copie={true}/>
        <h5>تعيين قيمة افتراضية لمتغير (Default Parameter)</h5>
        <CodeHighlighter  code={codes[0].ES6.default_parameter} language="js" addclassName="mt-3 mb-3" copie={true}/>
        <h5>عامل الانتشار (Spread Operator):</h5>
        <CodeHighlighter  code={codes[0].ES6.spread_operator} language="js" addclassName="mt-3 mb-3" copie={true}/>
        <h5>التكرار على الكائنات (Object Iteration)</h5>
        <CodeHighlighter  code={codes[0].ES6.spread_operator} language="js" addclassName="mt-3 mb-3" copie={true}/>
        <h3 className="title-h3" id="Create_React_App">5 - إنشاء تطبيق App</h3>
        <CodeHighlighter  code={codes[0].Create_React_App[0]} language="js" addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={codes[0].Create_React_App[1]} language="js" addclassName="mt-3 mb-3" copie={true}/>
        <p><b>myproject</b> هو اسم المشروع الذي استخدمته</p>
        <h3 className="title-h3" id="Run_React_App"> 6 - تشغيل تطبيق App</h3>
        <CodeHighlighter  code={codes[0].Run_React_App[0]} language="js" addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={codes[0].Run_React_App[1]} language="js" addclassName="mt-3 mb-3" copie={true}/>
        <h5>كنتيجة، تم تنزيل هذا الملف على npm وهو قيد الاستخدام بالفعل</h5> 
        <img src={images.react8} alt="react"  className="img"/>
        <img src={images.react9} alt="react"  className="img"/>
        <img src={images.react10} alt="react"  className="img"/>
  </article>

  <article id="JSX">
    <h2 className="title-h2">3 - JSX</h2>
    <p className="style_divv">
      JSX تسمح لنا بكتابة عناصر HTML في JavaScript ووضعها في DOM بدون أي أساليب createElement() أو appendChild().<br/><br/>
      JSX يحول علامات HTML إلى عناصر React.<br/><br/>
      ليس من الضروري استخدام JSX، ولكن JSX يجعل من السهل كتابة تطبيقات React.<br/><br/>
      في React، يمكنك كتابة JSX في علامة HTML واحدة. إذا كنت ترغب في استخدام العديد من العلامات، استخدم <bdi>{"<>"} ..... {"</>"}</bdi>
    </p>         
    <div className="mital">متال : </div>
    <img src={images.react15} alt="react"  className="img"/>
    <img src={images.react16} alt="react"  className="img"/>
  </article>    

  <article id="Component">
    <h2 className="title-h2" >3 - المكوّنات (Components) </h2>
      <p className="style_divv">
        تعريف المكوّن (Component) في سياق React:<br/><br/>
        في React، يُعتبر المكوّن هو قطعة أساسية في بناء وتنظيم واجهة المستخدم (UI). يُمثل كل مكوّن جزءًا من واجهة المستخدم، ويمكن استخدامه لإنشاء وإدارة العناصر المختلفة داخل التطبيق.
      </p>
      <h3 className="title-h3" id="function_Component">1 - مكوّن الدالة (Function Component):</h3>
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
      <img src={images.react18} alt="react"  className="img"/>
      <img src={images.react19} alt="react"  className="img"/>
      <h3 className="title-h3" id="function_Component_props">2 - مكوّن الدالة الذي يقبل خصائص (props).</h3>
      <ul>
        <li> في React، يمكن تمرير البيانات إلى المكوّنات باستخدام الخصائص (props). الخصائص تمثل معلومات إضافية يمكن تمريرها من المكوّن الأب إلى المكوّن الابن. إليك كيفية تعريف واستخدام مكوّن دالة (Function Component) مع خصائص .</li>
      </ul>
      <img src={images.react20} alt="react"  className="img"/>
      <img src={images.react21} alt="react"  className="img"/>
      <img src={images.react22} alt="react"  className="img"/>   
      <h3 className="title-h3" id="class_Component_this_props">3 - class Component this.props</h3>
      <div className="alert alert-light mt-3 pb-0"><img src={images.react23} alt="react"  className="img"/></div>
      <div className="alert alert-light mt-3 pb-0"><img src={images.react24} alt="react"  className="img"/></div>
      <h3 className="title-h3" id="Components_in_Components">4 - Components in Components</h3>
      <div className="alert alert-light mt-3 pb-0"><img src={images.react25} alt="react"  className="w-100"/></div>
  </article>      

<br id="Events"/><br/>
<h2>4 - Events </h2>
<div className="alert alert-warning mt-3">
  Just like HTML DOM events, React can perform actions based on user events.<br/>
  React has the same events as HTML: click, change, mouseover etc.<br/>
  React events are written in camelCase syntax:<br/>
  <b>onClick</b> instead of <del>onclick</del>.<br/>
  React event handlers are written inside curly braces:<br/>
  onClick={"{"}shoot{"}"}  instead of onClick="shoot()"
  <div className="alert alert-light mt-3 pb-0"><img src={images.react26} alt="react"  className="w-100"/></div>
  <b>if you write <b>onClick={"{"}shoot(){"}"}</b> the button will click automatically </b>.
</div>

<br id="state"/><br/>
<h2>5 - useState() </h2>
<div className="alert alert-warning mt-3">
  The React <b>useState</b> Hook allows us to track state in a function component.<br/>
  State generally refers to data or properties that need to be tracking in an application  <br/>
  <p> to use state you need to include code below in your file Component. </p>
  <div className="alert bg-light text-dark mt-3 pb-0"><pre>import {"{"} useState {"}"} from "react";</pre></div>
  <p>to create state</p>
  {/* <div className="alert bg-light text-dark mt-3 pb-0">
    <pre>const [ state_name , setState_name] = useState({num:1, noba:true , _666:[]})</pre>
  </div> */}
  <p>to get value state</p>
  {/* <div className="alert bg-light text-dark mt-3 pb-0"><pre> console.log( state_name ) </pre></div> */}
  <p>to change value state</p>
  {/* <div className="alert bg-light text-dark mt-3 pb-0"><pre> setState_name(another_value) </pre></div> */}
  <p>to change specific key in object state </p>
  {/* <div className="alert bg-light text-dark mt-3 pb-0"><pre> setState_name( prevState => ({...prevState, key:value }) ) </pre></div> */}
  <p>to change specific value in array ussing index </p>
  {/* <div className="alert bg-light text-dark mt-3 pb-0"><pre> const arr = wlad.map(e => e); arr[i]="none"; setWlad(arr);</pre></div> */}
  <h5 className="text-danger">example 1</h5>
  <div className="alert alert-light mt-3 pb-0"><img src={images.react31} alt="react"  className="w-100"/></div>
  <h5 className="text-danger">example 2</h5>
  <div className="alert alert-light mt-3 pb-0"><img src={images.react32} alt="react"  className="w-100"/></div>
</div>

<br id="this_state"/><br/>
<h2>6 - this.state</h2>
<div className="alert alert-warning mt-3">
  <b>we use this.state when we work with class Component </b>
  <h3>1 - create value this.state and give him value </h3>
  <div className="alert alert-light mt-3 pb-0"><img src={images.react33} alt="react"  className="w-100"/></div>
  <h3>2 - change value this.state </h3>
  <h5 className="text-danger">example </h5>
  <div className="alert alert-light mt-3 pb-0"><img src={images.react34} alt="react"  className="w-100"/></div>
  <h5 className="text-danger">Result before click</h5>
  <div className="alert alert-light mt-3 pb-0"><img src={images.react35} alt="react"  className="w-100"/></div>
  <h5 className="text-danger">Result after click</h5>
  <div className="alert alert-light mt-3 pb-0"><img src={images.react36} alt="react"  className="w-100"/></div>
</div>

<br id="Lists"/><br/>
<h2>7 - Lists </h2>
<div className="alert alert-warning mt-3">
  In React, you will render lists with some type of loop.<br/>
  The JavaScript map() array method is generally the preferred method.<br/>
  <h5 className="text-danger">Example 1</h5>
  <div className="alert alert-light mt-3 pb-0"><img src={images.react27} alt="react"  className="w-100"/></div>
  <h5 className="text-danger">Example 2</h5>
  <div className="alert alert-light mt-3 pb-0"><img src={images.react28} alt="react"  className="w-100"/></div>
  <h5 className="text-danger">Result</h5>
  <div className="alert alert-light mt-3 pb-0"><img src={images.react29} alt="react"  className="w-100"/></div>
  <h5 className="text-danger">Example 3</h5>
  <div className="alert alert-light mt-3 pb-0"><img src={images.react30} alt="react"  className="w-100"/></div>
</div>


<br id="hindle_file_images_react"/><br/>
<h2>8 - hindle file images react  </h2>
<div className="alert alert-warning mt-3">
  images must be in <b>src/</b> folder.<br/>
  <b>you can use import to name for images </b>
  <div className="h4">Exemple</div>
  <img src={images.react37} alt="react" className="w-100"/>
  <div className="h4">Result</div>
  <img src={images.react38} alt="react" className="w-100"/>
</div>


<br id="hindle_import"/><br/>
<h2>9 -  hindle import  </h2>
<div className="alert alert-warning mt-3">
  <div className="h3">before:</div> 
  <p><b>we import Component from his path <u className="text-danger">(that is not pratical)</u></b></p>
  <img src={images.react39} alt="react" className="w-100"/>
  <div className="h3">after:</div> 
  <p><b>to get Component in another Component easily we need to <u className="text-success">create file</u> with js and use it like exemple bellow</b></p>
  <img src={images.react40} alt="react" className="w-100"/>
</div>

<br id="props_children"/><br/>
<h2>10 - props.children  </h2>
<h2> 1 - <b>props</b> get data from parent to Component child </h2>
<h4>exemple</h4>
<div className="alert alert-light mt-3 pb-0"><img src={images.react41} alt="react"  className="w-100"/></div>
<h2> 2 - <b>props</b> push data from parent to Component child </h2>
<div className="alert alert-light mt-3 pb-0"><img src={images.react53} alt="react"  className="w-100"/></div>







<h1> Hooks in React </h1>
<br id="useNavigate"/><br/>
<h2>1 - useNavigate </h2>
<div>
  <p className="fs-4">
    <b>useNavigate</b> is a React Hook <b>provided by the React Router library</b> that can be used to programmatically navigate between different pages or routes in a React application.
  </p>
  <img src={images.react46} alt="react" className="w-100"/>
</div>

<br id="useParams"/><br/>
<h2>2 - useParams </h2>
<div>
  <p className="fs-4">
    <b>useParams()</b> : is a React Router hook that extracts route parameters from the URL, providing access to dynamic values like slugs or IDs in components.
  </p>
  <div className='alert bg-dark text-light pb-0'><pre>npm install react-router-dom</pre></div>
  <p><b> We use App component just to create Route and tell him that the route need to parameter with specific name</b></p>
  <img src={images.react54} alt="react" className="w-100 mb-2"/>
  <p><b> In items we create Link too go to Route specific in App and determine the parameter  </b></p>
  <img src={images.react55} alt="react" className="w-100 mb-2"/>
  <p><b> In the detail Component i need just to use <kbd>useParams</kbd> to get parameter and use it .  </b></p>
  <img src={images.react56} alt="react" className="w-100 mb-2"/>
</div>














<br/><br/><br/><br/><br/><br/>
<h1> REACT JS Packages </h1>

  <br id='npm_list'/><br/>
  <h2>1 - npm list  </h2>
  <div className="h4">To get a list of all the packages that are installed in your React project, you can run the following command in your project's root directory</div>
  <div className="alert bg-dark text-light mt-3 pb-0">
    <pre> npm list </pre>
  </div>
  <div className="h4">If you want to see only the direct dependencies of your project, you can run the following command:</div>
  <div className="alert bg-dark text-light mt-3 pb-0">
    <pre> npm list --depth=0 </pre>
  </div>

  <br id="Router"/><br/>
  <h2>2 - Router  </h2>
  <div className="alert alert-warning mt-3">
    Create React App doesn't include page routing. <br/>
    React Router is the most popular solution.  <br/>
    <h3>1 - install react-router-dom </h3><br/>   
    <p>To add React Router in your application, run this in the terminal from the root directory of the application go to :</p>
    <h4>Last Version</h4>
    <div className="alert bg-dark text-light mt-3 pb-0"><pre>npm install react-router-dom@latest</pre></div>
    <h4>Specific Version</h4>
    <div className="alert bg-dark text-light mt-3 pb-0"><pre>npm install react-router-dom@18.2.0</pre></div>
    <h3>2 - uninstall react-router-dom </h3>
    <div className="alert bg-dark text-light mt-3 pb-0"><pre> npm uninstall react-router-dom </pre></div>
    <h3>3 - use router </h3>
    <img src={images.react43} alt="react" className="w-100"/>
  </div>

  <br id="axios"/><br/>
  <h2>2 - axios package </h2>
  <div className="alert alert-warning mt-3">
    <p className="fs-5">
      Axios is promise-based, which gives you the ability to take advantage of JavaScript’s async and await for more readable asynchronous code.<br/><br/>
      Axios makes it easy to send HTTP requests and receive responses, without having to worry about the low-level details of how those requests are sent and processed.
    </p>

    <h3> 1 - install axios </h3>
    <div className="alert bg-dark text-light pb-0"> <pre>npm install axios</pre> </div>
    <h3> 2 - import axios </h3>
    <pre className="border">import axios from 'axios';</pre>
    <h3> 3 - axios </h3>
    <img src={images.react47} alt="react" className="w-100"/>
    <h3> 4 - axios.get </h3>
    <img src={images.react42} alt="react" className="w-100"/>
    <h3> 5 - axios.post</h3>
    <h3>exemple 1</h3>
    <img src={images.react44} alt="react" className="w-100"/>
    <h3>exemple 2</h3>
    <img src={images.react50} alt="react" className="w-100" />
    <h3> 6 - axios.put</h3>
    <img src={images.react48} alt="react" className="w-100"/>
    <h3> 7 -  axios.create</h3>
    <img src={images.react51} alt="react" className="w-100"/>
    <h4>why using timeout in axios.create</h4>
    <img src={images.react52} alt="react" className="w-100"/>
  </div>

  <br id="react_paypal_js"/>
  <h2> 3 - react-paypal-js </h2>
  <a href="https://paypal.github.io/react-paypal-js/?path=/story/getting-started--page"> react-paypal-js </a>
  
  <br id="react_sass"/>
  <h2> 4 - react sass</h2>
  <div className="alert bg-dark text-light pb-0"><pre>npm install sass</pre></div>
  <div className="alert bg-light alert-warning"><pre>import "App.scss"</pre></div>
  
  <br id='react_syntax_highlighter'/>
  <h2> 5 - react Handle </h2>
  <p>To achieve syntax highlighting in React for different code elements (HTML, attributes, functions, scripts, etc.), you can use a syntax highlighting library or create a custom solution. One popular library for this purpose is react-syntax-highlighter. It supports various languages and styles.</p>
  <h3> install packages </h3>
  <div className="alert bg-dark text-light pb-0"><pre>npm install react-syntax-highlighter</pre></div>
  <h3> import and use it </h3>
  {/* <div className='alert alert-light'>
<pre>import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeHighlighter = ({ code, language }) => {
  return (
    &lt;SyntaxHighlighter language={language} style={solarizedlight}>
      {code}
    &lt;/SyntaxHighlighter>
  );
};

const YourComponent = () => {
  const code = `
    &lt;div style="color: red;">HTML content &lt;/div>
    &lt;input type="text" placeholder="Enter text" />
    function add(a, b) {
      return a + b;
    }
    &lt;script>
      console.log("Hello, world!");
    &lt;/script>
  `;

  return &lt;CodeHighlighter code={code} language="html" />
};</pre> </div>*/}
  
  <h3> Result </h3>
  <img src={images.react57} alt="react" className="w-100" />


  </section>

  </main>


  
)
}