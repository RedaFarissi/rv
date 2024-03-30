import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
import { useState } from "react";

export default function OnctrlKey(){
  const [exemple,setExemple] = useState("")

  const codeExemple1= { 
    code: `      <p> use event.ctrlKey width event onkeypress </p>
     <h2 id="result">  </h2>
      
      <script src="./index.js"></script>`,
    script:`function function_KeyPressed(event) {
    var result = document.getElementById("result");    
    if (event.ctrlKey && event.code == "KeyI") {
      result.innerHTML = "you press Ctrl + I "
    } else if (event.ctrlKey) {
      result.innerHTML = "you press Ctrl + "+ event.code;
    } else {
      result.innerHTML = "The CTRL key was NOT pressed!"
    }
}`
    }
  
  function function_KeyPressed(event) {
      if (event.ctrlKey && event.code === "KeyI") {
        setExemple("you press Ctrl + I ")
      } else if (event.ctrlKey) {
        setExemple("you press Ctrl + "+ event.code)
      } else {
        setExemple("The CTRL key was NOT pressed!")
      }
  }
  
  document.body.addEventListener("keypress", function_KeyPressed);
  return(
<section className="section-conetent">
  <h1 className="heading-style">JavaScript onctrlKey</h1>
  <article>
    <p className="style_divv mt-5">
        تقوم الخاصية <b>onctrlKey</b> بإرجاع قيمة منطقية تشير إلى ما إذا كان قد تم الضغط على مفتاح <kbd>CTRL</kbd> عند تشغيل حدث الماوس أم لا.<br/>
        هذه الخاصية للقراءة فقط.
        <CodeHighlighter code={`event.ctrlKey`} language="js" addClass="mt-3 mb-3" copie={true} />
    </p>
    <CodeHighlighter code={`if(event.ctrlKey){
    // JavaScript Code 
}else{
    // JavaScript Code 
}`} language="js" addClass="mt-3 mb-3" copie={true} />
    <div className="mital"> متال :  </div>
    <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="ctrlKey" addClass="mt-3 mb-3" copie={true}  number={false}/>  
    <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
    <Result title='ctrlKey  ' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
        <p> use event.ctrlKey width event  onkeypress  </p>
        <h2> {exemple} </h2>
    </Result>
  </article>
</section>
  )
}