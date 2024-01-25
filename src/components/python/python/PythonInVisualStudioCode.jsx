import { CodeHighlighter } from "../../path";
import images from "../imagesPython"

export default function PythonInVisualStudioCode(){
    return(
        <article className="mt-5">
            <h2 id="python-in-visual-studio-code" className="title-h2">  بايثون في VS Code .</h2>
            <p className="style_divv">
                يعد <b>Visual Studio Code (VS Code)</b> محرر تعليمات برمجية شائعًا وخفيف الوزن تم تطويره بواسطة <b>Microsoft</b>. يتمتع بدعم ممتاز لتطوير <b>Python</b> من خلال الامتدادات والميزات المختلفة.
            </p>
            <h3 className="title-h3">1 - تحميل visual Studio Code .</h3>
            <p className="style_divv">
                إذا لم تكن قد قمت بذلك بالفعل، فقم بتنزيل <b>Visual Studio Code</b> وتثبيته من الموقع الرسمي: <a href={`/html/editor`}>Visual Studio Code</a> .
            </p>
            <h3 className="title-h3">2 - إنشاء ملف بايثون .</h3>
            <p className="style_divv">
                قم بإنشاء ملف بايثون جديد بامتداد <kbd>.py</kbd>
                ، ويمكنك البدء في كتابة كود بايثون.
            </p>
            <h3 className="title-h3">3 - فتح موجه الأوامر </h3>
            <p className="style_divv">
                افتح موجه الأوامر أو تيرمينال النظام الخاص بك. يمكنك العثور على <b>"Command Prompt"</b> أو <b>"PowerShell"</b> في قائمة ابدأ <b>(Start)</b> في نظام <b>Windows</b> أو استخدام تيرمينال في نظام <b>macOS/Linux</b>.
            </p>
            <h3 className="title-h3">4 - انتقال إلى مجلد البرنامج </h3>
            <p className="style_divv">
                انتقل إلى المجلد الذي يحتوي على ملف البرنامج الخاص بك باستخدام الأمر <b>cd</b> (تغيير الدليل). مثلاً:
                <CodeHighlighter  code={`cd path/to/your/python/script`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            </p>
            <h3 className="title-h3">5 - تنفيذ البرنامج:  </h3>
            <p className="style_divv">
                بعد أن تكون في المجلد الصحيح، يمكنك تنفيذ البرنامج باستخدام الأمر python متبوعًا باسم ملف البرنامج
                <CodeHighlighter  code={`python filename.py`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            </p>
            <div className="mital">متال : </div>
            <img src={images.python4} className="img" alt="python" />
        </article>
    )
}