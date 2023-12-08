{% load static %} 
<style>
  #DIVV{
    width: max-content; background-color: yellow;padding: 20px;
    border: 0.9px solid black;margin: auto;border-radius: 4px;
  }
  #grandparent,#grandparent2{ width:250px; height:250px; background-color:red; }
  #parent,#parent2{ width:180px; height: 180px; background-color:green; }
  #child,#child2{ width:100px; height:100px; background-color:yellow; }
</style>
<h1 class="heading-style-js"><u><i> JavaScript addEventListener </i></u></h1>
<h3>1- addEventListener </h3>
<div class="style_divv">
    تقوم طريقة <bdi><b>addEventListener</b>()</bdi> بإرفاق <b>Event</b> بمستند .<br>
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags)">function</span> <span style="color:gold">function_name()</span>{
    <span style="color:green">//Code javaScript </span>
}            
<span style="color:var(--js-color)">element</span>.<span style="color:gold">addEventListener(</span>event<span style="color:gold">,</span> function_name<span style="color:gold">,</span> Capture<span style="color:gold">)</span></span></pre>
    </div>
    أو 
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">element</span>.<span style="color:gold">addEventListener(</span><span style="color: orange;">'event'</span>,<span style="color:var(--html-color-tags)">function()</span>{<span style="color:green">//Code javaScript </span>}<span style="color:gold">,</span> Capture<span style="color:gold">)</span></span></pre>
    </div>

    <ul>
        <li><b>event</b> : قم بكتابة إسم الحدت بدون إستخدم <b>on</b> متلا قم بكتابة <b>click</b> بدلاً من <del>onclick</del> وهي إجبارية .</li>
        <li><b>function</b> : الدالة المراد تشغيلها عند وقوع الحدث وهي إجبارية أيضا.</li>
        <li><b>Capture</b> :  إختيارية تقبل <b>true</b> أو <b>flase</b> <small><small>(قيمة أولية false)</small></small>.</li>
    </ul>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js55_addEventListener.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">
        <div id="DIVV">
          click Here 
        </div>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال 2 :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js55_addEventListener2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">
      <p>Click anywhere in the document to display Date . </p>
      <h2 id="date"> </h2>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال 3 :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js55_addEventListener3.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">
      <div id="grandparent" class="d-flex justify-content-center align-items-center m-5">
        <div id="parent" class="d-flex justify-content-center align-items-center">
          <div id="child"></div>
        </div>
      </div>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال 4 :  </div>
    <ul><li>capture</li></ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js55_addEventListener4.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">
      <div id="grandparent2" class="d-flex justify-content-center align-items-center m-5">
        <div id="parent2" class="d-flex justify-content-center align-items-center">
          <div id="child2"></div>
        </div>
      </div>
    </div>
</div>
<h3>2- <bdi>stopPropagation()</bdi></h3>
<style>
    .diV {
      padding: 50px;
      background-color: rgba(29, 90, 30, 0.3);
      text-align: center;
      cursor: pointer;
    }
</style>
<div class="style_divv">
  تمنع طريقة <bdi><b>stopPropagation()</b></bdi> استدعاء نفس الحدث.<br>
  يعني الانتشار الوصول إلى العناصر الأصلية أو الالتقاط وصولاً إلى العناصر الفرعية  .<br>
  ومع ذلك ، فإنه لا يمنع حدوث أي سلوكيات افتراضية ؛ على سبيل المثال ، لا تزال معالجة النقرات على الروابط. إذا كنت ترغب في إيقاف هذه السلوكيات ، فراجع طريقة <bdi><b>PreventionDefault()</b></bdi>.<br>
  كما أنه لا يمنع الانتشار الفوري لمعالجات الأحداث الأخرى. إذا كنت تريد إيقاف ذلك ، فراجع <bdi><b>stopImmediatePropagation()</b></bdi>.
  <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">event</span>.<span style="color:gold">stopPropagation()</span></pre>
  </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js55_addEventListener5.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">
      <div onclick="Myfunc2()" class="diV mb-3">DIV 2
        <div onclick="Myfunc1()" class="diV">DIV 1</div>
      </div>
      Stop propagation: <input type="checkbox" id="check">
    </div>
</div>
<h3>3- <bdi>PreventionDefault()</bdi></h3>
<div class="style_divv">
    تلغي طريقة <bdi><b>PreventionDefault()</b></bdi> الحدث إذا كان قابلاً للإلغاء ، مما يعني أن الإجراء الافتراضي الذي ينتمي إلى الحدث لن يحدث.<br>
    على سبيل المثال ، يمكن أن يكون هذا مفيدًا عندما:
    <ul>
      <li> النقر فوق الزر "إرسال" ، منعه من إرسال نموذج </li>
      <li> النقر فوق ارتباط ، ومنع الارتباط من اتباع URL </li>
    </ul>
    <div class="alert alert-danger">
       ليست كل الأحداث قابلة للإلغاء. استخدم الخاصية <b>cancelable</b> لمعرفة ما إذا كان الحدث قابلاً للإلغاء.
    </div>
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">event</span>.<span style="color:gold">PreventionDefault()</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js55_addEventListener6.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">  
      Try to check this box: <input type="checkbox" id="myCheckbox"><hr>
      <a id="myAnchor" href="https://www.google.com/">Go to google</a>
    </div>
