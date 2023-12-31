import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onplay(){
  // #input_test{ width: 50%;}

  // var play = document.getElementById("plAy")
  //   var pause = document.getElementById("pauSe")

  //   play.addEventListener('click',function(){
  //     document.getElementById('video_test').play()
  //   })

  //   pause.addEventListener('click',function(){
  //     document.getElementById('video_test').pause()
  //   })

  //   function function_pause() {
  //     alert("The video was paused.");
  //   }
    
  //   function function_play(){
  //     alert("The video was played.");
  //   }
  const code1 = `<!-- Code HTML -->
<element onplay="//script">`
  const code2 = `// Code JavaScript
object.onplay = function(){  //myScript  }`
  const code3 = `// Code JavaScript using the addEventListener() 
object.addEventListener("play", function_name )`
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
    <img src={images.js126_onplay} className="img"/>
    <div className="styleee">  
        <p><b>Play and pause the video.</b></p>
        <video id="video_test" onplay="function_play()"  onpause="function_pause()" controls width="330" height="250">
          <source src={images.video} type="video/mp4"/>
          Your browser does not support the video tag.
        </video><br/>
        <button className="btn btn-primary" id="plAy">
           play 
        </button>
        <button className="btn btn-danger" id="pauSe"> 
          pause 
        </button>
    </div>
  </article>
</section>
    )
}