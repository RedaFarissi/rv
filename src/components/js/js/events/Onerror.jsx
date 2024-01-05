import images from "../../imagesJs"
import { CodeHighlighter , ResultAlert} from "../../../path";
import { useState } from "react";

export default function Onerror(){

  const code1 = `<!-- Code HTML -->
<element onerror="//script">`
  const code2 = `// Code JavaScript
object.onerror = function(){  //myScript  }`
  const code3 = `// Code JavaScript using the addEventListener()
object.addEventListener("error", function_name )`
    const codeExemple1= { 
    
    code: `      <img src="./images.gif" onerror="myFunction()"/>
     <p>
       A function is triggered if an error
       occurs when loading the image. 
       The function shows an alert box with a text.
       In this example we refer to an image
       that does not exist, therefore 
       the onerror event occurs.
     </p>
      
     <script src="./index.js"></script>`,
    script:`function myFunction() {
    alert('The image could not be loaded.');
}`
    }
    const [displayAlertExemple,setDisplayAlertExemple] = useState(true)
    function clickOk(){
      setDisplayAlertExemple(false)
    }
    
  return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onerror</h1>
    <article>
        <p className="style_divv mt-5">
            يتم تشغيل حدث <b>onerror</b> في حالة حدوث خطأ أثناء تحميل ملف خارجي (مثل مستند أو صورة).   
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="onerror" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <ResultAlert title="onerror" logo={images.html_logo} clickOk={clickOk} displayAlert={displayAlertExemple} alertValue={"The image could not be loaded."} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <img src="images.gif" className="img"/>
            <p>
                A function is triggered if an error
                occurs when loading the image. 
                The function shows an alert box with a text.
                In this example we refer to an image
                that does not exist, therefore 
                the onerror event occurs.
            </p>
        </ResultAlert>  
    </article>
</section>
    )
}
