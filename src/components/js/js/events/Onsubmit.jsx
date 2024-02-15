import images from "../../imagesJs"
import { CodeHighlighter ,  ResultAlert} from "../../../path";
import { useState } from "react";

export default function Onsubmit(){

  const code1 = `<!-- Code HTML -->
<form onsubmit="//script">`
  const code2 = `// Code JavaScript 
object.onsubmit = function(){  //myScript  }`
  const code3 = `// Code JavaScript using the addEventListener() 
object.addEventListener("submit", function_name )`
    const codeExemple1= { 
    code: `      <form onsubmit="test(event)" action="./home.html" method="POST">
          <input type="email" name="myEmail" id="myEmail" required>
          <input type="submit" value="submit">
     </form>
      
     <script src="./index.js"></script>`,
    script:`function test(event) {
      var email = document.getElementById("myEmail").value
  
      if (email.includes("@gmail.com") == true) {
          alert("submit success")
      } else {
          event.preventDefault()
      }
}`
    }
    const [displayAlertExemple, setDisplayAlertExemple] = useState(false)
    const [route, setRoute] = useState("index")
    function clickOk(){
      setDisplayAlertExemple(false)
    }
    function test(event){
      event.preventDefault()
      setRoute("home")
      setDisplayAlertExemple(true)
    }
  return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript onsubmit</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث <b>onsubmit</b> عند إرسال نموذج إلى الخادم . 
              <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
              <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
              <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />  
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="onsubmit" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <ResultAlert title={(route==="index")?"onsubmit":"home"} logo={images.html_logo} clickOk={clickOk} displayAlert={displayAlertExemple} alertValue={"submit success"} route={`file:///C:/Users/SURFACE%20BOOK/Desktop/html/${route}.html`}>
            {
              (route==="index")?
              <form onSubmit={test} method="POST">
                <input type="email" name="myEmail" id="myEmail" required/>
                <input type="submit" value="submit"/>
              </form> : <h2>Home</h2>
            }
        </ResultAlert>
    </article>
</section>
    )
}