import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function GetElementsByTagName(){
        const codeExemple1= { 
    code: `      <div>div 1</div>
     <div>div 2</div>
     <div>div 3</div>
     <div>div 4</div>
    
     <h2 id="result"> </h2>
      
     <script src="./index.js"></script>`,
    script:`const div = document.getElementsByTagName("div");
document.getElementById("result").innerHTML = \`Numbers div = \${div.length}\``
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript getElementsByTagName</h1>
    <article>
        <p className="style_divv mt-5">
            ترجع طريقة <bdi><b>getElementsByTagName()</b></bdi> مجموعة من كافة العناصر ذات اسم علامة محدد.<br/>
            تقوم طريقة <bdi><b>getElementsByTagName()</b></bdi> بإرجاع <b><span data-bs-toggle="collapse" data-bs-target="#id_name">HTMLCollection</span></b>.<br/>
            <div id="id_name" className="collapse alert bg-info text-dark my-2"> 
                مجموعة <b>HTMLCollection</b> هي مجموعة من عُقد <b>HTML</b>.<br/>
                مجموعة <b>HTMLCollection</b> هي قائمة تشبه مصفوفة من عناصر <b>HTML</b>.<br/>
                يمكن الوصول إلى العناصر الموجودة في مجموعة بواسطة فهرس يبدأ من 0.<br/>
                ترجع خاصية <b>length</b> عدد العناصر في مجموعة <b>HTML</b>.<br/>
            </div>
            خاصية <bdi><b>getElementsByTagName()</b></bdi> للقراءة فقط.<br/>
            <CodeHighlighter code={`document.getElementsByTagName("name")`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="getElementsByTagName" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="getElementsByTagName" logo={images.html_logo} styleAdd={"p-0"} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div>div 1</div>
            <div>div 2</div>
            <div>div 3</div>
            <div>div 4</div>
            <h2> Numbers div = 5 </h2>
        </Result>
    </article>
</section>
    )
}