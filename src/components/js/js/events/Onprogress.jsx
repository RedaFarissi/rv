import images from "../../imagesJs"
import { CodeHighlighter ,  ResultAlert} from "../../../path";
import { useState } from "react";

export default function Onprogress(){
    const [displayAlertExemple,setDisplayAlertExemple] = useState(true)
    function clickOk(){
        setDisplayAlertExemple(false)
    }

    const code1 = `<!-- Code HTML -->
<video src="name.type" onprogress="//script">  </video> `
    const code2 = `// Code JavaScript 
object.onprogress = function(){  //myScript  }`
    const code3 = `// Code JavaScript using the addEventListener() 
object.addEventListener("progress", function_name )`
    const codeExemple1= { 
    code: `      <video controls width="50%">
         <source src="./video.mp4" type="video/mp4"/>
       Your browser does not support HTML5 video.
     </video>
      
     <script src="./index.js"></script>`,
    script:`function function_name(){
     alert("onprogress");
}`
    }
    return(
  <section className="section-conetent">
    <h1 className="heading-style">JavaScript onprogress</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث <b>onprogress</b> عندما يقوم المستعرض بتنزيل الصوت / الفيديو المحدد.<br/><br/>
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
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="onprogress" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <ResultAlert title='onprogress' logo={images.html_logo} clickOk={clickOk} displayAlert={displayAlertExemple} alertValue={`onprogress`} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <video controls width="50%" >
                <source src={images.video} type="video/mp4"/>
                Your browser does not support HTML5 video.
            </video>
        </ResultAlert>   
    </article>
</section>
    )
}