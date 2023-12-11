export default function Oninput(){
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Oninput</h1>
    <article>
        <p className="style_divv mt-5">
            يحدث حدث <b>oninput</b> عندما يحصل عنصر على مدخلات المستخدم.<br/>
            يحدث هذا الحدث عندما يتم تغيير قيمة عنصر <kbd>&lt;input&gt;</kbd> أو <kbd>&lt;textarea&gt;</kbd>.<br/>
            {/* <div className="alert alert-warning my-2">
                <div className="h5"><b>نصيحة</b></div>
                 هذا الحدث مشابه لحدث <b>onchange</b> . الفرق هو أن حدث <b>oninput</b> يحدث فورًا بعد تغيير قيمة العنصر ، بينما يحدث التغيير عندما يفقد العنصر التركيز ، بعد تغيير المحتوى. الاختلاف الآخر هو أن حدث <b>onchange</b> يعمل أيضًا على عناصر <kbd>&lt;select&gt;</kbd>.
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
        <span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">oninput</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">oninput</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"input"</span>, function_name <span style="color:gold">)</span></pre>  
            </div> */}
        </p>
        <div className="mital">متال :  </div>
        <img src="{% static 'js/js99_oninput.png' %}" className="img"/>
        <div className="styleee">
            <input type="text" oninput="alert(this.value)"/>
        </div>
        <div className="alert alert-info" dir="ltr" style={{lineHeight:"200%",wordSpacing:"5px"}}>
            <div className="h5 mb-0 pb-0"><b>Supported HTML tags</b>:</div><br/>
        	<kbd>&lt;input type="checkbox"&gt;</kbd>, <kbd>&lt;input type="color"&gt;</kbd>, <kbd>&lt;input type="date"&gt;</kbd>, <kbd>&lt;input type="datetime"&gt;</kbd>, <kbd>&lt;input type="email"&gt;</kbd>, <kbd>&lt;input type="month"&gt;</kbd>, <kbd>&lt;input type="number"&gt;</kbd>, <kbd>&lt;input type="password"&gt;</kbd>, <kbd>&lt;input type="range"&gt;</kbd>, <kbd>&lt;input type="search"&gt;</kbd>, <kbd>&lt;input type="tel"&gt;</kbd>, <kbd>&lt;input type="text"&gt;</kbd>, <kbd>&lt;input type="time"&gt;</kbd>, <kbd>&lt;input type="url"&gt;</kbd>, <kbd>&lt;input type="week"&gt;</kbd>, <kbd>&lt;textarea&gt;</kbd>
        </div>
    </article>
</section>
    )
}