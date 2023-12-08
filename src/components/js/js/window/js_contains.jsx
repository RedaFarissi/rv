{% load static %} 
<h1 className="heading-style-js"><u><i>  JavaScript contains </i></u></h1>
<div className="style_divv mt-5">
يعيد <b><bdi>contains()</bdi></b> <b>true</b> إذا كانت العقدة سليلة العقدة.<br/>
أسلوب <b><bdi>contains()</bdi></b> يرجع القيمة <b>false</b> إذا كان العنصر لا يحتوي على العقدة سليلة
    <div className="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
        <pre><span style="color:var(--js-color)">document</span>.<span style="color:gold">contains(</span>node<span style="color:gold">)</span></pre>
    </div>
</div>
<div className="sum_exemple_style">
    <div className="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js80_contains.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee img"> 
        children 1 <br/> children 2 <br/> children 3 <br/> children 4 <br/> <span style="font-size:21px">true</span>
    </div>
</div>
<div className="sum_exemple_style">
    <div className="mital">متال 2 :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js80_contains2.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee img"> 
        children 1 <span style="color:red">Hello Word</span> <br/>  children 2 <br/>  children 3 <br/>  children 4 <br/>  true
    </div>
</div>
<div className="sum_exemple_style">
    <div className="mital">متال 3 :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js80_contains3.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee img">    
        children 1 <br/>   children 2 <br/>   children 3 <br/>   children 4 <br/>   false
    </div>
</div>