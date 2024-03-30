import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function SetTimeout(){

    const codeExemple1= { 
    code: `      <p> click button to run function one time after 3 seconds </p>
     <button onclick="sayHello()" class="btn bg-primary"> click  </button>
     <h2 id="result">Reda Eskouni</h2>
    
     <script src="./index.js"></script>`,
    script:`function sayHello(){
    setTimeout(()=>{
      document.getElementById("result").innerHTML = "Hello Word"
    },3000)
}`
    }
    function sayHello(){
        setTimeout(()=>{
          document.getElementById("result").innerHTML = "Hello Word"
        },3000)
    }  
    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript setTimeout</h1>
    <article>
        <p className="style_divv mt-5">
            تستدعي طريقة <bdi><b>setTimeout()</b></bdi> دالة بعد عدد من المللي ثانية.<br/>
            يتم تنفيذ <bdi><b>setTimeout()</b></bdi> مرة واحدة فقط.<br/>
            إذا كنت بحاجة إلى عمليات تنفيذ متكررة ، فاستخدم <bdi><b>setInterval()</b></bdi> بدلاً من ذلك.<br/>
            استخدم طريقة <bdi><b>clearTimeout()</b></bdi> لمنع بدء تشغيل الوظيفة.
            <CodeHighlighter code={`setTimeout(function_name,milliseconds)`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="setTimeout" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title="setTimeout"  logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <p> click button to run function one time after 3 seconds </p>
            <button onClick={sayHello} className="btn bg-primary"> click  </button>
            <h2 id="result">Reda Eskouni</h2>
        </Result>
    </article>
</section>
    )
}