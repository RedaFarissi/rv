{% load static %}
<h1 class="heading-style-html"><u><i> HTML table </i></u></h1>
<h3>1. الوسم table </h3>
<div class="style_divv">
    يستخدم الوسم <kbd>&lt;table&gt;</kbd> في <b>HTML</b> لإنشاء جدول  <br>
    يتكون جدول <b>HTML</b> من الوسم <kbd>&lt;table&gt;</kbd> وعنصر واحد أو أكثر من عناصر <kbd>&lt;tr&gt;</kbd> و  <kbd>&lt;th&gt;</kbd>و <kbd>&lt;td&gt;</kbd>.<br>
    يحدد العنصر <kbd>&lt;tr&gt;</kbd> عدد أسطر الجدول  ، ويحدد العنصر <kbd>&lt;th&gt;</kbd> رأس الجدول ، ويحدد العنصر <kbd>&lt;td&gt;</kbd> أعمدة أو خلية الجدول.<br>
    قد يتضمن جدول <b>HTML</b> أيضًا عناصر <kbd>&lt;caption&gt;</kbd> و <kbd>&lt;colgroup&gt;</kbd> و <kbd>&lt;thead&gt;</kbd> و <kbd>&lt;tfoot&gt;</kbd> و <kbd>&lt;tbody&gt;</kbd>.
    <div class="codeStudio alert bg-dark mt-2" dir="ltr" style="padding-bottom: 0px;">
<pre><b style="color:var(--html-color-tags)">&lt;table&gt;</b>
   <b style="color:var(--html-color-tags);">&lt;tr&gt;</b> 
      <b style="color:var(--html-color-tags)">&lt;th&gt;</b> title <b style="color:var(--html-color-tags)">&lt;/th&gt;</b> 
      <b style="color:var(--html-color-tags)">&lt;th&gt;</b> title <b style="color:var(--html-color-tags)">&lt;/th&gt;</b> 
   <b style="color:var(--html-color-tags)">&lt;/tr&gt;</b> 
   <b style="color:var(--html-color-tags)">&lt;tr&gt;</b> 
      <b style="color:var(--html-color-tags)">&lt;td&gt;</b> content <b style="color:var(--html-color-tags)">&lt;/td&gt;</b>
      <b style="color:var(--html-color-tags)">&lt;td&gt;</b> content <b style="color:var(--html-color-tags)">&lt;/td&gt;</b>
   <b style="color:var(--html-color-tags)">&lt;/tr&gt;</b> 
   <b style="color:var(--html-color-tags)">&lt;tr&gt;</b> 
      <b style="color:var(--html-color-tags)">&lt;td&gt;</b> content <b style="color:var(--html-color-tags)">&lt;/td&gt;</b> 
      <b style="color:var(--html-color-tags)">&lt;td&gt;</b> content <b style="color:var(--html-color-tags)">&lt;/td&gt;</b> 
   <b style="color:var(--html-color-tags)">&lt;/tr&gt;</b> 
<b style="color:var(--html-color-tags)">&lt;/table&gt;</b></pre>
    </div>    
</div>
<style>
    #a_tablE {border: 1px solid black ; border-collapse: collapse;padding: 7px;}
    #a_tablE  th{border: 1px solid black ; border-collapse: collapse;padding: 7px;}
    #a_tablE td{border: 1px solid black ; border-collapse: collapse;padding: 7px;}
</style>
<div class="sum_exemple_style">
    <div class="mital">مثال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'html/html31_table.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee img">
        <table id="a_tablE"><tr> <th>Month</th> <th>Savings</th> </tr>  <tr> <td>January</td> <td>$100</td> </tr></table>
    </div>
