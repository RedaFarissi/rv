import images from "../imagesLaravel";
import { CodeCommand } from "../../path";

export default function Introduction(props){
   return (
<>
   <h1 className="heading-style mb-5">Laravel Introduction </h1>
   <article className="mt-5" id="what_is_laravel">
        <h2 className='title-h2' > 1 - ما هو laravel  </h2>
        <p className="style_divv">
            لارافيل هو إطار عمل <b>PHP</b> مفتوح المصدر لتطوير تطبيقات الويب. تأتي مع <b>ORM</b> يُسمى <b>Eloquent</b> ومحرك <b>Blade</b> لتصميم الواجهات. يوفر أداة <b>Artisan</b> لإدارة المهام والتكوين. يتبع نمط <b>MVC</b> ويشمل <b>Middleware</b> لمرشحات <b>HTTP</b>. يوفر توجيهًا بسيطًا وحقن إعتماد لإدارة التبعيات. يشمل نظام ترتيب قواعد البيانات وزرع البيانات. لديه بيئة نشطة ومجتمع وثائق جيدة. اشتهر ببنية أنيقة وميزات مطور ودية، مما يجعله خيارًا شائعًا لبناء تطبيقات الويب الحديثة.<br/><br/>
            <b>MVC</b> ، أو <b>Model-View-Controller</b>، هو نمط هندسة برمجيات يستخدم عادة في تطوير الويب. يقسم التطبيق إلى ثلاث مكونات مترابطة:<br/>
               <ul>
                  <li><b className='text-success'> النموذج (Model) :</b> يُمثل البيانات والمنطق التجاري للتطبيق. يدير البيانات، ويستجيب للاستعلامات، ويعالج التعليمات من المُتحكم.</li>
                  <li><b className='text-success'> العرض (View) :</b> يقدم البيانات للمستخدم ويتعامل مع تفاعلات واجهة المستخدم. يستقبل الإدخالات، ويعرض النتائج، ويُرسل تفاعلات المستخدم إلى المتحكم.</li>
                  <li><b className='text-success'> المتحكم (Controller) :</b> يدير تدفق البيانات بين النموذج والعرض. يفسر إدخالات المستخدم من العرض، ويُحدث النموذج وفقًا لذلك، ويضمن أن العرض يعكس التغييرات.</li>
               </ul>
            يعزز نمط <b>MVC</b> فصل الاهتمامات، مما يجعل قاعدة الشيفرة أكثر تنظيمًا وسهولة في الصيانة. ويسمح بالتعاون بشكل أسهل بين المطورين العاملين على جوانب مختلفة من التطبيق.
        </p>
   </article>
   
   <article id="what_we_need_to_use_laravel">
        <h2 className='title-h2'> 2 - ما نحتاجه لاستخدام laravel  </h2>
               <h3 className="title-h3">1 - XAMPP أو MAMP:</h3>
               <p className='style_divv'>
                      نحتاج إلى بيئة تشغيل محلية لتطوير تطبيقات <b>Laravel</b> باستخدام <b>PHP</b>. هناك اثنان من أشهر البيئات هما <b>XAMPP</b> و <b>MAMP</b>، ويمكنك اختيار أي منهما حسب نظام التشغيل الخاص بك.<br/><br />
                     <ul>
                        <li>قم بتثبيت <b>XAMPP</b> أو <b>MAMP</b> على جهاز الكمبيوتر الخاص بك. هذا سيوفر لك خوادم <b>Apache</b> و <b>MySQL</b> و <b>PHP</b> جاهزة للاستخدام.</li>
                        <li>قم بتشغيل الخوادم لبدء تشغيل بيئتك المحلية.</li>
                     </ul>
               </p>
               <h3 className="title-h3">2 - Composer:</h3>
               <p className='style_divv'>
                  <ul>
                     <li>تحقق من توافر <a dir="ltr" href="https://getcomposer.org/download/" target="blanck">Composer</a> على نظامك عبر الأمر  في واجهة الأوامر. إذا لم يكن مثبتًا، يمكنك تنزيله وتثبيته من الموقع الرسمي للمكتبة. </li>
                  </ul>
                  <CodeCommand>composer</CodeCommand>
               </p>
               <h3 className="title-h3"> 3 - Node.js:</h3>
               <p className='style_divv'>
                  <ul>
                     <li>لتجميع ملفات <b>CSS</b> و <b>JavaScript</b>، ستحتاج إلى تثبيت <a href="https://nodejs.org/en/download" target="blanck">Node.js</a>.  يمكنك تحقق من توافره باستخدام الأمر  ، أو يمكنك تنزيله وتثبيته من الموقع الرسمي للمكتبة. (إن لم يتواجد)</li>
                  </ul>
                  <CodeCommand>node -v</CodeCommand>
               </p>
               <h3 className="title-h3"> 4 - التحقق من المسار و إضافته إن لم يتواجد</h3>
               <p className='style_divv'>
                  <ul>
                     <li>اضغط على مفتاح <kbd>Windows</kbd> + <kbd>R</kbd> لفتح مربع الحوار . (dialog)</li>
                     <li>اكتب <b>sysdm.cpl</b> ثم اضغط على Enter.</li>
                     <li>انقر فوق <b>Advanced</b> </li>
                     <li>انقر فوق  <b>Environment Variables</b></li>
                     <li>اذهب الى  <b>path</b> داخل <b>User variables</b></li>
                     <li> أضف المسار إذا لم يكن موجودا <b>C:\xampp\php</b></li>
                     <li> اضغط  <b>OK</b></li>
                  </ul>
               </p>
               <div className='row mt-2'>
                     <img src={images.laravel0_env} alt="laravel path"  className="col-md-4 mb-3"/>
                     <img src={images.laravel0_env2} alt="laravel path" className="col-md-4 mb-3"/>
                     <img src={images.laravel0_env3} alt="laravel path" className="col-md-4 mb-3"/>
               </div>
   </article>
</>
)
}