export default function Cookie(){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript cookie</h1>
    <article>
        <h2 className="title-h2">1- What are Cookies</h2>
        <p className="style_divv">
             تتيح لك الخاصية <b>cookie</b> تخزين معلومات المستخدم في صفحات الويب. <br/>
            ملفات تعريف الارتباط هي بيانات مخزنة في ملفات نصية صغيرة على جهاز الكمبيوتر الخاص بك.<br/><br/>
            عندما يرسل خادم الويب صفحة ويب إلى متصفح ، يتم إيقاف الاتصال ، وينسى الخادم كل شيء عن المستخدم. <br/><br/> 
            تم اختراع <b>cookie</b> لحل مشكلة كيفية تذكر المعلومات عن المستخدم <br/>
            <ul>
                <li>عندما يزور المستخدم صفحة ويب ، يمكن تخزين اسمه في <b>cookie</b> .</li>
                <li>في المرة التالية التي يزور فيها المستخدم الصفحة ، "يتذكر"  <b>cookie</b> اسمه.</li>
            </ul>
            <div className="alert alert-danger">
                لن يعمل أي من الأمثلة أدناه إذا كان المستعرض الخاص بك به دعم <b>local cookies </b>  متوقفًا عن التشغيل.
            </div>
        </p>
    </article>
    <article>
        <h2 className="title-h2">2- Create a Cookie with JavaScript</h2>
        <p className="style_divv">
            يمكن لـ <b>JavaScript</b> إنشاء ملفات تعريف الارتباط وقراءتها وحذفها باستخدام خاصية <b>document.cookie</b>.<br/>
            باستخدام <b>JavaScript</b> ، يمكن إنشاء <b>cookie</b> مثل هذا.
            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
                <pre><span style="color:var(--js-color)">document</span>.<span style="color:var(--js-color)">cookie</span> = <span style="color:orange">"user_name = Reda Eskouni"</span></pre>
            </div> */}
            يمكنك أيضًا إضافة تاريخ انتهاء الصلاحية <small><bdi>(بتوقيت UTC)</bdi></small>. افتراضيًا ، يتم حذف <b>cookie</b> عند إغلاق المتصفح
            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
                <pre><span style="color:var(--js-color)">document</span>.<span style="color:var(--js-color)">cookie</span> = <span style="color:orange">"user_name = Reda Eskouni; expires=Thu, 7 April 2022 7:37:00 UTC"</span></pre>
            </div> */}
            باستخدام معلمة المسار ، يمكنك إخبار المتصفح بالمسار الذي ينتمي إليه <b>cookie</b> . بشكل افتراضي ، ينتمي <b>cookie</b> إلى الصفحة الحالية.
            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
                <pre><span style="color:var(--js-color)">document</span>.<span style="color:var(--js-color)">cookie</span>=<span style="color:orange">"user_name = Reda Eskouni; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/"</span></pre>
            </div> */}
        </p>
    </article>
    <article>
        <h2 className="title-h2">3- Read a Cookie with JavaScript</h2>
        <div className="style_divv">
            باستخدام <b>JavaScript</b> ، يمكن قراءة  <b>cookie</b> على هذا النحو :  
            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
                <pre><span style="color:var(--html-color-tags)">let</span> x = <span style="color:var(--js-color)">document</span>.<span style="color:var(--js-color)">cookie</span></pre>
            </div> */}
            سيعيد document.cookie جميع  <b>cookie</b> في سلسلة واحدة <bdi> cookie1=value; cookie2=value; cookie3=value; </bdi>
        </div>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js61_cookie.png' %}" className="img"/>
        <div className="styleee">
            user_name = Reda Eskouni;age = 25ans;<br/>
        </div>
        <b>string</b>
    </article>
    <article>
        <h2 className="title-h2">4- Change a Cookie with JavaScript</h2>
        <p className="style_divv">
            باستخدام <b>JavaScript</b> ، يمكنك تغيير <b>cookie</b> بنفس طريقة إنشائه . <br/>
        </p>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js61_cookie2.png' %}" className="img"/>
        <div className="styleee">
            user_name = Reda Eskouni;age = 25ans;<br/>
            <b>string</b><br/>
            user_name = Aymane Toumi;age = 18ans;
        </div>
    </article>
    <article>
        <h2 className="title-h2">5- Delete a Cookie with JavaScript </h2>
        <p className="style_divv">
            يعد حذف <b>cookie</b> أمرًا بسيطًا للغاية.<br/>
            لا يتعين عليك تحديد قيمة <b>cookie</b> عند حذفها. <br/>
            ما عليك سوى تعيين معلمة انتهاء الصلاحية على تاريخ سابق <br/>

            {/* <div className="codeStudio alert bg-dark mt-2 mb-3 pb-0" dir="ltr">
                <pre><span style="color:var(--js-color)">document</span>.<span style="color:var(--js-color)">cookie</span> = <span style="color:orange">"username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"</span></pre>
            </div> */}
            <div className="alert alert-warning mt-2">
                يجب عليك تحديد مسار ملف تعريف الارتباط للتأكد من حذف ملف تعريف الارتباط الصحيح.<br/>
                لن تسمح لك بعض المتصفحات بحذف ملف تعريف الارتباط إذا لم تحدد المسار.
            </div>
        </p>
        <div className="alert alert-info mt-3">
            إذا كنت تريد العثور على قيمة ملف تعريف ارتباط محدد واحد ، فيجب عليك كتابة دالة <b>JavaScript</b> تبحث عن قيمة <b>cookie</b> في <bdi><b>string cookie</b></bdi> 
        </div>
    </article>
</section>
    )
}