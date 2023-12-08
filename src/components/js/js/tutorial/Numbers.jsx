export default function Numbers(){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Numbers</h1>
    <article>
        <h2 className="title-h2">1. Numbers</h2>
        <p class="style_divv">
            يحتوي <b>JavaScript</b> على نوع واحد فقط من الأرقام. يمكن كتابة الأرقام مع الكسور العشرية أو بدونها.<br/>
            {/* <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top:9px;padding-bottom:0pt;">
                <pre><span style="color:var(--html-color-tags)">let</span> str = 9; &nbsp;  <span style="color:green"><bdi>// رقم بدون كسور عشرية</bdi></span></pre>
            </div> */}
            {/* <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top:9px;padding-bottom:0pt;">
                <pre><span style="color:var(--html-color-tags)">let</span> str = 9.5; &nbsp;   <span style="color:green"><bdi>// رقم به كسور عشرية</bdi></span></pre>
            </div> */}
            يمكن كتابة الأعداد الكبيرة جدًا أو الصغيرة جدًا باستخدام التدوين العلمي (الأس)
            {/* <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top:9px;padding-bottom:0pt;">
                <pre><span style="color:var(--html-color-tags);">let</b> x = >123e3;   <span style="color:green"><bdi>// 123000</bdi></span></span></pre>
            </div> */}
            {/* <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top:9px;padding-bottom:0pt;">
                <pre><span style="color:var(--html-color-tags);">let</span> y = 123e-3;  <span style="color:green"><bdi>// 0.123 </bdi></span></pre>
            </div> */}
        </p>
        <div class="mital">متال 1 :  </div>
        <img src="{% static 'js/js11_Numbers.png' %}" class="img"/>
        <div class="styleee"><h2> 9 + 9.5 = 18.5 </h2></div>
        <div class="mital">متال 2 :  </div>
        <img src="{% static 'js/js11_Numbers2.png' %}" class="img"/>
        <div class="styleee"><h2>123000 <br/> 0.123 </h2></div>
        <div class="alert alert-danger" role="alert">
            الحد الأقصى لعدد الكسور العشرية هو 17.
        </div>
    </article>
    <article>
        <h2 className="title-h2">2. Method</h2>
        <h5>1. <bdi> toString() Method</bdi></h5>
        <p class="style_divv">
            ترجع طريقة <bdi><b>toString()</b></bdi> رقمًا كسلسلة (<small>string</small>).<br/>
            {/* <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top:9px;padding-bottom:0pt;">
                <pre><span style="color:var(--html-color-tags)">let</span> y = number.<span style="color:gold">toString()</span></pre>
            </div> */}
        </p>
        <div class="mital">متال 1 :  </div>
        <img src="{% static 'js/js11_Numbers3.png' %}" class="img"/>
        <div class="styleee"><h2> 123 type is string </h2></div>
        <div class="mital">متال 2 :  </div>
        <img src="{% static 'js/js11_Numbers4.png' %}" class="img"/>
        <div class="styleee"><h2> 123 </h2></div>
        <h5>2. <bdi> toFixed() Method </bdi></h5>
        <p class="style_divv">
            تُرجع الدالة <b><bdi>toFixed()</bdi></b> سلسلة (<small>string</small>) برقم مكتوب بعدد محدد من الكسور العشرية . <br/>
            {/* <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top:9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags);">let</span> x = <span style="color:gold">32.236</span>;
        x.<span style="color:gold">toFixed(</span>0<span style="color:gold">)</span>; 
        x.<span style="color:gold">toFixed(</span>2<span style="color:gold">)</span>; 
        x.<span style="color:gold">toFixed(</span>4<span style="color:gold">)</span>; 
        x.<span style="color:gold">toFixed(</span>6<span style="color:gold">)</span>;</pre> 
        </div> */}
        </p>
        <div class="mital">متال :  </div>
        <img src="{% static 'js/js11_Numbers5.png' %}" class="img"/>
        <div class="styleee"> <h2> 32<br/>32.24<br/>32.2360<br/>32.236000 </h2></div>
        <h5>2. <bdi> toPrecision() Method </bdi></h5>
        <p class="style_divv">
            تُرجع الدالة <bdi><b>toPrecision()</b></bdi> سلسلة (<small>string</small>) برقم مكتوب بطول محدد :<br/>
            {/* <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top:9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags)">let</span> x = <span style="color:gold">32.236</span>;
        x.<span style="color:gold">toPrecision()</span>; 
        x.<span style="color:gold">toPrecision(</span>2<span style="color:gold">)</span>; 
        x.<span style="color:gold">toPrecision(</span>4<span style="color:gold">)</span>; 
        x.<span style="color:gold">toPrecision(</span>6<span style="color:gold">)</span>;</pre>
            </div> */}
        </p>
        <div class="mital">متال :  </div>
        <img src="{% static 'js/js11_Numbers6.png' %}" class="img"/>
        <div class="styleee"><h2> 32.236<br/>32<br/>32.24<br/>32.2360 </h2></div>
        <h5>3. <bdi> Converting Variables to Numbers </bdi></h5>
        <p class="style_divv">
            هناك 3 طرق جافا سكريبت يمكن استخدامها لتحويل المتغيرات إلى أرقام:
            <ul>
                <li>طريقة <bdi><b>parseInt()</b></bdi></li>
                <li>طريقة <bdi><b>parseFloat()</b></bdi></li>
                <li>طريقة <bdi><b>Number()</b></bdi></li>
            </ul>
            هذه الطرق ليست طرقًا للأرقام ، ولكنها طرق <b>JavaScript</b> عامة.
        </p>
        <div class="mital">متال 1:  </div>
        <img src="{% static 'js/js11_Numbers7.png' %}" class="img"/>
        <img src="{% static 'js/js11_Numbers7 2.png' %}" class="img"/>
        <div class="mital">متال 2 :  </div>
        <img src="{% static 'js/js11_Numbers8.png' %}" class="img"/>
        <img src="{% static 'js/js11_Numbers8 2.png' %}" class="img"/>
        <div class="mital">متال 3 :  </div>
        <img src="{% static 'js/js11_Numbers9.png' %}" class="img"/>
        <div class="styleee"><h2>2042.5</h2></div>
    </article>
    <article>
        <h2 className="title-h2">3. <bdi>Number.toFixed()</bdi></h2>
        <p class="style_divv">
            تستخدم الخاصية <b>toFixed</b> لتحديد عدد الأرقام وراء الفاصلة 
            {/* <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top:12px;padding-bottom:0pt;">
                <pre><span style="color:var(--js-color)">number</span>.<span style="color:gold">toFixed(</span><span style="color:var(--arr-num-color)">number</span><span style="color: gold;">)</span></pre>   
            </div> */}
        </p>
        <div class="mital">متال 1 :  </div>
        <img src="{% static 'js/js11_Numbers10.png' %}" class="img"/>
        <div class="styleee"><h2>5.3333333333<br/>5.33</h2></div>
        <div class="mital">متال 2 :  </div>
        <img src="{% static 'js/js11_Numbers11.png' %}" class="img"/>
        <div class="styleee"><h2>5.00</h2></div>       
    </article>
</section>
    )
}