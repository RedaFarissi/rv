import { CodeHighlighter } from "../../path";
import images from "../imagesPython"
export default function PythonInVisualStudioCode(){
    return(
        <article>
            <h2 id="python-in-visual-studio-code" className="title-h2"> 5 - بايثون في VS Code .</h2>
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
            <div className="mital">متال : </div>
            <img src={images.python4} className="img" alt="python" />
        </article>
    )
}