{% load static %} 
<style>
    .n  {  word-spacing: normal; }
    .e  {  word-spacing: 0.4em; }
    .er {  word-spacing: 1em; }
    .et {  word-spacing: -0.05em; }
    .pe {  word-spacing: 6px; }
</style>
<h1 class="heading-style-css"><u><i> CSS word-spacing</i></u></h1>
<div class="style_divv mt-5">
    تعيّن الخاصية <b>word-spacing</b> في لغة <b>CSS</b>  سلوك التباعد الأفقي بين كلمات النص. تُضاف هذه القيمة إلى التباعد الطبيعي بين الكلمات أثناء عرض النص. تؤدي القيم الموجبة لتباعد الكلمات  ، بينما تعمل القيم السالبة لتباعد الأحرف على تقريب الكلمات من بعضها.
</div>
<div class="mital">متال :  </div>
<ul><li>أنقر على عناصر القائمة لتعرف بشكل أفضل عن الخاصية <b>word-spacing</b> . </li></ul>
<div dir="ltr" style="margin-top:5vh;background-color:azure;padding:12px 8px;border-radius:9px;color:black;">
    <div class="row">
      <div class="col-6">
        <div class="list-group" id="list-tab" role="tablist">
          <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">word-spacing: normal</a>
          <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">word-spacing: .5rem</a>
          <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">word-spacing: 2px</a>
          <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">word-spacing: -1px</a>
        </div>
    </div>
    <div class="col-6" style="border:1px solid gray;padding:20px">
        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list" style="word-spacing: normal;">Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br> Ullam, distinctio in adipisci accusantium saepe mollitia nesciunt deserunt itaque hic commodi, porro exercitationem.</div>
          <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list" style="word-spacing: .5rem;">Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br> Ullam, distinctio in adipisci accusantium saepe mollitia nesciunt deserunt itaque hic commodi, porro exercitationem.</div>
          <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list" style="word-spacing: 2px;">Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br> Ullam, distinctio in adipisci accusantium saepe mollitia nesciunt deserunt itaque hic commodi, porro exercitationem.</div>
          <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list" style="word-spacing: -1px;">Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br> Ullam, distinctio in adipisci accusantium saepe mollitia nesciunt deserunt itaque hic commodi, porro exercitationem.</div>
        </div>
      </div>
    </div>
</div>
<div class="sum_exemple_style">
<div class="mital">متال 2 :  </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css18_word-spacing.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<div class="styleee">
    <p class="n"> word spacing in CSS</p>
    <p class="e"> word spacing in CSS</p>
    <p class="er">word spacing in CSS</p>
    <p class="et">word spacing in CSS</p>
    <p class="pe">word spacing in CSS</p>
</div>
</div>