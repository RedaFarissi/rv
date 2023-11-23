{% load static %} 
<style> 
    #Lien:after { content: "l'ien is : " attr(href); } 
    #div_id {
        width:calc(100% - 100px);
        height:65px;
        background-color: red;
        margin-left: 50px;
        text-align: center;
        line-height: 65px;
        font-size: 40px;
        border-radius: 7px;
    }
    #grad1 {
      height: 200px;
      width: 200px;
      background-color: red; /* For browsers that do not support gradients */
      background-image: conic-gradient(red, yellow, green);
    }
    #p1 { background-color:hsla(120,100%,50%); }
    #p2 { background-color:hsla(120,100%,75%); }
    #p3 { background-color:hsla(120,100%,25%); }
    #p4 { background-color:hsla(120,60%,70%); }
    #p5 { background-color:hsla(0,100%,50%); }
    #p6 { background-color:hsla(360,40%,50%); }
    #Gradient1 { height: 150px;background-image: linear-gradient(red, yellow, blue);}
    #grad-1 { height: 100px; background-image: linear-gradient(0deg, red, blue) }
    #grad-2 { height: 100px; background-image: linear-gradient(90deg, red, blue);}
    #grad-3 { height: 100px;background-image: linear-gradient(180deg, red, blue);}
    #grad-4 { height: 100px;background-image: linear-gradient(-90deg, red, blue);} 
    #div1 { background-color: red;height: 150px; width: max(50%, 300px); color:white}
    #css_min {background-color: red;height: 150px;width: min(50%, 300px);color: white;}

</style>
<h1 class="heading-style-css"><u><i>  CSS function </i></u></h1>
<div class="style_divv mt-5">
    تُستخدم وظائف <b>CSS</b> كقيمة لخصائص <b>CSS</b> المختلفة .
</div>
<h3> 1 - <bdi>attr()</bdi> </h3>
<div class="style_divv">
    ترجع الدالة <bdi><b>attr()</b></bdi> قيمة إحدى سمات العناصر المحددة
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:gold">attr(</span>attribute-name<span style="color:gold">)</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال  :  </div>
    <img src="{% static 'css/css53_Function.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee">
        <div id="h1"> The attr() Function </div>
        <div>
          <a id="Lien" href="https://www.google.com"> 
              Visit google 
          </a>
        </div>
    </div>
</div>
<h3> 2 - <bdi>calc()</bdi> </h3>
<div class="style_divv">
    تقوم الدالة <bdi><b>calc()</b></bdi> بإجراء عملية حسابية لاستخدامها كقيمة الخاصية.
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:gold">calc(</span>expression<span style="color:gold">)</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال  :  </div>
    <img src="{% static 'css/css53_Function2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee">
        <div id="div_id"><span style="color:aliceblue;"> CSS calc() </span></div>
    </div>
</div>
<h3> 3 - <bdi>conic-gradient()</bdi> </h3>
<div class="style_divv">
    تعيّن وظيفة <bdi><b>conic-gradient()</b></bdi> تدرجًا مخروطيًا كصورة الخلفية.<br>
    التدرج المخروطي هو تدرج مع انتقالات لونية تدور حول نقطة مركزية.<br>
    لإنشاء تدرج لوني مخروطي ، يجب عليك تحديد توقفي لوني على الأقل.<br>
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:gold">conic-gradient(</span>expression<span style="color:gold">)</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال  :  </div>
    <img src="{% static 'css/css53_Function3.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee">
        <div id="h1"> Conic Gradient - Three Colors </div>
        <div id="grad1"></div>
    </div>
