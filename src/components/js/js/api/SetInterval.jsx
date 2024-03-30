import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
import { useEffect, useState } from "react";

export default function SetInterval(){
    const codeExemple1= { 
    code: `      <button onclick="setInterval( myFunction ,1000)" class="btn btn-primary m-2"> Cick Here </button>
     <h2 id='result'> </h2>
    
     <script src="./index.js"></script>`,
    script:`function myFunction(){
    document.getElementById("result").innerHTML += "Hello Word"
}`
    }
    const codeExemple2= { 
    code: `      <h2 id='h22'> 0 : 0 : 0 </h2>
    
     <script src="./index.js"></script>`,
    script:`let id2 = document.getElementById("h22")
let s=0 ; m=0 , h=0 ; 
setInterval( Clock ,1000)
function Clock(){
    if( s < 59)   s++;
    else{ m++;  s=0; if(m == 60){ m=0; h++; } }
    id2.innerHTML = \` \${h} : \${m} : \${s} \`
}`
    }
    function myFunction(){
        document.getElementById("result").innerHTML += "Hello Word"
    }
    const [time, setTime] = useState({ h: 0, m: 0, s: 0 });

      useEffect(() => {
        setInterval(() => {
            setTime(prevTime => {
                let { h, m, s } = prevTime;
                if (s < 59) {
                    s++;
                } else {
                    m++;
                    s = 0;
                    if (m === 60) {
                        m = 0;
                        h++;
                    }
                }
                return { h, m, s };
            });
        }, 1000);
    },[]);
    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript setInterval</h1>
    <article>
        <p className="style_divv mt-5">
            تستدعي طريقة <bdi><b>setInterval()</b></bdi> دالة في فترات زمنية محددة (بالمللي ثانية).<br/>
            تستمر طريقة <bdi><b>setInterval()</b></bdi> في استدعاء الوظيفة حتى يتم استدعاء <bdi>clearInterval()</bdi> أو تصبح النافذة
            <CodeHighlighter code={`setInterval( Function_name , milliseconds)`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال 1 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="setInterval" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js" addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title="setInterval" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <button onClick={()=>{ setInterval( myFunction ,1000); }} className="btn btn-primary m-2"> Cick Here </button>
            <h2 id='result'> </h2>
        </Result>
        <div className="mital"> متال 2 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple2.code} language="html" is_html={true} title="setInterval" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js" addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title="setInterval" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>{`${time.h} : ${time.m} : ${time.s}`}</h2>
        </Result>
    </article>
</section>
    )
}
