import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function InnerWidth(){
    const codeExemple1= { 
    code: `     <h2> innerWidth : <span id="innerWidth"></span></h2>
     <h2> outerWidth : <span id="outerWidth"></span></h2>

     <script src="./index.js"></script>`,
    script:`document.getElementById("innerWidth").innerHTML = window.innerWidth + "px"
document.getElementById("outerWidth").innerHTML = window.outerWidth + "px"`
    }

    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript innerWidth</h1>
    <article className="mt-5">
        <p className="style_divv">
            تُرجع الخاصية <b>innerWidth</b> عرض منطقة محتوى النافذة.<br/>
            تعتبر الخاصية <b>innerWidth</b> للقراءة فقط.<br/>
            يتم الوصول إلى  <b>innerWidth</b> باستخدام :<br/>
            <CodeHighlighter code={`innerWidth`} language="js" addClass="mt-3 mb-3" copie={true} />
            أو 
            <CodeHighlighter code={`window.innerWidth`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="innerWidth" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title='innerWidth' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> innerWidth : {window.innerWidth + "px"}</h2>
            <h2> outerWidth : {window.outerWidth + "px"}</h2>
        </Result>
        
    </article>
</section>
    )
}