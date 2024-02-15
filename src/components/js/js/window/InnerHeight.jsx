import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function InnerHeight(){
    // document.getElementById("h2").innerHTML =  "innerHeight : " + innerHeight + "<br/>" ;
    // document.getElementById("h2").innerHTML += "outerHeight : " + window.outerHeight  ;
    const codeExemple1= { 
    code: `     <h2> innerHeight : <span id="innerHeight"></span></h2>
     <h2> outerHeight : <span id="outerHeight"></span></h2>

     <script src="./index.js"></script>`,
    script:`document.getElementById("innerHeight").innerHTML = window.innerHeight + "px"
document.getElementById("outerHeight").innerHTML = window.outerHeight + "px"`
    }

    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript innerHeight</h1>
    <article className="mt-5">
        <p className="style_divv">
            ترجع الخاصية <b>innerHeigth</b> ارتفاع منطقة محتوى النافذة.<br/>
            تتم قراءة خاصية <b>innerHeight</b> فقط.<br/>
            يتم الوصول إلى  <b>innerHeight</b> باستخدام :<br/>
            <CodeHighlighter code={`innerHeight`} language="js" addClass="mt-3 mb-3" copie={true} />
            أو 
            <CodeHighlighter code={`window.innerHeight`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="innerHeight" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='innerHeight' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> innerHeight : {window.innerHeight + "px"}</h2>
            <h2> outerHeight : {window.outerHeight + "px"}</h2>
        </Result>
    </article>
</section>
    )
}