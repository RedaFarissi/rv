import images from "../imagesHtml";
import { CodeHighlighter } from "../../path";

export default function Audio(){
    const code1 = `<video src="video_name.type" controls></video>`
    const code2 = `<video  controls>
    <source src="video_name.type">
</video>`
    
    return(
<section className="section-conetent">
    <h1 className="heading-style">HTML video</h1>
    <article className="mt-5">
        <h2 className="title-h2">1. الوسم video</h2>
        <p className="style_divv">
            وسم ال <kbd>&lt;video&gt;</kbd> يُستخدم عندما نريد وضع مقطع فيديو في الموقع ونضيف دائما له اثنان <b>attribute</b>  إجبارية خاص به:
            <ul>
                <li><b className="text-success">controls</b> : لعرض عناصر التحكم في الفيديو وبدونه لا يظهر مقطع الفيديو  في الصفحة.</li>
                <li><b className="text-success">src</b> : وتكون قيمته عبارة عن مسار وإسم ملف الفيديو .</li>
            </ul>
            دائما استخدم امتداد <b>mp4</b> لأن جميع المتصفحات تدعمه.
        </p>
        <CodeHighlighter  code={code1} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="mital">مثال : </div>
        <h4 className="green"> الكود </h4>
        <img src={images.html24_video} alt={images.html24_video} className="img"/>
        <h4 className="green"> بعد تشغيل الكود </h4>
        <img src={images.html24_video_2} alt={images.html24_video_2} className="img"/>
    </article>
    <article>
        <h2 className="title-h2">2. الوسم source</h2>
        <p className="style_divv">
            يُحدِّد العنصر <kbd>&lt;source&gt;</kbd> عدِّة مصادر لملفات الوسائط المتعددة ضمن العنصر <kbd>&lt;picture&gt;</kbd> أو <kbd>&lt;audio&gt;</kbd> أو <kbd>&lt;video&gt;</kbd>. وهذا العنصر فارغ، وأكثر استخدام شائع له هو توفير محتوى الوسائط المتعددة نفسه لكن بصيغ مختلفة لكي يستطيع المتصفح تشغيل أنسبها .
            <ul><li>يحتوي على <b>attribute</b> أساسي هو <b>src</b> وتكون قيمته عبارة عن مسار وإسم ملف الفيديو. وهو من العناصر التي ليس لها نهاية وسم <b>(closing tag)</b>.</li></ul>
        </p>
        <CodeHighlighter  code={code2} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <ul><li>يبيّن هذه المثال كيفية تضمين مقطع فيديو باستخدام الوسم <bdi><strong>&lt;video&gt;</strong></bdi> وله أكثر من مصدر، أحدها بصيغة <b>mov</b> والآخر بصيغة <b>mp4</b></li></ul>
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html24_video2} alt={images.html24_video2} className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <img src={images.html24_video_2} alt={images.html24_video_2} className="img"/>
        </div>
    </article>
    <article>
        <h2 className="title-h2">3. السمات الممكن إستعمالها داخل الوسم video  </h2>
        <h4>السمة muted </h4>
        <div className="style_divv" >
            <ul>
                <li style={{marginBottom:"9px"}}> تستخدم السمة <b>muted</b> لجعل ملف الفيديو  صامت  . </li>
                <li > يمكن للمستعمل تشغيل الصوة بنقر على علامة الصوة أنضر المتال .</li>
            </ul>
        </div>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <img src={images.html24_video3} alt={images.html24_video3} className="img"/>
        </div>

        <h4>السمة autoplay </h4>
        <div className="style_divv" >
            <ul>
                <li> تستخدم السمة <b>autoplay</b> لجعل ملف الفيديو يعمل تلقائيا    . </li>
            </ul>
        </div>
        <div className="sum_exemple_style">
        <div className="mital">مثال : </div>
        <img src={images.html24_video4} alt={images.html24_video4} className="img"/>
        </div>
        <h4>السمة loop </h4>
        <div className="style_divv" >
            <ul>
                <li  style={{marginBottom:"9px"}}> تستخدم السمة <b>loop</b> لإعادة تشغيل ملف الفيديو عند إنتهائه بستمرار . </li>
                <li> سيتم إعادة تشغيل ملف الفيديو بستمرار إلى ان يقوم المستعمل بإقافه</li>
            </ul>
        </div>
        <div className="sum_exemple_style">
        <div className="mital">مثال : </div>
        <img src={images.html24_video5} alt={images.html24_video5} className="img"/>
        </div>

        <h4>السمة preload </h4>
        <div className="style_divv" >
            تستعمل السمة  <b>preload</b> لتحكم بتحميل ملف الفيديو داخل موقعك وتقبل تلات قيم : 
            <ul>
                <li style={{marginBottom:"9px"}}> none : لن يقوم المتصفح بتحميل ملف الفيديو حتى يقوم المستعمل بالنقر على تشغيل الملف</li>
                <li style={{marginBottom:"9px"}}> metadata : لن يقوم المتصفح بتحميل ملف الفيديو حتى يقوم بتحميل موقعك وتعتبر متالية </li>
                <li style={{marginBottom:"9px"}}> auto : التحميل تلقائيا ذالك يكون على حسب سرعة أنترنت المستعمل </li>
            </ul>
        </div>
        <div className="sum_exemple_style">
        <div className="mital">مثال : </div>
        <img src={images.html24_video6} alt="video code" className="img"/>
        </div>
        <h4>السمة poster </h4>
        <div className="style_divv">
            <ul>
                <li> تستعمل السمة  <b>poster</b> لإضهار صورة في خلفية الفيديو </li>
                <li> تستعمل السمة  <b>poster</b> على الشكل التالي :  "poster="url</li>
                <li> مكان الكلة <b>url</b> قم بكتابة مسار الصورة وإسم و إمتداد الصورة </li>
           </ul>
        </div>
        <div className="sum_exemple_style">
        <div className="mital">مثال : </div>
        <img src={images.html24_video7} alt="code_video" className="img"/>
        </div>
    </article>
</section>
)
}