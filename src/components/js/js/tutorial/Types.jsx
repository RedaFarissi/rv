import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Types(){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Data Types</h1>
    <article>
        <p className="style_divv mt-5">
            يمكن أن تحتوي متغيرات جافا سكريبت على أنواع مختلفة من البيانات :
            <ul dir="ltr">
                <li><b>numbers</b></li>
                <li><b>strings</b></li>
                <li><b>objects </b></li>
                <li><b>...</b></li>
            </ul> 
            في البرمجة ، تعتبر أنواع البيانات مفهومًا مهمًا.<br/>
            لتكون قادرًا على العمل على المتغيرات ، من المهم أن تعرف شيئًا عن النوع.<br/>
            بدون أنواع البيانات ، لا يمكن للكمبيوتر حل هذا بأمان
        </p>
        <div className="mital"> متال :  </div>
        <img src={images.js7_types} className="img"/>
        <div className="styleee">
            <p id="x"></p>
            {/* <script>
                var x = 95 + "Reda";
                document.getElementById("x").innerHTML =  x ;
            </script> */}
        </div>
        <div className="mital"> متال 2 :  </div>
        <ul><li>تقوم <b>JavaScript</b> بتقييم التعبيرات من اليسار إلى اليمين. يمكن أن تؤدي التسلسلات المختلفة إلى نتائج مختلفة</li></ul>
        <img src={images.js7_types2} className="img"/>
        <div className="styleee">
            <h2 id="a"></h2>
            <h2 id="b"></h2>
            {/* <script>
                var a = 5 + 5 + "Reda";
                var b =  "Reda" + 5 + 5 ;
                document.getElementById("a").innerHTML =  "a= " + a ;
                document.getElementById("b").innerHTML =  "b= " + b ;
            </script> */}
        </div>
        <div className="mital"> متال 3 :  </div>
        <ul><li> في هاذا المتال تم حساب أول رقمين كأرقام تم بعد إيجاد <b>STRING</b> تم إعتبار باقي النص على أنه من النوع <b>STRING</b>.</li></ul>
        <img src={images.js7_types3} className="img"/>
        <div className="styleee">
            <h2 id="it">  </h2>
            <script>
                var it = 5 + 5 + " Reda " + 5 + 5 ;
                document.getElementById("it").innerHTML =  "it = " + it ;
            </script>
        </div>
    </article>
    <article>
        <h2 className="title-h2">1. JavaScript Dynamic </h2>
        <p className="style_divv">
            أنواع <b>JavaScript</b> ديناميكية .<br/>
            جافا سكريبت لديها أنواع ديناميكية. هذا يعني أنه يمكن استخدام نفس المتغير للاحتفاظ بأنواع بيانات مختلفة
        </p>
        <div className="mital"> متال :  </div>
        <img src={images.js7_types4} className="img"/>
        <div className="styleee">
            <h2> 20 </h2>
            <h2> Mohamed </h2>
        </div>
    </article>
    <article>
        <h2 className="title-h2">2. JavaScript String </h2>
        <p className="style_divv">
            السلسلة (أو السلسلة النصية) هي سلسلة من الأحرف مثل "Lorem" أو  'Lorem'.<br/>
            يتم كتابة السلاسل مع اقتباسات. يمكنك استخدام علامات الاقتباس المفردة أو المزدوجة .
        </p>
        <div className="mital"> متال :  </div>
        <ul><li> ليس هناك فرق بين '' أو "" خلال كتابة متغير من نوع <b>string</b></li></ul>
        <img src={images.js7_types5} className="img"/>
        <img src={images.js7_types5_2} className="img"/>
        <div className="mital"> متال 2 :  </div>
        <ul><li> يمكنك استخدام علامات الاقتباس داخل التغير من نوع <b>string</b> ، طالما أنها لا تتطابق مع علامات الاقتباس المحيطة بالمتغير . </li></ul>
        <img src={images.js7_types6} className="img"/>
        <img src={images.js7_types6_2} className="img"/>
    </article>
    <article>
        <h2 className="title-h2">3. JavaScript Numbers</h2>
        <p className="style_divv">
            يحتوي JavaScript على نوع واحد فقط من الأرقام.<br/>
            يمكن كتابة الأرقام بكسور عشرية أو بدونها .
        </p>
        <div className="mital"> متال :  </div>
        <img src={images.js7_types7} className="img"/>
        <img src={images.js7_types7_2} className="img"/>
    </article>
    <article>
        <h2 className="title-h2">4. JavaScript Booleans</h2>
        <p className="style_divv">
            <b>Booleans</b> وتعني القيم المنطقية . يمكن أن تحتوي القيم المنطقية على قيمتين فقط: <b>true</b> أو <b>false</b>. <br/>
            غالبًا ما تستخدم القيم المنطقية في الاختبار الشرطي.<br/>
            سوف تتعلم المزيد عن النوع <b>Booleans</b> لاحقًا في هذا البرنامج التعليمي .<br/>
        </p>
        <div className="mital"> متال :  </div>
        <img src={images.js7_types8} className="img"/>
        <div className="styleee">
            <h2> true <br/> false </h2> 
        </div>
    </article>
    <article>
        <h2 className="title-h2">5. JavaScript Arrays</h2>
        <p className="style_divv">
            مصفوفات <b>JavaScript</b> مكتوبة بأقواس مربعة.<br/>
            عناصر المصفوفة مفصولة بفاصلات.<br/>
            يعلن الكود التالي مصفوفة تسمى <b>cars</b> ، تحتوي على ثلاثة عناصر (أسماء سيارات) .<br/>
            سوف تتعلم المزيد عن <b>arrays</b> لاحقًا في هذا البرنامج التعليمي .
        </p>
        <div className="mital"> متال :  </div>
        <img src={images.js7_types9} className="img"/>
        <div className="styleee">
            <h2> Saab </h2>
        </div>
    </article>
    <article>
        <h2 className="title-h2">6. JavaScript Objects </h2>
        <p className="style_divv">
            تتم كتابة كائنات جافا سكريبت بأقواس معقوفة <b>{}</b>.<br/>
            سوف تتعلم المزيد عن <b> Objects</b> لاحقًا في هذا البرنامج التعليمي.
        </p>
        <div className="mital"> متال :  </div>
        <img src={images.js7_types10} className="img"/>
        <div className="styleee">
            <h2>Reda Eskouni</h2>
        </div>
    </article>
    <article>
        <h2 className="title-h2">7. JavaScript typeof </h2>
        <p className="style_divv">
            يمكنك استخدام عامل تشغيل <b>typeof</b> للعثور على نوع متغير <b>JavaScript</b>.<br/>
            يُرجع عامل التشغيل <b>typeof</b> نوع متغير أو تعبير
        </p>
        <div className="mital"> متال :  </div>
        <img src={images.js7_types11} className="img"/>
        <div className="styleee">
        <h2 id="demo1"></h2>
            <h2 id="demo2"></h2>
            <script>
               document.getElementById("demo1").innerHTML = typeof ""
               document.getElementById("demo2").innerHTML = typeof 5
            </script>
        </div>
    </article>
    <article>
        <h2 className="titlw-h2">8. JavaScript undefined </h2>
        <p className="style_divv">
            في <b>JavaScript</b> ، المتغير بدون قيمة له قيمة <b>undefined</b>. النوع أيضًا غير محدد.
        </p>
        <div className="mital"> متال :  </div>
        <img src={images.js7_types12} className="img"/>
        <img src={images.js7_types12_2} className="img"/>
    </article>
</section>
    )
}