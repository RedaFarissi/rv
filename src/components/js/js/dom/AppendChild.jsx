export default function AppendChild(){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript appendChild</h1>
    <article>
        <p className="style_divv mt-5">
            تلحق طريقة <bdi><b>appendChild()</b></bdi> عقدة (عنصر) باعتبارها آخر عنصر تابع للعنصر.
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--js-color)">element</span>.<span style="color:gold">appendChild(</span>node<span style="color:gold">)</span></pre>
            </div> */}
            <b>أو</b>
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--js-color)">node</span>.<span style="color:gold">appendChild(</span>node<span style="color:gold">)</span></pre>
            </div> */}
        </p>
        <div className="mital">متال :  </div>
        <img src="{% static 'js/js66_appendChild.png' %}" className="img"/>
        <div className="styleee">
            <ul id="ul" className="fs-4">
                <li> HTML </li>
                <li> CSS </li>
                <li> JavaScript </li>
            </ul>
        </div>
    </article>
</section>
    )
}
      