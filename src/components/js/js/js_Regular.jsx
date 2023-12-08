{% load static %} 
<h1 className="heading-style-js"><u><i> JavaScript Regular </i></u></h1>
<h3>1. ما هو Regular </h3>
<div className="style_divv">
    التعبير العادي هو سلسلة من الأحرف التي تشكل نمط بحث.<br>
    عندما تبحث عن بيانات في نص ، يمكنك استخدام نمط البحث هذا لوصف ما تبحث عنه.<br>
    يمكن أن يكون التعبير العادي حرفًا واحدًا أو نمطًا أكثر تعقيدًا.<br>
    تستخدم <b>Regular</b> مع <bdi><b>search</b></bdi> و <bdi><b>replace()</b></bdi> و <bdi><b>split()</b></bdi> تم <bdi><b>test()</b></bdi>
    <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top:9px;padding-bottom:0pt;">
        <pre><span style="color:rgb(235,50,40)">/pattern/modifiers;</span></pre>
    </div>
    <ul>
        <li>pattern : تنسيق النمط </li>
        <li>modifiers : تستقبل عدة قيم  .</li>
        <ul>
            <li> القيمة i : إجراء مطابقة غير حساسة لحالة الأحرف</li>
            <li> القيمة g : إجراء مطابقة لكل عناصر السلسلة </li>
        </ul>
    </ul>
</div>
<div className="sum_exemple_style">
    <div className="mital">متال :  </div>
    <ul>
        <li> سيتم البحت عن تنسيق داخل المتغير d و يتم تغيير الكلمة reda </li>
        <li> خلال كتابة تنسيق مع <b>modifiers</b> بقيمة <b>i</b> لا تأخد بعين الإعتبار الحروف إذا كانت كبيرة أو صغيرة </li>
        <li>بما ان المتغير d يمتلك الكلمة reda  مرتين يتم إستهداف أول كلمة .</li>
    </ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js25_Regular.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee img"><h2> Kamal Eskouni Reda </h2></div>
</div>
<div className="sum_exemple_style">
    <div className="mital">متال 2:  </div>
    <ul>
        <li> خلال كتابة تنسيق مع <b>modifiers</b> بقيمة <b>g</b> يتم تحديد كل الكلمات المبحوت عنها  </li>
        <li> خلال كتابة تنسيق مع <b>modifiers</b> بقيمة <b>g</b> تأخد بعين الإعتبار الحروف إذا كانت كبيرة أو صغيرة </li>
    </ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js25_Regular2.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee img"><h2> Kamal Eskouni Kamal </h2></div>
</div>
<div className="sum_exemple_style">
    <div className="mital">متال 3:  </div>
    <ul>
        <li> خلال كتابة تنسيق مع <b>modifiers</b> بقيمة <b>g</b> تأخد بعين الإعتبار الحروف إذا كانت كبيرة أو صغيرة </li>
    </ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js25_Regular3.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee img"><h2> Kamal Eskouni reda </h2></div>
</div>
<div className="sum_exemple_style">
    <div className="mital">متال 3:  </div>
    <ul>
        <li> خلال كتابة تنسيق مع <b>modifiers</b> بقيمة <b>g</b> تأخد بعين الإعتبار الحروف إذا كانت كبيرة أو صغيرة </li>
    </ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js25_Regular3.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee img"><h2> Kamal Eskouni reda </h2></div>
</div><div className="sum_exemple_style">
    <div className="mital">متال 4:  </div>
    <ul>
        <li>يمكن  كتابة تنسيق مع <b>modifiers</b> بقيمة <b>g</b> و <b>i</b> في نفس الوقت . مما سيؤدي إلى تحديد كل الكلمات المستهدفة تم عدم التفرق بين الحروف الصغيرة و الكبيرة .</li>
    </ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js25_Regular4.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee img"><h2> @ Eskouni @ </h2></div>
</div>
<div className="mital">متال 5:  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js25_Regular5.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee img"><h2>true<br>A,B,C,D,a,b,c,d</h2></div>
</div>