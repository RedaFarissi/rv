import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function RemoveAttribute(){
  // function removeAttributE(){
  //   document.getElementById("id_name").removeAttribute("class")
  // }
  return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript removeAttribute</h1>
    <h2 className="title-h2">1- removeAttribute</h2>
    <p className="style_divv">
        تزيل طريقة <bdi>removeAttribute()</bdi> سمة من عنصر. 
        {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
            <pre><span style="color:var(--js-color)">document</span>.<span style="color:gold">getElementById(<span style="color:orange">"id"</span>)</span>.<span style="color:gold">removeAttribute(<span style="color:orange">"name"</span>)</span></pre>
        </div> */}
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