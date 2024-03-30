import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onmouseout(){
    const code1 = `<!-- Code HTML -->
<element onmouseout="//script">`
    const code2 = `// Code JavaScript 
object.onmouseout = function(){  //myScript  }`
    const code3 = `// Code JavaScript using the addEventListener() 
object.addEventListener("mouseout", function_name )`
    const codeExemple1= { 
    head:`
    <style>
        .div-box {
            margin: 9px;
            border: 1px solid black;
            text-align: center;
            padding: 2rem ;
            background-color: lightgray;
        }
        p {
            width: 200px;
            height: 100px;
            line-height: 100px;
            background-color: white;
            font-size: 20px
        }
    </style>`,
    code: `      <h5>onmousemove</h5>
     <div class="div-box" onmousemove="myMoveFunction()" onmouseout="moveOut()">
         <p id="id_name"> Mouse over me! </p>
     </div>
      
     <script src="./index.js"></script>`,
    script:`var a = 0;

function myMoveFunction() {
  document.getElementById("id_name").innerHTML = a+=1;
}
function moveOut(){
    a = 0
    document.getElementById("id_name").innerHTML = 0;
}`
    }
    var a = 0;
    function myMoveFunction() {
      document.getElementById("id_name").innerHTML = a+=1;
    }
    function moveOut(){
        a = 0
        document.getElementById("id_name").innerHTML = 0;
    }
    return(
  <section className="section-conetent">
    <h1 className="heading-style">JavaScript onmouseout</h1>
    <article>
        <p className="style_divv mt-5">
            قع حدث <b>onmouseout</b> عندما يتحرك مؤشر الماوس خارج عنصر ما أو خارج أحد العناصر الفرعية له.<br/><br/>
            غالبًا ما يتم استخدام هذا الحدث مع حدث <b>onmouseover</b> ، والذي يحدث عند تحريك المؤشر فوق عنصر أو على أحد العناصر الفرعية له.
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال : </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="onmouseout" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title="onmouseout"  logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h5>onmousemove</h5>
            <div style={{margin: "9px",border: "1px solid black",textAlign: "center",padding: "2rem ",backgroundColor: "lightgray"}} onMouseMove={myMoveFunction} onMouseOut={moveOut}>
                <p id="id_name" style={{width: "200px",height: "100px",lineHeight: "100px",backgroundColor: "white",fontSize: "20px"}}>
                    Mouse over me!
                </p>
            </div>
        </Result>
    </article>
</section>
    )
}