import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Title(){
    const codeExemple1= { 
    head:`
    <style>
      
    </style>`,
    code: `        <h2 id="result"> </h2>

     <script src="./index.js"></script>`,
    script:`const result = document.getElementById("result")
result.innerHTML = document.title`
    }
    const codeExemple2= { 
    head:`
    <style>
      
    </style>`,
    code: `      <h2 id="result"> </h2>
      
     <script src="./index.js"></script>`,
    script:`const result = document.getElementById("result")
document.title = "JAVASCRIPT TITLE"
result.innerHTML = document.title`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript title</h1>
    <article>
        <div className="style_divv mt-5">
            تقوم خاصية <b>title</b> بتعيين أو إرجاع عنوان المستند.
            <CodeHighlighter code={`document.title`} language="js" addClass="mt-3 mb-3" copie={true} />
            <b>أو</b>
            <CodeHighlighter code={`document.title = "A new title"`} language="js" addClass="mt-3 mb-3" copie={true} />
        </div>
        <div className="mital">متال 1 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="JavaScript title" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title="JavaScript title" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>JavaScript title</h2>
        </Result>   
        <div className="mital">متال 2 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple2.code} language="html" is_html={true} title="title" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title="JAVASCRIPT TITLE" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>JAVASCRIPT TITLE</h2>
        </Result>
    </article>
</section>
    )
}