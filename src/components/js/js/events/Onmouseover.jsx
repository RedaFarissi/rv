import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onmouseover(){
    {/* .div {
      width: max-content; height: max-content; margin: 9px;border: 1px solid black; text-align: center;
      padding:30px; background-color: lightgray;
    }
    .p { background-color: white; padding:0.9rem 0.3rem;} */}

    
    // var a = 0 , b = 0 , c = 0;
    // function myMoveFunction() {document.getElementById("id_name").innerHTML = c+=1;}
    // function myEnterFunction() { document.getElementById("id_name2").innerHTML = a+=1;}
    // function myOverFunction() { document.getElementById("id_name3").innerHTML = b+=1;}
    const code1 = `<!-- Code HTML -->
<element onmouseover="//script">`
    const code2 = ` Code JavaScript
object.onmouseover = function(){  //myScript  }`
    const code3 = `Code JavaScript using the addEventListener() 
object.addEventListener("mouseover", function_name )`
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onmouseover</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث onmouseover عندما يتحرك مؤشر الماوس فوق عنصر أو على أحد العناصر الفرعية له.<br/>
            <div className="alert alert-warning my-3">
                <b>نصيحة</b> :<br/>
                غالبًا ما يتم استخدام هذا الحدث مع حدث <b>onmouseout</b> ، والذي يحدث عندما يحرك المستخدم مؤشر الماوس خارج العنصر.<br/>
            </div>
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />        
        </p>
        <div className="mital">متال : </div>
        <img src={images.js115_onmousemove} className="img"/>
        <div className="styleee img">
            <div className="div" onmousemove="myMoveFunction()"> <p className="p">onmousemove: <br/> <span id="id_name"> Mouse over me!</span></p> </div>
            <div className="div" onmouseenter="myEnterFunction()"> <p className="p">onmouseenter: <br/> <span id="id_name2"> Mouse over me!</span></p> </div>
            <div className="div" onmouseover="myOverFunction()"> <p className="p">onmouseover: <br/> <span id="id_name3"> Mouse over me!</span></p> </div>
        </div>
    </article>
</section>
    )
}
