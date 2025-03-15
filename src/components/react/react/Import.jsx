import codes from "../../../assests/codes/react-js/react"
import { CodeHighlighter , Result } from "../../path";
import react_logo from "../../../assests/images/logo/react_logo.svg";

export default function Import(){
    return(
    <div id="Handle-import">
        <h1 className="heading-style"> React import </h1>
        <h2 className="title-h2">1 - استيراد مكوّنات (Components)</h2>
        <div className="style_divv">قبل نقوم باستيراد كل مكون من مساره  <bdi className="text-danger">(وهذا غير عملي)</bdi></div>
        <CodeHighlighter code={codes[5].Handle_import[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
        <CodeHighlighter code={codes[5].Handle_import[1]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
        <CodeHighlighter code={codes[5].Handle_import[2]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
        <CodeHighlighter code={codes[5].Handle_import[3]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
        <Result title={'React App'} logo={react_logo} route="localhost:3000">
          <h1>Header</h1>
          <p>This is the content of the app.</p>
          <h3>Footer</h3>
        </Result>
        <p className="style_divv">
          للحصول على مكونات تقع في مسارات مختلفة داخل مكون آخر بسهولة، <span className="text-success">نحتاج إلى إنشاء ملف بامتداد js</span> واستخدامه لإستراد كل الكونات .
        </p>
        <CodeHighlighter code={codes[5].Handle_import[4]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
        <CodeHighlighter code={codes[5].Handle_import[5]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
        <Result title={'React App'} logo={react_logo} route="localhost:3000">
          <h1>Header</h1>
          <p>This is the content of the app.</p>
          <h3>Footer</h3>
        </Result>
        <h2 className="title-h2">2 - استيراد مكتبات أو وحدات خارجية </h2>
        <p className="style_divv">
          يمكنك أيضًا استخدام <b>import</b> لجلب مكتبات أو وحدات خارجية. على سبيل المثال، إذا كنت ترغب في استخدام مكتبة <b>axios</b> لعمل طلبات <b>HTTP</b>، يمكنك استيرادها بهذه الطريقة.<br/><br/>
          سنتطرق لذالك في دروس المكتبات . 
        </p>
    </div>
    )
}