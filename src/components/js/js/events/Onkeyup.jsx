export default function Onkeyup(){
    // document.body.addEventListener('keyup',function(event){
    //     alert(" event = " + event.code +"\ntype is = " + typeof event.code)
    // })
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onkeyup</h1>
    <article>
        <p className="style_divv mt-5">
            يحدث حدث <b>onkeyup</b> : لتنقيد الأوامر عند النقر على أحد أزرار الكيبورد و رفع الإصبع عنها .<br/>
            <div className="alert bg-info my-3 text-black">
                <b>نصيحة</b> : ترتيب الأحداث المتعلقة بحدث <b>onkeyup</b>:<br/><br/>
                <ol>
                    <li><b>onkeydown</b> : لتنقيد الأوامر بمجرد النقر على أحد أزرار الكيبورد . </li>
                    <li><b>onkeypress</b> :  لتنقيد الأوامر بمجرد النقر على أحد أزرار الكيبورد . يعمل فقط على أزرار الحروف و الأرقام</li>
                    <li><b>onkeyup</b> : لتنقيد الأوامر عند النقر على أحد أزرار الكيبورد و رفع الإصبع عنها </li>
                </ol>
            </div>
            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
        <span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">onkeyup</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onkeyup</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"keyup"</span>, function_name <span style="color:gold">)</span></pre>  
            </div> */}
        </p>
        <div className="mital">متال :  </div>
        <img src="{% static 'js/js107_onkeyup.png' %}" className="img"/>
    </article>
</section>
    )
}
