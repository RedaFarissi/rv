
export default function StringSearch(){
    return(
    <section className="section-conetent">
        <h1 className="heading-style heading-style-js-color">JavaScript String Search</h1>
        <details>
            <summary> جميع العناوين  </summary>
            <div dir="ltr" >
                <a href="#indexOf"> indexOf </a>
                <a href="#lastIndexOf"> lastIndexOf </a>
                <a href="#search"> search </a>
                <a href="#match"> match </a>
                <a href="#includes"> includes </a>
                <a href="#startsWith"> startsWith </a>
                <a href="#endsWith"> endsWith </a>
            </div>
        </details>
        <article>
            <h2 className="title-h2" id="indexOf">1. <bdi>JavaScript String indexOf()</bdi></h2>
            <p className="style_divv">
               الدالة <b><bdi>indexOf()</bdi></b> ترجع فهرس <bdi>(index)</bdi> التواجد الأول لنص محدد في <b>string</b>  .<br/>
               {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
            <pre><span style="color:var(--html-color-tags)">let</span> str = <span style="color:orange;">"Please locate where 'locate' occurs!"</span>;
            str.<span style="color:gold">indexOf(</span><span style="color:orange;">"locate"</span><span style="color:gold">)</span>;</pre>
               </div> */}
            </p>
            <div className="mital">متال :  </div>
            <img src="{% static 'js/js9_Search.png' %}" className="img"/>
            <img src="{% static 'js/js9_Search 2.png' %}" className="img"/>
            <div className="mital">متال 2 :  </div>
            <img src="{% static 'js/js9_Search2.png' %}" className="img"/>
            <img src="{% static 'js/js9_Search2 2.png' %}" className="img"/>
        </article>
        <article>
            <h2 className="title-h2" id="lastIndexOf">2. <bdi>JavaScript String lastIndexOf()</bdi></h2>
            <p className="style_divv">
                الدالة <b><bdi>lastIndexOf()</bdi></b> ترجع فهرس <bdi>(index)</bdi> التواجد الأخير لنص محدد في <b>string</b> .<br/>
                {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
            <pre><span style="color:var(--html-color-tags);">let</span> str = <span style="color:orange;">"Please locate where 'locate' occurs!"</span>;
            str.<span style="color:gold">lastIndexOf(</span><span style="color:orange;">"locate"</span><span style="color:gold">)</span>;</pre>
                </div> */}
            </p>
            <div className="mital">متال :  </div>
            <img src="{% static 'js/js9_Search3.png' %}" className="img"/>
            <img src="{% static 'js/js9_Search3 2.png' %}" className="img"/>
            <div className="alert bg-warning">
                يحسب <b>JavaScript</b> المواضع من الصفر. <br/>
                0 هو الموضع الأول في السلسلة ، 1 هو الموضع الثاني ، 2 هو الموضع الثالث ...<br/>
            </div>
        </article>
        <article>
            <h2 className="title-h2" id="search">3. <bdi>JavaScript String search()</bdi></h2>
            <p className="style_divv">
                تبحث الدالة <b><bdi>search()</bdi></b> في سلسلة عن قيمة محددة وتعيد موضع المطابقة .<br/>
                {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
            <pre><span style="color:var(--html-color-tags)">let</span> str = <span style="color:orange;">"Please locate where 'locate' occurs!"</span>;
            str.<span style="color:gold">search(</span><span style="color:orange;">"locate"</span><span style="color:gold">)</span>;</span></pre>
                </div> */}
            </p>
            <div className="mital">متال :  </div>
            <img src="{% static 'js/js9_Search4.png' %}" className="img"/>
            <img src="{% static 'js/js9_Search4 2.png' %}" className="img"/>
        </article>
        <article>
            <h2 className="title-h2" id="match">4. <bdi>JavaScript String match()</bdi></h2>
            <p className="style_divv">
                تبحث طريقة <bdi><b>match()</b></bdi> في سلسلة عن تطابق مقابل تعبير عادي ، وتعيد التطابقات ، ككائن <b>Array</b>.<br/>
                تستعمل الدالة <bdi><b>match()</b></bdi> مع <b>regular</b>
                {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
            <pre><span style="color:var(--html-color-tags);">let</span> str = <span style="color:orange;">"Please locate where 'locate' occurs!"</span>;
            str.<span style="color:gold">match(</span><span style="color:rgb(200,40,50);">/ain/g</span><span style="color:gold">)</span>;</pre>
                </div> */}
            </p>
            <div className="mital">متال :  </div>
            <img src="{% static 'js/js9_Search5.png' %}" className="img"/>
            <div className="styleee">
                <h2> E,E </h2>
                <h2> i,i,i,i,i,i,i </h2>
            </div>
            <ul><li>ستتعلم عن <b>regular</b> في دروس قادمة .</li></ul>
        </article>
        <article>
            <h2 className="title-h2" id="includes">5. <bdi>JavaScript String includes()</bdi></h2>
            <p className="style_divv">
                طريقة <b><bdi>include()</bdi></b> ترجع  <b>true</b> إذا كانت <b>string</b> تحتوي على قيمة محددة .<br/>
                {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
            <pre><span style="color:var(--html-color-tags);">let</span> str = <span style="color:orange;">"Reda Eskouni"</span>;
            str.<span style="color:gold">includes(</span><span style="color:orange;">"Reda"</span><span style="color:gold">)</span>;</pre>
                </div> */}
            </p>
            <div className="mital">متال :  </div>
            <img src="{% static 'js/js9_Search6.png' %}" className="img"/>
            <img src="{% static 'js/js9_Search6 2.png' %}" className="img"/>
            <div className="mital">متال 2 :  </div>
            <img src="{% static 'js/js9_Search7.png' %}" className="img"/>
            <img src="{% static 'js/js9_Search7 2.png' %}" className="img"/>
        </article>
        <article>
            <h2 className="title-h2" id="startsWith">6. <bdi>JavaScript String startsWith()</bdi></h2>
            <p className="style_divv">
                تعيد الدالة  <b><bdi>startWith()</bdi></b> true إذا <u>بدأت</u>  سلسلة نصية (string) بقيمة محددة ، وإلا فهي false .<br/>
                {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
            <pre><span style="color:var(--html-color-tags);">let</span> str = <span style="color:orange;">"Reda Eskouni"</span>;
            str.<span style="color:gold">startsWith(</span><span style="color:orange;">"Reda"</span><span style="color:gold">)</span>; &nbsp; &nbsp; <span style="color:green">//true</span></pre>
                </div> */}
                {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
            <pre><span style="color:var(--html-color-tags);">let</span> str = <span style="color:orange;">"Reda Eskouni"</span>;
            str.<span style="color:gold">startsWith(</span><span style="color:orange;">"Eskouni"</span>,5<span style="color:gold">)</span>; &nbsp; <span style="color:green">//true</span></pre>
                </div> */}
                {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
            <pre><span style="color:var(--html-color-tags);">let</span> str = <span style="color:orange;">"Reda Eskouni"</span>;
            str.<span style="color:gold">startsWith(</span><span style="color:orange;">"Eskouni"</span><span style="color:gold">)</span>; &nbsp; <span style="color:green">//false</span></pre>
                </div> */}
            </p>
            <div className="mital">متال :  </div>
            <img src="{% static 'js/js9_Search8.png' %}" className="img"/>
            <img src="{% static 'js/js9_Search8 2.png' %}" className="img"/>
        </article>
        <article>   
            <h2 className="title-h2" id="endsWith">7. <bdi>JavaScript String endsWith()</bdi> </h2>
            <p className="style_divv">
                تعيد الدالة  <b><bdi>endsWith()</bdi></b> true إذا <u>إنتهى</u>  سلسلة نصية (string) بقيمة محددة ، وإلا فهي false .<br/>
            </p>
            <div className="mital">متال :  </div>
            <img src="{% static 'js/js9_Search9.png' %}" className="img"/>
            <div className="styleee">
                <h2> true </h2>
            </div>
        </article>
    </section>
    )   
}   