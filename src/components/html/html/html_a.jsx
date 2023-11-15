{% load static %} 
<h1 class="heading-style-html"><u><i>HTML a </i></u></h1>
<h3>1. مفهوم الروابط</h3>
<div class="style_divv">
الروابط هي جزء أساسي في صفحات الويب، حيث ان الويب تم إنشاؤه أصلاً ليكون بمثابة شبكة معلوماتية من الوثائق المرتبطة ببعضها البعض.<br><br>
يمكننا إنشاء رابط بإستخدام الوسم <kbd>&lt;a&gt;</kbd> وهو اختصار لـ anchor. ونستخدم الخاصية <b>href</b> وهي اختصار لـ (Hypertext Reference) لتحديد رابط الصفحة التي نريد الذهاب إليها عند الضغط على الرابط.
</div>
<h3>2. إضافة رابط في الصفحة</h3>
<div class="style_divv">
    نستخدم الوسم <a> على هذا النحو <bdi><strong> &lt;a href="url"&gt;</strong> link_name <strong> &lt;/a&gt;</strong></bdi> لعرض رابط في الصفحة.
    <ul>
        <li>مكان الكلمة <b>link_name</b>&nbsp; نضع النص الذي نريده أن يظهر في الصفحة و الذي يمكن النقر عليه.</li>
        <li>مكان الكلمة <b>url</b> نضع الرابط الذي نريد توجيه المستخدم إليه عند النقر على النص الذي يظهر في الصفحة.</li>
    </ul> 
    <div class="codeStudio alert bg-dark mt-2" dir="ltr" style="padding-bottom: 0px;">
        <pre><span style="color:var(--html-color-tags)">&lt;a</span> <span style="color:var(--js-color)">href</span>=<span style="color:orange;">"url"</span><span style="color:var(--html-color-tags)">&gt;</span> content <span style="color:var(--html-color-tags)">&lt;/span&gt;</span></pre>
     </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال:</div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'html/html12_a1.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'html/html12_a2 2.png' %}" class="img">
    <h4 style="color:green">عند النقر على رابط  يتم توجيه المستخدم إلى google </h4>
    <img src="{% static 'html/html12_a1 3.png' %}" class="img">
    <h4 style="color:yellow;">ملاحطة :</h4>
    <ul><li> عند النقر على رابط موجود في الصفحة نجد أنه يتم فتح الصفحة الجديدة مكان الصفحة الحالية كما لاحظنا في المثال.</li></ul>
</div>
<h3>3. تحديد أين سيتم فتح الرابط</h3>
<div class="style_divv">
    ماذا لو أحببت أن تفتح الروابط الخارجية في تبويبات جديدة في المتصفح، بدلاً من تحميلها في نفس التبويب كي تضمن أن موقعك مازال مفتوحاً أمام الزائر. هذا هو دور الخاصية <b>target</b>
    <div class="codeStudio alert bg-dark mt-2" dir="ltr" style="padding-bottom: 0px;">
        <pre><span style="color:var(--html-color-tags)">&lt;a</span> <span style="color:var(--js-color)">href</span>=<span style="color:orange;">"url"</span> <span style="color:var(--js-color)">target</span>=<span style="color:orange;">"_blanck"</span><span style="color:var(--html-color-tags)">&gt;</span> content <span style="color:var(--html-color-tags)">&lt;/span&gt;</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'html/html12_a2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'html/html12_a2 2.png' %}" class="img">
    <h4 style="color:green">عند النقر على رابط  يتم توجيه المستخدم إلى google </h4>
    <img src="{% static 'html/html12_a2 3.png' %}" class="img">
    <h4 style="color:yellow;">ملاحطة :</h4>
    <ul><li> عند النقر على رابط موجود في الصفحة نجد أنه يتم فتح الصفحة الجديدة والإحتفاظ بصفحة الخاصة بي. قم بتحديد ما يناسبك  </li></ul>
