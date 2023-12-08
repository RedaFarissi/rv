{% load static %} 
<style>
    /* Safari */  :-webkit-full-screen{ background-color: yellow; }
    /* IE11 syntax */ :-ms-fullscreen { background-color: yellow; }
    /* Standard syntax */ :fullscreen { background-color: yellow; }
</style>
<h1 className="heading-style-js"><u><i>  JavaScript requestFullscreen </i></u></h1>
<div className="style_divv mt-5">
    فتح طريقة <bdi><b>requestFullscreen()</b></bdi> عنصرًا في وضع ملء الشاشة.<br/>
    استخدم طريقة <bdi><b>exitFullscreen()</b></bdi> لإلغاء وضع ملء الشاشة.<br/>
    <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:var(--js-color)">HTMLElementObject</span>.<span style="color:var(--js-color)">requestFullscreen()</span></pre>  
    </div>
</div>
<div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
    <b className="d-block my-3 text-danger"> Open fullscreen </b>
    <pre><span style="color:var(--html-color-tags)">var</span> elem = <span style="color:var(--js-color)">document</span>.<span style="color:var(--js-color)">decumentElement</span>
<span style="color:var(--html-color-tags)">function</span> <span style="color:gold">function openFullscreen()</span> {
    <span style="color:var(--violet-color)">if</span> (<span style="color:var(--js-color)">elem</span>.<span style="color:var(--js-color)">requestFullscreen</span>) {
        <span style="color:var(--js-color)">elem</span>.<span style="color:gold">requestFullscreen()</span>;
    }<span style="color:var(--violet-color)">else if</span> (<span style="color:var(--js-color)">elem</span>.<span style="color:var(--js-color)">webkitRequestFullscreen</span>) { <span style="color:green">/* Safari */</span>
        <span style="color:var(--js-color)">elem</span>.<span style="color:gold">webkitRequestFullscreen()</span>;
    }<span style="color:var(--violet-color)">else if</span> (<span style="color:var(--js-color)">elem</span>.<span style="color:var(--js-color)">msRequestFullscreen</span>) {<span style="color:green"> /* IE11 */</span>
        <span style="color:var(--js-color)">elem</span>.<span style="color:gold">msRequestFullscreen()</span>;
    }
}</pre>
</div>

<div className="sum_exemple_style">
    <div className="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js121_exitFullscreen.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee">      
        <p>Click on the "Open Fullscreen" button to open this page in fullscreen mode.Close it by either clicking the "Esc" key on your keyboard, or with the"Close Fullscreen" button.</p>
        <button className="btn btn-outline-success" onclick="openFullscreen();">Open Fullscreen</button>
        <button className="btn btn-outline-danger" onclick="closeFullscreen();">Close Fullscreen</button>   
    </div>
</div>
<ul className="mt-5">
    <li>يمكنك استخدام CSS لتصميم الصفحة عندما تكون في وضع ملء الشاشة :</li>
</ul>
<div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
<b className="d-block my-3 text-danger">CSS Fullscreen</b>
<pre><span style="color:green;">/* Safari CSS */</span>
<span style="color:gold">:-webkit-full-screen{</span>
    <span style="color:green;">/*css code*/</span>
<span style="color:gold">}</span>


<span style="color:green;">/* IE11 syntax */</span>
<span style="color:gold">:-ms-fullscreen {</span>
    <span style="color:green;">/*css code*/</span>
<span style="color:gold">}</span>


<span style="color:green;">/* Standard syntax */</span>
<span style="color:gold">:fullscreen {</span>
    <span style="color:green;">/*css code*/</span>
<span style="color:gold">}</span></pre>  
</div>
<script>
    var elem = document.documentElement;
    function openFullscreen() {
      if (elem.requestFullscreen) 
        elem.requestFullscreen();
      else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
    }

    function closeFullscreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
      }
    }
</script>