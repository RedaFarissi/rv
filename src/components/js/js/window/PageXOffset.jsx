import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function PageXOffset(){
    const codeExemple1= { 
    head:`
    <style>
        #div_H{ 
            width: 120%; 
            background-color: red; 
            color:white;  
        }
    </style>`,
    code: `       <div id="div_H">Hello Word</div>
     <h2 id="result"> </h2>

     <script src="./index.js"></script>`,
    script:`const result = document.getElementById("result")
result.innerHTML = window.pageXOffset`
    }

    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript pageXOffset</h1>
    <article className="mt-5">
        <p className="style_divv">
            تقوم خاصية <b>pageXOffset</b> بإرجاع وحدات البكسل التي تم تمرير مستند إليها من الزاوية اليسرى العليا من النافذة.<br/>
            تساوي الخاصية <b>pageXOffset</b> الخاصية <b>scrollX</b> .<br/>
            خاصية <b>pageXOffset</b> للقراءة فقط .<br/>
            يتم الوصول إلى  <b>pageXOffset</b> باستخدام :<br/>
            <CodeHighlighter code={`pageXOffset`} language="js" addClass="mt-3 mb-3" copie={true} />
            أو
            <CodeHighlighter code={`window.pageXOffset`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="pageXOffset" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js" code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='pageXOffset' styleAdd="overflow-xx p-0" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div style={{width: "120%",backgroundColor: "red",color: "white"}}>Hello Word</div>
            <h2 id="result"> 0 </h2>
        </Result>
    </article>
</section>
    )
}
