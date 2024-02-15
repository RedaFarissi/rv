import { CodeHighlighter } from "../../../path";

export default function Onunload(){
    const code1 = `<!-- Code HTML -->
<body onunload="//script">`
    const code2 = `//  Code JavaScript -->
object.onunload = function(){  //myScript  }`
    const code3 = `// Code JavaScript using the addEventListener() 
object.addEventListener("unload", function_name )`
    const codeExemple1= { 
    code: `<!DOCTYPE html>
<html lang="en">
<head>
   <title> index </title>
   <link rel="icon" href="./html_logo.png" type="image/png">
   <meta name="viewport" content="width=device-width, initial-scale=1"> 
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>  
</head>
<body>
    <script>
        document.body.onunload = function() {
            alert("onunload page");
        }
    </script>
</body>  
</html>`
    }
    return(
  <section className="section-conetent">
    <h1 className="heading-style">JavaScript onunload</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث <b>onunload</b> بمجرد إلغاء تحميل الصفحة (أو إغلاق نافذة المتصفح).<br/>
            يحدث <b>onunload</b> عندما ينتقل المستخدم بعيدًا عن الصفحة (عن طريق النقر فوق ارتباط ، وإرسال نموذج ، وإغلاق نافذة المتصفح ، وما إلى ذلك).<br/>
            يتم أيضًا تشغيل حدث <b>onunload</b> عندما يعيد المستخدم تحميل الصفحة .<br/>
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html"addClass="mt-3 mb-3" copie={true} number={true}/>  
    </article>
</section>
    )
}