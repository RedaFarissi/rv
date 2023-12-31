import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function SetAttribute(){
    // const res = document.getElementById("result")
    // const div = document.createElement("div");
    // div.setAttribute("class","reda")
    // res.appendChild(div)
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
    <h1 className="heading-style heading-style-js-color">JavaScript setAttribute</h1>
    <article>
        {/* .reda{ backgroundColor: "red",width: "90%", height: "200px"} */}
        <p className="style_divv mt-5">
            يعين الأسلوب <bdi><b>setAttribute()</b></bdi> قيمة جديدة للسمة.<br/>
            إذا كانت السمة غير موجودة ، يتم إنشاؤها أولاً.
            <CodeHighlighter code={`element.setAttribute(name, value)`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <img src={images.js146_setAttribute} className="img"/>
        <div className="styleee">
            <div id="result">  
                <h2> Heading </h2>
            </div>
        </div>
    </article>
</section>
    )
}
       