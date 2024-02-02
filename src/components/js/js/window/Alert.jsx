import images from "../../imagesJs"
import { CodeHighlighter ,  ResultAlert} from "../../../path";
import { useState } from "react";

export default function Alert(){
    const [resultAlertDisplayAlert ,setResultAlertDisplayAlert] = useState(true)
    const [resultAlertValue ,setResultAlertValue] = useState("Hello Word")

    function clickOk(){
        setResultAlertDisplayAlert(false)
    }
    function addAlert(){
        if(resultAlertDisplayAlert === false){
            setResultAlertDisplayAlert(true)
            setResultAlertValue(window.location.hostname)
        }
    }

    const codeExemple= { 
    code: `     <button onclick="add_alert()">Try it</button>

     <script src="./index.js"></script>`,
    script:`alert("Hello Word");

function add_alert() {
    alert(location.hostname);
}`
    }

    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript alert</h1>
    <article className="mt-5">
        <p className="style_divv">
            تعرض طريقة <b><bdi>alert()</bdi></b> مربع تنبيه برسالة وزر موافق.<br/>
            يتم استخدام طريقة <b><bdi>alert()</bdi></b> عندما تريد وصول المعلومات إلى المستخدم .<br/>
            يأخذ مربع التنبيه التركيز بعيدًا عن النافذة الحالية ، ويجبر المستخدم على قراءة الرسالة . يمنع المستخدم من الوصول إلى أجزاء أخرى من الصفحة حتى يتم إغلاق مربع التنبيه
            <CodeHighlighter code={`alert()`} language="js" addClass="mt-3 mb-3" copie={true} />
            أو
            <CodeHighlighter code={`window.alert()`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple.code} language="html" is_html={true} title="Output" addClass="mt-3 mb-3" copie={true} number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple.script} language="js"  addClass="mt-3 mb-3" copie={true} number={true}/>
        <ResultAlert title='Output' logo={images.html_logo} clickOk={clickOk} displayAlert={resultAlertDisplayAlert} alertValue={resultAlertValue} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <button onClick={addAlert}> Try it </button>
        </ResultAlert>
    </article>
</section>
    )
}