</div>
<h3>4. إظهار عنوان عند تمرير الماوس فوق الرابط</h3>
<div class="style_divv">    
    في حال أردت إظهار تلميح عند تمرير الماوس فوق الرابط فيمكنك إضافة الخاصية title في الوسم <kbd> &lt;a&gt;</kbd> و تمرير التلميح الذي تريد عرضه كقيمة لها.
    <div class="codeStudio alert bg-dark mt-2" dir="ltr" style="padding-bottom: 0px;">
        <pre><span style="color:var(--html-color-tags)">&lt;a</span> <span style="color:var(--js-color)">href</span>=<span style="color:orange;">"url"</span><span style="color:var(--js-color)"> title</span>=<span style="color:orange;">"content_title"</span><span style="color:var(--html-color-tags)">&gt;</span> content <span style="color:var(--html-color-tags)">&lt;/span&gt;</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'html/html12_a3.png' %}" class="img">    
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'html/html12_a3 2.png' %}" class="img">
    <h4 style="color:green">عند النقر على رابط  يتم توجيه المستخدم إلى google </h4>
    <img src="{% static 'html/html12_a3 3.png' %}" class="img">
</div>
<h3>5. الروابط داخل نفس الصفحة</h3>
<div class="style_divv">
    في حال أردت وضع رابط يوجه المستخدم لوسم محدد موجود في نفس الصفحة  يمكنك إعطاء الوسم <b>id</b> و عندها الرابط الذي نريده أن يوجه المستخدم لذاك الوسم يجب أن نضع في نهايته الرمز # يليه <b>id</b> العنصر. في المثال التالي قمنا بوضع رابط عند النقر عليه يقوم بنقل المستخدم لوسم محدد في نفس الصفحة.
    <div class="codeStudio alert bg-dark mt-2" dir="ltr" style="padding-bottom: 0px;">
        <pre><span style="color:var(--html-color-tags)">&lt;a</span> <span style="color:var(--js-color)">href</span>=<span style="color:orange;">"#id_name"</span><span style="color:var(--html-color-tags)">&gt;</span> content <span style="color:var(--html-color-tags)">&lt;/span&gt;</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال : </div>
    <ul><li>قم بنقر للفهم على الروابط أسفله للفهم بشكل أفضل .</li></ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'html/html12_a5.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee img" style="height:340px;overflow:auto;">
        <a href="#title1">title1</a>
        <a href="#title2">title2</a>
        <a href="#title3">title3</a>
        <a href="#title4">title4</a>

        <h2 id="title1">title1</h2>
        <p> paragraph1.<br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, adipisci? Illum et esse ratione labore consequatur recusandae earum inventore sit laboriosam nemo dicta vero mollitia temporibus eaque sed, a aut! Eius iure est maioreseostemporibus consequatur inventore suscipit sit illum? Quos quia tempore molestiae rerum, ab sapiente odit necessitatibus molestias magnam similique iusto corporis. Aspernatur enim consequuntur voluptas rerum delectus. Necessitatibus ab officiisatnobis a repudiandae maiores totam dolor quo aliquam fugiat, ipsam corporis pariatur accusantium animi porro esse unde tenetur magnam minus. Ipsum dolore magnam mollitia eaque commodi praesentium reiciendis veniam, animi atque aliquam nesciuntexcepturiquam autem quas libero a asperiores facilis id dicta minus consectetur? Dolore explicabo quasi repellendus veniam nam est maiores minima in non? Blanditiis eius accusantium minima dolorem amet aut natus vitae incidunt reiciendis consecteturaliquidrem doloribus adipisci tempora voluptas impedit quia non quibusdam mollitia, similique tempore? Ut aspernatur accusamus enim nisi impedit cum quia maxime voluptas accusantium, optio, natus aperiam tempora. Voluptas, tempore dolor natusdebitisex, omnis nesciunt quaerat, non soluta porro nulla suscipit laboriosam beatae quidem accusantium. Odit, provident aliquam sit velit ex fuga saepe, molestias modi reiciendis facilis vel! Enim, saepe! Harum quae ut molestiae voluptatem cupiditatetotammodi fuga corrupti autem laborum illo dolorem, sequi accusamus dignissimos in. Animi, corrupti officiis cumque similique recusandae necessitatibus iusto quas dolorem, reprehenderit repellat ullam sed inventore sint dolorum tempora eaqueporro exrem. Tempora, aliquid quod numquam, aliquam quas, illum saepe corrupti earum molestiae perferendis officiis unde dolores! Ducimus rem, maxime animi numquam debitis officiis suscipit in ex explicabo quaerat ipsa? Iste nihil asperioresnesciunt,consequuntur ab, dolores facere minima nisi aperiam beatae neque commodi suscipit saepe modi voluptatibus minus perspiciatis vel quia quaerat cum obcaecati, expedita harum. Illum harum, nihil quaerat soluta cumque atque rem perferendisveritatissaepe hic laborum mollitia earum alias incidunt inventore ab eligendi recusandae odio quis accusamus voluptatem. Molestias unde amet totam fugiat veritatis? Qui non voluptatum ullam eos. Soluta minus voluptatum veritatis perspiciatis,ducimus quamhic ea sit autem eligendi blanditiis optio at ipsam. Provident pariatur vel eos tempora velit numquam debitis corrupti sit, earum consequuntur praesentium! Mollitia velit ad corporis molestias?</p>
        <h2 id="title2">title2</h2>
        <p> paragraph2.<br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, adipisci? Illum et esse ratione labore consequatur recusandae earum inventore sit laboriosam nemo dicta vero mollitia temporibus eaque sed, a aut! Eius iure est maioreseostemporibus consequatur inventore suscipit sit illum? Quos quia tempore molestiae rerum, ab sapiente odit necessitatibus molestias magnam similique iusto corporis. Aspernatur enim consequuntur voluptas rerum delectus. Necessitatibus ab officiisatnobis a repudiandae maiores totam dolor quo aliquam fugiat, ipsam corporis pariatur accusantium animi porro esse unde tenetur magnam minus. Ipsum dolore magnam mollitia eaque commodi praesentium reiciendis veniam, animi atque aliquam nesciuntexcepturiquam autem quas libero a asperiores facilis id dicta minus consectetur? Dolore explicabo quasi repellendus veniam nam est maiores minima in non? Blanditiis eius accusantium minima dolorem amet aut natus vitae incidunt reiciendis consecteturaliquidrem doloribus adipisci tempora voluptas impedit quia non quibusdam mollitia, similique tempore? Ut aspernatur accusamus enim nisi impedit cum quia maxime voluptas accusantium, optio, natus aperiam tempora. Voluptas, tempore dolor natusdebitisex, omnis nesciunt quaerat, non soluta porro nulla suscipit laboriosam beatae quidem accusantium. Odit, provident aliquam sit velit ex fuga saepe, molestias modi reiciendis facilis vel! Enim, saepe! Harum quae ut molestiae voluptatem cupiditatetotammodi fuga corrupti autem laborum illo dolorem, sequi accusamus dignissimos in. Animi, corrupti officiis cumque similique recusandae necessitatibus iusto quas dolorem, reprehenderit repellat ullam sed inventore sint dolorum tempora eaqueporro exrem. Tempora, aliquid quod numquam, aliquam quas, illum saepe corrupti earum molestiae perferendis officiis unde dolores! Ducimus rem, maxime animi numquam debitis officiis suscipit in ex explicabo quaerat ipsa? Iste nihil asperioresnesciunt,consequuntur ab, dolores facere minima nisi aperiam beatae neque commodi suscipit saepe modi voluptatibus minus perspiciatis vel quia quaerat cum obcaecati, expedita harum. Illum harum, nihil quaerat soluta cumque atque rem perferendisveritatissaepe hic laborum mollitia earum alias incidunt inventore ab eligendi recusandae odio quis accusamus voluptatem. Molestias unde amet totam fugiat veritatis? Qui non voluptatum ullam eos. Soluta minus voluptatum veritatis perspiciatis,ducimus quamhic ea sit autem eligendi blanditiis optio at ipsam. Provident pariatur vel eos tempora velit numquam debitis corrupti sit, earum consequuntur praesentium! Mollitia velit ad corporis molestias?</p>
        <h2 id="title3">title3</h2>
        <p> paragraph3.<br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, adipisci? Illum et esse ratione labore consequatur recusandae earum inventore sit laboriosam nemo dicta vero mollitia temporibus eaque sed, a aut! Eius iure est maioreseostemporibus consequatur inventore suscipit sit illum? Quos quia tempore molestiae rerum, ab sapiente odit necessitatibus molestias magnam similique iusto corporis. Aspernatur enim consequuntur voluptas rerum delectus. Necessitatibus ab officiisatnobis a repudiandae maiores totam dolor quo aliquam fugiat, ipsam corporis pariatur accusantium animi porro esse unde tenetur magnam minus. Ipsum dolore magnam mollitia eaque commodi praesentium reiciendis veniam, animi atque aliquam nesciuntexcepturiquam autem quas libero a asperiores facilis id dicta minus consectetur? Dolore explicabo quasi repellendus veniam nam est maiores minima in non? Blanditiis eius accusantium minima dolorem amet aut natus vitae incidunt reiciendis consecteturaliquidrem doloribus adipisci tempora voluptas impedit quia non quibusdam mollitia, similique tempore? Ut aspernatur accusamus enim nisi impedit cum quia maxime voluptas accusantium, optio, natus aperiam tempora. Voluptas, tempore dolor natusdebitisex, omnis nesciunt quaerat, non soluta porro nulla suscipit laboriosam beatae quidem accusantium. Odit, provident aliquam sit velit ex fuga saepe, molestias modi reiciendis facilis vel! Enim, saepe! Harum quae ut molestiae voluptatem cupiditatetotammodi fuga corrupti autem laborum illo dolorem, sequi accusamus dignissimos in. Animi, corrupti officiis cumque similique recusandae necessitatibus iusto quas dolorem, reprehenderit repellat ullam sed inventore sint dolorum tempora eaqueporro exrem. Tempora, aliquid quod numquam, aliquam quas, illum saepe corrupti earum molestiae perferendis officiis unde dolores! Ducimus rem, maxime animi numquam debitis officiis suscipit in ex explicabo quaerat ipsa? Iste nihil asperioresnesciunt,consequuntur ab, dolores facere minima nisi aperiam beatae neque commodi suscipit saepe modi voluptatibus minus perspiciatis vel quia quaerat cum obcaecati, expedita harum. Illum harum, nihil quaerat soluta cumque atque rem perferendisveritatissaepe hic laborum mollitia earum alias incidunt inventore ab eligendi recusandae odio quis accusamus voluptatem. Molestias unde amet totam fugiat veritatis? Qui non voluptatum ullam eos. Soluta minus voluptatum veritatis perspiciatis,ducimus quamhic ea sit autem eligendi blanditiis optio at ipsam. Provident pariatur vel eos tempora velit numquam debitis corrupti sit, earum consequuntur praesentium! Mollitia velit ad corporis molestias?</p>
        <h2 id="title4">title4</h2>
        <p> paragraph4.<br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, adipisci? Illum et esse ratione labore consequatur recusandae earum inventore sit laboriosam nemo dicta vero mollitia temporibus eaque sed, a aut! Eius iure est maioreseostemporibus consequatur inventore suscipit sit illum? Quos quia tempore molestiae rerum, ab sapiente odit necessitatibus molestias magnam similique iusto corporis. Aspernatur enim consequuntur voluptas rerum delectus. Necessitatibus ab officiisatnobis a repudiandae maiores totam dolor quo aliquam fugiat, ipsam corporis pariatur accusantium animi porro esse unde tenetur magnam minus. Ipsum dolore magnam mollitia eaque commodi praesentium reiciendis veniam, animi atque aliquam nesciuntexcepturiquam autem quas libero a asperiores facilis id dicta minus consectetur? Dolore explicabo quasi repellendus veniam nam est maiores minima in non? Blanditiis eius accusantium minima dolorem amet aut natus vitae incidunt reiciendis consecteturaliquidrem doloribus adipisci tempora voluptas impedit quia non quibusdam mollitia, similique tempore? Ut aspernatur accusamus enim nisi impedit cum quia maxime voluptas accusantium, optio, natus aperiam tempora. Voluptas, tempore dolor natusdebitisex, omnis nesciunt quaerat, non soluta porro nulla suscipit laboriosam beatae quidem accusantium. Odit, provident aliquam sit velit ex fuga saepe, molestias modi reiciendis facilis vel! Enim, saepe! Harum quae ut molestiae voluptatem cupiditatetotammodi fuga corrupti autem laborum illo dolorem, sequi accusamus dignissimos in. Animi, corrupti officiis cumque similique recusandae necessitatibus iusto quas dolorem, reprehenderit repellat ullam sed inventore sint dolorum tempora eaqueporro exrem. Tempora, aliquid quod numquam, aliquam quas, illum saepe corrupti earum molestiae perferendis officiis unde dolores! Ducimus rem, maxime animi numquam debitis officiis suscipit in ex explicabo quaerat ipsa? Iste nihil asperioresnesciunt,consequuntur ab, dolores facere minima nisi aperiam beatae neque commodi suscipit saepe modi voluptatibus minus perspiciatis vel quia quaerat cum obcaecati, expedita harum. Illum harum, nihil quaerat soluta cumque atque rem perferendisveritatissaepe hic laborum mollitia earum alias incidunt inventore ab eligendi recusandae odio quis accusamus voluptatem. Molestias unde amet totam fugiat veritatis? Qui non voluptatum ullam eos. Soluta minus voluptatum veritatis perspiciatis,ducimus quamhic ea sit autem eligendi blanditiis optio at ipsam. Provident pariatur vel eos tempora velit numquam debitis corrupti sit, earum consequuntur praesentium! Mollitia velit ad corporis molestias?</p>
    </div>
