import { useDispatch } from 'react-redux';
import { CodeHighlighter , CodeCommand ,  Result} from "../../path";
import images from "../imagesTypeScript"


export default function Introduction(props){
return(
<section>
    <h1 className="heading-style">TypeScript Introduction</h1>
    <article className="mt-5">        
        <h2 className="title-h2">1 - ما هو TypeScript ؟</h2>
        <p className="style_divv">
            <b>TypeScript</b> هو لغة برمجة مفتوحة المصدر طورتها مايكروسوفت، تعتبر امتدادًا للغة <b>JavaScript</b> بإضافة ميزة الأنواع الثابتة (Static Typing) وميزات أخرى. <br /><br />
            <b className="text-success">الفرق الرئيسي بين <b>TypeScript</b> و <b>JavaScript</b>:</b><br />
            <ul>
                <li> <b>JavaScript</b>: لغة ديناميكية (لا تحدد نوع المتغيرات مسبقاً). </li>
                <li> <b>TypeScript</b>: تضيف التحقق من الأنواع أثناء التطوير (Compile-time) التشغيل.</li>
            </ul>
           <br /> 
           <b className="text-success">المميزات الرئيسية:</b><br />
            <ul>
                <li> الأنواع الثابتة: تحديد أنواع البيانات (string, number, boolean, etc.)</li>
                <li>            اكتشاف الأخطاء مبكراً: يكتشف الأخطاء أثناء الكتابة وليس التشغيل.</li>
                <li>            ميزات ES6+: يدعم أحدث ميزات <b>JavaScript</b>.</li>
                <li>            التوافق الكامل: أي كود <b>JavaScript</b> صالح في <b>TypeScript</b>.</li>
                <li> أدوات متقدمة: دعم أفضل في IDEs مثل VS Code (الإكمال التلقائي، التنقل، إلخ).</li>
            </ul>
           
        </p>
    </article>
    <article>
        <h2 className="title-h2">2 - كيفية استخدام TypeScript مع مشروع HTML </h2>
        <CodeCommand>npm install typescript --save-dev</CodeCommand>
        <div className="mital">متال :  </div>
        <ul><li>لقد قمت بإنشاء مجلد باسم app/ على سطح المكتب</li></ul>
        <CodeHighlighter code={`C:\\Users\\Dell\\Desktop\\app>npm install typescript --save-dev

added 1 package in 9s`} language="html" addClass="mt-3 mb-3" copie={false}/>
        <ul><li>في مجلد التطبيق ستجد مجلد node_modules والملفات package.json وpackage-lock.json</li></ul>
    </article>
    <article>
        <h2 className="title-h2">3 - احصل على إصدار TypeScript المستخدم في مشروعك</h2>
        <p className="style_divv">
            للحصول على إصدار TypeScript المستخدم في مشروعك، استخدم
            <CodeCommand>npx tsc</CodeCommand>
        </p>
    </article>
    <article>
        <h2 className="title-h2">4 - تكوين المترجم <small>(Configuring the compiler)</small> </h2>
        <p className="style_divv">
          يمكن تهيئة المُجمِّع باستخدام ملف    <b>tsconfig.json</b> <br />
            يمكنك جعل <b>TypeScript</b> يُنشئ ملف <b>tsconfig.json</b> بالإعدادات المُوصى بها باستخدام:
            <CodeCommand>npx tsc --init</CodeCommand>
            سيؤدي هذا إلى إنشاء ملف tsconfig.json
        </p>
        <div className="mital">متال  :  </div>
        <CodeHighlighter code={`C:\\Users\\Dell\\Desktop\\app>npx tsc --init

Created a new tsconfig.json

You can learn more at https://aka.ms/tsconfig`} language="html" addClass="mt-3 mb-3" copie={false}/>
    </article>
    <article>
        <h2 className="title-h2">5 -  إنشاء ملف hello.ts مع الامتداد <bdi>.ts</bdi></h2>
        <div className="mital">متال  :  </div>
        <ul><li>برنامج TypeScript بسيط</li></ul>

        <CodeHighlighter code={`function greet(name: string): string {
    return \`Hello, \${name}!\`;
}

const message: string = greet("World");
console.log(message);`} language="typescript" file_name="C:\ Users \ Dell \ Desktop \ app \ hello.ts"  addClass="mt-3 mb-3" copie={true}/>
        <ul><li>قم بتجميع كود TypeScript الخاص بك إلى javascript</li></ul>
        <CodeCommand>npx tsc hello.ts</CodeCommand>
        <ul><li>سيمنحك هذا اسم الملف hello ولكن مع الامتداد js</li></ul>
        <CodeHighlighter code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <script src="hello.js"></script>
</body>
</html>`} language="html" file_name="C:\ Users \ Dell \ Desktop \ app \ index.ts"  addClass="mt-3 mb-3" copie={true}/>
        <ul><li>لاحظ أننا نستخدم hello.js في ملف index</li></ul>
    </article>
   
</section>  
)
}