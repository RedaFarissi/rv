{% load static %} 
<h1 class="heading-style-js"><u><i>  JavaScript getElementById </i></u></h1>
<div class="style_divv mt-5">
    ترجع طريقة <bdi><b>getElementById()</b></bdi> عنصرًا بقيمة محددة.<br>
    ترجع طريقة <bdi><b>getElementById()</b></bdi> فارغة <small>null</small> إذا لم يكن العنصر موجودًا.<br>
    تعد طريقة <bdi><b>getElementById()</b></bdi> واحدة من أكثر الطرق شيوعًا في <bdi><b>HTML DOM</b></bdi>. يتم استخدامه تقريبًا في كل مرة تريد فيها قراءة عنصر <b>HTML</b> أو تحريره.<br>
    <div class="alert alert-warning my-2">
        <div class="h4">  ملحوظة </div>
        <ul>
            <li> يجب أن يكون أي معرّف فريدًا . </li>
            <li> في حالة وجود عنصرين أو أكثر بنفس المعرف ، تُرجع الدالة <bdi><b>getElementById()</b></bdi> العنصر الأول. ولاكن ذالك سيشكل </li>
        </ul>
    </div>
    <div class="codeStudio alert bg-dark mt-3 pb-0" dir="ltr">
        <pre><span style="color:var(--js-color)">document</span>.<span style="color:gold">getElementById(<span style="color:orange">'id_element'</span>)</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js69_getElementById.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
      <div  class="h2" id="id1"> heading with id1 </div>
      <div  id= "id2"> div with id2</div>
      <input id="id3" type="text" value="input with id3">
      <div> id1<br>div with id2<br>input with id3<br>alert alert-primary   </div>
    </div>
</div>