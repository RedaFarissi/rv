import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Title(){
    const codeExemple1= { 
    head:`
    <style>
      
    </style>`,
    code: `      <h2 id="result"></h2>
      
     <script src="./index.js"></script>`,
    script:``
    }
    const codeExemple2= { 
    head:`
    <style>
      
    </style>`,
    code: `      <h2 id="result"></h2>
      
     <script src="./index.js"></script>`,
    script:``
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript title</h1>
    <article>
        <div className="style_divv mt-5">
            تقوم خاصية <b>title</b> بتعيين أو إرجاع عنوان المستند.
            <CodeHighlighter code={`document.title`} language="js" addClass="mt-3 mb-3" copie={true} />
            <b>أو</b>
            <CodeHighlighter code={`document.title = "A new title"`} language="js" addClass="mt-3 mb-3" copie={true} />
        </div>
        <div className="mital">متال 1 :  </div>
        <img src={images.js79_title} className="img"/>
        <div className="styleee"> 
            document title
        </div>
        <div className="mital">متال 2 :  </div>
        <img src={images.js79_title2} className="img"/>
        <div className="styleee"> 
            JAVASCRIPT TITLE
        </div>
    </article>
</section>
    )
}