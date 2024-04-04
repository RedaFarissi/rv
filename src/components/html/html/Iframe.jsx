import { CodeHighlighter ,  Result} from "../../path";

export default function Iframe(props){
    const codeExemple = `       <iframe width="560" height="315" src="https://www.youtube.com/embed/f0oy-NicIgE?si=ncRrKUBT7RHHFbTt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    return(
<>
    <h1 className="heading-style">HTML Iframe</h1>
    <article  className="mt-5">
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
            <CodeHighlighter file_name="index.html" code={codeExemple} language="html" is_html={true} title="Span" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Span' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/f0oy-NicIgE?si=ncRrKUBT7RHHFbTt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Result>
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
                    <td dir="ltr">allow</td>
                </tr>
                <tr>
                    <td>تعيين إلى true إذا  <bdi><strong>&lt;iframe&gt;</strong></bdi> مكن تنشيط وضع ملء الشاشة عن طريق استدعاء الأسلوب requestFullscreen()</td>
                    <td dir="ltr">	true<br/>false</td>
                    <td dir="ltr">allowfullscreen</td>
                </tr>
                <tr>
                    <td>تحديد ارتفاع <bdi><strong>&lt;iframe&gt;</strong></bdi> . الارتفاع الافتراضي هو 150 بكسل</td>
                    <td dir="ltr">pixels</td>
                    <td dir="ltr">height</td>
                </tr>
                <tr>
                    <td>Lazy تحديد ما إذا كان يجب على المستعرض تحميل iframe فورا أو تأجيل تحميل iframes حتى يتم استيفاء بعض الشروط</td>
                    <td dir="ltr">eager<br/>lazy</td>
                    <td dir="ltr">loading</td>
                </tr>
                <tr>
                    <td>تحديد عنوان المستند لتضمينه في <bdi><strong>&lt;iframe&gt;</strong></bdi> </td>
                    <td dir="ltr">URL</td>
                    <td dir="ltr">src</td>
                </tr>
                <tr>
                    <td>تحديد عرض <bdi><strong>&lt;iframe&gt;</strong></bdi> . العرض الافتراضي هو 300 بكسل
                </td>
                    <td dir="ltr">pixels</td>
                    <td dir="ltr">width</td>
                </tr>
            </tbody>
        </table>
    </article>
</>
    )
}