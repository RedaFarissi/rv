import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
import "./GetComputedStyle.css"

export default function GetComputedStyle(){
    const codeExemple1= { 
    head:`
    <style>
        #DV{
            background-color: red;
            border: 2px solid black;
            padding: 10px;
        }
    </style>`,
    code: `       <div id="DV">getComputedStyle</div>
  
     <h2 id="result"></h2>

     <script src="./index.js"></script>`,
    script:`const result = document.getElementById("result");
const bg = window.getComputedStyle(document.getElementById("DV"));
result.innerHTML = bg.getPropertyValue("background-color") ;`
    }

    const codeExemple2= { 
    head:`
    <style>
        #DV{
            background-color:#fc9909; 
            border:2px solid black; 
            padding:10px; 
            font-size:150%;
        }
    </style>`,
    code: `     <div id="DV">getComputedStyle</div>
  
     <h2 id="result"></h2>

     <script src="./index.js"></script>`,
    script:`const result = document.getElementById("result");

const element = window.getComputedStyle( document.getElementById("DV") );

result.innerHTML += "background-color :  " + element.getPropertyValue("background-color") + "<br/>";
result.innerHTML += "border : " + element.getPropertyValue("border") + "<br/>";
result.innerHTML += "padding : " + element.getPropertyValue("padding") + "<br/>";
result.innerHTML += "font-size : " + element.getPropertyValue("font-size") + "<br/>";`
    }

    const codeExemple3= { 
    head: `
    <style>
        #div_test{background-color: #fc9909; border: 2px solid black; padding: 10px; font-size: 150%;}
        #div_test::before{ content:"Hello"; color: white; }
        #div_test::after{ content:"Word"; color: greenyellow; }
    </style>`,
    code: `     

     <script src="./index.js"></script>`,
    script:``
    }

    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript getComputedStyle</h1>
    <article className="mt-5">
        <p className="style_divv">
            تقوم  <bdi><b>Window.getComputedStyle()</b></bdi> بإرجاع كائن يحتوي على قيم جميع خصائص <b>CSS</b> لعنصر ، بعد تطبيق أوراق الأنماط النشطة وحل أي حساب أساسي قد تحتويه هذه القيم.<br/>
            يتم الوصول إلى قيم خصائص <b>CSS</b> الفردية من خلال واجهات برمجة التطبيقات التي يوفرها الكائن ، أو عن طريق الفهرسة باستخدام أسماء خصائص <b>CSS</b>.<br/>
            تستخدم <b>getPropertyValue</b>  لتحديد إسم الخاصية .<br/>
            <CodeHighlighter code={`window.getComputedStyle(element , pseudoElement	)`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال 1 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="getComputedStyle" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js" code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title='getComputedStyle' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div style={{backgroundColor:"red", border:"2px solid black", padding:"10px"}}>getComputedStyle</div>
            <h2> rgb(255, 0, 0) </h2>
        </Result>
        <div className="mital"> متال 2 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple2.code} head={codeExemple2.head} language="html" is_html={true} title="getComputedStyle" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js" code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title='getComputedStyle' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div style={{backgroundColor:"#fc9909", border:"2px solid black", padding:"10px", fontSize:"150%"}}>getComputedStyle</div>
            <h2>background-color : rgb(252, 153, 9)<br/>border : 2px solid rgb(0, 0, 0)<br/>padding : 10px<br/>font-size : 24px</h2>
        </Result>
        <div className="mital"> متال 3 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple3.code} head={codeExemple3.head} language="html" is_html={true} title="getComputedStyle" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js" code={codeExemple3.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title='getComputedStyle' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
          <div id="getComputedStyle-div_test">getComputedStyle</div>
          <h2>content before : "Hello"<br/>content after : "Word"</h2>
        </Result>
    </article>
</section>
    )
}