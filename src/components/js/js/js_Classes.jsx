{% load static %} 
<h1 class="heading-style-js"><u><i> JavaScript Classes </i></u></h1>
<div class="style_divv mt-5">
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;">
    
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js28_Class.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img"><h2>40</h2></div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال 2:  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js28_Class2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <button id="btn" class="btn btn-outline-dark "> Sum  </button>
    </div>
</div>
<script>
    class ClassName{
       #a ; #b ; // private variable  
        constructor(a,b){
            this.a = a
            this.b = b
        }
        add(){
            return alert(this.a +this.b)
        }
    }
    const aDD = new ClassName(5,95)
    document.getElementById("btn").addEventListener('click',
        function(){
            aDD.add() 
        }  
    )
  </script>