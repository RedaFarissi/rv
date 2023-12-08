{% load static %} 
<h1 class="heading-style-js"><u><i>  JavaScript onsubmit </i></u></h1>
<div class="style_divv mt-5">
    يقع حدث <b>onsubmit</b> عند إرسال نموذج إلى الخادم . 
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
<span style="color:var(--html-color-tags)">&lt;form</span> <span style="color:var(--js-color)">onsubmit</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onsubmit</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"submit"</span>, function_name <span style="color:gold">)</span></pre>  
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js116_onsubmit.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">   
        <form onsubmit="test(event)" action="./js/test_submit.php" method="POST">
           <input type="email" name="Email_submit" id="myEmail" required>
           <input type="submit" value="submit">
        </form>
    </div>
</div>
<script>
      function test(event){
        var email = document.getElementById("myEmail").value
        console.log(email);
        if(email.includes("@gmail.com") == true){
          alert("submit success")
        }else{
          event.preventDefault()
        }
      }
</script>