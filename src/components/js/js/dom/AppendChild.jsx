import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function AppendChild(){
    const codeExemple1= { 
    code: `      <ul id="ul" class="fs-4">
         <li>HTML</li>
         <li>CSS</li>
     </ul>
      
     <script src="./index.js"></script>`,
    script:`const node = document.createElement("li");
const textnode = document.createTextNode("JavaScript");
node.appendChild(textnode);
document.getElementById("ul").appendChild(node);`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript appendChild</h1>
    <article>
        <p className="style_divv mt-5">
            تلحق طريقة <bdi><b>appendChild()</b></bdi> عقدة (عنصر) باعتبارها آخر عنصر تابع للعنصر.
            <CodeHighlighter code={`element.appendChild(node)`} language="js" addClass="mt-3 mb-3" copie={true} />
            <b>أو</b>
            <CodeHighlighter code={`node.appendChild(node)`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="appendChild" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title="appendChild" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <ul id="ul" class="fs-4">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
        </Result>
    </article>
</section>
    )
}
      