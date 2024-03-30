import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Children(){

    const codeExemple1= { 
    code: `      <h2> Heading </h2>
     <p> Paragraph </p>
     <h2 id="result"></h2>
      
     <script src="./index.js"></script>`,
    script:`const childrens = document.body.children;
for(let i=0 ; i<childrens.length ; i++){
    document.getElementById("result").innerHTML += childrens[i].tagName + "<br>"
} `
    }
    const codeExemple2= { 
    code: `      <ol id="ol">
       <li>Lemon</li>
       <li>Banana</li>
       <li>Kiwi</li>
     </ol>
         
     <h2 id="result"></h2>
      
     <script src="./index.js"></script>`,
    script:`const result = document.getElementById("result")
const ol = document.getElementById("ol")

for(let i=0 ; i < ol.children.length ; i++){
    result.innerHTML += ol.children[i].innerHTML + "<br/>"
}`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript children</h1>
    <article>
        <p className="style_divv mt-5">
            تقوم خاصية الأطفال بإرجاع مجموعة من العناصر الفرعية لعنصر ما.<br/>
            تقوم خاصية <b>children</b> بإرجاع كائن <button id="HTMLCollection-id" style={{outline: "none", border: "none", backgroundColor:"rgb(24 24 24)", color:"brown"}}><b>HTMLCollection</b></button>.
            <CodeHighlighter code={`Element.children`} language="js" addClass="mt-3 mb-3" copie={true} />
                مجموعة <b>HTMLCollection</b> هي مجموعة من عُقد <b>HTML</b>.<br/>
                مجموعة <b>HTMLCollection</b> هي قائمة تشبه مصفوفة من عناصر <b>HTML</b>.<br/>
                يمكن الوصول إلى العناصر الموجودة في مجموعة بواسطة فهرس يبدأ من 0.<br/>
                ترجع خاصية <b>length</b> عدد العناصر في مجموعة <b>HTML</b>.
        </p>
        <div className="mital"> متال 1 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="children" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title="children" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> Heading </h2>
            <p> Paragraph </p>
            <div>
                H2<br/>
                P<br/>
                DIV<br/>
                SCRIPT
            </div>
        </Result>
        <div className="mital">متال 2 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="children" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title="children" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <ol>
                <li>Lemon</li>
                <li>Banana</li>
                <li>Kiwi</li>
            </ol>
            <h2>Lemon<br/>Banana<br/>Kiwi</h2>
        </Result>
    </article>
</section>
    )
}