</div>

<h3>6. ربط صفحة  بصفحة اخرى داخل موقعك </h3>
<div class="style_divv">
    في حال أردت وضع رابط يوجه المستخدم لصفحة أخرا داخل موقعك عند نقر قم بوضع مصار الصفحة التانية وإسم ومتداد الملف داخل السمة <b>href</b>  
    <div class="codeStudio alert bg-dark mt-2" dir="ltr" style="padding-bottom: 0px;">
        <pre><span style="color:var(--html-color-tags)">&lt;a</span> <span style="color:var(--js-color)">href</span>=<span style="color:orange;">"name_file.html"</span><span style="color:var(--html-color-tags)">&gt;</span> content <span style="color:var(--html-color-tags)">&lt;/span&gt;</span> </pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال : </div>
    <h4 style="color:green">  الكود </h4>
    <img src="{% static 'html/html12_a6_code1.png' %}" class="img">
    <img src="{% static 'html/html12_a6_code2.png' %}" class="img">
    <h4 style="color:green">  بعد تشغيل كود الصفحة html2.html </h4>
    <img src="{% static 'html/html12_a6_code1 2.png' %}" class="img">
    <h4 style="color:green">  عند نقر على رابط </h4>
    <img src="{% static 'html/html12_a6_code2 2.png' %}" class="img">
