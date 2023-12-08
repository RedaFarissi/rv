{% load static %} 
<h1 class="heading-style-js"><u><i> JavaScript Classes </i></u></h1>
<h3>1 - JavaScript Class Syntax</h3>
<div class="style_divv">
    استخدم  الكلمات <b>class</b> الرئيسية لإنشاء فصل دراسي.<br>
    أضف دائمًا طريقة باسم <bdi><b>constructor()</b></bdi>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
<pre><span style="color:var(--html-color-tags)">class</span> <span style="color:lime">Class_Name</span> {
  <span style="color:gold">constructor()</span>{ ... }
}</pre></div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js139_class_Intro.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">
        <div id="h1">JavaScript Class</div>
        <p>How to use a JavaScript Class.</p>
        <div id="resulta"></div>  
    </div>
</div>
<h3>2 - Using a Class</h3>
<div class="style_divv">
    عندما يكون لديك class ، يمكنك استخدامه وذالك لإنشاء كائن أو كائنات <bdi>(object)</bdi> .
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
<pre><span style="color:var(--html-color-tags)">class</span> <span style="color:lime">Class_Name</span> {
  <span style="color:gold">constructor()</span>{ ... }
}

<span style="color:var(--html-color-tags)">var</span> obj = <span style="color:var(--html-color-tags)">new</span> <span style="color:lime">Class_Name()</span></pre></div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js139_class_Intro2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">
        <p>How to use a JavaScript Class.</p>   
        <p> Ford 2014 </p>     
    </div>
</div>
<h3> 3 - The Constructor Method</h3>
<div class="style_divv">
    طريقة <b>constructor</b> هي طريقة خاصة:<br>
    يجب أن يكون لها الاسم الدقيق <b>constructor</b>.<br>
    يتم تنفيذه تلقائيًا عند إنشاء كائن جديد.<br>
    يتم استخدامه لتهيئة خصائص الكائن.<br>
    إذا لم تحدد طريقة <b>constructor</b> ، فستضيف <b>JavaScript</b> طريقة <b>constructor</b> فارغة.
</div>

<h3>4 - Class Methods</h3>
<div class="style_divv">
    يتم إنشاء طرق <b>class</b> بنفس بناء الجملة مثل طرق الكائن.<br>
    استخدم <b>class</b> الكلمة الأساسية لإنشاء <b>class</b> .<br>
    أضف دائمًا طريقة <bdi><b>constructor()</b></bdi>.<br>
    ثم أضف أي عدد من <b>Method</b>.
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
<pre><span style="color:var(--html-color-tags)">class</span> <span style="color:lime">Class_Name</span> {
  <span style="color:gold">constructor()</span>{ ... }
  <span style="color:gold">method_1()</span> { ... }
  <span style="color:gold">method_2()</span> { ... }
  <span style="color:gold">method_3()</span> { ... }
}

<span style="color:var(--html-color-tags)">var</span> obj = <span style="color:var(--html-color-tags)">new</span> <span style="color:lime">Class_Name()</span></pre></div>
</div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js139_class_Intro3.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">
        <h2>JavaScript Class Method</h2>
        <p>How to define and use a Class method.</p>
        <p id="demo"></p>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال 2 :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js139_class_Intro4.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">
      
      <h2>JavaScript Class Method</h2>
      <p>How to define and use a Class method.</p>
      <p id="res"></p>    </div>
</div>

<script>
    class Car {
      constructor(name , speed){
        const r = document.getElementById("resulta")
        r.innerHTML = `name : ${name} speed : ${speed} km` 
      }
    }
    var obj = new Car("BMW" , 200)
/********************************************************* */
class Cars {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  age(){
    let date = new Date();
    return date.getFullYear() - this.b;
  }
}

let myCar = new Cars("Ford", 2014);
document.getElementById("demo").innerHTML =
"My car is " + myCar.age() + " years old.";
</script>
<script>
    class Moyen {
      constructor( a , b ) {
        this.a = a 
        this.b = b 
      }
      name(name){
        const res = document.getElementById("res");
        var d = (this.a + this.b) / 2
        res .innerHTML = " name : " + name + " moyen : " + d
      }
    }

    var obJ = new Moyen(20 , 0)
    obJ.name("reda")
</script>