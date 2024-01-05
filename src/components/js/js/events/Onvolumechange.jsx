import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onvolumechange(){
  // function myFunction() {
  //   alert("The volume has been changed!");
  // }
  // var y = document.getElementById("myVideo");
  // y.addEventListener("volumechange", getVolume);
  // function getVolume() { 
  //   var r = document.getElementById("result")
  //   r.innerHTML = "The audio volume is: " + y.volume;
  // } 
  // function setHalfVolume() { 
  //   y.volume = 0.2;
  // } 
  // function setFullVolume() { 
  //   y.volume = 1.0;
  // } 
  const code1 = `<!-- Code HTML -->
<input onvolumechange="function_name()"/>`
  const code2 = `// Code JavaScript 
object.onvolumechange = function(){  //myScript  }`
  const code3 = `// Code JavaScript using the addEventListener()
object.addEventListener("volumechange", function_name )`
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
  <h1 className="heading-style heading-style-js-color">JavaScript onvolumechange</h1>
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
      <img src={images.js134_onvolumechange} className="img"/>
      <div className="styleee img">
          <p> Try to change the volume  in the bottom right corner.</p>
          <video controls onvolumechange="myFunction()"  width="500">
            <source src={images.video} type="video/mp4"/>
            Your browser does not support HTML5 video.
          </video>
      </div>
      <div className="mital"> متال 2 :  </div>
      <img src={images.js134_onvolumechange2} className="img"/>
      <div className="styleee img">
          <video id="myVideo" width="320" height="240" controls>
            <source src={images.video} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          <p> Change the volume by either clicking the buttons or by adjusting the volume in the bottom right corner.</p>
          <button onclick="setHalfVolume()" type="button"> Set volume to 0.2  </button>
          <button onclick="setFullVolume()" type="button">  Set volume to 1.0  </button>
          <p id="result"></p>
      </div>
  </article> 
</section>
    )
}