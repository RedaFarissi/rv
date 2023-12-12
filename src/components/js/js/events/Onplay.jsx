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
  return(
<section className="section-conetent">
  <h1 className="heading-style heading-style-js-color">JavaScript onplay</h1>
  <article>
    <p className="style_divv mt-5">
        يحدث حدث <b>onplay</b> عند بدء تشغيل <b>audio</b>/<b>video</b> أو لم يعد متوقفًا مؤقتًا.<br/>
        يحدث حدث <b>onpause</b> عندما يتم إيقاف الصوت / الفيديو مؤقتًا.
        {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
            <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
    <span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">onplay</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
        </div>
        <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
            <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
    <span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onplay</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
        </div>
        <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
            <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
    <span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"play"</span>, function_name <span style="color:gold">)</span></pre>  
        </div> */}
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