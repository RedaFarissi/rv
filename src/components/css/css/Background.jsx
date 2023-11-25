import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function Background(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Background </h1>

<div className="style_divv">
    يتم استخدام خاصية <b>Background</b> في <b>CSS</b> لإضافة تأثيرات خلفية للعناصر.<br/>
    في هذا الفصل، سوف تتعلم حول خصائص خلفية <b>CSS</b> التالية:
    <ul dir="ltr">
        <li><b>background-color</b></li>
        <li><b>background-image</b></li>
        <li><b>background-repeat</b></li>
        <li><b>background-attachment</b></li>
        <li><b>background-position</b></li>
        <li><b>background-clip</b></li>
    </ul>
</div>
<h2 className="title-h2">1.  لون الخلفية background-color </h2>
<ul><li> تحدد خاصية <b>background-color</b> لون خلفية عنصر. </li></ul>
<div className="sum_exemple_style">
<div className="mital">متال : </div>
<img src={images.css_background} alt='background' className="img"/>
<img src={images.css_background_2} alt='background' className="img"/><br/>
</div>
<ul>
    <li>مع CSS، يتم تحديد اللون في أغلب الأحيان بواسطة:</li>
        <ul>
            <li> اسم لون صالح مثل <b>red</b> </li>
            <li> قيمة <b>HEX</b> مثل <bdi>#ff0000</bdi></li>
            <li> قيمة <b>RGB</b> مثل  rgb(255,0,0)</li>
        </ul>
</ul>

<div className="sum_exemple_style">
<div className="mital">متال 2 : </div>
<img src={images.css_background2} alt='background' className="img"/>
<img src={images.css_background2_2} alt='background' className="img"/>
</div>
<ul><li>يمكنك تعيين لون الخلفية لأي عنصر <b>HTML</b></li></ul>
<h2 className="title-h2">2. تحديد صورة كخلفية background-image</h2>
<ul><li>تحدد خاصية <b>background-image</b> صورة لاستخدامها كخلفية لعنصر.
بشكل افتراضي، يتم تكرار الصورة بحيث تغطي العنصر بأكمله وذالك فقط أن كانت الصورة صغيرة الحجم .<br/></li></ul>
<div className="sum_exemple_style">
<div className="mital">متال : </div>
<img src={images.css_background3} alt='background' className="img"/>
<img src={images.css_background3_2} alt='background' className="img"/>
</div>
<ul><li> تم تكرار الصورة لكي تناسب الخلفية تلقائيا .</li></ul>
<h2 className="title-h2">3. تكرار الخلفية background-repeat</h2>
<ul>
    <li> بشكل افتراضي، خاصية <b>background-image</b> تكرر صورة أفقيا وعموديا. ولاكن أنت كمصمم مواقع قد تريد تكرار بعض الصور أفقيا أو رأسيا فقط ، أو منع التكرار نهائيا يمكن التحكم بكل ذالك بستعمال <b>background-repeat</b> .</li>
    <li> يمكن أن تحتوي الخاصية <b>background-repeat</b> على القيم التالية : no-repeat أو (قيمة أولية) repeat  أو  repeat-x  أو repeat-y</li>
</ul>
<div className="sum_exemple_style">
<div className="mital">متال :</div>
<img src={images.css_background4} alt='background' className="img"/>
<img src={images.css_background4_2} alt='background' className="img"/>
</div>
<ul><li>في هاذا المتال الصورة لم تتكرر لأننا قمن بكتابة الخاصية <b>background-repeat</b> مع القيمة <b>no-repeat</b> .</li></ul>
<div className="sum_exemple_style">
<div className="mital">متال 2 :</div>
<img src={images.css_background5} alt='background' className="img"/>
<img src={images.css_background5_2} alt='background' className="img"/>
</div>
<ul><li>في المتال التاني الصورة تكررت أفقيا لأننا قمن بكتابة الخاصية <b>background-repeat</b> مع القيمة <b>repeat-x</b> .</li></ul>
<div className="sum_exemple_style">
<div className="mital">متال 3 :</div>
<img src={images.css_background6} alt='background' className="img"/>
<img src={images.css_background6_2} alt='background' className="img"/>
</div>
<ul><li>في المتال التالت الصورة تكررت عموديا لأننا قمن بكتابة الخاصية <b>background-repeat</b> مع القيمة <b>repeat-y</b> .</li></ul>
<h2 className="title-h2">4.  تحديد مكان الخلفية  background-position</h2>
<ul>
    <li> عند إدخال خلفية من نوع صورة يمكن إستعمال الخاصية <b>background-position</b> مع القيم التالية <b>left top</b> أو <b>left center</b> أو <b>left bottom</b> أو <b>right top</b> أو <b>right center</b> أو <b>right bottom</b> أو <b>center top</b> أو <b>center center</b> أو <b>center bottom</b> وذالك لتحديد المكان الذي تريد وضع فيه الخلفية من نوع صور </li>
    <li> يجب إستخدام الخاصية <b>background-attachment</b> مع القيمة <b>fixed</b> لجعل الصورة تابتة بمكان واحد  </li>
</ul>
<div className="sum_exemple_style">
<div className="mital">متال 4 :</div>
<img src={images.css_background7} alt='background' className="img"/>
<img src={images.css_background7_2} alt='background' className="img"/>
</div>
<h2 className="title-h2">5. إمتداد الخلفية background-clip </h2>
<ul>
    <li>تستعمل الخاصية <b>background-clip</b>  خاصية لتحديد مدى إمتتداد الخلفية (الألوان أو الصورة) داخل عنصر</li>
    <li>يمكن إعطاء الخاصية  <b>background-clip</b> القيم <b>padding-box</b> أو <b>border-box</b> أو  <b>content-box</b> .</li>
</ul>
<div className="sum_exemple_style">
<div className="mital">متال :</div>
<ul><li>القيمة <b>padding-box</b> تجعل ال <b>border</b> خارج الخلفية ولاكن بدون ترك مساحة بين الإتنين . </li></ul>
<img src={images.css_background8} alt='background' className="img"/>
<img src={images.css_background8_2} alt='background' className="img"/>
</div>
<div className="sum_exemple_style">
<div className="mital">متال 2 :</div>
<ul><li> القيمة <b>border-box</b> تجعل ال <b>border</b> داخل الخلفية  .</li></ul>
<img src={images.css_background9} alt='background' className="img"/>
<img src={images.css_background9_2} alt='background' className="img"/>
</div>
<div className="sum_exemple_style">
<div className="mital">متال 3 :</div>
<ul><li> القيمة <b>content-box</b> تجعل ال <b>border</b> خارج الخلفية و تترك <b>margin</b> بين الإتنين يمكن إختيار حجم ال <b>margin</b> بنفسك في هذه الحالة 20px .</li></ul>
<img src={images.css_background10} alt='background' className="img"/>
<img src={images.css_background10_2} alt='background' className="img"/>
</div>
</section>
)
}