export default function ArraysPart1(){

    //const fruits = [ "Orange","Banana","Apple","Mango"];
    //fruits[9] = "Lemon"
    //for( let i=0 ; i<fruits.length ; i++){
    //    document.getElementById("h2").innerHTML += "Index = " + i +" => " + fruits[i] + "<br/>";
    //}

    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Arrays</h1>
    <article>
        <details>
            <summary> جميع العناوين  </summary>
                <div dir="ltr">
                   <a href="#length">length</a>       
                   <a href="#shift"><bdi>shift()</bdi></a>
                   <a href="#unshift"><bdi>unshift()</bdi></a>
                   <a href="#Array-isArray"><bdi>Array.isArray()</bdi></a>
                   <a href="#Array-isArray">instanceof</a>
                   <a href="#toString"> <bdi>toString()</bdi> </a>
                   <a href="#join"> <bdi>join()</bdi> </a>
                   <a href="#push"><bdi>push()</bdi></a>
                   <a href="#push"><bdi>pop()</bdi></a>
                   <a href="#delete">delete</a>
                </div>
        </details>
    </article>
    <article>
        <p className="style_divv mt-5">
            المصفوفة هي متغير خاص يمكن أن يحتوي على أكثر من قيمة .<br/>
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--html-color-tags);">const</span> cars = [<span style="color:orange">"Saab"</span>, <span style="color:orange">"Volvo"</span>, <span style="color:orange">"BMW"</span>];</pre>
            </div> */}
        </p>
        <div className="mital">متال :  </div>
        <img src="{% static 'js/js17_Arrays.png' %}" className="img"/>
        <div className="styleee"><h2> Saab <br/> Volvo <br/> BMW </h2></div>
    </article>
    <article>
        <h2 className="title-h2">1. لماذا استخدام المصفوفة؟</h2>
        <p className="style_divv">
            إذا كانت لديك قائمة بالعناصر (قائمة بأسماء السيارات ، على سبيل المثال) ، فقد يبدو تخزين السيارات في متغيرات فردية بهذا الشكل
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags);">let</span> car1 = <span style="color:orange">"Saab"</span>;
        <span style="color:var(--html-color-tags);">let</span> car2 = <span style="color:orange">"Volvo"</span>;
        <span style="color:var(--html-color-tags);">let</span> car3 = <span style="color:orange">"BMW"</span>;</pre>
            </div> */}
            ومع ذلك ، ماذا لو كنت تريد المرور عبر السيارات والعثور على واحدة محددة؟ وماذا لو لم يكن لديك 3 سيارات ، بل 300؟<br/>
            الحل هو مصفوفة!<br/>
            يمكن أن تحتوي المصفوفة على العديد من القيم تحت اسم واحد ، ويمكنك الوصول إلى القيم بالإشارة إلى رقم الفهرس.<br/>
        </p>
    </article>
    <article>
        <h2 className="title-h2">2. إنشاء مصفوفة</h2>
        <p className="style_divv">
            يعد استخدام المصفوفة الحرفية أسهل طريقة لإنشاء مصفوفة <b>JavaScript</b>.<br/>
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--html-color-tags);">const</span> array_name = [item1 , item2 , ... ];</pre>
            </div> */}
            يمكنك أيضًا إنشاء مصفوفة ، ثم توفير العناصر:
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags);">const</span> array_name = [ ];
        array_name [<span style="color:var(--arr-num-color)">0</span>] = item1 
        array_name [<span style="color:var(--arr-num-color)">1</span>] = item2 
        array_name [<span style="color:var(--arr-num-color)">2</span>] = item3 </pre>
            </div> */}
            يمكنك أيضًا إنشاء مصفوفة ، بطريقة التالية :
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--html-color-tags)">const</span> cars = <span style="color:var(--html-color-tags)">new</span> <span style="color:lime">Array</span>(item1, item2, item3 , ..);</pre>
            </div> */}
        </p>
        <div className="alert bg-warning">
            إنها ممارسة شائعة للإعلان عن المصفوفات باستخدام الكلمة الأساسية <b>const</b>.<br/>
            المثالان أعلاه يفعلان نفس الشيء تمامًا.<br/>
            ليست هناك حاجة لاستخدام <bdi><b>new Array()</b></bdi><br/>
            للبساطة وسهولة القراءة وسرعة التنفيذ ، استخدم طريقة المصفوفة الحرفية.<br/>
        </div>
    </article>
    <article>
        <h2 className="title-h2">3. الوصول إلى عناصر المصفوفة</h2>
        <p className="style_divv">
            يمكنك الوصول إلى عنصر مصفوفة بالرجوع إلى رقم الفهرس (يبدأ الفهرس من 0)
        </p>
    </article>
    <article>
        <h2 className="title-h2">4. تغيير عناصر المصفوفة</h2>
        <p className="style_divv">
            هذا البيان يغير قيمة العنصر الأول في المصفوفة  <br/>
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags)">const</span> array_name = [item1 , item2 , ... ];
        array_name[<span style="color:var(--arr-num-color)">0</span>] = new_item ;</pre>
            </div> */}
        </p>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js17_Arrays2.png' %}" className="img"/>
        <div className="styleee"><h2> Mercedes  <br/> Volvo <br/> BMW </h2></div>
        <div className="mital"> متال 2 : </div>
        <img src="{% static 'js/js17_arrays3.png' %}" className="img"/>
        <div className="styleee"><h2> Reda Eskouni 25 ans </h2></div>
    </article>
    <article>
        <h2 className="title-h2">5. الوصول إلى المصفوفة كامل</h2>
        <p className="style_divv">
            باستخدام <b>JavaScript</b> ، يمكن الوصول إلى المصفوفة الكاملة بالرجوع إلى اسم المصفوفة
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags);">const</span> cars = [<span style="color:orange">"Saab"</span>, <span style="color:orange">"Volvo"</span>, <span style="color:orange">"BMW"</span>];
        <span style="color:var(--js-color);">document</span>.<span style="color:gold">getElementById(<span style="color:orange">"id"</span>)</span>.<span style="color:var(--js-color);">innerHTML</span> = cars</pre>
            </div> */}
        </p>
        <div className="mital">متال :  </div>
        <img src="{% static 'js/js17_Arrays3 2.png' %}" className="img"/>
        <div className="styleee"><h2> Saab,Volvo,BMW </h2></div>
    </article>
    <article>
        <h2 className="title-h2">6. المصفوفات هي كائن </h2>
        <p className="style_divv">
            المصفوفات هي نوع خاص من الكائنات. يُرجع عامل التشغيل <b>typeof</b> في <b>JavaScript</b> "كائن"للمصفوفات.<br/>
            لكن أفضل وصف لمصفوفات <b>JavaScript</b> هي  <b>arrays</b> 
        </p>
        <div className="mital">متال :  </div>
        <img src="{% static 'js/js17_Arrays4.png' %}" className="img"/>
        <div className="styleee"><h2> object </h2></div>
    </article>
    <article>
        <h2 className="title-h2" id="length">7. المصفوفات و الخاصية length</h2>
        <p className="style_divv">
            ترجع خاصية <b>length</b> لمصفوفة طول المصفوفة (عدد عناصر المصفوفة).<br/>
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags);">const</span> cars = [<span style="color:orange">"Saab"</span>, <span style="color:orange">"Volvo"</span>, <span style="color:orange">"BMW"</span>];
        <span style="color:var(--js-color)">document</span>.<span style="color:gold">getElementById(<span style="color:orange">"id"</span>)</span>.<span style="color:var(--js-color);">innerHTML</span> = <span style="color:var(--js-color);">cars</span>.<span style="color:var(--js-color);">length</span></pre>
            </div> */}
        </p>
        <div className="sum_exemple_style">
        <div className="mital">متال :  </div>
        <img src="{% static 'js/js17_Arrays5.png' %}" className="img"/>
        <div className="styleee"><h2> 3 </h2></div>
        </div>
    </article>
    <article>
        <h2 className="title-h2">8. الوصول إلى عنصر المصفوف الأول </h2>
        <p className="style_divv">
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags);">const</span> fruits = [<span style="color:orange">"Banana"</span>, <span style="color:orange">"Orange"</span>, <span style="color:orange">"Apple"</span>, <span style="color:orange">"Mango"</span>];
        <span style="color:var(--html-color-tags);">let</span> fruit = fruits[<span style="color:rgb(80,210,80)">0</span>];</pre>
            </div> */}
        </p>
        <div className="mital">متال :  </div>
        <img src="{% static 'js/js17_Arrays7.png' %}" className="img"/>
        <div className="styleee"><h2> Pineapple </h2></div>
    </article>
    <article>
        <h2 className="title-h2">9. الوصول إلى آخر عناصر المصفوف</h2>
        <p className="style_divv">
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top:9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags);">const</span> fruits = [ <span style="color:orange">"Orange"</span>,<span style="color:orange">"Banana"</span>,<span style="color:orange">"Apple"</span>,<span style="color:orange">"Mango"</span>];
        <span style="color:var(--html-color-tags);">let</span> fruit = fruits[fruits.<span style="color:var(--js-color);">length</span> - 1];</pre>
            </div> */}
        </p>
        <div className="mital">متال :  </div>
        <img src="{% static 'js/js17_Arrays8.png' %}" className="img"/>
        <div className="styleee"><h2> Mango </h2></div>
    </article>
    <article>
        <h2 className="title-h2" id="push">10. إضافة عناصر إلى المصفوفة </h2>
        <p className="style_divv">
            أسهل طريقة لإضافة عنصر جديد إلى المصفوفة هي استخدام طريقة <bdi><b>push()</b></bdi> .
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top:9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags);">const</span> fruits = [<span style="color:orange">"Orange"</span>,<span style="color:orange">"Banana"</span>,<span style="color:orange">"Apple"</span>,<span style="color:orange">"Mango"</span>];
        fruits.<span style="color:gold">push(</span><span style="color:orange">"Lemon"</span><span style="color:gold">)</span>;</pre>
            </div> */}
            يمكن أيضًا إضافة عنصر جديد إلى مصفوفة باستخدام خاصية <b>length</b>
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top:9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags)">const</span> fruits = [ <span style="color:orange">"Orange"</span>,<span style="color:orange">"Banana"</span>,<span style="color:orange">"Apple"</span>,<span style="color:orange">"Mango"</span>];
        fruits[fruits.<span style="color:var(--js-color)">length</span>] = <span style="color:orange">"Lemon"</span></pre>
            </div> */}
        </p>
        <div className="mital">متال :  </div>
        <img src="{% static 'js/js17_Arrays9.png' %}" className="img"/>
        <div className="styleee"><h2> Lemon </h2></div>
        <div className="mital">متال 2 :</div>
        <img src="{% static 'js/js17_Arrays10.png' %}" className="img"/>
        <div className="styleee"><h2> Lemon </h2></div>
        <div className="mital">متال 3 :</div>
        <img src="{% static 'js/js17_Arrays11.png' %}" className="img"/>
        <div className="styleee">
            <h2 id="h2">  </h2>
        </div>
        <div className="alert bg-danger"> يمكن أن تؤدي إضافة عناصر ذات فهارس عالية إلى إنشاء "ثقوب" غير محددة في المصفوفة . </div>
    </article>
    <article>
        <h2 className="title-h2" id="Array-isArray">11. كيفية التعرف على المصفوفة </h2>
        <p className="style_divv">
            السؤال الشائع هو: كيف أعرف ما إذا كان المتغير عبارة عن مصفوفة؟ <br/>
            تكمن المشكلة في أن عامل تشغيل <bdi><b>JavaScript typeof</b></bdi> يعرض "object" <br/>  
            لحل هذه المشكلة توجد طريقتين <br/>
            <span><b>الطريقة 1 :</b></span>
            {/* <div  className="codeStudio alert bg-dark" dir="ltr" style="margin-top:9px;padding-bottom:0pt;">
                <pre><span style="color:lime;">Array</span>.<span style="color:gold">isArray(</span>names<span style="color:gold">)</span></pre>
            </div> */}
            <span><b>الطريقة 2 :</b></span>
            {/* <div  className="codeStudio alert bg-dark" dir="ltr" style="margin-top:9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags)">const</span> names = [<span style="color:orange">"Banana"</span>,<span style="color:orange">"Orange"</span>,<span style="color:orange">"Apple"</span>];
        names <span style="color:gold">instanceof</span> <span style="color:lime">Array</span>;</pre>
            </div> */}
        </p>
        <div className="mital">متال :</div>
        <img src="{% static 'js/js17_Arrays12.png' %}" className="img"/>
        <div className="styleee"><h2>true</h2></div>
        <div className="mital">متال 2 :</div>
        <img src="{% static 'js/js17_Arrays13.png' %}" className="img"/>
        <div className="styleee"><h2>true</h2></div>
    </article>
    <article>
        <h2 className="title-h2">12. تحويل المصفوفات إلى string </h2>
        <h5 className="title-h5" id="toString">1. <bdi>toString()</bdi></h5>
        <p className="style_divv">
            تحوّل طريقة <b><bdi>toString()</bdi></b> مصفوفة (<small>array</small>) إلى <b>string</b> من قيم الصفيف (<small>مفصولة بفاصلة</small>) .
            {/* <div  className="codeStudio alert bg-dark" dir="ltr" style="margin-top:9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags);">const</span> fruits = [<span style="color:orange">"Banana"</span>,<span style="color:orange">"Orange"</span>,<span style="color:orange">"Apple"</span>,<span style="color:orange">"Mango"</span>];
        <span style="color:var(--js-color);">document</span>.<span style="color:gold;">getElementById(</span><span style="color:orange;">"h2"</span><span style="color:gold;">)</span>.<span style="color:var(--js-color);">innerHTML</span> = <span style="color:var(--js-color);">fruits</span>.<bdi><span style="color:gold;">toString()</span></bdi>;</pre>
            </div> */}
        </p>
        <div className="mital">متال :</div>
        <img src="{% static 'js/js17_Arrays14.png' %}" className="img"/>
        <div className="styleee"><h2>Banana,Orange,Apple,Mango</h2></div>
        <h5 className="title-h5" id="join">2. <bdi>join()</bdi></h5>
        <p className="style_divv">
            يقوم <b><bdi>join()</bdi></b> أيضًا بضم جميع عناصر المصفوفة في سلسلة نصية يتصرف تمامًا مثل <b><bdi>toString()</bdi></b> ، ولكن بالإضافة إلى ذلك ، يمكنك تحديد الفاصل.
            {/* <div  className="codeStudio alert bg-dark" dir="ltr" style="margin-top:9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags)">const</span> fruits = [<span style="color:orange">"Banana"</span>,<span style="color:orange">"Orange"</span>,<span style="color:orange">"Apple"</span>,<span style="color:orange">"Mango"</span>];
        <span style="color:var(--js-color)">document</span>.<span style="color:gold;">getElementById(</span><span style="color:orange;">"h2"</span><span style="color:gold;">)</span>.<span style="color:var(--js-color)">innerHTML</span> = <span style="color:var(--js-color);">fruits</span>.<bdi><span style="color:gold;">join(</span><span style="color:orange">" / "</span><span style="color:gold;">)</span></bdi>;</pre>
            </div> */}
        </p>
        <div className="mital">متال :</div>
        <img src="{% static 'js/js17_Arrays15.png' %}" className="img"/>
        <div className="styleee"><h2>Banana / Orange / Apple / Mango</h2></div>
    </article>
    <article>   
        <h2 className="title-h2">13. إضافة و إزالة عنصر من المصفوفة  </h2>
        <p className="style_divv">
            عندما تعمل مع المصفوفات ، فمن السهل إزالة العناصر وإضافة عناصر جديدة.<br/>
            إخراج العناصر من المصفوفة  <b>Popping</b>  ، أو دفع العناصر إلى المصفوفة <b>Pushing</b>.
        </p>
        <h5 className="title-h5" id="pop">1. الخاصية <bdi>pop()</bdi></h5>
        <p className="style_divv">
            تزيل طريقة <bdi><b>pop()</b></bdi> العنصر الأخير من المصفوفة <br/>
            {/* <div  className="codeStudio alert bg-dark" dir="ltr" style="margin-top:9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags)">const</span> fruits = [<span style="color:orange">"Banana"</span>,<span style="color:orange">"Orange"</span>,<span style="color:orange">"Apple"</span>,<span style="color:orange">"Mango"</span>];
        <span style="color:var(--js-color);">fruits</span>.<bdi><span style="color:gold;">pop()</span></bdi>;</pre>
            </div> */}
        </p>
        <div className="mital">متال :</div>
        <img src="{% static 'js/js17_Arrays16.png' %}" className="img"/>
        <div className="styleee"><h2>Banana,Orange,Apple</h2></div>
        
        <h5  className="title-h5" id="push">2. الخاصية <bdi>push()</bdi></h5>
        <p className="style_divv">
            تضيف <b><bdi>push()</bdi></b> عنصرًا جديدًا في نهاية المصفوفة
            {/* <div  className="codeStudio alert bg-dark" dir="ltr" style="margin-top:9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags);">const</span> fruits = [<span style="color:orange">"Banana"</span>,<span style="color:orange">"Orange"</span>,<span style="color:orange">"Apple"</span>];
        <span style="color:var(--js-color);">fruits</span>.<bdi><b style="color:gold;">push(</b></bdi><span style="color:orange">"Lemon"</span><bdi><span style="color:gold;">)</span></bdi>;</pre>
            </div> */}
        </p>
        <div className="mital">متال :</div>
        <img src="{% static 'js/js17_Arrays17.png' %}" className="img"/>
        <div className="styleee"><h2>Banana,Orange,Apple,Lemon</h2></div>
        <h5  className="title-h5" id="shift">3. الخاصية <bdi>shift()</bdi></h5>
        <p className="style_divv">
            تقوم طريقة <bdi><b>shift()</b></bdi> بإزالة عنصر المصفوفة الأول و "إزاحة" جميع العناصر الأخرى إلى فهرس أقل.
            {/* <div  className="codeStudio alert bg-dark" dir="ltr" style="margin-top:9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags);">const</span> fruits = [<span style="color:orange">"Banana"</span>,<span style="color:orange">"Orange"</span>,<span style="color:orange">"Apple"</span>];
        <span style="color:var(--js-color);">fruits</span>.<bdi><span style="color:gold;">shift()</span></bdi>;</pre>
            </div> */}
        </p>
        <div className="mital">متال :</div>
        <img src="{% static 'js/js17_Arrays18.png' %}" className="img"/>
        <div className="styleee"><h2>Orange,Apple</h2></div>
        <h5 className="title-h5" id="unshift">4. الخاصية <bdi>unshift()</bdi></h5>
        <p className="style_divv">
            تضيف طريقة  <bdi><b>unshift()</b></bdi> عنصرًا جديدًا إلى مصفوفة (في البداية) .<br/>
            {/* <div  className="codeStudio alert bg-dark" dir="ltr" style="margin-top:9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags);">const</span> fruits = [<span style="color:orange">"Banana"</span>,<span style="color:orange">"Orange"</span>,<span style="color:orange">"Apple"</span>];
        <span style="color:var(--js-color);">fruits</span>.<bdi><b style="color:gold;">unshift(<small style="color:orange">"Kiwi"</small>)</b></bdi>;</pre>
            </div> */}
        </p>
        <div className="mital">متال :</div>
        <img src="{% static 'js/js17_Arrays19.png' %}" className="img"/>
        <div className="styleee"><h2>Kiwi,Banana,Orange,Apple</h2></div>
        <div className="mital">متال 2 :</div>
        <img src="{% static 'js/js17_Arrays20.png' %}" className="img"/>
        <div className="styleee"><h2>Kiwi,Orange,Lemon,Apple</h2></div>
        <h5 className="title-h5" id="delete">4. الخاصية delete </h5>
        <p className="style_divv">
            يمكن حذف عناصر المصفوفة باستخدام عامل الحذف <b>delete</b>.<br/>
            استخدام <b>delete</b> يترك ثقوبًا غير محددة في المصفوفة.
            {/* <div  className="codeStudio alert bg-dark" dir="ltr" style="margin-top:9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags);">const</span> fruits = [<span style="color:orange">"Banana"</span>,<span style="color:orange">"Orange"</span>,<span style="color:orange">"Apple"</span>];
        <span style="color:var(--violet-color);">delete</span> fruits[<span style="color:var(--arr-num-color)">2</span>];</pre>
            </div> */}
        </p>
        <div className="mital">متال :</div>
        <img src="{% static 'js/js17_Arrays21.png' %}" className="img"/>
        <div className="styleee">
            <h2>Banana,Orange,,,Lemon,Fig,Pear</h2>
            <h2>index 2 = undefined index 3 = undefined</h2>
        </div>
    </article>
</section>
    )
}