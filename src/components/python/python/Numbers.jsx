import { CodeHighlighter } from "../../path";

export default function Numbers(){
    return(
    <>
    <h1 className="heading-style heading-style-python-color"> Python Numbers</h1>    
    <article className="mt-5">
        <p className="style_divv">
            في <b>Python</b>، يتم تمثيل الأرقام باستخدام عدة أنواع من البيانات، بما في ذلك الأعداد الصحيحة والأعداد العائمة والأعداد المركبة. فيما يلي نظرة عامة على الأنواع الرئيسية للبيانات الرقمية في <b>Python</b> :
        </p>
        <h2 className="title-h2"> 1 - الأعداد الصحيحة (int) . </h2>
        <p className="style_divv">
            الأعداد الصحيحة هي الأعداد الكاملة بدون أي نقطة عشرية.
            <CodeHighlighter  code={`x = 5
y = -10
z = 0`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
        </p>
        <h2 className="title-h2"> 2 - الأعداد العائمة (float) . </h2>
        <p className="style_divv">
            تمثل الأعداد العائمة الأعداد التي تحتوي على نقط عشرية.
            <CodeHighlighter  code={`a = 3.14
b = -2.5`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
        </p>
        <h2 className="title-h2"> 3 - الأعداد المركبة (complex) . </h2>
        <p className="style_divv">
            الأعداد المركبة في <b>Python</b> هي نوع من أنواع البيانات تمثل الأعداد التي تتألف من جزء حقيقي وجزء خيالي. يُمثل الجزء الخيالي بحرف "j" في <b>Python</b>. صيغة العدد المركب تكون على النحو التالي: a + bj، حيث a هو الجزء الحقيقي و b هو الجزء الخيالي.
            <CodeHighlighter  code={`complex_number = complex(5)
print(complex_number)   # Output: (5+0j)`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            والهندسة، خاصةً في حالات تتعامل مع مفهوم الأعداد الخيالية. إليك بعض السياقات التي قد تكون فيها الأعداد المركبة مفيدة:<br/><br/>
            <ul>
                <li> <b className="text-success">الرياضيات التطبيقية :</b> تستخدم الأعداد المركبة في العديد من التطبيقات في الفيزياء والهندسة، حيث يظهر الجزء الخيالي في تمثيل ظواهر مثل الموجات الكهرومغناطيسية والتحولات الرياضية المعقدة.</li>
                <li> <b className="text-success">تحليل الدوال :</b> في بعض الدوال الرياضية، يتطلب الحساب استخدام الأعداد المركبة. على سبيل المثال، تحليل الدوال ذات التكاملات المعقدة يشمل استخدام الأعداد المركبة.</li>
                <li> <b className="text-success">التحليل الهندسي:</b> في هندسة المستويات العليا والتحليل الهندسي، يمكن استخدام الأعداد المركبة لتمثيل النقاط في الفضاء.</li>
                <li> <b className="text-success">علوم الحاسوب :</b>  في بعض الحالات، يمكن استخدام الأعداد المركبة في مجالات مثل معالجة الإشارات ورسوم الكمبيوتر.</li>
                <li> <b className="text-success">التشفير وعلم الحوسبة الكمومية:</b> في مجالات متقدمة، يلعب الأعداد المركبة دورًا هامًا في بعض تقنيات التشفير وفي مجال الحوسبة الكمومية.</li>
            </ul>
        </p>
    </article>
    </>
    )
}