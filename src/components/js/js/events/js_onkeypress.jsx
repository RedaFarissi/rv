{% load static %} 
<h1 class="heading-style-js"><u><i>  JavaScript onkeypress </i></u></h1>
<div class="style_divv mt-5">
    يحدث حدث <b>onkeypress</b> عندما يضغط المستخدم على مفتاح (على لوحة المفاتيح).<br>
    <div class="alert bg-info my-3 text-black">
        <b>نصيحة</b> : ترتيب الأحداث المتعلقة بحدث <b>onkeypress</b>:<br><br>
        <ol>
            <li><b>onkeydown</b> : لتنقيد الأوامر بمجرد النقر على أحد أزرار الكيبورد . </li>
            <li><b>onkeypress</b> :  لتنقيد الأوامر بمجرد النقر على أحد أزرار الكيبورد . يعمل فقط على أزرار الحروف و الأرقام</li>
            <li><b>onkeyup</b> : لتنقيد الأوامر عند النقر على أحد أزرار الكيبورد و رفع الإصبع عنها </li>
        </ol>
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
<span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">onkeypress</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onkeypress</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"keypress"</span>, function_name <span style="color:gold">)</span></pre>  
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js106_onkeypress.png' %}" class="img">
</div>

<script>
    document.body.addEventListener('keypress',function(event){
        alert(" event = " + event.key +"\ntype is = " + typeof event.key)
    })
</script>