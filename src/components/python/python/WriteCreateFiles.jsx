import { CodeHighlighter , CodeCommand} from "../../path";

export default function WriteCreateFiles(){
    return(
    <>
        <h1 className="heading-style heading-style-python-color"> Python Write and Create Files</h1> 
        <article className="mt-5">
            <h2 className="title-h2">1 - الكتابة في الملف الموجود</h2>
            <p className="style_divv">
                للكتابة إلى ملف موجود، يجب عليك إضافة معلمة إلى الدالة <bdi><b>open()</b></bdi>:
                <ul>
                    <li><b className="text-success">"a" :</b> إلحاق - سيتم إلحاقه بنهاية الملف</li>
                    <li><b className="text-success">"w" :</b> الكتابة - سوف تحل محل أي محتوى موجود</li>
                </ul>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`Reda Eskouni`} language="txt" file_name="desktop / python-folder / demofile.txt" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeHighlighter  code={`f = open("demofile.txt", "a")
f.write("\\n\\nNow the file has more content!")
f.close()

f = open("demofile.txt", "r")
print(f.read())`} language="python" file_name="desktop / python-folder / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
                Reda Eskouni<br/><br/>Now the file has more content!
            </CodeCommand>
            <ul><li>بعد تشغيل كود بايثون</li></ul>
            <CodeHighlighter  code={`Reda Eskouni
            
Now the file has more content!`} language="txt" file_name="desktop / python-folder / demofile.txt" addclassName="mt-3 mb-3" copie={true}/>   
            
            <h2 className="title-h2">2 - إنشاء ملف جديد </h2>
            <p className="style_divv">
                لإنشاء ملف جديد في بايثون، استخدم طريقة <bdi><b>open()</b></bdi>، مع أحد المعلمات التالية:<br/>
                <ul>
                    <li><b className="text-success">"x"</b> - إنشاء - سيتم إنشاء ملف، وإرجاع خطأ إذا كان الملف موجودًا</li>
                    <li><b className="text-success">"a"</b> - إلحاق - سيقوم بإنشاء ملف إذا كان الملف المحدد غير موجود</li>
                    <li><b className="text-success">"w"</b> - كتابة - سيقوم بإنشاء ملف إذا كان الملف المحدد غير موجود</li>
                </ul>
            </p>
            <div className="mital"> متال 1 : </div>
            <CodeHighlighter  code={`f = open("myfile.txt", "x")   #Result: a new empty file is created!`} language="python" file_name="desktop / python-folder / app.py" addclassName="mt-3 mb-3" copie={true}/>
            <div className="mital"> متال 2 : </div>
            <CodeHighlighter  code={`f = open("myfile.txt", "w") # esult: Create a new file if it does not exist`} language="python" file_name="desktop / python-folder / app.py" addclassName="mt-3 mb-3" copie={true}/>   
        </article>
    </>
    )
}