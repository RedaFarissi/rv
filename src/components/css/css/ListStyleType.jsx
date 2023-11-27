import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function ListStyleType(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS List-Style-Type </h1>
    <article>


<div className="style_divv mt-5">
    تستعمل الخاصية <b>list-style-type</b>  لتحديد نوع نمط القائمة في القائمة  . وتستقبل قيم كتيرة من بينها  التالية :<br/>
    <ul>
        <li><b>circle</b> : تستخدم لإنشاء دائرة .</li>
        <li><b>square</b> : تستخدم لإنشاء مربع .</li>
        <li><b>upper-roman</b> :  تستخدم لإنشاء أحرف صغيرة .</li>
        <li><b>lower-alpha</b> : تستخدم لإنشاء أحرف كبيرة .</li>
        <li><b>none</b> : تستخدم لإزالة نمط القائمة .</li>
    </ul>
</div>
<div className="sum_exemple_style">
<div className="mital"> متال : </div>
<img src={images.css31_list_style_type} className="img"/>
<img src={images.css31_list_style_type_2} className="img"/>
</div>
<div className="sum_exemple_style">
<div className="mital"> متال 2 : </div>
<img src={images.css31_list_style_type2} className="img"/>
<img src={images.css31_list_style_type2_2} className="img"/>
</div>
    </article>
    </section>
    )
    }