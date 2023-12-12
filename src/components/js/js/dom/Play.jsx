import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Play(){
  // var vid = document.getElementById("myAudio"); 
  // function playAudio() { 
  //   vid.play(); 
  // } 
  // function pauseAudio() { 
  //   vid.pause(); 
  // } 

  return(
<section className="section-conetent">
  <h1 className="heading-style heading-style-js-color">JavaScript play</h1>
  <article>
    <div className="style_divv mt-5">
        تبدأ طريقة <bdi><b>play()</b></bdi> في تشغيل <b>audio</b> أو <b>video</b> الحالي.<br/>
        {/* <div className="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
            <pre><span style="color:var(--js-color)">video</span>.<span style="color:gold">play()</span></pre>
        </div> */}
        {/* <div className="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
            <pre><span style="color:var(--js-color)">audio</span>.<span style="color:gold">play()</span></pre>
        </div> */}
        <div className="alert alert-warning">نصيحة: استخدم طريقة الإيقاف المؤقت () لإيقاف الصوت / الفيديو الحالي مؤقتًا.</div>
    </div>
    <div className="mital">متال :  </div>
    <img src={images.js87_play} className="img"/>
    <div className="styleee"> 
        <button onclick="playAudio()" type="button" className="mb-2">Play Video</button>
        <button onclick="pauseAudio()" type="button" className="bm-2">Pause Video  </button>
        <br/> 
        {/* <audio id="myAudio" controls>
          <source src="./js/music.mp3" type="audio/mp3"/>
          Your browser does not support HTML5 video.
        </audio> */}
    </div>
  </article>
</section>
  )
}