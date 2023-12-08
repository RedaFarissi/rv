{% load static %} 
<style>
    #HTMLCollection-id{outline: none; border: none; background-color:rgb(24 24 24); color:brown;}
    #HTMLCollection-result{padding-top:2px;margin-top:6px; color:rgba(0 0 0/85%)}
</style>
<h1 class="heading-style-js"><u><i> JavaScript children </i></u></h1>
<div class="style_divv mt-5">
    تقوم خاصية الأطفال بإرجاع مجموعة من العناصر الفرعية لعنصر ما.<br>
    تقوم خاصية <b>children</b> بإرجاع كائن <button id="HTMLCollection-id"><b>HTMLCollection</b></button>.
    <div id="HTMLCollection-result" class="alert bg-info"><small>
        مجموعة <b>HTMLCollection</b> هي مجموعة من عُقد <b>HTML</b>.<br>
        مجموعة <b>HTMLCollection</b> هي قائمة تشبه مصفوفة من عناصر <b>HTML</b>.<br>
        يمكن الوصول إلى العناصر الموجودة في مجموعة بواسطة فهرس يبدأ من 0.<br>
        ترجع خاصية <b>length</b> عدد العناصر في مجموعة <b>HTML</b>.</small>
    </div>

    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">Element</span>.<span style="color:var(--js-color)">children</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js58_children.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <h2>Heading</h2>
        <p>Paragraph</p>
        <div> H2<br>P<br>DIV<br>SCRIPT</div>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال 2 :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js58_children2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <ol>
            <li>Lemon</li>
            <li>Banana</li>
            <li>Kiwi</li>
        </ol>
        <h2> Lemon <br>Banana <br>Kiwi </h2>
    </div>
</div>
<script>
    document.getElementById("HTMLCollection-result").style.display="none"
    let ressult_test = true
    document.getElementById("HTMLCollection-id").addEventListener("click", function(){
        if(ressult_test == true){
            document.getElementById("HTMLCollection-result").style.display="block"
            ressult_test = false
        }else{
            document.getElementById("HTMLCollection-result").style.display="none"
            ressult_test = true
        }
    });
</script>