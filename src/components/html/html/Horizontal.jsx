
import images from "../imagesHtml";

export default function Horizontal(){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-html-color">HTML Horizontal Line (hr) </h1>
    <div className="style_divv mt-5">
        عندما نقوم بكتابة الفقرات و نريد ان نفصل بينها بخط فاننا نقوم بوضع خط افقي لكي 
        نفرق بين هاته الفقرات و الخط الفاصل لا نستطيع وضعه هكذا بل يلزمنا وسم نستعمله 
        <kbd>
            &lt;hr&gt;</kbd>  وهذا الوسم هو الوسم الفردي . <br/>
            يمكن كتابة الوسم <b>hr</b>  بهده الطريقة أيضا <kbd><bdi>&lt;hr/&gt;</bdi></kbd>  
    </div>
    <div className="sum_exemple_style">
        <div className="mital">متال : </div>
        <h4 className="green"> الكود </h4>
        <img src={images.html15_hr} alt="hr" className="img"/>
        <h4 className="green"> بعد تشغيل الكود </h4>
        <img src={images.html15_hr_2} alt="hr" className="img"/>
    </div>
    <div className="green"> ملاحظة :</div>
    <ul><li> يتم إضافة القليل من الفراغ فوق السطر وأسفله يمكنك التعديل وجعله كيفما تريده بستعمال CSS ( ستتعلم ذالك في دروس CSS).</li></ul>
</section>
)
}