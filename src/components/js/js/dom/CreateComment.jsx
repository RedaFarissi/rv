import images from "../../imagesJs"
import { CodeHighlighter } from "../../../path";

export default function CreateComment(){
        const codeExemple1= { 
    code: `       <div id="id"> </div>
      
     <script src="./index.js"></script>`,
    script:`let com = document.createComment(" Comment in HTML 5 with javaScript ");
document.getElementById("id").appendChild(com);`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript createComment</h1>
    <article>
        <div className="style_divv mt-5">
            تقوم طريقة <bdi><b>createComment()</b></bdi> بإنشاء تعليق وإرجاع عقدة التعليق <small><bdi>(comment node)</bdi></small>.
            <CodeHighlighter code={`const comment = document.createComment(" text comment ")
document.getElementById("id").appendChild(comment)`} language="js" addClass="mt-3 mb-3" copie={true} />
        </div>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="createAttribute" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js" addClass="mt-3 mb-3" copie={true}  number={true}/>
        <ul className="mb-0"><li> بعد النقر على <kbd>F12</kbd> </li></ul>
        <img src={images.js64_createComment_2} alt="createComment" className="img"/>
    </article>
</section>
    )
}