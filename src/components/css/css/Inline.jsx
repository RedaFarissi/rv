

import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function Inline(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Inline </h1>
    <article>
        <div className="style_divv mt-5">
            تستخدم القيمة <b>inline</b> مع الخاصية <b>display</b><br/> 
            عند إستخدام القيمة <b>inline</b> مع الخاصية <b>display</b> يأخد العنصر  <kbd>width:max-content</kbd> . <br/>
            يكون العرض <small><bdi>(width)</bdi></small>  و الإرتفاع <small><bdi>(height)</bdi></small>  غير قابل لتعديل بستخدام الخاصية <b>width</b> و <b>height</b><br/>
            عند إستخدام الخاصية <kbd>display:inline</kbd>  لا يتم إضافة <kbd>&lt;br&gt;</kbd> تلقائيا .  تعرض العناصر في نفس السطر <br/>
            لا يمكن إستخدام جميع العناصر مع الخاصية <kbd>display:inline</kbd> متل <small>width , height , padding-top , padding-bottom , margin-top , margin-bottom</small> في حين يقوم بدعم <small>padding-right , padding-left, margin-right , margin-left</small>
        </div>
        <div className="sum_exemple_style">
            <div className="mital">متال : </div>
            <img src={images.css58_inline} className="img"/>
            <div className="style-result">
                <div className="inline"> DIV -{">"} INLINE </div>
                <span className="inline"> SPAN -{">"} INLINE </span>
                <p className="inline"> P -{">"} INLINE </p>
            </div>
        </div>

        <div className="sum_exemple_style">
            <div className="mital">متال 2 : </div>
            <ul><li> لاحض أنه لا يترك مساحة لل <bdi>padding</bdi> </li></ul>
            <img src={images.css58_inline2} className="img"/>
            <div className="style-result">
                <div className="inline2"> DIV -{">"} INLINE </div>
                <span className="inline2"> SPAN -{">"} INLINE </span>
                <p className="inline2"> P -{">"} INLINE </p>
                <div ID="DIV_R2">
                    DIV -{">"} BLOCK
                </div>
            </div>
        </div>
    </article>
</section>
)
}