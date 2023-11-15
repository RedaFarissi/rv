{% load static %}
<style>
    table th  {padding: 10px 6px;}
    table td  {padding: 10px 10px;}
    b{word-spacing:5px;}
</style>
<h1 class="heading-style-html"><u><i> HTML button</i></u></h1>
<h3> 1. الوسم button</h3>
<div class="style_divv">
    يستخدم الوسم <kbd>&lt;button&gt;</kbd>  في لغة <b>HTML</b> لإنشاء زر قابل للنقر وهو وسم زوجي اي يحتوي على علامة فتح وعلامة إغلاق.<br>
    داخل <kbd>&lt;button&gt;</kbd> يمكنك وضع نص (و وسم مثل <kbd>&lt;i&gt;</kbd> <kbd>&lt;b&gt;</kbd> <kbd>&lt;strong&gt;</kbd> <kbd>&lt;br&gt;</kbd> <kbd>&lt;img&gt;</kbd> وما إلى ذلك).
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
        <pre><b style="color:var(--html-color-tags)">&lt;button</b> <span style="color:var(--js-color)">type</span>=<span style="color:orange">"submit"</span><b style="color:var(--html-color-tags)">&gt;</b> content <b style="color:var(--html-color-tags)">&lt;/button&gt;</b></pre>
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
        <pre><b style="color:var(--html-color-tags)">&lt;button</b> <span style="color:var(--js-color)">type</span>=<span style="color:orange">"reset"</span><b style="color:var(--html-color-tags)">&gt;</b> content <b style="color:var(--html-color-tags)">&lt;/button&gt;</b></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">مثال : </div>
    <ul><li> في هاده الحالة تم إنشاء زر عند النقر عليه  لا يحدت أي شيء .</li></ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'html/html34_button.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'html/html34_button 2.png' %}" class="img">
</div>
<h3> 2. السمة type</h3>
<h5> 1. القيمة submit</h5>
<div class="style_divv">
    يمثل الوسم <kbd>&lt;button type="submit"&gt;</kbd> ، الذي يحتوي على قيمة <b>submit</b> في سمة <b>type</b> الخاصة به، زرا يقوم عند الضغط عليه بإرسال النموذج الذي ينتمي إلى الخادم . غالبا ما يتم تمثيل تسمية الزر بمحتوى العنصر.
    عند إستخدام السمة <bdi>type="submit"</bdi> داخل الوسم <b>button</b> تأكد أن تضع العناصر الدي تريد إرسالها إلى الخادم  وسط الوسم <kbd>&lt;form&gt;</kbd> كم تعلمنا في الدرس السابق .<br>
    هاذا النوع من الأزرار دائما يكون وسط الوسم <kbd>&lt;form&gt;</kbd> 
</div>
<div class="sum_exemple_style">
    <div class="mital">مثال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'html/html34_button2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'html/html34_button2 2.png' %}" class="img">
</div>
<h5> 2. القيمة reset </h5>
<div class="style_divv">
    يمثل الوسم <bdi><strong>&lt;button type="rest"&gt;</strong></bdi> ، الذي يحتوي على قيمة <b>reset</b> في سمة <b>type</b>  زر إعادة تعيين. سيؤدي النقر فوق زر إعادة تعيين إلى مسح كافة عناصر الإدخال في النموذج إلى قيمتها الأصلية. يمكن أن يحتوي الزر على نص وصور ورموز وعناصر أخرى.
</div>
<div class="sum_exemple_style">
    <div class="mital">مثال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'html/html34_button3.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'html/html34_button3 2.png' %}" class="img">
</div>
<h3> 2. السمات المستعملة </h3>
<table class="teble table-bordered text-light">
    <thead class="bg-secondary">
        <tr class="text-center fs-5">
            <th> الوصف  </th>
            <th> القيمة </th>
            <th> السمات </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="text-align: right;"> تحديد أن الزر يجب أن يحصل على التركيز تلقائيا عند تحميل الصفحة </td>
            <td> autofocus </td>
            <td> autofocus </td>
        </tr>
        <tr>
            <td style="text-align: right;"> تحديد أنه يجب تعطيل زر </td>
            <td> disabled </td>
            <td> disabled </td>
        </tr>
        <tr>
            <td style="text-align: right;"> تحديد النموذج الذي ينتمي إليه الزر </td>
            <td> form_id </td>
            <td> form</td>
        </tr>
        <tr>
            <td style="text-align: right;"> تحديد مكان إرسال بيانات النموذج عند إرسال نموذج. فقط للنوع "type="submit </td>
            <td> URL </td>
            <td>  formaction</td>
        </tr>
        <tr>
            <td style="text-align: right;"> تحديد كيفية إرسال بيانات النموذج (أي أسلوب HTTP لاستخدامه). فقط للنوع "type="submit</td>
            <td> GET <br> POST</td>
            <td> formmethod </td>
        </tr>
        <tr>
            <td style="text-align: right;"> تعين أنه لا يجب التحقق من صحة (نموذج-بيانات) في الإرسال. فقط للنوع type="submit"</td>
            <td> formnovalidate</td>
            <td> formnovalidate </td>
        </tr>
        <tr>
            <td style="text-align: right;">	تحديد اسم للزر</td>
            <td> name </td>
            <td> name </td>
        </tr>
        <tr>
            <td style="text-align: right;">  تحديد نوع الزر </td>
            <td>button<br>reset<br>submit</td>
            <td>type</td>
        </tr>
        <tr>
            <td style="text-align: right;">  تحديد قيمة أولية للزر يمكن تغييره  </td>
            <td> نص <br>reset<br>submit</td>
            <td>value</td>
        </tr>
    </tbody>
</table>
