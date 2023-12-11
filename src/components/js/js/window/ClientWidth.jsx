
export default function ClientWidth(){
    // var c_Width = document.getElementById("div_H").clientWidth
    // var c_height = document.getElementById("div_H").clientHeight
    // document.getElementById("h2").innerHTML =  "clientWidth  : " + c_Width + "<br/>"
    // document.getElementById("h2").innerHTML += "clientHeight : " + c_height

    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript clientWidth</h1>
    <article>
        <p className="style_divv mt-5">
            <b>clientWidth</b> هو عدد صحيح يتوافق مع <b>clientWidth</b> للعنصر بالبكسل. الخاصية <b>clientWidth</b> للقراءة فقط.<br/>
            {/* <div className="codeStudio codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--js-color)">element</span>.<span style="color:var(--js-color)">clientWidth</span></pre>
            </div>
            <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--js-color)">element</span>.<span style="color:var(--js-color)">clienHeight</span></pre>
            </div> */}
        </p>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js40_clientWidth2.png' %}" className="img"/>
        <div className="styleee img">
            <h2 id="h2"></h2>
            <div id="div_H" style={{width:"50%" , height:"90px"}}>  Hello World  </div>
        </div>
        <img src="{% static 'js/js40_clientWidth.png' %}" className="img"/>
    </article>
</section>
    )
}
