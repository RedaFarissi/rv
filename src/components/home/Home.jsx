
import "./Home.sass"
import HomeBox from "./HomeBox";
import images from "../images";
import home from "../../assests/codes/home/home"

export default function Home(props){
    return(
    <main className="main-home">
      <HomeBox 
          link="/html"
          home_box="home-box-html"
          h1_class="h1_html"
          h1="HTML 5"
          img={images.html_logo}
          code={home.home_html}
          language="jsx"
          img_class="img-html"
          paragraph="HyperText Markup Language، ويشار إليها اختصاراً ب HTML وتُعرف بلغة ترميز النص التشعبي، هي عبارة عن لغة ترميز خاصة تستخدم لغايات تصميم وإنشاء صفحات الويب، كما يمكننا القول بإنّها عبارة عن الهيكل الرئيسي لصفحات الويب والبنية التحتيّة لها؛ إذ تقدّم وصفاً مفصلاً حول الكيفيّة التي ستكون عليها آلية عرض محتويات الموقع الإلكتروني ويكون ذلك بتقسيمه إلى عنوان وفقرات."
      />

      <HomeBox 
          link="/css"
          home_box="home-box-css"
          h1_class="h1_css"
          h1="CSS"
          img={images.css_logo}
          code={home.home_css}
          language="css"
          img_class="img-css"
          paragraph="تعتبر CSS  -اختصار ل - (Cascading Style Sheet) لغة توصيفية  تقوم بمنح موقع الويب شكله الجميل وتصميمه الفريد الذي سيميزه عن غيره من المواقع . تعد لغة ال CSS  صديقة للغة ال  HTML فهي دائماً مرافقة لها وبجانبها في تصميم وإنشاء صفحات الويب. تشكل كل من هاتان اللغتان الأساس لكل موقع، فال HTML هي أساس كل عناصر صفحة الويب أما ال CSS فهي أساس تصميم ."
      />

      <HomeBox 
          link="/js"
          home_box="home-box-js"
          h1_class="h1_js"
          h1="JavaScript"
          img={images.js_logo}
          code={home.home_js}
          language="javascript"
          img_class="img-js"
          paragraph="JavaScript هو لغة برمجة تستخدم بشكل رئيسي في تطوير صفحات الويب لجعلها تفاعلية وديناميكية. تُعتبر JavaScript أحد أركان تقنيات الويب الحديثة، حيث يمكنها التفاعل مباشرة مع الصفحة والتفاعل مع المستخدم دون الحاجة إلى إعادة تحميل الصفحة. يُستخدم JavaScript بشكل واسع مع HTML و CSS لتحسين واجهات المستخدم وإضافة مكونات ديناميكية. "
      />

      <HomeBox 
          link="/react"
          home_box="home-box-react"
          h1_class="h1_react"
          h1="React.js"
          img={images.react_logo}
          code={home.home_react}
          language="javascript"
          img_class="img-react"
          paragraph="React هو إطار عمل لتطوير واجهات المستخدم لتطبيقات الويب، وهو يعتبر جزءًا أساسيًا من مكتبة JavaScript. يُبنى React على لغة JavaScript، ويظهر أداءً مميزًا في بناء تطبيقات الويب الديناميكية والتفاعلية. يعتمد React على مفهوم المكونات، مما يتيح للمطورين بناء تطبيقات يمكن إعادة استخدامها بسهولة. يتميز React ويسهل التعاون بين فرق التطوير. "
      />

      <HomeBox 
          link="/python"
          home_box="home-box-python"
          h1_class="h1_python"
          h1="Python"
          img={images.python_logo}
          code={home.home_python}
          language="python"
          img_class="img-python"
          paragraph="Python هو لغة برمجة قوية ومتعددة الاستخدامات تحظى بشعبية كبيرة في مجال تطوير البرمجيات. تمتاز Python ببساطتها وسهولة فهم الشفرة، مما يجعلها خيارًا مثاليًا للمطورين من جميع المستويات. تتمتع Python بتوافق واسع مع مكتبات وإطارات مختلفة، وتستخدم في مجالات متنوعة مثل تطوير تطبيقات الويب، وعلم البيانات، والذكاء الاصطناعي."
      />

      <HomeBox 
          link="/django"
          home_box="home-box-django"
          h1_class="h1_django"
          h1="Django"
          img={images.django_logo}
          code={home.home_django}
          language="python"
          img_class="img-django"
          paragraph="Django هو إطار عمل Python قوي وشهير يُستخدم لتطوير تطبيقات الويب بشكل فعّال. يعتبر Django حلاً شاملاً لبناء تطبيقات الويب القائمة على Python، حيث يوفر ميزات قوية مثل نظام إدارة قواعد البيانات وتوجيهات URL وأنظمة تحديث الواجهة. يُعتبر Django سهل الاستخدام ويسمح بتطوير تطبيقات قابلة للتوسع بسرعة باستخدام مكونات قابلة لإعادة الاستخدام."
      />

        <HomeBox 
          link="/php"
          home_box="home-box-php"
          h1_class="h1_php"
          h1="PHP"
          img={images.php_logo}
          code={home.home_php}
          language="php"
          img_class="img-php"
          paragraph="PHP هو لغة برمجة تُستخدم بشكل رئيسي في تطوير صفحات الويب الديناميكية، وهو جزء حيوي من الأدوات المستخدمة في بناء تطبيقات الويب. يتميز PHP بقوته في التفاعل مع قواعد البيانات ومعالجة النماذج الواردة من النماذج المستخدمة على الصفحات. يعمل PHP جنبًا إلى جنب مع HTML لبناء صفحات الويب الديناميكية."
        />

        <HomeBox 
          link="/laravel"
          home_box="home-box-laravel"
          h1_class="h1_laravel"
          h1="Laravel"
          img={images.laravel_logo}
          code={home.home_laravel}
          language="php"
          img_class="img-php"
          paragraph="Laravel هو إطار عمل PHP متطور يستخدم لتطوير تطبيقات الويب بشكل فعّال. يُعد Laravel جزءًا حيويًا من عالم تطوير الويب ويقوم بتسهيل عملية بناء تطبيقات قوية ومتقدمة. يستفيد Laravel من ميزات PHP ويضيف لها توجيهات وأساليب تطوير حديثة، مما يجعله خيارًا مثاليًا لتطوير تطبيقات الويب الديناميكية. "
        />

        <HomeBox 
          link="/git"
          home_box="home-box-git"
          h1_class="h1_git"
          h1="Git"
          img={images.git_logo}
          code={home.home_git}
          language="python"
          img_class="img-git"
          paragraph="Git هو نظام تحكم في النسخ يُستخدم بشكل رئيسي في إدارة وتتبع التغييرات على ملفات المشروع البرمجي. تم تطوير Git بواسطة لينوس تورفالدز، وهو نظام مفتوح المصدر يوفر العديد من المزايا للمطورين البرمجيين والفرق البرمجية.           يتيح Git للمستخدمين تسجيل تغييراتهم على ملفات المشروع وتتبع تاريخ هذه التغييرات. يتميز Git بالفعالية في التعامل مع الفروع ، حيث يمكن للمطورين إنشاء فروع جديدة لتجربة الميزات أو إصلاح الأخطاء دون التأثير على الكود الرئيسي."
        />

        <HomeBox 
          link="/power-shell"
          home_box="home-box-powerShell"
          h1_class="h1_powerShell"
          h1="Windows PowerShell"
          img={images.powershell_log}
          code={home.home_powerSehll}
          language="python"
          img_class="img-powerShell"
          paragraph="CMD، الذي يعني واجهة الأوامر، هو تطبيق مترجم الأوامر المتوفر في معظم أنظمة التشغيل في ويندوز. يوفر واجهة نصية تسمح للمستخدمين بالتفاعل مع نظام التشغيل عبر إدخال الأوامر واستلام ردود نصية. تتيح واجهة أوامر الطرفية للمستخدمين أداء مهام مختلفة، وتنفيذ أوامر النظام، وتصفح نظام الملفات باستخدام مجموعة من الأوامر المحددة."
      />
      
      <footer dir="rtl">
        <div id="footer-div1">
            <div id="img_logo">
              <img src="{% static 'front/img/logo.png' %}"/>
            </div>
            <div class="footer_p">
              <h4 class="h4">هدف الموقع</h4>
              تعلم  البرمجة  مجاني ومساعدة في تحسين البرمجة العربية مع التركيز على الأمتلة 
              و هو المكان المناسب لأي شخص يطمح بأن يصبح مبرمجاً محترفاً و مبدعاً في العالم الرقمي
            </div>
        </div>
        <div id="footer-div2">
            <div id="tabara3_lilmaw9i3">
                <h4 class="h4"><span class="material-icons" id="sovini">volunteer_activism</span> تبرع للموقع </h4>
                في حال أردت تقديم دعم مادي لمطوري الموقع يمكنك التبرع مرة واحدة أو بشكل شهري بالمبلغ الذي تريده من خلال بايبال 
                <button> Paypal </button>
            </div>
            <div class="footer_p">
                <h4 class="h4"> <span class="material-icons"> share </span> تابعنا</h4>
                <div style={{display: "flex"}}>
                  <img src="{% static 'front/img/surface.jpg' %}" style={{width: "50px",height:"50px",borderRadius:"50%",marginLeft:"14px",filter:"grayscale(100%)"}}/>
                  <samll>رضا السكوني مؤسس ومطور الموقع</samll>
                </div>
                <div style={{marginTop:"20px",fontSize:"105%"}}>حسابات الموقع الرسمية</div>
                <div style={{marginTop:"20px"}}>
                    <img class="logo-connecte" src="https://img.icons8.com/fluency/48/000000/instagram-new.png"/>
                    <img class="logo-connecte" src="https://img.icons8.com/fluency/48/000000/facebook.png"/>
                    <img class="logo-connecte" src="https://img.icons8.com/color/48/000000/telegram-app--v1.png"/>
                </div>
            </div>
        </div>
    </footer>

    </main>
    )
}