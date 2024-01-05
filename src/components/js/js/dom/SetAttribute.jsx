import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function SetAttribute(){
    // const res = document.getElementById("result")
    // const div = document.createElement("div");
    // div.setAttribute("class","reda")
    // res.appendChild(div)
        const codeExemple1= { 
    head:`
    <style>
        .reda {
            background-color: red;
            width: 90%;
            height: 200px;
        }
    </style>`,
    code: `          <div id="result">
         <h2>Heading</h2>
     </div>
      
     <script src="./index.js"></script>`,
    script:`const result = document.getElementById("result");
const div = document.createElement("div");
div.setAttribute("class", "reda");
result.appendChild(div);`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript setAttribute</h1>
    <article>
        {/* .reda{ backgroundColor: "red",width: "90%", height: "200px"} */}
        <p className="style_divv mt-5">
            يعين الأسلوب <bdi><b>setAttribute()</b></bdi> قيمة جديدة للسمة.<br/>
            إذا كانت السمة غير موجودة ، يتم إنشاؤها أولاً.
            <CodeHighlighter code={`element.setAttribute(name, value)`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="appendChild" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="appendChild" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> Heading </h2>
            <div style={{backgroundColor: "red",width: "90%",height: "200px"}}></div>
        </Result>
    </article>
</section>
    )
}
       