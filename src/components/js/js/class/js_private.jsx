{% load static %} 

<h1 className="heading-style-js"><u><i> JavaScript private </i></u></h1>
<div className="style_divv mt-5">
    كقيمة إفتراضية  جميع متغيرات ال <b>class</b> تكون <b>public</b> .<br/>
    يتم تقديم متغيرات <bdi><b>private class</b></bdi> للسماح بستخدام المتغيرات  في ال <b>class</b> فقط .<br/>
    يمكن إنشاء <b>private methode</b> داخل ال <b>class</b> أيضا .
</div> 

<div className="sum_exemple_style">
    <div className="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js141_class_private.png' %}" className="img" style="width:100%;height:max-content;">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee">
        <h2>JavaScript Class Private variable</h2>
        <p> 110 <br/> undefined </p>
    </div>
</div>
<div className="mital"> متال 2 :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js141_class_private2.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee">
        <h2>JavaScript Class Private variable</h2>    
        <p> 2022 </p>
    </div>
</div>