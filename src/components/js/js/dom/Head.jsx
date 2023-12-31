import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Head(){
    // document.getElementById("reSulta").innerText = `<head>
    // <title> head JavaScript </title>
    // <meta charset="utf-8">
    // <meta name="viewport" content="width=device-width, initial-scale=1">
    // </head>`
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
    <h1 className="heading-style heading-style-js-color">JavaScript head</h1>
    <article>
        <p className="style_divv mt-5">
            تقوم خاصية <b>head</b> بإرجاع عنصر <kbd>&lt;head&gt;</kbd> للمستند.
            <CodeHighlighter code={`document.head`} language="js" addClass="mt-3 mb-3" copie={true} />
            <div className="alert alert-warning my-3">
                <b>ملحوظة</b>
                إذا لم يكن هناك عنصر <kbd>&lt;head&gt;</kbd> ، فإن <b>HTML</b> تضيف عنصرًا فارغًا.<br/>
                إذا كان هناك أكثر من عنصر <kbd>&lt;head&gt;</kbd> ، فإن هذه الخاصية ترجع العنصر الأول.
            </div>
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js73_head} className="img"/>
        <div className="styleee img" id="reSulta">  </div>
        <div className="mital">متال 2 : </div>
        <img src={images.js73_head2} className="img"/>
        <div className="styleee "> TITLE<br/>META </div>
    </article>
</section>
    )
}