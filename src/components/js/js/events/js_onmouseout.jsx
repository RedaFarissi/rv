{% load static %} 
<h1 class="heading-style-js"><u><i> JavaScript onmouseout </i></u></h1>
<div class="style_divv mt-5">
    قع حدث <b>onmouseout</b> عندما يتحرك مؤشر الماوس خارج عنصر ما أو خارج أحد العناصر الفرعية له.<br>
    <div class="alert alert-warning my-3">
        <b>نصيحة</b> :<br>
        غالبًا ما يتم استخدام هذا الحدث مع حدث <b>onmouseover</b> ، والذي يحدث عند تحريك المؤشر فوق عنصر أو على أحد العناصر الفرعية له.
    </div>

    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
        <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
<span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">onmouseout</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
        <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onmouseout</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
        <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"mouseout"</span>, function_name <span style="color:gold">)</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js115_onmousemove.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <div class="div" onmousemove="myMoveFunction()"> <p class="p">onmousemove: <br> <span id="id_name"> Mouse over me!</span></p> </div>
        <div class="div" onmouseenter="myEnterFunction()"> <p class="p">onmouseenter: <br> <span id="id_name2"> Mouse over me!</span></p> </div>
        <div class="div" onmouseover="myOverFunction()"> <p class="p">onmouseover: <br> <span id="id_name3"> Mouse over me!</span></p> </div>
    </div>
</div>