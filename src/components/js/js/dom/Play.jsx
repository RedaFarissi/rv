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
  <h1 className="heading-style heading-style-js-color">JavaScript play</h1>
  <article>
    <div className="style_divv mt-5">
        تبدأ طريقة <bdi><b>play()</b></bdi> في تشغيل <b>audio</b> أو <b>video</b> الحالي.<br/>
            <CodeHighlighter code={`video.play()`} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={`audio.play()`} language="js" addClass="mt-3 mb-3" copie={true} />
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