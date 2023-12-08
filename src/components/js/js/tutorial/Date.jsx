export default function Date(){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Date</h1>
    <article>
        <h2 className="title-h2">1. date</h2>
        <p class="style_divv">
            بشكل افتراضي ، ستستخدم <b>JavaScript</b> المنطقة الزمنية للمتصفح وتعرض التاريخ كسلسلة نصية كاملة
            {/* <div class="codeStudio codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--html-color-tags)">let</span> variable = <span style="color:var(--html-color-tags)">new</span> <span style="color:lime">Date()</span></pre>
            </div> */}
        </p>
        <div class="mital">متال :  </div>
        <ul><li>من خلال الكائن <b><bdi>Date()</bdi></b> يمكن للمتصفح عرض التاريخ الحالي لك .</li></ul>
        <img src="{% static 'js/js13_Date.png' %}" class="img"/>
        <div class="styleee">
            <h2 id="Date">  </h2>
            <script>
                let variable = new Date();
                document.getElementById("Date").innerHTML = variable ;  
            </script>
        </div>
        <div class="mital"> متال 2 :  </div>
        <img src="{% static 'js/js13_Date2.png' %}" class="img"/>
        <div class="styleee">
            <h2> Tue Aug 17 2021 10:33:30 GMT+0100 (UTC+01:00) </h2>
        </div>
        <div class="mital"> متال 3 :  </div>
        <img src="{% static 'js/js13_Date3.png' %}" class="img"/>
        <div class="styleee">
            <h2> Fri Dec 24 2021 00:00:00 GMT+0100 (UTC+01:00) </h2>
        </div>
    </article>
    <article>
        <h2 className="title-h2">2. Date with string</h2>
        <p class="style_divv">
            يقوم  التاريخ <b><bdi>Date()</bdi></b> بإنشاء كائن تاريخ جديد من سلسلة التاريخ
            {/* <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--html-color-tags)">let</span> variable = <span style="color:var(--html-color-tags)">new</span> <span style="color:lime">Date(</span><span style="color:orange">"October 17, 2021 11:14:00"</span><span style="color:lime">)</span></pre>
            </div> */}
        </p>
        <div class="mital"> متال :  </div>
        <img src="{% static 'js/js13_Date4.png' %}" class="img"/>
        <div class="styleee">
            <h2>Sun Oct 17 2021 11:14:00 GMT+0100 (UTC+01:00)</h2>
        </div>
    </article>
</section>
    )
}