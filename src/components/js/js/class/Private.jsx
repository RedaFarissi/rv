import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Static(){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Private</h1>
    <article>
        <p className="style_divv mt-5">
            كقيمة إفتراضية  جميع متغيرات ال <b>class</b> تكون <b>public</b> .<br/>
            يتم تقديم متغيرات <bdi><b>private class</b></bdi> للسماح بستخدام المتغيرات  في ال <b>class</b> فقط .<br/>
            يمكن إنشاء <b>private methode</b> داخل ال <b>class</b> أيضا .
        </p> 
        <div className="mital"> متال :  </div>
        <img src={images.js141_class_private} className="img"/>
        <div className="styleee">
            <h2>JavaScript Class Private variable</h2>
            <p> 110 <br/> undefined </p>
        </div>
        <img src={images.js141_class_private2} className="img"/>
        <div className="styleee">
            <h2>JavaScript Class Private variable</h2>    
            <p> 2022 </p>
        </div>
    </article>
</section>
    )
}