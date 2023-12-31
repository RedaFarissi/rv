import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function CreateTextNode(){
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
    <h1 className="heading-style heading-style-js-color">JavaScript createTextNode</h1>
    <article>
        <p className="style_divv mt-5">
            يقوم أسلوب <bdi><b>createTextNode()</b></bdi> بإنشاء عقدة نصية.<br/>
            <CodeHighlighter code={`document.createTextNode(text)`} language="js" addClass="mt-3 mb-3" copie={true} />
            <div className="alert alert-info d-inline-block"> عقد = node</div>
        </p>
        <div className="alert alert-warning">
        <div className="h4 pb-2">عناصر <b>HTML</b> هي عقد  </div> 
        <ul>
            <li>جميع عناصر <b>HTML</b> عبارة عن عقد.<br/></li>
            <li>العناصر هي عقد. السمات هي العقد. النصوص هي عقد.</li>
            <li>تحتوي بعض العناصر على عقد أخرى.</li>
            <li>تحتوي بعض العناصر على عقد نصية.</li>
            <li>تحتوي بعض العناصر على عقد السمة.</li>
        </ul>
        </div>
        <div className="mital">متال :  </div>
        <img src={images.js67_createTextNode} className="img"/>
        <div className="styleee">
           <div className="h2">heading with createTextNode</div>
        </div>
    </article>
</section>
    )
}