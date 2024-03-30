import images from "../../imagesJs"
import { CodeHighlighter ,  ResultAlert} from "../../../path";
import { useState } from "react";

export default function Onkeydown(){
    const [displayAlertExemple,setDisplayAlertExemple] = useState(false)
    function myFunction(){
        setDisplayAlertExemple(true)
    }
    function clickOk(){
        setDisplayAlertExemple(false)
    }

    const code1 = `<!-- Code HTML -->
<element onkeydown="//script">`
    const code2 = `// Code JavaScript -->
object.onkeydown = function(){  //myScript  }`
    const code3 = `// Code JavaScript using the addEventListener() -->
object.addEventListener("keydown", function_name)`

    const codeExemple1= { 
    code: `        <p> A function is triggered when the user is pressing a key in the input field. </p>  
    <input type="text" onkeydown="myFunction()" />
          
     <script src="./index.js"></script>`,
    script:`function myFunction() {
    alert("You pressed a key inside the input field");
}`
    }
    return(
  <section className="section-conetent">
    <h1 className="heading-style">JavaScript onkeydown</h1>
    <article>
        <p className="style_divv mt-5">
            يستعمل حدث <b>onkeydown</b> لتنقيد الأوامر بمجرد النقر على أحد أزرار الكيبورد . يعمل فقط على أزرار الحروف و الأرقام .<br/>
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
            <div className="alert">
                 ترتيب الأحداث المتعلقة بحدث <b>onkeydown</b>:<br/><br/>
                <ol>
                    <li><b>onkeydown</b> : لتنقيد الأوامر بمجرد النقر على أحد أزرار الكيبورد . </li>
                    <li><b>onkeypress</b> :  لتنقيد الأوامر بمجرد النقر على أحد أزرار الكيبورد . يعمل فقط على أزرار الحروف و الأرقام</li>
                    <li><b>onkeyup</b> : لتنقيد الأوامر عند النقر على أحد أزرار الكيبورد و رفع الإصبع عنها </li>
                </ol>
            </div>
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="onkeydown" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <ResultAlert title='onkeydown' logo={images.html_logo} clickOk={clickOk} displayAlert={displayAlertExemple} alertValue={"You pressed a key inside the input field"} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <p> A function is triggered when the user is pressing a key in the input field. </p>
            <input type="text" onKeyDown={myFunction} />
        </ResultAlert>
    </article>
</section>
    )
}