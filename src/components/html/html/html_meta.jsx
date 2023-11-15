{% load static %}
<h1 class="heading-style-html"><u><i> HTML meta </i></u></h1>
<h3>1. تعريف الوسم meta </h3>
<div class="style_divv">
    يعرف الوسم <kbd>&lt;meta&gt;</kbd> بيانات التعريف حول مستند HTML. بيانات التعريف هي بيانات (معلومات) حول البيانات .<br>
    الوسم <kbd>&lt;meta&gt;</kbd> دائما يكون داخل الوسم <kbd>&lt;head&gt;</kbd> ، وعادة ما تستخدم لتحديد مجموعة الأحرف ووصف الصفحة والكلمات الرئيسية ومؤلف المستند وإعدادات منفذ العرض.
    لن يتم عرض بيانات التعريف على الصفحة، ولكن يمكن تحليل الجهاز.<br>
    يتم استخدام بيانات التعريف من قبل المتصفحات (كيفية عرض المحتوى أو إعادة تحميل الصفحة) ومحركات البحث (الكلمات الرئيسية) وخدمات الويب الأخرى. وهووسم فردي يحتوي على السمات انضر الأمتلة التوضيحية أسفله .
</div>
<h3>2. السمة charset </h3>
<div class="style_divv">
    السمة <b>charset</b> تحدد ترميز الأحرف لمستند <b>HTML</b>.
    تشجع مواصفات <b>HTML5</b> مطوري الويب على استخدام مجموعة أحرف <b>UTF-8</b> ، والتي تغطي جميع الشخصيات والرموز تقريبا في العالم.<br>
    السمة <b>charset</b> هي  سمة مهمة يجب إستخدامها دائما . <br>
    <div class="codeStudio alert bg-dark mt-2" dir="ltr" style="padding-bottom:0px">    
        <pre><b style="color:var(--html-color-tags)">&lt;meta</b> <span style="color:var(--js-color)">charset</span>=<span style="color:orange">"UTF-8"</span><span style="color:var(--js-color)">&gt;</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
<h4 style="color:green"> طريقة الإستعمال  </h4>
<img src="{% static 'html/html42_meta.png' %}" class="img">
</div>
<h3>3. السمة name </h3>
<div class="style_divv">
السمة <b>name</b> تحديد اسم بيانات التعريف.<br>
تحدد سمة <b>name</b> اسما لمعلومات / قيمة لأسمة <b>content</b> .
</div>
<h5>1.  الكلمات الرئيسية لمحركات البحث </h5>
<div class="style_divv">
    لتحديد الكلمات الرئيسية  لمحركات البحث يجب إعطاء السمة  <b>name</b>  القيمة <b>keywords</b> تم داخل السمة <b>content</b> قم بكتابة جميع الكلمات التي قد تساعد موقعك مع محركات البحت .
    <div class="codeStudio alert bg-dark mt-2" dir="ltr" style="padding-bottom:0px">    
        <pre><b style="color:var(--html-color-tags)">&lt;meta</b> <span style="color:var(--js-color)">name</span>=<span style="color:orange">"keywords"</span> <span style="color:var(--js-color)">content</span>=<span style="color:orange"><bdi>"كلمات البحت"</bdi></span><span style="color:var(--html-color-tags8)">&gt;</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
<h4 style="color:green"> طريقة الإستعمال  </h4>
<img src="{% static 'html/html42_meta2.png' %}" class="img">
</div>
<h5>2.  وصف صفحة الويب الخاصة  </h5>
<div class="style_divv">
    لتحديد وصف صفحة الويب الخاصة بك يجب إعطاء السمة  <b>name</b>  القيمة <b>description</b> تم داخل السمة <b>content</b> قم بكتابة تعريف وصف صفحة الويب الخاصة بك .
    <div class="codeStudio alert bg-dark mt-2" dir="ltr" style="padding-bottom:0px">    
        <pre><b style="color:var(--html-color-tags)">&lt;meta</b> <span style="color:var(--js-color)">name</span>=<span style="color:orange">"description"</span> <span style="color:var(--js-color)">content</span>=<span style="color:orange"><bdi>"وصف صفحة الويب"</bdi></span><span style="color:var(--html-color-tags)">&gt;</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
<h4 style="color:green"> طريقة الإستعمال  </h4>
<img src="{% static 'html/html42_meta3.png' %}" class="img">
</div>
<h5>3.  مؤلف صفحة </h5>
<div class="style_divv">
    لتحديد مؤلف صفحة يجب إعطاء السمة  <b>name</b>  القيمة <b>author</b> تم داخل السمة <b>content</b> قم بكتابة إسمك   .
    <div class="codeStudio alert bg-dark mt-2" dir="ltr" style="padding-bottom:0px">    
        <pre><b style="color:var(--html-color-tags)">&lt;meta</b> <span style="color:var(--js-color)">name</span>=<span style="color:orange">"author"</span> <span style="color:var(--js-color)">content</span>=<span style="color:orange"><bdi>"إسم مؤلف الصفحة"</bdi></span><span style="color:var(--html-color-tags)">&gt;</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
