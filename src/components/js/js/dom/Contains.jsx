import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Contains(){
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
    <h1 className="heading-style heading-style-js-color">JavaScript contains</h1>
    <article>
        <div className="style_divv mt-5">
            يعيد <b><bdi>contains()</bdi></b> <b>true</b> إذا كانت العقدة سليلة العقدة.<br/>
            أسلوب <b><bdi>contains()</bdi></b> يرجع القيمة <b>false</b> إذا كان العنصر لا يحتوي على العقدة سليلة
            <CodeHighlighter code={`document.contains(node)`} language="js" addClass="mt-3 mb-3" copie={true} />
        </div>
        <div className="mital">متال :  </div>
        <img src={images.js80_contains} className="img"/>
        <div className="styleee"> 
            children 1 <br/> children 2 <br/> children 3 <br/> children 4 <br/> <span>true</span>
        </div>
        <div className="mital">متال 2 :  </div>
        <img src={images.js80_contains2} className="img"/>
        <div className="styleee"> 
            children 1 <span style={{color:"red"}}>Hello Word</span> <br/>  children 2 <br/>  children 3 <br/>  children 4 <br/>  true
        </div>
        <div className="mital">متال 3 :  </div>
        <img src={images.js80_contains3} className="img"/>
        <div className="styleee">    
            children 1 <br/>   children 2 <br/>   children 3 <br/>   children 4 <br/>   false
        </div>
    </article>
</section>
    )
}