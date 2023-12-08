{% load static %} 
<h1 class="heading-style-js"><u><i>  JavaScript onfocusout </i></u></h1>
<div class="style_divv mt-5">
    يحدث حدث <b>onfocusout</b> عندما يكون عنصر على وشك أن يفقد التركيز.<br>
    حدث <B>onfocusout</B> مشابه لحدث <b>onblur</b>. الاختلاف الرئيسي هو أن حدث <b>onblur</b> لا ينفجر. لذلك ، إذا كنت تريد معرفة ما إذا كان عنصر ما أو فرعه يفقد التركيز ، فيجب عليك استخدام حدث <b>onfocusout</b>.<br>
    حدث <b>onfocusout</b> هو عكس حدث <b>onfocusin</b>.<br>
    
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
<span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">onfocusout</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onfocusout</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"focusout"</span>, function_name <span style="color:gold">)</span></pre>  
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js118_onfocusin.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">      
        Enter your name: 
        <input type="email" id="Input" onfocusin="inf()" onfocusout="outf()">
    </div>
</div>
<script>
  // Focus = Changes the background color of input to green
  function inf() {
    document.getElementById("Input").style.background = "green";
  }
  // No focus = Changes the background color of input to red
  function outf() {
    document.getElementById("Input").style.background = "red";
  }
</script>