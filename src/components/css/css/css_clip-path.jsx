{% load static %} 
<h1 class="heading-style-css"><u><i> CSS clip-path  </i></u></h1>
<h3>1- clip-path </h3>
<div class="style_divv">
    تسمح الخاصية <b>clip-path</b>  بقص عنصر إلى شكل أساسي أو إلى مصدر SVG.<br>
    تستقبل الخاصية <b>clip-path</b> عدة قيم ولاكن هناك عدة مواقع تساعدك على تقطيع العناصر  بطريقة التي تريد  . <br>
    هاذه الفقرة سوف تتعلم عن طريقة إستعمال الموقع التالي قم بنقر <a href="https://bennettfeely.com/clippy/" target="_blanck">هنا</a> لذهاب إلى موقع المساعد .
</div>
<div class="sum_exemple_style">
<style>
    .parent{margin: 20px;
        width: 230px;
        height: 230px;
        background-color: darkgrey;
        border-radius: 7px;
        padding: 5px;
    }
    .child_test{ width: 220px; height: 220px; }
    .test{
        background-color: red;
        clip-path: ellipse(50% 30% at 50% 50%); /* at 50% 50% by default */
    }
    .test2{ background-color: green; clip-path: ellipse(50% 30% at 0%); }
    .test3{ background-color: yellow; clip-path: ellipse(50% 30% at 0% 0%);}
    .test4{ background-color:aqua; clip-path:ellipse(100% 30%);}
    .testing{ background-color: red; clip-path: circle();/*50% default*/  }
    .testing2{  background-color: brown;  clip-path: circle(25px at 25px 25px);   }
    .testing3{  background-color:chartreuse;  clip-path: circle(60%);   }
</style>
<div class="mital"> متال  : </div>
    <img src="{% static 'css/css36_clip-path5.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee">
        <div style="display:flex;flex-wrap:wrap;">
            <div class="parent">
                <div class="child_test test"></div>
            </div>   
            <div class="parent">
                <div class="child_test test2"></div>
            </div>
            <div class="parent">
                <div class="child_test test3"></div>
            </div>
            <div class="parent">
                <div class="child_test test4"></div>
            </div>
        </div>  
    </div>
</div>
<div class="mital"> متال 2 : </div>
    <img src="{% static 'css/css36_clip-path6.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee">
        <div style="display:flex;flex-wrap:wrap;">
            <div class="parent">
                <div class="child_test testing"> </div>
            </div>
            <div class="parent">
                <div class="child_test testing2"> </div>
            </div> 
            <div class="parent">
                <div class="child_test testing3"> </div>
            </div>   
        </div>  
    </div>
</div>
<h3>2-  متال  تفسيري للموقع أعلاه : </h3>
<div class="sum_exemple_style">
    <ul><li>عند الدخول إلى الموقع سوف تجد الصفحة أسفله بعد تحديد القص المناسب لك قم بنسخ الأكواد أسفل الصفحة ووضعها داخلل أكواد <b>CSS</b> للعنصر الخاص بك .</li></ul>
    <img src="{% static 'css/css36_clip-path.png' %}" class="img">
</div>
<div class="sum_exemple_style">
<div class="mital"> متال : </div>
    <img src="{% static 'css/css36_clip-path2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'css/css36_clip-path2 2.png' %}" class="img">
</div>
<div class="sum_exemple_style">
<div class="mital"> متال 2 : </div>
    <img src="{% static 'css/css36_clip-path3.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'css/css36_clip-path3 2.png' %}" class="img">
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال 3 : </div>
    <img src="{% static 'css/css36_clip-path4.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'css/css36_clip-path4 2.png' %}" class="img">
</div>