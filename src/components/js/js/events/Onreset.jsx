import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onreset(){
    const code1 = `<!-- Code HTML -->
<form onreset="//script">`
    const code2 = `// Code JavaScript -->
object.onreset = function(){  //myScript  }`
    const code3 = `// Code JavaScript using the addEventListener() 
object.addEventListener("reset", function_name )`
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
    <h1 className="heading-style heading-style-js-color">JavaScript onreset</h1>
    <article>
        <p className="style_divv mt-5">
            طريقة <bdi><b>reset()</b></bdi> تعيد تعيين قيم جميع العناصر في نموذج (مثل النقر فوق زر إعادة التعيين).<br/><br/>
            استخدم طريقة <bdi><b>submit()</b></bdi> لإرسال النموذج.
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} /> 
        </p>
        
        <div className="mital"> متال :  </div>
        <ul><li> الخاصية <bdi>reset()</bdi> بدون Event </li></ul>
        <img src={images.js128_onreset} className="img"/>
        <div className="styleee">
            <p>Enter some text in the fields below,then press the "Reset form" button to reset the form.</p>
            <form id="id_Form">
              First name: <input type="text" name="fname"/><br/>
              Last name: <input type="text" name="lname"/><br/><br/>
              <button type="button" onclick="function_name()"> Reset form </button>
            </form>
        </div>    
        <div className="mital"> متال 2 :  </div>
        <ul><li> الخاصية <bdi>reset()</bdi> مع ال <bdi>Event onreset</bdi></li></ul>
        <img src={images.js128_onreset2} className="img"/>
        <div className="styleee">
            <form id="myForm">
              <label for="email">Email : </label>
              <input type="email" id="email" name="email"/>
              <br/>
              <label for="password">Password : </label>
              <input type="password" name="password" id="password"/><br/>
        
              <input type="reset" value="reset" onreset="function_N()"/>
            </form>
        </div>
    </article>
</section>
    )
}
