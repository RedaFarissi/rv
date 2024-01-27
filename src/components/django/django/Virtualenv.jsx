import images from "../imagesDjango";
import { CodeCommand , CodeHighlighter , Result } from "../../path";

export default function Virtualenv(){
    return(
    <>
        <h1 className="heading-style heading-style-django-color"> Django virtualenv</h1> 
        <article className="mt-5" id="virtualenv">
            <h2 className="title-h2" id="What_is_virtualenv">1 - ما هو virtualenv</h2>
            <p className="style_divv"> 
               <b>virtualenv</b> (اختصار ل <b>virtual environment</b>) هو أداة في <b>Python</b> تساعد في إدارة عدة بيئات <b>Python</b> على نفس الجهاز. إليك بعض الأسباب الرئيسية التي تجعل استخدام البيئات الظاهرية، مثل <b>virtualenv</b>، شائعًا في تطوير <b>Python</b>:<br/><br/>
               <ul>
                  <li  className="mb-3"><b className="text-success">عزل التبعيات (Isolation of Dependencies)</b> : تسمح البيئات الظاهرية بإنشاء بيئات معزولة لمشاريع مختلفة. يمكن أن تحتوي كل بيئة على مجموعتها الخاصة من حزم <b>Python</b> والتبعيات، مضمونة بأن الحزم المستخدمة في مشروع واحد لا تتداخل مع تلك المستخدمة في مشروع آخر.</li>
                  <li  className="mb-3"><b className="text-success">توافق الإصدارات (Version Compatibility)</b> : قد تتطلب مشاريع مختلفة إصدارات مختلفة من <b>Python</b> أو حزم محددة. تمكين البيئات الظاهرية من إنشاء بيئة بإصدار معين من <b>Python</b> وتثبيت الحزم الضرورية لمشروع معين، مما يضمن التوافق.</li>
                  <li  className="mb-3"><b className="text-success">بنية المشروع النظيفة (Cleaner Project Structure)</b> : عند العمل على مشروع، تُخزن التبعيات داخل دليل المشروع بدلاً من تثبيتها على نطاق النظام بأكمله. ينتج عن ذلك بنية مشروع أنظف، ويسهل مشاركة المشروع مع الآخرين أو نشره في بيئات مختلفة.</li>
                  <li  className="mb-3"><b className="text-success">إدارة التبعيات (Dependency Management)</b> : </li>
                  <li  className="mb-3"><b className="text-success"></b> : تجعل البيئات الظاهرية من السهل إدارة التبعيات للمشروع. يمكنك تجميد <b>(freeze)</b> قائمة التبعيات المثبتة في بيئة النظير الظاهري، مما يخلق ملف <b>requirements.txt</b> يمكن استخدامه لتثبيت نفس مجموعة التبعيات في مكان آخر.</li>
                  <li  className="mb-3"><b className="text-success">تجنب التغييرات العالمية (Avoiding System-Wide Changes)</b> : عند تثبيت تبعيات <b>Python</b> على نطاق النظام بأكمله، قد تواجه مشكلات إذا احتاجت مشاريع مختلفة إلى إصدارات مختلفة من نفس الحزمة. تتجنب البيئات الظاهرية هذه المشكلة من خلال الاحتفاظ بالتبعيات محليًا للمشروع.</li>
                  <li  className="mb-3"><b className="text-success">اختبار وتطوير (Testing and Development)</b> : تكون البيئات الظاهرية مفيدة بشكل خاص للاختبار والتطوير. تتيح لك إنشاء بيئة نظيفة للاختبار دون التأثير على تثبيت <b>Python</b> على نطاق النظام. هذا أمر حيوي عند العمل على مشاريع مع إصدارات <b>Python</b> أو تبعيات مختلفة.</li>
                  <li  className="mb-3"><b className="text-success">تعطيل وحذف البيئة الظاهرية بسهولة (Easy Deactivation and Deletion)</b> : تفعيل أو تعطيل بيئة ظاهرية أمر بسيط، مما يجعل من السهل الانتقال بين بيئات المشروع المختلفة. أيضًا، حذف البيئة الظاهرية يتم بسهولة ولا يترك ملفات أو تبعيات متبقية على النظام.</li>
               </ul>
            </p>
            <h2 className="title-h2" id="Install_virtualenv"> 1 - تثبيت virtualenv </h2>
            <ul><li>لتثبيت <b>Virtualenv</b>، افتح موجه الأوامر <b>(Command Prompt)</b> واستخدمه  :</li></ul>
            <CodeCommand>pip install virtualenv</CodeCommand>
            <img src={images.django26} className="img"/>
            <h2 className="title-h2" id="Create_virtualenv"> 2 - إنشاء virtualenv </h2>
            <ul><li>لإنشاء <b>virtualenv</b>، انتقل إلى المسار الذي تريد إنشاء <b>virtualenv</b> فيه واستخدمه :</li></ul>
            <CodeCommand>python -m virtualenv Your_Folder_Name</CodeCommand>
            <div className="mital">متال : </div>
            <img src={images.django27} className="img"/>
            <h2 className="title-h2" id="Activate_virtualenv"> 3 - تفعيل  virtualenv </h2>
            <CodeCommand>cd Your_Folder_Name</CodeCommand>
            <CodeCommand>.\\Scripts\activate</CodeCommand>
            <img src={images.django28} className="img"/>
            <h2 className="title-h2" id="Deactivate_virtualenv"> 4 - إلغاء التنشيط virtualenv </h2>
            <CodeCommand>deactivate</CodeCommand>
            <h2 className="title-h2" id="Check_packages_installed"> 5 -  التحقق من الحزم المثبتة</h2>
            <CodeCommand>pip freeze</CodeCommand>
            <img src={images.django29} className="img"/>
            <ul><li>في هذه الحالة لم نقوم بتثبيت أي شيء حتى الآن</li></ul>
            <h2 className="title-h2" id="Install_django"> 6 -  تثبيت django في virtualenv</h2>
            <ul><li>لدي تثبيت <b>django</b> في جهازي، ولكن لاستخدامه داخل <b>virtualenv</b> أحتاج إلى تثبيته مرة أخرى</li></ul>
            <CodeCommand>python -m pip install django</CodeCommand>
            <img src={images.django30} className="img"/>
            <img src={images.django31} className="img"/>
            <h2 className="title-h2" id="Creating_Django_project"> 7 - إنشاء مشروع django </h2>
            <CodeCommand>django-admin startproject project_name</CodeCommand>
            <ul><li> إذا كان لديك أخطاء استخدم :</li></ul>
            <CodeCommand> python -m django startproject project_name  </CodeCommand>
            <ul><li> إذا كنت ترغب في إنشاء مشروع في نفس الدليل استخدم : </li></ul>
            <CodeCommand>python -m django startproject project_name .</CodeCommand>
            <img src={images.django32} className="img"/>
            <h2 className="title-h2" id="Get_version_installed_django">8 - احصل على إصدار Django المثبت لديك</h2>
            <CodeCommand>python -m django --version</CodeCommand>
            <h2 className="title-h2" id="requirements">9 - ملف requirements.txt </h2>
            <p className="style_divv">
               في <b>Django</b>، يتم استخدام ملف <b>requirements.txt</b> عادةً لتحديد وإدارة تبعيات المشروع. يتيح لك هذا الملف سرد جميع حزم <b>Python</b> وإصداراتها التي يعتمد عليها مشروعك. وهذا مفيد بشكل خاص لإنشاء بيئة تطوير قابلة لإعادة الإنتاج.<br/><br/>
               يمكنك استخدام اسم مختلف لملف <b>requirements.txt</b>، تتمثل الاتفاقية في استخدام <b>requirements.txt</b> لأنه معترف به على نطاق واسع في مجتمع تطوير <b>Python</b>. ومع ذلك، إذا كنت تفضل اسمًا مختلفًا لأي سبب من الأسباب، فيمكنك اختيار الاسم المناسب لمشروعك.
            </p>
            <h3 className="title-h3"> 1 - احفظ جميع الحزم المستخدمة في virtualenv في ملف بامتداد txt </h3>
            <CodeCommand>pip freeze {">"} requirements.txt .</CodeCommand>
            <img src={images.django33} className="img"/>
            <h3 className="title-h3"> 2 - لتحميل كل هذه الحزم من مشروع آخر أو عند استخدام جيثب  </h3>
            <CodeCommand>pip install -r requirements.txt .</CodeCommand>
            <h2 className="title-h2" id="Running_development_server"> 10 - تشغيل خادم التطوير .</h2> 
            <CodeCommand>cd project_name</CodeCommand>
            <CodeCommand>python manage.py runserver</CodeCommand>
        </article>
    </>
    )
}
