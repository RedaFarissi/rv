import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function AfterAndBefore(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS After And Before </h1>
    <article>
        <h3>1. المحدد after </h3>
        <div className="style_divv">
            يُدرج المُحدِّد <b>after</b> شيئًا ما بعد محتوى كل عنصر (عناصر) محدد.
            استخدم الخاصية <b>content</b> لتحديد المحتوى المراد إدراجه.<br/>
            استخدم : : قبل المحدد <b>after</b>  لإدراج شيء بعد المحتوى يمكنك إستعمال ال <b>id</b> أو <b>class</b> أو عبر إسم العنصر قم بتحديد بنفسك .
        </div>
        <div className="sum_exemple_style">
        <div className="mital">متال : </div>
        <ul><li>   لاحظ في المتال أسفله أن الخاصية <b>color</b> تم تحديدها داخل كل العنصر وذالك بعض إضافة المحدد <b>after</b> . </li></ul>
        <img src={images.css40_after} className="img"/>
        <img src={images.css40_after_2} className="img"/>
        </div>
        <div className="sum_exemple_style">
        <div className="mital">متال 2 : </div>
        <ul><li> يمكن تغير خصائص <b>CSS</b> للمحتوي المحدد داخل الخاصية <b>content</b> وذالك من خلال إعطاء خصائص جديدة </li></ul>
        <img src={images.css40_after2} className="img"/>
        <img src={images.css40_after2_2} className="img"/>
        </div>
    </article>

    <article>
        <h2 className="title-h2">2. المحدد before </h2>
        <div className="style_divv">
            يُدرج المُحدِّد <b>before</b> شيئًا ما قبل محتوى كل عنصر (عناصر) محدد.
            استخدم الخاصية <b>content</b> لتحديد المحتوى المراد إدراجه.<br/>
            استخدم : : قبل المحدد <b>before</b>  لإدراج شيء قبل المحتوى يمكنك إستعمال ال <b>id</b> أو <b>class</b> أو عبر إسم العنصر قم بتحديد بنفسك .
        </div>
        <div className="sum_exemple_style">
        <div className="mital">متال : </div>
        <img src={images.css40_before} className="img"/>
        <img src={images.css40_before_2} className="img"/>
        </div>
    </article>
</section>
    )
}