import images from "../../imagesJs"
import { CodeHighlighter ,  Result } from "../../../path";
import { useRef, useState } from "react";

export default function Onended(){
    const exempleVideo = useRef()
    const [status,setStatus] = useState("")

    function videoEnded(){
        setStatus(<span>thanks for watching <br/> press l to load video <br/> press s to start video<br/> press p to pause video<br/></span>)
    }
    function videoCanplay(){
        setStatus("Canplay")
    }        
    
    document.body.addEventListener('keypress', function Reload(event){
        switch(event.key){
            case "l": exempleVideo.current.load() ; break;
            case "s": exempleVideo.current.play() ; break;
            case "p": exempleVideo.current.pause() ; break;
        }
        // if(event.key === "l"){
        //     exempleVideo.current.load();
        // }
        // if(event.key === "s"){
        //     exempleVideo.current.play();
        // }
        // if(event.key === "p"){
        //     exempleVideo.current.pause();
        // }
    })


    const code1 = `<!-- Code HTML -->
<element onended="//script">`
    const code2 = `// Code JavaScript 
object.onended = function(){  //myScript  }`
    const code3 = `// Code JavaScript using the addEventListener() 
object.addEventListener("ended", function_name )`
    const codeExemple1= { 
    code: `     <h2 id="status"> </h2>
     <video id="video" controls oncanplay="videoCanplay()" onended="videoEnded()">
       <source src="./video.mp4" type="video/mp4">
       Your browser does not support HTML5 video.
     </video>
      
     <script src="./index.js"></script>`,
    script:`function videoEnded(){
    document.getElementById("status").innerHTML = \`thanks for watching <br/>
        press l to load video <br/>
        press s to start video<br/>
        press p to pause video<br/>
        \`
}
function videoCanplay(){
    document.getElementById("status").innerHTML =  "Canplay"
}        

document.body.addEventListener('keypress', function Reload(event){
    if(event.key == "l"){
      document.getElementById("video").load();
    }
    if(event.key == "s"){
      document.getElementById("video").play();
    }
    if(event.key == "p"){
      document.getElementById("video").pause();
    }
})`
    }
    return(
  <section className="section-conetent">
    <h1 className="heading-style">JavaScript onended</h1>
    <article>
        <div className="style_divv mt-5">
            يقع الحدث <b>onended</b> عندما يصل <b>audio</b>/<b>video</b> إلى نهايته.<br/>
            هذا الحدث مفيد لرسائل  وما إلى ذلك.<br/>
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </div>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="onended " addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title="onended" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>{status}</h2>
            <video id="video" ref={exempleVideo} width="50%" controls onCanPlay={videoCanplay} onEnded={videoEnded}>
                <source src={images.video} type="video/mp4" for="2"/>
                Your browser does not support HTML5 video.
            </video>
        </Result>
    </article>
</section>
    )
}
