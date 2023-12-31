import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Blur(){
    // const text = document.getElementById("text")
    // const btn = document.getElementById("bottona")
    // text.focus()
    // btn.addEventListener('click', function(){
    //   text.blur()
    // });
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
    <h1 className="heading-style heading-style-js-color">JavaScript blur</h1>
    <article>
        <p className="style_divv mt-5">
            تزيل طريقة <bdi><b>blur()</b></bdi> التركيز من عنصر.
            <CodeHighlighter code={`element.blur()`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js82_blur} className="img"/>
        <div className="styleee"> 
            <input type="email" id="text"/>
            <button id="bottona"> remove focus </button>
        </div>
    </article>
</section>
    )
}