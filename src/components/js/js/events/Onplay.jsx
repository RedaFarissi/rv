import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onplay(){
  const code1 = `<!-- Code HTML -->
<element onplay="//script">`
  const code2 = `// Code JavaScript
object.onplay = function(){  //myScript  }`
  const code3 = `// Code JavaScript using the addEventListener() 
object.addEventListener("play", function_name )`
    const codeExemple1= { 
    head:`
    <style>
        video{ width : 50%;}
    </style>`,
    code: `      <p>Play and pause the video.</p>
    <h2 id="result">  </h2>
    <video style={{width:"50%"}} onPlay={playFunction} onPause={pauseFunction} controls>
        <source src={images.video} type="video/mp4"/>
        Your browser does not support the video tag.
    </video>
      
     <script src="./index.js"></script>`,
    script:`function pauseFunction() {
    document.getElementById("result").innerHTML = "The video was paused."
}
function playFunction() {
    document.getElementById("result").innerHTML = "The video was played."
}`
  }
  function pauseFunction() {
      document.getElementById("result").innerHTML = "The video was paused."
  }
  function playFunction() {
      document.getElementById("result").innerHTML = "The video was played."
  }
  return(
<section className="section-conetent">
  <h1 className="heading-style heading-style-js-color">JavaScript onplay</h1>
  <article>
    <p className="style_divv mt-5">
        يحدث حدث <b>onplay</b> عند بدء تشغيل <b>audio</b>/<b>video</b> أو لم يعد متوقفًا مؤقتًا.<br/>
        يحدث حدث <b>onpause</b> عندما يتم إيقاف الصوت / الفيديو مؤقتًا.
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