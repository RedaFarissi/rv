import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
import { useRef } from "react";

export default function Onmousedown(){
    const exempleRef = useRef()
    function mouseDown() {
        exempleRef.current.style.color = "red";
    }
    function mouseUp() {
        exempleRef.current.style.color = "green";
    }
    const code1 = `<!-- Code HTML -->
<element onmousedown="//script">`
    const code2 = `// Code JavaScript 
object.onmousedown = function(){  //myScript  }`
    const code3 = `Code JavaScript using the addEventListener() 
object.addEventListener("mousedown", function_name )`
    const codeExemple1= { 
    head:`
    <style>
        #para{ font-size: 30px; color: black; padding: 1rem; }
    </style>`,
    code: `      <p id="para" onmousedown="mouseDown()" onmouseup="mouseUp()">
         Click the text! The mouseDown() function is
         triggered when the mouse button is pressed
         down over this paragraph, and sets the color
         of the text to red. The mouseUp() function is
         triggered when the mouse button is released,
         and sets the color of the text to green.
     </p>
      
     <script src="./index.js"></script>`,
    script:`function mouseDown() {
  document.getElementById("para").style.color = "red";
}
function mouseUp() {
  document.getElementById("para").style.color = "green";
}`
    }
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onmousedown</h1>
    <article>
        <p className="style_divv mt-5">
            يحدث حدث <b>onmousedown</b> عندما يضغط المستخدم على زر الماوس فوق عنصر.<br/>
            <div className="alert bg-info my-3 text-black">
                <b>نصيحة</b> : ترتيب الأحداث المتعلقة بحدث <b>onmousedown</b> (لزر الماوس الأيسر / الأوسط):<br/><br/>
                <ol>
                    <li><b>onmousedown</b> : عندما يضغط المستخدم على زر الماوس فوق عنصر .</li>
                    <li><b>onmouseup</b> : عندما يضغط المستخدم على زر الماوس فوق عنصر و رفع الماوس </li>
                    <li><b>onclick</b> : يحدت الحدت بعد الإنتهاء من الحدت لا <b>onmousedown</b> و <b>onmouseup</b> </li>
                </ol>
            </div> 
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="onmousedown" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="onmousedown"  logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <p ref={exempleRef} onMouseDown={mouseDown} onMouseUp={mouseUp} style={{fontSize:"30px",color:"black",padding:"1rem" }}>
                Click the text! The mouseDown() function is triggered when the mouse button is pressed down over this paragraph, and sets the color of the text to red. The mouseUp() function is triggered when the mouse button is released, and sets the color of the text to green.
            </p>
        </Result>
    </article>
</section>
    )
}