</div>
<div class="style_divv">
    <ul>
        <li> في المتال السابق لاحظ أنه  يوجد وسمين <kbd>&lt;tr&gt;</kbd> داخل الوسم <kbd>&lt;table&gt;</kbd>  ونتيجتا لذالك تم إنشاء سطرين داخل الجدول .  </li>
        <li> يستعمل الوسم <kbd>&lt;th&gt;</kbd> غالبا في السطر الأول من الجدول المحدد عن طريق  <kbd>&lt;tr&gt;</kbd> من أجل إعطاء عناويين للجدول يجب كتابة كل عنوان من رأس الجدول داخل وسم <kbd>&lt;th&gt;</kbd> خاص به .  </li>
        <li> يستخدم الوسم <kbd>&lt;td&gt;</kbd> داخل الوسم <kbd>&lt;tr&gt;</kbd> من أجل التفرقة بين أعمدة الجدول . </li>
        <li> يمكن إستعمال <b>CSS</b> لتصميم  الجدول بطريقة التي تريد .  </li>
    </ul>
</div>
<style>
    .b_tablE {border: 1px solid black ; border-collapse: collapse;padding: 7px; padding: 8p 14px;}
    .b_tablE  th {border: 1px solid black ; border-collapse: collapse;padding: 7px; padding: 8p 14px;}
    .b_tablE  td{border: 1px solid black ; border-collapse: collapse;padding: 7px; padding: 8p 14px;}
    .b_tablE th{font-size: 40px; color: green; background-color: brown;}
    .b_tablE td{font-size: 25px;}
    .b_tablE{margin: auto;}
</style>
<div class="sum_exemple_style">
    <div class="mital">مثال 2 : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'html/html31_table2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee img">
        <table class="b_tablE"><tr> <th>Month</th> <th>Savings</th> </tr>  <tr> <td>January</td> <td>$100</td> </tr> <tr> <td>February</td> <td>$80</td> </tr></table>
    </div>
</div>
<h3>2. الوسم caption </h3>

<div class="style_divv">
يحدد الوسم <kbd>&lt;caption&gt;</kbd> شرح الجدول.<br>
يجب إدخال الوسم <kbd>&lt;caption&gt;</kbd> مباشرة بعد علامة <kbd>&lt;table&gt;</kbd><br>
    <div class="alert alert-warning text-black mt-2">
    نصيحة: بشكل افتراضي ، سيتم محاذاة التسمية التوضيحية للجدول إلى المنتصف أعلى الجدول. ومع ذلك ، يمكن استخدام محاذاة النص وجانب التسمية التوضيحية لخصائص CSS لمحاذاة التسمية التوضيحية ووضعها.
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">مثال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'html/html31_table3.png' %}" class="img"> 
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee img">
        <table class="b_tablE" style="margin-left:0px;">
            <caption style="color:black;text-align:center;caption-side:top;font-weight:500"> My Savings</caption>
            <tr> <th>Month</th> <th>Savings</th> </tr>
            <tr> <td style="color:blue;">January</td> <td style="color:blue;">$100</td> </tr> 
        </table>
        <table class="b_tablE" style="margin-left:0px;margin-top:20px;">
            <caption style="color:black;text-align:center;caption-side:bottom;font-weight:500"> My Savings</caption>
            <tr> <th>Month</th> <th>Savings</th> </tr>
            <tr> <td style="color:blue;">January</td> <td style="color:blue;">$100</td> </tr> 
        </table>
    </div>
