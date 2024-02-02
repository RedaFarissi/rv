import { CodeHighlighter , CodeCommand} from "../../path";

export default function FileHandling(){
    return(
        <>
        <h1 className="heading-style heading-style-python-color"> Python File Handling</h1>
        <article className="mt-5">
            <p className="style_divv">
                تعد معالجة الملفات جزءًا مهمًا من أي تطبيق ويب.<br/>
                لدى <b>Python</b> العديد من الوظائف لإنشاء الملفات وقراءتها وتحديثها وحذفها.<br/><br/>
                الوظيفة الأساسية للعمل مع الملفات في بايثون هي الدالة <bdi><b>open()</b></bdi>.<br/>
                تأخذ الدالة <bdi>open()</bdi> معلمتين؛ اسم الملف، والوضع.  <br/>
                هناك أربع طرق (أوضاع) مختلفة لفتح ملف :<br/>

                <ul>
                    <li><b className="text-success">"r" :</b> القراءة - القيمة الافتراضية. يفتح ملفا للقراءة، خطأ إذا كان الملف غير موجود</li>
                    <li><b className="text-success">"a" :</b> إلحاق - يفتح ملفًا للإلحاق، وينشئ الملف إذا لم يكن موجودًا</li>
                    <li><b className="text-success">"w" :</b> كتابة - يفتح ملفًا للكتابة، وينشئ الملف إذا لم يكن موجودًا</li>
                    <li><b className="text-success">"x" :</b> إنشاء - إنشاء الملف المحدد، وإرجاع خطأ في حالة وجود الملف</li>
                </ul>
                <br/> بالإضافة إلى ذلك، يمكنك تحديد ما إذا كان يجب التعامل مع الملف كوضع ثنائي أو نصي :<br/><br/>
                <ul>
                    <li><b className="text-success">"t"</b> : نص - القيمة الافتراضية. وضع النص</li>
                    <li><b className="text-success">"b"</b> : ثنائي - الوضع الثنائي (مثل الصور)</li>
                </ul>
                <br/><br/> 
                لفتح ملف للقراءة يكفي تحديد اسم الملف
                <CodeHighlighter  code={`f = open("demofile.txt")`} language="python" addclassName="mt-3 mb-3" copie={true}/>
                الكود أعلاه هو نفسه
                <CodeHighlighter  code={`f = open("demofile.txt", "rt")`} language="python" addclassName="mt-3 mb-3" copie={true}/>
                نظرًا لأن "r" للقراءة و"t" للنص هما القيمتان الافتراضيتان، فلن تحتاج إلى تحديدهما.
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`Reda Eskouni`} language="python" file_name="desktop / python-folder / demofile.txt" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeHighlighter  code={`f = open("demofile.txt")

print(f.read())`} language="python" file_name="desktop / python-folder / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
                Reda Eskouni
            </CodeCommand>
        </article>
        </>
    )
}