{% load static %} 
<style>
    .normal   { letter-spacing: normal; }
    .em-wide  { letter-spacing: 0.4em; }
    .em-wider { letter-spacing: 1em; }
    .em-tight { letter-spacing: -0.05em; }
    .px-wide  { letter-spacing: 6px; }
    @media only  screen and (max-width:903px) {
      #letter-spacing{ font-size: 90%; }
    }
</style>
<h1 class="heading-style-css"><u><i>CSS letter-spacing  </i></u></h1>
<div class="style_divv mt-5">
    تعيّن الخاصية <b>letter-spacing</b> في لغة <b>CSS</b>  سلوك التباعد الأفقي بين أحرف النص. تُضاف هذه القيمة إلى التباعد الطبيعي بين الأحرف أثناء عرض النص. تؤدي القيم الموجبة لتباعد الأحرف إلى انتشار الأحرف بعيدًا عن بعضها البعض ، بينما تعمل القيم السالبة لتباعد الأحرف على تقريب الأحرف من بعضها.
</div>
<div class="mital">متال :  </div>
<ul><li>أنقر على عناصر القائمة لتعرف بشكل أفضل عن الخاصية <b>letter-spacing</b> . </li></ul>
<div id="letter-spacing" dir="ltr" style="margin-top:5vh;background-color:azure;padding:12px 8px;border-radius:5px;color:black;">
    <div class="row">
      <div class="col-6">
        <div class="list-group" id="list-tab" role="tablist">
          <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">letter-spacing: normal</a>
          <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">letter-spacing: .3rem</a>
          <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">letter-spacing: 2px</a>
          <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">letter-spacing: -1px</a>
        </div>
      </div>
      <div class="col-6" style="border:1px solid gray;padding:20px">
        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list" style="letter-spacing: normal;">Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br> Ullam, distinctio in adipisci accusantium saepe mollitia nesciunt deserunt itaque hic commodi, porro exercitationem.</div>
          <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list" style="letter-spacing: .3rem;">Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br> Ullam, distinctio in adipisci accusantium saepe mollitia nesciunt deserunt itaque hic commodi, porro exercitationem.</div>
          <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list" style="letter-spacing: 2px;">Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br> Ullam, distinctio in adipisci accusantium saepe mollitia nesciunt deserunt itaque hic commodi, porro exercitationem.</div>
          <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list" style="letter-spacing: -1px;">Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br> Ullam, distinctio in adipisci accusantium saepe mollitia nesciunt deserunt itaque hic commodi, porro exercitationem.</div>
        </div>
      </div>
    </div>
</div>
<div class="sum_exemple_style">
<div class="mital">متال 2 :  </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css17_latter-spacing.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<div class="styleee">
    <p class="normal">letter spacing</p>
    <p class="em-wide">letter spacing</p>
    <p class="em-wider">letter spacing</p>
    <p class="em-tight">letter spacing</p>
    <p class="px-wide">letter spacing</p>
</div>
</div>