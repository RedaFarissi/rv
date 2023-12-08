{% load static %} 
<h1 className="heading-style-js"><u><i> JavaScript static </i></u></h1>
<div className="style_divv mt-5">
    يتم تعريف <b>static class</b> في الفئة نفسها.<br/>
    لا يمكنك استدعاء طريقة ثابتة على <b>object</b>، فقط على <b>object class</b>.<br/>
</div> 
<div className="sum_exemple_style">
    <div className="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js140_class_static2.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee">
        <div className="h2"> JavaScript Class Static variable </div>
        <p>20</p>
    </div>
</div>

<div className="sum_exemple_style">
    <div className="mital"> متال 2 :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js140_class_static.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee">
        <h2>JavaScript Class Static Methods</h2>
        <p> A static method is created with the "static" keyword, and you can only call the  method on the class itself. </p>
        <p id="result"> Hello!! </p>
    </div>
</div>