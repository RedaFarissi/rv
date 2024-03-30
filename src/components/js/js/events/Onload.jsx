import images from "../../imagesJs"
import { CodeHighlighter ,  ResultAlert} from "../../../path";
import { useState } from "react";

export default function Onload(){
    const [displayAlertExemple,setDisplayAlertExemple] = useState(true)
    function clickOk(){
        setDisplayAlertExemple(false)
    }
    const code1 = `<!-- Code HTML -->
<element onload="//script">`
    const code2 = `// Code JavaScript 
object.onload = function(){  //myScript  }`
    const code3 = `//Code JavaScript using the addEventListener()
object.addEventListener("load", function_name )`
    const codeExemple1= { 
    code: `      <h2 id="result"></h2>
      
     <script src="./index.js"></script>`,
    script:`document.body.onload = function(){
     alert("Page is loaded")
}`
    }
    return(
  <section className="section-conetent">
    <h1 className="heading-style">JavaScript onload</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث <b>onload</b> عندما يتم تحميل كائن.<br/>
            غالبًا ما يتم استخدام <b>onload</b> داخل عنصر <kbd>body</kbd> لتنفيذ نص برمجي بمجرد أن يتم تحميل صفحة الويب كل المحتوى بالكامل (بما في ذلك الصور وملفات البرامج النصية وملفات CSS وما إلى ذلك).<br/>
            يمكن استخدام حدث <b>onload</b> للتحقق من نوع متصفح الزائر وإصداره ، وتحميل الإصدار المناسب من صفحة الويب بناءً على المعلومات.<br/>
            يمكن أيضًا استخدام حدث <b>onload</b> للتعامل مع ملفات تعريف الارتباط <br/>
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="onload" addClass="mt-3 mb-3" copie={true} number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <ResultAlert title='onload' logo={images.html_logo} clickOk={clickOk} displayAlert={displayAlertExemple} alertValue={"Page is loaded"} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h1> Hello World</h1>
        </ResultAlert>
    </article>
</section>
    )
}
