import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function AppendChild(){
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
    <h1 className="heading-style heading-style-js-color">JavaScript appendChild</h1>
    <article>
        <p className="style_divv mt-5">
            تلحق طريقة <bdi><b>appendChild()</b></bdi> عقدة (عنصر) باعتبارها آخر عنصر تابع للعنصر.
            <CodeHighlighter code={`element.appendChild(node)`} language="js" addClass="mt-3 mb-3" copie={true} />
            <b>أو</b>
            <CodeHighlighter code={`node.appendChild(node)`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js66_appendChild} className="img"/>
        <div className="styleee">
            <ul id="ul" className="fs-4">
                <li> HTML </li>
                <li> CSS </li>
                <li> JavaScript </li>
            </ul>
        </div>
    </article>
</section>
    )
}
      