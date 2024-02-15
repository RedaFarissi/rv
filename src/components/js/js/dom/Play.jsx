import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Play(){
     
    function playAudio() { 
      document.getElementById("myAudio").play(); 
    } 
    function pauseAudio() { 
      document.getElementById("myAudio").pause(); 
    } 
      const codeExemple1= { 
    code: `      <button onclick="playAudio()" type="button"> Play Audio </button>
     <button onclick="pauseAudio()" type="button"> Pause Audio </button>   
     <br/>
     <audio id="myAudio" controls>
       <source src="./music.mp3" type="audio/mp3"/>
       Your browser does not support HTML5 video.
     </audio>
      
     <script src="./index.js"></script>`,
    script:`function playAudio() { 
    document.getElementById("myAudio").play(); 
} 
function pauseAudio() { 
    document.getElementById("myAudio").pause(); 
} `
    }

  return(
<section className="section-conetent">
  <h1 className="heading-style">JavaScript play</h1>
  <article>
    <div className="style_divv mt-5">
        تبدأ طريقة <bdi><b>play()</b></bdi> في تشغيل <b>audio</b> أو <b>video</b> الحالي.<br/>
            <CodeHighlighter code={`video.play()`} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={`audio.play()`} language="js" addClass="mt-3 mb-3" copie={true} />
        <div className="alert alert-warning">نصيحة: استخدم طريقة الإيقاف المؤقت () لإيقاف الصوت / الفيديو الحالي مؤقتًا.</div>
    </div>
    <div className="mital">متال :  </div>
    <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="play" addClass="mt-3 mb-3" copie={true}  number={true}/>  
    <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
    <Result title="play" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
      <button onClick={playAudio} type="button"> Play Audio </button>
      <button onClick={pauseAudio} type="button"> Pause Audio </button>
      <br/>
      <audio id="myAudio" controls>
        <source src={images.music} type="audio/mp3"/>
        Your browser does not support HTML5 video.
      </audio>
    </Result>  
  </article>
</section>
  )
}