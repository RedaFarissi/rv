{% load static %} 
<style>
    #id_anima{
        line-height: 85px;text-align: center;border:2px solid white;border-radius: 8px;width: 90px;height: 90px;background-color: black;animation : exemple 9s infinite ease;text-shadow: 1px 1px blue;box-shadow: 2px 2px 10px gray;font-size: xx-large;
    }
    @keyframes exemple {
        0%{background-color: red;position: absolute; left:2%;transform: rotate(0deg);}
        50%{background-color: green;position: absolute; left:80%;transform: rotate(25deg);}
        100%{background-color: red;position: absolute; left:2%;transform: rotate(360deg)}
    }
    #id_anima_key{
        width: 200px; height: 200px; background-color: black;
        animation-name : reda;animation-duration :9s;animation-iteration-count: infinite;
    }
    @keyframes reda {
        from{background-color: black;}to{background-color: green;}
    }
    #key_exemple{
        margin: auto;width: 200px;height: 200px;background-color: black; border: 5px solid blue;
        animation-name : name_function;animation-duration : 9s; animation-iteration-count: infinite;
    }
    @keyframes name_function {
        0%{  background-color: black;}25%{ background-color: blue;}50%{ background-color: darkgreen;}
        75%{ background-color: yellow;}100%{background-color: darkorange}
    }
    #key_exemple2{
        margin: auto;width: 200px;height: 200px;background-color: black; border: 5px solid blue;
        animation-name : name_function;animation-duration : 9s; animation-iteration-count: infinite;
    }
    #key_exemple3{
        margin: auto;height:9vh;background-color: black;border: 5px solid blue;font-size: x-large;
        animation-name : name_function3;
        animation-duration : 6s; 
        animation-delay : 3s;
        animation-iteration-count: infinite; 
    }
    @keyframes name_function3 {
        0% { border-radius:50% 9px;background-color: magenta;color: gray;width: 25%;}
        25%{ border-radius:9px;background-color: black;color:aqua;width: 47%;}
        50%{ border-radius:20px 20px 5% 20px;background-color: blueviolet ;color:orange;width: 70%;}
        75%{ border-radius:9px;background-color: white ;color:blue;width: 47%;}
        100%{border-radius:50% 9px;background-color: rgb(235,120,90);color:greenyellow;width: 25%;}
    }
    #DIV_animation{
            width: 15%;
            height: 15vh;
            background-color: red;
            border: 5px solid blue;
            animation-name : name_function4;
            animation-duration : 6s; 
            animation-iteration-count : 2; 
    }
    @keyframes name_function4 {
        0% { position:absolute; top:0%; left:0%;}25%{position:absolute; top:0%; left:85%;}
        50%{ position:absolute; top:34vh; left:85%;}
        75%{ position:absolute; top:34vh; left:0%;}100%{position:absolute; top:0%; left:0%;}
    }
    #DIV_animation2{
        border-radius: 50%;
        width: 15%;height: 15%;
        background-color: goldenrod; border: 2px solid blue;
        animation-name:name_function5;
        animation-duration:2s;
        animation-iteration-count:infinite;
    }
    @keyframes name_function5 {
        0% { position:absolute; top:0%; left:0%;background-color: red;}25%{ position:absolute; top:0%; left:85%;background-color: green;}
        50%{ position:absolute; top:34vh;left:85%;background-color: orange;}
        75%{ position:absolute; top:34vh;left:0%;background-color: orangered;}100%{position:absolute; top:0%; left:0%;background-color: red;}
    }
    section{border: 6px solid black;}
    .div {
        width: 20%;height:70px;text-align: center;
        border:2px solid green;background: red;color:white;
        font-weight: bold;font-size: xx-large;
        animation: mymove 5s infinite;
    }
    @keyframes mymove {
        from{margin-left: 0%;}
        to{  margin-left: 80%;}
    }
    #DIV_animatioN3{
        border-radius: 50%;
        width: 15% ;
        height: 15% ;
        background-color: goldenrod ; 
        border: 2px solid blue ; 
        animation : name_fonctioN 2s ;
    }
    @keyframes name_fonctionN {
        0% {  position:absolute;top:0%  ;left:0% ;background-color: red;}
        50%{  position:absolute;top:0%  ;left:85%;background-color: green;}
        100%{ position:absolute;top:85%;left:85% ;background-color: orange;}
    }
    #playState{
        border-radius: 50%;
        width: 15%;height: 15%;
        background-color: greenyellow;
        border: 2px solid orchid;
        animation : playState 5s infinite;
    }
    @keyframes playState {
        0% { position:absolute; top:0%; left:0%;background-color: red;}
        12.5%{ position:absolute; top:42.5%; left:42.5%;background-color: green;}
        25%{ position:absolute; top:0%; left:85%;background-color: green;}
        32.5%{ position:absolute; top:42.5%; left:42.5%;background-color: green;}
        50%{ position:absolute; top:85%;left:85%;background-color: green;}
        62.5%{ position:absolute; top:42.5%; left:42.5%;background-color: orange;}
        80%{ position:absolute; top:85%;left:0%;background-color: orange;}
        92.5%{ position:absolute; top:42.5%; left:42.5%;background-color: orange;}
        100%{ position:absolute; top:0%; left:0%;background-color: orange;}
    }
    #DIV_animatio4{
        border-radius: 50%;
        width: 15%;height: 15%;
        background-color: goldenrod; border: 2px solid blue;
    }
    @keyframes name_function9 {
        0% { position:absolute; top:0%; left:0%;background-color: red;}
        50%{ position:absolute; top:0%; left:85%;background-color: green;}
        100%{ position:absolute; top:34vh;left:85%;background-color: orange;}
    }
