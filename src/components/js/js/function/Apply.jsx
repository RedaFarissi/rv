export default function Apply(){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Apply</h1>
    <article>
        <p className="style_divv mt-5 pb-0">
            باستخدام الدالة <bdi><b>apply()</b></bdi>  يمكن استخدام <b>method</b> على كائنات مختلفة. <br/>
            الدالة <bdi><b>apply()</b></bdi> تشبه الدالة <bdi><b>call()</b></bdi> الفرق أن الدالة <bdi><b>apply()</b></bdi> تقبل مصفوفة ك <b>argument</b> ولا تقبل متغيرات . 
            {/* <div className="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
        <pre><span style="color:gold">apply(</span><span style="color:var(--html-color-tags)">thisArg</span><span style="color:gold">)</span>
        <span style="color:gold">apply(</span><span style="color:var(--html-color-tags)">thisArg</span>, argsArray<span style="color:gold">)</span></pre>   
            </div> */}
        </p>
        <div className="mital">متال :  </div>
        <img src="{% static 'js/js150_apply.png' %}" className="img"/>
        <div className="styleee img">
            <div className="h2"> Adam Taziyat </div>
        </div>
        <div className="mital">متال 2 :  </div>
        <img src="{% static 'js/js150_apply2.png' %}" className="img"/>
        <div className="styleee img">
            <div className="h2"> Adam Taziyat 2 , 3 , 4 , 5 </div>
        </div>
        <div className="mital">متال 3 :  </div>
        <ul><li> تستخدم arguments للإشارة إلى عناصر المصفوفة .</li></ul>
        <img src="{% static 'js/js150_apply3.png' %}" className="img"/>
        <div className="styleee img">
            <div className="h2"> Sum all element array is : 35 </div>
        </div>
        <div className="mital">متال 4 :  </div>
        <ul><li> تستخدم arguments للإشارة إلى عناصر المصفوفة .</li></ul>
        <img src="{% static 'js/js150_apply4.png' %}" className="img"/>
        <div className="styleee img">
            <div className="h2">Name : Reda Eskouni <br/> Moyen : 8.75 <hr/> </div>
        </div>
    </article>
</section>
    )
}