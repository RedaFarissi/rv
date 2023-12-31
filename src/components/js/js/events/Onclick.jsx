import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onclick(){
    // const y = document.getElementById("div_test")
    // function function_name1(){
    //   y.style.backgroundColor = "red"
    //   y.style.border = "2px solid brown"
    //   y.style.borderRadius = "2px"
    //   y.style.padding = "20px"
    // }
    // document.getElementById("btn2").addEventListener('click',function(){
    //   y.style.backgroundColor = "red"
    //   y.style.border = "5px double white"
    //   y.style.borderRadius = "20px"
    //   y.style.padding = "9px"
    // })
    // document.getElementById("btn3").onclick = function(){
    //   y.style.backgroundColor = "red"
    //   y.style.border = "2px solid black"
    //   y.style.borderRadius = "9px"
    //   y.style.padding = "2px"
    // }
    // function myFunction() {
    //       const f2 = document.getElementById("f2")
    //       const f1 = document.getElementById("f1")
    //       f2.value = f1.value;
    // }
    const code1= `<!-- Code HTML -->
<element onclick="//script">`
    const code2= `// Code JavaScript 
object.onclick = function(){  //myScript  }`
    const code3= `// Code JavaScript using the addEventListener()
object.addEventListener("click", function_name )`
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onclick</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث <b>onclick</b> عندما ينقر المستخدم على عنصر.
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال 1 :  </div>
        <img src={images.js97_onclick} className="img"/>
        <div className="styleee"> 
            <div id="div_test"> 
              <button className="btn btn-primary" onclick="function_name1()">
                 change style1 
              </button>
              <button className="btn btn-primary" id="btn2">
                 change style2 
              </button>
              <button className="btn btn-primary" id="btn3">
                 change style3 
              </button>
            </div>
        </div>
        <div className="mital">متال 2 :  </div>
        <img src={images.js97_onclick2} className="img"/>
        <div className="styleee"> 
            <div>Field1: <input type="text" id="f1" value="JavaScript"/></div>
            <div>Field2: <input type="text" id="f2"/></div>
            <button onclick="myFunction()" className="btn btn-primary mt-2">
                Copy 
            </button>
        </div>
    </article>
</section>
    )
}