</div>
<ul>
    <li> بعد النقر على الرابط الذي يحمل <q>href=</q>html.html يتم توجيه إلى html.html .</li>
    <li> إن أردت الإحتفاظ بالصفحة الأولى إستعمل السمة  target .</li>
</ul> 

<h3>7. ربط صفحة ب id  موجود بصفحة اخرى داخل موقعك </h3>
<div class="style_divv">
    في حال أردت وضع رابط يوجه المستخدم لوسم محدد موجود صفحة أخرى  يمكنك إعطاء الوسم السمة <b>id</b> و عندها الرابط الذي نريده أن يوجه المستخدم لذاك الوسم يجب أن نضع في نهايته الرمز # يليه <b>id</b>.
    <div class="codeStudio alert bg-dark mt-2" dir="ltr" style="padding-bottom: 0px;">
        <pre><span style="color:var(--html-color-tags)">&lt;a</span> <span style="color:var(--js-color)">href</span>=<span style="color:orange;">"name_file.html#id_name"</span><span style="color:var(--html-color-tags)">&gt;</span> content <span style="color:var(--html-color-tags)">&lt;/span&gt;</span> </pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال : </div>
    <h4 style="color:green">  الكود </h4>
    <img src="{% static 'html/html12_a7_code1.png' %}" class="img">
    <img src="{% static 'html/html12_a7_code2.png' %}" class="img">
    <h4 style="color:green">  بعد تشغيل كود الصفحة html2.html </h4>
    <ul><li>  بعد النقر على الرابط الذي يحمل <q>href=</q>./html.html#title3 يتم توجيه إلى العنوان الذي يحمل <q>id=</q>title3  في صفحة html.html  </li></ul>
    <img src="{% static 'html/html12_a7_code1 2.png' %}" class="img">
    <h4 style="color:green">  عند نقر على رابط title3</h4>
    <img src="{% static 'html/html12_a7_code2 2.png' %}" class="img">
</div>

<h3>8. معلومة تقنية </h3>
<div class="style_divv">
    من المهم تحديد قيمة  href  لإنه إن لم تقم بكتابة اسم الصفحة ستقوم بإنشاء رابط فارغ 
</div>
<div class="mital">متال : </div>
<h4 style="color:green">  الكود </h4>
<img src="{% static 'html/html12_a4.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'html/html12_a4 2.png' %}" class="img">