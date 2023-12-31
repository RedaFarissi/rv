import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Ondblclick(){
    // function myFunction() {
    //     const result = document.getElementById("result")
    //     result.innerHTML = "Hello World";
    //   }
    const code1= `<!-- Code HTML -->
<element ondblclick="//script">`
    const code2= `//Code JavaScript 
object.ondblclick = function(){  //myScript  }`
    const code3= `// Code JavaScript using the addEventListener() 
object.addEventListener("dblclick", function_name )`
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript ondblclick</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث <b>ondblclick</b> عندما ينقر المستخدم نقرًا مزدوجًا فوق أحد العناصر.
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js98_ondblclick} className="img"/>
        <div className="styleee"> 
            <p ondblclick="myFunction()">
                Double-click this paragraph to trigger a function.
            </p>
            <p id="result"> </p>
        </div>
    </article>
</section>
    )
}
