import { CodeHighlighter } from "../path";
import codes from "../../assests/codes/powerShell/powerShell"

export default function PowerShell(props){
  
    const powerShell_list = Object.keys(codes);
    
    const arrays = powerShell_list.map(e => <li className="list-group-item">
        <a href={`/power-shell#${e}`}>CMD {e.replace(/_/g, ' ')}</a>
    </li>)

    return(
    <main>
        <aside className="aside">
            <h5 className="ms-2 mt-3">PowerShell</h5>
            <ul className="list-group m-0">
                {arrays}
            </ul>
        </aside>
        <section className="section-conetent">
            <h1 className="heading-style-html"> PowerShell Most Use (Windows) </h1>
            
            <article id="create_folder_App">
                <h2 className="title-h2"> 1 - إنشاء مجلد باسم App</h2>
                <CodeHighlighter  code={codes.create_folder_App} language="js" addclassName="mt-3 mb-3" copie={true}/>
            </article>
            
            <article id="remove_directory">
                <h2 className="title-h2"> 2 - حذف مجلد </h2>
               
                  <CodeHighlighter  code={codes.remove_directory[0]} language="js" addclassName="mt-3 mb-3" copie={true}/>
                  <p className="style_divv">
                      <small>إذا كنت تحاول حذف مجلد يحتوي على ملفات أو مجلدات مخفية، ستظهر خطأ يقول "المجلد غير فارغ". في هذه الحالة، يجب عليك إزالة السمات "hidden" و "system" من الملفات داخل المجلد. للقيام بذلك</small><br/>
                      إذا كنت لا تزال موافقًا على حذف جميع الملفات في المجلد، قم بتشغيل:
                  </p>
                  <CodeHighlighter  code={codes.remove_directory[1]} language="js" addclassName="mt-3 mb-3" copie={true}/>
               
            </article>

            <article id="create_file">
                <h2 className="title-h2"> 3 - إنشاء ملف </h2>
                <CodeHighlighter  code={codes.create_file} language="js" addclassName="mt-3 mb-3" copie={true}/>

            </article>
            
            <article id="remove_file">
                <h2 className="title-h2"> 4 - حذف ملف </h2>
                <CodeHighlighter  code={codes.remove_file} language="js" addclassName="mt-3 mb-3" copie={true}/>
            </article>

            <article id="remove_all_file_in_directory">
                <h2 className="title-h2"> 5 - حذف جميع الملفات في المجلد </h2>
                <CodeHighlighter  code={codes.remove_all_file_in_directory} language="js" addclassName="mt-3 mb-3" copie={true}/>
            </article>

            <article id="get_all_directory">
                <h2 className="title-h2"> 6 - الحصول على جميع المجلدات في المسار</h2>
                <CodeHighlighter  code={codes.get_all_directory} language="js" addclassName="mt-3 mb-3" copie={true}/>
            </article>


            <article id="get_content_file">
                <h2 className="title-h2"> 7 - الحصول على محتوى الملف</h2>
                <CodeHighlighter  code={codes.get_content_file} language="js" addclassName="mt-3 mb-3" copie={true}/>
            </article>

            <article id="curl_html">
                <h2 className="title-h2">8 - جلب محتوى HTML باستخدام curl</h2>
                <CodeHighlighter  code={codes.curl_html} language="js" addclassName="mt-3 mb-3" copie={true}/>
            </article>

            <article id="POST_requests_using_curl">
                <h2 className="title-h2">9 - إرسال طلبات POST باستخدام curl </h2>
                <p className="style_divv">سيقوم هذا بإرسال طلب POST إلى www.example.com/login بحمولة تحتوي على حقلي اسم المستخدم وكلمة المرور.</p>
                <CodeHighlighter  code={codes.POST_requests_using_curl} language="js" addclassName="mt-3 mb-3" copie={true}/>
            </article>

            <article id="Copy_all_file_with_some_extension_to_another_folder">
                <h2 className="title-h2">10 - نسخ جميع الملفات بامتداد معين إلى مجلد آخر </h2>
                <p className="style_divv">في هذا المثال، نقوم بنسخ جميع الملفات بامتداد <kbd>.php</kbd> من المجلد <kbd>C:\xampp\htdocs\js\js\</kbd> ونلصقها في <kbd>"C:\Users\SURFACE BOOK\Desktop\all_course_dj_env\project\templates\js"</kbd></p>
                <CodeHighlighter addClass="overflow-x"  code={codes.Copy_all_file_with_some_extension_to_another_folder} language="js" addclassName="mt-3 mb-3" copie={true}/>
            </article>

            <article id="change_extension_php_to_extension_html">
                <h2 className="title-h2"> 11 - تغيير امتداد الملفات من php إلى html </h2>
                <p className="style_divv">  انتقل أولاً إلى مسار المجلد الذي تريد تغيير امتداده.<br/>قم بتغيير كل الملفات ذات الامتداد <kbd>.php</kbd> بالامتداد <kbd>.html</kbd> </p>
                <CodeHighlighter  code={codes.change_extension_php_to_extension_html} language="js" addclassName="mt-3 mb-3" copie={true}/>  
            </article>

            <article id="print_all_file_in_some_folder">
                <h2 className="title-h2"> 12 - طباعة جميع أسماء الملفات في مجلد معين </h2>
                <div class="alert bg-dark text-light mt-2 pb-0"><pre>Get-ChildItem | Where-Object {'{'} -not $_.PSIsContainer {'}'} | ForEach-Object {'{'} $_.Name {'}'}</pre></div>   
            </article>
        </section>
    </main>
    )
}   