import images from "../imagesDjango";
import { CodeCommand } from "../../path";

export default function Introduction(props){

   return(
      <article id="Introduction">
        <h1 className="heading-style heading-style-django-color"> Django Introduction</h1> 
        <h2 className="title-h2 mt-5" id="What_is_Django">1 - ما هو Djnago . </h2>
        <p className="style_divv">
           ديجانغو هو إطار عالي المستوى ومفتوح المصدر لبناء تطبيقات الويب الديناميكية باستخدام لغة البرمجة <b>python</b> .يتبع إطار العمل نمط البرمجة المعماري <bdi><b>Model-View-Controller (MVC)</b></bdi> ويشجع على التطوير السريع والتصميم النظيف والعملي.<br/>
           تم تطوير <b>Django</b> أصلاً من قبل <b>Django Software Foundation</b> ، وهدفه الرئيسي هو تسهيل عمل المطورين في بناء تطبيقات الويب من خلال توفير أساس قوي وقابل لإعادة الاستخدام.<br/><br/>
           من الميزات والمفاهيم الرئيسية لـ <b>Django</b>:<br/>
           <ul>
              <li className="mb-3"><b className="text-success">Object-Relational Mapping (ORM) :</b>  يوفر <b>Django</b> نظام تطبيق الربط الجغرافي القوي الذي يتيح للمطورين التفاعل مع قواعد البيانات باستخدام رموز <b>Python</b> بدلاً من استعلامات <b>SQL</b>. وهذا يبسط المهام المتعلقة بقواعد البيانات ويعزز قراءة الشيفرة.</li>
              <li className="mb-3"><b className="text-success">Admin Interface (واجهة المسؤول) :</b> يقدم <b>Django</b> واجهة مسؤول تلقائية لإدارة سجلات قواعد البيانات. يمكن للمطورين بسهولة إنشاء وقراءة وتحديث وحذف السجلات من خلال لوحة مسؤول قابلة للتخصيص والقابلة للتوسيع.</li>
              <li className="mb-3"><b className="text-success">URL Routing (توجيه العناوين) (URL):</b>  يستخدم <b>Django</b> نظام توجيه <b>URL</b> نظيفًا ومرنًا ، مما يجعل من السهل ربط عناوين الويب بالعروض. وهذا يسمح بإنشاء هياكل <b>URL</b> ودية لمحركات البحث وسهولة الصيانة.</li>
              <li className="mb-3"><b className="text-success">Template Engine</b> : يأتي <b>Django</b> مع محرك قوالب مدمج يتيح للمطورين إنشاء صفحات <b>HTML</b> ديناميكية عن طريق تضمين رموز <b>Python</b> داخل قوالب <b>HTML</b>. وهذا يعزز فصل الشيفرة والعرض.</li>
              <li className="mb-3"><b className="text-success">Security Features (ميزات الأمان) :</b> يضم <b>Django</b> عدة ميزات أمان ، مثل الحماية من حقن SQL ، والبرمجة النصية عبر المواقع <b>(XSS)</b> ، وتزوير الطلبات عبر المواقع <b>(CSRF)</b> ، وغيرها. تساعد هذه الميزات المطورين في بناء تطبيقات الويب بشكل آمن افتراضيًا.</li>
              <li className="mb-3"><b className="text-success">Middleware  (الوسيط) :</b> يتيح نظام الوسيط في <b>Django</b> للمطورين معالجة الطلبات والاستجابات على مستوى عالمي قبل أن يصلوا إلى العرض أو بعدما يغادروا العرض. وهذا يتيح تنفيذ مزايا مختلفة ، مثل المصادقة وتسجيل الدخول والتخزين المؤقت.   </li>
           </ul>
           بشكل عام، <b>Django</b> هو إطار قوي ومتعدد الاستخدامات حاز على شهرة واسعة بسبب بساطته ومرونته وقابليته للتوسيع. إنه مناسب لمشاريع مختلفة من التطبيقات الصغيرة إلى المواقع الكبيرة والمعقدة
        </p>
        <h2 className="title-h2" id="What_you_need_to_get_started"> 2 - django  ما تحتاجه لاستخدام. </h2>
        <p className="style_divv">
           <ul>
              <li><span className="text-success"><bdi>فهم جيد لل <b>Python</b> :</bdi></span> <b>Django</b> هو إطار عمل مكتوب بلغة <b>Python</b>، والفهم الجيد لـ <b>Python</b> سيسهل عليك الاندماج مع مكونات <b>Django</b> وفهم كيفية تحقيق الأمور في سياق تطوير الويب.</li>
              <li><span className="text-success"><bdi>تثبيت <b>Python</b> :</bdi></span> <b>Django</b> يعتمد على لغة البرمجة <b>Python</b>. قم بتثبيت <b>Python</b> من الموقع الرسمي: <a href="https://www.python.org/downloads/" className="text-success" target="_blanck" rel="noreferrer"> https://www.python.org/downloads/ </a> </li>
           </ul>
        </p>
        <h2 className="title-h2" id="Verify_required_installations"> 3 - التحقق من التثبيتات المطلوبة</h2>
        <h3 className="title-h3"> 1 - تحقق من إصدار Python المثبت لديك. </h3>
        <CodeCommand>python --version</CodeCommand>
        <h3 className="title-h3">2 - تحقق من تثبيت pip </h3>
        <CodeCommand>pip --version</CodeCommand>
        <h3 className="title-h3"> 3 - تحديث Python  .</h3> 
        <CodeCommand>python -m pip install --upgrade pip</CodeCommand>
        <h2 className="title-h2" id="Struct_Django"> 4 - هيكل djnago . </h2>
        <img src={images.django67} className="img"/>
        <img src={images.django25} className="img"/>
      </article>
   )
}