import images from "../imagesDjango";
import { CodeCommand , CodeHighlighter , Result } from "../../path";

export default function Virtualenv(){
    return(
        <article className="mt-5" id="virtualenv">
            <h2 className="title-h2"> 2- virtualenv .</h2> 
            <h3 className="title-h3" id="What_is_virtualenv">1 - ما هو virtualenv</h3>
            <p className="style_divv"> 
               virtualenv (اختصار ل virtual environment) هو أداة في Python تساعد في إدارة عدة بيئات Python على نفس الجهاز. إليك بعض الأسباب الرئيسية التي تجعل استخدام البيئات الظاهرية، مثل virtualenv، شائعًا في تطوير Python:<br/><br/>
               <ul>
                  <li  className="mb-3"><span className="text-success">عزل التبعيات (Isolation of Dependencies)</span> : تسمح البيئات الظاهرية بإنشاء بيئات معزولة لمشاريع مختلفة. يمكن أن تحتوي كل بيئة على مجموعتها الخاصة من حزم Python والتبعيات، مضمونة بأن الحزم المستخدمة في مشروع واحد لا تتداخل مع تلك المستخدمة في مشروع آخر.</li>
                  <li  className="mb-3"><span className="text-success">توافق الإصدارات (Version Compatibility)</span> : قد تتطلب مشاريع مختلفة إصدارات مختلفة من Python أو حزم محددة. تمكين البيئات الظاهرية من إنشاء بيئة بإصدار معين من Python وتثبيت الحزم الضرورية لمشروع معين، مما يضمن التوافق.</li>
                  <li  className="mb-3"><span className="text-success">بنية المشروع النظيفة (Cleaner Project Structure)</span> : عند العمل على مشروع، تُخزن التبعيات داخل دليل المشروع بدلاً من تثبيتها على نطاق النظام بأكمله. ينتج عن ذلك بنية مشروع أنظف، ويسهل مشاركة المشروع مع الآخرين أو نشره في بيئات مختلفة.</li>
                  <li  className="mb-3"><span className="text-success">إدارة التبعيات (Dependency Management)</span> : </li>
                  <li  className="mb-3"><span className="text-success"></span> : تجعل البيئات الظاهرية من السهل إدارة التبعيات للمشروع. يمكنك تجميد (freeze) قائمة التبعيات المثبتة في بيئة النظير الظاهري، مما يخلق ملف requirements.txt يمكن استخدامه لتثبيت نفس مجموعة التبعيات في مكان آخر.</li>
                  <li  className="mb-3"><span className="text-success">تجنب التغييرات العالمية (Avoiding System-Wide Changes)</span> : عند تثبيت تبعيات Python على نطاق النظام بأكمله، قد تواجه مشكلات إذا احتاجت مشاريع مختلفة إلى إصدارات مختلفة من نفس الحزمة. تتجنب البيئات الظاهرية هذه المشكلة من خلال الاحتفاظ بالتبعيات محليًا للمشروع.</li>
                  <li  className="mb-3"><span className="text-success">اختبار وتطوير (Testing and Development)</span> : تكون البيئات الظاهرية مفيدة بشكل خاص للاختبار والتطوير. تتيح لك إنشاء بيئة نظيفة للاختبار دون التأثير على تثبيت Python على نطاق النظام. هذا أمر حيوي عند العمل على مشاريع مع إصدارات Python أو تبعيات مختلفة.</li>
                  <li  className="mb-3"><span className="text-success">تعطيل وحذف البيئة الظاهرية بسهولة (Easy Deactivation and Deletion)</span> : تفعيل أو تعطيل بيئة ظاهرية أمر بسيط، مما يجعل من السهل الانتقال بين بيئات المشروع المختلفة. أيضًا، حذف البيئة الظاهرية يتم بسهولة ولا يترك ملفات أو تبعيات متبقية على النظام.</li>
               </ul>
            </p>
            <h3 className="title-h3" id="Install_virtualenv"> 1 - تثبيت virtualenv </h3>
            <ul><li>لتثبيت Virtualenv، افتح موجه الأوامر (Command Prompt) واستخدمه  :</li></ul>
            <CodeCommand>pip install virtualenv</CodeCommand>
            <img src={images.django26} className="img"/>
            <h3 className="title-h3" id="Create_virtualenv"> 2 - إنشاء virtualenv </h3>
            <ul><li>لإنشاء virtualenv، انتقل إلى المسار الذي تريد إنشاء virtualenv فيه واستخدمه :</li></ul>
            <CodeCommand>python -m virtualenv Your_Folder_Name</CodeCommand>
            <div className="mital">متال : </div>
            <img src={images.django27} className="img"/>
            <h3 className="title-h3" id="Activate_virtualenv"> 3 - تفعيل  virtualenv </h3>
            <CodeCommand>cd Your_Folder_Name</CodeCommand>
            <CodeCommand>.\\Scripts\activate</CodeCommand>
            <img src={images.django28} className="img"/>
            <h3 className="title-h3" id="Deactivate_virtualenv"> 4 - إلغاء التنشيط virtualenv </h3>
            <CodeCommand>deactivate</CodeCommand>
            <h3 className="title-h3" id="Check_packages_installed"> 5 -  التحقق من الحزم المثبتة</h3>
            <CodeCommand>pip freeze</CodeCommand>
            <img src={images.django29} className="img"/>
            <ul><li>في هذه الحالة لم نقوم بتثبيت أي شيء حتى الآن</li></ul>
            <h3 className="title-h3" id="Install_django"> 6 -  تثبيت django في virtualenv</h3>
            <ul><li>لدي تثبيت django في جهازي، ولكن لاستخدامه داخل virtualenv أحتاج إلى تثبيته مرة أخرى</li></ul>
            <CodeCommand>python -m pip install django</CodeCommand>
            <img src={images.django30} className="img"/>
            <img src={images.django31} className="img"/>
            <h3 className="title-h3" id="Creating_Django_project"> 7 - إنشاء مشروع django </h3>
            <CodeCommand>django-admin startproject project_name</CodeCommand>
            <ul><li> إذا كان لديك أخطاء استخدم :</li></ul>
            <CodeCommand> python -m django startproject project_name  </CodeCommand>
            <ul><li> إذا كنت ترغب في إنشاء مشروع في نفس الدليل استخدم : </li></ul>
            <CodeCommand>python -m django startproject project_name .</CodeCommand>
            <img src={images.django32} className="img"/>
            <h3 className="title-h3" id="Get_version_installed_django">8 - احصل على إصدار Django المثبت لديك</h3>
            <CodeCommand>python -m django --version</CodeCommand>

            <h3 className="title-h3" id="requirements">9 - ملف requirements.txt </h3>
            <p className="style_divv">
               في Django، يتم استخدام ملف requirements.txt عادةً لتحديد وإدارة تبعيات المشروع. يتيح لك هذا الملف سرد جميع حزم Python وإصداراتها التي يعتمد عليها مشروعك. وهذا مفيد بشكل خاص لإنشاء بيئة تطوير قابلة لإعادة الإنتاج.<br/><br/>
               يمكنك استخدام اسم مختلف لملف requirements.txt. تتمثل الاتفاقية في استخدام requirements.txt لأنه معترف به على نطاق واسع في مجتمع تطوير Python. ومع ذلك، إذا كنت تفضل اسمًا مختلفًا لأي سبب من الأسباب، فيمكنك اختيار الاسم المناسب لمشروعك.
            </p>
            <h5 className="title-h5"> 1 - احفظ جميع الحزم المستخدمة في virtualenv في ملف بامتداد txt </h5>
            <CodeCommand>pip freeze {">"} requirements.txt .</CodeCommand>
            <img src={images.django33} className="img"/>
            <h3 className="title-h5"> 2 - لتحميل كل هذه الحزم من مشروع آخر أو عند استخدام جيثب  </h3>
            <CodeCommand>pip install -r requirements.txt .</CodeCommand>
            <h3 className="title-h3" id="Running_development_server"> 10 - تشغيل خادم التطوير .</h3> 
            <CodeCommand>cd project_name</CodeCommand>
            <CodeCommand>python manage.py runserver</CodeCommand>
        </article>
    )
}
