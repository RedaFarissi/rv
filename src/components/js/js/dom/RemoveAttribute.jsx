import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function RemoveAttribute(){
  // function removeAttributE(){
  //   document.getElementById("id_name").removeAttribute("class")
  // }
  const codeExemple1= { 
    head:`
    <style>
      
    </style>`,
    code: `      <h2 id="result"></h2>
      
     <script src="./index.js"></script>`,
    script:``
    }
  return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript removeAttribute</h1>
    <h2 className="title-h2">1- removeAttribute</h2>
    <p className="style_divv">
        تزيل طريقة <bdi>removeAttribute()</bdi> سمة من عنصر. 
        <CodeHighlighter code={`document.getElementById("id").removeAttribute("name")`} language="js" addClass="mt-3 mb-3" copie={true} />
    </p>
    <div className="mital"> متال :  </div>
    <img src={images.js83_removeAttributre} className="img"/>
    <div className="styleee">
        <div id="id_name"  style={{ height:"90px", fontSize: "24px",backgroundColor:"red", color: "white",  textAlign:"center", lineHeight:"90px",}}  onclick="removeAttributE()">  
          Click me to remove attribue 
        </div>
    </div>
    <h2 className="title-h2"><small>2- The Difference Between <bdi>removeAttribute()</bdi> and <bdi>removeAttributeNode()</bdi></small></h2>
    <div className="style_divv">
        <ul>
            <li>أسلوب <bdi><b>removeAttribute()</b></bdi> يزيل سمة وليس له قيمة إرجاع.</li>
            <li>تقوم طريقة <bdi><b>removeAttributeNode()</b></bdi> بإزالة كائن <b>Attr</b> وإرجاع الكائن الذي تمت إزالته.</li>
        </ul>
    </div>
</section>
  )
}