</style>
<h1 class="heading-style-css"><u><i> CSS animation </i></u></h1>
<div class="style_divv">
    يسمح <b>CSS</b> بالرسوم المتحركة لعناصر <b>HTML</b> دون استخدام <b>JavaScript</b> أو <b>Flash</b> وذالك بستعمال الخاصية <b>animation</b> . <br>
    تتيح الخاصية <b>animation</b> تغيير العنصر تدريجيًا من نمط إلى آخر.<br>
    يمكنك تغيير أي عدد تريده من خصائص <b>CSS</b> ، بقدر ما تريد.<br>
    لاستخدام الرسوم المتحركة لـ <b>CSS</b> ، يجب عليك أولاً تحديد بعض الإطارات الرئيسية للخاصية <b>animation</b> .
    تحتوي الإطارات الرئيسية على الأنماط التي سيتوفر عليها العنصر في أوقات معينة .<br>
    ستتعرف في هذا الفصل على الخصائص التالية:
    <ul dir="ltr">
        <li><bdi><b>@keyframes </b></bdi>.</li>
        <li><b>animation-name </b>.</li>
        <li><b>animation-duration </b>.</li>
        <li><b>animation-delay </b>.</li>
        <li><b>animation-iteration-count </b>.</li>
        <li><b>animation-direction </b>.</li>
        <li><b>animation-timing-function </b>.</li>
        <li><b> animation-play-state </b></li>
        <li><b>animation-fill-mode </b>.</li>
        <li><b>animation </b>.</li>
    </ul>
</div>
<div class="mital"> متال :</div>
<div dir="ltr" style="height: 50px;position:relative;margin-top:50px;margin-bottom:65px;">
    <div id="id_anima"> a </div>
</div>
<h3>1. الدالة @keyframes  </h3>
<div class="style_divv">
    تستخدم الدالة <bdi><b>@keyframes</b></bdi> كدالة لإعطاء تعليمات وخصائص <b>CSS</b> ويكون ذالك بعد تحديد الخاصية <b>animation-name</b> والخاصية <b>animation-duration</b> على الأقل .<br>
    يجب إعطاء نفس الإسم الذي قمة بتحديده داخل الخاصية <b>animation-name</b> لدالة <bdi><b>@keyframes</b></bdi>  .<br>
    من أجل إعطاء خصائص <b>CSS</b> لدالة <bdi><b>@keyframes</b></bdi> توجد طريقتين :
    <ul>
        <li>الطريفة الأولى  بستعمال <b>form</b> و <b>to</b> . أنضر المتال 1 </li>
        <li> الطريفة التانية  بستعمال النسبة المئوية  . أنضر المتال 2 </li>
    </ul>
