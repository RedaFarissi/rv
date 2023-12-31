import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Oncopy(){
    // function myFunction() {
    //     alert("You copied text!");
    //   }
    const code1 = `<!-- Code HTML -->
<element oncopy="//script">`
    const code2 = `// Code JavaScript
object.oncopy = function(){  //myScript  }`
    const code3 = `// Code JavaScript using the addEventListener() 
object.addEventListener("copy", function_name )`
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript oncopy</h1>
    <article>
        <p className="style_divv mt-5">
            يحدث حدث <b>oncopy</b> عندما ينسخ المستخدم محتوى عنصر ما.<br/>
            يحدث حدث <b>oncopy</b> أيضًا عندما ينسخ المستخدم عنصرًا ، على سبيل المثال ، صورة ، تم إنشاؤها باستخدام عنصر <kbd>&lt;img&gt;</kbd>.<br/>
            يتم استخدام حدث <b>oncopy</b> في الغالب على عناصر <kbd>&lt;input&gt;</kbd> مع <code>type="text"</code>.<br/>
            <div className="alert alert-warning mt-2">
                 هناك ثلاث طرق لنسخ عنصر / محتوى عنصر:
                <ul>
                    <li> اضغط على <kbd className="bg-secondary">CTRL+C</kbd> </li>
                    <li> حدد "نسخ" من قائمة "تعديل" في متصفحك</li>
                    <li> انقر بزر الماوس الأيمن لعرض قائمة السياق وحدد الأمر "نسخ".</li>
                </ul>
            </div>
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
                <span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">oncopy</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
            <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">oncopy</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
                <span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"copy"</span>, function_name <span style="color:gold">)</span></pre>  
            </div> */}
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js101_oncopy} className="img"/>
        <div className="styleee">
            <p oncopy="myFunction()">
              Try to copy this text
            </p>
        </div>
    </article>
</section>
    )
}
