import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
import { useRef } from "react";

export default function Onmouseenter(){
    const  imageRef = useRef()
    function bigFunction() {
        imageRef.current.style.height = "250px";
        imageRef.current.style.width = "250px";
    }
    function smallFunction() {
        imageRef.current.style.height = "64px";
        imageRef.current.style.width = "64px";
    }

    const code1 = `<!-- Code HTML -->
<element onmouseenter="//script">`
    const code2 = `// Code JavaScript 
object.onmouseenter = function(){  //myScript  }`
    const code3 = `// Code JavaScript using the addEventListener() 
object.addEventListener("mouseenter", function_name )`
    const codeExemple1= { 
    head:`
    <style>
        #img{ width: 64px; height: 64px; }
    </style>`,
    code: `      <img id="img" src="./hajime.jpg" onmouseenter="big(this)" onmouseleave="small(this)" />
     <p> The function big() is triggered when the mouse pointer is moved onto the image. </p>
     <p> The function small() is triggered when the mouse pointer is moved out of the image. </p>

     <script src="./index.js"></script>`,
    script:`function big(x) {
    x.style.height = "250px";
    x.style.width = "250px";
}

function small(x) {
    x.style.height = "64px";
    x.style.width = "64px";
}`
    }
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onmouseenter</h1>
    <article>
        <p className="style_divv mt-5">
            يحدث الحدث <b>onmouseenter</b> عند نقل مؤشر الماوس إلى عنصر.<br/>
            غالبا ما يتم استخدام هذا الحدث مع الحدث <b>onmouseleave</b> ، والذي يحدث عندما يتم نقل مؤشر الماوس خارج عنصر.<br/><br/>
            يشبه حدث onmouseenter حدث onmouseover. الفرق الوحيد هو أن الحدث <b>onmouseenter</b> لا ينشر التسلسل الهرمي للمستند.
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="onmouseenter" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="onmouseenter"  logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <img ref={imageRef} src={images.hajime} onMouseEnter={bigFunction} onMouseLeave={smallFunction} style={{ width:"64px",height:"64px"}} />
            <p>The function big() is triggered when the mouse pointer is moved onto the image.</p>
            <p>The function small() is triggered when the mouse pointer is moved out of the image.</p>
        </Result>
    </article>
</section>
    )
}
