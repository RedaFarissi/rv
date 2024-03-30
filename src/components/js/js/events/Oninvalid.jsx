import images from "../../imagesJs"
import { CodeHighlighter , ResultAlert} from "../../../path";
import { useRef, useState } from "react";

export default function Oninvalid(){
  const inputExempleRef = useRef()
  const [displayAlertExemple,setDisplayAlertExemple] = useState(false)
  const [valueAlertExemple,setValueAlertExemple] = useState(0)
  function clickOk(){
      setDisplayAlertExemple(false); 
  }


  const code1 = `<!-- Code HTML -->
<element oninvalid="//script">`
  const code2 = `// Code JavaScript 
object.oninvalid = function(){  //myScript  }`
  const code3 = `// Code JavaScript using the addEventListener() 
object.addEventListener("invalid", function_name )`


    const codeExemple1= { 
    code: `        <form method="GET">
        Pick a number between 2 and 9:
        <input type="number" id="Input" name="quantity" min="2" max="9" required/>
        <input type="submit" value="Submit"/>
     </form>
     <p>
      If you submit the form with a number that is less than 2 or greater than 9,
      an alert message will occur.
    </p>
      
     <script src="./index.js"></script>`,
    script:`document.getElementById("Input").addEventListener("invalid", myFunction);

function myFunction() {              
    alert("You must pick a number between 2 and 9. You chose:  " + this.value);
}`
    }
    
function myFunction() {     
  if(inputExempleRef.current.value > 9 || inputExempleRef.current.value < 2){
    setDisplayAlertExemple(true)
    setValueAlertExemple("You must pick a number between 2 and 9. You chose:  " + valueAlertExemple);
  }         
}

  return(
<section className="section-conetent">
  <h1 className="heading-style">JavaScript oninvalid</h1>
  <article>
        <p className="style_divv mt-5">
            يقع الحدث <b>oninvalid</b> عندما يكون عنصر <kbd>&lt;input&gt;</kbd> القابل للإرسال غير صالح.<br/>
            على سبيل المثال ، يكون حقل الإدخال غير صالح إذا تم تعيين السمة المطلوبة وكان الحقل فارغًا (تحدد السمة المطلوبة أنه يجب ملء حقل الإدخال قبل إرسال النموذج).
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="oninvalid" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <ResultAlert title='oninvalid' logo={images.html_logo} clickOk={clickOk} displayAlert={displayAlertExemple} alertValue={valueAlertExemple} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            Pick a number between 2 and 9:
            <input type="number" ref={inputExempleRef} onInput={()=>{setValueAlertExemple(inputExempleRef.current.value)}} name="quantity" min="2" max="9" required />
            <input type="submit" value="Submit" onClick={myFunction}/>
            <p> If you submit the form with a number that is less than 2 or greater than 9, an alert message will occur. </p>
        </ResultAlert>  
    </article>
</section>
    )
}