</div>
<div class="sum_exemple_style">
<div class="mital"> متال 1 :</div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css34_animation.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<div class="styleee" dir="ltr">
    <div id="id_anima_key">  </div>
</div>
</div>
<div class="sum_exemple_style">
<div class="mital"> متال 2 :</div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css34_animation2.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<div class="styleee" dir="ltr">
    <div id="key_exemple"></div>
</div>
</div>
<h3>2. الخاصية animation-name و الخاصية animation-duration </h3>
<div class="style_divv">
    <ul><li> تستخدم الخاصية <b>animation-name</b> من أجل إعطاء إسم لدالة <bdi><b>@keyframes</b></bdi> وهي خاصية أساسية لستعمال التحريك بستعمال <b>animation</b> يمكنك تحديد إسم بنفسك .<br><br></li></ul>
    <ul><li> تستخدم الخاصية <b>animation-duration</b> من أجل تحديد المدة الذي سيتم تنفيد التحريك على العنصر وهي خاصية أساسية لستعمال التحريك بستعمال <b>animation</b> يمكنك تحديد المدة بستعمال التواني .<br>
</li></ul> 
</div>
<div class="sum_exemple_style">
<div class="mital"> متال :</div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css34_animation3.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<div class="styleee" dir="ltr">
    <div id="key_exemple2"></div>
</div>
</div>
<h3>3. الخاصية animation-delay </h3>
<div class="style_divv">
    تحدد الخاصية <b>Animation-delay</b> (تأجيل الحركة) تأخيرًا لبدء الرسم المتحرك. تحدد مدة الإنتضار بتانية وذالك بكتابة  <b>s</b> بعد عدد تواني .<br>
    المثال أسفله له تأخير لمدة 3 تواني قبل بدء تحريك 
</div>
<div class="sum_exemple_style">
<div class="mital"> متال :</div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css34_animation4.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<div class="styleee" dir="ltr">
    <input type="text" id="key_exemple3" value="input"/>
</div>
</div>
<h3>4. الخاصية animation-iteration-count</h3>
<div class="style_divv">
    تستخدم الخاصية <b>animation-iteration-count</b>  من أجل تحديد عدد مرات تكرار التحريك .<br>
    تستقبل الخاصية  رقم صحيح طبيعي والذي يمتل عدد مرات التكرار أو القيمة <b>infinite</b> والتي تستعمل من أجل التكرار المستمر .<br><br>
    <b> ملاحضة : </b>  جميع الأمتلة السبقة تم إضافة لها الخاصية <b>animation-iteration-count</b> مع القيمة <b>infinite</b> وذالك خصيصا من أجلك لمشاهدة تأتير الخاصية <b>animation</b> بوضوح .
</div>
<div class="sum_exemple_style">
<div class="mital"> متال :</div>
<ul><li>عند تحديت الصفحة  سيتم تنفيد التحريك مرتين فقط لأننا قمنا بإعطاء الخاصية <b>animation-iteration-count</b> القيمة 2 </li></ul>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css34_animation5.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<div class="styleee" style="height: 50vh;padding:0;position:relative;border:3px solid blue"> 
        <div id="DIV_animation"> </div>
</div>
</div>
<h3>5. الخاصية animation-direction </h3>
<div class="style_divv">
    تحدد خاصية <b>animation-direction</b> ما إذا كان يجب تشغيل الرسم المتحرك للأمام أو للخلف أو في دورات بديلة .<br>
    تقبل الخاصية <b>animation-direction</b> القيم التالية :
    <ul dir="ltr">
        <li> animation-direction: <b>normal</b></li>
        <li> animation-direction: <b>alternate</b></li>
        <li> animation-direction: <b>reverse</b></li>
        <li> animation-direction: <b>alternate-reverse</b></li>
    </ul>
</div>

