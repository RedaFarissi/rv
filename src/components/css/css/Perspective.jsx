import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
//import "./Perspective.css";

export default function Perspective(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Perspective </h1>
    <article>
        <h2 className="title-h2">1- perspective </h2>
        <div className="style_divv">
            <br/>تُستخدم خاصية <b>perspective</b> لمنح عنصر ثلاثي الأبعاد . وتكون قيمتها الفتراضية <b>none</b> .<br/>
            تحدد خاصية <b>perspective</b> مدى بُعد الكائن عن المستخدم. لذلك ، ستؤدي القيمة الأقل إلى تأثير ثلاثي الأبعاد أكثر كثافة من القيمة الأعلى.<br/>
            عند تحديد خاصية المنظور لعنصر ما ، فإن عنصر الإبن هي التي تحصل على عرض المنظور ، وليس العنصر نفسه.<br/>
            تلميح: انظر أيضًا إلى خاصية أصل المنظور ، والتي تحدد الموضع الذي ينظر فيه المستخدم إلى الكائن ثلاثي الأبعاد.<br/>
            لفهم خاصية المنظور بشكل أفضل ، قم بعرض العرض التوضيحي.
        </div>
        <div className="sum_exemple_style">
            <div className="mital"> متال : </div>
            <ul><li> لاحظ أن الخاصية <b>perspective</b> لا تغير أي شيء في التصميم أسفله </li></ul>
            <img src={images.css64_perspective} className="img"/>
            <div className="style-result">
                <div id="parent-div1">
                  <div className="parent"> A </div> 
                </div>
                <div id="parent-div2">
                  <div className="parent"> B </div> 
                </div>
            </div>
        </div>
        <div className="sum_exemple_style">
            <div className="mital"> متال 2 : </div>
            <ul><li> لاحظ أن الخاصية <b>perspective</b>  تغير  التصميم بعد إستعمال الخاصية <kbd>transform : translateZ(50px)</kbd> </li></ul>
            <img src={images.css64_perspective2} className="img"/>
            <div className="style-result">
                <div id="parent-DIV1">
                  <div className="parent"> A </div> 
                </div>
                <div id="parent-DIV2">
                  <div className="parent"> B </div> 
                </div>
            </div>
        </div>
    </article>
    <article>
        <h2 className="title-h2">2- perspective-origin</h2>
        <div className="style_divv">
            الخاصية <bdi><b>perspective-origin</b></bdi> توضح الزاوية التي ينضر المستعمل منها . وقيمتها الإفتراضية هي <kbd>perspective-origin:50% 50%</kbd> .<br/>
            تكتب الخاصية <bdi><b>perspective-origin</b></bdi> على شكل <kbd>perspective-origin : x y</kbd> .<br/>
            القيمة 50% 50%  وتعني أن الزاوية التي ينضر المستعمل هي من منتصف <b>x</b> و <b>y</b> . <br/>
            تقبل الخاصية <bdi><b>perspective-origin</b></bdi> القيمة بالنسبة المؤوية أو بالبيكسل أو بالإتجاهاة متل <bdi><b>left center</b></bdi> أو <bdi><b>left right</b></bdi> أو <bdi><b>center center</b></bdi> ... <br/>
            <div className="alert alert-warning mt-2">
                يطلق على الخاصية <bdi><b>perspective-origin</b></bdi> إسم نقطقة التلاشي . وتعني اخر نقطة تنتهي عندها الرؤية .<br/>
            </div>
        </div>
            
        <div className="sum_exemple_style">
            <div className="mital"> متال : </div>
            <img src={images.css64_perspective3} className="img"/>
            
            <div className="style-result">
                <div className="stylE diV"> 
                  <div className="div_A"> div  </div>
                </div>
                <div className="stylE diV2"> 
                  <div className="div_B"> div2</div>
                </div>
                <div className="stylE diV3"> 
                  <div className="div_C"> div3 </div>
                </div>
            </div>
        </div>
        <div className="sum_exemple_style">
            <div className="mital"> متال 2 : </div>
            <img src={images.css64_perspective4} className="img"/>
            <div className="style-result">
                <div className="style div"> 
                  <div className="div_a"> div  </div>
                </div>
                <div className="style div2"> 
                  <div className="div_b"> div2</div>
                </div>
                <div className="style div3"> 
                  <div className="div_c"> div3 </div>
                </div>
            </div>
        </div>
    </article>
</section>
    )
}