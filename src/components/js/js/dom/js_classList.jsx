{% load static %} 
<h1 class="heading-style-js"><u><i>  JavaScript classList </i></u></h1>
<h3>1- classList </h3>
<div class="style_divv">
    <bdi><b>Element.classList</b></bdi> هي خاصية للقراءة فقط تقوم بإرجاع مجموعة <b style="color: var(--html-color-tags);">DOMTokenList</b> الحية لسمات فئة العنصر. يمكن بعد ذلك استخدام هذا لمعالجة قائمة الفصل.
    <div class="codeStudio codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">document</span>.<span style="color:var(--js-color)">classList</span> ;</pre>
    </div>
</div>

<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js62_classList.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
            alert alert-primary <br>
            <b>object</b>
    </div>
</div>

<div class="sum_exemple_style">
    <div class="mital">متال 2 :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js62_classList2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <img src="{% static 'js/js62_classList2 2.png' %}" class="img">
</div>

<div class="sum_exemple_style">
    <div class="mital">متال 3 :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js62_classList5.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        alert alert-primary border border-primary
    </div>
</div>
<h3>2- classList value </h3>
<div class="style_divv">
    على الرغم من أن خاصية <b>classList</b> نفسها للقراءة فقط ، يمكنك تعديل <b>DOMTokenList</b> المقترنة بها باستخدام طرق <b><bdi>add()</bdi></b> ، <b><bdi>remove()</bdi></b> ،  <b><bdi>replace()</bdi></b> ، و <b><bdi>toggle()</bdi></b>.
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">document</span>.<span style="color:var(--js-color)">classList</span>.<span style="color:gold">add(<span style="color: orange;">"className1"</span>, <span style="color: orange;">"className2"</span>, ... )</span> ;
<span style="color:var(--js-color)">document</span>.<span style="color:var(--js-color)">classList</span>.<span style="color:gold">remove(<span style="color: orange;">"className1"</span>, <span style="color: orange;">"className2"</span>, ... )</span> ;
<span style="color:var(--js-color)">document</span>.<span style="color:var(--js-color)">classList</span>.<span style="color:gold">toggle(<span style="color: orange;">"className1"</span>, <span style="color: orange;">"className2"</span>, ... )</span> ;
<span style="color:var(--js-color)">document</span>.<span style="color:var(--js-color)">classList</span>.<span style="color:gold">replace(<span style="color: orange;">"className1"</span>, <span style="color: orange;">"className2"</span>)</span> ;</pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js62_classList3.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        alert alert-primary border border-primary
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال 2 :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js62_classList4.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        alert 
    </div>
</div>
<table  class="table table-bordered text-light mt-3">
    <thead class="text-center bg-secondary">
        <tr>
            <th>  الوصف </th>
            <th>  الإسم </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td> يضيف فئة واحدًا أو أكثر إلى القائمة </td>
            <td dir="ltr" class="ps-3"><bdi> add() </bdi></td>
        </tr>
        <tr>
            <td> يعيد <b>true</b> إذا كانت القائمة تحتوي على فئة </td>
            <td dir="ltr" class="ps-3"><bdi> contains() </bdi></td>
        </tr>
        <tr>
            <td> تُرجع عدد فئات في القائمة </td>
            <td dir="ltr" class="ps-3"><bdi> length </bdi></td>
        </tr>
        <tr>
            <td> يزيل رمزًا مميزًا واحدًا أو أكثر من القائمة </td>
            <td dir="ltr" class="ps-3"><bdi> remove() </bdi></td>
        </tr>
        <tr>
            <td> يستبدل رمزًا مميزًا في القائمة </td>
            <td dir="ltr" class="ps-3"><bdi> replace() </bdi></td>
        </tr>
    </tbody>
</table>