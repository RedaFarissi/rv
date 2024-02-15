
import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./ScssComponent.css"

export default function ScssComponent(props){
    return(
<section className="section-conetent position-relative">
    <h1 className="heading-style"> SCSS </h1>
    <nav className="p-0 mt-4" dir="ltr">
        <ul className='p-0 m-0 css-scss-nav-ul mb-5 w-100'>
            <li><i className="fa-solid fa-caret-right me-2"></i> <a href="#scss-first-code"> scss first code </a></li>
            <li><i className="fa-solid fa-caret-right me-2"></i> <a href="#scss-import">scss import</a></li>
            <li><i className="fa-solid fa-caret-right me-2"></i> <a href="#scss-extend">scss extend</a></li>
            <li><i className="fa-solid fa-caret-right me-2"></i> <a href="#scss-function">scss function</a></li>
            <li><i className="fa-solid fa-caret-right me-2"></i> <a href="#scss-lightness-darken">scss lightness and darken</a></li>
            <li><i className="fa-solid fa-caret-right me-2"></i> <a href="#scss-mixins">scss mixins</a></li>
            <li><i className="fa-solid fa-caret-right me-2"></i> <a href="#scss-loop">scss loop</a></li>
        </ul>
    </nav>
    <article id='scss-first-code'> 
        <h2 className="title-h2">1 - ابدأ باستخدام scss</h2>
        <p className="style_divv">
            لاستخدام <b>scss</b> دون أي مشكلة، قم بتثبيت الامتداد السفلي في Visual Studio Code ثم أعد تشغيله.
        </p>
        <img src={images.scss1} className="img"/>
        <p className="style_divv">
            انتقل إلى مشروع المجلد الخاص بك وانقر بزر الماوس الأيمن ثم "open with visual studio code" .<br/>
            قم بإنشاء ملف "style.scss" بعد ذلك انقر على watching انظر المثال السفلي.<br/>
            إذا كان كل شيء على ما يرام في المجلد الخاص بك مع إظهار الملفين "style.css" و"style.css.map"
        </p>
        <img src={images.scss2} className="img"/>
        <h3 className="title-h3">scss code </h3>
        <img src={images.scss3} className="img"/>
        <ul> <li>  عند كتابة التعليمات البرمجية، انقر فوق "مشاهدة" ثم اضغط على CTRL + S لحفظ ملف "style.css" </li> </ul>
        <img src={images.scss4} className="img"/>
        <h3 className="mital">مثال 1</h3>
        <img src={images.scss5} className="img"/>
        <img src={images.scss6} className="img"/>
        <h3 className="mital">مثال 2</h3>
        <img src={images.scss7} className="img"/>
        <img src={images.scss8} className="img"/>
    </article>
    <article id='scss-import'>
        <h2 className="title-h2">2 - الاستيراد في scss</h2>
        <p className="style_divv">
            يتم استخدام الشرطة السفلية (_) في اسم ملف Scss للإشارة إلى أن الملف جزئي.<br/>
            الجزء الجزئي هو ملف scss لم يتم تجميعه في ملف css مباشرة، ولكنه يستخدم بدلاً من ذلك لاستيراد متغيراته وخلطاته ووظائفه إلى ملفات scss أخرى.
            <div className="h3 text-danger"> إنشاء ملف scss </div>
            <div className="codeStudio alert bg-dark pb-0"><pre>_fileName.scss</pre></div>
            <div className="h3 text-danger"> استيراد ملف scss </div>
            <div className="codeStudio alert bg-dark pb-0"><pre>@import "fileName"</pre></div>
        </p>
    </article>
    <article id='scss-extend'>
        <h2 className="title-h2">3 - تمديد في scss (extend)</h2>
        <p className="style_divv">
             نستخدم <bdi>@extend</bdi> في scss لمشاركة مجموعة من خصائص css من محدد إلى آخر. يمكن أن يكون هذا مفيدًا لعدة أسباب:
            <ul>
                <li> <bdi><b>DRY:@extend</b></bdi> يسمح لك بتجنب تكرار نفسك عن طريق كتابة نفس css لمحددات متعددة. وهذا يمكن أن يجعل التعليمات البرمجية الخاصة بك أكثر إيجازًا وأسهل في الصيانة.</li>
                <li> <bdi><b>Inheritance:@extend</b></bdi> يمكن استخدامها لإنشاء تسلسل هرمي لمحددات css حيث ترث المحددات الفرعية أنماط المحددات الأصلية. يمكن أن يكون هذا مفيدًا لتنظيم css الخاص بك وجعله أكثر قابلية لإعادة الاستخدام. </li>
            </ul>
        </p>
        <h3 className="mital">مثال 1 </h3>
        <img src={images.scss9} className="img"/>
        <h3 className="mital">مثال 2</h3>
        <img src={images.scss10} className="img"/>
    </article>
    <article id='scss-function'>
        <h2 className="title-h2">4 - الدالات في scss</h2>
        <p className="style_divv">
            تُستخدم الوظائف لحساب القيم وإرجاعها بناءً على معلمات الإدخال. إنها تسمح لك بإجراء العمليات الحسابية أو معالجة البيانات أو إنشاء أنماط ديناميكية بناءً على الوسائط المتوفرة. تقوم الدالات بإرجاع قيمة يمكن استخدامها في خصائص CSS.
        </p>
        <h3 className="mital">مثال</h3>
        <h6>index.html</h6>
        <img src={images.scss11} className="img"/>
        <h5>_btn.scss</h5>
        <img src={images.scss12} className="img"/>
        <h6>style.scss</h6>
        <img src={images.scss13} className="img"/>
        <img src={images.scss14} className="img"/>
        <div className='text-light fs-4 text-center'>On Scroll on button--light</div>
        <img src={images.scss15} className="img"/>
    </article>
    <article id='scss-lightness-darken'>    
        <h2 className="title-h2">5 - lightness و darken في scss</h2>
        <p className="style_divv">
            <bdi>lighten(color, num-from-1-to-100)</bdi> : الوظيفة في scss لا تأخذ لونًا وتضيف إليه التعتيم. فهو يأخذ لونًا ونسبة مئوية من الإضاءة، ويعيد لونًا جديدًا أفتح بهذه النسبة.
        </p>
        <img src={images.scss16} className="img"/>
    </article>
    <article id='scss-mixins'>
        <h2 className="title-h2">6 - mixins scss</h2>
        <p className="style_divv">
            Mixins تُستخدم بشكل أساسي لتحديد الكتل القابلة لإعادة الاستخدام من كود css. <br/>
            إنها تسمح لك بتغليف مجموعة من الأنماط التي يمكن تضمينها في أماكن مختلفة في ورقة الأنماط الخاصة بك. يتم استخدام Mixins عادةً لإنشاء أنماط أو مجموعات من الخصائص قابلة لإعادة الاستخدام.<br/>
            Mixins لا ترجع القيم.
        </p>
        <img src={images.scss11} className="img"/>

        <img src={images.scss17} className="img"/>
        <img src={images.scss18} className="img"/>
        <img src={images.scss19} className="img"/>
    </article>
    <article id='scss-loop'> 
        <h2 className="title-h2">7 - الحلقات scss </h2>
        <img src={images.scss20} className="img"/>
    </article>
</section>
)
}