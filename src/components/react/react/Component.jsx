import codes from "../../../assests/codes/react-js/react"
import { CodeHighlighter , Result } from "../../path";
import react_logo from "../../../assests/images/logo/react_logo.svg";


export default function Component(){
    return(
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
        <CodeHighlighter  code={codes[1].JSX[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/>
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
        <CodeHighlighter  code={codes[1].function_Component[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <Result title={'React App'} logo={react_logo} route="localhost:3000">
          <h1>  Component haeding</h1><br />
          <p className="p"> Component paragraph </p><br />
        </Result>
        <h3 className="title-h3" id="function_Component_props">3 - مكوّن الدالة الذي يقبل خصائص (props).</h3>
        <ul>
          <li> في <b>React</b>، يمكن تمرير البيانات إلى المكوّنات باستخدام الخصائص <b>(props)</b>. الخصائص تمثل معلومات إضافية يمكن تمريرها من المكوّن الأب إلى المكوّن الابن. إليك كيفية تعريف واستخدام مكوّن دالة <b>(Function Component)</b> مع خصائص .</li>
        </ul>
        <CodeHighlighter  code={codes[1].function_Component_props[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <Result title={'React App'} logo={react_logo} route="localhost:3000">
            <div>Hello, John!</div>
            <div>Hello, Sara!</div>
        </Result>
  
        <h3 className="title-h3" id="class_Component">4 - مكوّن الفئة (Class Component)</h3>
        <CodeHighlighter code={codes[1].class_Component[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <h3 className="title-h3" id="class_Component_this_props">4 - مكوّن الفئة (Class Component this.props)</h3>
        <CodeHighlighter code={codes[1].class_Component_this_props[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={codes[1].class_Component_this_props[1]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <Result title={'React App'} logo={react_logo} route="localhost:3000">
           <p style={{backgroundColor:"red",color:"white"}}> Learn React  </p>
        </Result>
        <h3 className="title-h3" id="Components_in_Component">5 - المكونات في المكون </h3>
        <CodeHighlighter code={codes[1].Components_in_Component[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={codes[1].Components_in_Component[1]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={codes[1].Components_in_Component[2]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/>
    </article>  

    )
}