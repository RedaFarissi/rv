import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function QuerySelectorAll(){
        const codeExemple1= { 
    head:`
    <style>
      
    </style>`,
    code: `      <div class="child"> child 1 </div>
    <div class="child"> child 2 </div>
    <div class="child"> child 3 </div>
    <h2 id="result"></h2>
      
     <script src="./index.js"></script>`,
    script:`let children = document.querySelectorAll(".child");
let result = document.querySelector("#result");
result.innerHTML = \`length = \${children.length}\`;
for(let i=0 ; i<children.length ; i++){
  children[i].style.backgroundColor = "red";
  children[i].style.color = "white";
  children[i].style.fontSize = "22px";
} `
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript querySelectorAll</h1>
    <article>
        <p className="style_divv mt-5">
            ترجع طريقة <bdi><b>querySelectorAll()</b></bdi> جميع العناصر التي تتطابق مع محدد (محددات) <b>CSS</b>.<br/>
            ترجع طريقة <bdi><b>querySelectorAll()</b></bdi> NodeList.<br/>
            يطرح الأسلوب <bdi><b>querySelectorAll()</b></bdi> استثناء <b className="text-danger">SYNTAX_ERR</b> إذا كان المحدد (المحددات) غير صالح.
            <CodeHighlighter code={`document.querySelectorAll(CSS selectors)`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="querySelector" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="querySelector" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div className="child" style={{ backgroundColor: "red",color:"white",fontSize: "22px"}}> child 1 </div>
            <div className="child" style={{ backgroundColor: "red",color:"white",fontSize: "22px"}}> child 2 </div>
            <div className="child" style={{ backgroundColor: "red",color:"white",fontSize: "22px"}}> child 3 </div>
            <h2>length = 3</h2>
        </Result>
    </article>
</section>
    )
}