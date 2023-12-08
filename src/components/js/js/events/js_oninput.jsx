{% load static %} 
<h1 class="heading-style-js"><u><i>  JavaScript oninput </i></u></h1>
<div class="style_divv mt-5">
    يحدث حدث <b>oninput</b> عندما يحصل عنصر على مدخلات المستخدم.<br>
    يحدث هذا الحدث عندما يتم تغيير قيمة عنصر <kbd>&lt;input&gt;</kbd> أو <kbd>&lt;textarea&gt;</kbd>.<br>
    <div class="alert alert-warning my-2">
        <div class="h5"><b>نصيحة</b></div>
         هذا الحدث مشابه لحدث <b>onchange</b> . الفرق هو أن حدث <b>oninput</b> يحدث فورًا بعد تغيير قيمة العنصر ، بينما يحدث التغيير عندما يفقد العنصر التركيز ، بعد تغيير المحتوى. الاختلاف الآخر هو أن حدث <b>onchange</b> يعمل أيضًا على عناصر <kbd>&lt;select&gt;</kbd>.
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
<span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">oninput</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">oninput</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"input"</span>, function_name <span style="color:gold">)</span></pre>  
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js99_oninput.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">
        <input type="text" oninput="alert(this.value)">
    </div>
</div>

<div class="alert alert-info" dir="ltr" style="line-height: 200%;word-spacing:5px">
    <div class="h5 mb-0 pb-0"><b>Supported HTML tags</b>:</div><br>
	<kbd>&lt;input type="checkbox"&gt;</kbd>, <kbd>&lt;input type="color"&gt;</kbd>, <kbd>&lt;input type="date"&gt;</kbd>, <kbd>&lt;input type="datetime"&gt;</kbd>, <kbd>&lt;input type="email"&gt;</kbd>, <kbd>&lt;input type="month"&gt;</kbd>, <kbd>&lt;input type="number"&gt;</kbd>, <kbd>&lt;input type="password"&gt;</kbd>, <kbd>&lt;input type="range"&gt;</kbd>, <kbd>&lt;input type="search"&gt;</kbd>, <kbd>&lt;input type="tel"&gt;</kbd>, <kbd>&lt;input type="text"&gt;</kbd>, <kbd>&lt;input type="time"&gt;</kbd>, <kbd>&lt;input type="url"&gt;</kbd>, <kbd>&lt;input type="week"&gt;</kbd>, <kbd>&lt;textarea&gt;</kbd>
</div>