</div>
<h3>4- addEventlistener with parameters function</h3>
<div class="style_divv">
  <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
<pre><span style="color:var(--html-color-tags)">function</span> <span style="color:gold">functio_name(</span><span style="color:var(--js-color)">parameter1</span><span style="color:gold">,</span><span style="color:var(--js-color)">parameter2</span><span style="color:gold">)</span>{
  <span style="color:var(--violet-color);">return</span> <span style="color:var(--html-color-tags)">function </span> <span style="color:gold">inner_function()</span>{
      <span style="color:green">//Code javaScript </span>
      <span style="color:green">//parameter . can be used</span>   
  }
}
<span style="color:var(--html-color-tags)">var</span> variable = <span style="color:gold">functio_name(</span><span style="color:orange">'parameter1'</span><span style="color:gold">,</span><span style="color:orange">'parameter2'</span><span style="color:gold">)</span>

<span style="color:var(--js-color)">element</span>.<span style="color:gold">addEventListener(</span><span style="color: orange;">'event'</span>, variable <span style="color:gold">)</span></span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js55_addEventListener7.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">  
      <button id="myButton" class="btn btn-primary">
          click
      </button>
  </div>
</div>

<h3>5- removeEventlistener with parameters function</h3>
<div class="style_divv">
  <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
<pre><span style="color:var(--html-color-tags)">function </span><span style="color:gold">functio_name(</span><span style="color:var(--js-color)">parameter1</span><span style="color:gold">,</span><span style="color:var(--js-color)">parameter2</span><span style="color:gold">)</span>{
  <span style="color:var(--violet-color);">return</span> <span style="color:var(--html-color-tags)">function </span> <span style="color:gold">inner_function()</span>{
      <span style="color:green">//Code javaScript </span>
      <span style="color:green">//parameter . can be used</span>   
  }
}
<span style="color:var(--html-color-tags)">var</span> variable = <span style="color:gold">functio_name(</span><span style="color:orange">'parameter1'</span><span style="color:gold">,</span><span style="color:orange">'parameter2'</span><span style="color:gold">)</span>

<span style="color:var(--js-color)">element</span>.<span style="color:gold">addEventListener(</span><span style="color: orange;">'event'</span>, variable <span style="color:gold">)</span></span>
    
<span style="color:var(--js-color)">element</span>.<span style="color:gold">removeEventListener(</span><span style="color: orange;">'event'</span>, variable <span style="color:gold">)</span></span></pre>
  </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js55_addEventListener8.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee"> 
      <div id="myButton2" class="btn btn-primary">click</div>
      <button id="anuler2" class="btn btn-outline-danger">
        click to remove Event 
      </button> 
    </div>
</div>


<script>
    document.getElementById("DIVV").addEventListener("click",clik_function)
    function clik_function(){ alert("div width id='DIVV'") }
    document.addEventListener("mouseup", function(){
      document.getElementById("date").innerHTML = Date()
    });

    const grandparent = document.getElementById("grandparent")
    const parent = document.getElementById("parent")
    const child = document.getElementById("child")
    grandparent.addEventListener("click",Grandparent)
    parent.addEventListener("click",Parent)
    child.addEventListener("click", Child)
    function Grandparent(){   alert(' Grandparent ')}
    function Parent(){  alert(' Parent ')}
    function Child(){  alert(' Child ')}

    const grandparent2 = document.getElementById("grandparent2")
    const parent2 = document.getElementById("parent2")
    const child2 = document.getElementById("child2")    
    grandparent2.addEventListener("click",Grandparent2 , {capture:true})
    parent2.addEventListener("click",Parent2)
    child2.addEventListener("click", Child2)
    function Grandparent2(){ alert(' Grandparent ') }
    function Parent2(){ alert(' Parent ')}
    function Child2(){ alert(' Child ')}

    function Myfunc1() {
      alert("DIV 1");
      if (document.getElementById("check").checked) {
        event.stopPropagation();
      }
    }
    function Myfunc2() {
      alert("DIV 2");
    }

    document.getElementById("myCheckbox").addEventListener("click", 
      function(event){
        event.preventDefault()
      }
    );
    document.getElementById("myAnchor").addEventListener("click", 
      function(event){
        event.preventDefault()
      }
    );

    function function_name(a){
      return function inner(){
        alert('a = '+ a )
      } 
    }

    const variable = function_name("reda")
  
    document.getElementById("myButton").addEventListener("click", variable);
  </script>

  <script>
    function function_Name2(F_name,L_name){
      return function inner(){
        alert('First name = '+ F_name +"\nLast_name = "+L_name )
      } 
    }
    const variable2 = function_Name2("reda","Eskouni")
    
    document.getElementById("myButton2").addEventListener("click",  variable2);

    document.getElementById("anuler2").addEventListener("click", function(){
      document.getElementById("myButton2").removeEventListener("click", variable2);
    });
  </script>