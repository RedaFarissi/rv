import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onended(){
    // var video = document.getElementById("video")  
    // function videO(){
    //     alert("thanks for watching "+"\npress p to load video"+"\npress s to start video")
    // }

    // document.body.addEventListener('keypress', function Reload(event){
    //     if(event.key == "p"){
    //       video.load();
    //     }
    //     if(event.key == "s"){
    //       video.play();
    //     }
    // })
    const code1 = `<!-- Code HTML -->
<element onended="//script">`
    const code2 = `// Code JavaScript 
object.onended = function(){  //myScript  }`
    const code3 = `// Code JavaScript using the addEventListener() 
object.addEventListener("ended", function_name )`
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onended</h1>
    <article>
        <div className="style_divv mt-5">
            يقع الحدث <b>onended</b> عندما يصل <b>audio</b>/<b>video</b> إلى نهايته.<br/>
            هذا الحدث مفيد لرسائل  وما إلى ذلك.<br/>
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </div>
        <div className="mital"> متال :  </div>
        <img src={images.js117_onended} className="img"/>
        <div className="styleee">   
            <video id="video" controls oncanplay="myFunction()" onended="videO()" width="50%">
              <source src={images.video} type="video/mp4" for="2"/>
              Your browser does not support HTML5 video.
            </video>
        </div>
    </article>
</section>
    )
}
