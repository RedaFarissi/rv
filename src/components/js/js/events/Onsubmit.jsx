import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onsubmit(){
  // function test(event){
  //   var email = document.getElementById("myEmail").value
  //   console.log(email);
  //   if(email.includes("@gmail.com") == true){
  //     alert("submit success")
  //   }else{
  //     event.preventDefault()
  //   }
  // }
  const code1 = `<!-- Code HTML -->
<form onsubmit="//script">`
  const code2 = `// Code JavaScript 
object.onsubmit = function(){  //myScript  }`
  const code3 = `// Code JavaScript using the addEventListener() 
object.addEventListener("submit", function_name )`
  return(
<section className="section-conetent">
  <h1 className="heading-style heading-style-js-color">JavaScript onsubmit</h1>
  <article>
      <p className="style_divv mt-5">
          يقع حدث <b>onsubmit</b> عند إرسال نموذج إلى الخادم . 
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />  
      </p>
      <div className="mital"> متال :  </div>
      <img src={images.js116_onsubmit} className="img"/>
      <div className="styleee">   
          <form onsubmit="test(event)" action="./js/test_submit.php" method="POST">
             <input type="email" name="Email_submit" id="myEmail" required/>
             <input type="submit" value="submit"/>
          </form>
      </div>
  </article>
</section>
    )
}