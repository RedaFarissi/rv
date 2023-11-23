{% load static %} 
<h1 class="heading-style-css"><u><i>  CSS opacity  </i></u></h1>
<div class="style_divv mt-5">
    تحدد خاصية العتامة مستوى التعتيم للعنصر.<br>
    يصف مستوى العتامة مستوى الشفافية ، حيث 1 غير شفاف على الإطلاق ، و 0.5 يمكن رؤية 50٪ من خلاله ، و 0 شفاف تمامًا .
</div>
<div class="sum_exemple_style">
<div class="mital"> متال :  </div>
<div   style="text-align:center;" dir="ltr">
    <div style="width:30%;float: left ;margin-top:3%;margin-left:1%;margin-right:1%;">
    <img src="{% static 'css/img_forest.jpg' %}" style="opacity:1;width:100%;"/>
        <h4 style="color:azure;border:1px solid gray;margin-top:-2px;padding:8px 0px;background-color:rgb(30,30,30);">opacity : 1 </h4>
    </div>
    <div style="width:30%;float: left ;margin-top:3%;margin-left:1%;margin-right:1%;">
        <img src="{% static 'css/img_forest.jpg' %}" style="opacity:0.6;width:100%;"/>
        <h4 style="color:azure;border:1px solid gray;margin-top:-2px;padding:8px 0px;background-color:rgb(30,30,30);">opacity : 0.6 </h4>
    </div>
    <div style="width:30%;float:left ;margin-top:3%;margin-left:1%;margin-right:1%;"> 
        <img src="{% static 'css/img_forest.jpg' %}" style="opacity:0.3;width:100%;"/>
        <h4 style="color:azure;border:1px solid gray;margin-top:-2px;padding:8px 0px;background-color:rgb(30,30,30);">opacity : 0.3 </h4>
    </div>
</div>
</div>
<br style="clear:both;">
<div class="sum_exemple_style">
<div class="mital"> متال 2 :  </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css13_opacity.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css13_opacity 2.png' %}" class="img">
</div>