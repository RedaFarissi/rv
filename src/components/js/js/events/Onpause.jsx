import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onpause(){
    // function myFunction() {
    //     alert("The video was paused.");
    //   }
    const code1 = `<!-- Code HTML -->
<element onpause="//script">`
    const code2 = `// Code JavaScript
object.onpause = function(){  //myScript  }`
    const code3 = `// Code JavaScript using the addEventListener()
object.addEventListener("pause", function_name )`
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
    <h1 className="heading-style heading-style-js-color">JavaScript onpause</h1>
    <article>
        <p className="style_divv mt-5">
            يحدث حدث <b>onpause</b> عندما يتم إيقاف <b>audio</b>/<b>video</b> مؤقتًا إما من قبل المستخدم أو برمجيًا.<br/>
            <div className="alert alert-warning my-3">
                نصيحة: يحدث حدث onplay عندما يبدأ تشغيل  <b>audio</b>/<b>video</b>
            </div>
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        
        <div className="mital"> متال :  </div>
        <img src={images.js125_onpause} className="img"/>
        <div className="styleee">  
            <div>=monstrates how to assign an 
              "onpause" event to a video element.
            </div>
            <p>Play and pause the video.</p>
            <video  onpause="myFunction()" controls width="330" height="250">
              <source src={images.video} type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
        </div>
    </article>
</section>
    )
}
  