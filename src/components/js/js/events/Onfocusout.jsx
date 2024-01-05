import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onfocusout(){
    // // Focus = Changes the background color of input to green
    // function inf() {
    //   document.getElementById("Input").style.background = "green";
    // }
    // // No focus = Changes the background color of input to red
    // function outf() {
    //   document.getElementById("Input").style.background = "red";
    // }
    const code1 = `<!-- Code HTML -->
<element onfocusout="//script">`
    const code2 = `// Code JavaScript 
object.onfocusout = function(){  //myScript  }`
    const code3 = `// Code JavaScript using the addEventListener() 
object.addEventListener("focusout", function_name )`

    const codeExemple1= { 
    head:`
    <style>
      
    </style>`,
    code: `      <h2 id="result"></h2>
      
     <script src="./index.js"></script>`,
    script:``
    }
  return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onfocusout</h1>
    <article>
        <p className="style_divv mt-5">
            يحدث حدث <b>onfocusout</b> عندما يكون عنصر على وشك أن يفقد التركيز.<br/>
            حدث <p>onfocusout</p> مشابه لحدث <b>onblur</b>. الاختلاف الرئيسي هو أن حدث <b>onblur</b> لا ينفجر. لذلك ، إذا كنت تريد معرفة ما إذا كان عنصر ما أو فرعه يفقد التركيز ، فيجب عليك استخدام حدث <b>onfocusout</b>.<br/>
            حدث <b>onfocusout</b> هو عكس حدث <b>onfocusin</b>.<br/>
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