</div>
<h3>3. الوسم colgroup </h3>
<div class="style_divv">
يحدد الوسم <kbd>&lt;colgroup&gt;</kbd> مجموعة من عمود واحد أو أكثر في جدول للتنسيق.<br>
يعد الوسم <kbd>&lt;colgroup&gt;</kbd> مفيدة لتطبيق الأنماط على أعمدة بأكملها ، بدلاً من تكرار الأنماط لكل خلية ، لكل صف.<br>
ملاحظة: يجب أن تكون العلامة <kbd>&lt;colgroup&gt;</kbd> تابعة لعنصر <kbd>&lt;table&gt;</kbd> ، بعد أي عناصر <kbd>&lt;caption&gt;</kbd> وقبل أي عناصر <kbd>&lt;thead&gt;</kbd> و <kbd>&lt;tbody&gt;</kbd> و <kbd>&lt;tfoot&gt;</kbd> و <kbd>&lt;tr&gt;</kbd>.<br>
نصيحة: لتحديد خصائص مختلفة لعمود داخل <kbd>&lt;colgroup&gt;</kbd> ، استخدم علامة <bdi><strong>&lt;col&gt;</strong></bdi> داخل علامة <kbd>&lt;colgroup&gt;</kbd>.
</div>
<div class="sum_exemple_style">
    <div class="mital">مثال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'html/html31_table4.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee img">
        <h2 style="margin-bottom: 32px;font-weight:790">HTML colgroup tag</h2>
        <table>
            <colgroup> 
                <col span="2" style="background-color:green; color:white;"/>
                <col style="background-color:tomato"/>
            </colgroup>
            <tr> <th>STUDENT      </th> <th>COURSE</th> <th>AGE</th> </tr>
            <tr> <td>Manas Chhabra</td> <td>BCA</td>    <td>19</td> </tr> 
            <tr> <td>Anurag Gupta </td> <td>B.TECH</td> <td>23</td> </tr> 
        </table>
    </div>
</div>
<h3>3. الوسم thead</h3>
<div class="style_divv">
    تُستخدم علامة <kbd>&lt;thead&gt;</kbd> لتجميع محتوى الرأس في جدول <b>HTML</b>.
</div>
<h3>4. الوسم tbody</h3>
<div  class="style_divv">
    تُستخدم علامة <kbd>&lt;tbody&gt;</kbd> لتجميع محتوى النص في جدول <b>HTML</b>.
</div>
<h3>5. الوسم tfoot</h3>
<div  class="style_divv">
    تُستخدم العلامة <kbd>&lt;tfoot&gt;</kbd> لتجميع محتوى السفلي في جدول <b>HTML</b>
</div>
<style>
    #e_table th{ background-color: aqua;border:2px solid gray; font-weight: 800;}
    #e_table td , caption{ border:2px solid gray;font-weight: 500;text-align: center;}
</style>
<div class="sum_exemple_style">
    <div class="mital">مثال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'html/html31_table5.png' %}" class="img"> 
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee img">
        <table id="e_table">
            <caption style="caption-side:top;color:black;"> reda_coder</caption>
            <tr> <th>Month   </th> <th>Savings</th>  </tr>
            <tr> <td>January </td> <td>$100</td>     </tr> 
            <tr> <td>February</td> <td>$80</td>      </tr> 
            <tr> <td>Sum     </td> <td>$180</td>     </tr> 
        </table>
    </div>
</div>
<h3>5. السمات المستعملة </h3>
<h5> السمة colspan </h5>
<div  class="style_divv">
    تحدد السمة <b>colspan</b> عدد الأعمدة التي يجب أن تمتد الخلية .
</div>
<style>
    #f_table{border-collapse: collapse; border: 1px solid black;}
    #f_table th{border-collapse: collapse; border: 2px solid black;padding: 9px 20px;font-weight: 800;}
    #f_table td{border-collapse: collapse; border: 2px solid black;padding: 9px;font-weight: 500;}
</style>
<div class="sum_exemple_style">
    <div class="mital">مثال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'html/html31_table6.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee img">
        <table id="f_table">
            <tr> <th>Month   </th> <th>Savings</th>  </tr>
            <tr> <td>January </td> <td>$100</td>     </tr> 
            <tr> <td>February</td> <td>$80</td>      </tr> 
            <tr> <td colspan="2"> Sum: $180 </td>     </tr> 
        </table>
    </div>
</div>
<h5> السمة rowspan </h5>
<div  class="style_divv">
    تحدد السمة <b>rowspan</b>  عدد الأسطر التي يجب أن تمتد الخلية .
</div>
<div class="sum_exemple_style">
    <div class="mital">مثال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'html/html31_table7.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee img">
        <table id="f_table">
            <tr> <th>Month   </th> <th>Savings</th> <th>Savings for holiday!</th> </tr>
            <tr> <td>January </td> <td>$100   </td> <td rowspan="2">$50</td> </tr> 
            <tr> <td>February</td> <td>$80</td>  </tr> 
        </table>
    </div>
</div>