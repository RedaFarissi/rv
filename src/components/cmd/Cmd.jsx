import { useEffect } from "react";
import { CodeCommand , Footer} from "../path";
import images from "./imagesCmd";
import { useDispatch } from 'react-redux';
import { useCustomScroolTo0 , useCustoScrollYAdd } from "../../custom/pathCustoms";


export default function Cmd(props){
    useCustomScroolTo0();
    
    const dispatch = useDispatch();
        const arrays = props.cmd_list.map(e => <li className="list-group-item">
        <a href={`/powerShell#${e}`} 
            onClick={ useCustoScrollYAdd }
        >
            <i className="fa-solid fa-caret-right me-2"></i>CMD {e.replace(/_/g, ' ')}
        </a>
    </li>)
    
   // Scroll to the element with the hash on page load or when the hash changes
   useEffect(() => {
          if (window.location.hash) {
            const element = document.getElementById(window.location.hash.substring(1)); // Remove the '#' from the hash
            if (element) {
                const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 140;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
          }
   }, [window.location.hash]); // Run the effect when the url changes manual
   
    return(
    <>
    <main onClick={ (event)=>{ props.clickMenuHeader(event, false); dispatch({ type: 'FALSE_VISIBILTY_PROFILE' })  } }>
        <aside className="aside">
            <ul className="list-group m-0">
                {arrays}
            </ul>
        </aside>
        <section className="section-conetent">
            <h1 className="heading-style"> Command Pormpt (Windows) </h1>  
            <article>
                <h2 id="Introduction" className="title-h2 mt-5"> 1 - ما هو Command Prompt ولماذا نستخدمه</h2>
                <p className="style_divv">
                    CMD، الذي يعني واجهة الأوامر، هو تطبيق مترجم الأوامر المتوفر في معظم أنظمة التشغيل في ويندوز. يوفر واجهة نصية تسمح للمستخدمين بالتفاعل مع نظام التشغيل عبر إدخال الأوامر واستلام ردود نصية. تتيح واجهة أوامر الطرفية للمستخدمين أداء مهام مختلفة، وتنفيذ أوامر النظام، وتصفح نظام الملفات باستخدام مجموعة من الأوامر المحددة.<br/><br/>

                    يمكن للمستخدمين الوصول إلى واجهة أوامر الطرفية عن طريق كتابة "cmd" أو "Command Prompt" في شريط البحث في ويندوز وفتح التطبيق. بمجرد فتحه، يمكنهم إدخال الأوامر لأداء مهام مثل التلاعب في الملفات، وتكوين النظام، وتشخيص الشبكة، وغير ذلك.<br/><br/>

                    تستخدم واجهة أوامر الطرفية بناءً على بنية بناء محددة للأوامر، وكل أمر يقوم بإجراء معين. يمكن للمستخدمين أيضًا إنشاء سيناريوهات الأوامر، وهي سلاسل من الأوامر المحفوظة في ملف بامتداد ".bat" لأتمتة المهام وتنفيذ متسلسل لعدة أوامر.<br/><br/>

                    في حين أن إصدارات أحدث من ويندوز قد قدمت PowerShell، وهو واجهة أوامر ولغة سكريبت أقوى، إلا أن واجهة الأوامر CMD تظل أداة أساسية لمديري النظام والمطورين والمستخدمين الذين يفضلون واجهة أوامر بسيطة للتفاعل مع نظام التشغيل ويندوز.<br/><br/>

                    سنتعلم في هذه الفقرة كل الأوامر الأساسية التي تحتاجها لبدء إستخدام Command Pormpt .
                </p>
            </article>          
            <article className="mt-5">
                <h2 className="title-h2"  id="Create_Folder">2 - إنشاء مجلد </h2>
                <CodeCommand>mkdir folder_name</CodeCommand>
                <CodeCommand>C:\Users\SURFACE BOOK\Desktop{">"} <span className="text-warning">mkdir folder_name</span></CodeCommand>
                <h2 className="title-h2" id="Change_Directory"> 3 - تغيير الدليل</h2>
                <CodeCommand>cd folder_name</CodeCommand>
                <CodeCommand>C:\Users\SURFACE BOOK\Desktop{">"} <span className="text-warning">cd folder_name</span></CodeCommand>
                <h2 className="title-h2"  id="Remove_Directory"> 4 - حذف مجلد </h2>
                <CodeCommand>rmdir /s folder_name</CodeCommand>
                <CodeCommand>C:\Users\SURFACE BOOK\Desktop{">"}<span className="text-warning"> rmdir /s folder_name</span></CodeCommand>
                <p className="style_divv">
                    <small>إذا كنت تحاول حذف مجلد يحتوي على ملفات أو مجلدات مخفية، ستظهر خطأ يقول "المجلد غير فارغ". في هذه الحالة، يجب عليك إزالة السمات "hidden" و "system" من الملفات داخل المجلد. للقيام بذلك</small><br/>
                    إذا كنت لا تزال موافقًا على حذف جميع الملفات في المجلد، قم بتشغيل:
                </p>
                <CodeCommand>attrib -hs *</CodeCommand>
                <h2 className="title-h2" id="Create_File"> 5 - إنشاء ملف </h2>
                <CodeCommand>type nul {">"} file_name.extension</CodeCommand>
                <CodeCommand>C:\Users\SURFACE BOOK\Desktop\folder_name{">"} <span className="text-warning">type nul {">"} index.html</span></CodeCommand>
                <h2 className="title-h2" id="Create_File"> 6 - إعادة تسمية ملف </h2>
                <CodeCommand>ren OldFileName NewFileName</CodeCommand>
                <CodeCommand>C:\Users\SURFACE BOOK\Desktop\folder_name{">"} <span className="text-warning">ren index.html home.html</span></CodeCommand>
                <h2 className="title-h2" id="Remove_File"> 7 - حذف ملف </h2>
                <CodeCommand> del file_name.extension</CodeCommand>
                <CodeCommand>C:\Users\SURFACE BOOK\Desktop\folder_name{">"} <span className="text-warning">del index.html</span></CodeCommand>
                <h2 className="title-h2" id="Remove_all_Files"> 8 - حذف جميع الملفات في المجلد </h2>
                <CodeCommand>del *</CodeCommand>
                <CodeCommand>C:\Users\SURFACE BOOK\Desktop\folder_name{">"} <span className="text-warning">del *</span></CodeCommand>
                <h2 className="title-h2" id="Get_all_Directory"> 9 - الحصول على جميع المجلدات و الملفات في المسار</h2>
                <CodeCommand>dir</CodeCommand>
                <CodeCommand>C:\Users\SURFACE BOOK\Desktop\folder_name{">"} <span className="text-warning">dir</span></CodeCommand>
                <h2 className="title-h2" id="Get_Content_File"> 10 - الحصول على محتوى الملف</h2>
                <CodeCommand>more file_name.extension</CodeCommand>
                <CodeCommand>C:\Users\SURFACE BOOK\Desktop\folder_name{">"} <span className="text-warning">more index.html</span></CodeCommand>
                <h2 className="title-h2" id="Clear_Screen"> 11 - مسح الشاشة </h2>
                <CodeCommand>cls</CodeCommand>
                <h2 className="title-h2" id="curl_Html">12 - جلب محتوى HTML باستخدام curl</h2>
                <CodeCommand>curl https://exemple.com/</CodeCommand>
                <CodeCommand>C:\Users\SURFACE BOOK\Desktop\folder_name{">"} <span className="text-warning">curl https://harmash.com/</span></CodeCommand>
                <h2 className="title-h2" id="POST_Requests_curl">13 - إرسال طلبات POST باستخدام curl </h2>
                <p className="style_divv">سيقوم هذا بإرسال طلب POST إلى www.example.com/login بحمولة تحتوي على حقلي اسم المستخدم وكلمة المرور.</p>
                <CodeCommand>curl --request POST --data "username=johndoe&password=secret" https://www.example.com/login</CodeCommand>
                <h2 className="title-h2" id="Copy_Files_to_another_Folder">14 - نسخ جميع الملفات إلى مجلد آخر </h2>
                <h5>نسخ جميع الملفات بامتداد معين </h5>
                <p className="style_divv">في هذا المثال، نقوم بنسخ جميع الملفات بامتداد <kbd>.php</kbd> من المجلد <kbd>C:\xampp\htdocs\js\js\</kbd> ونلصقها في <kbd>"C:\Users\SURFACE BOOK\Desktop\all_course_dj_env\project\templates\js"</kbd></p>
                <CodeCommand>for %F in ("C:\xampp\htdocs\js\js\*.php") do copy "%F" "C:\Users\SURFACE BOOK\Desktop\all_course_dj_env\project\templates\js"</CodeCommand>
                <h5> نسخ جميع الملفات إلى مجلد آخر </h5>
                <p className="style_divv">نسخ جميع الملفات ذاخل مجلد إلى مجلد آخر .<br/> قم بذهاب إلى المسار الذي يحتوي الملفات تم إستخدم</p>
                <CodeCommand>xcopy /s /i * "C:\Path\To\Target\Folder"</CodeCommand>
                
                <h2 className="title-h2" id="Change_extension"> 15 - تغيير امتداد الملف من php إلى html </h2>
                <CodeCommand>ren filename.php filename.html</CodeCommand>
                
                <h2 className="title-h2" id="Change_extensions"> 16 - تغيير امتداد الملفات من php إلى html </h2>
                <p className="style_divv">  انتقل أولاً إلى مسار المجلد الذي يحتوى الملفات.<br/>قم بتغيير كل الملفات ذات الامتداد <kbd>.php</kbd> بالامتداد <kbd>.html</kbd> </p>
                <CodeCommand>for %i in (*.php) do ren "%i" "*.html"</CodeCommand>
                
                <h2 className="title-h2" id="Print_all_Files_in_folder"> 17 - طباعة جميع أسماء الملفات في مجلد معين </h2>
                <CodeCommand>dir /A-D /B</CodeCommand>
                <CodeCommand>C:\Users\SURFACE BOOK\Desktop\folder_name{">"} <span className="text-warning">dir /A-D /B</span></CodeCommand>
                <h2 className="title-h2" id="View_System_Information"> 18 - عرض معلومات النظام</h2>
                <p className="style_divv">يعرض معلومات حول النظام مثل اسم الكمبيوتر وإصدار النظام.</p>
                <CodeCommand>systeminfo</CodeCommand>
                <h2 className="title-h2" id="Turn_off_the_Computer"> 19 - إيقاف تشغيل الكمبيوتر </h2>
                <CodeCommand>shutdown</CodeCommand>
                <h2 className="title-h2" id="search_for_File_by_Extensions"> 20 - البحث عن امتدادات ملفات محددة في مجلد </h2>
                <img src={images.cmd1} alt="cmd1" className="w-50 m-auto d-block border my-4" />
                <h4><ul><li> تنسيق الناتج <bdi>/B</bdi></li></ul></h4>
                <p className="style_divv"> 
                    يستخدم هذا الخيار للحصول على نتائج بتنسيق بسيط، حيث يعرض اسم الملف فقط دون تفاصيل إضافية.<br/>
                    المثال:  سيقوم بعرض أسماء الملفات فقط.</p>
                <CodeCommand>dir C:\Path\To\Folder\*.html /B</CodeCommand>
                <CodeCommand>C:\Users\SURFACE BOOK\Desktop\test_powerShell{">"} <span className="text-warning">dir .\*.html /B</span></CodeCommand>
                <div className="alert bg-dark text-light" dir="ltr">index.html</div>
                <h4><ul><li> تنسيق الناتج <bdi>/S</bdi></li></ul></h4>
                <p className="style_divv">
                    يستخدم هذا الخيار لتوسيع البحث ليشمل الدلائل الفرعية أو الأقسام الفرعية من الدليل المحدد.<br/><br/>
                    المثال: dir C:\Path\To\Folder\*.txt /S سيبحث عن الملفات ذات الامتداد .txt في الدليل المحدد وفي جميع الدلائل الفرعية.
                </p>
                <CodeCommand>dir C:\Path\To\Folder\*.html /B /S</CodeCommand>
                <CodeCommand>C:\Users\SURFACE BOOK\Desktop\test_powerShell{">"} <span className="text-warning">dir .\*.html /B /S</span></CodeCommand>
                <div className="alert bg-dark text-light" dir="ltr">
                    C:\Users\SURFACE BOOK \ Desktop \ test_powerShell \ index.html<br/><br/>
                    C:\Users\SURFACE BOOK \ Desktop \ test_powerShell \ header \ header.html<br/><br/>
                    C:\Users\SURFACE BOOK \ Desktop \ test_powerShell \ header \ headerComponent \ Nav.html<br/><br/>
                </div>
                <h2 className="title-h2" id="Display_Text"> 21 - عرض النص </h2>
                <CodeCommand>echo Hello, World!</CodeCommand>
                <h2 className="title-h2" id="Date_and_Time"> 22 - عرض أو ضبط التاريخ والوقت </h2>
                <CodeCommand>date</CodeCommand>
                <CodeCommand>time</CodeCommand>
                <h2 className="title-h2" id="your_password_wifi">23 - احصل على كلمة المرور لجميع شبكات الواي فاي المتصلة بجهازك</h2>
                <CodeCommand> netsh wlan show profiles </CodeCommand>
                <CodeCommand> netsh wlan show profiles  name="WIFI_NAME" Key=Clear | find "Key Content" </CodeCommand>
                <div className="mital"> متال : </div>
                <CodeCommand>C:\Users\Dell{">"}<b class="text-danger">netsh wlan show profiles</b><br /><br />
                    Profiles on interface Wi-Fi:<br /><br />
                    Group policy profiles (read only)<br />
                    ---------------------------------<br />
                    &nbsp; &nbsp; &nbsp;  {"<"}None{">"}<br /><br />
                    User profiles<br />
                    -------------<br />
                    &nbsp; &nbsp; &nbsp;   All User Profile     : <span className="text-warning">Bibliotheque_De_Riyad</span><br />
                    &nbsp; &nbsp; &nbsp;   All User Profile     : <span className="text-warning">Fibre_MarocTelecom_2.4G</span><br />
                    &nbsp; &nbsp; &nbsp;   All User Profile     : <span className="text-warning">HP=SMB01&lt;9C_4003dw LJ</span><br />
                    &nbsp; &nbsp; &nbsp;   All User Profile     : <span className="text-warning">AndroidAP_5588</span><br />
                    &nbsp; &nbsp; &nbsp;   All User Profile     : <span className="text-warning">inwi Home 4G 6C8142</span><br />
                    &nbsp; &nbsp; &nbsp;   All User Profile     : <span className="text-warning">Linksys</span><br />
                    &nbsp; &nbsp; &nbsp;   All User Profile     : <span className="text-warning">Tenda_E45A30</span><br />
                    &nbsp; &nbsp; &nbsp;   All User Profile     : <span className="text-warning">Wifi_Perso_2.4Ghz</span><br />
                    &nbsp; &nbsp; &nbsp;   All User Profile     : <span className="text-warning">ADSL_inwi_2.4G_6125</span><br />
                    &nbsp; &nbsp; &nbsp;   All User Profile     : <span className="text-warning">AndroidAP6E8E</span><br />
                    &nbsp; &nbsp; &nbsp;   All User Profile     : <span className="text-warning">tsunami</span><br />
                    &nbsp; &nbsp; &nbsp;   All User Profile     : <span className="text-warning">TP-LINK_692579</span><br />
                    <br />
                    C:\Users\Dell{">"}<b class="text-danger">netsh wlan show profiles  name="<span class="text-success">TP-LINK_692579</span>" Key=Clear | find "Key Content"</b><br />
                    &nbsp; &nbsp;  Key Content            : 39428689<br />
                    <br />
                    C:\Users\Dell{">"}<b class="text-danger">netsh wlan show profiles  name="<span class="text-success">Fibre_MarocTelecom_2.4G</span>" Key=Clear | find "Key Content"</b><br />
                    &nbsp; &nbsp;  Key Content            : Qods3636<br />
                </CodeCommand>
                <h2 className="title-h2" id="All_Available_WiFi">24 -  إظهار جميع شبكات WiFi المتوفرة </h2>
                <CodeCommand> netsh wlan show networks mode=bssid </CodeCommand>
                <div className="mital"> متال : </div>
                <CodeCommand>C:\Users\Dell{">"}<b class="text-danger">netsh wlan show networks mode=bssid</b><br /><br />
                    Interface name : Wi-Fi<br />
                    There are 1 networks currently visible.<br /><br />
                    SSID 1 : TP-LINK_692579<br />
                    &nbsp; &nbsp; Network type       &nbsp;      : Infrastructure<br />
                    &nbsp; &nbsp; Authentication     &nbsp;      : WPA2-Personal<br />
                    &nbsp; &nbsp; Encryption         &nbsp;      : CCMP<br />
                    &nbsp; &nbsp; BSSID 1            &nbsp;      : 34:d8:94:89:35:76<br />
                    &nbsp; &nbsp;  &nbsp; &nbsp;   Signal             : 89%<br />
                    &nbsp; &nbsp;  &nbsp; &nbsp;   Radio type         : 801.11n<br />
                    &nbsp; &nbsp;  &nbsp; &nbsp;   Channel            : 1<br />
                    &nbsp; &nbsp;  &nbsp; &nbsp;   Basic rates (Mbps) : 1 * 5.5 11<br />
                    &nbsp; &nbsp;  &nbsp; &nbsp;   Other rates (Mbps) : 1 2 12 18 24 36 48 54<br />
                </CodeCommand>

            </article>
        </section>
    </main>
    <Footer 
        blockChildStyle={{width: "100%"}}
    />
</>
    )
}   