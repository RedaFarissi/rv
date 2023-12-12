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
  return(
<section className="section-conetent">
  <h1 className="heading-style heading-style-js-color">JavaScript pause</h1>
  <article>
    <div className="style_divv mt-5">
        توقف طريقة <bdi><b>pause()</b></bdi> المؤقت (توقف مؤقتًا) الصوت أو الفيديو قيد التشغيل حاليًا.<br/>

        تبدأ طريقة <bdi><b>play()</b></bdi> في تشغيل <b>audio</b> أو <b>video</b> الحالي.<br/>
        {/* <div className="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
            <pre><span style="color:var(--js-color)">video</span>.<span style="color:gold">pause()</span></pre>
        </div>
        <div className="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
            <pre><span style="color:var(--js-color)">audio</span>.<span style="color:gold">pause()</span></pre>
        </div> */}
        <div className="alert alert-warning"> <b>نصيحة</b> : استخدم طريقة <bdi><b>play()</b></bdi> لبدء تشغيل الصوت / الفيديو الحالي.</div>
    </div>
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