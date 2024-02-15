import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Scripts(){
    const codeExemple1= { 
    code: `       <h2> document scripts </h2>
     <script>
         document.write("Hello World!");
     </script>
        
     <p>The number of script elements in the document:</p>
     <p id="result"></p>
         
     <script>                              
       const result = document.getElementById("result")
       result.innerHTML = document.scripts.length;
     </script>`,
    }
    const codeExemple2= { 
    code: `      <script>
         document.write("Hello World!");
     </script>
         <p id="result"></p>
     <script>
         const result = document.getElementById("result");
         result.innerText += document.scripts[0].text+"<br/>";
         result.innerText += document.scripts[1].text;
     </script> `,
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript scripts</h1>
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
        <div className="mital">متال 1 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="scripts" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <Result title="scripts" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>document scripts</h2>
            <div>
                Hello World!<br/>
                The number of script elements in the document:<br/><br/>
                3
            </div>
        </Result>   
        <div className="mital">متال 2 : </div>
        <CodeHighlighter file_name="index.html" code={codeExemple2.code} language="html" is_html={true} title="scripts" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <Result title="scripts" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            Hello World!<br/>
            document.write("Hello World!");<br/>
            {"<br/>"}<br/>
            const result = document.getElementById("result");<br/>
            result.innerText += document.scripts[1].text+"{"<br/>"}";<br/>
            result.innerText += document.scripts[2].text;<br/>
        </Result> 
    </article>
</section>
    )
}