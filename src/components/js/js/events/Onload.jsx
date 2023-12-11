export default function Onload(){
    // document.body.onload = function(){
    //     alert("Page is loaded")
    // }  
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onload</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث <b>onload</b> عندما يتم تحميل كائن.<br/>
            غالبًا ما يتم استخدام <b>onload</b> داخل عنصر <kbd>body</kbd> لتنفيذ نص برمجي بمجرد أن يتم تحميل صفحة الويب كل المحتوى بالكامل (بما في ذلك الصور وملفات البرامج النصية وملفات CSS وما إلى ذلك).<br/>
            يمكن استخدام حدث <b>onload</b> للتحقق من نوع متصفح الزائر وإصداره ، وتحميل الإصدار المناسب من صفحة الويب بناءً على المعلومات.<br/>
            يمكن أيضًا استخدام حدث <b>onload</b> للتعامل مع ملفات تعريف الارتباط <br/>
            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
        <span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">onload</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onload</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"load"</span>, function_name <span style="color:gold">)</span></pre>  
            </div> */}
        </p>
        <div className="mital">متال :  </div>
        <img src="{% static 'js/js108_onload.png' %}" className="img"/>
        <div className="styleee">
            <div className="h1"> Hello World </div>
        </div>
    </article>
</section>
    )
}
