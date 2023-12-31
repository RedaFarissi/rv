import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onmouseout(){
    const code1 = `<!-- Code HTML -->
<element onmouseout="//script">`
    const code2 = `// Code JavaScript 
object.onmouseout = function(){  //myScript  }`
    const code3 = `// Code JavaScript using the addEventListener() 
object.addEventListener("mouseout", function_name )`
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onmouseout</h1>
    <article>
        <p className="style_divv mt-5">
            قع حدث <b>onmouseout</b> عندما يتحرك مؤشر الماوس خارج عنصر ما أو خارج أحد العناصر الفرعية له.<br/>
            <div className="alert alert-warning my-3">
                <b>نصيحة</b> :<br/>
                غالبًا ما يتم استخدام هذا الحدث مع حدث <b>onmouseover</b> ، والذي يحدث عند تحريك المؤشر فوق عنصر أو على أحد العناصر الفرعية له.
            </div>
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال : </div>
        <img src={images.js115_onmousemove} className="img"/>
        <div className="styleee">
            <div className="div" onmousemove="myMoveFunction()"> <p className="p">onmousemove: <br/> <span id="id_name"> Mouse over me!</span></p> </div>
            <div className="div" onmouseenter="myEnterFunction()"> <p className="p">onmouseenter: <br/> <span id="id_name2"> Mouse over me!</span></p> </div>
            <div className="div" onmouseover="myOverFunction()"> <p className="p">onmouseover: <br/> <span id="id_name3"> Mouse over me!</span></p> </div>
        </div>
    </article>
</section>
    )
}