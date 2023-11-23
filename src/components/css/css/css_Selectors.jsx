{% load static %} 
<style>
      #emaiL , #passworD {width:90%; height:50px; background-color:yellow;outline: none;border: none;margin:5px 5%;} 
  #emaiL::placeholder , #passworD::placeholder{ background-color: rgba(25 200 25/40%); padding-left: 9px;}
</style>
<h1 class="heading-style-css"><u><i> CSS Selectors </i></u></h1>
<details dir="ltr"> 
    <summary style="color:deeppink;"> All lesson titles </summary>
    <a href="#CssClassSelectors"> Css class Selectors</a><br>
    <a href="#CssClassinClassSelectors"> Css class in class Selectors </a><br>
    <a href="#CssIdSelectors"> Css id Selectors </a><br>
    <a href="#CssAllElementSelectors"> Css All Element Selectors </a><br>
    <a href="#CssElementSelectors"> Css Element Selectors </a><br>
    <a href="#CssElementClassSelectors"> Css Element class Selectors </a><br>
    <a href="#CssMoreThanOneElementSelectors"> Css More Than One Element Selectors  </a><br>
    <a href="#ItemsOfSpecificOrigin"> Items Of Specific Origin   </a><br>
    <a href="#CSSElementLocatedImmediatelyAfterAnElement"> CSS Element located immediately after an Element  </a><br>
    <a href="#CSSAllElementLocatedImmediatelyAfterAnElement"> CSS All Element located immediately after an Element  </a><br>
    <a href="#CssAttributeSelectors"> Css Attribute Selectors </a><br>
    <a href="#CssAttributeWithValueSelectors"> Css Attribute with Value Selectors  </a><br>
    <a href="#selectItemsWithAnAttributeValueThatContainASpecificWord"> select Items with an Attribute Value that contain a Specific Word  </a><br>
    <a href="#">   </a><br>
</details>
<h3  id="CssClassSelectors">1- CSS <bdi>.class</bdi>  Selectors</h3>
<div class="style_divv">
    تحدد <b><bdi>.class</bdi></b>  العناصر ذات سمة فئة معينة. <br>
    لتحديد عناصر بفئة معينة ، اكتب حرف نقطة (.) ، متبوعًا باسم <b>class</b>.<br>
    يمكن أن تشير عناصر HTML أيضًا إلى أكثر من فئة واحدة (انظر إلى المثال 2 أدناه).
</div>
<div class="sum_exemple_style">
    <div class="mital">متال  :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css52_Selectors.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'css/css52_Selectors 2.png' %}" class="img">
</div>
<h3 id="CssClassinClassSelectors">2- CSS <bdi>.class1 .class2</bdi>  Selectors</h3>
<div class="style_divv"> 
    تحديد جميع العناصر التي لها <bdi><b>class2</b></bdi> داخل عنصر له <bdi><b>class1</b></bdi>.
</div>
<div class="sum_exemple_style">
    <div class="mital">متال  :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css52_Selectors2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'css/css52_Selectors2 2.png' %}" class="img">
</div>
<h3 id="CssIdSelectors">3- CSS <bdi>#id</bdi>  Selectors</h3>
<div class="style_divv"> 
    يقوم المحدد #id بتصميم العنصر بالمعرف المحدد.
</div>
<div class="sum_exemple_style">
    <div class="mital">متال  :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css52_Selectors3.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'css/css52_Selectors3 2.png' %}" class="img">
</div>
<h3 id="CssAllElementSelectors">4- CSS <bdi>*</bdi> Selectors</h3>
<div class="style_divv"> 
    يحدد المحدِّد * جميع العناصر.<br>
    يمكن للمحدد * أيضًا تحديد جميع العناصر داخل عنصر آخر .
</div>
<div class="sum_exemple_style">
    <div class="mital">متال  :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css52_Selectors4.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'css/css52_Selectors4 2.png' %}" class="img">
</div>
<div class="sum_exemple_style">
    <div class="mital">متال 2 :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css52_Selectors5.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'css/css52_Selectors5 2.png' %}" class="img">
</div>

<h3 id="CssElementSelectors">5- CSS element Selectors</h3>
<div class="style_divv"> 
    يمكن تحديد جميع العناصر ذات إسم محدد بستخدام الإسم فقط
</div>
<div class="sum_exemple_style">
    <div class="mital">متال  :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css52_Selectors6.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'css/css52_Selectors6 2.png' %}" class="img">
</div>
<h3 id="CssElementClassSelectors">6- CSS element.class Selectors</h3>
<div class="style_divv">
    محدد العنصر element.class يستخدم لتحديد العنصر المحدد بالفئة المحددة.
</div>
<div class="sum_exemple_style">
    <div class="mital">متال  :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css52_Selectors7.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'css/css52_Selectors7 2.png' %}" class="img">
</div>
<h3 id="CssMoreThanOneElementSelectors">7- CSS <bdi>element,element</bdi> Selectors</h3>
<div class="style_divv">
    لتصميم عدة عناصر بنفس النمط ، إفصل اسم كل عنصر بفاصلة.
