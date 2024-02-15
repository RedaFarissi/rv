import images from "../imagesPython"
import { CodeCommand } from "../../path";

export default function InstallPython(){
    return(
        <>
        <h1 className="heading-style heading-style-python-color"> Install Python</h1>
        <article className="mt-5">
            <h2 className="title-h2">1 - تحميل بايثون .</h2>
            <p className="style_divv">             
                <ul>
                    <li>قم بزيارة موقع بايثون الرسمي : <a dir="ltr" href="https://www.python.org/downloads/" target="_blank" rel="noreferrer" className="text-success">https://www.python.org/downloads/.</a></li>
                    <li>انقر على علامة التبويب "Downloads".</li>
                    <li>اختر أحدث إصدار من بايثون لنظام التشغيل Windows وقم بتنزيل المثبت (عادةً ملف .exe).</li>
                </ul>
            </p>
            <img src={images.python1} className="img" alt="python" />
            <h2 className="title-h2">2 - تشغيل المثبت .</h2>
            <p className="style_divv">
                <ul>
                    <li>انقر نقرًا مزدوجًا على المثبت الذي تم تنزيله.</li>
                    <li>تأكد من تحديد خانة "Add Python to PATH" أثناء التثبيت.</li>
                    <li>انقر على "Install Now" لبدء التثبيت.</li>
                    <li>سيقوم المثبت بتثبيت بايثون وإعداد المتغيرات البيئية الضرورية.</li>
                </ul>
            </p>
            <img src={images.python2} className="img" alt="python" />
            <img src={images.python3} className="img" alt="python" />
            <h2 className="title-h2">3 - التحقق من التثبيت .</h2>
            <p className="style_divv">
                افتح نافذة الأوامر واكتب <b>python --version</b> أو <b>python -V</b> للتحقق مما إذا كان بايثون قد تم تثبيته ولرؤية الإصدار المثبت.
            </p>
            <CodeCommand>C:\{">"} <span className="text-warning">python --version</span><br/>{`>>>`} Python 3.12.1</CodeCommand>
        </article>
        </>
    )
}