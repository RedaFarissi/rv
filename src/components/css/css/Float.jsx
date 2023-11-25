import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function Float(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Float </h1>
    <article>
        <div className="style_divv mt-5">
        تُستخدم الخاصية <b>float</b> لتحديد موضع المحتوى وتنسيقه .<br/>
        يمكن أن تحتوي الخاصية <b>float</b> على إحدى القيم التالية:<br/>
        <ul>
            <li> <b>left</b> : يطفو العنصر إلى يسار الحاوية الخاصة به </li>
            <li> <b>right</b> : يطفو العنصر على يمين الحاوية الخاصة به</li>
            <li> <b>none</b> : لا يطفو العنصر (سيتم عرضه في مكان ظهوره في النص فقط). هذا هو الافتراضي</li>
            <li> <b>inherit</b> : يرث العنصر القيمة <b>float</b>  للعنصر الأصل </li>
        </ul>
        في أبسط استخدام لها ، يمكن استخدام خاصية الطفو لالتفاف النص حول الصور.
        </div>
        <div className="sum_exemple_style">
            <div className="mital"> متال : </div>
            <div className="style-result">
                <div className="flo" style={{float:"left",color:"white"}}>float left</div>
                <div className="flo" style={{float:"right",color:"white"}}>float right</div>
                <br style={{clear:"both"}}/>
            </div>
        </div>
    </article>
    <article>
        <h2 className="title-h2">1. الخاصية float مع القيمة right </h2>
        <div className="sum_exemple_style">
        <div className="mital"> متال : </div>
        <ul>
            <li>في هاذا المتال العنصر <b>div</b> الذي قمنى بإضافة له الخاصية <b>float</b> لا يتواجد ضمن أي عنصر أخر لذالك سيكون يمين الصفحة لأنه يعود في هذه الحالة على العنصر <b>body</b>  </li>
        </ul>
        <img src={images.css29_float} className="img"/>
        <img src={images.css29_float_2} className="img"/>
        </div>
        <div className="sum_exemple_style">
        <div className="mital"> متال 2 : </div>
        <ul>
            <li>في هاذا المتال العنصر <b>div</b> الذي قمنى بإضافة له الخاصية <b>float</b> يتواجد ضمن عنصر <b>div</b> أخر .</li>
            <li> بواسطة  <b>id</b> قمنا بتحيد عرض العنصر <b>div</b> الأب بقيمة  <bdi>75%</bdi>  عند إعطاء الخاصية <b>float</b> للوسم <b>div</b> الإبن سيتم تحديد الموضع نسبتا للوسم الأب .</li>
        </ul>
        <img src={images.css29_float2} className="img"/>
        <img src={images.css29_float2_2} className="img"/>
        </div>
    </article>
    <article>
        <h2 className="title-h2">2. الخاصية float مع القيمة left </h2>
        <div className="sum_exemple_style">
            <div className="mital"> متال : </div>
            <ul>
                <li>في هاذا المتال العنصر <b>div</b> الذي قمنى بإضافة له الخاصية <b>float</b> لا يتواجد ضمن أي عنصر أخر لذالك سيكون يسار الصفحة لأنه يعود في هذه الحالة على العنصر <b>body</b>  </li>
            </ul>
            <img src={images.css29_float3} className="img"/>
            <img src={images.css29_float3_2} className="img"/>
        </div>
        <div className="mital"> متال 2 : </div>
        <div className="sum_exemple_style">
        <ul>
            <li>في هاذا المتال العنصر <b>div</b> الذي قمنى بإضافة له الخاصية <b>float</b> يتواجد ضمن عنصر <b>div</b> أخر .</li>
            <li> بواسطة  <b>id</b> قمنا بتحيد عرض العنصر <b>div</b> الأب بقيمة  <bdi>60%</bdi> وجعلناه وسط الصفحت بستخدام الخاصية <b>margin</b> مع القيمة <b>auto</b> عند إعطاء الخاصية <b>float</b> للوسم <b>div</b> الإبن سيتم تحديد الموضع نسبتا للوسم الأب .</li>
        </ul>
        <img src={images.css29_float4} className="img"/>
            
        <img src={images.css29_float4_2} className="img"/>
        </div>
        <br/>
        <div className="sum_exemple_style">
        <div className="mital"> متال 3 : </div>
        <ul>
            <li>في هذا المتال قمنا بتحديد لكل عناصر <b>div</b> الخاصية <b>width</b> بنسبة <bdi>20%</bdi> تم الخاصية  <b>float</b> بالقيمة <b>left</b> لكل العناصر لاحض أن أول 5 عناصر تم عرضها في سطر واحد لأن <bdi>5 x 20 = 100</bdi> .  </li>   
        </ul>
        <img src={images.css29_float5} className="img"/>
        <img src={images.css29_float5_2} className="img"/>
        </div>
        <div className="sum_exemple_style">
            <div className="mital"> متال 4 : </div>
            <ul>
                <li>يمكن إنشاء فراغ لتفرقة بين العناصر وذالك بستخدام الخاصية <b>margin</b> . </li>
                <li>لاحض أن العنصر الدي يحمل خلفية بلون <b>pink</b> تغير مكانه وذالك لأنه تم إضافة <b>margin</b> لكل الجوانب بنسبة ,<bdi>2%</bdi> وبتالي لم تعد المساحة كافية ونتيجتا لذالك تم إعادته لسطر جديد </li>
            </ul>
            <img src={images.css29_float6} className="img"/>
            <img src={images.css29_float6_2} className="img"/>
        </div>
    </article>
</section>
)
}