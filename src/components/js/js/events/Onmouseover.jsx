import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
import "./Onmouseover.css"

export default function Onmouseover(){
    const code1 = `<!-- Code HTML -->
<element onmouseover="//script">`
    const code2 = `//Code JavaScript
object.onmouseover = function(){  //myScript  }`
    const code3 = `//Code JavaScript using the addEventListener() 
object.addEventListener("mouseover", function_name )`
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
     <div class="div-box" onmousemove="myMoveFunction()">
         <p id="id_name"> Mouse over me! </p>
     </div>
     <h5>onmouseenter</h5>
     <div class="div-box" onmouseenter="myEnterFunction()">
         <p id="id_name2"> Mouse over me! </p>
     </div>
     <h5>onmouseover</h5>
     <div class="div-box" onmouseover="myOverFunction()">
         <p id="id_name3"> Mouse over me! </p>
     </div>
      
     <script src="./index.js"></script>`,
    script:`var a = 0, b = 0, c = 0;

function myMoveFunction() {
  document.getElementById("id_name").innerHTML = c+=1;
}

function myEnterFunction() {
  document.getElementById("id_name2").innerHTML = a+=1;
}

function myOverFunction() {
  document.getElementById("id_name3").innerHTML = b+=1;
}`
    }
    var a = 0, b = 0, c = 0;
    function myMoveFunction() {
        document.getElementById("id_name").innerHTML = c+=1;
    }
      
    function myEnterFunction() {
        document.getElementById("id_name2").innerHTML = a+=1;
    }
      
    function myOverFunction() {
        document.getElementById("id_name3").innerHTML = b+=1;
    }
   
    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript onmouseover</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث onmouseover عندما يتحرك مؤشر الماوس فوق عنصر أو على أحد العناصر الفرعية له.<br/><br/>
            غالبًا ما يتم استخدام هذا الحدث مع حدث <b>onmouseout</b> ، والذي يحدث عندما يحرك المستخدم مؤشر الماوس خارج العنصر.<br/>
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />        
        </p>
        <div className="mital">متال : </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="onmouseenter" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="onmouseenter"  logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h5>onmousemove</h5>
            <div className="js-onmouseover-div-box" onMouseMove={myMoveFunction}>
                <p className="js-onmouseover-p" id="id_name"> Mouse over me! </p>
            </div>
            <h5>onmouseenter</h5>
            <div className="js-onmouseover-div-box" onMouseEnter={myEnterFunction}>
                <p className="js-onmouseover-p" id="id_name2"> Mouse over me! </p>
            </div>
            <h5>onmouseover</h5>
            <div className="js-onmouseover-div-box" onMouseOver={myOverFunction}>
                <p className="js-onmouseover-p" id="id_name3"> Mouse over me! </p>
            </div>
        </Result>
    </article>
</section>
    )
}
