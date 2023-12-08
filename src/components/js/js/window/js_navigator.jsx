{% load static %} 
<h1 className="heading-style-js"><u><i> JavaScript navigator </i></u></h1>
<div className="style_divv mt-5">
    يحتوي كائن <b>navigator</b> على معلومات حول المتصفح.<br/>
    يتم الوصول إلى الكائن <b>navigator</b> من خلال:<br/>
    <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">window</span>.<span style="color:var(--js-color)">navigator</span></pre>
    </div>
    أو
    <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">navigator</span></pre>
    </div>
</div>
<h3>1. appCodeName</h3>
<div className="style_divv">
    تقوم الخاصية <b>appCodeName</b> بإرجاع الاسم الرمزي للمتصفح.<br/>
    خاصية <b>appCodeName</b> للقراءة فقط.
    <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">navigator</span>.<span style="color:var(--js-color)">appCodeName</span></pre>
    </div>
</div>
<div className="sum_exemple_style">
    <div className="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js51_navigator.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee img">       
        <h2 id="h2"> </h2>
    </div>
</div>
<h3>2. appName</h3>
<div className="style_divv">
    تقوم الخاصية <b>appName</b> بإرجاع اسم المستعرض.<br/>
    الخاصية <b>appName</b> للقراءة فقط
    <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">navigator</span>.<span style="color:var(--js-color)">appName</span></pre>
    </div>
</div>
<div className="sum_exemple_style">
    <div className="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js51_navigator2.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee img">       
        <h2 id="h22"> </h2>
    </div>
</div>
<h3>3. appVersion</h3>
<div className="style_divv">
    تقوم الخاصية <b>appVersion</b> بإرجاع إصدار المتصفح.<br/>
    الخاصية <b>appVersion</b> للقراءة فقط.
    <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">navigator</span>.<span style="color:var(--js-color)">appVersion</span></pre>
    </div>
</div>
<div className="sum_exemple_style">
    <div className="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js51_navigator3.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee img">       
        <h2 id="h222"> </h2>
    </div>
</div>
<h3>4. language</h3>
<div className="style_divv">
    تقوم خاصية <b>language</b> بإرجاع لغة المتصفح.<br/>
    خاصية <b>language</b> للقراءة فقط.
    <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">navigator</span>.<span style="color:var(--js-color)">language</span></pre>
    </div>
</div>
<div className="sum_exemple_style">
    <div className="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js51_navigator4.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee img">       
        <h2 id="h2222"> </h2>
    </div>
</div>
<h3>5. platform</h3>
<div className="style_divv">
    تعود خاصية <b>platform</b> للنظام الأساسي الذي تم تجميع المتصفح من أجله.<br/>
    خاصية <b>platform</b> للقراءة فقط.<br/>
    <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">navigator</span>.<span style="color:var(--js-color)">platform</span></pre>
    </div>
</div>  
<div className="sum_exemple_style">
    <div className="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js51_navigator5.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee img">       
        <h2 id="h22222"> </h2>
    </div>
</div>
<script>
    document.getElementById("h2").innerHTML  = navigator.appCodeName + "<br/>"
    document.getElementById("h22").innerHTML = navigator.appName + "<br/>"
    document.getElementById("h222").innerHTML = navigator.appVersion + "<br/>"
    document.getElementById("h2222").innerHTML = navigator.language + "<br/>"
    document.getElementById("h22222").innerHTML = navigator.platform + "<br/>"
</script>