
export default function Focus(){
    //document.getElementById("email_id").focus()
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript focus</h1>
    <article>
        <div className="style_divv mt-5">
            تعطي طريقة <bdi><b>focus()</b></bdi> التركيز على عنصر (إذا كان من الممكن التركيز عليه).
            {/* <div className="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
                <pre><span style="color:var(--js-color)">element</span>.<span style="color:gold">focus()</span></pre>
            </div> */}
        </div>
        <div className="mital">متال :  </div>
        <img src="{% static 'js/js81_focus.png' %}" className="img"/>
        <div className="styleee"> 
            <input type="email" id="email_id"/> <br/>
            <input type="password" id="password"/>
        </div>
    </article>
</section>
    )
}