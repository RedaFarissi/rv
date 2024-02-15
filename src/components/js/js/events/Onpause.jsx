import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onpause(){
    
    const code1 = `<!-- Code HTML -->
<element onpause="//script">`
    const code2 = `// Code JavaScript
object.onpause = function(){  //myScript  }`
    const code3 = `// Code JavaScript using the addEventListener()
object.addEventListener("pause", function_name )`
    const codeExemple1= { 
    head:`
    <style>
        video{ width : 50%;}
    </style>`,
    code: `      <p>Play and pause the video.</p>
     <h2 id="result">  </h2>
     <video onplay="playFunction()" onpause="pauseFunction()" controls>
         <source src="./video.mp4" type="video/mp4"/>
         Your browser does not support the video tag.
     </video>
      
     <script src="./index.js"></script>`,
    script:`function pauseFunction() {
    document.getElementById("result").innerHTML = "The video was paused."
}
function playFunction() {
    document.getElementById("result").innerHTML = ""
}`
    }
    function pauseFunction() {
        document.getElementById("result").innerHTML = "The video was paused."
    }
    function playFunction() {
        document.getElementById("result").innerHTML = ""
    }
    return(
  <section className="section-conetent">
    <h1 className="heading-style">JavaScript onpause</h1>
    <article>
        <p className="style_divv mt-5">
            يحدث حدث <b>onpause</b> عندما يتم إيقاف <b>audio</b>/<b>video</b> مؤقتًا إما من قبل المستخدم أو برمجيًا.<br/>
            <div className="alert alert-warning my-3">
                نصيحة: يحدث حدث onplay عندما يبدأ تشغيل  <b>audio</b>/<b>video</b>
            </div>
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="onmouseenter" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="onmouseenter"  logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <p>Play and pause the video.</p>
            <h2 id="result">  </h2>
            <video style={{width:"50%"}} onPlay={playFunction} onPause={pauseFunction} controls>
                <source src={images.video} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </Result>
    </article>
</section>
    )
}
  