</div>
<div class="sum_exemple_style">
    <div class="mital">متال  :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css52_Selectors8.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'css/css52_Selectors8 2.png' %}" class="img">
</div>
<h3 id="ItemsOfSpecificOrigin">8- CSS <bdi>element>element</bdi> Selectors</h3>
<div class="style_divv">
    يتم استخدام <bdi><b>element>element</b></bdi> العناصر لتحديد عناصر ذات أصل معين.<br>
    لم يتم تحديد العناصر التي ليست تابعة مباشرة للعنصر الأب .
</div>
<div class="sum_exemple_style">
    <div class="mital">متال  :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css52_Selectors9.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'css/css52_Selectors9 2.png' %}" class="img">
</div>
<h3 id="CSSElementLocatedImmediatelyAfterAnElement">9- CSS <bdi>element + element</bdi> Selectors</h3>
<div class="style_divv">
    يتم استخدام <bdi><b>element1 + element2</b></bdi> لتحديد عنصر <b>element2</b> يقع مباشرة بعد عنصر  <b>element1</b>.
</div>
<div class="sum_exemple_style">
    <div class="mital">متال  :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css52_Selectors10.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'css/css52_Selectors10 2.png' %}" class="img">
</div>

<h3 id="CSSAllElementLocatedImmediatelyAfterAnElement">10- CSS <bdi>element ~ element</bdi> Selectors</h3>
<div class="style_divv">
    يتم استخدام  <bdi><b>element1 ~ element2</b></bdi> لتحديد جميع عانصر <b>element2</b> التي تقع مباشرة بعد العنصر  <b>element1</b>.
</div>
<div class="sum_exemple_style">
    <div class="mital">متال  :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css52_Selectors11.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'css/css52_Selectors11 2.png' %}" class="img">
</div>

<h3 id="CssAttributeSelectors">11- CSS <bdi>[attribute]</bdi> Selectors</h3>
<div class="style_divv">
    يتم استخدام  محدد السمة <bdi>[attribute]</bdi>  لتحديد العناصر ذات السمة المحددة.
</div>
<div class="sum_exemple_style">
    <div class="mital">متال  :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css52_Selectors12.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee img">
       <input type="email" name="email" id="emaiL" placeholder="email">
        <input type="password" name="password" id="passworD" placeholder="password">
    </div>
</div>
<style>    [type="email"]{width:60%; height:50px; border-radius:50px;border:1px solid red;padding-left: 9px; } </style>
<h3 id="CssAttributeWithValueSelectors">12- CSS <bdi>[attribute = value]</bdi> Selectors</h3>
<div class="style_divv">
    يتم استخدام  محدد السمة <bdi>[attribute = value]</bdi>  لتحديد العناصر ذات السمة و القيمة المحددين.
</div>
<div class="sum_exemple_style">
    <div class="mital">متال  :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css52_Selectors13.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee img">
        <input type="email" name="email"  placeholder="email"><br>
        <input type="password" name="password" placeholder="password">
    </div>
</div>
<style> a[target=_blank] { background-color: yellow;} </style>
<div class="sum_exemple_style">
    <div class="mital">متال 2 :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css52_Selectors13_2.png' %}" alt="exemple 2" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee img">
        <div class="h2">CSS [attribute="value"] Selector</div>
        <a href="https://www.google.com/" target="_blank"> Google </a> 
    </div>
</div>

<style>[placeholder~="Password"]{height:20px;border-radius:50px;padding-left:9px;background-color:gray;color:white;}</style>
<h3 id="selectItemsWithAnAttributeValueThatContainASpecificWord">13- CSS <bdi>[attribute ~= value]</bdi> Selectors</h3>
<div class="style_divv">
    يتم استخدام  محدد السمة <bdi>[attribute ~= value]</bdi>  لتحديد العناصر ذات قيمة السمة التي تحتوي على كلمة محددة.
</div>
<div class="sum_exemple_style">
    <div class="mital">متال  :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css52_Selectors14.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee img">
        <input type="text" placeholder = "input Text"><br>
        <input type="password" placeholder = "input Password">
    </div>
</div>

<h3>14- CSS <bdi>[attribute|="value"]</bdi> Selectors</h3>
<div class="style_divv">
    يتم استخدام محدد <bdi>[attribute|="value"]</bdi> لتحديد العناصر ذات السمة المحددة ، والتي يمكن أن تكون قيمتها بالضبط القيمة المحددة ، أو القيمة المحددة متبوعة بواصلة (-).<br>
    ملاحظة: يجب أن تكون القيمة كلمة كاملة ، إما بمفردها ، مثل <bdi>class="top"</bdi>، أو متبوعة بواصلة (-) ، مثل <bdi>class="top-text"</bdi>
</div>
<style> [class|=top] {  background: yellow;} </style>
<div class="sum_exemple_style">
    <div class="mital">متال  :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css52_Selectors15.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee img">
        <div class="h2">CSS [attribute|="value"] Selector</div>
        <h1 class="top-header">Welcome</h1>
        <p class="top-text">Hello world!</p>
        <p class="topcontent">Are you learning CSS?</p>
    </div>
</div>