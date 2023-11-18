import images from "../imagesHtml";

export default function Iframe(){
   
    return(
<section className="section-conetent">
    <h1 className="heading-style-html">HTML Iframe</h1>
    <article>
        <h2 className="title-h2"> 1. الوسم ifarme </h2>
        <p className="style_divv">
            يحدد الوسم <kbd>&lt;iframe&gt;</kbd> إطار مضمن . يتم استخدام إطار مضمن لتضمين مستند آخر ضمن مستند HTML الحالي.<br/>
            يمكن إستخدم CSS لنمط <kbd>&lt;iframe&gt;</kbd>. <br/>
            من الممارسات الجيدة تضمين سمة عنوان <kbd>&lt;iframe&gt;</kbd> دائما. يتم استخدام هذا من قبل قارئات الشاشة لقراءة محتوى <kbd>&lt;iframe&gt;</kbd>..<br/>
            بعض ال attributes المهمة الخاصة بهذا العنصر:
            <ul>
                <li>src : وهى اختصار ل source وتعنى المصدر وبالتالي تكون قيمتها عبارة عن لينك الصفحة المراد إدراجها في الموقع.</li>
                <li>width : وتكون قيمتها عبارة عن رقم الذى يُحدد عرض هذا الاطار iframe</li>
                <li>height : وتكون قيمتها عبارة عن رقم الذى يُحدد طول هذا الاطار iframe</li>
            </ul>
        </p>
        <div className="sum_exemple_style">
            <div className="mital">متال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html37_iframe} alt="iframe"  className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <img src={images.html37_iframe_2} alt="iframe" className="img"/>
        </div>
    </article>
    <article>
        <h2 className="title-h2"> 2. السمات الخاصة بهذا الوسم  </h2>
        <table className="table table-bordered text-light">
            <thead className="bg-secondary">
                <tr className="text-center fs-5">
                    <th>القيمة</th>
                    <th>الوصف</th>
                    <th>السمات</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> تحديد نهج ميزة ل <bdi><strong>&lt;iframe&gt;</strong></bdi> </td>
                    <td></td>
                    <td>allow</td>
                </tr>
                <tr>
                    <td>تعيين إلى true إذا  <bdi><strong>&lt;iframe&gt;</strong></bdi> مكن تنشيط وضع ملء الشاشة عن طريق استدعاء الأسلوب requestFullscreen()</td>
                    <td>	true<br/>false</td>
                    <td>allowfullscreen</td>
                </tr>
                <tr>
                    <td>تحديد ارتفاع <bdi><strong>&lt;iframe&gt;</strong></bdi> . الارتفاع الافتراضي هو 150 بكسل</td>
                    <td>pixels</td>
                    <td>height</td>
                </tr>
                <tr>
                    <td>Lazy تحديد ما إذا كان يجب على المستعرض تحميل iframe فورا أو تأجيل تحميل iframes حتى يتم استيفاء بعض الشروط</td>
                    <td>eager<br/>lazy</td>
                    <td>loading</td>
                </tr>
                <tr>
                    <td>تحديد عنوان المستند لتضمينه في <bdi><strong>&lt;iframe&gt;</strong></bdi> </td>
                    <td>URL</td>
                    <td>src</td>
                </tr>
                <tr>
                    <td>تحديد عرض <bdi><strong>&lt;iframe&gt;</strong></bdi> . العرض الافتراضي هو 300 بكسل
                </td>
                    <td>pixels</td>
                    <td>width</td>
                </tr>
            </tbody>

        </table>
    </article>
</section>
)
}