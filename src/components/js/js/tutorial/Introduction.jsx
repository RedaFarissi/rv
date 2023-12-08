export default function Introduction(){
    function changer(){ document.getElementById("h2").innerHTML = "Reda Eskouni"}
	function P(){ document.getElementById("p").innerHTML = Date();}
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Introduction</h1>
    <article>        
        <h2 className="title-h2">1. ما هي JavaScript ؟</h2>
        <p className="style_divv">
            <b>JavaScript</b> هي لغة البرمجة الأكثر شيوعًا في العالم و هي لغة لبرمجة الويب. كما تعتبر لغة سهلة التعلم. <br/>
            من خلال لغة <b>JavaScript</b> يمكنك جعل موقعك متجاوب <br/>
            تكتب أكواد <b>JavaScript</b> داخل الوسم <kbd>&lt;script&gt;&lt;/script&gt;</kbd> أوداخل ملف بمتداد <b>js</b> 
            يمكنك وضع أي عدد من عنصر <kbd>&lt;script&gt;</kbd> في مستند <b>HTML</b>.<br/>
            يمكن وضع العنصر <b>script</b> في عنصر <kbd>&lt;body&gt;</kbd> أو في قسم <kbd>&lt;head&gt;</kbd> بصفحة <b>HTML</b> أو في كليهما
            سيعلمك هذا البرنامج التعليمي <b>JavaScript</b> من الأساسي إلى المتقدم.<br/>
        </p>
    </article>
    <article>
        <h2 className="title-h2">2. طريقة إنشاء ملف JavaScript </h2>
        <h3 className="title-h3">1. طريقة إنشاء الملف</h3>
        <p className="style_divv">
            لإنشاء ملف <b>JavaScript</b> كل ما عليك فعله إنشاء ملف وأن تقوم بئعطائه إسم و صيغة <b>js</b> تم التأكد أن ملف داخل نفس المجلد الذي يحتوي ملف <b>html</b>.
        </p>
        <ul><li>في هاذا المتال قمنا بتسمية الملفين <b>reda</b> ولاكن يختلف الإمتداد فالملف الأول يحمل إمتداد <b>js</b> والملف التاني يحمل إمتداد <b>html</b> .</li></ul>
        <div className="mital">متال :  </div>
        <img src="{% static 'js/js_Introduction3.png' %}" className="img"/>
    </article>
    <article>
        <h2 className="title-h2">2. طريقة ربط الملف html ب js</h2>
        <p className="style_divv">
            لربط ملف <b>html</b> بملف <b>js</b> يجب إستخدام الوسم <kbd>&lt;script&gt;</kbd> مع السمة <b>src</b> و مسار الملف .
        </p>
        <div className="mital">متال :  </div>
        <img src="{% static 'js/js_Introduction4.png' %}" className="img"/>
        <img src="{% static 'js/js_Introduction4 2.png' %}" className="img"/>
        <img src="{% static 'js/js_Introduction4 3.png' %}" className="img"/>
        <div className="mital">متال 2 :  </div>
        <ul><li> <b>defer</b> لتشعيل ملف js بعد تحميل عناصر  html </li></ul>
        <div className="alert bg-dark text-light w-75 m-auto" >
        {/* <pre>&lt;!DOCTYPE <span style="color:var(--js-color)">html</span>&gt;
        &lt;html&gt;
           &lt;head&gt;
              &lt;title&gt; <span style="color:white;">Page Title</span> &lt;/title&gt;
              <span style='color:green'>&lt;!-- to work with different device --&gt;</span>
              &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
              <span className='b'>&lt;script <span className='bc'>defer</span> <span className="bc">src</span>=<span className='o'>"viewport"</span>&gt; &lt;/script&gt;</span>
           &lt;/head &gt;
           &lt;body&gt;
             Content
           &lt;/body&gt;
        &lt;/html&gt;</pre> */}
        </div>
    </article>
    <article>
        <h2 className="title-h2">3. التعليقات في لغة JavaScript </h2>
        <p className="style_divv">
            يمكن استخدام تعليقات <b>JavaScript</b> لشرح كود <b>JavaScript</b> ، ولجعله أكثر قابلية للقراءة.<br/>
            يمكن أيضًا استخدام تعليقات <b>JavaScript</b> لمنع التنفيذ ، عند اختبار كود بديل.<br/>
            تبدأ التعليقات المكونة من سطر واحد بـ //.<br/>
            سيتم تجاهل أي نص بين // ونهاية السطر بواسطة <b>JavaScript</b> (لن يتم تنفيذه). يكتب التعليق كالتالي :<br/>
            {/* <div style="color:green;direction:ltr;"> <bdi>//Comment</bdi></div><br/> */}
            تبدأ التعليقات متعددة الأسطر بـ /* وتنتهي بـ */.    سيتم تجاهل أي نص بين /* و */ بواسطة <b>JavaScript</b>. <br/>
            يستخدم هذا المثال تعليقًا متعدد الأسطر (جزء تعليق) لشرح الكود يكتب التعليق كالتالي :
            {/* <div style="color:green;direction:ltr;"> <bdi>/* Comments * /</bdi></div> */}
        </p>
    </article>
    <article>
        <h2 className="title-h2">4. تغيير محتوى HTML عبر لغة JavaScript </h2>
        <p className="style_divv">
            يمكن تغيير محتوى عناصر <b>HTML</b> عبر لغة <b>JavaScript</b> . إحدى طرق <b>JavaScript</b>  العديدة لتغيير المحتوى هي <b><bdi>getElementById()</bdi></b> .
            المثال أدناه يجد العانصر <b>HTML</b> عبر <b>id</b> ، ويغير محتوى العنصر 
        </p>
        <div className="mital">متال :  </div>
        <img src="{% static 'js/js_Introduction.png' %}" className="img"/>
        <div className="style-result">
            <h2 id="h2"> Heading </h2>
        	<p id="p"> Date </p>
        	<button onclick="changer()"> change Heading </button>
        	<button onclick="P()"> Date </button>
        </div>
    </article>
    <article>
        <h2 className="title-h2">5. تغيير تصميم CSS عبر لغة JavaScript </h2>
            <div className="mital">متال :  </div>
            <img src="{% static 'js/js_Introduction2.png' %}" className="img"/>
            <div className="style-result">
                <p id="demo">JavaScript can change the style of an HTML element.</p>
            	<button type="button" onclick="document.getElementById('demo').style.fontSize='35px'"> Click Me </button>
            </div>
        <ul><li> لا تقلق ستتعلم كل ذالك خلال الدروس القادمة . </li></ul>
    </article>
</section>
    )
}