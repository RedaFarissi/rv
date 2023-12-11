export default function Onmouseout(){
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

            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
                <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
        <span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">onmouseout</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
                <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onmouseout</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
                <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"mouseout"</span>, function_name <span style="color:gold">)</span></pre>
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