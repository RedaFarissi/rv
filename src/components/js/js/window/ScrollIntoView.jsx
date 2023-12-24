import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
import "./ScrollIntoView.css"

export default function ScrollIntoView(){
    const codeExemple1= { 
    code: `     <button onclick="name_function()">TOP</button>
     <button onclick="name_function2()">BOTTOM</button>
     <button onclick="name_function3()">smooth</button>
     <div id="DV1">
       <div id="DV2">div mark by id</div>
     </div>

     <script src="./index.js"></script>`,
    script:`function name_function() {
    //scroll top
    document.getElementById("DV2").scrollIntoView(true); // true default value
}
function name_function2() {
    //scroll bottom
    document.getElementById("DV2").scrollIntoView(false);
}
function name_function3() {
    //scroll behavior: smooth
    document.getElementById("DV2").scrollIntoView({ behavior: "smooth" });
}
`
    }
    function name_function() {
        document.getElementById("ScrollIntoView-DV2").scrollIntoView(true); // true default value
    }
    function name_function2() {
        document.getElementById("ScrollIntoView-DV2").scrollIntoView(false);
    }
    function name_function3() {
        document.getElementById("ScrollIntoView-DV2").scrollIntoView({ behavior: "smooth" });
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript scrollIntoView</h1>
    <article>
        <p className="style_divv mt-5">
            تقوم طريقة <bdi><b>scrollIntoView()</b></bdi> بتمرير محدد إلى المنطقة المرئية من نافذة المتصفح.<br/>
            يتم الوصول إلى  <b>pageYOffset</b> باستخدام :<br/>
            <CodeHighlighter code={`element.scrollIntoView()`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="location" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='location' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <button onClick={name_function}>TOP</button>
            <button onClick={name_function2}>BOTTOM</button>
            <button onClick={name_function3}>smooth</button>

            <div id="ScrollIntoView-DV1" className="mt-4">
              <div id="ScrollIntoView-DV2">div mark by id</div>
            </div>
        </Result>
    </article>
</section>
    )
}