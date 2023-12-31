import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function CreateComment(){
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
    <h1 className="heading-style heading-style-js-color">JavaScript createComment</h1>
    <article>
        <div className="style_divv mt-5">
            تقوم طريقة <bdi><b>createComment()</b></bdi> بإنشاء تعليق وإرجاع عقدة التعليق <small><bdi>(comment node)</bdi></small>.
            <CodeHighlighter code={`const comment = document.createComment(" text comment ")
document.getElementById("id").appendChild(comment)`} language="js" addClass="mt-3 mb-3" copie={true} />
        </div>
        <div className="mital">متال :  </div>
        <img src={images.js64_createComment} className="img"/>
        <ul className="mb-0"><li> بعد النقر على <kbd>F12</kbd> </li></ul>
        <img src={images.js64_createComment_2} className="img"/>
    </article>
</section>
    )
}