import images from "../../imagesJs"
import { CodeHighlighter ,  ResultAlert} from "../../../path";
import { useState } from "react";

export default function Onloadedmetadata(){

  const [displayAlertExemple,setDisplayAlertExemple] = useState(true)
  const [valueAlertExemple,setValueAlertExemple] = useState("Starting to load video")
  function clickOk(){
    switch(valueAlertExemple){
      case "Starting to load video": setValueAlertExemple("durationchange to load video"); break;
      case "durationchange to load video": setValueAlertExemple("Meta data for video loaded"); break;
      case "Meta data for video loaded": setDisplayAlertExemple(false); break;
    }
  }
  const code1 = `<!-- Code HTML -->
<video src="name.type" onloadedmetadata="//script"> </video>`
  const code2 = `<!-- Code JavaScript -->
object.onloadedmetadata = function(){  //myScript  }`
  const code3 = `<!-- Code JavaScript using the addEventListener() -->
object.addEventListener("loadedmetadata", function_name )`
    const codeExemple1= { 
    code: `      <video controls width="50%" onloadstart="function_name()" ondurationchange="function_name2()" onloadedmetadata="function_name3()">
         <source src="./video.mp4" type="video/mp4"/>
         Your browser does not support HTML5 video.
     </video>
      
     <script src="./index.js"></script>`,
    script:`  function function_name() {
    alert("Starting to load video");
}
function function_name2() {
    alert("durationchange to load video");
}
function function_name3() {
    alert("Meta data for video loaded");
}`
    }
  return(
<section className="section-conetent">
  <h1 className="heading-style">JavaScript onloadedmetadata</h1>
  <article>
        <p className="style_divv mt-5">
            يقع حدث <b>onloadedmetadata</b> عندما يتم تحميل بيانات التعريف الخاصة ب <bdi><b>audio/video</b></bdi> المحدد.<br/>
            تتكون البيانات الوصفية ل <bdi><b>audio/video</b></bdi> من: المدة والأبعاد (الفيديو فقط) والمسارات النصية.<br/><br/>
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
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="onloadedmetadata" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <ResultAlert title='onloadedmetadata' logo={images.html_logo} clickOk={clickOk} displayAlert={displayAlertExemple} alertValue={valueAlertExemple} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <video controls width="50%" >
                <source src={images.video} type="video/mp4"/>
                Your browser does not support HTML5 video.
            </video>
        </ResultAlert>   
    </article>
</section>
    )
}