<div class="mital"> متال :</div>
<style>
    .animation_exemple{
        display: flex; justify-content: space-around; background-color:azure;
    }
    .input_radio_box{
        box-shadow:5px 5px 20px rgba(0 0 0/30%); align-self:center; width: 40%; min-height: 400px;
    }
    .animation{
        width: 40%; box-shadow:3px 3px 20px rgba(0 0 0 /30%); min-height:400px;
    }
    @media only  screen and (max-width:903px) {
        .animation_exemple{ flex-direction: column; }
        .input_radio_box{ width: 100%;  margin-bottom: 27px; min-height: 90px;}
        .Code{  margin-bottom: 20px; }
        .animation{ width: 100%;  }
        .div{ font-size: 18px;}
    }
</style>
<ul><li>قم بنقر على الأزرار أسفله لتغيير قيمة الخاصية <b>animation-direction</b> للفهم بشكل أفضل </li></ul>
<div  class="alert p-4 rounded m-auto border border-primary border-2 text-dark animation_exemple" dir="ltr">
  <div  class="border border-secondary rounded bg-light p-3 input_radio_box">
    <div class="h3">  animation-direction : </div>
    <input type="radio" name="dir_anima" onclick="animatioN_direction(this.value)" value="normal" id="normal" /> normal <br>
    <input type="radio" name="dir_anima" onclick="animatioN_direction(this.value)" value="alternate"/> alternate <br>
    <input type="radio" name="dir_anima" onclick="animatioN_direction(this.value)" value="reverse"/>  reverse <br>
    <input type="radio" name="dir_anima" onclick="animatioN_direction(this.value)" value="alternate-reverse"/> alternate-reverse <br>
    <div id="Code" class="mt-4 w-100">
        <div class="h3"> Code: </div>
        <div class="border py-2 ps-2 w-100" >
            <span style="font-weight: 500;">animation-direction : </span> <span id="animation-direction-result" style="font-weight: 500"></span>
        </div>
    </div>
  </div>
  <div  style="background-color:azure;position:relative;" class="border bg-light border-secondary animation animation">
      <div class="h3"> Result: </div>
      <div id="DIV_animation2"></div>
  </div>
</div>
<h3>6. الخاصية animation-timing-function  </h3>
<div class="style_divv">
    تحدد الخاصية <b>animation-timing-function</b>  كيفية تقدم الحركة خلال مدة كل دورة . تقبل الخاصية القيم التالي :<br><br>
    <ul dir="ltr">
        <li> animation-timing-function : <b>linear</b></li>
        <li> animation-timing-function : <b>ease</b></li>
        <li> animation-timing-function : <b>ease-in</b></li>
        <li> animation-timing-function : <b>ease-out</b></li>
        <li> animation-timing-function : <b>ease-in-out</b></li>
    </ul>
</div>
<div class="sum_exemple_style">
<div class="mital"> متال :</div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css34_animation6.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<div class="styleee">
    <section>
       <div class="div" style="animation-timing-function:linear;">  linear </div>
       <div class="div" style="animation-timing-function:ease"> ease </div>
       <div class="div" style="animation-timing-function:ease-in"> ease-in </div>
       <div class="div" style="animation-timing-function:ease-out"> ease-out </div>
       <div class="div" style="animation-timing-function:ease-in-out"> ease-in-out </div>
    </section>
</div>
</div>
<h3>7. الخاصية animation-play-state </h3>
<div class="style_divv">
    تحدد خاصية <b>animation-play-state</b> ما إذا كانت الرسوم المتحركة قيد التشغيل أو متوقفة مؤقتًا .  تستقبل الخاصية <b>animation-play-state</b> قيمتين وهي كالتالي :<br>
    <ul>
        <li> <b>paused</b> : تستخدم لإقاف التحريك .</li>
        <li> <b>running</b> : تستخدم لإعادة تشغيل التحريك  .</li>
    </ul>
    <b>ملاحظة</b>: استخدم هذه الخاصية في <b>JavaScript</b> لإيقاف رسم متحرك مؤقتًا في منتصف الدورة.
