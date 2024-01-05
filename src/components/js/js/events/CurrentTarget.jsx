import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
import { useState } from "react";

export default function EventCurrentTarget(){
    const [clickExemple,setClickExemple] = useState(false)
    const codeExemple1= { 
    head:`
    <style>
        #parent {
            background-color: yellow;
            padding: 9px;
        }
    </style>`,
    code: `      <div id="parent" onclick="function_name(event)">
         <p id="paragraph">this is paragraph click</p>
         <h2 id="h2">heading click</h2>
         <button id="btn">btn</button>
     </div>
     <h2 id="result"> </h2>
      
     <script src="./index.js"></script>`,
    script:`function function_name(event) {
    document.getElementById("result").innerHTML = event.currentTarget.tagName + "<br/>"
    document.getElementById("result").innerHTML += event.currentTarget.id
}`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript event.currentTarget</h1>
    <article>
        <p className="style_divv mt-5">
            ترجع خاصية الحدث <b>currentTarget</b> العنصر الذي قامت مستمعات الحدث الخاصة به بتشغيل الحدث. العنصر الأب .<br/>
            هذا مفيد بشكل خاص أثناء الالتقاط والفقاعات <small><bdi>(capturing and bubbling)</bdi></small><br/>
            تشير الخاصية <b>currentTarget</b> دائمًا إلى العنصر الذي قام مستمع الحدث الخاص به بتشغيل الحدث ، على عكس خاصية <b>target</b> ، التي تُرجع العنصر الذي أطلق الحدث.<br/>
            <CodeHighlighter code={`event.currentTarget`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="currentTarget" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="currentTarget" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="parent" onClick={()=>{ setClickExemple(true) }} style={{backgroundColor: "yellow", padding: "9px"}}>
                <p id="paragraph"> this  is paragraph click </p>
                <h2 id="h2"> heading click </h2>
                <button id="btn"> click </button>
            </div>
            <h2 className={(clickExemple)?"d-block":"d-none"} > DIV<br/>parent </h2>
        </Result>
    </article>
</section>
    )
}