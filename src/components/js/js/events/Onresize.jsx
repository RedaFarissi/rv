import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onresize(){
    const code1 = `<!-- Code HTML -->
<body onresize="//script">`
    const code2 = `// Code JavaScript 
object.onresize = function(){  //myScript  }`
    const code3 = `// Code JavaScript using the addEventListener()
object.addEventListener("resize", function_name )`
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
    <h1 className="heading-style heading-style-js-color">JavaScript onresize</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث <b>onresize</b> عندما يتم تغيير حجم نافذة المتصفح.<br/>
            للحصول على حجم عنصر ، استخدم خصائص <b>clientWidth</b> ، و <b>clientHeight</b> ، و <b>innerWidth</b> ، و <b>innerHeight</b> ، و <b>OuterWidth</b> ، و <b>OuterHeight</b> ، و <b>offsetWidth</b> و / أو <b>offsetHeight</b>.
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>    
        <div className="mital"> متال :  </div>
        <img src={images.js127_onresize} className="img"/>
    </article>
</section>
    )
}