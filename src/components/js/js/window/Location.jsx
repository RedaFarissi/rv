export default function Location(){
    // document.getElementById("h2").innerHTML = location.host ;
    // document.getElementById("h22").innerHTML = location.hostname ;
    // document.getElementById("h222").innerHTML = location.href ;
    // document.getElementById("h2222").innerHTML = location.origin ;
    // document.getElementById("h22222").innerHTML = location.pathname ;
    // document.getElementById("h222222").innerHTML = location.protocol ;
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript location</h1>
    <article>
        <p className="style_divv mt-5">
            يحتوي كائن <b>location</b> على معلومات حول عنوان <b>URL</b> الحالي.<br/>
            كائن <b> location</b> هو خاصية لكائن النافذة.<br/>
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--js-color)">window</span>.<span style="color:gold">open(</span>URL<span style="color:gold">,</span> name<span style="color:gold">,</span> specs<span style="color:gold">,</span> replace<span style="color:gold">)</span></pre>
            </div> */}
        </p>
    </article>
    <article>
        <h2 className="title-h2">1- <bdi>location.host</bdi></h2>
        <p className="style_divv">
            تعرض خاصية <bdi><b>location.host</b></bdi> المضيف <bdi><small>(عنوان IP أو domain)</small></bdi> ومنفذ عنوان <b>URL</b>.<br/>
            يتضمن <b>host</b> كلاً من اسم المضيف وأي أرقام منافذ مرتبطة به 
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--js-color)">location</span>.<span style="color:var(--js-color)">host</span></pre>
            </div>
            <div dir="ltr" style="background-color:gray;border-radius:12px;padding:4px;margin:9px;width:max-content;float:left;"> example.org:1111 </div>
            <br style="clear:both;"> */}
        </p>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js34_location.png' %}" className="img"/>
        <div className="styleee">
            <h2 id="h2"> </h2>
        </div>
    </article>
    <article>
        <h2 className="title-h2">2- <bdi>location.hostname</bdi></h2>
        <p className="style_divv">
            تعرض خاصية <bdi><b>location.host</b></bdi> المضيف <bdi><small>(عنوان IP أو domain)</small></bdi> ومنفذ عنوان <b>URL</b>.<br/>
            يتضمن <b>hostname</b>  اسم المضيف فقط 
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--js-color)">location</span>.<span style="color:var(--js-color)">hostname</span></pre>
            </div>
            <div style="background-color:gray;border-radius:12px;padding:4px;margin:9px;width:max-content;float:left;"> example.org </div>
            <br style="clear:both;"> */}
        </p>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js34_location2.png' %}" className="img"/>
        <div className="styleee">
            <h2 id="h22"> </h2>
        </div>
    </article>
    <article>
        <h2 className="title-h2">3- <bdi>location.href</bdi></h2>
        <p className="style_divv">
            تقوم الخاصية <bdi><b>location.href</b></bdi> بتعيين أو إرجاع عنوان <b>URL</b> للصفحة الحالية بالكامل.
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">  
                 <pre><span style="color:var(--js-color)">location</span>.<span style="color:var(--js-color)">href</span></pre>
            </div> */}
        </p>
        <div className="sum_exemple_style">
            <div className="mital"> متال :  </div>
            <img src="{% static 'js/js34_location3.png' %}" className="img"/>
            <div className="styleee">
                <h2 id="h222"> </h2>  
            </div>
        </div>
    </article>
    <article>
        <h2 className="title-h2">4- <bdi>location.origin</bdi></h2>
        <p className="style_divv">
            تقوم خاصية <b>orgin</b> بإرجاع البروتوكول واسم المضيف ورقم المنفذ لعنوان <b>URL</b>.<br/>
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--js-color)">location</span>.<span style="color:var(--js-color)">origin</span></pre>
            </div> */}
        </p>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js34_location4.png' %}" className="img"/>
        <div className="styleee">
            <h2 id="h2222"> </h2>  
        </div>
    </article>
    <article>
        <h2 className="title-h2">5- <bdi>location.pathname</bdi></h2>
        <p className="style_divv">
            تقوم خاصية <bdi><b>location.pathname</b></bdi> بتعيين أو إرجاع اسم المسار لعنوان <b>URL</b> .<br/>
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--js-color)">location</span>.<span style="color:var(--js-color)">pathname</span></pre>
            </div>  */}
        </p>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js34_location5.png' %}" className="img"/>
        <div className="styleee">
            <h2 id="h22222"> </h2>  
        </div>
    </article>
    <article>
        <h2 className="title-h2">6- <bdi>location.protocol</bdi></h2>
        <p className="style_divv">
            تقوم خاصية <b><bdi>location.protocol</bdi></b> بتعيين أو إرجاع بروتوكول عنوان <b>URL</b> الحالي ، بما في ذلك النقطتان .<br/>
            <small><small> البروتوكول هو معيار يحدد كيفية نقل البيانات بين أجهزة الكمبيوتر </small></small>.
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--js-color)">location</span>.<span style="color:var(--js-color)">protocol</span></pre>
            </div>    */}
        </p>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js34_location6.png' %}" className="img"/>
        <div className="styleee">
            <h2 id="h222222"> </h2>
        </div>
    </article>
    <article>   
        <h2 className="title-h2">7- <bdi>location.reload()</bdi></h2>
        <p className="style_divv">
            طريقة <bdi><b>location.reload()</b></bdi> تعيد تحميل المستند الحالي.<br/>
            تعمل طريقة <bdi><b>location.reload()</b></bdi> نفس طريقة زر إعادة التحميل في متصفحك.<br/>
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--js-color)">location</span>.<span style="color:var(--js-color)">reload()</span></pre>
            </div>    */}
        </p>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js34_location7.png' %}" className="img"/>
        <div className="styleee">
            <button onclick="location.reload()">Click Here</button>
            <div style={{width:"50%",height:"200px"}}>
                <a href="https://www.google.com" target="_parent">google</a>
            </div>
        </div>
    </article>
    <article>   
        <h2 className="title-h2">8- <bdi>location.replace()</bdi></h2>
        <p className="style_divv">
            تستبدل طريقة ا<bdi><b>location.replace()</b></bdi> المستند الحالي بآخر جديد.
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--js-color)">location</span>.<span style="color:var(--js-color)">replace(<span style="color:orange;">"https://www.google.com"</span>)</span></pre>
            </div>    */}
        </p>
    </article>
</section>
    )
}
       