<h4 style="color:green"> طريقة الإستعمال  </h4>
<img src="{% static 'html/html42_meta4.png' %}" class="img">
</div>
<h5>4.  موقع متجاوب مع جميع الأجهزة </h5>
<div class="style_divv">
    لجعل موقعك متجاوب مع جميع الأجهزة يجب إعطاء السمة  <b>name</b> القيمة <b>viewport</b> تم داخل السمة <b>content</b> قم بكتابة <b>width=device-width, initial-scale=1.0</b>   .
    <div class="codeStudio alert bg-dark mt-2" dir="ltr" style="padding-bottom:0px">    
        <pre><b style="color:var(--html-color-tags)">&lt;meta</b> <span style="color:var(--js-color)">name</span>=<span style="color:orange">"viewport"</span> <span style="color:var(--js-color)">content</span>=<span style="color:orange"><bdi>"إسم مؤلف الصفحة"</bdi></span><span style="color:var(--html-color-tags)">&gt;</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
<h4 style="color:green"> طريقة الإستعمال  </h4>
<img src="{% static 'html/html42_meta5.png' %}" class="img">
</div>
<h5>4.   تحديد كيف يتم عرض موقعك في فيس بوك </h5>
<div class="style_divv">
    تستخدم الخاصية <b>meta</b> مع السمة <b><bdi>property="og:title"</bdi></b> لتحديد عنوان لموقعك عند مشاركته على فيس بوك . يتم تحدي العناون داخل الخاصية <b>content</b> 
    <div class="codeStudio alert bg-dark mt-2" dir="ltr" style="padding-bottom:0px">    
        <pre><b style="color:var(--html-color-tags)">&lt;meta</b> <span style="color:var(--js-color)">property</span>=<span style="color:orange">"og:title"</span> <span style="color:var(--js-color)">content</span>=<span style="color:orange"><bdi>"عنون صفحتك"</bdi></span><span style="color:var(--html-color-tags)">&gt;</span></pre>
    </div>
    تستخدم الخاصية <b>meta</b> مع السمة <b><bdi>property="og:discription"</bdi></b> لتحديد وصف لموقعك عند مشاركته على فيس بوك . يتم تحديد الوصف داخل الخاصية <b>content</b> 
    <div class="codeStudio alert bg-dark mt-2" dir="ltr" style="padding-bottom:0px">    
        <pre><b style="color:var(--html-color-tags)">&lt;meta</b> <span style="color:var(--js-color)">property</span>=<span style="color:orange">"og:discription"</span> <span style="color:var(--js-color)">content</span>=<span style="color:orange"><bdi>"وصف الصورة"</bdi></span><span style="color:var(--html-color-tags)">&gt;</span></pre>
    </div>
    تستخدم الخاصية <b>meta</b> مع السمة <b><bdi>property="og:image"</bdi></b> لتحديد صورة لموقعك عند مشاركته على فيس بوك . يتم تحديد مسار الصورة تم  نوعها داخل الخاصية <b>content</b> 
    <div class="codeStudio alert bg-dark mt-2" dir="ltr" style="padding-bottom:0px">    
        <pre><b style="color:var(--html-color-tags)">&lt;meta</b> <span style="color:var(--js-color)">property</span>=<span style="color:orange">"og:image"</span> <span style="color:var(--js-color)">content</span>=<span style="color:orange"><bdi>"إسم الصورة.نوع"</bdi></span><span style="color:var(--html-color-tags)">&gt;</span></pre>
    </div>
    تستخدم الخاصية <b>meta</b> مع السمة <b><bdi>property="og:width"</bdi></b> لتحديد عرض الصورة الذي قمة بتحديدها لموقعك عند مشاركته على فيس بوك . يتم تحديد عرض داخل الخاصية <b>content</b> 
    <div class="codeStudio alert bg-dark mt-2" dir="ltr" style="padding-bottom:0px">    
        <pre><b style="color:var(--html-color-tags)">&lt;meta</b> <span style="color:var(--js-color)">property</span>=<span style="color:orange">"og:width"</span> <span style="color:var(--js-color)">content</span>=<span style="color:orange"><bdi>"تحديد عرض الصورة "</bdi></span><span style="color:var(--html-color-tags)">&gt;</span></pre>
    </div>
    تستخدم الخاصية <b>meta</b> مع السمة <b><bdi>property="og:height"</bdi></b> لتحديد طول الصورة الذي قمة بتحديدها لموقعك عند مشاركته على فيس بوك . يتم تحديد الطول داخل الخاصية <b>content</b> 
    <div class="codeStudio alert bg-dark mt-2" dir="ltr" style="padding-bottom:0px">    
        <pre><b style="color:var(--html-color-tags)">&lt;meta</b> <span style="color:var(--js-color)">property</span>=<span style="color:orange">"og:height"</span> <span style="color:var(--js-color)">content</span>=<span style="color:orange"><bdi>"تحديد طول الصورة"</bdi></span><span style="color:var(--html-color-tags)">&gt;</span></pre>
    </div>
</div>
