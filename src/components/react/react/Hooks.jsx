import codes from "../../../assests/codes/react-js/react"
import images from "../imagesReact";
import { CodeHighlighter  , Result } from "../../path";
import react_logo from "../../../assests/images/logo/react_logo.svg";
import {ThisState} from "../pathExemple";

export default function Hooks(){
    return(
<article id="Hooks">
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
    )
}