import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onpagehide(){
    const code1 = `<!-- Code HTML -->
<element onpagehide="//script">`
    const code2 = `// Code JavaScript -->
object.onpagehide = function(){  //myScript  }`
    const code3 = `// Code JavaScript using the addEventListener() -->
object.addEventListener("pagehide", function_name )`
    const codeExemple1= { 
    code: `<!DOCTYPE html>
<html lang="en">
<head>
   <title> index </title>
   <link rel="icon" href="./html_logo.png" type="image/png">
   <meta name="viewport" content="width=device-width, initial-scale=1"> 
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <style>

    </style>        
</head>
<body onpagehide="alert('you move')">
     
  <a href="./home.php"> go to home </a>
  
</body>
</html>`,
    }
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onpagehide</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث <b>onpagehide</b> عندما ينتقل المستخدم بعيدًا عن صفحة ويب.<br/>
            هناك عدة طرق للتنقل بعيدًا عن الصفحة. على سبيل المثال ، بالنقر فوق ارتباط ، وتحديث الصفحة ، وإرسال نموذج ، وإغلاق نافذة المتصفح ، وما إلى ذلك.<br/>
            يتم استخدام حدث <b>onpagehide</b> أحيانًا بدلاً من حدث <b>onunload</b> ، حيث يتسبب حدث <b>onunload</b> في عدم تخزين الصفحة مؤقتًا.<br/>
            لمعرفة ما إذا تم تحميل الصفحة مباشرة من الخادم أو إذا كانت الصفحة مخزنة مؤقتًا ، يمكنك استخدام الخاصية المستمرة لكائن <b>PageTransitionEvent</b> هذه الخاصية تعود صحيحة إذا تم تخزين الصفحة في ذاكرة التخزين المؤقت بواسطة المتصفح ، وتكون هذه الخاصية خطأ في الحالات الأخرى.<br/>
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" addClass="mt-3 mb-3" copie={true}  number={true}/>  

    </article>
</section>
    )
}