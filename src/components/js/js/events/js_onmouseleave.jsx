{% load static %} 
<style>
  #box{
    width: 100%; height:200px; 
    background-color:red; color:white; 
    border:4px double black; text-align:center; 
    line-height:200px; font-size: 40px;
  }
</style>
<h1 class="heading-style-js"><u><i> JavaScript onmouseleave </i></u></h1>
<div class="style_divv mt-5">
    يقع حدث <b>onmouseleave</b> عندما يتم تحريك مؤشر الماوس خارج عنصر ما.<br>
    غالبًا ما يتم استخدام هذا الحدث مع حدث <b>onmouseenter</b> ، والذي يحدث عند تحريك مؤشر الماوس على عنصر.<br>

    <div class="alert alert-warning my-3">
        <div class="h4">نصيحة :</div>
        حدث <b>onmouseleave</b> مشابه لحدث <b>onmouseout</b>. الاختلاف الوحيد هو أن حدث <b>onmouseleave</b> لا ينتشر
        لأعلى في التسلسل الهرمي للمستند
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
        <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
<span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">onmouseleave</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
        <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onmouseleave</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
        <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"mouseleave"</span>, function_name <span style="color:gold">)</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js112_onmouseleave.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <div>
            <button class="btn btn-primary" onmouseenter="mouseEnter()" onmouseleave="mouseLeave()">
                ici
            </button>
        </div>
        <div id='box'>
            HTML CONTENT
        </div>
    </div>
</div>
<script>
const x = document.getElementById("box")
x.style.display = "none"

function mouseEnter() {
    x.style.display = "block";
}

function mouseLeave() {
    x.style.display = "none";
}
</script>