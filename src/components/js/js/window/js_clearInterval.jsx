{% load static %} 
<h1 className="heading-style-js"><u><i> JavaScript clearInterval </i></u></h1>
<div className="style_divv mt-5">
    لمسح فاصل زمني ، قم إدخال قيمة  <bdi><b>setInterval()</b></bdi> داخل متغير تم قم بإسناد قيمة المتغير داخل <bdi><b>clearInterval()</b></bdi> .<br/>
    <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
<pre><span style="color:var(--html-color-tags)">let</span> variable =  <span style="color:gold">setInterval(</span> Function_name <span style="color:gold">,</span> milliseconds<span style="color:gold">)</span>;

<span style="color:gold">clearInterval(</span>variable<span style="color:gold">)</span>;</pre>
    </div>
</div>

<div className="sum_exemple_style">
    <div className="mital"> متال  :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js36_clearInterval.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee img">
        <h2 id='h2'>  0 : 0 : 0  </h2>
        <button onclick="stop_Inter()" style="outline:none;border-radius:2px;border:1px solid black"> STOP </button>
    </div>
</div>

    <script>
        let id = document.getElementById("h2")
        let s=0 ; m=0 , h=0 ; 
        var clear = setInterval( Clock ,1000)
        function Clock(){
            if( s < 59)   s++;
            else{ m++;  s=0; 
                if(m == 60){ m=0; h++; } 
            }
            id.innerHTML = ` ${h} : ${m} : ${s} `
        }
        function stop_Inter(){
            clearInterval(clear)
        }
    </script>