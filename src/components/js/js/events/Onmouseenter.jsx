import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onmouseenter(){
    // function big(x) {
    //     x.style.height = "64px";
    //     x.style.width = "64px";
    //   }
  
    //   function small(x) {
    //     x.style.height = "32px";
    //     x.style.width = "32px";
    //   }
    const code1 = `<!-- Code HTML -->
<element onmouseenter="//script">`
    const code2 = `// Code JavaScript 
object.onmouseenter = function(){  //myScript  }`
    const code3 = `// Code JavaScript using the addEventListener() 
object.addEventListener("mouseenter", function_name )`
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onmouseenter</h1>
    <article>
        <p className="style_divv mt-5">
            يحدث الحدث <b>onmouseenter</b> عند نقل مؤشر الماوس إلى عنصر.<br/>
             غالبا ما يتم استخدام هذا الحدث مع الحدث <b>onmouseleave</b> ، والذي يحدث عندما يتم نقل مؤشر الماوس خارج عنصر.<br/>
             <div className="alert alert-warning my-3">
                 <div className="h4">نصيحة :</div>
                 يشبه حدث onmouseenter حدث onmouseover. الفرق الوحيد هو أن الحدث <b>onmouseenter</b> لا ينشر التسلسل الهرمي للمستند.
             </div>
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js111_onmouseenter} className="img"/>
        <div className="styleee img">
            <img id="img" onmouseenter="big(this)" onmouseleave="small(this)" src="./js/hajime.jpg" style={{width:"30px",height:"30px",borderRadius:"50%"}}/>
            <p> The function big() is triggered when the  moves the mouse pointer onto the image.</p>
            <p> The function small() is triggered when  the mouse pointer is moved out of the image.</p>
        </div>
    </article>
</section>
    )
}
