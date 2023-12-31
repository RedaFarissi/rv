import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Scripts(){
    const codeExemple1= { 
    head:`
    <style>
      
    </style>`,
    code: `      <h2 id="result"></h2>
      
     <script src="./index.js"></script>`,
    script:``
    }
    const codeExemple2= { 
    head:`
    <style>
      
    </style>`,
    code: `      <h2 id="result"></h2>
      
     <script src="./index.js"></script>`,
    script:``
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript scripts</h1>
    <article>
        <p className="style_divv mt-5">
            تقوم خاصية البرامج النصية بإرجاع مجموعة من جميع عناصر <kbd>&lt;script&gt;</kbd> في المستند.<br/>
            تقوم خاصية البرامج النصية بإرجاع مجموعة <b><span data-bs-toggle="collapse" data-bs-target="#id_name">HTMLCollection</span></b>
            <div id="id_name" className="collapse alert bg-info text-dark my-2"> 
                مجموعة <b>HTMLCollection</b> هي مجموعة من عُقد <b>HTML</b>.<br/>
                مجموعة <b>HTMLCollection</b> هي قائمة تشبه مصفوفة من عناصر <b>HTML</b>.<br/>
                يمكن الوصول إلى العناصر الموجودة في مجموعة بواسطة فهرس يبدأ من 0.<br/>
                ترجع خاصية <b>length</b> عدد العناصر في مجموعة <b>HTML</b>.<br/>
            </div>.<br/>
            خاصية البرامج النصية للقراءة فقط.
            <CodeHighlighter code={`document.scripts`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js78_scripts} className="img"/>
        <div className="styleee"> 
            <div className="h2">document scripts</div>
            Hello World!
            <p>The number of script elements in the document:</p>
            3
        </div>
        <div className="mital">متال 2 : </div>
        <img src={images.js78_scripts2} className="img"/>
        <div className="styleee"> 
            Hello World!<br/>
            document.write("Hello World!");<br/>
            const result = document.getElementById("result") result.innerHTML = document.scripts[0].text + "";<br/>
            result.innerHTML += document.scripts[1].text
        </div>
    </article>
</section>
    )
}