</div>
<h3> 4 - <bdi>hsl()</bdi> </h3>
<div class="style_divv">
    تحدد وظيفة <bdi><b>hsl()</b></bdi> الألوان باستخدام نموذج <bdi><b>Hue-saturation-lightness (HSL)</b></bdi>.<br>
    يشير <b>HSL</b> إلى تدرج الألوان والتشبع والخفة - ويمثل تمثيل تنسيق أسطواني للألوان.
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:gold">hsl(</span>hue, saturation, lightness<span style="color:gold">)</span></pre>
    </div>
    <table class="table text-light" dir="ltr">
        <thead>
            <tr>
                <th class="text-center"> Value </th>
                <th class="text-center"> Description </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td> hue </td>
                <td dir="rtl">  تحدد درجة على عجلة الألوان (من 0 إلى 360) - 0 (أو 360) باللون الأحمر ، و 120 باللون الأخضر ، و 240 باللون الأزرق </td>
            </tr>
            <tr>
                <td>saturation</td>
                <td dir="rtl"> يحدد التشبع ؛ 0٪ لون رمادي و 100٪ لون كامل (تشبع كامل) </td>
            </tr>
            <tr>
                <td> lightness </td>
                <td dir="rtl"> يحدد الخفة. 0٪ أسود ، 50٪ طبيعي ، و 100٪ أبيض </td>
            </tr>
        </tbody>
    </table>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال  :  </div>
    <img src="{% static 'css/css53_Function4.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee">
        <div class="h1">The hsl() Function</div>
        <p>HSL colors with opacity:</p>
        <p id="p1">Green</p>
        <p id="p2">Light green</p>
        <p id="p3">Dark green</p>
        <p id="p4">Pastel green</p>
        <p id="p5">Red</p>
        <p id="p6">Light Red</p>
    </div>
</div>
<h3> 5 - <bdi>linear-gradient()</bdi> </h3>
<div class="style_divv">
    تعيّن وظيفة <bdi><b>linear-gradient()</b></bdi> تدرجًا خطيًا كصورة الخلفية.<br>
    لإنشاء تدرج خطي ، يجب عليك تحديد لونين على الأقل. التوقفات اللونية هي الألوان التي تريد تجسيد انتقالات سلسة بينها. يمكنك أيضًا تعيين نقطة بداية واتجاه (أو زاوية) جنبًا إلى جنب مع تأثير التدرج اللوني.
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:gold">linear-gradient(</span>direction, color-stop1, color-stop2, ...<span style="color:gold">)</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال  :  </div>
    <img src="{% static 'css/css53_Function5.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee">    
      <div id="h3"> Linear Gradient - Top to Bottom </div>
      <p>
        This linear gradient starts at the top.
        It starts red, transitioning to yellow, then to blue:
      </p>
      <div id="Gradient1"></div>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال 2 :  </div>
    <img src="{% static 'css/css53_Function6.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee">    
        <div class="h3">Linear Gradients - Using Different Angles</div>
        <div id="grad-1" style="color:white;text-align:center;">0deg</div><br>
        <div id="grad-2" style="color:white;text-align:center;">90deg</div><br>
        <div id="grad-3" style="color:white;text-align:center;">180deg</div><br>
        <div id="grad-4" style="color:white;text-align:center;">-90deg</div>
    </div>
</div>
<h3> 6 - <bdi>max()</bdi> </h3>
<div class="style_divv">
    تستخدم الدالة <bdi><b>max()</b></bdi> القيمة الأكبر ، من قائمة القيم المفصولة بفواصل ، كقيمة الخاصية.
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:gold">max(</span>value1, value2, ...<span style="color:gold">)</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <img src="{% static 'css/css53_Function7.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee">    
        <div id="h1">The max() Function</div>
        <p>
          Use max() to set the width of #div1
          to whichever value is largest, 50% or 300px:
        </p>
        <div id="div1">Some text...</div>
        <p>Resize the browser window to see the effect.</p>
    </div>
</div>

<h3> 7 - <bdi>min()</bdi> </h3>
<div class="style_divv">
    تستخدم الدالة <bdi><b>min()</b></bdi> القيمة الأصغر ، من قائمة القيم المفصولة بفواصل ، كقيمة الخاصية.
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:gold">min(</span>value1, value2, ...<span style="color:gold">)</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <img src="{% static 'css/css53_Function8.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee">    
        <div id="h1">The min() Function</div>
        <p>
          Use min() to set the width of #div1
          to whichever value is smallest, 
          50% or 300px:
        </p>
        <div id="div1">Some text...</div>
        <p>Resize the browser window to see the effect.</p>
    </div>
</div>

<h3> 8 - <bdi>var()</bdi> </h3>
<div class="style_divv">
    تُستخدم الدالة <bdi><b>var()</b></bdi> لإدخال قيمة متغير CSS.
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
<pre><span style="color:var(--violet-color)">:root{</span> <span style="color:var(--js-color)">--name</span>: <span style="color:orange;">blue</span>; <span style="color:var(--violet-color)">}</span>
<span style="color:gold">var(</span> <span style="color:var(--js-color)">--name</span> <span style="color:gold">)</span>
</pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <img src="{% static 'css/css53_Function9.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee">    
        
    </div>
</div>
