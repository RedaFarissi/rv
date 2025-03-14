import { CodeCommand , CodePowerShell } from "../path";
import images from "./imagesGit";
import Footer from "../footer/Footer";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useCustoScrollYAdd } from "../../custom/pathCustoms";


export default function Git(props){
    const dispatch = useDispatch();
    
    const arrays = props.git_list.map(e => <li className="list-group-item">
        <a href={`/git#${e}`} onClick={useCustoScrollYAdd}>
            <i className="fa-solid fa-caret-right me-1"></i> GIT {e.replace(/_/g, ' ')}
        </a>
    </li>);
    
   const stylePreTag = `
+---[RSA 4096]----+
|      +.         |
|     o .   .     |
| o .  . o . .    |
|+ o  . = o .     |
| o .. B.S = o    |
|.  ..+.XoO o .   |
| o ...+*o =      |
|. o ooo EB .     |
| . .... o.+      |
+----[SHA256]-----+ `;

   // Scroll to the element with the hash on page load or when the hash changes
   useEffect(() => {
          if (window.location.hash) {
            const element = document.getElementById(window.location.hash.substring(1)); // Remove the '#' from the hash
            if (element) {
                const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 140;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
          }
   }, [window.location.hash]); // Run the effect when the hash changes
    
    return(
    <>
        <main onClick={ (event)=>{ 
            props.clickMenuHeader(event, false); 
            // props.closeSearchPhone(); 
            dispatch({ type: 'FALSE_VISIBILTY_PROFILE' }) }}
        >
            <aside className="aside">
                <ul className="list-group m-0">
                    {arrays}
                </ul>
            </aside>
            <section className="section-conetent">
                <h1 className="heading-style"> Git and github</h1>
                <article id="Introduction">
                    <h2 className="title-h2 mt-5">1 - مقدمة عن Git</h2>
                    <p className="style_divv">
                        <b>Git</b> هو نظام تحكم في النسخ يُستخدم بشكل رئيسي في إدارة وتتبع التغييرات على ملفات المشروع البرمجي. تم تطوير <b>Git</b> بواسطة لينوس تورفالدز، وهو نظام مفتوح المصدر يوفر العديد من المزايا للمطورين البرمجيين والفرق البرمجية.<br/><br/>
                        يتيح <b>Git</b> للمستخدمين تسجيل تغييراتهم على ملفات المشروع وتتبع تاريخ هذه التغييرات. يتميز <b>Git</b> بالفعالية في التعامل مع الفروع <b>(Branches)</b>، حيث يمكن للمطورين إنشاء فروع جديدة لتجربة الميزات أو إصلاح الأخطاء دون التأثير على الكود الرئيسي.<br/><br/>
                        من بين المفاهيم الرئيسية في <b>Git</b>:<br/><br/>
                        <ul>
                            <li><b className="text-success">التعقب (Tracking):</b> يتيح <b>Git</b> تعقب التغييرات التي تم إجراؤها على الملفات، مما يسمح للمستخدم بفهم تاريخ وتدفق العمل.</li>
                            <li><b className="text-success">الفروع (Branches):</b> يُمكن إنشاء فروع جديدة للعمل على ميزات جديدة أو إصلاح الأخطاء دون التأثير على الكود الرئيسي.</li>
                            <li><b className="text-success">الالتزامات (Commits):</b> يُمكن للمستخدم تحديد نقاط في تاريخ المشروع تُعرف باسم <b>"commits"</b>، حيث يُسجل كل الالتزام تغييرات محددة.</li>
                            <li><b className="text-success">الدمج (Merging):</b> عملية جمع تغييرات فرع بتلك الموجودة في فرع آخر، ويُستخدم لدمج الأكواد المختلفة بطريقة سلسة.</li>
                            <li><b className="text-success">التعارضات (Conflicts):</b> قد تحدث التعارضات عند محاولة دمج تغييرات تتعارض مع بعضها البعض، ويتعين حل هذه التعارضات يدويًا.</li>
                            <li><b className="text-success">Git</b> يعد أحد أنظمة التحكم في النسخ الأكثر استخدامًا في مجال تطوير البرمجيات، ويسهم في تحسين تعاون فرق العمل وإدارة تاريخ المشروع بشكل فعال.</li>
                        </ul><br/><br/>

                        هناك العديد من خدمات استضافة الويب <b>Git</b> المتاحة، ولكل منها ميزاتها وعروضها الخاصة.<br/><br/>
                        <ul>
                            <li className="mt-3"><b className="text-success">GitHub :</b> واحدة من أكثر النظم استخدامًا على نطاق واسع لاستضافة مستودعات <b>Git</b>. تقدم ميزات مثل طلبات السحب، والمشاكل، ولوحات المشروع، والإجراءات.</li>
                            <li className="mt-3"><b className="text-success">GitLab :</b> مماثل لـ <b>GitHub</b>، يوفر <b>GitLab</b> منصة لاستضافة مستودعات <b>Git</b> مع ميزات إضافية مثل التكامل المستمر والنشر المستمر وسجل الحاويات.</li>
                            <li className="mt-3"><b className="text-success">Bitbucket :</b> خدمة استضافة مستودعات <b>Git</b> من قِبل <b>Atlassian</b>. تقدم إدارة مستودعات <b>Git</b> وتعاون في الكود والتكامل مع أدوات <b>Atlassian</b> الأخرى.</li>
                            <li className="mt-3"><b className="text-success">Azure DevOps :</b> منصة مايكروسوفت التي تقدم مجموعة من أدوات التطوير، بما في ذلك استضافة مستودعات <b>Git</b> وأتمتة البناء وإدارة الإصدار وغيرها.</li>
                            <li className="mt-3"><b className="text-success">AWS CodeCommit :</b> خدمة إدارة المصدر الآمنة والقابلة للتوسع من <b>Amazon</b> تجعل من السهل على الفِرَق استضافة مستودعات <b>Git</b>.</li>
                            <li className="mt-3"><b className="text-success">Gitea :</b> خدمة <b>Git</b> ذاتية الاستضافة خفيفة الوزن وسهلة التثبيت. إنها خيار جيد للأفراد أو الفِرَق الصغيرة الذين يرغبون في استضافة مستودعات <b>Git</b> الخاصة بهم.</li>
                            <li className="mt-3"><b className="text-success">GitKrakenGlo Boards :</b> في حين أن <b>GitKraken</b> معروفة أساسًا بعميلها لـ <b>Git</b>، إلا أن <b>GitKraken Glo Boards</b> تقدم وسيلة لإدارة المهام والمشاكل بطريقة جذابة بصرياً.</li>
                        </ul><br/><br/>
                        هذه أمثلة قليلة فقط، وهناك العديد من خدمات استضافة مستودعات <b>Git</b> الأخرى المتاحة، كل واحدة منها لديها ميزات فريدة وجمهور مستهدف. اختيار خدمة استضافة <b>Git</b> يعتمد على عوامل مثل حجم الفِرَق، ومتطلبات المشروع، واحتياجات التكامل، والتفضيلات الشخصية.<br/>
                        في هذا البرنامج التعليمي نستخدم <b>GITHUB</b>
                    </p>
                </article>

                <article id="Install_git">
                    <h2 className="title-h2 mt-5">2 - تثبيت Git لنظام التشغيل Windows</h2>
                    <p className="style_divv">
                        <ul>
                            <li><a href="https://gitforwindows.org/" target="_blanck" className="text-light">انقر لتثبيت Git لنظام التشغيل Windows</a></li>
                            <li>سيتم تثبيت البرنامج في: <kbd>C:\Program Files\</kbd></li>
                            <li>أعد تشغيل جهازك</li>
                        </ul>
                    </p>
                </article>

                <article id="Diagram_git">
                    <h2 className="title-h2 mt-5">3 - مخطط سير عمل Git</h2>
                    <img src={images.git3} alt="git" style={{ width: "80%", marginRight :"10%" }}/>
                </article>

                <article id="Repository">
                    <h2 className="title-h2">4 - المخزن (Repository)</h2>
                    <p className="style_divv">
                        المستودع <b>Git</b> هو المجلد <bdi><b>.git/</b></bdi> داخل مشروع. يقوم هذا المستودع بتتبع جميع التغييرات التي تم إجراؤها على الملفات في مشروعك، بناءً تاريخًا على مر الوقت. وهذا يعني أنه إذا قمت بحذف مجلد <bdi><b>.git/</b></bdi> ، فإنك تحذف تاريخ مشروعك.<br/><br/>
                        في حال كان لديك مشروعين، يجب عليك إنشاء 2 مستودع.
                    </p>
                </article>

                <article id="Branch">
                    <h2 className="title-h2">5 - الفرع (Branch)</h2>
                    <p className="style_divv">
                        الفرع في نظام التحكم بالنسخ <b>Git</b> يمثل نسخة من سجل المشروع تعيش بشكل مستقل عن الفرع الرئيسي (الماستر). يستخدم الفرع لتطوير ميزات جديدة، إصلاح الأخطاء، أو تجربة تغييرات دون أن تؤثر على الكود الرئيسي.<br/><br/>
                        باستخدام الفروع، يمكن للفرق البرمجية العمل بشكل متزامن على أجزاء مختلفة من المشروع دون التأثير المباشر على بعضها البعض. بمجرد أن يكتمل العمل في الفرع ويتم اختباره، يمكن دمجه بسهولة مع الفرع الرئيسي أو أي فرع آخر.<br/><br/>
                        يساعد استخدام الفروع في تحسين التعاون وإدارة التغييرات بشكل فعّال في الفرق البرمجية.<br/>
                    </p>
                </article>

                <article id="Local_Repository">
                    <h2 className="title-h2">6 - المستودع المحلي (Local Repository) </h2>
                    <p className="style_divv">
                        المستودع المحلي في نظام التحكم بالنسخ <b>Git</b> هو النسخة المخزنة على جهاز الحاسوب الخاص بك. يتمثل هذا المستودع في المجلد <bdi><b>.git/</b></bdi> داخل مشروعك، الذي يحتوي على تاريخ جميع التغييرات التي تم إجراؤها على ملفات المشروع.<br/><br/>
                        بصفة عامة، يُستخدم المستودع المحلي لتتبع التاريخ المحلي لمشروعك ولتنفيذ العمليات المختلفة مثل إنشاء فروع جديدة، وتنفيذ الالتزامات، والتحويل بين الفروع. يُعتبر المستودع المحلي قاعدة للعمل اليومي ويكون متصلاً بالمستودع البعيد <b>(Remote Repository)</b>، سواء كان ذلك عبر خدمات استضافة مثل <b>GitHub</b> أو <b>GitLab</b> أو غيرها.
                    </p>
                </article>

                <article id="Remote_Repository">
                    <h2 className="title-h2">7 - المستودع البعيد (Remote Repository)</h2>
                    <p className="style_divv">
                        المستودع البعيد في نظام التحكم بالنسخ <b>Git</b> يمثل نسخة مخزنة على خادم بعيد، مثل خدمات استضافة مثل <b>GitHub</b> أو <b>GitLab</b>. يتيح المستودع البعيد للمستخدمين تبادل التغييرات بين أجهزتهم والتعاون على المشروع.<br/><br/>
                        عند العمل مع المستودع البعيد، يمكن للمطورين استرجاع التحديثات الأخيرة، مشاركة تغييراتهم، والتحقق من تقدم العمل. يتم تنسيق هذه التبادلات باستخدام أوامر <b>Git</b> مثل <b>git push</b> لرفع التحديثات إلى المستودع البعيد، و <b>git pull</b> لاسترجاع التحديثات منه.<br/><br/>
                        باستخدام المستودع البعيد، يتسنى للفِرَق البرمجية العمل بشكل متزامن على مشروع مشترك، وتحقيق التواصل الفعّال في تطوير البرمجيات.
                    </p>
                </article>

                <article id="Pull_Request">
                    <h2 className="title-h2">8 - طلب السحب (Pull Request)</h2>
                    <p className="style_divv">
                        في سياق نظام التحكم بالنسخ <b>Git</b>، "طلب السحب" يُشير إلى عملية اقتراح التغييرات من فرع فرعي إلى الفرع الرئيسي (عادةً ما يكون الماستر) في مستودع مشروع. عندما يقوم مطور بإجراء تعديلات في فرعه الخاص، يقوم بإنشاء طلب سحب لإعلام الفريق الرئيسي بوجود تحديثات يرغب في دمجها.<br/><br/>
                        طلب السحب يحتوي عادة على وصف للتغييرات التي تم إجراؤها وقائمة بالتعهيدات الجديدة. يُمكن لأعضاء الفريق أو المشاركين الآخرين مراجعة هذه التغييرات وإبداء التعليقات أو الملاحظات. عند الموافقة على طلب السحب، يمكن دمج التغييرات في الفرع الرئيسي.<br/><br/>
                        هذه العملية تُسهم في إدارة عملية التطوير المشترك وتسهل التعاون بين المطورين على تغييرات المشروع.
                    </p>
                </article>

                <article id="Clone_Repository">
                    <h2 className="title-h2">9 -  لاستنساخ ال repository من github استخدم</h2>
                    <p className="style_divv">
                        في سياق نظام التحكم بالنسخ <b>Git</b>، يُشير "الاستنساخ" إلى عملية إنشاء نسخة محلية من مستودع بعيد <b>(Remote Repository)</b>. عندما يقوم المستخدم بعملية الاستنساخ، يقوم Git بتحميل كل البيانات والتاريخ المتعلقين بالمستودع البعيد إلى الجهاز المحلي.<br/><br/>
                        هذه العملية تسمح للمطور بالعمل على المشروع بشكل محلي، وتوفير القدرة على إجراء التعهيدات والتحديثات بدون الحاجة إلى اتصال دائم بالمستودع البعيد. بمجرد إتمام العمل المحلي، يمكن تحديث المستودع البعيد بالتغييرات الجديدة باستخدام أوامر <b>Git</b> مثل <b>git push</b>.
                    </p>
                    <CodeCommand>git clone {"<"}repo link{">"}</CodeCommand>
                    <CodeCommand>git clone https://github.com/RedaFarissi/front-portfolio.git </CodeCommand>
                    <div className="mital">متال : </div>
                    <ul>
                        <li>للفهم بشكل أفضل قم بإنشاء <b>repository</b> في <b>github</b> أطلق عليه اسم <b>first_repo</b></li>
                        <img src={images.git17} alt="git" className="img"/>
                        <li>إستنساخه داخل أي مجلد تريد في حالتي قمت استنساخه في : <kbd><bdi>C:\Users\SURFACE BOOK\Desktop\app\</bdi></kbd> باستخدام <bdi><kbd>git clone https://github.com/RedaFarissi/first_repo.git</kbd></bdi></li> 
                        <img src={images.git18} alt="git" className="img"/>       
                        <li> في مجلد الدليل <kbd><bdi>C:\Users\SURFACE BOOK\Desktop\app\</bdi></kbd> ستجد المجلد <b>first_repo/</b> فارغ </li>
                        <img src={images.git19} alt="git" className="img"/>       
                        <li> قم بإنشاء ملف ومجلد في <kbd><bdi>first_repo/</bdi></kbd> بأي اسم تريده.</li>
                        <img src={images.git20} alt="git"  className="img"/>
                      </ul>           
                </article>

                <article id="Initialize_Repository">
                    <h2 className="title-h2">10 -  الأمر (git init)</h2>
                    <p className="style_divv">
                        git init هو أمر يستخدم لبدء مشروع Git جديد. عند تنفيذ هذا الأمر في مجلد جديد على جهاز الكمبيوتر، يقوم Git بإعداد جميع الملفات والهيكل الأساسي لتتبع التغييرات في المشروع باستخدام Git.
                    </p>
                    <li> باستخدام powerShell انتقل إلى الداخل: <kbd><bdi>cd first_repo/</bdi></kbd></li>
                    <img src={images.git21} alt="git" className="img"/>       
                    <img src={images.git23} alt="git" className="img"/>
                </article>

                <article id="git_status" >
                    <h2 className="title-h2">11 -  الأمر (git status) </h2>
                    <p className="style_divv">
                        <b>git status</b> هو أمر في نظام التحكم بالنسخ <b>Git</b> يستخدم لعرض حالة ملفات المشروع الحالية. عند تنفيذ هذا الأمر في سطر الأوامر، يقوم <b>Git</b> بإظهار قائمة بالتعديلات التي تم إجراؤها على الملفات في المشروع. يتيح <b>git status</b> للمستخدم متابعة تغييرات الملفات والفهم إذا ما كانت هناك ملفات تم تعديلها أو إضافتها أو حذفها.
                    </p>
                    <ul>
                       <li>إستخدم <b>git status</b> لعرض حالة ملفات المشروع الحالية </li>
                    </ul>
                    <img src={images.git22} alt="git" className="img"/>
                </article>

                <article id="git_add">
                    <h2 className="title-h2">12 - الأمر (git add)</h2>
                    <p className="style_divv">
                        <b>git add</b> هو أمر يستخدم لإضافة تغييرات الملفات إلى المرحلة <b>(staging area)</b> في <b>Git</b>، استعدادًا للتأكيد <b>(commit)</b>. عندما تقوم بتنفيذ <b>git add</b> لملف أو مجلد، يتم تتبع التغييرات في هذه الملفات وإضافتها إلى الفهرس المؤقت <b>(staging area)</b>، والتي تمثل مجموعة الملفات التي ستكون جاهزة للتأكيد في التحديث القادم.
                    </p>
                    <CodeCommand>git add css/</CodeCommand>
                    <CodeCommand>git add index.html</CodeCommand>
                    <div className="mx-3 text-success">أو</div>
                    <CodeCommand>git add .</CodeCommand>
                    <div className="mx-3 text-success">أو</div>
                    <CodeCommand>git add index.html css/</CodeCommand>
                    <img src={images.git24} alt="git" className="img"/>
                    <ul><li>أنت الآن في <b>(staging area)</b> وأنت على استعداد ل <b>(commit)</b></li></ul>
                    <hr />
                    <h3 className="title-h3">إذا كنت تريد إزالة <kbd><bdi>git add</bdi></kbd> من repository الخاص بك إستخدام</h3>
                    <CodeCommand>git reset css/ index.html</CodeCommand>
                </article>

                <article id="git_commit">
                    <h2 className="title-h2">13 - الأمر (git commit)</h2>
                    <p className="style_divv">
                        في نظام التحكم بالنسخ <b>Git</b>، يُشير مصطلح <b>"Commit"</b> إلى عملية تسجيل التغييرات التي تم إجراؤها على الملفات في <b>repository</b>. عندما يقوم المستخدم بعملية <b>(commit)</b> ، يتم تضمين مجموعة من التغييرات التي تمثل حالة معينة للمشروع في تلك اللحظة.<br/><br/>
                        عملية <b>Commit</b> تُستخدم لإنشاء نقطة في تاريخ المشروع، وتسجل تفاصيل التغييرات التي تمت. يتم تعيين رسالة <b>(commit)</b> لشرح الغرض أو الهدف من تلك التغييرات. يعتبر <b>Commit</b> جزءًا أساسيًا من عملية تتبع تاريخ المشروع ويوفر إمكانية الرجوع إلى حالة محددة في أي وقت.
                    </p>
                    <CodeCommand>git commit -m "message to your teams"</CodeCommand>
                    <img src={images.git25} alt="git" className="img"/>
                    <img src={images.git26} alt="git" className="img"/>
                    <ul><li>أنت الآن في الريبو المحلي <b>(local repo)</b> وأنت جاهز لدفع البيانات داخل الريبو البعيد <b>(remote repo)</b></li></ul>
                    <hr />
                    <h3 className="title-h3">إذا كنت تريد إزالة <kbd><bdi>git commit</bdi></kbd> والعودة إلى (staging area) </h3>
                    <CodeCommand>git rm -f index.html css/</CodeCommand>
                </article>

                <article id="git_branch">
                    <h2 className="title-h2">14 - الأمر (git branch)</h2>
                    <p className="style_divv">
                        استخدم الأمر <b>(git branch)</b> أدناه للحصول على اسم الفرع الذي تعمل فيه في الريبو المحلي الخاص بك. <br/><br/>
                        الفرع هو إصدار واحد من قاعدة التعليمات البرمجية، ويمكن أن يكون لديك فروع متعددة لإصدار متعدد
                    </p>
                    <CodeCommand>git branch</CodeCommand>
                    <img src={images.git27} alt="git" className="img"/>
                </article>

                <article id="git_remote">
                    <h2 className="title-h2">15 - الأمر (git remote -v)</h2>
                    <p className="style_divv">
                        <b>git remote -v</b> هو أمر يُستخدم لعرض عناوين <b>URL</b> لجميع النسخ البعيدة <b>(remote)</b> التي تم تكوينها في مشروع <b>Git</b>. يظهر هذا الأمر عادة العناوين الرابطة بمستودع النسخ البعيد من حيث يمكن أن يتم جلب <b>(fetch)</b> وإرسال <b>(push)</b> التغييرات.
                    </p>
                    <CodeCommand>git remote -v</CodeCommand>
                    <img src={images.git28} alt="git" className="img"/>
                </article>

                <article id="git_push">
                    <h2 className="title-h2">16 - الأمر (git push)</h2>
                    <p className="style_divv">
                        في نظام التحكم بالنسخ <b>Git</b>، "الدفع" يشير إلى عملية نقل التعهيدات والتحديثات المحلية إلى المستودع البعيد <b>(Remote Repository)</b>. عندما يقوم المستخدم بعملية الدفع، يتم رفع التعهيدات التي قام بها محليًا إلى المكان البعيد، مما يتيح للفرق البرمجية والمطورين الآخرين الوصول إلى أحدث التغييرات.<br/><br/>
                        عملية الدفع تكون ضرورية عندما يكون المطور قد قام بإجراء تغييرات محلية ويرغب في تحديث المستودع البعيد بتلك التغييرات. تستخدم أمر <b>(git push)</b> لتحديث المستودع البعيد بالتعهيدات والتحديثات الحديثة التي تم إجراؤها محليًا.
                    </p>
                    <CodeCommand>git push Remote_branch_name  local_branch_name</CodeCommand>
                    <CodeCommand>git push origin  main</CodeCommand>
                    <img src={images.git29} alt="git" className="img"/>
                    <ul><li>كما ترون تم تعديل <b>(remote repo)</b></li></ul> 
                    <img src={images.git30} alt="git" className="img"/>  
                </article>

                <article id="Work_as_a_team">
                    <h2 className="title-h2"> 17 - العمل كفريق </h2>
                    <p className="style_divv">
                        إذا كنت تريد العمل كفريق مع مطورين آخرين، فيجب على المسؤول إضافتك إلى الفريق.<br/><br/>
                        إذا كنت المسؤول وترغب في إضافة شخص ما إلى الفريق، فانتقل إلى <b>setting</b> وانقر على <b>Collaborators</b> وانقر على زر <b>add peaple</b>.<br/>
                        <bdi>setting{">"}Collaborators{">"}add peaple</bdi><br/><br/>
                        ويمكنك إضافة الأصدقاء عن طريق البريد الإلكتروني أو عن طريق إسم المستخدم.
                    </p>
                </article>

                <article id="git_pull">
                    <h2 className="title-h2">18 - الأمر (git pull)</h2>
                    <p className="style_divv">
                        في نظام التحكم بالنسخ Git، "السحب" يشير إلى عملية جلب التحديثات والتعهيدات من المستودع البعيد (Remote Repository) إلى المستودع المحلي. عند استخدام أمر السحب git pull، يقوم Git بجلب التحديثات الجديدة من المستودع البعيد ودمجها مع المشروع المحلي.<br/><br/>
                        هذه العملية ضرورية عندما يكون هناك تغييرات أُجريت على المشروع في المستودع البعيد من قبل أشخاص آخرين، وترغب في جلب هذه التحديثات لمشروعك المحلي لتحديثه والعمل عليه بآخر التغييرات. يسهل استخدام السحب عملية التنسيق والتعاون بين الفِرَق البرمجية التي تعمل على نفس المشروع.
                    </p>
                    <CodeCommand>git add .</CodeCommand>
                    <CodeCommand>git commit -m "commit message"</CodeCommand>
                    <CodeCommand>git pull origin master</CodeCommand>
                </article>


                <article id="Existing_Project_powerShell">
                    <h2 className="title-h2">19 - أنشئ repository من مشروع موجود في جهازك باستخدام powerShell</h2>
                    <h3 className="title-h3">1 - قم بإنشاء مستودع (repository) جديد على github </h3>
                    <img src={images.git14} alt="git" className="img"/>
                    <h3  className="title-h3">2 - استخدم هذه الأوامر في المجلد الذي تريد تحميله في github </h3>
                    <CodeCommand>git init</CodeCommand>
                    <CodeCommand>git add .</CodeCommand>
                    <CodeCommand>git commit -m "Initial commit"</CodeCommand>
                    <CodeCommand>git remote add origin {"<"}repository URL{">"}</CodeCommand>
                    <CodeCommand>git push -u origin master</CodeCommand>
                </article>


                <article id="Existing_Project_App">
                    <h2 className="title-h2">20 -  أنشئ (repository) من مشروع موجود في جهازك باستخدام (Desktop Github)</h2>
                    <p className="style_divv"> 
                        <b>Desktop Github</b> هو تطبيق سطح المكتب الذي يقدم واجهة رسومية سهلة الاستخدام لإدارة مشاريع <b>GitHub</b>. يساعد <b>GitHub Desktop</b> المستخدمين على التفاعل مع مستودعاتهم على <b>GitHub</b> بشكل أكثر بساطة وفعالية.<br/><br/>
                        رابط التحميل <bdi><a href="https://desktop.github.com/">من هنا</a></bdi>
                    </p>
                    <h3 className="title-h3">1 - قم بإنشاء مستودع (repository) جديد على github </h3>
                    <img src={images.git14} alt="git" className="img"/>
                    <h3 className="title-h3">2 - قم بفتح برنامج (Desktop Github)</h3>
                    <img src={images.git15} alt="git" className="img"/>
                    <img src={images.git16} alt="git" className="img"/>           
                </article>


                <article id="gitignore_file">  
                    <h2 className="title-h2">21 - ملف <bdi>.gitignore</bdi> </h2>
                    <p className="style_divv">  
                        نقوم بإنشاء ملف <bdi><b>.gitignore</b></bdi> بدون امتداد إذا أردنا تجاهل بعض الملفات أو المجلدات أو الأنماط.<br/><br/>
                        فيما يلي مثال لكيفية إنشاء ملف <bdi><b>.gitignore</b></bdi> لاستبعاد مجلد <b>node_modules</b> من مجلد التفاعل، والذي يمكن أن يكون كبيرًا وليس من الضروري تضمينه في المستودع
                    </p>
                    <h3 className="title-h3">1 - تجاهل مجلد </h3>
                    <div className="alert-light rounded" dir="ltr">
                        <div className="bg-secondary text-light rounded-top p-2">&nbsp;.gitignore</div>
                        <div className="alert pb-0"><pre>node_modules/</pre></div>
                    </div>
                    <h3 className="title-h3">2 - تجاهل ملف معين</h3>
                    <div className="alert-light rounded" dir="ltr">
                        <div className="bg-secondary text-light rounded-top p-2">&nbsp;.gitignore</div>
                        <div className="alert pb-0"><pre>exemple.txt</pre></div>
                    </div>
                    <h3 className="title-h3">3 - لتجاهل كافة الملفات ذات الامتداد ".log"، يمكنك إضافة السطر التالي</h3>
                    <div className="alert-light rounded" dir="ltr">
                        <div className="bg-secondary text-light rounded-top p-2">&nbsp;.gitignore</div>
                        <div className="alert pb-0"><pre>*.log</pre></div>
                    </div>
                    <h3 className="title-h3">4 - لتجاهل كافة الملفات والمجلدات التي تبدأ بـ "temp_"</h3>
                    <div className="alert-light rounded" dir="ltr">
                        <div className="bg-secondary text-light rounded-top p-2">&nbsp;.gitignore</div>
                        <div className="alert pb-0"><pre>temp_*</pre></div>
                    </div>
                </article>
                <article id="Create_new_branch">
                    <h2 className="title-h2">22 -  إنشاء فرع جديد (new branch)  </h2>
                    <p className="style_divv">
                        إن إنشاء فرع جديد في <b>Git</b> يتيح لك العمل على ميزات جديدة أو تغييرات في مشروع دون التأثير على شيفرة البرنامج الرئيسية، مما يمنحك مساحة آمنة للتجربة والتعاون مع الآخرين.
                    </p>
                    <h3 className="title-h3">1 - لإنشاء فرع جديد </h3>
                    <CodeCommand>git branch -c My_name_branch</CodeCommand>
                    <h3 className="title-h3">2 - للتبديل إلى الفرع الجديد</h3>
                    <CodeCommand>git checkout My_name_branch</CodeCommand>
                    <h3 className="title-h3">3 - لإنشاء والتحول إلى فرع جديد</h3>
                    <CodeCommand>git branch -b My_name_branch</CodeCommand>
                    <CodeCommand>git add .</CodeCommand>
                    <CodeCommand>git commit -m  "message"</CodeCommand>
                    <CodeCommand>git push</CodeCommand>
                </article>
                <article id="Remove_connection">
                    <h2 className="title-h2"> 23 - قم بإزالة الاتصال بين مجلد في جهاز الكمبيوتر الخاص بك و GitHub</h2>
                    <CodeCommand>rd /s /q .git</CodeCommand>
                </article>
                <article id="SSH_KEY">
                    <h2 className="title-h2"> 24 -  مفاتيح SSH </h2>
                    <p className="style_divv">
                        مفتاح <b>SSH</b> في <b>GitHub</b> هو زوج من المفاتيح التشفيرية (العامة والخاصة) المستخدمة للمصادقة الآمنة عند التفاعل مع خوادم <b>GitHub</b> عبر بروتوكول <b>SSH</b>.<br/>
                        <ul>
                            <li><b>التوليد:</b> تقوم بإنشاء زوج من المفاتيح - العامة والخاصة.</li>
                            <li><b>المصادقة:</b> يرسل جهاز الكمبيوتر الخاص بك المفتاح العام إلى <b>GitHub</b> عند الحاجة.</li>
                            <li><b>التحقق:</b> يتحقق <b>GitHub</b> مما إذا كان المفتاح العام يتطابق مع أي من المفاتيح المرتبطة بحسابك، مما يسمح بالعملية إذا تم العثور على تطابق.</li>
                        </ul>
                        <b>المزايا:</b>
                        <ul>
                            <li> <b>الأمان:</b> ذات أمان عالي، مقاوم للهجمات التي تحاول تخمين كلمات المرور والهجمات الخداعية.</li>
                            <li> <b>الراحة:</b> يقضي على الحاجة لإدخال كلمات المرور مرارًا وتكرارًا.</li>
                            <li> <b>التلقائية:</b> مفيدة لتوجيه المهام بدون تدخل المستخدم.</li>
                            <li> <b>التحكم في الوصول:</b> يتيح التحكم الدقيق في الوصول إلى مستودعات الأكواد والعمليات.</li>
                        </ul>
                        باختصار، تقدم مفاتيح <b>SSH</b> وسيلة آمنة ومريحة وفعالة للتفاعل مع مستودعات وخدمات <b>GitHub</b>.
                    </p>
                    <img src={images.SSH} alt="SSH" className="w-100 border border-2" />
                    <h2 className="title-h3"> 1 - إنشاء مفاتيح SSH  باستخدام Windows PowerShell</h2>
                    <CodeCommand> ssh-keygen -t rsa -b 4096 -C "your_email@example.com"</CodeCommand>
                    <ul>
                        <li><b class="text-danger">-t rsa</b> : يحدد خوارزمية <b>RSA</b> .</li>
                        <li><b class="text-danger">-b 4096</b> : إنشاء مفتاح 4096 بت (أكثر أمانًا من 2048 بت).</li>
                        <li><b class="text-danger">-C "your_email@example.com"</b> : يضيف تعليقًا (استخدم بريدك الإلكتروني الفعلي)..</li>
                    </ul>        
                    <CodePowerShell>   PS C:\Users\Dell{">"} <span class="text-warning">ssh-keygen -t rsa -b 4096 -C "redaesskouni@gmail.com"</span><br />
                Generating public/private rsa key pair.<br />
                Enter file in which to save the key (C:\Users\Dell/.ssh/id_rsa):<br />
                Enter passphrase (empty for no passphrase): **************<br />
                Enter same passphrase again: **************<br />
                Your identification has been saved in C:\Users\Dell/.ssh/id_rsa<br />
                Your public key has been saved in C:\Users\Dell/.ssh/id_rsa.pub<br />
                The key fingerprint is:<br />
                SHA256:pEFh/7r5DdGBKfeRazecdzedcezfghsvBDeC7jIEpF5+Xulhc8 redaeskouni00@gmail.com<br />
                The key's randomart image is:<br />
                <pre style={{whiteSpace: "pre", fontFamily: "monospace"}}> {stylePreTag} </pre>
                PS C:\Users\Dell{">"} <br /><br />
                </CodePowerShell>
            <div>
                <h5 class="title-h5"> 1 - تعيين كلمة المرور (اختياري ولكن موصى به)</h5>
                <ul><li>أدخل كلمة مرور قوية أو اضغط على Enter للتخطي.</li></ul>
                <h5 class="title-h5">2 - ابحث عن مفاتيح SSH الخاصة بك</h5>
                <ul>
                    <li>سيتم تخزين مفاتيحك في:</li>
                    <ul>
                        <li><b>Private key:</b> C:\Users\YourUsername\.ssh\id_rsa </li>
                        <li><b>Public key:</b> C:\Users\YourUsername\.ssh\id_rsa.pub </li>
                    </ul>
                </ul>
            </div>
            <h2 class="title-h5"> 3 - انسخ قيمة مفتاح SSH العام (pub) إلى حساب GitHub الخاص بك</h2>
            <ul><li>استخدم هذا الطلب للحصول عليه </li></ul>
            <CodeCommand>  Get-Content C:\Users\dell\.ssh\id_rsa.pub </CodeCommand>
            <CodePowerShell>
                PS C:\Users\Dell{">"} <span class="text-warning"> Get-Content C:\Users\dell\.ssh\id_rsa.pub</span>
                <div style={{ wordBreak:"break-all"}}> ssh-rsa AAA3NzaAADAQABAAACAQC3eeaCkPZSwVdTqt4C09JWcYTGuYjvJ63/jGhrMsiPEnAsxsJNRWGDYdZCJ+MtkwBGEmM0pfLBG3MWkkNko5VYdCjvaV4ZWOKvH+ammS9AOiIJDPVTaKo3LV7bE7e4sKn3HZHt8K+RkXLRZJQByNm3o73solUm+IEvQLZViKvQZTZzSC9QkO+Kn8aE222zy93/RthtJHIGJUuYwd/hwpC9rCHjeoeeNNMpCKndH7B5wPN3DtUsVVrK0DBwNhP3JBVQIqcYTwCrkkwfp11Ms2b1aIfm7ktfR9zLMlkDmy3WNq83PbC7ZcQ+GX6F+WSqaCeO+JCvRjwOxfdYc/EV2C1hPB1HLyDkzNDEF/SQdrJKy4u7VwB+aP/JH62vyAX5gr5d17TDVGTxzQd/4dInBQ== redaesskouni@gmail.com </div>
                PS C:\Users\Dell{">"} <br /><br />
            </CodePowerShell>
            <ul>
                <li>نسخ المحتوى الذي تم إرجاعه</li>
                <li>انتقل إلى <a href="https://github.com/settings/keys" target="_blank" rel="noreferrer">GitHub SSH Settings</a> .</li>
                <li>انقر <b>"New SSH Key".</b></li>
                <li>العنوان: (على سبيل المثال، "My Laptop Key").</li>
                <li>ألصق المفتاح</li>
                <li>انقر  <b>Add SSH Key</b></li>
            </ul>
            <CodeCommand>git clone git@github.com:RedaFarissi/all-course.git</CodeCommand>
            <h3  className="title-h3">2 - إنشاء مفاتيح SSH  باستخدام Git Bash </h3>
            <ul><li>الصق النص أدناه، مع استبدال البريد الإلكتروني المستخدم في المثال بعنوان بريدك الإلكتروني على <b>GitHub</b>.</li></ul>
            <CodeCommand> ssh-keygen -t ed25519 -C "your_email@example.com" </CodeCommand>
            <h4  className="title-h4">2 - إضافة SSH جديد </h4>
            <ul><li>إذا كان لملف مفتاح SSH العام الخاص بك اسم مختلف عن رمز المثال، فقم بتعديل اسم الملف ليتوافق مع الإعداد الحالي. عند نسخ مفتاحك، لا تضف أي أسطر جديدة أو مسافات بيضاء.</li></ul>
            <CodeCommand>clip &lt; ~/.ssh/id_ed25519.pub </CodeCommand>
            <img src={images.git31} alt="git" className="img" />
            <ul>
                <li>انقر فوق <b>SSH and GPG keys</b></li>
                <li>انقر فوق <b>new SSH Key</b> </li>
            </ul>
            <img src={images.git33} alt="git" className="img" />
            <ul>
                <li>في حقل "العنوان"، أضف تسمية وصفية للمفتاح الجديد. على سبيل المثال، إذا كنت تستخدم كمبيوتر محمولًا شخصيًا، فيمكنك تسمية هذا المفتاح "كمبيوتر محمول شخصي".</li>
                <li>في حقل "key"، الصق مفتاحك العام <kbd>Ctrl + v</kbd>.</li>
            </ul>
            <img src={images.git32} alt="git" className="img" />
            <h4  className="title-h4">3 - استنساخ الريبو باستخدام SSH </h4>
                    <CodeCommand>git clone git@github.com:RedaFarissi/project-name.git</CodeCommand>
                </article>
                
                <article id="submodules">
                    <h2 className="title-h2">25 - الوحدات الفرعية (submodules)</h2>
                        <p className="style_divv">
                            استخدام <b>submodules</b> في <b>Git</b> يتيح لك تضمين مستودع داخل مستودع آخر كمجلد فرعي. يمكن أن يكون ذلك مفيدًا في حالات مثل السيرة الذاتية، حيث قد ترغب في تضمين عدة مشاريع مختلفة قمت بالعمل عليها كوحدات فرعية في مستودع السيرة الذاتية الرئيسي الخاص بك. من خلال ذلك، يمكنك الاحتفاظ بشيفرة كل مشروع في مستودع منفصل بينما لا تزال قادرًا على تضمينه في مستودع السيرة الذاتية الخاص بك.<br/><br/>
                            تساعد <b>submodules</b> أيضًا في الحفاظ على نظافة الشيفرة وقابلية الصيانة عن طريق السماح للمطورين بتفريق مختلف قطع الشيفرة إلى مستودعات منفصلة، كل منها يحمل تاريخ مراقبة الإصدار الخاص به. يمكن أن يسهل هذا تتبع التغييرات والعودة إلى الإصدارات السابقة إذا كان ذلك ضروريًا. بالإضافة إلى ذلك، يمكن للوحدات الفرعية أن تساعد في إدارة التبعيات عن طريق السماح لك بتضمين مكتبات أو أطُقًا خارجية كوحدات فرعية في مشروعك الرئيسي.<br/><br/>
                            بشكل عام، يمكن للوحدات الفرعية في <b>Git</b> أن تساعد في تسهيل عملية التطوير، وتجعل من السهل إدارة التبعيات، وتحافظ على تنظيم شيفرتك وسهولة صيانتها.
                       </p>
                       <h3 className="title-h3"> 1 - ربط المستودع الفارغ بالمستودع الموجود </h3>
                       
                      <h4 className="title-h5">1 - إنشاء مستودع جديد باسم rv-back (هذا المستودع فارغ)</h4>
                        <img src={images.git34} alt="git" className="w-100" />
                      <h4  className="title-h5">2 - لدي بالفعل مستودع آخر باسم (rv) يحتوي على تطبيق React</h4>
                        <img src={images.git35} alt="git" className="w-100" />
                      <div className="alert alert-primary mt-2"><b>بالترتيب التالي نستخدم وحدات فرعية لإضافة مستودع REACT <kbd>rv</kbd> إلى مستودع فارغ <kbd>rv-back</kbd></b></div>
    <div className="alert bg-dark text-light" dir="trl">
    <pre>
C:\Users\Dell\Desktop\env-rv-back\rvBack{">"} <span className="text-warning">git status</span><br />
fatal: not a git repository (or any of the parent directories): .git<br />
<br /><br />
C:\Users\Dell\Desktop\env-rv-back\rvBack{">"} <span className="text-warning">git init</span><br />
Initialized empty Git repository in C:/Users/Dell/Desktop/env-rv-back/rvBack/.git/<br />
<br /><br />
C:\Users\Dell\Desktop\env-rv-back\rvBack{">"} <span className="text-warning">git submodule add git@github.com:RedaFarissi/rv.git front</span><br />
Cloning into 'C:/Users/Dell/Desktop/env-rv-back/rvBack/front'...<br />
Enter passphrase for key '/c/Users/Dell/.ssh/id_rsa':<br />
remote: Enumerating objects: 7034, done.<br />
remote: Counting objects: 100% (1852/1852), done.<br />
remote: Compressing objects: 100% (779/779), done.<br />
remote: Total 7034 (delta 1120), reused 1792 (delta 1071), pack-reused 5182 (from 1)<br />
Receiving objects: 100% (7034/7034), 206.24 MiB | 7.54 MiB/s, done.<br />
Resolving deltas: 100% (3509/3509), done.<br />
warning: in the working copy of '.gitmodules', LF will be replaced by CRLF the next time Git touches it<br />
<br /><br />
C:\Users\Dell\Desktop\env-rv-back\rvBack{">"} <span className="text-warning">git commit -m "give rv react name front in repo rv-back"</span><br />
[master (root-commit) e18f862] give rv react name front in repo rv-back<br />
 2 files changed, 4 insertions(+)<br />
 create mode 100644 .gitmodules<br />
 create mode 160000 front<br />
<br /><br />
C:\Users\Dell\Desktop\env-rv-back\rvBack{">"} <span className="text-warning">git remote add origin git@github.com:RedaFarissi/rv-back.git</span><br />
<br /><br />
C:\Users\Dell\Desktop\env-rv-back\rvBack{">"} <span className="text-warning">git branch -M main</span><br />
<br /><br />
C:\Users\Dell\Desktop\env-rv-back\rvBack{">"} <span className="text-warning">git push -u origin main</span><br />
Enter passphrase for key '/c/Users/Dell/.ssh/id_rsa':  ****************<br />
Enumerating objects: 3, done.<br />
Counting objects: 100% (3/3), done.<br />
Delta compression using up to 8 threads<br />
Compressing objects: 100% (3/3), done.<br />
Writing objects: 100% (3/3), 415 bytes | 103.00 KiB/s, done.<br />
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)<br />
To github.com:RedaFarissi/rv-back.git<br />
 * [new branch] &nbsp; &nbsp;    main -{">"} main<br />
branch 'main' set up to track 'origin/main'.<br />
</pre>
</div>
                    <img src={images.git36} alt="git" className="w-100" />
                    <ul><li><b> عند النقر على "front @ 1a67cd6"  سيأخذك github إلى المستودع rv </b></li></ul>
                    <h3 className="title-h3">2 - ربط المستودعات الموجودة </h3>
                    <h4 className="title-h5">1 - مستودع باسم (rv-back) يحتوي على تطبيق Djando </h4>
                    <img src={images.git37} alt="git" className="w-100" />
                    <h4 className="title-h5">2 - مستودع باسم (rv) يحتوي على تطبيق React </h4>
                    <img src={images.git35} alt="git" className="w-100" />
                    <div className="alert bg-dark text-light mt-3" dir="ltr">
                        (env-rv-back) C:\Users\Dell\Desktop\env-rv-back\rvBack{">"} <span className="text-warning">git submodule add git@github.com:RedaFarissi/rv.git rv</span> <br />
                        Cloning into 'C:/Users/Dell/Desktop/env-rv-back/rvBack/rv'...<br />
                        Enter passphrase for key '/c/Users/Dell/.ssh/id_rsa':    &nbsp; &nbsp;  **************** <br />
                        remote: Enumerating objects: 7059, done.<br />
                        remote: Counting objects: 100% (1877/1877), done.<br />
                        remote: Compressing objects: 100% (794/794), done.<br />
                        remote: Total 7059 (delta 1133), reused 1814 (delta 1081), pack-reused 5182 (from 1)<br />
                        Receiving objects: 100% (7059/7059), 206.50 MiB | 877.00 KiB/s, done.<br />
                        Resolving deltas: 100% (3522/3522), done.<br />
                        warning: in the working copy of '.gitmodules', LF will be replaced by CRLF the next time Git touches it<br />
                        <br />
                        (env-rv-back) C:\Users\Dell\Desktop\env-rv-back\rvBack{">"}<span className="text-warning">git submodule status</span><br />
                        735761d14dd5eab97c26549fba00***b28db5426 rv (heads/main)<br />
                        <br />
                        (env-rv-back) C:\Users\Dell\Desktop\env-rv-back\rvBack{">"} <span className="text-warning">git config --global core.autocrlf input</span><br />
                        <br />
                        (env-rv-back) C:\Users\Dell\Desktop\env-rv-back\rvBack{">"} <span className="text-warning">git add .gitmodules</span><br />
                        <br />
                        (env-rv-back) C:\Users\Dell\Desktop\env-rv-back\rvBack{">"} <span className="text-warning">git add rv</span><br />
                        <br />
                        (env-rv-back) C:\Users\Dell\Desktop\env-rv-back\rvBack{">"} <span className="text-warning">git commit -m "Added rv submodule"</span><br />
                        [main e71f441] Added rv submodule<br />
                        2 files changed, 4 insertions(+)<br />
                        create mode 160000 rv<br />
                        <br />
                        (env-rv-back) C:\Users\Dell\Desktop\env-rv-back\rvBack{">"} <span className="text-warning">git submodule update --init --recursive</span><br />
                        <br />
                        (env-rv-back) C:\Users\Dell\Desktop\env-rv-back\rvBack{">"}<br />
                        <br /><br />
                        (env-rv-back) C:\Users\Dell\Desktop\env-rv-back\rvBack{">"} <span className="text-warning">git push origin main</span><br />
                        Enter passphrase for key '/c/Users/Dell/.ssh/id_rsa':    &nbsp; &nbsp;  **************** <br />
                        Enumerating objects: 5, done.<br />
                        Counting objects: 100% (5/5), done.<br />
                        Delta compression using up to 8 threads<br />
                        Compressing objects: 100% (3/3), done.<br />
                        Writing objects: 100% (3/3), 480 bytes | 480.00 KiB/s, done.<br />
                        Total 3 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)<br />
                        remote: Resolving deltas: 100% (1/1), completed with 1 local object.<br />
                        To github.com:RedaFarissi/rv-back.git<br />
                        8fd4f8b..e71f441  main -{">"} main<br />
                        <br />
                        (env-rv-back) C:\Users\Dell\Desktop\env-rv-back\rvBack{">"} <br />
                    </div>
                    <img src={images.git38} alt="git" className="w-100" />
                    <h5 className="title-h5"> تفصيل : </h5>
                    <h5 className="title-h6">1 - : </h5>
                    <CodeCommand>git submodule add git@github.com:RedaFarissi/rebo-name.git name</CodeCommand>
                    <h5 className="title-h6">2 - عرض قائمة الوحدات الفرعية: </h5>
                    <CodeCommand>git submodule status</CodeCommand>
                    <h5 className="title-h6">3 - إصلاح تحذير نهاية السطر (اختياري ولكن يوصى به) : </h5>
                    <CodeCommand>git config --global core.autocrlf input</CodeCommand>
                    <h5 className="title-h6">4 - إضافة الوحدة الفرعية والالتزام بها : </h5>
                    <CodeCommand>git add .gitmodules</CodeCommand>
                    <CodeCommand>git add name</CodeCommand>
                    <CodeCommand>git commit -m "Added rv submodule"</CodeCommand>
                    <h5 className="title-h6">7 - التحقق من إعداد الوحدة الفرعية : </h5>
                    <CodeCommand>git submodule update --init --recursive</CodeCommand>
                    <h5 className="title-h6">8 - دفع التغييرات : </h5>
                    <CodeCommand>git push origin main</CodeCommand>
                </article>
            </section>
        </main>
        <Footer 
            blockChildStyle={{width: "100%"}}
        />
    </>
    )
}        