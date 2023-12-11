export default function History(){
    // document.getElementById("h2").innerHTML =  history.length
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript history</h1>
    <article>
        <h2 className="title-h2">1. history</h2>
        <p className="style_divv">
            يوفر <b>Web History API</b> طرقًا سهلة للوصول إلى كائن <bdi><b>windows.history</b></bdi> .<br/>
            يحتوي كائن <b>history</b> على عناوين <b>URL</b> التي زارها المستخدم (في نافذة المتصفح).<br/>
            كائن <b>history</b> هو خاصية لكائن <b>window</b>.<br/>
            يتم الوصول إلى كائن <b>history</b> باستخدام :
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--js-color)">window</span>.<span style="color:var(--js-color)">history</span></pre>
            </div> */}
            أو 
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--js-color)">history</span></pre>
            </div> */}
        </p>
    </article>
    <article>
        <h2 className="title-h2">2. <bdi>history.back()</bdi></h2>
        <p className="style_divv">
            تقوم طريقة <bdi><b>history.back()</b></bdi> بتحميل عنوان <b>URL</b> السابق (الصفحة) في قائمة المحفوظات.<br/>
            تعمل طريقة <bdi><b>history.back()</b></bdi> فقط في حالة وجود صفحة سابقة.<br/>
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--js-color)">window</span>.<span style="color:var(--js-color)">history</span>.<span style="color:gold">back()</span></pre>
            </div> */}
        </p>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js38_history2.png' %}" className="img"/>
        <div className="styleee">
            <button onclick="history.back()" style={{outline:"none", border:"1px solid black"}}> Go Back </button>
        </div>
    </article>
    <article>
        <h2 className="title-h2">3. <bdi>history.forward()</bdi></h2>
        <p className="style_divv">
            تقوم طريقة <bdi><b>history.forward()</b></bdi> بتحميل عنوان <b>URL</b> التالي (الصفحة) في قائمة المحفوظات.<br/>
            تعمل طريقة <bdi><b>history.forward()</b></bdi> فقط في حالة وجود الصفحة التالية.<br/>
            <bdi>history.forward()</bdi> هو نفسه <bdi>history.go()</bdi>.
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--js-color)">window</span>.<span style="color:var(--js-color)">history</span>.<span style="color:gold">forward()</span></pre>
            </div> */}
        </p>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js38_history3.png' %}" className="img"/>
        <div className="styleee">
            <button onclick="history.forward()" style={{outline:"none", border:"1px solid black"}}> forward </button>
        </div>
    </article>
    <article>
        <h2 className="title-h2">4. <bdi>history.length</bdi></h2>
        <p className="style_divv">
            تعرض خاصية <b>lengt</b> عدد عناوين <b>URL</b> في قائمة المحفوظات لنافذة المستعرض الحالية.<br/>
            تقوم الخاصية بإرجاع 1 على الأقل ، لأن القائمة تتضمن الصفحة الحالية.<br/>
            هذه الخاصية مفيدة لمعرفة عدد الصفحات التي زارها المستخدم في جلسة التصفح الحالية.<br/>
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--js-color)">history</span>.<span style="color:var(--js-color)">length</span></pre>
            </div> */}
        </p>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js38_history.png' %}" className="img"/>
        <div className="styleee">
            <h2 id="h2">  </h2>
        </div>
    </article>
</section>
    )
}