{% load static %} 
<style>
  #parent{
    background-color: yellow;
    padding:9px;
  }
</style>
<h1 class="heading-style-js"><u><i> JavaScript event.currentTarget </i></u></h1>
<div class="style_divv mt-5">
    ترجع خاصية الحدث <b>currentTarget</b> العنصر الذي قامت مستمعات الحدث الخاصة به بتشغيل الحدث. العنصر الأب .<br>
    هذا مفيد بشكل خاص أثناء الالتقاط والفقاعات <small><bdi>(capturing and bubbling)</bdi></small><br>
    تشير الخاصية <b>currentTarget</b> دائمًا إلى العنصر الذي قام مستمع الحدث الخاص به بتشغيل الحدث ، على عكس خاصية <b>target</b> ، التي تُرجع العنصر الذي أطلق الحدث.<br>
    <div class="codeStudio alert bg-dark mt-3 pb-0" dir="ltr">
        <pre><span style="color:var(--js-color)">event</span>.<span style="color:var(--js-color)">currentTarget</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js148_currentTarget.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">       
        <div id="parent" onclick="function_name(event)" >
            <p id="paragraph"> this  is paragraph click </p>
            <h2 id="h2"> heading click </h2>
            <button id="btn"> click </button>
        </div>
    </div>
</div>

<script>
    function function_name(event){
        window.alert(
        "you press in tag name "+ event.currentTarget.tagName +
        " with id "+ event.currentTarget.id
        )
    }
</script>