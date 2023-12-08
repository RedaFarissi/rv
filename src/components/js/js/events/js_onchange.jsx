{% load static %} 
<h1 class="heading-style-js"><u><i>  JavaScript onchange </i></u></h1>
<div class="style_divv mt-5">
    يقع حدث <b>onchange</b> عندما يتم تغيير قيمة العنصر.<br>
    بالنسبة للأزرار الراديوية وخانات الاختيار ، يقع حدث <b>onchange</b> عندما يتم تغيير الحالة المحددة.<br>
    <div class="alert alert-warning my-2">
        <div class="h5"><b>نصيحة</b></div>
         هذا الحدث مشابه لحدث <b>oninput</b> الفرق هو أن حدث <b>oninput</b> يحدث فورًا بعد تغيير قيمة العنصر ، بينما يحدث التغيير عندما يفقد العنصر التركيز ، بعد تغيير المحتوى. الاختلاف الآخر هو أن حدث <b>onchange</b> يعمل أيضًا على عناصر <kbd>&lt;select&gt;</kbd>.
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
<span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">onchange</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onchange</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"change"</span>, function_name <span style="color:gold">)</span></pre>  
    </div>
</div>

<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js96_onchange.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee"> 
        <select id="Select" >
          <option value="Html">HTML</option>
          <option value="Css">CSS</option>
          <option value="JavaScript">JAVASCRIPT</option>
          <option value="Bootstrap">BOOTSTRAP</option>
        </select>
        <p id="result"></p>
    </div>
</div>

<div class="sum_exemple_style">
    <div class="mital">متال 2 :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js96_onchange2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee"> 
        <input type="text" onchange="alert(this.value)">
    </div>
</div>

<div class="alert alert-info" dir="ltr" style="line-height: 200%;word-spacing:5px">
    <div class="h5 mb-0 pb-0"><b>Supported HTML tags</b>:</div><br>
	<kbd>&lt;input type="checkbox"&gt;</kbd>, <kbd>&lt;input type="color"&gt;</kbd>, <kbd>&lt;input type="date"&gt;</kbd>, <kbd>&lt;input type="datetime"&gt;</kbd>, <kbd>&lt;input type="email"&gt;</kbd>, <kbd>&lt;input type="file"&gt;</kbd>, <kbd>&lt;input type="month"&gt;</kbd>, <kbd>&lt;input type="number"&gt;</kbd>, <kbd>&lt;input type="password"&gt;</kbd>, <kbd>&lt;input type="radio"&gt;</kbd>, <kbd>&lt;input type="range"&gt;</kbd>, <kbd>&lt;input type="search"&gt;</kbd>, <kbd>&lt;input type="tel"&gt;</kbd>, <kbd>&lt;input type="text"&gt;</kbd>, <kbd>&lt;input type="time"&gt;</kbd>, <kbd>&lt;input type="url"&gt;</kbd>, <kbd>&lt;input type="week"&gt;</kbd>, <kbd>&lt;select&gt;</kbd> , <kbd>&lt;textarea&gt;</kbd>
</div>
<script>
    var a = document.getElementById("Select");
    const result = document.getElementById("result")
    a.addEventListener("change",function_name)   
    function function_name() {
      result.innerHTML = "You selected: " + a.value;
    }
</script>
