import { CodeCommand , CodeHighlighter } from "../../path";
  import images from "../imagesLaravel";

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
        C:\xampp\htdocs{">"}<span className="text-danger">laravel new laravel-react-vite </span><br />
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
{">"} <span className="text-danger">none</span><br />
<br /><br />
Which testing framework do you prefer? [Pest]:<br />
[0] Pest<br />
[1] PHPUnit<br />
{">"} <span className="text-danger">0</span><br /> </pre>
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
C:\xampp\htdocs\laravel-react-vite{">"} <span className="text-danger">cd front</span><br />
<br />
C:\xampp\htdocs\laravel-react-vite\front{">"}<span className="text-danger">npm install</span><br />
<br />
added 259 packages, and audited 260 packages in 1m<br />
<br />
108 packages are looking for funding<br />
  run `npm fund` for details<br />
  <br />
found 0 vulnerabilities<br />
<br />
C:\xampp\htdocs\laravel-react-vite\front{">"}<span className="text-danger">npm run dev</span><br />
<br />
{">"} front@0.0.0 dev<br />
{">"} vite<br />
<br /><br />
  VITE v6.1.1  ready in 279 ms<br />
  <br />
  ➜  Local:   <span className="text-success">http://localhost:5173/</span><br />
  ➜  Network: use --host to expose<br />
  ➜  press h + enter to show help<br />
</pre>
        </div>
        <img src={images.laravel1} alt="laravel react" className="w-100" />
        <h2 className='title-h2' id="Switch_Port">4 -  تبديل  المنفذ </h2>
        <ul><li>انتقل إلى ملف <b>package.json</b> في المجلد <bdi>front/</bdi> وأضف <bdi>--port=3000</bdi></li></ul>
        <div className='alert bg-light text-dark ' dir="ltr"> 
            "scripts": {"{"} <br />
             &nbsp; &nbsp; &nbsp;   "dev": "vite <span className="text-danger">--port=3000</span>", <br />
             &nbsp; &nbsp; &nbsp;   .....<br />
            {"}"}<br />
        </div>
        <div className="alert bg-dark text-light">
            <pre>
C:\xampp\htdocs\laravel-react-vite\front{">"}<span className="text-danger">npm run dev</span><br />
<br />
{">"} front@0.0.0 dev<br />
{">"} vite --port=3000<br />
<br />
<br />
  VITE v6.1.0  ready in 430 ms<br />
  <br />
  ➜  Local:   <span className="text-success">http://localhost:3000/</span><br />
  ➜  Network: use --host to expose<br />
  ➜  press h + enter to show help</pre>
        </div><br />
        <h2 className='title-h2' id="Install_react-router-dom">5 - تثبيت  react-router-dom </h2>
        <CodeCommand> npm install react-router-dom -S </CodeCommand>
        <div className="alert bg-dark text-light">
            <pre>C:\xampp\htdocs\laravel-react-vite\front{">"}<span className="text-danger">npm install react-router-dom -S</span> <br/>
<br/>
added 6 packages, and audited 265 packages in 7s<br/>
<br/>
108 packages are looking for funding<br/>
  run `npm fund` for details<br/>
  <br/>
3 moderate severity vulnerabilities<br/>
<br/>
To address all issues (including breaking changes), run:<br/>
  npm audit fix --force<br/>
  <br/>
Run `npm audit` for details.<br/></pre>
        </div>
        <h2 className='title-h2' id="Create_views_folder">6 - إنشاء مجلد <bdi>views/</bdi> (أو <bdi>pages/</bdi>) في <bdi>front/src/</bdi> </h2>
        <ul>
          <li>في المجلد <bdi>views/</bdi> سنضع جميع الصفحات ذات الامتداد jsx .</li>
          <li><bdi>front/src/views/Login.jsx</bdi></li>
          <li><bdi>front/src/views/Signup.jsx</bdi></li>
          <li><bdi>front/src/views/User.jsx</bdi></li>
          <li><bdi>front/src/views/Home.jsx</bdi></li>
        </ul>
        <CodeHighlighter  code={`export default function Login(){
    return (
        <>
            <h2>Login Page</h2>
        </>
    )
}`} file_name="laravel-react-vite / front / src / views / Login.jsx" language="js" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={`export default function Signup(){
    return (
        <>
            <h2>Signup Page</h2>
        </>
    )
}`} file_name="laravel-react-vite / front / src / views / Signup.jsx" language="js" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={`export default function User(){
    return (
        <>
            <h2>User Page</h2>
        </>
    )
}`} file_name="laravel-react-vite / front / src / views / User.jsx" language="js" number={false} addclassName="mt-3 mb-3" copie={true}/>
<CodeHighlighter  code={`export default function Home(){
    return (
        <>
            <h2>Home Page</h2>
        </>
    )
}`} file_name="laravel-react-vite / front / src / views / Home.jsx" language="js" number={false} addclassName="mt-3 mb-3" copie={true}/>


        <h2 className='title-h2' id="editorconfig_file">6 - ملف .editorconfig </h2>
        <ul><li>أضف هذا إلى الملف <bdi>.editorconfig</bdi> الموجود في المجلد <bdi>laravel-react-vite/</bdi></li></ul>
        <CodeHighlighter  code={`[*.{js , jsx , css , sass}]
indent_size = 2`} file_name="laravel-react-vite / .editorconfig" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <h2 className='title-h2' id="Create_router.jsx">7 - إنشاء router.jsx </h2>
        <ul><li>انتقل إلى المجلد <bdi>front/src/</bdi> وقم بإنشاء ملف بالاسم router.jsx</li></ul>
        <CodeHighlighter  code={`import {createBrowserRouter} from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Login";
import User from "./views/User";
import Home from "./views/Home";

const router = createBrowserRouter([
    { 
        path: '/login',
        element: <Login />
    },
    { 
        path: '/signup',
        element: <Signup />
    },
    { 
        path: '/user',
        element: <User />
    }, 
    { 
        path: '',
        element: <Home />
    },
])

export default router;`} file_name="laravel-react-vite / front / src / router.jsx" language="js" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={`import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import router from './router.jsx' //new
import { RouterProvider } from 'react-router-dom' //new



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router} />     {/* new */}
  </StrictMode>,
)`} file_name="laravel-react-vite / front / src / main.jsx" language="js" number={false} addclassName="mt-3 mb-3" copie={true}/>

      

    </>
    )
}