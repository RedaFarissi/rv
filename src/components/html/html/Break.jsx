import images from "../images";

export default function Break(){

    return(
    <section className="section-conetent">
        <h1 className="heading-style-html"> HTML Break (br)</h1>
        <article className="mt-5">
            <p className="style_divv">
             الوسم <kbd>&lt;br&gt;</kbd> لا يحتاج إلى وسم إغلاق <bdi><kbd>&lt;br/&gt;</kbd></bdi> مثل الوسوم الأخرى.<br/>
                النزول على سطر جديد هو أمر تفعله بداخل الفقرات العادية و في القصائد بشكل خاص  <b>br</b> إختصار لكلمة <b>Break</b> التي يقصد بها في حالتنا إيقاف العرض على نفس السطر
                <ul><li>مع <b>HTML</b> انت لا يمكنك تغيير النتائج الظاهرة بواسطة اضافة مسافات فارغة او سطور اضافية داخل البرمجة حيث سيزيل المتصفح كل هذه الاضافات عند عرض الصفحة دعنا نجرب في مثالنا التالي</li></ul>
            </p>
            <div className="sum_exemple_style">
                <div className="mital">متال : </div>
                <h4 className="green"> الكود </h4>
                <img src={images.html14_br} alt="break exemple" className="img"/>
                <h4 className="green"> بعد تشغيل الكود </h4>
                <img src={images.html14_br_2} alt="break result" className="img"/>
            </div>
        </article>
    </section>
)
}