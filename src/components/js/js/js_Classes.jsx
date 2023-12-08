{% load static %} 
<h1 className="heading-style-js"><u><i> JavaScript Classes </i></u></h1>
<div className="style_divv mt-5">
    <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;">
    
    </div>
</div>
<div className="sum_exemple_style">
    <div className="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js28_Class.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee img"><h2>40</h2></div>
</div>
<div className="sum_exemple_style">
    <div className="mital">متال 2:  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js28_Class2.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee img">
        <button id="btn" className="btn btn-outline-dark "> Sum  </button>
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