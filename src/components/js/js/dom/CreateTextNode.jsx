import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function CreateTextNode(){
        const codeExemple1= { 
    code: `      <script src="./index.js"></script>`,
    script:`const element = document.createElement("h2");
const textNode = document.createTextNode("heading with createTextNode");
element.appendChild(textNode);
document.body.appendChild(element);`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript createTextNode</h1>
    <article>
        <p className="style_divv mt-5">
            يقوم أسلوب <bdi><b>createTextNode()</b></bdi> بإنشاء عقدة نصية.<br/>
            <CodeHighlighter code={`document.createTextNode(text)`} language="js" addClass="mt-3 mb-3" copie={true} />
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
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="createTextNode" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="createTextNode" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>heading with createTextNode</h2>
        </Result>     
    </article>
</section>
    )
}