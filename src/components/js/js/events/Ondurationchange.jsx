import images from "../../imagesJs"
import { CodeHighlighter ,  ResultAlert} from "../../../path";
import { useState } from "react";

export default function Ondurationchange(){

  const code1 = `<!-- Code HTML -->
<video src="name.type" ondurationchange="//script"> </video> `
  const code2 = `// Code JavaScript 
object.ondurationchange = function(){  //myScript  }`
  const code3 = `// Code JavaScript using the addEventListener() 
  object.addEventListener("durationchange", function_name )`
      const codeExemple1= { 
    code: `      <video controls onloadstart="function_name()" ondurationchange="function_name2()" width="50%">
          <source src="./video.mp4" type="video/mp4"/>
        Your browser does not support HTML5 video.
    </video>
      
     <script src="./index.js"></script>`,
    script:`function function_name(){
    alert("Starting to load video");
}

function function_name2(){
    alert("durationchange to load video");
}`
    }
    const [displayAlertExemple,setDisplayAlertExemple] = useState(true)
    const [valueAlertExemple,setValueAlertExemple] = useState("Starting to load video")
    function clickOk(){
        switch(valueAlertExemple){
          case "Starting to load video": setValueAlertExemple("durationchange to load video"); break;
          case "durationchange to load video": setDisplayAlertExemple(false); break;
        }
    }
  return(
  <section className="section-conetent">
    <h1 className="heading-style">JavaScript ondurationchange</h1>
    <article>
      <p className="style_divv mt-5">
        يقع حدث <b>ondurationchange</b> عندما يتم تغيير مدة <bdi><b>audio/video</b></bdi> .<br/><br/>
        أثناء عملية تحميل <bdi><b>audio/video</b></bdi> ، تقع الأحداث التالية بهذا الترتيب :
        <ol dir="ltr"> 
            <li> <b>onloadstart</b> </li>
            <li> <b>ondurationchange</b> </li>
            <li> <b>onloadedmetadata</b> </li>
            <li> <b>onloadeddata</b> </li>
            <li> <b>onprogress</b> </li>
            <li> <b>oncanplay</b> </li>
            <li> <b>oncanplaythrough</b> </li>
        </ol>
        <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
        <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
        <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
      </p>
      <div className="mital">متال :  </div>
      <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="ondurationchange" addClass="mt-3 mb-3" copie={true}  number={true}/>  
      <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
      <ResultAlert title='ondurationchange' logo={images.html_logo} clickOk={clickOk} displayAlert={displayAlertExemple} alertValue={valueAlertExemple} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
          <video controls width="50%" >
              <source src={images.video} type="video/mp4"/>
              Your browser does not support HTML5 video.
          </video>
      </ResultAlert>   
  </article>
</section>
    )
}
