import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Pause(){
  // var vid = document.getElementById("myVideo"); 
  // function playVid() { 
  //   vid.play(); 
  // } 
  // function pauseVid() { 
  //   vid.pause(); 
  // } 
    const codeExemple1= { 
    head:`
    <style>
      
    </style>`,
    code: `      <h2 id="result"></h2>
      
     <script src="./index.js"></script>`,
    script:``
    }
  return(
<section className="section-conetent">
  <h1 className="heading-style heading-style-js-color">JavaScript pause</h1>
  <article>
    <dipv className="style_divv mt-5">
        توقف طريقة <bdi><b>pause()</b></bdi> المؤقت (توقف مؤقتًا) الصوت أو الفيديو قيد التشغيل حاليًا.<br/>

        تبدأ طريقة <bdi><b>play()</b></bdi> في تشغيل <b>audio</b> أو <b>video</b> الحالي.<br/>
            <CodeHighlighter code={`video.pause()`} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={`audio.pause()`} language="js" addClass="mt-3 mb-3" copie={true} />
        <div className="alert alert-warning"> <b>نصيحة</b> : استخدم طريقة <bdi><b>play()</b></bdi> لبدء تشغيل الصوت / الفيديو الحالي.</div>
    </dipv>
    <div className="mital">متال :  </div>
    <img src={images.js88_pause} className="img"/>
    <div className="styleee"> 
        <button onclick="playVid()" type="button" className="btn btn-outline-primary mb-2">
            Play Video
        </button>
        <button onclick="pauseVid()" type="button" className="btn btn-outline-danger mb-2">
          Pause Video
        </button>
        <br/> 
        <video id="myVideo" width="40%" height="176">
          <source src={images.video} type="video/mp4"/>
          Your browser does not support HTML5 video.
        </video>
    </div>
  </article>
</section>
  )
}