import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
import { useEffect, useState } from "react";

export default function MatchMedia(){
    const [matched,setMatched] = useState()
    
    useEffect(()=>{
       (matchMedia("(max-width: 500px)").matches)? setMatched("Your page width is less than 500px"):setMatched("Your page width exceeds 500px");         
    },[])

    const codeExemple1= { 
    code: `     <h2 id="result"></h2>

     <script src="./index.js"></script>`,
    script:`const result = document.getElementById("result");

if (matchMedia("(max-width: 500px)").matches) {
    result.innerHTML = "Your page width is less than 500px";
}else{
    result.innerHTML = "Your page width exceeds 500px";
}`
    }

    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript matchMedia</h1>
    <article className="mt-5">
        <p className="style_divv">
            تقوم طريقة <bdi><b>matchMedia()</b></bdi> بإرجاع <b>MediaQueryList</b> بالنتائج من الاستعلام .<br/>
            كن أن تكون استعلامات الوسائط الخاصة بطريقة <bdi><b>matchMedia()</b></bdi> أيًا من ميزات الوسائط الخاصة بقاعدة <b>CSS</b> <bdi><b>@media</b></bdi> ، مثل <b>min-height</b> و <b>min-width</b> و <b> orientation</b>
            <CodeHighlighter code={`window.matchMedia("mediaQuery")`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="matchMedia" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js" code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title='matchMedia' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>{matched}</h2>
        </Result>   
    </article>
</section>
    )
}