{% load static %} 
<style>
  .Sty{ background-color:red; color:white; font-size:21px; }
  #resuLt{ background-color:black; color:white; font-size:23px; padding:7px;}
  #res{ background-color:rebeccapurple; color:white; font-size:22px; padding:9px; width:max-content;}
</style>
<h1 class="heading-style-js"><u><i> JavaScript Class Inheritance </i></u></h1>
<h3>1 - Inheritance</h3>
<div class="style_divv">
    <b>Inheritance</b>  وتعني وراثة .<br>
    الوراثة مفيدة لإعادة استخدام الكود: إعادة استخدام خصائص وطرق <b>class</b> موجودة عند إنشاء <b>class</b> جديدة.<br>
    لإنشاء وراثة <b>class</b> ، استخدم الكلمة الأساسية <b>extends</b>.<br>
    ترث ال <b>class</b> التي تم إنشاؤها باستخدام ميراث  جميع <b>methods</b> من <b>class</b> لأخرى .<br>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js142_class_Inheritance.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <h2>JavaScript Class Inheritance</h2>
        <p class="Sty"> Use the "extends" keyword to inherit all methods from another class. </p>
        <p class="Sty"> Use the "super" method to call the parent's constructor function. </p>
        <p id="resuLt"> I have a Ford, it is a Mustang </p>
    </div>
</div>
<h3>2 - <bdi>super()</bdi></h3>
<div class="style_divv">
    طريقة <bdi><b>super()</b></bdi> تشير إلى ال <b>class</b> الأب.<br>
    من خلال استدعاء طريقة <bdi><b>super()</b></bdi> في طريقة <b>constructor</b> ، فإننا نطلق على طريقة <b>constructor</b> الخاصة بالوالدين ونحصل على إمكانية الوصول إلى <b>properties</b> و <b>methods</b> الخاصة بالوالدين    
</div>
<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js142_class_Inheritance3.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <button id="btn_test" class="btn btn-primary"> click here </button> 
    </div>
</div>

<h3>3 - Getters and Setters</h3>
<div class="style_divv">
    يتيح لك <b>classes</b> أيضًا استخدام أدوات <b>getters</b> و <b>setters</b>.<br>
    قد يكون من الذكاء استخدام <b>getters</b> و <b>setters</b> مع <b>properites</b> ، خاصة إذا كنت تريد القيام بشيء خاص بالقيمة قبل إعادتها ، أو قبل تعيينها.<br>
    لإضافة <b>getters</b> و <b>setters</b> في <b>class</b> ، استخدم الكلمات الأساسية <b>get</b> و <b>set</b>.
</div>
<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js142_class_Inheritance2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <h2>JavaScript Class Gettter/Setter</h2>
        <p>A demonstration of how to add getters and setters in a class, and how to use the getter to get the property value.</p>
        <p id="res">Ford get</p>
    </div>
</div>

<script>
    function super_function(){
        alert("first name : Reda last name : Eskouni") ;
        alert("Hello Reda");
        document.getElementById("btn_test").removeEventListener("click" ,super_function )
    }
    document.getElementById("btn_test").addEventListener("click" ,super_function )
</script>