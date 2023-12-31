import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Links(){
    // id_result = document.getElementById("resulta")
    // id_result.innerText = document.links[0].outerHTML
    const codeExemple1= { 
    head:`
    <style>
      
    </style>`,
    code: `      <h2 id="result"></h2>
      
     <script src="./index.js"></script>`,
    script:``
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript links</h1>
    <article>
        <p className="style_divv mt-5">
            تقوم خاصية الروابط بإرجاع مجموعة من كل الروابط الموجودة في المستند.<br/>
            تقوم خاصية النماذج بإرجاع <b><span data-bs-toggle="collapse" data-bs-target="#id_name">HTMLCollection</span></b>.<br/>
            <div id="id_name" className="collapse alert bg-info text-dark my-2"> 
                مجموعة <b>HTMLCollection</b> هي مجموعة من عُقد <b>HTML</b>.<br/>
                مجموعة <b>HTMLCollection</b> هي قائمة تشبه مصفوفة من عناصر <b>HTML</b>.<br/>
                يمكن الوصول إلى العناصر الموجودة في مجموعة بواسطة فهرس يبدأ من 0.<br/>
                ترجع خاصية <b>length</b> عدد العناصر في مجموعة <b>HTML</b>.<br/>
            </div>
            خاصية الروابط للقراءة فقط.<br/>
            تمثل الروابط الموجودة في المجموعة عناصر <kbd>&lt;a&gt;</kbd> و <kbd>&lt;area&gt;</kbd> بسمة <b>href</b>.
            <CodeHighlighter code={`document.links`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js75_links} className="img"/>
        <div className="styleee img" id="reSulta"> 
            <a href="https://www.google.com"> google</a><br/>
            <a href="https://www.facebook.com/"> facebook </a>
            <div id="resulta">
            </div>
        </div>
    </article>
</section>
)
}