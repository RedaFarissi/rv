import "./String.css"

export default function String(){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript String</h1>
    <details>
        <summary> جميع العناوين  </summary>
        <div dir="ltr">
            <a href="#length"> Length</a>
            <a href="#character"> Character</a>
            <a href="#objects"> objects</a>
            <a href="#extracting"> Extracting </a>
            <a href="#replace"> Replace </a>
            <a href="#Upper"> Upper Case </a>
            <a href="#Upper"> Lower Case </a>
            <a href="#concat"> concat </a>
            <a href="#trim"> trim </a>
            <a href="#Padding"> Padding </a>
            <a href="#charAt"> charAt </a>
            <a href="#split"> split </a>
        </div>
    </details>
    <article>
        <p className="style_divv mt-5">
            سبق أن تكلمنا عن العنصر  <b>string</b> في دوس سابقة . في هذا البرنامج التعليمي سوف نتحدت عن هذا  نوع بتفصيل . <br/>
            النوع <b>string</b> في لغة  <b>JavaScript</b> مخصصة لتخزين النص ومعالجته .
        </p>
        <h2 className="title-h2" id="length">1. String Length </h2>
        <p className="style_divv">
            تستخدم الخاصية <b>length</b> للعثور على طول المتغير من نوع <b>string</b> .<br/>
            تعيد الخاصية <b>length</b> قيمة رقمية .
        </p>
        <div className="mital"> متال :  </div>
        <ul>
            <li> في المتال التالي قمنا  بإسناد قيمة حرفية إلى المتغير <b>text</b> . </li>
            <li> تم بعد ذالك أسندنا القيم إلى متغير أخر . </li>
        </ul>
        <img src="{% static 'js/js8_string.png' %}" className="img"/>
        <img src="{% static 'js/js8_string 2.png' %}" className="img"/>
        <div className="mital"> متال 2 :  </div>
        <ul><li> في هاذا المتال قمنا بعرض النتيجة مباشرة . </li></ul>
        <img src="{% static 'js/js8_string2.png' %}" className="img"/>
        <img src="{% static 'js/js8_string2 2.png' %}" className="img"/>
        <h2 className="title-h2" id="character">2. Escape Character</h2>
        <p className="style_divv">
            سيتم تقطيع السلسلة إلى  نحن من يسمى.<br/>
            الحل لتجنب هذه المشكلة ، هو استخدام  الخط المائل .
        <table id="table">
            <tr><th> الكود </th><th> النتيجة </th><th> الوصف  </th></tr>
            <tr><td><bdi>\'</bdi></td><td> ' </td><td style={{textAlign:"right",paddingRight:"7px"}}> إقتباس واحد </td></tr>
            <tr><td><bdi>\"</bdi></td><td> " </td><td style={{textAlign:"right",paddingRight:"7px"}}> إقتباس مزدوج </td></tr>
            <tr><td><bdi>\\</bdi></td><td> \ </td><td style={{textAlign:"right",paddingRight:"7px"}}> شرطة مائلة للخلف </td></tr>
        </table>
        </p>

        <div className="mital"> متال :  </div>
        <div className="character">
        <div> <img src="{% static 'js/js8_string3.png' %}"/>   <h2>عند إستخدام  شرطة مائلة للخلف </h2> </div>
        <div> <img src="{% static 'js/js8_string3 2.png' %}"/> <h2>بدون إستخدام  شرطة مائلة للخلف</h2> </div>
        </div>
        <ul><li>قم بتجربة باقي العلامات للفهم بشكل أفضل </li></ul>
        <table>
            <tr> <th> الكود </th> <th> النتيجة </th></tr>
            <tr> <td><bdi>\b</bdi></td> <td> مسافة للخلف </td>  </tr>
            <tr> <td><bdi>\f</bdi></td> <td> نموذج تغذية </td>  </tr>
            <tr> <td><bdi>\n</bdi></td> <td> خط جديد </td>  </tr>
            <tr> <td><bdi>\r</bdi></td> <td> إرجاع </td>  </tr>
            <tr> <td><bdi>\t</bdi></td> <td> جهاز جدولة أفقي </td>  </tr>
            <tr> <td><bdi>\v</bdi></td> <td> جدولة عمودية </td>  </tr>
        </table>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js8_string4.png' %}" className="img"/>
        <img src="{% static 'js/js8_string4 2.png' %}" className="img"/>
        <div className="mital"> متال 2 :  </div>
        <img src="{% static 'js/js8_string5.png' %}" className="img"/>
        <img src="{% static 'js/js8_string5 2.png' %}" className="img"/>
        <h2 className="title-h2" id="objects">3. JavaScript Strings as Objects</h2>
        <p className="style_divv">
            عادةً ما تكون متغيرات من نوع <b>string</b> في لغة  <b>JavaScript</b> عبارة عن قيم أولية تم إنشاؤها من العناصر الحرفية:<br/><br/>
        {/* <div className="codeStudio alert bg-dark OBject" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
            <pre><span style="color:var(--html-color-tags);">let</span> x = <span style="color:orange;">"Reda"</span> ;</pre>
        </div> */}
        لكن يمكن أيضًا تعريف  ككائنات <b>Objects</b> تحتوي على الكلمة الأساسية <b>new</b>
        {/* <div className="codeStudio alert bg-dark OBject" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags);">let</span> x = <span style="color:orange;">"Reda"</span> ;
        <span style="color:var(--html-color-tags);">let</span> y = <span style="color:var(--html-color-tags);">new</span> <span style="color:lime">String(</span><span style="color:orange;">"Reda"</span><span style="color:lime">)</span>;</pre>
        </div> */}
        </p>
        <div className="mital"> متال  :  </div>
        <img src="{% static 'js/js8_string6.png' %}" className="img"/>
        <img src="{% static 'js/js8_string6 2.png' %}" className="img"/>
        <div className="mital"> متال 2 :  </div>
        <img src="{% static 'js/js8_string7.png' %}" className="img"/>
        <div className="styleee"><h2>Reda</h2></div>
        <div className="alert bg-warning">
        <ul>
            <li> لا تقم بإنشاء كائنات سلاسل.<br/> </li>
            <li> تؤدي الكلمة الرئيسية الجديدة إلى تعقيد الكود وإبطاء سرعة التنفيذ.<br/></li>
            <li> يمكن أن تنتج كائنات السلسلة نتائج غير متوقعة .</li>
        </ul>
        </div>
        <h2 className="title-h2" id="extracting"> 4.  JavaScript Extracting String Parts </h2>
        <p className="style_divv">
        هناك ثلاث طرق لاستخراج جزء من السلسلة :
        <ul dir="ltr">
            <li>slice(start, end)</li>
            <li>substring(start, end)</li>
            <li>substr(start, length)</li>
        </ul>
        {/* <div className="codeStudio alert bg-dark OBject" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags);">let</span> variable2 = variable.<span style="color:gold">slice</span>(7, 12);</pre>
        </div>
        <div className="codeStudio alert bg-dark OBject" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags);">let</span> variable2 = variable.<span style="color:gold">substring</span>(15, 19);</pre>
        </div>
        <div className="codeStudio alert bg-dark OBject" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags);">let</span> variable2 = variable.<span style="color:gold">substr</span>(7, 12);</pre>
        </div> */}
        </p>
        <h5 className="title-h5">1. <bdi>slice() method</bdi></h5>
        <p className="style_divv">
        <bdi><b>slice</b>()</bdi>  يستخرج جزءًا من المتغير من نوع <b>string</b>  ويعيد الجزء المستخرج في متغير أخر .<br/>
            تأخذ الطريقة معلمتين: موضع البداية ، وموضع النهاية (غير متضمن).<br/>
            يقطع هذا المثال جزءًا من سلسلة من الموضع 7 إلى الموضع 13
        </p>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js8_string8.png' %}" className="img"/>
        <div className="styleee"><h2> Banana </h2></div>
        <div className="mital"> متال 2 :  </div>
        <img src="{% static 'js/js8_string12.png' %}" className="img"/>
        <div className="styleee"><h2> Banana </h2></div>
        <h5 className="title-h5">2. <bdi>substring() method</bdi></h5>
        <p className="style_divv">
        <bdi><b>substring()</b></bdi> تشبه الشريحة .<br/>
            الفرق هو أن <bdi><b>substring()</b></bdi> لا يمكنها قبول الفهارس السالبة
        </p>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js8_string9.png' %}" className="img"/>
        <div className="styleee"><h2> Kiwi </h2></div>
        <h5 className="title-h5">3. <bdi>substr() method</bdi></h5>
        <p className="style_divv">
            <bdi><b>substr()</b></bdi> يشبه <bdi><b>slice()</b></bdi>.<br/>
            الفرق هو أن المعلمة الثانية تحدد طول الجزء المستخرج.
        </p>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js8_string10.png' %}" className="img"/>
        <div className="styleee"><h2> Ba </h2></div>
        <div className="mital"> متال 2 :  </div>
        <ul><li> تستقبل الدالة القيم السالبة أيضا </li></ul>
        <img src="{% static 'js/js8_string11.png' %}" className="img"/>
        <div className="styleee"><h2> Kiwi </h2></div>
        <h2 className="title-h2" id="replace">5. Replace String</h2>
        <p className="style_divv">
            تستبدل الدالة <bdi><b>replace()</b></bdi> قيمة محددة بقيمة أخرى في سلسلة.<br/>
        {/* <div className="codeStudio alert bg-dark OBject" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags)">let</span> text = <span style="color:orange;">"Please visit Microsoft"</span>;
        <span style="color:var(--html-color-tags)">let</span> newText = text.<span style="color:gold">replace</span>(<span style="color:orange;">"Microsoft"</span>, <span style="color:orange;">"JavaScript"</span>);</pre>
        </div> */}
        </p>
        <div className="mital"> متال :  </div>
        <ul><li> يمكن تغيير محتوى <b>HTML</b> عبر إستخدام الدالة <b><bdi>replace()</bdi></b> .</li></ul>
        <img src="{% static 'js/js8_string13.png' %}" className="img"/>
        <div className="styleee"><h2> Please visit JavaScript </h2></div>
        <div className="alert bg-warning" >
        <ul>
            <li> الدالة <b><bdi>replace()</bdi></b> لا تغير السلسلة التي تم استدعاؤها عليها. </li>
            <li   li> الدالة <b><bdi>replace()</bdi></b>  ترجع سلسلة نصية جديدة.</li>
        </ul>
        </div>
        
        <h2 className="title-h2" id="Upper">6. Converting to Upper and Lower Case</h2>
        <p className="style_divv">
            يتم تحويل متغير من نوع <b>string</b> إلى أحرف كبيرة باستخدام <b><bdi>toUpperCase()</bdi></b>.<br/>
            يتم تحويل متغير من نوع <b>string</b> إلى أحرف صغيرة باستخدام <b><bdi>toLowerCase()</bdi></b>  
        {/* <div className="codeStudio alert bg-dark OBject" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags);">let</span> text = <span style="color:orange;">"Hello Word"</span>;
        <span style="color:var(--html-color-tags);">let</span> newText = text.<span style="color:gold">toUpperCase()</span>;</pre>
        </div> */}
        {/* <div className="codeStudio alert bg-dark OBject" dir="ltr">
        <pre><span style="color:var(--html-color-tags);">let</span> text = <span style="color:orange;">"Hello Word"</span>;
        <span style="color:var(--html-color-tags);">let</span> newText = text.<span style="color:gold">toLowerCase()</span>;</pre>
        </div> */}
        </p>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js8_string14.png' %}" className="img"/>
        <div className="styleee"><h2> HELLO WORD </h2></div>
        <div className="mital"> متال 2 :  </div>
        <img src="{% static 'js/js8_string15.png' %}" className="img"/>
        <div className="styleee"><h2> hello word </h2></div>
        
        <h2 className="title-h2" id="concat">7. JavaScript String concat</h2>
        <p className="style_divv">
            تستعمل الدالة <b><bdi>concat()</bdi></b> لجمع قيمتين من نوع <b>string</b> .<br/>   
            يمكن استخدام طريقة <b><bdi>concat()</bdi></b> بدلاً من عامل الجمع
        {/* <div className="codeStudio alert bg-dark OBject" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags);">let</span> text = <span style="color:orange;">"Reda"</span>;
        <span style="color:var(--html-color-tags);">let</span> text2 = <span style="color:orange;">"Eskouni"</span>;
        <span style="color:var(--html-color-tags);">let</span> text3 = text.<span style="color:gold">concat</span>(<span style="color:orange;">" "</span>, text2);</pre>
        </div> */}
        </p>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js8_string16.png' %}" className="img"/>
        <div className="styleee"><h2> Reda Eskouni </h2></div>
        <div className="mital"> متال 2 :  </div>
        <img src="{% static 'js/js8_string17.png' %}" className="img"/>
        <div className="styleee"><h2> Reda Eskouni </h2></div>
        <h2 className="title-h2" id="trim">8. JavaScript String trim</h2>
        <p className="style_divv">
            تستعمل الدالة <b><bdi>trim()</bdi></b> لإزالة المسافة البيضاء من جانبي السلسلة .<br/>
        {/* <div className="codeStudio alert bg-dark OBject" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags);">let</span> text1 = <span style="color:orange;">"&nbsp; &nbsp; Reda &nbsp; &nbsp;"</span>;
        <span style="color:var(--html-color-tags);">let</span> text2 = text1.<span style="color:gold">trim()</span>;</span>
        </div> */}
        </p>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js8_string18.png' %}" className="img"/>
        <div className="styleee"><h2> Reda </h2></div>
        <h2 className="title-h2" id="Padding">9. JavaScript String Padding</h2>
        <p className="style_divv">
            تستعمل الدالة <b><bdi>padStart</bdi></b>  و <b><bdi>padEnd</bdi></b> لدعم الحشو في بداية السلسلة ونهايتها .
        </p>
        <h5 className="title-h5">1. <bdi>padStart()</bdi></h5>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js8_string19.png' %}" className="img"/>
        <div className="styleee"><h2>0005</h2></div>
        <div className="mital"> متال 2 :  </div>
        <img src="{% static 'js/js8_string20.png' %}" className="img"/>
        <div className="styleee"><h2>0000Reda</h2></div>
        <h5 className="title-h5">2. <bdi>padEnd()</bdi></h5>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js8_string21.png' %}" className="img"/>
        <div className="styleee"><h2>5000</h2></div>
        <h2 className="title-h2" id="charAt">10. JavaScript String charAt</h2>
        <p className="style_divv">
        تستعمل الدالة <b><bdi>charAt</bdi></b>  لإرجاع الحرف في فهرس (موضع) محدد في المتغير النصي .<br/>
        {/* <div className="codeStudio alert bg-dark OBject" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags)">let</span> text = <span style="color:orange;">"Hello Word"</span>;
        <span style="color:var(--html-color-tags)">let</span> newText = text.<span style="color:gold">charAt(</span>0<span style="color:gold">)</span>;</pre>
        </div> */}
        </p>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js8_string22.png' %}" className="img"/>
        <div className="styleee"><h2>H</h2></div>
        <h2 className="title-h2" id="split">11. JavaScript String split</h2>
        <p className="style_divv">
            تستعمل الدالة <b><bdi>split</bdi></b> لتقسم سلسلة إلى مصفوفة من السلاسل الفرعية .<br/>
            طريقة <bdi><b>split()</b></bdi> ترجع المصفوفة الجديدة .<br/>
            طريقة <bdi><b>split()</b></bdi> لا تغير السلسلة الأصلية .<br/>
            إذا تم استخدام <bdi><b>split(" ")</b></bdi> كفاصل ، يتم تقسيم السلسلة بين الكلمات .<br/>
        {/* <div className="codeStudio alert bg-dark OBject" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags)">let</span> text = <span style="color:orange;">"Hello Word"</span>;
        <span style="color:var(--html-color-tags)">let</span> array = text.<span style="color:gold">split(</span><span style="color:orange;">""</span><span style="color:gold">)</span>;</pre>
        </div> */}
        </p>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js8_string23.png' %}" className="img"/>
        <div className="styleee"><h2> HTML <br/> CSS<br/> JavaScript<br/> PHP<br/> MYSQL<br/> React<br/> undefined </h2></div>
    </article>
</section>
    )
}