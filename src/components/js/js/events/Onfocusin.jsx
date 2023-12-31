import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onfocusin(){
    // // Focus = Changes the background color of input to green
    // function inf() {
    //   document.getElementById("Input").style.background = "green";
    // }
    // // No focus = Changes the background color of input to red
    // function outf() {
    //   document.getElementById("Input").style.background = "red";
    // }
    const code1 = `<!-- Code HTML -->
<element onfocusin="//script">`
    const code2 = `// Code JavaScript
object.onfocusin = function(){  //myScript  }`
    const code3 = `//Code JavaScript using the addEventListener()
object.addEventListener("focusin", function_name )`
  return(
<section className="section-conetent">
  <h1 className="heading-style heading-style-js-color">JavaScript onfocusin</h1>
  <article>
      <p className="style_divv mt-5">
          يحدث حدث <b>onfocusin</b> عندما يكون عنصر على وشك الحصول على التركيز.<br/>
          حدث <b>onfocusin</b> مشابه لحدث <b>onfocus</b>. الاختلاف الرئيسي هو أن حدث <b>onfocus</b> لا ينفجر. لذلك ، إذا كنت تريد معرفة ما إذا كان عنصر ما أو طفله يحصل على التركيز ، فيجب عليك استخدام حدث <b>onfocusin</b>.<br/>
          حدث <b>onfocusin</b> هو عكس حدث <b>onfocusout</b>.
          <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
          <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
          <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
      </p>
      <div className="mital"> متال :  </div>
      <img src={images.js118_onfocusin} className="img"/>
      <div className="styleee">      
          Enter your name: 
          <input type="email" id="Input" onfocusin="inf()" onfocusout="outf()"/>
      </div>
  </article>
</section>
    )
}
