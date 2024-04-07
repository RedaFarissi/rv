import "./Home.sass";
import Footer from "../footer/Footer"
import { Link } from "react-router-dom";
import images from "../images";

export default function Home(props){
    return(
<>
    <main className="main-home d-flex justify-content-center align-items-center flex-wrap" dir="ltr" onClick={(event)=>{ props.closeSearchPhone(event) }}>
              <div className="box-lang">
                <Link to="/html" className="text-light text-decoration-none ">
                  <div class="card-header py-3"> 
                      <h3 class="text-center">HTML</h3>
                  </div>
                  <div class="card-body">
                      <div className="div-img">
                          <img src={images.html_logo} alt="html" />
                      </div>
                      <p class="card-text">HyperText Markup Language، ويشار إليها اختصاراً ب HTML وتُعرف بلغة ترميز النص التشعبي، هي عبارة عن لغة ترميز خاصة تستخدم لغايات تصميم وإنشاء صفحات الويب، كما يمكننا القول بإنّها عبارة عن الهيكل الرئيسي لصفحات الويب والبنية التحتيّة لها؛ إذ تقدّم وصفاً مفصلاً حول الكيفيّة التي ستكون عليها آلية عرض محتويات الموقع الإلكتروني ويكون ذلك بتقسيمه إلى عنوان وفقرات.</p>
                  </div>
                </Link>
              </div>
           
              <div className="box-lang">
                <Link to="/css" className="text-light text-decoration-none ">
                  <div class="card-header py-3"> 
                      <h3 class="text-center">CSS</h3>
                  </div>
                  <div class="card-body">
                      <div className="div-img">
                          <img src={images.css_logo} alt="css" />
                      </div>
                      <p class="card-text"> تعتبر CSS  إختصار ل (Cascading Style Sheet) لغة توصيفية  تقوم بمنح موقع الويب شكله الجميل وتصميمه الفريد الذي سيميزه عن غيره من المواقع . تعد لغة ال CSS  صديقة للغة ال  HTML فهي دائماً مرافقة لها وبجانبها في تصميم وإنشاء صفحات الويب. تشكل كل من هاتان اللغتان الأساس لكل موقع، فال HTML هي أساس كل عناصر صفحة الويب أما ال CSS فهي أساس تصميم . </p>
                  </div>
                </Link>
              </div>
           
              <div className="box-lang">
                <Link to="/js" className="text-light text-decoration-none ">
                  <div class="card-header py-3"> 
                      <h3 class="text-center">JavaScript</h3>
                  </div>
                  <div class="card-body">
                      <div className="div-img">
                          <img src={images.js_logo} alt="javascript" />
                      </div>
                      <p class="card-text"> JavaScript هو لغة برمجة تستخدم بشكل رئيسي في تطوير صفحات الويب لجعلها تفاعلية وديناميكية. تُعتبر JavaScript أحد أركان تقنيات الويب الحديثة، حيث يمكنها التفاعل مباشرة مع الصفحة والتفاعل مع المستخدم دون الحاجة إلى إعادة تحميل الصفحة. يُستخدم JavaScript بشكل واسع مع HTML و CSS لتحسين واجهات المستخدم وإضافة مكونات ديناميكية.  </p>
                  </div>
                </Link>
              </div>
           
              <div className="box-lang">
                <Link to="/react" className="text-light text-decoration-none ">
                  <div class="card-header py-3"> 
                      <h3 class="text-center">React</h3>
                  </div>
                  <div class="card-body">
                      <div class="div-img">
                          <img src={images.react_logo} alt="React" />
                      </div>
                      <p class="card-text"> React هو إطار عمل لتطوير واجهات المستخدم لتطبيقات الويب، وهو يعتبر جزءًا أساسيًا من مكتبة JavaScript. يُبنى React على لغة JavaScript، ويظهر أداءً مميزًا في بناء تطبيقات الويب الديناميكية والتفاعلية. يعتمد React على مفهوم المكونات، مما يتيح للمطورين بناء تطبيقات يمكن إعادة استخدامها بسهولة. يتميز React ويسهل التعاون بين فرق التطوير. </p>
                  </div>
                </Link>
              </div>

              <div className="box-lang">
                <Link to="/mysql" className="text-light text-decoration-none ">
                  <div class="card-header py-3"> 
                      <h3 class="text-center">Mysql</h3>
                  </div>
                  <div class="card-body">
                      <div class="div-img">
                          <img src={images.mysql} alt="Mysql" />
                      </div>
                      <p class="card-text"> MySQL هو نظام إدارة قواعد البيانات العلاقية de مفتوح المصدر يستخدم لغة الاستعلام المهيكلة (SQL) لإدارة واستعلام البيانات. يُستخدم على نطاق واسع في تطبيقات الويب ويدعم مجموعة متنوعة من أنظمة التشغيل. يوفر MySQL التوسعة والموثوقية والأداء، مما يجعله خيارًا شائعًا للشركات بمختلف الأحجام. يسهل تخزين البيانات واسترجاعها وتلاعبها بكفاءة من خلال مجموعته الشاملة من الميزات والوظائف. </p>
                  </div>
                </Link>
              </div>

              <div className="box-lang">
                <Link to="/python" className="text-light text-decoration-none ">
                  <div class="card-header py-3"> 
                      <h3 class="text-center">Python</h3>
                  </div>
                  <div class="card-body">
                      <div class="div-img">
                          <img src={images.python_logo} alt="Python" />
                      </div>
                      <p class="card-text"> Python هو لغة برمجة قوية ومتعددة الاستخدامات تحظى بشعبية كبيرة في مجال تطوير البرمجيات. تمتاز Python ببساطتها وسهولة فهم الشفرة، مما يجعلها خيارًا مثاليًا للمطورين من جميع المستويات. تتمتع Python بتوافق واسع مع مكتبات وإطارات مختلفة، وتستخدم في مجالات متنوعة مثل تطوير تطبيقات الويب، وعلم البيانات، والذكاء الاصطناعي. </p>
                  </div>
                </Link>
              </div>

              <div className="box-lang">
                <Link to="/django" className="text-light text-decoration-none ">
                  <div class="card-header py-3"> 
                      <h3 class="text-center">Django</h3>
                  </div>
                  <div class="card-body">
                      <div class="div-img">
                          <img src={images.django_logo} alt="Django" />
                      </div>
                      <p class="card-text"> Django هو إطار عمل Python قوي وشهير يُستخدم لتطوير تطبيقات الويب بشكل فعّال. يعتبر Django حلاً شاملاً لبناء تطبيقات الويب القائمة على Python، حيث يوفر ميزات قوية مثل نظام إدارة قواعد البيانات وتوجيهات URL وأنظمة تحديث الواجهة. يُعتبر Django سهل الاستخدام ويسمح بتطوير تطبيقات قابلة للتوسع بسرعة باستخدام مكونات قابلة لإعادة الاستخدام. </p>
                  </div>
                </Link>
              </div>
              
              <div className="box-lang">
                <Link to="/django-rest-framework" className="text-light text-decoration-none ">
                  <div class="card-header py-3"> 
                      <h3 class="text-center">Django Rest</h3>
                  </div>
                  <div class="card-body">
                      <div class="div-img">
                          <img src={images.Django_REST} className="w-75" alt="Django Rest" />
                      </div>
                      <p class="card-text"> Django REST Framework (DRF) هو إطار عمل مفتوح المصدر يهدف إلى تسهيل بناء وتطوير واجهات برمجة تطبيقات الويب (APIs) باستخدام Django، إطار العمل الشهير لتطوير تطبيقات الويب بلغة Python. يوفر DRF ميزات قوية مثل تسلسل البيانات، والمصادقة، ومجموعات العرض وموجهات الطلبات، والتقسيم، والتقييد، والمزيد، مما يساعد في تسهيل تطوير وصيانة APIs بشكل فعال وموثوق به. </p>
                  </div>
                </Link>
              </div>
              
              <div className="box-lang">
                <Link to="/php" className="text-light text-decoration-none ">
                  <div class="card-header py-3"> 
                      <h3 class="text-center">PHP</h3>
                  </div>
                  <div class="card-body">
                      <div class="div-img">
                          <img src={images.php_logo} alt="javascript" />
                      </div>
                      <p class="card-text"> PHP هو لغة برمجة تُستخدم بشكل رئيسي في تطوير صفحات الويب الديناميكية، وهو جزء حيوي من الأدوات المستخدمة في بناء تطبيقات الويب. يتميز PHP بقوته في التفاعل مع قواعد البيانات ومعالجة النماذج الواردة من النماذج المستخدمة على الصفحات. يعمل PHP جنبًا إلى جنب مع HTML لبناء صفحات الويب الديناميكية. </p>
                  </div>
                </Link>
              </div>
              
              <div className="box-lang">
                <Link to="/laravel" className="text-light text-decoration-none ">
                  <div class="card-header py-3"> 
                      <h3 class="text-center">Laravel</h3>
                  </div>
                  <div class="card-body">
                      <div class="div-img">
                          <img src={images.laravel_logo} alt="Laravel" />
                      </div>
                      <p class="card-text"> Laravel هو إطار عمل PHP متطور يستخدم لتطوير تطبيقات الويب بشكل فعّال. يُعد Laravel جزءًا حيويًا من عالم تطوير الويب ويقوم بتسهيل عملية بناء تطبيقات قوية ومتقدمة. يستفيد Laravel من ميزات PHP ويضيف لها توجيهات وأساليب تطوير حديثة، مما يجعله خيارًا مثاليًا لتطوير تطبيقات الويب الديناميكية.  </p>
                  </div>
                </Link>
              </div>

              <div className="box-lang">
                <Link to="/git" className="text-light text-decoration-none ">
                  <div class="card-header py-3"> 
                      <h3 class="text-center">Git</h3>
                  </div>
                  <div class="card-body">
                      <div class="div-img">
                          <img src={images.git_logo} alt="Git" />
                      </div>
                      <p class="card-text"> Git هو نظام تحكم في النسخ يُستخدم بشكل رئيسي في إدارة وتتبع التغييرات على ملفات المشروع البرمجي. تم تطوير Git بواسطة لينوس تورفالدز، وهو نظام مفتوح المصدر يوفر العديد من المزايا للمطورين البرمجيين والفرق البرمجية.           يتيح Git للمستخدمين تسجيل تغييراتهم على ملفات المشروع وتتبع تاريخ هذه التغييرات.  </p>
                  </div>
                </Link>
              </div>

              <div className="box-lang">
                <Link to="/powerShell" className="text-light text-decoration-none ">
                  <div class="card-header py-3"> 
                      <h3 class="text-center">CMD</h3>
                  </div>
                  <div class="card-body">
                      <div class="div-img">
                          <img src={images.powershell_log} alt="CMD" />
                      </div>
                      <p class="card-text"> CMD، الذي يعني واجهة الأوامر، هو تطبيق مترجم الأوامر المتوفر في معظم أنظمة التشغيل في ويندوز. يوفر واجهة نصية تسمح للمستخدمين بالتفاعل مع نظام التشغيل عبر إدخال الأوامر واستلام ردود نصية. تتيح واجهة أوامر الطرفية للمستخدمين أداء مهام مختلفة، وتنفيذ أوامر النظام، وتصفح نظام الملفات باستخدام مجموعة من الأوامر المحددة. </p>
                  </div>
                  </Link>
              </div>
  
    </main>
    <Footer />
</>
    )
}