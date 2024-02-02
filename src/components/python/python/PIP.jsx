import { CodeHighlighter , CodeCommand} from "../../path";

export default function PIP(){
    return(
    <>
        <h1 className="heading-style heading-style-python-color"> Python PIP</h1>        
        <article className="mt-5">
            <p className="style_divv">
                <b>PIP</b>، وهو اختصار لـ <b>"Pip Installs Packages"</b>، هو أداة تثبيت الحزم لـ <b>Python</b>. إنها أداة تساعدك في إدارة وتثبيت مكتبات وحزم <b>Python</b> التي لا تشملها مكتبة <b>Python</b> القياسية.
            </p>
            <h2 className="title-h2">1 - تثبيت حزمة </h2>
            <p className="style_divv">
                هذا الأمر يقوم بتثبيت الحزمة المحددة من <b>Python</b>.
                <CodeCommand>pip install package_name</CodeCommand>
            </p>
            <h2 className="title-h2">2 - تثبيت إصدار محدد  </h2>
            <p className="style_divv">
                يمكنك تثبيت إصدار معين من حزمة ما عن طريق تحديد رقم الإصدار.
                <CodeCommand>pip install package_name==version_number</CodeCommand>
            </p>
            <h2 className="title-h2">3 - ترقية حزمة </h2>
            <p className="style_divv">
                يقوم هذا الأمر بترقية حزمة مثبتة بالفعل إلى أحدث إصدار.
                <CodeCommand>pip install --upgrade package_name</CodeCommand>
            </p>
            <h2 className="title-h2">4 - إلغاء تثبيت حزمة </h2>
            <p className="style_divv">
                يقوم هذا بإزالة حزمة مثبتة مسبقًا من النظام.
                <CodeCommand>pip uninstall package_name</CodeCommand>
            </p>
            <h2 className="title-h2">5 - عرض الحزم المثبتة  </h2>
            <p className="style_divv">
                يعرض قائمة بالحزم المثبتة مع إصداراتها.
                <CodeCommand>pip list</CodeCommand>
            </p>
            <h2 className="title-h2">6 - عرض معلومات الحزمة </h2>
            <p className="style_divv">
                يوفر معلومات مفصلة حول حزمة مثبتة معينة.
                <CodeCommand>pip show package_name</CodeCommand>
            </p>
            <h2 className="title-h2">7 - البحث عن حزم </h2>
            <p className="style_divv">
                يبحث في فهرس حزم <b>Python (PyPI)</b> عن حزم تحتوي على مصطلح البحث المحدد.
                <CodeCommand>pip search search_term</CodeCommand>
            </p>
            <h2 className="title-h2">8 - ملف المتطلبات </h2>
            <p className="style_divv">
                يمكنك استخدام ملف <b>requirements.txt</b> لتحديد قائمة من الحزم وإصداراتها. ثم قم بتثبيتها جميعًا مرة واحدة
                <CodeCommand>pip install -r requirements.txt</CodeCommand>
            </p>
            <h2 className="title-h2">9 - تجميد الحزم المثبتة </h2>
            <p className="style_divv">
                يخرج قائمة بالحزم المثبتة وإصداراتها إلى ملف <b>requirements.txt</b>
                <CodeCommand>pip freeze {">"} requirements.txt</CodeCommand>
            </p>
        </article>
    </>
    )
}