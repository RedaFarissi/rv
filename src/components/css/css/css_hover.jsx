{% load static %} 
<style>
    #h2 {font-size: xxx-large;}
    #h2:hover {background-color: aquamarine; border-bottom:4px dashed gray;color:violet;}
    .divdiv{font-size: xx-large;font-weight: bolder;}
    .divdiv:hover{ background-color: rgb(23,125,235);color:red;}
    .divdiv2:hover{ background-color: yellow;}
    .divdiv3:hover{background-color: green;color:white;}
    a{color: blue;}
    .ex1{ color:blue}
    div.ex1:hover  {color: red;}
    div.ex2:hover, div.ex2:active {font-size: 150%;}
    div.ex3:hover, div.ex3:active {background: red;}
    div.ex4:hover, div.ex4:active {font-family: monospace;}
    div.ex5:visited, div.ex5:link {text-decoration: none;}
    div.ex5:hover, div.ex5:active {text-decoration: overline;}
    div.styleee{background-color: rgb(235,235,235);padding: 20px 20px;direction:ltr;color:black;}
</style>
<h1 class="heading-style-css"><u><i> CSS hover </i></u></h1>
<div class="style_divv mt-5">
    يتم استخدام الخاصية <b>hover</b>  لتحديد العناصر عند تحريك الماوس فوقها. <br>
    يمكن استخدام <b>hover</b> على جميع العناصر ، وليس فقط على الروابط كل ما عيك فعله هو كتابة إسم ال <b>id</b> أو إسم ل <b>class</b> أو إسم العنصر الدي تريد أن تطبق عليه الخاصية <b>hover</b> تم نقطتين تم تقوم بكتابة الخاصية <b>hover</b>  بعد ذالك تكتب الأوامر التي تريد تنفيدها عند تمرير الماوس أنضر إعلى المتال التالي أسفله .</div>

<div class="mital">متال :  </div>
<ul><li>مرر الماوس فوق الفقرات والعناوين والروابط لمعرفة تأتير ال  hover .</li></ul>
<div class="styleee img" >
    <h2 id="h2">Welcome to My Homepage</h2>
    <div class="intro">
    <div class="divdiv">My name is Reda </div>
    <p  class="divdiv2">I live in Sidi Slimane</p>
    <p  class="divdiv2">My <b>best</b> friend is Reda :p </p>
    </div>
    <div class="divdiv">Links:</div>
    <p class="divdiv2">Here are my favorite websites:</p>
    <a class="divdiv3" href="https://www.w3schools.com" target="_blank">w3schools.com</a>
    <a class="divdiv3" href="https://harmash.com/" target="_blank">harmash.com</a>
    <p class="divdiv2"><b>Note:</b> Mouse over paragraphs, headers, and links to see what is getting a style.</p>
    <p class="divdiv2"><b>Note:</b> For :hover to work for other than links in IE, a DOCTYPE must be declared.</p>
</div>
<div class="sum_exemple_style">
<div class="mital">متال 2:  </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css14_hover.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<div class="styleee" >
    <p>Mouse over the links to see them change layout.</p>
    <p><div style="cursor:pointer;" class="ex1">This link changes color</div></p>
    <p><div style="color:blue;cursor:pointer;" class="ex2">This link changes font-size</div></p>
    <p><div style="color:blue;cursor:pointer;" class="ex3">This link changes background-color</div></p>
    <p><div style="color:blue;cursor:pointer;" class="ex4">This link changes font-family</div></p>
    <p><div style="color:blue;cursor:pointer;" class="ex5">This link changes text-decoration</div></p>
</div>
</div>