import { CodeCommand , CodeHighlighter} from "../../path";

export default function Serializers(props){

   return(
   <>
      <h1 className="heading-style heading-style-python-color">Django Rest Framework Serializers </h1>
      <article id="serializers">
            <h2 className="title-h2 mt-5">1 - serializers </h2>
            <h3 className="title-h3"> 1 -  ما هو serializer </h3>
            <p className="style_divv">
                في <b>Django</b>، يعد المُسلسل <b>(serializer)</b> مكونًا يحول أنواع البيانات المعقدة مثل <b>QuerySets</b> ومثيلات النموذج إلى أنواع بيانات <b>Python</b> الأصلية التي يمكن تقديمها بسهولة إلى <b>JSON</b> أو <b>XML</b> أو أنواع محتوى أخرى.<br/><br/>
                تعد <b>serializers</b> جزءًا حيويًا من إطار عمل الويب الخاص بـ <b>Django</b>، لأنها تتيح للمطورين إنشاء واجهات برمجة التطبيقات (APIs) التي يمكنها التواصل مع التطبيقات أو الخدمات الأخرى بسهولة. يأتي <b>Django</b> مزودًا بوحدة <b>serializer</b> مدمجة تسمى <bdi><b>django.core.serializers</b></bdi>، ولكن يمكن للمطورين أيضًا إنشاء مُسلسلات مخصصة باستخدام <b>REST Framework</b> من <b>Django</b>.<br/><br/>
                تتضمن بعض الميزات والفوائد الرئيسية للمتسلسلات في <b>Django</b> ما يلي :
                <ul>
                    <li>تبسيط عملية تحويل أنواع البيانات المعقدة إلى أنواع بيانات <b>Python</b> أصلية أبسط يمكن تقديمها إلى تنسيقات مختلفة.</li>
                    <li>توفير طريقة سهلة للتحقق من صحة البيانات الواردة من الطلبات وإلغاء تسلسلها.</li>
                    <li>تمكين المطورين من تخصيص كيفية تسلسل البيانات وإلغاء تسلسلها باستخدام الحقول والأدوات وأدوات التحقق من الصحة.</li>
                    <li>دعم تسلسل الكائنات المتداخلة والعلاقات المعقدة بين الكائنات.</li>
                    <li>السماح بإنشاء واجهات برمجة التطبيقات التي يمكن أن تستهلكها التطبيقات أو الخدمات الأخرى بسهولة.</li>
                </ul>
            </p>
            <br id="Serializers_are_not_specific_for_models"/>
            <h3 className="title-h3"> 2 - لا ترتبط المُسلسلات (Serializers) بأي  محدد (model)</h3>
            <p className="style_divv">
                لا ترتبط <b>Serializers</b> بأي نموذج محدد، ويمكن استخدامها <b>serialize</b> و <b>deserialize</b> مع أي بيانات تريد إرسالها عبر واجهة برمجة التطبيقات.<br/>
                في بعض الأحيان قد نرغب في إجراء تسلسل للبيانات في ملف <b>JSON</b> أو أي نوع آخر دون دفعها فعليًا إلى قاعدة بيانات أو إجراء أي تعديلات على البيانات.
            </p>
            <div className="mital"> متال : </div>
            <ul><li>لنفترض أن لدينا <b>Python dictionary</b> يمثل بعض البيانات التي نريد إجراء تسلسل لها <b>(serialize)</b></li></ul>
            <CodeHighlighter  code={``} language="python" file_name="" addclassName="mt-3 mb-3" copie={true}/>   

      </article>
   </>
   )
}