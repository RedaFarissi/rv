{% load static %} 
<div dir='ltr'>
<h1><u><i>  SCSS </i></u></h1>
<ul class='d-flex justify-content-between align-items-center flex-wrap'>
    <li><a href="#scss-first-code"> scss first code </a></li>
    <li><a href="#scss-import">scss import</a></li>
    <li><a href="#scss-extend">scss extend</a></li>
    <li><a href="#scss-function">scss function</a></li>
    <li><a href="#scss-lightness-darken">scss lightness and darken</a></li>
    <li><a href="#scss-mixins">scss mixins</a></li>
    <li><a href="#scss-loop">scss loop</a></li>
</ul>

<br id='scss-first-code'/>
<div class='h2 text-light'>1 - Start using SCSS</div>
<div class="style_divv mt-5">
    To use SCSS without any issue install the extension bottom in Visual Studio Code and close your Visual Studio Code .<br>
</div>
<img src="{% static 'css/scss1.png' %}" class="img">
<div class="style_divv mt-5">
    fo to your folder project right click and "open with visual studio code" .<br>
    Create file "style.scss" after that click on watching se exemple bottom .<br>
    if everything is good in your folder with show two file "style.css" and "style.css.map"
</div>
<img src="{% static 'css/scss2.png' %}" class="img">
<h3>scss code </h3>
<img src="{% static 'css/scss3.png' %}" class="img">
<div class="style_divv mt-5">
    when write code click on watching and CTRL + S to save the "style.css" file change auto .
</div>
<img src="{% static 'css/scss4.png' %}" class="img">
<h4>Exemple 1</h4>
<img src="{% static 'css/scss5.png' %}" class="img">
<img src="{% static 'css/scss6.png' %}" class="img">
<h4>Exemple 2</h4>
<img src="{% static 'css/scss7.png' %}" class="img">
<img src="{% static 'css/scss8.png' %}" class="img">
<div>
<br id='scss-import'/>

<div class='h2 text-light'>2 - import in SCSS</div>
<div class="style_divv mt-3">
    The underscore (_) in a Scss file name is used to indicate that the file is a partial. <br>
    A partial is a Scss file that is not compiled into a CSS file directly, but is instead used to import its variables, mixins, and functions into other Scss files.
    <div class="h3 text-danger"> Create scss file </div>
    <div class="codeStudio alert bg-dark pb-0"><pre>_fileName.scss</pre></div>
    <div class="h3 text-danger"> import scss file </div>
    <div class="codeStudio alert bg-dark pb-0"><pre>@import "fileName"</pre></div>
</div>

<br id='scss-extend'/>
<div class='h2 text-light'>3 - extend in SCSS</div>
<div class="style_divv mt-3">
    We use @extend in SCSS to share a set of CSS properties from one selector to another. This can be useful for several reasons:
    <ul>
        <li> DRY code:@extend allows you to avoid repeating yourself by writing the same CSS for multiple selectors. This can make your code more concise and easier to maintain.</li>
        <li> Inheritance:@extend can be used to create a hierarchy of CSS selectors, where child selectors inherit the styles of their parent selectors. This can be useful for organizing your CSS and making it more reusable. </li>
    </ul>
</div>
<h4>Exemple 1</h4>
<img src="{% static 'css/scss9.png' %}" class="img">
<h4>Exemple 2</h4>
<img src="{% static 'css/scss10.png' %}" class="img">

<br id='scss-function'/>
<div class='h2 text-light'>4 - function in SCSS</div>
<div class="style_divv mt-3">
    Functions are used to compute and return values based on the input parameters. They allow you to perform calculations, manipulate data, or create dynamic styles based on the provided arguments. Functions return a value that can be used in CSS properties.
</div>
<h4>Exemple</h4>
<h5>index.html</h5>
<img src="{% static 'css/scss11.png' %}" class="img">
<h5>_btn.scss</h5>
<img src="{% static 'css/scss12.png' %}" class="img">
<h5>style.scss</h5>
<img src="{% static 'css/scss13.png' %}" class="img">
<h5>RESULT</h5>
<img src="{% static 'css/scss14.png' %}" class="img">
<div class='text-light fs-4 text-center'>On Scroll on button--light</div>
<img src="{% static 'css/scss15.png' %}" class="img">

<br id='scss-lightness-darken'/>
<div class='h2 text-light'>5 - lightness and darken in SCSS</div>
<div class="style_divv mt-5">
    lighten(color, num-from-1-to-100) : function in SCSS does not take a color and add opacity to it. It takes a color and a percentage of lightness, and returns a new color that is lighter by that percentage.
</div>
<img src="{% static 'css/scss16.png' %}" class="img">



<br id='scss-mixins'/>
<div class='h2 text-light'>6 - mixins SCSS</div>
<div class="style_divv mt-5">
    Mixins are primarily used to define reusable blocks of CSS code. <br>
    They allow you to encapsulate a set of styles that can be included (mixed in) at various places in your stylesheet. Mixins are typically used for creating reusable style patterns or sets of properties.<br/>
    Mixins don't return values.
</div>
<img src="{% static 'css/scss11.png' %}" class="img">

<img src="{% static 'css/scss17.png' %}" class="img">
<img src="{% static 'css/scss18.png' %}" class="img">
<img src="{% static 'css/scss19.png' %}" class="img">


<br id='scss-mixins'/>
<div class='h2 text-light'>7 - loop SCSS</div>
<img src="{% static 'css/scss20.png' %}" class="img">












</div>