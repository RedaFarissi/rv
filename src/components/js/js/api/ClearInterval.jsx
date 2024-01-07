import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
import { useEffect, useState } from "react";

export default function ClearInterval(){
    const code11 = `let variable =  setInterval( Function_name , milliseconds);

clearInterval(variable);`
    const codeExemple1= { 
    code: `      <h2 id='h22'> 0 : 0 : 0 </h2>
     <button onclick="stopClock()"> Stop </button>
    
     <script src="./index.js"></script>`,
    script:`let s=0 ; m=0 , h=0 ; 
const clock = setInterval( clock ,1000)
function clock(){
    if( s < 59)   s++;
    else{ m++;  s=0; if(m == 60){ m=0; h++; } }
    document.getElementById("h22").innerHTML = \` \${h} : \${m} : \${s} \`
}
function stopClock(){
    clearInterval(clock)
}`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript clearInterval</h1>
    <article>
        <p className="style_divv mt-5">
            لمسح فاصل زمني ، قم إدخال قيمة  <bdi><b>setInterval()</b></bdi> داخل متغير تم قم بإسناد قيمة المتغير داخل <bdi><b>clearInterval()</b></bdi> .<br/>
            <CodeHighlighter code={code11} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال  :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="clearInterval" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js" addClass="mt-3 mb-3" copie={true}  number={true}/>
    </article>
</section>
    )
}