import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Images(){
        const codeExemple1= { 
    code: `      <img src="./hajime.jpg" class="w-25" style="height:200px;"/>
     <img src="./hajime2.jpg" class="w-25" style="height:200px;"/>  
     <div id="result">  </div>
      
     <script src="./index.js"></script>`,
    script:`const result = document.getElementById("result")
result.innerHTML = \`images length = \${document.images.length}\``
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript images</h1>
    <article>
        <p className="style_divv mt-5">
            تقوم خاصية <b>images</b> بإرجاع مجموعة من جميع عناصر <kbd>&lt;img&gt;</kbd> في المستند.<br/>
            تقوم خاصية الصور بإرجاع مجموعة <b><span data-bs-toggle="collapse" data-bs-target="#id_name">HTMLCollection</span></b>.<br/>
            <div id="id_name" className="collapse alert bg-info text-dark my-2"> 
                مجموعة <b>HTMLCollection</b> هي مجموعة من عُقد <b>HTML</b>.<br/>
                مجموعة <b>HTMLCollection</b> هي قائمة تشبه مصفوفة من عناصر <b>HTML</b>.<br/>
                يمكن الوصول إلى العناصر الموجودة في مجموعة بواسطة فهرس يبدأ من 0.<br/>
                ترجع خاصية <b>length</b> عدد العناصر في مجموعة <b>HTML</b>.<br/>
            </div>
            <CodeHighlighter code={`document.images`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="head" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="head" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <img src={images.hajime} className="w-25" style={{height:"200px"}}/>
            <img src={images.hajime2} className="w-25" style={{height:"200px"}}/>
            <div className="mt-2"> images length = 2 </div>
        </Result>
    </article>
</section>
    )
}