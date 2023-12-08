export default function Switch(){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Switch</h1>
    <article>
        <div className="style_divv mt-5">
            يتم استخدام بيان التبديل لأداء إجراءات مختلفة بناءً على ظروف مختلفة.
        {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--violet-color);">switch</span><span style="color:gold;">(</span>expression<span style="color:gold;">){</span>
            <span style="color:var(--violet-color);">case</span> x: <span style="color:green">//JavaScript code</span> <span style="color:var(--violet-color);">break</span>; 
            <span style="color:var(--violet-color);">case</span> y: <span style="color:green">//JavaScript code</span> <span style="color:var(--violet-color)">break</span>; 
            <span style="color:var(--violet-color);">case</span> z: <span style="color:green">//JavaScript code</span> <span style="color:var(--violet-color)">break</span>;            
            <span style="color:var(--violet-color);">default</span> : <span style="color:green">//JavaScript code</span> <span style="color:var(--violet-color);">break</span>; 
        <span style="color:gold;">}</span></pre>
        </div> */}
        </div>
        <div className="mital">متال :  </div>
        <img src="{% static 'js/js16_Switch.png' %}" className="img"/>
        <div className="styleee img">
            <h2>3</h2>
        </div>
        <div className="mital">متال 2 :  </div>
        <img src="{% static 'js/js16_Switch2.png' %}" className="img"/>
        <div className="styleee img">
            <h2>is case 4</h2>
        </div>
        <div className="mital"> متال 3 : </div>
        <img src="{% static 'js/js16_Switch3.png' %}" className="img"/>
        <div className="styleee img">
            <h2>Not Found</h2>
        </div>
    </article>
</section>
    )
}


