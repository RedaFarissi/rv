import images from "../images";
import { CodeHighlighter } from "../pathHtml";

export default function Image(){
    const code = `<img src="name_img.type" alt="description"/>`
    
    return(
<section className="section-conetent">
    <h1 className="heading-style-html">HTML img</h1>
    <article>
        <p className="style_divv mt-5">
            الوسم  <kbd>&lt;img&gt;</kbd> هو وسم  فردي اي ليس له وسم إغلاق . ويستعمل لإضافة الصور لموقعك .  <br/>
            <ul>
                <li> لعرض الصورة داخل صفحتك يجب عليك إستخدام سمة المصدر <b>src attribute</b> حيث أن <b>src</b> هي إختصار لـ <b>source</b> .</li>
                <li> نستخدم الوسم <kbd>&lt;img&gt;</kbd> على هذا النحو <kbd>&lt;img src="url"&gt;</kbd> لعرض صورة في الصفحة. مكان الكلمة <b>url</b> نضع مسار الصورة التي نريد عرضها.</li>
            </ul>
        </p>
        <CodeHighlighter  code={code} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital">متال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html20_img} className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <img src={images.html20_img_2} className="img"/>
            <ul>  
                <li> يمكنك تحكم بحجم صورة وتعديل على شكلها بستخدام <b>CSS</b> . </li>
                <li> السمة <b>alt</b> تستعمل  لإضهار رسالة للمستعمل في حالة حدت مشكل ولم يتمكن لمتصفح من عرض الصورة .</li>
            </ul>
        </div>
        <div className="sum_exemple_style">
            <div className="mital">متال 2 : </div>
            <ul><li>قمنا بكتابة مسار خاطئ لصورة لتتمكن من رؤية فائدة <b>alt</b></li></ul>
            <h4 className="green"> الكود </h4> 
            <img src={images.html20_img2} className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <img src={images.html20_img2_2} className="img"/>
        </div>
    </article>
</section>
)
}