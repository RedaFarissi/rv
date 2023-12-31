import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Oninvalid(){
  // document.getElementById("Input").addEventListener("invalid", myFunction);
  // function myFunction() {
  //   alert("You must pick a number between 2 and 9. You chose: " + this.value);
  // }

  // function email_function(){
  //   alert(" Check your Email ");
  // }
  const code1 = `<!-- Code HTML -->
<element oninvalid="//script">`
  const code2 = `// Code JavaScript 
object.oninvalid = function(){  //myScript  }`
  const code3 = `// Code JavaScript using the addEventListener() 
object.addEventListener("invalid", function_name )`
  return(
<section className="section-conetent">
  <h1 className="heading-style heading-style-js-color">JavaScript oninvalid</h1>
  <article>

        <p className="style_divv mt-5">
            يقع الحدث <b>oninvalid</b> عندما يكون عنصر <kbd>&lt;input&gt;</kbd> القابل للإرسال غير صالح.<br/>
            على سبيل المثال ، يكون حقل الإدخال غير صالح إذا تم تعيين السمة المطلوبة وكان الحقل فارغًا (تحدد السمة المطلوبة أنه يجب ملء حقل الإدخال قبل إرسال النموذج).
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال 1 :  </div>
        <img src={images.js104_oninvalid} className="img"/>
        <div className="styleee img">
            <form action="./js/test_submit.php" method="GET">
                  Pick a number between 2 and 9: 
                  <input type="number" id="Input" name="quantity" min="2" max="9" required/>
                  <input type="submit" value="Submit"/>
            </form>
            <p>If you submit the form with a number that is less than 2 or greater than 9, an alert message will occur. </p>
        </div>
        <div className="mital">متال 2 :  </div>
        <img src={images.js104_oninvalid2} className="img"/>
        <div className="styleee img">
            <form method="POST" action="./js/test_submit.php">
              <label for="Email"> Email : </label>
              <input type="email" id="Email" name="Email" oninvalid="email_function()" required/>
              <input type="submit" value="Submit"/>
            </form>
        </div>
    </article>
</section>
    )
}
