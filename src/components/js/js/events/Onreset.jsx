import images from "../../imagesJs"
import { CodeHighlighter ,  ResultAlert} from "../../../path";
import { useState } from "react";

export default function Onreset(){
    const code1 = `<!-- Code HTML -->
<form onreset="//script">`
    const code2 = `// Code JavaScript -->
object.onreset = function(){  //myScript  }`
    const code3 = `// Code JavaScript using the addEventListener() 
object.addEventListener("reset", function_name )`
    const codeExemple1= { 
    code: `<!DOCTYPE html>
<html lang="en">
<head>
   <title> onreset </title>
   <link rel="icon" href="./html_logo.png" type="image/png">
   <meta name="viewport" content="width=device-width, initial-scale=1"> 
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>     
</head>
<body>
     
    <form id="myForm"  onreset="alert('The form was reset.')">
        <label for="name">Name :</label>
        <input type="text" id="name" name="name"/><br/>
        <input type="reset" class="btn btn-primary" value="reset"/>
    </form>
  
</body>  
</html>`,
    }
    const [displayAlertExemple,setDisplayAlertExemple] = useState(false)
    function clickOk(){
        setDisplayAlertExemple(false)
    }
    return(
  <section className="section-conetent">
    <h1 className="heading-style">JavaScript onreset</h1>
    <article>
        <p className="style_divv mt-5">
            طريقة <bdi><b>reset()</b></bdi> تعيد تعيين قيم جميع العناصر في نموذج (مثل النقر فوق زر إعادة التعيين).<br/><br/>
            استخدم طريقة <bdi><b>submit()</b></bdi> لإرسال النموذج.
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} /> 
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <ResultAlert title='onreset' logo={images.html_logo} clickOk={clickOk} displayAlert={displayAlertExemple} alertValue={"The form was reset."} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <form id="myForm" onReset={()=>{setDisplayAlertExemple(true)}} onSubmit={(event)=>{event.preventDefault()}}>
                <label for="name">Name :</label>
                <input type="text" id="name" name="name"/><br/>
                <input type="reset" className="btn btn-primary mt-1" value="reset" />
            </form>
        </ResultAlert>
    </article>
</section>
    )
}
