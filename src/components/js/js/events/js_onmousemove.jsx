{% load static %} 
<style>
    #div {
      width: 200px;
      height: 100px;
      border: 1px solid black;
    }
</style>
<h1 class="heading-style-js"><u><i> JavaScript onmousemove </i></u></h1>
<div class="style_divv mt-5">
    يقع حدث <b>onmousemove</b> عندما يتحرك المؤشر أثناء وجوده فوق عنصر.<br>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
        <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
<span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">onmousemove</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
        <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onmousemove</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
        <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"mousemove"</span>, function_name <span style="color:gold">)</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js113_onmousemove.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <div id="div" onmousemove="myFunction(event)" onmouseout="clearCoor()"></div>
        <p>Mouse over the rectangle above, and get the coordinates of your mouse pointer.</p>
        <p>
          When the mouse is moved over the div, the p element will display the horizontal and
          vertical coordinates of your mouse pointer, whose values are returned from the 
          clientX and clientY properties on the MouseEvent object.
        </p>
        <p id="id_name"></p>
    </div>
</div>
<script>
    function myFunction(e) {
      var x = e.clientX;
      var y = e.clientY;
      var coor = "Coordinates: (" + x + "," + y + ")";
      document.getElementById("id_name").innerHTML = coor;
    }

    function clearCoor() {
      document.getElementById("id_name").innerHTML = "";
    }
</script>