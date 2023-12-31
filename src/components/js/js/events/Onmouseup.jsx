import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onmouseup(){
//    #para{ font-size: 23px; color: black; padding: 1rem; }

    // function mouseDown() { document.getElementById("para").style.color = "red"; }
    // function mouseUp() { document.getElementById("para").style.color = "green";}
    // function Click(){ document.getElementById("para").style.color = "black"; }
    const code1 = `<!-- Code HTML -->
<element onmouseup="//script">`
    const code2 = `// Code JavaScript 
object.onmouseup = function(){  //myScript  }`
    const code3 = `// Code JavaScript using the addEventListener() 
object.addEventListener("mouseup", function_name )`
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onmouseup</h1>
    <article>
        <p className="style_divv mt-5">
            يحدث حدث <b>onmouseup</b> عندما يضغط المستخدم على زر الماوس فوق عنصر و رفع الماوس .
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
        <div className="mital">متال : </div>
        <img src={images.js110_onmouseup} className="img"/>
        <div className="styleee">
            <p id="para" onmousedown="mouseDown()" onmouseup="mouseUp()" onclick="Click()">Click the text! The mouseDown() function is triggered when the mouse button is pressed down over this paragraph, and sets the colorof the text to red. The mouseUp() function istriggered when the mouse button is released,and sets the color of the text to green.  </p>
        </div>
    </article>
</section>
    )
}
