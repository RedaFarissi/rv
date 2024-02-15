import images from "../../imagesJs"
import { CodeHighlighter ,  Result , ResultAlert} from "../../../path";
import { useEffect, useState } from "react";

export default function Onvolumechange(){
  const [displayAlertExemple,setDisplayAlertExemple] = useState(false)
  function clickOk(){
      setDisplayAlertExemple(false)
  }
  function myFunction(){
    setDisplayAlertExemple(true)
  }

  
  const code1 = `<!-- Code HTML -->
<input onvolumechange="function_name()"/>`
  const code2 = `// Code JavaScript 
object.onvolumechange = function(){  //myScript  }`
  const code3 = `// Code JavaScript using the addEventListener()
object.addEventListener("volumechange", function_name )`
    const codeExemple1= { 
    code: `      <p> Try to change the volume in the bottom right corner. </p>
     <video controls onvolumechange="myFunction()" width="50%">
       <source src="video.mp4" type="video/mp4">
       Your browser does not support HTML5 video.
     </video>
      
     <script src="./index.js"></script>`,
    script:`function myFunction() {
    alert("The volume has been changed!");
}`
    }
    const codeExemple2= { 
    code: `     <video id="myVideo" width="50%" controls>
            <source src="./video.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
     </video>
     <p> Change the volume by either clicking the buttons or by adjusting the volume in the bottom right corner.</p>
     <button onclick="setHalfVolume()" type="button"> Set volume to 0.2  </button>
     <button onclick="setFullVolume()" type="button">  Set volume to 1.0  </button>
     <p id="result"></p>

     <script src="./index.js"></script>`,
    script:`var y = document.getElementById("myVideo");
y.addEventListener("volumechange", getVolume);
function getVolume() { 
  var r = document.getElementById("result")
  r.innerHTML = "The audio volume is: " + y.volume;
} 
function setHalfVolume() { 
  y.volume = 0.2;
} 
function setFullVolume() { 
  y.volume = 1;
}`
    }
  function getVolume() { 
    var r = document.getElementById("result")
    r.innerHTML = "The audio volume is: " + document.getElementById("myVideo").volume;
  } 
  function setHalfVolume() { 
    document.getElementById("myVideo").volume = 0.2;
  } 
  function setFullVolume() { 
    document.getElementById("myVideo").volume = 1;
  } 
  useEffect(()=>{
    document.getElementById("myVideo").addEventListener("volumechange", getVolume);
  },[])
  return(
<section className="section-conetent">
  <h1 className="heading-style">JavaScript onvolumechange</h1>
  <article>
      <p className="style_divv mt-5">
          يقع حدث <b>onvolumechange</b> في كل مرة يتم فيها تغيير مستوى صوت  <b>video</b>/<b>audio</b>.
          تم استدعاء هذا الحدث من قبل:<br/> 
          <ul>
              <li>زيادة الحجم أو خفضه .</li>
              <li>كتم صوت مشغل الوسائط أو إلغاء كتمه .</li>
          </ul>
          استخدم خاصية <b>volume</b>  لكائن <b>video</b>/<b>audio</b> لتعيين أو إرجاع مستوى صوت <b>video</b>/<b>audio</b>.<br/>
          <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
          <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
          <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
      </p>
      <div className="mital"> متال 1 :  </div>
      <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="onvolumechange" addClass="mt-3 mb-3" copie={true}  number={true}/>  
      <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
      <ResultAlert title='onvolumechange' logo={images.html_logo} clickOk={clickOk} displayAlert={displayAlertExemple} alertValue={"The volume has been changed!"} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
          <p>Try to change the volume in the bottom right corner.</p>
          <video controls onVolumeChange={myFunction} width="50%">
              <source src={images.video} type="video/mp4"/>
              Your browser does not support HTML5 video.
          </video>
      </ResultAlert>
      <div className="mital"> متال 2 :  </div>
      <CodeHighlighter file_name="index.html" code={codeExemple2.code} language="html" is_html={true} title="onvolumechange" addClass="mt-3 mb-3" copie={true}  number={true}/>  
      <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
      <Result title="onvolumechange"  logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
          <video id="myVideo" width="50%" height="240" controls>
              <source src={images.video} type="video/mp4"/>
              Your browser does not support the video tag.
          </video>
          <p> Change the volume by either clicking the buttons or by adjusting the volume in the bottom right corner.</p>
          <button onClick={setHalfVolume} type="button"> Set volume to 0.2  </button>
          <button onClick={setFullVolume} type="button">  Set volume to 1.0  </button>
          <p id="result"></p>
      </Result>
  </article> 
</section>
    )
}