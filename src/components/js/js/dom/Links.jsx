import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Links(){
    const codeExemple1= { 
    head:`
    <style>
      
    </style>`,
    code: `     <a href="https://www.google.com" target="_blanck"> google</a><br>
     <a href="https://www.facebook.com/" target="_blanck"> facebook </a>
     <h2 id="result"></h2>
      
     <script src="./index.js"></script>`,
    script:`result = document.getElementById("result")
result.innerText = document.links[0].outerHTML`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript links</h1>
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
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="head" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title="head" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <a href="https://www.google.com" target="_blanck"> google</a><br/>
            <a href="https://www.facebook.com/" target="_blanck"> facebook </a>
            <h2>{`<a href="https://www.google.com" target="_blanck"> google</a>`}</h2>
        </Result>
    </article>
</section>
)
}