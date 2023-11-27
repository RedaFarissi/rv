import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function Transition(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Transition </h1>
    <article></article>

<h3>1. الخاصية transition </h3>
<div className="style_divv">
    تسمح لك الخاصية <b>transition</b> في لغة <b>CSS</b> بتغيير قيم الخصائص بسلاسة ، خلال مدة معينة .<br/>
    تستخدم مع الخاصية <b>focus</b> و الخصية <b>hover</b> .<br/>
    تستقبل الخاصية <b>transition</b> إسم الخاصية التي تريد تغييرها تم مدة التغير بتانية <bdi>(s)</bdi> .<br/>
    جميع الخصائص التي ترغب بإضافتها إلى الخاصية <b>transition</b> يجب أن تقوم بتحديد لها قيمة أولية تم بعد ذالك تغير الخصائص بستعمال الخاصية <b>hover</b> أو <b>focus</b> .
</div>
<div className="sum_exemple_style">
<div className="mital">متال  :  </div>
<ul>
    <li>مرر الماوس فوق العنصر <b>div</b> أدناه لمشاهدة تأثير <b>transition</b> في لغة  <b>CSS</b> .</li>
    <li>في هاذا المتال الوقت المحدد لتنفيد الأوامر على خاصية ال <b>width</b> هو تانيتين .</li>
</ul>
<img src={images.css27_transition0} className="img"/>
<div className="style-result">
    <div id="transi"></div>
</div>
</div>
<div className="sum_exemple_style">
<div className="mital">متال 2 :  </div>
<ul><li>مرر الماوس فوق العنصر <b>div</b> أدناه لمشاهدة تأثير <b>transition</b> في لغة  <b>CSS</b> .</li></ul>
<img src={images.css27_transition} className="img"/>
<div className="style-result" style={{height:"50vh"}}>
    <div id="transition"> Hello word </div>
</div>
</div>
<div className="sum_exemple_style">
<div className="mital">متال 3 :  </div>
<ul><li>أنقر فوق العنصر <b>input</b> أدناه لمشاهدة تأثير <b>transition</b> في لغة  <b>CSS</b> .</li></ul>
<img src={images.css27_transition2} className="img"/>
<div className="style-result">
    <input id="transition2"  type="text" placeholder="click ici"/> 
</div>
</div>
<h3>2. الخاصية transition-timing-function </h3>
<div className="style_divv">
    تحدد خاصية <b>transition-timing-function</b> منحنى السرعة لتأثير الانتقال .<br/>
    يمكن أن تحتوي خاصية دالة توقيت الانتقال على القيم التالية:
    <ul>
        <li><b>ease </b> : يحدد تأثير انتقال ببداية بطيئة ، ثم سريعة ، ثم تنتهي ببطء (قيمة أولية) </li>
        <li><b>linear </b>  يحدد تأثير انتقال بنفس السرعة من البداية إلى النهاية</li>
        <li><b>ease-in </b>  يحدد تأثير انتقال ببداية بطيئة</li>
        <li><b>ease-out </b>: يحدد تأثير انتقال بنهاية بطيئة</li>
        <li><b>ease-in-out </b> يحدد تأثير الانتقال مع بداية ونهاية بطيئين</li>
        <li><b>cubic-bezier(n,n,n,n)</b> يتيح لك تحديد القيم الخاصة بك في دالة cubic-bezier .</li>
    </ul>
</div>
<div className="sum_exemple_style">
<div className="mital">متال  :  </div>
<ul><li>مرر الماوس فوق العناصر <b>div</b> أدناه لمشاهدة تأثير <b>transition-timing-function</b> في لغة  <b>CSS</b> .</li></ul>
<img src={images.css27_transition3} className="img"/>
<div className="style-result">
    <div style={{fontSize: "42px"}}>The transition-timing-function Property</div>
    <p>Hover over the div elements below, to see the different speed curves:</p>
    <div id="div1" className="div">linear</div>
    <div id="div2" className="div">ease</div>
    <div id="div3" className="div">ease-in</div>
    <div id="div4" className="div">ease-out</div>
    <div id="div5" className="div">ease-in-out</div>
</div>
</div>

<h3>3. الخاصية transition-delay </h3>
<div className="style_divv">
    تحدد الخاصية <b>transition-delay</b> وقت تأخيرًا (بالثواني) لتأثير الانتقال.<br/>
    المثال التالي به تأخير لمدة 2 ثوانٍ قبل البدء:
</div>
<div className="sum_exemple_style">
<div className="mital">متال  :  </div>
<ul><li>مرر الماوس فوق العناصر <b>div</b> وإنتضر لمدة 2 ثوانٍ .</li></ul>
<img src={images.css27_transition4} className="img"/>
<div  className="style-result"  style={{textAlign:"center"}}>
    <div style={{fontSize:"42px"}}>The transition-delay Property</div>
    <p>Hover over the div element below, to see the transition effect:</p>
    <div id="DIvv"></div>
    <p><b>Note:</b> The transition effect has a 2 second delay before starting.</p> 
</div>
</div>
</section>
    )
}