export default function Statements(){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Statements</h1>
    <article>
        <p className="style_divv mt-5">
            برنامج الكمبيوتر هو قائمة "تعليمات" ليتم "تنفيذها" بواسطة جهاز كمبيوتر .<br/>
            في لغة البرمجة ، تسمى تعليمات البرمجة هذه العبارات .<br/>
            برنامج <b>JavaScript</b> هو قائمة ببيانات البرمجة .<br/><br/>
            تتكون جمل   <b>JavaScript</b> من:<br/>
            <ul dir="ltr">
                <li><b>Values</b> : القيم .</li>
                <li><b>Operators</b> : المعاملات .</li>
                <li><b>Expressions</b> : التعبيرات .</li>
                <li><b>Keywords</b> : الكلمات الرئيسية .</li>
                <li><b>Comments</b> : التعليقات .</li>
            </ul>
        </p>
        <div className="mital">متال :  </div>
        <ul><li> هذا السطر البرمجي يخبر المتصفح بكتابة <b>Hello Word</b> . داخل عنصر <b>HTML</b> الذي يحتوي على السمة  <bdi><b>id="hw"</b></bdi> :</li></ul>
        <img src="{% static 'js/js3_Statements.png' %}" className="img"/>
        <div className="styleee img"><h2> Hello Word </h2></div>
        <ul>
            <li> تحتوي معظم برامج <b>JavaScript</b> على العديد من عبارات <b>JavaScript</b> . </li>
            <li> يتم تنفيذ البيانات ، واحدة تلو الأخرى ، بنفس ترتيب كتابتها . </li>
            <li> غالبًا ما تسمى برامج <b>JavaScript</b> و عبارات <b>JavaScript</b> كود جافا سكريبت . </li>
        </ul>
    </article>
    <article>
        <h2 className="title-h2">1. فاصلة منقوطة - Semicolons .</h2>
        <p className="style_divv">
            تفصل الفاصلة المنقوطة عبارات <b>JavaScript</b>.<br/>
            أضف فاصلة منقوطة في نهاية كل عبارة قابلة للتنفيذ لكي لا تحصل على خطأ عند تشغيل الكود .
        </p>
        <div className="mital">متال :  </div>
        <img src="{% static 'js/js3_Statements2.png' %}" className="img"/>
        <div className="styleee"><h2> 6 </h2></div>
        <div className="mital"> متال 2 :  </div>
        <ul>
            <li> على الويب ، قد ترى أمثلة بدون فواصل منقوطة.</li>
            <li> عبارات النهاية بالفاصلة المنقوطة غير مطلوبة ، ولكن يوصى بها بشدة.</li>
            <li>عند الفصل بفاصلة منقوطة ، يُسمح بعبارات متعددة في سطر واحد </li>
        </ul>
        <img src="{% static 'js/js3_Statements3.png' %}" className="img"/>
        <div className="styleee"><h2>6</h2></div>
    </article>
</section>
    )
}