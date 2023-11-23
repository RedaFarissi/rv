{% load static %} 
<style>
    #iNpuTT:focus{width:60%;background-color:magenta;padding:9px 25px;border:2px wavy darkblue;border-radius:20% 9px;color: white;font-size: xx-large;}
    #iNpuTT2:focus{width:40%;background-color:green;text-align: center;border:0.5px solid darkblue;border-radius: 9px;color: aliceblue;font-size: xx-large;}
    #NTT{width: 80%;height: 20vh;border:3px solid gray;background-color: yellow;}
    #NTT:focus{background-image:linear-gradient(to left , red , green ,blue) ;font-size: larger;color: white; border:9px dashed darkorange;  padding: 20px;margin-left: 9.9%;  }
</style>
<h1 class="heading-style-css"><u><i>  CSS focus ِ </i></u></h1>
<div class="style_divv mt-5">
    تستخدم الخاصية <b>focus</b>  في لغة <b>CSS</b> لإستهداف عنصر عندما يتلقى التركيز ( يتم تنشيطه عند النقر ).<br>
    غالبا ما يتم إستعمال الخاصية <b>focus</b> مع وسوم الإدخال  .  
</div>
<div class="sum_exemple_style">
<div class="mital">متال  :  </div>
<ul><li> أنقر على أزرار الإدخال لفهم بشكل أفضل عن إستخدامات الخاصية focus </li></ul>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css26_focus.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<div class="styleee" style="min-height:15vh ;">
    <input type="text" value="style1 focus" id="iNpuTT">
    <input type="text" value="style2 focus" id="iNpuTT2">
</div>
</div>
<div class="sum_exemple_style">
<div class="mital">متال 2 : </div>
<ul><li> يمكنك أيضا تغيير خصائص CSS بعد إضافة الخاصية focus  </li></ul>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css26_focus2.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<div class="styleee" style="min-height:15vh ;">
    <textarea type="text" id="NTT"> textarea:focus click ici  </textarea>
</div>
</div>