</div>
<div class="mital"> متال : </div>
<ul><li>قم بنقر على الأزرار أسفله لتغيير قيمة الخاصية <b>animation-play-state</b> للفهم بشكل أفضل </li></ul>
<div class="alert p-4 rounded m-auto border border-primary border-2 text-dark animation_exemple" dir="ltr">
    <div class="border border-secondary rounded bg-light p-3 input_radio_box">
        <div class="h2">  animation-play-state : </div>
        <input type="radio" name="ani" onclick="animation_play_state(this.value)" value="running"  id="play_state"/> running <br>  
        <input type="radio" name="ani" onclick="animation_play_state(this.value)" value="paused" /> paused <br>
        <div id="Code" class="mt-4 w-100">
            <div class="h3"> Code: </div>
            <div class="border py-2 ps-2 w-100" >
                <span style="font-weight: 500;">animation-play-state : </span> <span id="animation-play-state-result" style="font-weight: 500"></span>
            </div>
        </div>
    </div>
    <div style="background-color:azure;position:relative;" class="border bg-light border-secondary animation animation">
        <div class="h2"> Result: </div>
        <div id="playState"></div>
    </div>
</div>
<h3>8. الخاصية animation-fill-mode </h3>
<div class="style_divv">
    تحدد الخاصية <b>animation-fill-mode</b>  مكان إستقرار عنصر <b>HTML</b> عندما ينتهي تأتير <b>animation</b> .<br>
    لا تؤثر الرسوم المتحركة لـ <b>CSS</b> على العنصر قبل تشغيل أول إطار رئيسي أو بعد تشغيل آخر إطار رئيسي .<br><br>
    تقبل الخاصية <b>animation-direction</b> القيم التالية :
    <ul dir="ltr">
        <li> animation-fill-mode : <b>none</b></li>
        <li> animation-fill-mode : <b>forwards</b></li>
        <li> animation-fill-mode : <b>backwards</b></li>
        <li> animation-fill-mode : <b>both</b></li>
    </ul>
</div>
<div class="mital"> متال :</div>
<ul>
    <li>قم بنقر على الأزرار أسفله لتغيير قيمة الخاصية <b>animation-fill-mode</b> للفهم بشكل أفضل </li>
</ul>
<div class="alert p-3 rounded m-auto border border-primary border-2 text-dark animation_exemple" dir="ltr">
    <div class="border border-secondary rounded bg-light p-3 input_radio_box">
        <div class="h2">  animation-fill-mode : </div>
        <form  method="post">
            <input type="radio" name="aniFM" onclick="animation_fill_mode(this.value)" value="none" id="cc_non"/> none <br>
            <input type="radio" name="aniFM" onclick="animation_fill_mode(this.value)" value="forwards"/> forwards <br>
            <input type="radio" name="aniFM" onclick="animation_fill_mode(this.value)" value="backwards"/>  backwards<br>
            <input type="radio" name="aniFM" onclick="animation_fill_mode(this.value)" value="both"/> both <br>
        </form>
        <div id="Code" class="mt-4 w-100">
            <div class="h3"> Code: </div>
            <div class="border py-2 ps-2 w-100" >
                <span style="font-weight: 500;">animation-fill-mode : </span> <span id="animation-fill-mode-result" style="font-weight: 500"></span>
            </div>
        </div>
    </div>
    <div style="background-color:azure;position:relative;" class="border bg-light border-secondary animation animation">
        <div class="h2"> Result: </div>
        <div id="DIV_animatio4"></div>
    </div>
</div>
<script>
    normal.click()
    cc_non.click()
    play_state.click()
    function animatioN_direction(value){
        DIV_animation2.style.animationDirection = value
        document.getElementById("animation-direction-result").innerHTML = value + ";";
    }
    function animation_play_state(value){
        playState.style.animationPlayState = value
        document.getElementById("animation-play-state-result").innerHTML = value +";";
    }
    function animation_fill_mode(value){
        DIV_animatio4.style.animation = ""
        DIV_animatio4.style.animation = "name_function9 2s"
        DIV_animatio4.style.animationFillMode = value
        document.getElementById("animation-fill-mode-result").innerHTML = value +";"
    }
</script>