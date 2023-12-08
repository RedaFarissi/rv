{% load static %} 
<style>
  #DIV{ margin: auto;width: 70%;background-color:red;height: 450px;border: 4px solid black;overflow: scroll;  }
  #child{ margin: auto;width: 70%;background-color:green;min-height: 900px;border: 0.9px solid white;  }
  #Parent{ margin: auto; width: 70%; background-color:red; height: 450px; border: 4px solid black; overflow: scroll;}
  #Child{ margin: auto; width: 70%; background-color:green; min-height: 900px; border: 0.9px solid white;}
</style> 
<h1 class="heading-style-js"><u><i>  JavaScript onscroll </i></u></h1>
<div class="style_divv mt-5">
    يقع حدث <b>onscroll</b> عندما يتم تمرير شريط التمرير لعنصر ما.<br>
    استخدم خاصية <bdi><b>CSS overflow</b></bdi>  لإنشاء شريط تمرير لعنصر.
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
<span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">onscroll</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onscroll</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"scroll"</span>, function_name <span style="color:gold">)</span></pre>  
    </div>
</div>

<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js129_onscroll.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">
        <div id="DIV" onscroll="function_name()">
            <div id="child">
                Div box
            </div>
        </div> 
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js129_onscroll2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">
        <div id="Parent" onscroll="function_name2()">
            <div id="Child">
               Div box
            </div>
        </div> 
        <b id="result"></b>
    </div>
</div>

<script>
    function function_name(){
      alert("you scrolled div")
    }
    function function_name2(){
      var Parent = document.getElementById("Parent")
      var result = document.getElementById("result")
      result.innerHTML = (Parent.scrollTop).toFixed(2)
    }
</script>