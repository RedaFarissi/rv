import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Head(){
    // document.getElementById("reSulta").innerText = `<head>
    // <title> head JavaScript </title>
    // <meta charset="utf-8">
    // <meta name="viewport" content="width=device-width, initial-scale=1">
    // </head>`
    const codeExemple1= { 
    code: `      <div id="result"></div>
      
     <script src="./index.js"></script>`,
    script:`const resulta = document.getElementById("result");
resulta.innerText = document.head.outerHTML;`
    }
    const codeExemple2= { 
    head:`
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>`,
    code: `      <div id="result"></div>
      
     <script src="./index.js"></script>`,
    script:`const result = document.getElementById("result");

result.innerHTML = document.head.firstElementChild.tagName + "<br>";
result.innerHTML += document.head.lastElementChild.tagName;`
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
        <div className="mital">متال 1 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="head" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="head" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            {`<head>`}<br/>
               &nbsp; {`<title> head  </title>`}<br/>
               &nbsp; {`<link rel="icon" href="./html_logo.png" type="image/png">`}<br/>
               &nbsp; {`<meta name="viewport" content="width=device-width, initial-scale=1">`}<br/>
            {`</head`}<br/>
        </Result>
        <div className="mital">متال 2 : </div>
        <CodeHighlighter file_name="index.html" code={codeExemple2.code} head={codeExemple2.head}  language="html" is_html={true} title="head" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="head" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            TITLE<br/>SCRIPT
        </Result>
    </article>
</section>
    )
}