import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onpaste(){
    
    const code1 = `<!-- Code HTML -->
<element onpaste="//script">`
    const code2 = `// Code JavaScript 
object.onpaste = function(){  //myScript  }`
    const code3 = `// Code JavaScript using the addEventListener() 
object.addEventListener("paste", function_name )`
    const codeExemple1= { 
    head:`
    <style>
      input{ 
        width : 50%;
      }
    </style>`,
    code: `     <input type="text" onpaste="passer()">
     <p id="result"></p>
      
     <script src="./index.js"></script>`,
    script:`var input = document.querySelector("input")
    input.value = "Try to paste something in here"

function passer() {
    var result = document.getElementById("result")
    result.innerHTML += "You pasted text<br/>"
}`
    }
    function passer(){
        var result = document.getElementById("result")
        result.innerHTML += "You pasted text<br/>"
    }
    return(
  <section className="section-conetent">
    <h1 className="heading-style">JavaScript onpaste</h1>
    <article>
        <p className="style_divv mt-5">
            يحدث حدث <b>onpaste</b> عندما يلصق المستخدم بعض المحتوى في عنصر.<br/>
             على الرغم من أن حدث <b>onpaste</b> مدعوم من قبل جميع عناصر <b>HTML</b> ، إلا أنه ليس من الممكن في الواقع لصق بعض المحتوى ، على سبيل المثال ، عنصر <kbd>&lt;p&gt;</kbd> ، ما لم يقم العنصر بتعيين المحتوى القابل للتعديل على <code>contenteditable="true"</code> .<br/>
            يتم استخدام حدث <b>onpaste</b> في الغالب على عناصر <kbd>&lt;input&gt;</kbd> من <code>type="text"</code>.<br/>

            <div className="alert alert-warning text-dark my-3">
                <b className="d-block my-2">نصيحة</b>:<br/>
                هناك ثلاث طرق للصق بعض المحتوى في عنصر:<br/>
                <ul>
                    <li> اضغط على <kbd className="bg-secondary">Ctrl + V</kbd></li>
                    <li>  حدد "paste" من قائمة "تعديل" في متصفحك</li>
                    <li> انقر بزر الماوس الأيمن لعرض قائمة السياق وحدد الأمر <b>paste</b>.</li>
                </ul>
            </div>
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="onpaste" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="onpaste"  logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <input type="text" onPaste={passer} style={{width:"50%"}}/>
            <p id="result"></p>
        </Result>
    </article>
</section>
    )
}
