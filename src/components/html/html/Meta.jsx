import images from "../imagesHtml";
import { CodeHighlighter ,  Result} from "../../path";

export default function Italic(){
    const code1 = `<meta charset="UTF-8">`
    const code2 = `<meta name="keywords" content="Pure words"/>`
    const code3 = `<meta name="description" content="Web page description"/>`
    const code4 = `<meta name="author" content="Name of page author"/>`
    const code5 = `<meta name="viewport" content="Name of page author"/>`
    const code6 = `<meta property="og:title" content="Your page title"/>`
    const code7 = `<meta property="og:discription" content="Image description"/>`
    const code8 = `<meta property="og:image" content="Image name.Type"/>`
    const code9 = `<meta property="og:width" content="Select image width"/>`
    const code10 = `<meta property="og:height" content="Determine the length of the image"/>`

    
    return(
<section className="section-conetent">
<h1 className="heading-style heading-style-html-color">HTML meta</h1>
<article>
    <h2 className="title-h2">1. تعريف الوسم meta </h2>
    <div className="style_divv">
        يعرف الوسم <kbd>&lt;meta&gt;</kbd> بيانات التعريف حول مستند HTML. بيانات التعريف هي بيانات (معلومات) حول البيانات .<br/>
        الوسم <kbd>&lt;meta&gt;</kbd> دائما يكون داخل الوسم <kbd>&lt;head&gt;</kbd> ، وعادة ما تستخدم لتحديد مجموعة الأحرف ووصف الصفحة والكلمات الرئيسية ومؤلف المستند وإعدادات منفذ العرض.
        لن يتم عرض بيانات التعريف على الصفحة، ولكن يمكن تحليل الجهاز.<br/>
        يتم استخدام بيانات التعريف من قبل المتصفحات (كيفية عرض المحتوى أو إعادة تحميل الصفحة) ومحركات البحث (الكلمات الرئيسية) وخدمات الويب الأخرى. وهووسم فردي يحتوي على السمات انضر الأمتلة التوضيحية أسفله .
    </div>
</article>
<article>
    <h2 className="title-h2">2. السمة charset </h2>
    <div className="style_divv">
        السمة <b>charset</b> تحدد ترميز الأحرف لمستند <b>HTML</b>.
        تشجع مواصفات <b>HTML5</b> مطوري الويب على استخدام مجموعة أحرف <b>UTF-8</b> ، والتي تغطي جميع الشخصيات والرموز تقريبا في العالم.<br/>
        السمة <b>charset</b> هي  سمة مهمة يجب إستخدامها دائما . <br/>
        <CodeHighlighter  code={code1} language="jsx"  addclassName="mt-3 mb-3" copie={true}/>
    </div>
    <div className="sum_exemple_style">
    <h4 className="green"> طريقة الإستعمال  </h4>
    <img src={images.html42_meta} alt="meta code" className="img"/>
    </div>
</article>
<article>
    <h2 className="title-h2">3. السمة name </h2>
    <div className="style_divv">
    السمة <b>name</b> تحديد اسم بيانات التعريف.<br/>
    تحدد سمة <b>name</b> اسما لمعلومات / قيمة لأسمة <b>content</b> .
    </div>
    <h5>1.  الكلمات الرئيسية لمحركات البحث </h5>
    <div className="style_divv">
        لتحديد الكلمات الرئيسية  لمحركات البحث يجب إعطاء السمة  <b>name</b>  القيمة <b>keywords</b> تم داخل السمة <b>content</b> قم بكتابة جميع الكلمات التي قد تساعد موقعك مع محركات البحت .
        <CodeHighlighter  code={code2} language="jsx"  addclassName="mt-3 mb-3" copie={true}/>
    </div>
    <div className="sum_exemple_style">
    <h4 className="green"> طريقة الإستعمال  </h4>
    <img src={images.html42_meta2} alt="meta" className="img"/>
    </div>
    <h5>2.  وصف صفحة الويب الخاصة  </h5>
    <div className="style_divv">
        لتحديد وصف صفحة الويب الخاصة بك يجب إعطاء السمة  <b>name</b>  القيمة <b>description</b> تم داخل السمة <b>content</b> قم بكتابة تعريف وصف صفحة الويب الخاصة بك .
        <CodeHighlighter  code={code3} language="jsx"  addclassName="mt-3 mb-3" copie={true}/>
    </div>
    <div className="sum_exemple_style">
    <h4 className="green"> طريقة الإستعمال  </h4>
    <img src={images.html42_meta3}  alt="meta" className="img"/>
    </div>
    <h5>3.  مؤلف صفحة </h5>
    <div className="style_divv">
        لتحديد مؤلف صفحة يجب إعطاء السمة  <b>name</b>  القيمة <b>author</b> تم داخل السمة <b>content</b> قم بكتابة إسمك   .
        <CodeHighlighter  code={code4} language="jsx"  addclassName="mt-3 mb-3" copie={true}/>
    </div>
    <div className="sum_exemple_style">
    <h4 className="green"> طريقة الإستعمال  </h4>
    <img src={images.html42_meta4} alt="meta" className="img"/>
    </div>
    <h5>4.  موقع متجاوب مع جميع الأجهزة </h5>
    <div className="style_divv">
        لجعل موقعك متجاوب مع جميع الأجهزة يجب إعطاء السمة  <b>name</b> القيمة <b>viewport</b> تم داخل السمة <b>content</b> قم بكتابة <b>width=device-width, initial-scale=1.0</b>   .
        <CodeHighlighter  code={code5} language="jsx"  addclassName="mt-3 mb-3" copie={true}/>
    </div>
    <div className="sum_exemple_style">
    <h4 className="green"> طريقة الإستعمال  </h4>
    <img src={images.html42_meta5} alt="meta" className="img"/>
    </div>
    <h5>4.   تحديد كيف يتم عرض موقعك في فيس بوك </h5>
    تستخدم الخاصية <b>meta</b> مع السمة <b><bdi>property="og:title"</bdi></b> لتحديد عنوان لموقعك عند مشاركته على فيس بوك . يتم تحدي العناون داخل الخاصية <b>content</b> 
    <CodeHighlighter  code={code6} language="jsx"  addclassName="mt-3 mb-3" copie={true}/>
    تستخدم الخاصية <b>meta</b> مع السمة <b><bdi>property="og:discription"</bdi></b> لتحديد وصف لموقعك عند مشاركته على فيس بوك . يتم تحديد الوصف داخل الخاصية <b>content</b> 
    <CodeHighlighter  code={code7} language="jsx"  addclassName="mt-3 mb-3" copie={true}/>
    تستخدم الخاصية <b>meta</b> مع السمة <b><bdi>property="og:image"</bdi></b> لتحديد صورة لموقعك عند مشاركته على فيس بوك . يتم تحديد مسار الصورة تم  نوعها داخل الخاصية <b>content</b> 
    <CodeHighlighter  code={code8} language="jsx"  addclassName="mt-3 mb-3" copie={true}/>
    تستخدم الخاصية <b>meta</b> مع السمة <b><bdi>property="og:width"</bdi></b> لتحديد عرض الصورة الذي قمة بتحديدها لموقعك عند مشاركته على فيس بوك . يتم تحديد عرض داخل الخاصية <b>content</b> 
    <CodeHighlighter  code={code9} language="jsx"  addclassName="mt-3 mb-3" copie={true}/>
    تستخدم الخاصية <b>meta</b> مع السمة <b><bdi>property="og:height"</bdi></b> لتحديد طول الصورة الذي قمة بتحديدها لموقعك عند مشاركته على فيس بوك . يتم تحديد الطول داخل الخاصية <b>content</b> 
    <CodeHighlighter  code={code10} language="jsx"  addclassName="mt-3 mb-3" copie={true}/>
</article>
</section>
)
}