import { CodeCommand} from "../../path";

export default function ExecutePythonInCmd(){
    return(
        <>
        <h1 className="heading-style heading-style-python-color"> Execute Python In Cmd</h1>
        <article className="mt-5">
            <p className="style_divv">
                يمكنك تنفيذ برامج <b>Python</b> عبر واجهة سطر الأوامر <b>(Command Prompt)</b> على نظام <b>Windows</b>. للقيام بذلك، يجب أن يكون <b>Python</b> مثبتًا على جهاز الكمبيوتر الخاص بك ويجب أن يتم تكوين المتغيرات البيئية بحيث يمكن لنظام التشغيل العثور على <b>Python</b>.
            </p>
            <h2 className="title-h2">1 - التحقق من تثبيت بايثون </h2>
            <p className="style_divv">
                تأكد من أن <b>Python</b> مثبت على جهاز الكمبيوتر الخاص بك. يمكنك فحص ذلك بكتابة الأمر التالي في سطر الأوامر<br/><br/>
                إذا كان <b>Python</b> مثبتًا، ستظهر لك إصدار النسخة .
                <CodeCommand>C:{">"} python --version  </CodeCommand>
            </p>
            <h2 className="title-h2">2 - التحقق من المتغيرات البيئية </h2>
            <p className="style_divv">
                تأكد من أن مجلد الـ <b>"Scripts"</b> في مجلد التثبيت الخاص بـ <b>Python</b> مضاف إلى المتغيرات البيئية <b>PATH</b>. يمكنك فحص ذلك بكتابة الأمر التالي : 
                <CodeCommand>C:{">"} echo %PATH%  </CodeCommand>
                إذا كنت ترى المسار إلى مجلد <b>"Scripts"</b> في مسارات المتغيرات البيئية، فإن <b>Python</b> يجب أن يكون قابل للاستدعاء من أي مكان في سطر الأوامر.
            </p>
            <h2 className="title-h2">3 - تنفيذ البرنامج:</h2>
            <p className="style_divv">
                بعد التأكد من تثبيت <b>Python</b> وتكوين المتغيرات البيئية، يمكنك تنفيذ برامج <b>Python</b> من سطر الأوامر. قم بكتابة <b>"python"</b> واضغط <b>Enter</b> :
                <CodeCommand>C:{">"} python </CodeCommand>
                ستظهر لك واجهة <b>Python REPL (Read-Eval-Print Loop)</b> حيث يمكنك كتابة أوامر <b>Python</b> مباشرة. في هذا المثال، قمت بكتابة:
                <CodeCommand>{">>>"} print("Hello, Python!") </CodeCommand>
                وعند الضغط على <b>Enter</b>، سيتم تنفيذ الأمر وسترى الناتج.<br/>
                للخروج من واجهة <b>Python REPL</b>، يمكنك كتابة:
                <CodeCommand>{">>>"} exit() </CodeCommand>
            </p>
            <div className="mital"> متال : </div>
            <CodeCommand>
                C:\{">"} <span className="text-warning">python</span><br/>
                Python 3.12.1 (tags/v3.12.1:2305ca5, Dec  7 2023, 22:03:25) [MSC v.1937 64 bit (AMD64)] on win32<br/>
                Type "help", "copyright", "credits" or "license" for more information.<br/><br/>
                {`>>>`} print("Hello, Python!")<br/>
                Hello, Python!<br/>
                {`>>>`} numbers = ["A","B","C","D","E","F"]<br/>
                {`>>>`} for num in numbers:<br/>
                ...     print(f"num = {"{"}num{"}"} and num x 2 = {"{"}num*2{"}"}")<br/>
                ...<br/>
                num = A and num x 2 = AA<br/>
                num = B and num x 2 = BB<br/>
                num = C and num x 2 = CC<br/>
                num = D and num x 2 = DD<br/>
                num = E and num x 2 = EE<br/>
                num = F and num x 2 = FF<br/>
                {`>>>`} exit()<br/>
            </CodeCommand>
        </article>
        </>
    )
}