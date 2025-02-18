import { CodeCommand , CodeHighlighter ,  Result , ResultAlert } from "../../path";
import { useState } from "react";

export default function ReactVite(props){

    return(
    <>
        <h1 className="heading-style mb-5">Laravel React Vite </h1>
        <h2 className='title-h2' id="why_we_use_Vite_React"> 1 - لماذا نستخدم Vite React  </h2>
        <p className="style_divv">
            Laravel React Vite يشير إلى استخدام Laravel كإطار عمل للواجهة الخلفية، وReact كإطار عمل للواجهة الأمامية، وVite كأداة بناء للواجهة الأمامية.<br /><br />
            <b className="text-success">التوضيح:</b><br /><br />
            Laravel – إطار عمل بلغة PHP لبناء تطبيقات الويب وفقًا لنمط MVC (النموذج-العرض-المتحكم). <br />
            React – مكتبة JavaScript لإنشاء واجهات مستخدم تفاعلية.<br />
            Vite – أداة بناء حديثة وسريعة لمشاريع الواجهة الأمامية، تحل محل Webpack في Laravel لتحسين أداء التطوير.<br /><br />
            <b className="text-success"> لماذا استخدام Laravel مع React و Vite؟</b><br /><br />
            تطوير أسرع: يوفر Vite تحديثًا فوريًا للوحدات (HMR) لمكونات React.<br />
            أداء أفضل: يقوم Vite بتجميع الملفات وتقديمها بكفاءة أعلى من أدوات البناء التقليدية.<br />
            تكامل سلس: يدعم Laravel أداة Vite بشكل أصلي عبر توجيهات @vite في قوالب Blade.<br />
        </p>
        <h2 className='title-h2' id="Install_laravel_project">2 - تثبيت مشروع لارافيل </h2>
        <CodeCommand>composer global require laravel/installer</CodeCommand>
        <CodeCommand>laravel new laravel-react-vite</CodeCommand>
        <div className="mital">مثال :</div>
        <div className="alert bg-dark text-light">
            <pre>
        C:\xampp\htdocs{">"}laravel new laravel-react-vite <br />
        <br />
_                               _  <br />
| |                             | |<br />
| |     __ _ _ __ __ ___   _____| |<br />
| |    / _` | '__/ _` \ \ / / _ \ |<br />
| |___| (_| | | | (_| |\ V /  __/ |<br />
|______\__,_|_|  \__,_| \_/ \___|_|<br />
<br /><br />
Would you like to install a starter kit? [No starter kit]:<br />
[none     ] No starter kit<br />
[breeze   ] Laravel Breeze<br />
[jetstream] Laravel Jetstream<br />
{">"} none<br />
<br /><br />
Which testing framework do you prefer? [Pest]:<br />
[0] Pest<br />
[1] PHPUnit<br />
{">"} 0<br /> </pre>
        </div>
        <ul>
            <li>انتقل إلى اتجاه مشروع Laravel</li>
        </ul>
        <CodeCommand>cd laravel-react-vite</CodeCommand>
        <h2 className='title-h2' id="Create_React_project_with_Vite">3 - إنشاء مشروع React باستخدام Vite</h2>
        <CodeCommand>npm create vite</CodeCommand>
        أو
        <CodeCommand>npm create @vite</CodeCommand>
        <div className="mital">مثال :</div>
        <div className="alert bg-dark text-light">
            <pre>C:\xampp\htdocs\laravel-react-vite{">"} <span className="text-danger">npm create vite</span> <br />
Need to install the following packages:<br />
create-vite@6.2.0<br />
Ok to proceed? (y) y<br />
<br />
<br />
{">"} npx<br />
{">"} create-vite<br />
<br />
√ Project name: ... <span className="text-danger">front</span> <br />
√ Select a framework: » <span className="text-danger">React</span><br />
√ Select a variant: » <span className="text-danger">JavaScript</span><br />
<br />
Scaffolding project in C:\xampp\htdocs\laravel-react-vite\front...<br />
<br />
Done. Now run:<br />
<br />
  cd front<br />
  npm install<br />
  npm run dev<br />
  <br />
  <br />
C:\xampp\htdocs\laravel-react-vite{">"}cd front<br />
<br />
C:\xampp\htdocs\laravel-react-vite\front{">"}npm install<br />
<br />
added 259 packages, and audited 260 packages in 1m<br />
<br />
108 packages are looking for funding<br />
  run `npm fund` for details<br />
  <br />
found 0 vulnerabilities<br />
<br />
<br />
  VITE v6.1.0  ready in 608 ms<br />
  <br />
  ➜  Local:   <span className="text-success">http://localhost:5173/</span><br />
  ➜  Network: use --host to expose<br />
  ➜  press h + enter to show help   <br /></pre>
        </div>
        <h2 className='title-h2' id="Switch_Port">4 -  تبديل  المنفذ </h2>
        <ul><li>انتقل إلى ملف <b>package.json</b> في المجلد <bdi>front/</bdi> وأضف <bdi>--port=3000</bdi></li></ul>
        <div className='alert bg-light text-dark ' dir="ltr"> 
            "scripts": {"{"} <br />
             &nbsp; &nbsp; &nbsp;   "dev": "vite <span className="text-danger">--port=3000</span>", <br />
             &nbsp; &nbsp; &nbsp;   .....<br />
            {"}"}<br />
        </div>


    </>
    )
}