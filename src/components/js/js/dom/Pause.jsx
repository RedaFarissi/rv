import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Pause(){
  function playVid() { 
    document.getElementById("myVideo").play(); 
  } 
  function pauseVid() { 
    document.getElementById("myVideo").pause(); 
  } 
    const codeExemple1= { 
    code: `      <button onclick="playVid()" type="button" class="btn btn-outline-primary"> Play Video </button>
     <button onclick="pauseVid()" type="button" class="btn btn-outline-danger"> Pause Video </button>
       
     <br/>
       
     <video id="myVideo" width="40%" height="176">
       <source src="./video.mp4" type="video/mp4">
       Your browser does not support HTML5 video.
     </video>
      
     <script src="./index.js"></script>`,
    script:`function playVid() { 
    document.getElementById("myVideo").play(); 
} 
  function pauseVid() { 
    document.getElementById("myVideo").pause(); 
}`
    }
  return(
<section className="section-conetent">
  <h1 className="heading-style heading-style-js-color">JavaScript pause</h1>
  <article>
    <p className="style_divv mt-5">
        توقف طريقة <bdi><b>pause()</b></bdi> المؤقت (توقف مؤقتًا) الصوت أو الفيديو قيد التشغيل حاليًا.<br/>

        تبدأ طريقة <bdi><b>play()</b></bdi> في تشغيل <b>audio</b> أو <b>video</b> الحالي.<br/>
            <CodeHighlighter code={`video.pause()`} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={`audio.pause()`} language="js" addClass="mt-3 mb-3" copie={true} />
        <div className="alert alert-warning"> <b>نصيحة</b> : استخدم طريقة <bdi><b>play()</b></bdi> لبدء تشغيل الصوت / الفيديو الحالي.</div>
    </p>
    <div className="mital">متال :  </div>
    <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="pause" addClass="mt-3 mb-3" copie={true}  number={true}/>  
    <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
    <Result title="pause" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
        <button onClick={playVid} type="button" class="btn btn-outline-primary">
          Play Video
        </button>
        <button onClick={pauseVid} type="button" class="btn btn-outline-danger">
          Pause Video
        </button>
        <br/>
        <video id="myVideo" width="40%" height="176" className="mt-2">
          <source src={images.video} type="video/mp4"/>
          Your browser does not support HTML5 video.
        </video>
    </Result>  
  </article>
</section>
  )
}