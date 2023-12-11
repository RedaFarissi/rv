import codes from "../../../assests/codes/django/django"
import images from "../imagesDjango";
import { CodeCommand , CodeHighlighter , Result } from "../../path";

export default function AboutAdmin(){
    return(
        <article className="mt-5"  id="about_admin">
            <h1 className="heading-style heading-style-django-color"> Django admin</h1> 
            <h3 className="title-h2" id="list_display">1 - list_display </h3>
            <p className="style_divv">
               يمكنك استخدام list_editable لرؤية الأعمدة التي تريدها في صفحة المسؤول. 
            </p>
            <CodeHighlighter code={codes[6].list_display[0]} file_name="admin.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <img src={images.django174} className="img"/>
            <h3 className="title-h2" id="prepopulated_fields"> 2 - prepopulated_fields </h3>
            <p className="style_divv"> 
               يمكنك استخدام السمة prepopulated_fields في ملف المسؤول لتحديد الحقول حيث يتم تعيين القيمة تلقائيًا باستخدام قيمة الحقول الأخرى.
            </p> 
            <CodeHighlighter code={codes[6].prepopulated_fields[0]} file_name="admin.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <img src={images.django172} className="img"/>
            <h3 className="title-h2" id="list_editable"> 3 - list_editable  </h3>
            <p className="style_divv"> 
               نستخدم list_editable مع الأعمدة التي نريد تحديثها من صفحة المسؤول.<br/><br/>
               يجب أيضًا إدراج أي حقل في list_editable في سمة list_display، حيث يمكن تحرير الحقول المعروضة فقط.
            </p>
            <CodeHighlighter code={codes[6].list_editable[0]} file_name="admin.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <img src={images.django176} className="img"/>

            <h3 className="title-h2" id="inlines"> 4 - inlines  </h3>
            <p className="style_divv">
               في Django، يتم استخدام Inlines في واجهة الإدارة للتعامل مع النماذج ذات الصلة وتوفير طريقة لإدارتها في سياق النموذج الأصلي. تسمح لك السطور المضمّنة بعرض مثيلات النموذج ذات الصلة وإنشائها وتحديثها وحذفها مباشرةً من واجهة الإدارة الخاصة بالنموذج الأصلي.<br/><br/>
               يعد مفهوم السطور مفيدًا بشكل خاص عند التعامل مع علاقات واحد إلى متعدد أو متعدد إلى متعدد بين النماذج. فهو يساعد على تبسيط إدارة البيانات ذات الصلة من خلال تقديم واجهة ملائمة لتحرير الكائنات ذات الصلة وربطها
            </p>
            <CodeHighlighter code={codes[6].inlines[0]} file_name="models.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[6].inlines[1]} file_name="admin.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <img src={images.django188} className="img"/> 
            <p className="fs-5"> عند النقر فوق حفظ المؤلف الذي تم إنشاؤه باستخدام كتاب ذي صلة</p>
            <img src={images.django189} className="img"/> 
        </article>
    )
}