
import images from "../imagesCss";
import "./ScssComponent.css"

export default function ScssComponent(props){
    return(
<section className="section-conetent position-relative">
    <h1 className="heading-style"> SCSS </h1>
    <details  className="mt-5">
        <summary className='text-danger'> جميع العناوين  </summary>
        <ul dir="ltr">
            <li><i className="fa-solid fa-caret-right me-2"></i> <a href="#scss-first-code"> scss first code </a></li>
            <li><i className="fa-solid fa-caret-right me-2"></i> <a href="#scss-import">scss import</a></li>
            <li><i className="fa-solid fa-caret-right me-2"></i> <a href="#scss-extend">scss extend</a></li>
            <li><i className="fa-solid fa-caret-right me-2"></i> <a href="#scss-function">scss function</a></li>
            <li><i className="fa-solid fa-caret-right me-2"></i> <a href="#scss-lightness-darken">scss lightness and darken</a></li>
            <li><i className="fa-solid fa-caret-right me-2"></i> <a href="#scss-mixins">scss mixins</a></li>
            <li><i className="fa-solid fa-caret-right me-2"></i> <a href="#scss-loop">scss loop</a></li>       
        </ul>
    </details>

    <article id='scss-first-code'> 
        <h2 className="title-h2">1 - ابدأ باستخدام scss</h2>
        <p className="style_divv">
            لاستخدام <b>scss</b> دون أي مشكلة، قم بتثبيت الامتداد السفلي في <b>Visual Studio Code</b> ثم أعد تشغيله.
        </p>
        <img src={images.scss1} alt="scss" className="img"/>
        <p className="style_divv">
            انتقل إلى مشروع المجلد الخاص بك وانقر بزر الماوس الأيمن ثم <b>"open with visual studio code"</b> .<br/>
            قم بإنشاء ملف <b>"style.scss"</b> بعد ذلك انقر على <b>watching</b> انظر المثال السفلي.<br/>
            إذا كان كل شيء على ما يرام في المجلد الخاص بك مع إظهار الملفين <b>"style.css"</b> و <b>"style.css.map"</b>
        </p>
        <img src={images.scss2} alt="scss" className="img"/>
        <h3 className="title-h3">scss code </h3>
        <img src={images.scss3} alt="scss" className="img"/>
        <ul> <li>  عند كتابة التعليمات البرمجية، انقر فوق "مشاهدة" ثم اضغط على <kbd>CTRL + S</kbd> لحفظ ملف <b>"style.css"</b> </li> </ul>
        <img src={images.scss4} alt="scss" className="img"/>
        <h3 className="mital">مثال 1</h3>
        <img src={images.scss5} alt="scss" className="img"/>
        <img src={images.scss6} alt="scss" className="img"/>
        <h3 className="mital">مثال 2</h3>
        <img src={images.scss7} alt="scss" className="img"/>
        <img src={images.scss8} alt="scss" className="img"/>
    </article>

    <article id='scss-import'>
        <h2 className="title-h2">2 - الاستيراد في scss</h2>
        <p className="style_divv">
            يتم استخدام الشرطة السفلية <kbd>_</kbd> في اسم ملف <b>Scss</b> للإشارة إلى أن الملف جزئي.<br/>
            الجزء الجزئي هو ملف <b>scss</b> لم يتم تجميعه في ملف <b>css</b> مباشرة، ولكنه يستخدم بدلاً من ذلك لاستيراد متغيراته وخلطاته ووظائفه إلى ملفات <b>scss</b> أخرى.
            <h3 className="text-success mt-3"> إنشاء ملف scss </h3>
            <div className="codeStudio alert bg-dark pb-0"><pre>_fileName.scss</pre></div>
            <h3 className="text-success"> استيراد ملف scss </h3>
            <div className="codeStudio alert bg-dark pb-0"><pre>@import "fileName"</pre></div>
        </p>
    </article>
    
    <article id='scss-extend'>
        <h2 className="title-h2">3 - تمديد في scss (extend)</h2>
        <p className="style_divv">
             نستخدم <bdi>@extend</bdi> في <b>scss</b> لمشاركة مجموعة من خصائص <b>css</b> من محدد إلى آخر. يمكن أن يكون هذا مفيدًا لعدة أسباب:
            <ul>
                <li> <bdi><b>DRY:@extend</b></bdi> يسمح لك بتجنب تكرار نفسك عن طريق كتابة نفس <b>css</b> لمحددات متعددة. وهذا يمكن أن يجعل التعليمات البرمجية الخاصة بك أكثر إيجازًا وأسهل في الصيانة.</li>
                <li> <bdi><b>Inheritance:@extend</b></bdi> يمكن استخدامها لإنشاء تسلسل هرمي لمحددات <b>css</b> حيث ترث المحددات الفرعية أنماط المحددات الأصلية. يمكن أن يكون هذا مفيدًا لتنظيم <b>css</b> الخاص بك وجعله أكثر قابلية لإعادة الاستخدام. </li>
            </ul>
        </p>
        <h3 className="mital">مثال 1 </h3>
        <img src={images.scss9} alt="scss" className="img"/>
        <h3 className="mital">مثال 2</h3>
        <img src={images.scss10} alt="scss" className="img"/>
    </article>
    
    <article id='scss-function'>
        <h2 className="title-h2">4 - الدالات في scss</h2>
        <p className="style_divv">
            تُستخدم الوظائف لحساب القيم وإرجاعها بناءً على معلمات الإدخال. إنها تسمح لك بإجراء العمليات الحسابية أو معالجة البيانات أو إنشاء أنماط ديناميكية بناءً على الوسائط المتوفرة. تقوم الدالات بإرجاع قيمة يمكن استخدامها في خصائص <b>CSS</b>.
        </p>
        <h3 className="mital">مثال</h3>
        <h6>index.html</h6>
        <img src={images.scss11} alt="scss" className="img"/>
        <h5>_btn.scss</h5>
        <img src={images.scss12} alt="scss" className="img"/>
        <h6>style.scss</h6>
        <img src={images.scss13} alt="scss" className="img"/>
        <img src={images.scss14} alt="scss" className="img"/>
        <div className='text-light fs-4 text-center'>On Scroll on button--light</div>
        <img src={images.scss15} alt="scss" className="img"/>
    </article>
    
    <article id='scss-lightness-darken'>    
        <h2 className="title-h2">5 - lightness و darken في scss</h2>
        <p className="style_divv">
            <bdi><b>lighten(color, num-from-1-to-100)</b></bdi> : الوظيفة في <b>scss</b> لا تأخذ لونًا وتضيف إليه التعتيم. فهو يأخذ لونًا ونسبة مئوية من الإضاءة، ويعيد لونًا جديدًا أفتح بهذه النسبة.
        </p>
        <img src={images.scss16} alt="scss" className="img"/>
    </article>
    
    <article id='scss-mixins'>
        <h2 className="title-h2">6 - mixins scss</h2>
        <p className="style_divv">
            <b>Mixins</b> تُستخدم بشكل أساسي لتحديد الكتل القابلة لإعادة الاستخدام من كود <b>css</b>. <br/>
            إنها تسمح لك بتغليف مجموعة من الأنماط التي يمكن تضمينها في أماكن مختلفة في ورقة الأنماط الخاصة بك. يتم استخدام <b>Mixins</b> عادةً لإنشاء أنماط أو مجموعات من الخصائص قابلة لإعادة الاستخدام.<br/>
            <b>Mixins</b> لا ترجع القيم.
        </p>
        <img src={images.scss11} alt="scss" className="img"/>
        <img src={images.scss17} alt="scss" className="img"/>
        <img src={images.scss18} alt="scss" className="img"/>
        <img src={images.scss19} alt="scss" className="img"/>
    </article>
 
    <article id='scss-loop'> 
        <h2 className="title-h2">7 - الحلقات scss </h2>
        <img src={images.scss20} alt="scss" className="img"/>
    </article>
</section>
)
}