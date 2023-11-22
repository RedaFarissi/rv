import { CodeCommand } from "../path";
import codes from "../../assests/codes/cmd/cmd"
import images from "./imagesCmd";


export default function Cmd(props){
   
    const arrays = codes.map(e => <li className="list-group-item">
        <a href={`/power-shell#${e}`}>CMD {e.replace(/_/g, ' ')}</a>
    </li>)

    return(
    <main>
        <aside className="aside">
            <h5 className="mt-3">Command Pormpt</h5>
            <ul className="list-group m-0">
                {arrays}
            </ul>
        </aside>
        <section className="section-conetent">
            <h1 className="heading-style-html"> Command Pormpt (Windows) </h1>            
            <article className="mt-5">
                <h3 className="title-h3"  id="Create_Folder">1 - إنشاء مجلد </h3>
                <CodeCommand>mkdir folder_name</CodeCommand>
                <CodeCommand>C:\Users\SURFACE BOOK\Desktop{">"} <span className="text-warning">mkdir folder_name</span></CodeCommand>
                <h3 className="title-h3" id="Change_Directory"> 2 - تغيير الدليل</h3>
                <CodeCommand>cd folder_name</CodeCommand>
                <CodeCommand>C:\Users\SURFACE BOOK\Desktop{">"} <span className="text-warning">cd folder_name</span></CodeCommand>
                <h3 className="title-h3"  id="Remove_Directory"> 3 - حذف مجلد </h3>
                <CodeCommand>rmdir /s folder_name</CodeCommand>
                <CodeCommand>C:\Users\SURFACE BOOK\Desktop{">"}<span className="text-warning"> rmdir /s folder_name</span></CodeCommand>
                <p className="style_divv">
                    <small>إذا كنت تحاول حذف مجلد يحتوي على ملفات أو مجلدات مخفية، ستظهر خطأ يقول "المجلد غير فارغ". في هذه الحالة، يجب عليك إزالة السمات "hidden" و "system" من الملفات داخل المجلد. للقيام بذلك</small><br/>
                    إذا كنت لا تزال موافقًا على حذف جميع الملفات في المجلد، قم بتشغيل:
                </p>
                <CodeCommand>attrib -hs *</CodeCommand>
                <h3 className="title-h3" id="Create_File"> 4 - إنشاء ملف </h3>
                <CodeCommand>type nul {">"} file_name.extension</CodeCommand>
                <CodeCommand>C:\Users\SURFACE BOOK\Desktop\folder_name{">"} <span className="text-warning">type nul {">"} index.html</span></CodeCommand>
                <h3 className="title-h3" id="Create_File"> 5 - إعادة تسمية ملف </h3>
                <CodeCommand>ren OldFileName NewFileName</CodeCommand>
                <CodeCommand>C:\Users\SURFACE BOOK\Desktop\folder_name{">"} <span className="text-warning">ren index.html home.html</span></CodeCommand>
                <h3 className="title-h3" id="Remove_File"> 6 - حذف ملف </h3>
                <CodeCommand> del file_name.extension</CodeCommand>
                <CodeCommand>C:\Users\SURFACE BOOK\Desktop\folder_name{">"} <span className="text-warning">del index.html</span></CodeCommand>
                <h3 className="title-h3" id="Remove_all_Files"> 7 - حذف جميع الملفات في المجلد </h3>
                <CodeCommand>del *</CodeCommand>
                <CodeCommand>C:\Users\SURFACE BOOK\Desktop\folder_name{">"} <span className="text-warning">del *</span></CodeCommand>
                <h3 className="title-h3" id="Get_all_Directory"> 8 - الحصول على جميع المجلدات و الملفات في المسار</h3>
                <CodeCommand>dir</CodeCommand>
                <CodeCommand>C:\Users\SURFACE BOOK\Desktop\folder_name{">"} <span className="text-warning">dir</span></CodeCommand>
                <h3 className="title-h3" id="Get_Content_File"> 9 - الحصول على محتوى الملف</h3>
                <CodeCommand>more file_name.extension</CodeCommand>
                <CodeCommand>C:\Users\SURFACE BOOK\Desktop\folder_name{">"} <span className="text-warning">more index.html</span></CodeCommand>
                <h3 className="title-h3" id="Clear_Screen"> 10 - مسح الشاشة </h3>
                <CodeCommand>cls</CodeCommand>
                <h3 className="title-h3" id="curl_Html">11 - جلب محتوى HTML باستخدام curl</h3>
                <CodeCommand>curl https://exemple.com/</CodeCommand>
                <CodeCommand>C:\Users\SURFACE BOOK\Desktop\folder_name{">"} <span className="text-warning">curl https://harmash.com/</span></CodeCommand>
                <h3 className="title-h3" id="POST_Requests_curl">12 - إرسال طلبات POST باستخدام curl </h3>
                <p className="style_divv">سيقوم هذا بإرسال طلب POST إلى www.example.com/login بحمولة تحتوي على حقلي اسم المستخدم وكلمة المرور.</p>
                <CodeCommand>curl --request POST --data "username=johndoe&password=secret" https://www.example.com/login</CodeCommand>
                <h3 className="title-h3" id="Copy_Files_to_another_Folder">13 - نسخ جميع الملفات بامتداد معين إلى مجلد آخر </h3>
                <p className="style_divv">في هذا المثال، نقوم بنسخ جميع الملفات بامتداد <kbd>.php</kbd> من المجلد <kbd>C:\xampp\htdocs\js\js\</kbd> ونلصقها في <kbd>"C:\Users\SURFACE BOOK\Desktop\all_course_dj_env\project\templates\js"</kbd></p>
                <CodeCommand>for %F in (C:\xampp\htdocs\js\js\*.php) do copy "%F" "C:\Users\SURFACE BOOK\Desktop\all_course_dj_env\project\templates\js"</CodeCommand>
                <h3 className="title-h3" id="Change_extension"> 14 - تغيير امتداد الملفات من php إلى html </h3>
                <p className="style_divv">  انتقل أولاً إلى مسار المجلد الذي يحتوى الملفات.<br/>قم بتغيير كل الملفات ذات الامتداد <kbd>.php</kbd> بالامتداد <kbd>.html</kbd> </p>
                <CodeCommand>for %i in (*.php) do ren "%i" "*.html"</CodeCommand>
                <h3 className="title-h3" id="Print_all_Files_in_folder"> 15 - طباعة جميع أسماء الملفات في مجلد معين </h3>
                <CodeCommand>Get-ChildItem | Where-Object {'{'} -not $_.PSIsContainer {'}'} | ForEach-Object {'{'} $_.Name {'}'}</CodeCommand>
                <CodeCommand>C:\Users\SURFACE BOOK\Desktop\folder_name{">"} <span className="text-warning">Get-ChildItem | Where-Object {'{'} -not $_.PSIsContainer {'}'} | ForEach-Object {'{'} $_.Name {'}'}</span></CodeCommand>
                <h3 className="title-h3" id="View_System_Information"> 16 - عرض معلومات النظام</h3>
                <p className="style_divv">يعرض معلومات حول النظام مثل اسم الكمبيوتر وإصدار النظام.</p>
                <CodeCommand>systeminfo</CodeCommand>
                <h3 className="title-h3" id="Turn_off_the_Computer"> 17 - إيقاف تشغيل الكمبيوتر </h3>
                <CodeCommand>shutdown</CodeCommand>
                <h3 className="title-h3" id="search_for_File_by_Extensions"> 18 - البحث عن امتدادات ملفات محددة في مجلد </h3>
                <img src={images.cmd1} alt="cmd1" className="w-50 m-auto d-block border my-4" />
                <h4><ul><li> تنسيق الناتج <bdi>/B</bdi></li></ul></h4>
                <p className="style_divv"> 
                    يستخدم هذا الخيار للحصول على نتائج بتنسيق بسيط، حيث يعرض اسم الملف فقط دون تفاصيل إضافية.<br/>
                    المثال:  سيقوم بعرض أسماء الملفات فقط.</p>
                <CodeCommand>dir C:\Path\To\Folder\*.html /B</CodeCommand>
                <CodeCommand>C:\Users\SURFACE BOOK\Desktop\test_powerShell{">"} <span className="text-warning">dir .\*.html /B</span></CodeCommand>
                <div className="style-result">index.html</div>
                <h4><ul><li> تنسيق الناتج <bdi>/S</bdi></li></ul></h4>
                <p className="style_divv">
                    يستخدم هذا الخيار لتوسيع البحث ليشمل الدلائل الفرعية أو الأقسام الفرعية من الدليل المحدد.<br/><br/>
                    المثال: dir C:\Path\To\Folder\*.txt /S سيبحث عن الملفات ذات الامتداد .txt في الدليل المحدد وفي جميع الدلائل الفرعية.
                </p>
                <CodeCommand>dir C:\Path\To\Folder\*.html /B /S</CodeCommand>
                <CodeCommand>C:\Users\SURFACE BOOK\Desktop\test_powerShell{">"} <span className="text-warning">dir .\*.html /B /S</span></CodeCommand>
                <div className="style-result">
                    C:\Users\SURFACE BOOK\Desktop\test_powerShell\index.html<br/>
                    C:\Users\SURFACE BOOK\Desktop\test_powerShell\header\header.html<br/>
                    C:\Users\SURFACE BOOK\Desktop\test_powerShell\header\headerComponent\Nav.html<br/>
                </div>
                <h3 className="title-h3" id="Display_Text"> 19 - عرض النص </h3>
                <CodeCommand>echo Hello, World!</CodeCommand>
                <h3 className="title-h3" id=""> 20 - عرض أو ضبط التاريخ والوقت </h3>
                <CodeCommand>date</CodeCommand>
                <CodeCommand>time</CodeCommand>
            </article>
        </section>
    </main>
    )
}   