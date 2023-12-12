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
            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
                <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
        <span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">onmouseover</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
                <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onmouseover</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
                <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"mouseover"</span>, function_name <span style="color:gold">)</span></pre>
            </div> */}
        </p>
        <div className="mital">متال : </div>
        <img src="{% static 'js/js115_onmousemove.png' %}" className="img"/>
        <div className="styleee img">
            <div className="div" onmousemove="myMoveFunction()"> <p className="p">onmousemove: <br/> <span id="id_name"> Mouse over me!</span></p> </div>
            <div className="div" onmouseenter="myEnterFunction()"> <p className="p">onmouseenter: <br/> <span id="id_name2"> Mouse over me!</span></p> </div>
            <div className="div" onmouseover="myOverFunction()"> <p className="p">onmouseover: <br/> <span id="id_name3"> Mouse over me!</span></p> </div>
        </div>
    </article>
</section>
    )
}
