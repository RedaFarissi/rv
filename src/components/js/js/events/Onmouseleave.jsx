import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
import { useRef } from "react";

export default function Onmouseleave(){
    const exempleRef = useRef()
    function mouseEnter(){
        exempleRef.current.style.display = "block";
    }
    function mouseLeave(){
        exempleRef.current.style.display = "none";
    }
    const code1 = `<!-- Code HTML -->
<element onmouseleave="//script"/>`
const code2 = `// Code JavaScript 
object.onmouseleave = function(){  //myScript  }`
const code3 = `// Code JavaScript using the addEventListener()
object.addEventListener("mouseleave", function_name )`
    const codeExemple1= { 
    head:`
    <style>
        #box{
            width: 100%;
            height: 200px;
            background-color: red;
            color: white;
            border: 4px double black;
            text-align: center;
            line-height: 200px;
            font-size: 40px;
            display: none; 
        }
    </style>`,
    code: `      <button class="btn btn-primary m-2" onmouseenter="mouseEnter()" onmouseleave="mouseLeave()">
           btn
     </button>
     <div id="box"> HTML CONTENT </div>
      
     <script src="./index.js"></script>`,
    script:`function mouseEnter() {
    // Show the box on mouse enter
    document.getElementById("box").style.display = "block";
}

function mouseLeave() {
    // Hide the box on mouse leave 
    document.getElementById("box").style.display = "none";
}
    `
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript onmouseleave</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث <b>onmouseleave</b> عندما يتم تحريك مؤشر الماوس خارج عنصر ما.<br/>
            غالبًا ما يتم استخدام هذا الحدث مع حدث <b>onmouseenter</b> ، والذي يحدث عند تحريك مؤشر الماوس على عنصر.<br/><br/> 
            حدث <b>onmouseleave</b> مشابه لحدث <b>onmouseout</b>. الاختلاف الوحيد هو أن حدث <b>onmouseleave</b> لا ينتشر
            لأعلى في التسلسل الهرمي للمستند
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال : </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="onmouseleave" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title="onmouseleave"  logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <button class="btn btn-primary m-2" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                btn
            </button>
            <div id="box" ref={exempleRef} style={{width: "100%",height: "200px",backgroundColor: "red",color: "white",border: "4px double black",textAlign: "center",lineHeight: "200px",fontSize: "40px",display: "none",  }}>
                HTML CONTENT
            </div>
        </Result>
    </article>
</section>
    )
}
