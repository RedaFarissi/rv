import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onunload(){
    const code1 = `<!-- Code HTML -->
<body onunload="//script">`
    const code2 = `//  Code JavaScript -->
object.onunload = function(){  //myScript  }`
    const code3 = `// Code JavaScript using the addEventListener() 
object.addEventListener("unload", function_name )`
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
    <h1 className="heading-style heading-style-js-color">JavaScript onunload</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث <b>onunload</b> بمجرد إلغاء تحميل الصفحة (أو إغلاق نافذة المتصفح).<br/>
            يحدث <b>onunload</b> عندما ينتقل المستخدم بعيدًا عن الصفحة (عن طريق النقر فوق ارتباط ، وإرسال نموذج ، وإغلاق نافذة المتصفح ، وما إلى ذلك).<br/>
            يتم أيضًا تشغيل حدث <b>onunload</b> عندما يعيد المستخدم تحميل الصفحة .<br/>
            <CodeHighlighter code={code1} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
            
        </p>
        <div className="mital"> متال :  </div>
        <img src={images.js132_onunload} className="img"/>
    </article>
</section>
    )
}