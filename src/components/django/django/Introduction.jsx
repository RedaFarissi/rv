import images from "../imagesDjango";
import { CodeCommand } from "../../path";
import { useNavigate } from 'react-router-dom';
import { useEffect , useRef} from "react";

export default function Introduction(props){
   const refintro = useRef();
   useEffect(()=>{
      
      
   },[])


   return(
      <article id="Introduction">
        <h2 className="title-h2 mt-5"> مقدمة حول Django</h2>
        <h3 className="title-h3" id="What_is_Django">1 - ما هو Djnago . </h3>
        <p className="style_divv">
           ديجانغو هو إطار عالي المستوى ومفتوح المصدر لبناء تطبيقات الويب الديناميكية باستخدام لغة البرمجة python .يتبع إطار العمل نمط البرمجة المعماري Model-View-Controller (MVC) ويشجع على التطوير السريع والتصميم النظيف والعملي.<br/>
           تم تطوير Django أصلاً من قبل Django Software Foundation ، وهدفه الرئيسي هو تسهيل عمل المطورين في بناء تطبيقات الويب من خلال توفير أساس قوي وقابل لإعادة الاستخدام.<br/><br/>
           من الميزات والمفاهيم الرئيسية لـ Django:<br/>
           <ul>
              <li className="mb-3"><span className="text-success">Object-Relational Mapping (ORM)</span> : يوفر Django نظام تطبيق الربط الجغرافي القوي الذي يتيح للمطورين التفاعل مع قواعد البيانات باستخدام رموز Python بدلاً من استعلامات SQL. وهذا يبسط المهام المتعلقة بقواعد البيانات ويعزز قراءة الشيفرة.</li>
              <li className="mb-3"><span className="text-success">Admin Interface</span>(واجهة المسؤول) : يقدم Django واجهة مسؤول تلقائية لإدارة سجلات قواعد البيانات. يمكن للمطورين بسهولة إنشاء وقراءة وتحديث وحذف السجلات من خلال لوحة مسؤول قابلة للتخصيص والقابلة للتوسيع.</li>
              <li className="mb-3"><span className="text-success">URL Routing</span> (توجيه العناوين) (URL): يستخدم Django نظام توجيه URL نظيفًا ومرنًا ، مما يجعل من السهل ربط عناوين الويب بالعروض. وهذا يسمح بإنشاء هياكل URL ودية لمحركات البحث وسهولة الصيانة.</li>
              <li className="mb-3"><span className="text-success">Template Engine</span> : يأتي Django مع محرك قوالب مدمج يتيح للمطورين إنشاء صفحات HTML ديناميكية عن طريق تضمين رموز Python داخل قوالب HTML. وهذا يعزز فصل الشيفرة والعرض.</li>
              <li className="mb-3"><span className="text-success">Security Features</span> (ميزات الأمان) : يضم Django عدة ميزات أمان ، مثل الحماية من حقن SQL ، والبرمجة النصية عبر المواقع (XSS) ، وتزوير الطلبات عبر المواقع (CSRF) ، وغيرها. تساعد هذه الميزات المطورين في بناء تطبيقات الويب بشكل آمن افتراضيًا.</li>
              <li className="mb-3"><span className="text-success">Middleware</span> (الوسيط) : يتيح نظام الوسيط في Django للمطورين معالجة الطلبات والاستجابات على مستوى عالمي قبل أن يصلوا إلى العرض أو بعدما يغادروا العرض. وهذا يتيح تنفيذ مزايا مختلفة ، مثل المصادقة وتسجيل الدخول والتخزين المؤقت.   </li>
           </ul>
           بشكل عام، Django هو إطار قوي ومتعدد الاستخدامات حاز على شهرة واسعة بسبب بساطته ومرونته وقابليته للتوسيع. إنه مناسب لمشاريع مختلفة من التطبيقات الصغيرة إلى المواقع الكبيرة والمعقدة
        </p>
        <h3 className="title-h3" id="What_you_need_to_get_started"> 2 - django  ما تحتاجه لاستخدام. </h3>
        <p className="style_divv">
           <ul>
              <li><span className="text-success"><bdi>فهم جيد لل Python :</bdi></span> Django هو إطار عمل مكتوب بلغة Python، والفهم الجيد لـ Python سيسهل عليك الاندماج مع مكونات Django وفهم كيفية تحقيق الأمور في سياق تطوير الويب.</li>
              <li><span className="text-success"><bdi>تثبيت Python :</bdi></span> Django يعتمد على لغة البرمجة Python. قم بتثبيت Python من الموقع الرسمي: <a href="https://www.python.org/downloads/" target="_blanck" rel="noreferrer"> https://www.python.org/downloads/ </a> </li>
           </ul>
        </p>
        <h3 className="title-h3" id="Verify_required_installations"> 3 - التحقق من التثبيتات المطلوبة</h3>
        <h5 className="title-h5"> 1 - تحقق من إصدار Python المثبت لديك. </h5>
        <CodeCommand>python --version</CodeCommand>
        <h5 className="title-h5">2 - تحقق من تثبيت pip </h5>
        <CodeCommand>pip --version</CodeCommand>
        <h5 className="title-h5"> 3 - تحديث Python  .</h5> 
        <CodeCommand>python -m pip install --upgrade pip</CodeCommand>
        <h3 className="title-h3" id="Struct_Django"> 4 - هيكل djnago . </h3>
        <img src={images.django67} className="img"/>
        <img src={images.django25} className="img"/>
      </article>
    )
}