import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
import { useEffect, useRef } from "react";

export default function Onchange(){
    const exemple2Ref = useRef()
    function function_change(){
        exemple2Ref.current.style.backgroundColor = "red"
    }
    const code1 = `<!-- Code HTML -->
<element onchange="//script">`
    const code2 = `// Code JavaScript
object.onchange = function(){  //myScript  }`
    const code3 = `// Code JavaScript using the addEventListener() 
object.addEventListener("change", function_name )`
    const codeExemple1= { 
    code: `      <select id="select">
         <option value="Html">HTML</option>
         <option value="Css">CSS</option>
         <option value="JavaScript">JAVASCRIPT</option>
         <option value="Bootstrap">BOOTSTRAP</option>
     </select>
     <h2 id="result"></h2>
      
     <script src="./index.js"></script>`,
    script:`var selectElement = document.getElementById("select");

selectElement.addEventListener("change", ()=>{
  document.getElementById("result").innerHTML = "You selected: " + selectElement.value;
});`
    }
    const codeExemple2= { 
    code: `     <input type="text" id="input-text" onchange="function_change()"/>
      
     <script src="./index.js"></script>`,
    script:`function function_change(){
    document.getElementById('input-text').style.backgroundColor = "red"
}`
    }
    useEffect(()=>{
        var selectElement = document.getElementById("select");
        selectElement.addEventListener("change", ()=>{
          document.getElementById("result").innerHTML = "You selected: " + selectElement.value;
        });
    },[])
    return(
  <section className="section-conetent">
    <h1 className="heading-style">JavaScript onchange</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث <b>onchange</b> عندما يتم تغيير قيمة العنصر.<br/>
            بالنسبة للأزرار الراديوية وخانات الاختيار ، يقع حدث <b>onchange</b> عندما يتم تغيير الحالة المحددة.<br/>
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
            <div className="alert alert-warning my-2">
                <div className="h5"><b>نصيحة</b></div>
                 هذا الحدث مشابه لحدث <b>oninput</b> الفرق هو أن حدث <b>oninput</b> يحدث فورًا بعد تغيير قيمة العنصر ، بينما يحدث التغيير عندما يفقد العنصر التركيز ، بعد تغيير المحتوى. الاختلاف الآخر هو أن حدث <b>onchange</b> يعمل أيضًا على عناصر <kbd>&lt;select&gt;</kbd>.
            </div>
        </p>
        
        <div className="mital">متال 1 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="onchange " addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title="onchange" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <select id="select">
                <option value="Html">HTML</option>
                <option value="Css">CSS</option>
                <option value="JavaScript">JAVASCRIPT</option>
                <option value="Bootstrap">BOOTSTRAP</option>
            </select>
            <h2 id="result"></h2>
        </Result>
        <div className="mital">متال 2 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple2.code} language="html" is_html={true} title="onchange " addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title="onchange" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <input type="text" ref={exemple2Ref} onChange={function_change} />
        </Result>
        
        <div className="alert alert-info" dir="ltr" style={{lineHeight: "200%",wordSpacing:"5px"}}>
            <div className="h5 mb-0 pb-0"><b>Supported HTML tags</b>:</div><br/>
        	<kbd>&lt;input type="checkbox"&gt;</kbd>, <kbd>&lt;input type="color"&gt;</kbd>, <kbd>&lt;input type="date"&gt;</kbd>, <kbd>&lt;input type="datetime"&gt;</kbd>, <kbd>&lt;input type="email"&gt;</kbd>, <kbd>&lt;input type="file"&gt;</kbd>, <kbd>&lt;input type="month"&gt;</kbd>, <kbd>&lt;input type="number"&gt;</kbd>, <kbd>&lt;input type="password"&gt;</kbd>, <kbd>&lt;input type="radio"&gt;</kbd>, <kbd>&lt;input type="range"&gt;</kbd>, <kbd>&lt;input type="search"&gt;</kbd>, <kbd>&lt;input type="tel"&gt;</kbd>, <kbd>&lt;input type="text"&gt;</kbd>, <kbd>&lt;input type="time"&gt;</kbd>, <kbd>&lt;input type="url"&gt;</kbd>, <kbd>&lt;input type="week"&gt;</kbd>, <kbd>&lt;select&gt;</kbd> , <kbd>&lt;textarea&gt;</kbd>
        </div>
    </article> 
</section>
    )
}
