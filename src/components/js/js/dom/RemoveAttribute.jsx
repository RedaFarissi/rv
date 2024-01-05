import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
import "./RemoveAttribute.css"

export default function RemoveAttribute(){
  // function removeAttributE(){
  //   document.getElementById("id_name").removeAttribute("class")
  // }
  const codeExemple1= { 
    head:`
    <style>
        .div {
          height: 90px;
          font-size: 24px;
          background-color: red;
          color: white;
          text-align: center;
          line-height: 90px;
        }
    </style>`,
    code: `      <div id="id_name" class="div" onclick="removeAttributFunction()">
          Click me to remove attribute
     </div>
      
     <script src="./index.js"></script>`,
    script:`function removeAttributFunction() {
    document.getElementById("id_name").removeAttribute("class");
}`
    }
    function removeAttributFunction(){
      document.getElementById("id_name").removeAttribute("class");
    }
  return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript removeAttribute</h1>
    <article>
        <h2 className="title-h2">1- removeAttribute</h2>
        <p className="style_divv">
            تزيل طريقة <bdi>removeAttribute()</bdi> سمة من عنصر. 
            <CodeHighlighter code={`document.getElementById("id").removeAttribute("name")`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="createAttribute" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="createAttribute" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="id_name" class="removeAttribute-ex" onClick={removeAttributFunction}>
                Click me to remove attribute
            </div>
        </Result>
        <h2 className="title-h2"><small>2- The Difference Between <bdi>removeAttribute()</bdi> and <bdi>removeAttributeNode()</bdi></small></h2>
        <div className="style_divv">
            <ul>
                <li>أسلوب <bdi><b>removeAttribute()</b></bdi> يزيل سمة وليس له قيمة إرجاع.</li>
                <li>تقوم طريقة <bdi><b>removeAttributeNode()</b></bdi> بإزالة كائن <b>Attr</b> وإرجاع الكائن الذي تمت إزالته.</li>
            </ul>
        </div>
    </article>
</section>
  )
}