import { CodeHighlighter } from "../path";
import images from "./imagesGit";
import codes from "../../assests/codes/git/git"

export default function Git(props){
    
    const powerShell_list = Object.keys(codes);

    const arrays = powerShell_list.map(e => <li className="list-group-item">
        <a href={`/git#${e}`}>GIT {e.replace(/_/g, ' ')}</a>
    </li>);

    return(
        <main>
            <aside className="aside">
                <h5 className="mt-3">Git Tutorials</h5>
                <ul className="list-group m-0">
                    {arrays}
                </ul>
            </aside>
            <section className="section-conetent">
                <h1 className="heading-style-html"> Git and  github</h1>
                <article id="Introduction">
                    <h2 className="title-h2 mt-5">1 - مقدمة عن Git</h2>
                    <p className="style_divv">
                        Git هو نظام تحكم في النسخ يُستخدم بشكل رئيسي في إدارة وتتبع التغييرات على ملفات المشروع البرمجي. تم تطوير Git بواسطة لينوس تورفالدز، وهو نظام مفتوح المصدر يوفر العديد من المزايا للمطورين البرمجيين والفرق البرمجية.<br/><br/>
                        يتيح Git للمستخدمين تسجيل تغييراتهم على ملفات المشروع وتتبع تاريخ هذه التغييرات. يتميز Git بالفعالية في التعامل مع الفروع (Branches)، حيث يمكن للمطورين إنشاء فروع جديدة لتجربة الميزات أو إصلاح الأخطاء دون التأثير على الكود الرئيسي.<br/><br/>
                        من بين المفاهيم الرئيسية في Git:<br/><br/>
                        <ul>
                            <li><b className="text-success">التعقب (Tracking):</b> يتيح Git تعقب التغييرات التي تم إجراؤها على الملفات، مما يسمح للمستخدم بفهم تاريخ وتدفق العمل.</li>
                            <li><b className="text-success">الفروع (Branches):</b> يُمكن إنشاء فروع جديدة للعمل على ميزات جديدة أو إصلاح الأخطاء دون التأثير على الكود الرئيسي.</li>
                            <li><b className="text-success">الالتزامات (Commits):</b> يُمكن للمستخدم تحديد نقاط في تاريخ المشروع تُعرف باسم "commits"، حيث يُسجل كل الالتزام تغييرات محددة.</li>
                            <li><b className="text-success">الدمج (Merging):</b> عملية جمع تغييرات فرع بتلك الموجودة في فرع آخر، ويُستخدم لدمج الأكواد المختلفة بطريقة سلسة.</li>
                            <li><b className="text-success">التعارضات (Conflicts):</b> قد تحدث التعارضات عند محاولة دمج تغييرات تتعارض مع بعضها البعض، ويتعين حل هذه التعارضات يدويًا.</li>
                            <li><b className="text-success">Git</b> يعد أحد أنظمة التحكم في النسخ الأكثر استخدامًا في مجال تطوير البرمجيات، ويسهم في تحسين تعاون فرق العمل وإدارة تاريخ المشروع بشكل فعال.</li>
                        </ul><br/><br/>

                        هناك العديد من خدمات استضافة الويب Git المتاحة، ولكل منها ميزاتها وعروضها الخاصة.<br/><br/>
                        <ul>
                            <li className="mt-3"><b className="text-success">GitHub :</b> واحدة من أكثر النظم استخدامًا على نطاق واسع لاستضافة مستودعات Git. تقدم ميزات مثل طلبات السحب، والمشاكل، ولوحات المشروع، والإجراءات.</li>
                            <li className="mt-3"><b className="text-success">GitLab :</b> مماثل لـ GitHub، يوفر GitLab منصة لاستضافة مستودعات Git مع ميزات إضافية مثل التكامل المستمر والنشر المستمر وسجل الحاويات.</li>
                            <li className="mt-3"><b className="text-success">Bitbucket :</b> خدمة استضافة مستودعات Git من قِبل Atlassian. تقدم إدارة مستودعات Git وتعاون في الكود والتكامل مع أدوات Atlassian الأخرى.</li>
                            <li className="mt-3"><b className="text-success">Azure DevOps :</b> منصة مايكروسوفت التي تقدم مجموعة من أدوات التطوير، بما في ذلك استضافة مستودعات Git وأتمتة البناء وإدارة الإصدار وغيرها.</li>
                            <li className="mt-3"><b className="text-success">AWS CodeCommit :</b> خدمة إدارة المصدر الآمنة والقابلة للتوسع من Amazon تجعل من السهل على الفِرَق استضافة مستودعات Git.</li>
                            <li className="mt-3"><b className="text-success">Gitea :</b> خدمة Git ذاتية الاستضافة خفيفة الوزن وسهلة التثبيت. إنها خيار جيد للأفراد أو الفِرَق الصغيرة الذين يرغبون في استضافة مستودعات Git الخاصة بهم.</li>
                            <li className="mt-3"><b className="text-success">GitKrakenGlo Boards :</b> في حين أن GitKraken معروفة أساسًا بعميلها لـ Git، إلا أن GitKraken Glo Boards تقدم وسيلة لإدارة المهام والمشاكل بطريقة جذابة بصرياً.</li>
                        </ul><br/><br/>
                        هذه أمثلة قليلة فقط، وهناك العديد من خدمات استضافة مستودعات Git الأخرى المتاحة، كل واحدة منها لديها ميزات فريدة وجمهور مستهدف. اختيار خدمة استضافة Git يعتمد على عوامل مثل حجم الفِرَق، ومتطلبات المشروع، واحتياجات التكامل، والتفضيلات الشخصية.<br/>
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
                    <img src={images.git3} alt="git" className="img"/>
                </article>

                <article id="Repository">
                    <h2 className="title-h2">4 - المخزن (Repository)</h2>
                    <p className="style_divv">
                        المستودع Git هو المجلد <bdi><b>.git/</b></bdi> داخل مشروع. يقوم هذا المستودع بتتبع جميع التغييرات التي تم إجراؤها على الملفات في مشروعك، بناءً تاريخًا على مر الوقت. وهذا يعني أنه إذا قمت بحذف مجلد <bdi><b>.git/</b></bdi> ، فإنك تحذف تاريخ مشروعك.<br/><br/>
                        في حال كان لديك مشروعين، يجب عليك إنشاء 2 مستودع.
                    </p>
                </article>

                <article id="Branch">
                    <h2 className="title-h2">5 - الفرع (Branch)</h2>
                    <p className="style_divv">
                        الفرع في نظام التحكم بالنسخ Git يمثل نسخة من سجل المشروع تعيش بشكل مستقل عن الفرع الرئيسي (الماستر). يستخدم الفرع لتطوير ميزات جديدة، إصلاح الأخطاء، أو تجربة تغييرات دون أن تؤثر على الكود الرئيسي.<br/><br/>
                        باستخدام الفروع، يمكن للفرق البرمجية العمل بشكل متزامن على أجزاء مختلفة من المشروع دون التأثير المباشر على بعضها البعض. بمجرد أن يكتمل العمل في الفرع ويتم اختباره، يمكن دمجه بسهولة مع الفرع الرئيسي أو أي فرع آخر.<br/><br/>
                        يساعد استخدام الفروع في تحسين التعاون وإدارة التغييرات بشكل فعّال في الفرق البرمجية.<br/>
                    </p>
                </article>

                <article id="Local_Repository">
                    <h2 className="title-h2">6 - المستودع المحلي (Local Repository) </h2>
                    <p className="style_divv">
                        المستودع المحلي في نظام التحكم بالنسخ Git هو النسخة المخزنة على جهاز الحاسوب الخاص بك. يتمثل هذا المستودع في المجلد <bdi><b>.git/</b></bdi> داخل مشروعك، الذي يحتوي على تاريخ جميع التغييرات التي تم إجراؤها على ملفات المشروع.<br/><br/>
                        بصفة عامة، يُستخدم المستودع المحلي لتتبع التاريخ المحلي لمشروعك ولتنفيذ العمليات المختلفة مثل إنشاء فروع جديدة، وتنفيذ الالتزامات، والتحويل بين الفروع. يُعتبر المستودع المحلي قاعدة للعمل اليومي ويكون متصلاً بالمستودع البعيد (Remote Repository)، سواء كان ذلك عبر خدمات استضافة مثل GitHub أو GitLab أو غيرها.
                    </p>
                </article>

                <article id="Remote_Repository">
                    <h2 className="title-h2">7 - المستودع البعيد (Remote Repository)</h2>
                    <p className="style_divv">
                        المستودع البعيد في نظام التحكم بالنسخ Git يمثل نسخة مخزنة على خادم بعيد، مثل خدمات استضافة مثل GitHub أو GitLab. يتيح المستودع البعيد للمستخدمين تبادل التغييرات بين أجهزتهم والتعاون على المشروع.<br/><br/>
                        عند العمل مع المستودع البعيد، يمكن للمطورين استرجاع التحديثات الأخيرة، مشاركة تغييراتهم، والتحقق من تقدم العمل. يتم تنسيق هذه التبادلات باستخدام أوامر Git مثل git push لرفع التحديثات إلى المستودع البعيد، وgit pull لاسترجاع التحديثات منه.<br/><br/>
                        باستخدام المستودع البعيد، يتسنى للفِرَق البرمجية العمل بشكل متزامن على مشروع مشترك، وتحقيق التواصل الفعّال في تطوير البرمجيات.
                    </p>
                </article>

                <article id="Pull_Request">
                    <h2 className="title-h2">8 - طلب السحب (Pull Request)</h2>
                    <p className="style_divv">
                        في سياق نظام التحكم بالنسخ Git، "طلب السحب" يُشير إلى عملية اقتراح التغييرات من فرع فرعي إلى الفرع الرئيسي (عادةً ما يكون الماستر) في مستودع مشروع. عندما يقوم مطور بإجراء تعديلات في فرعه الخاص، يقوم بإنشاء طلب سحب لإعلام الفريق الرئيسي بوجود تحديثات يرغب في دمجها.<br/><br/>
                        طلب السحب يحتوي عادة على وصف للتغييرات التي تم إجراؤها وقائمة بالتعهيدات الجديدة. يُمكن لأعضاء الفريق أو المشاركين الآخرين مراجعة هذه التغييرات وإبداء التعليقات أو الملاحظات. عند الموافقة على طلب السحب، يمكن دمج التغييرات في الفرع الرئيسي.<br/><br/>
                        هذه العملية تُسهم في إدارة عملية التطوير المشترك وتسهل التعاون بين المطورين على تغييرات المشروع.
                    </p>
                </article>

                <article id="Clone_Repository">
                    <h2 className="title-h2">9 -  لاستنساخ ال repository من github استخدم</h2>
                    <p className="style_divv">
                        في سياق نظام التحكم بالنسخ Git، يُشير "الاستنساخ" إلى عملية إنشاء نسخة محلية من مستودع بعيد (Remote Repository). عندما يقوم المستخدم بعملية الاستنساخ، يقوم Git بتحميل كل البيانات والتاريخ المتعلقين بالمستودع البعيد إلى الجهاز المحلي.<br/><br/>
                        هذه العملية تسمح للمطور بالعمل على المشروع بشكل محلي، وتوفير القدرة على إجراء التعهيدات والتحديثات بدون الحاجة إلى اتصال دائم بالمستودع البعيد. بمجرد إتمام العمل المحلي، يمكن تحديث المستودع البعيد بالتغييرات الجديدة باستخدام أوامر Git مثل git push.
                    </p>
                    <CodeHighlighter  code={codes.Clone_Repository[0]} addclassName="mt-3 mb-3" copie={true}/>
                    <CodeHighlighter  code={codes.Clone_Repository[1]} addclassName="mt-3 mb-3" copie={true}/>
                    <div className="mital">متال : </div>
                    <ul>
                        <li>للفهم بشكل أفضل قم بإنشاء repository في github أطلق عليه اسم first_repo</li>
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
                        git status هو أمر في نظام التحكم بالنسخ Git يستخدم لعرض حالة ملفات المشروع الحالية. عند تنفيذ هذا الأمر في سطر الأوامر، يقوم Git بإظهار قائمة بالتعديلات التي تم إجراؤها على الملفات في المشروع. يتيح git status للمستخدم متابعة تغييرات الملفات والفهم إذا ما كانت هناك ملفات تم تعديلها أو إضافتها أو حذفها.
                    </p>
                    <ul>
                       <li>إستخدم <kbd><bdi>git status</bdi></kbd> لعرض حالة ملفات المشروع الحالية </li>
                    </ul>
                    <img src={images.git22} alt="git" className="img"/>
                </article>

                <article id="git_add">
                    <h2 className="title-h2">12 - الأمر (git add)</h2>
                    <p className="style_divv">
                        git add هو أمر يستخدم لإضافة تغييرات الملفات إلى المرحلة (staging area) في Git، استعدادًا للتأكيد (commit). عندما تقوم بتنفيذ git add لملف أو مجلد، يتم تتبع التغييرات في هذه الملفات وإضافتها إلى الفهرس المؤقت (staging area)، والتي تمثل مجموعة الملفات التي ستكون جاهزة للتأكيد في التحديث القادم.
                    </p>
                    <CodeHighlighter  code={codes.git_add[0]} addclassName="mt-3 mb-3" copie={true}/>
                    <CodeHighlighter  code={codes.git_add[1]} addclassName="mt-3 mb-3" copie={true}/>
                    <div className="mx-3 text-success">أو</div>
                    <CodeHighlighter  code={codes.git_add[2]} addclassName="mt-3 mb-3" copie={true}/>
                    <div className="mx-3 text-success">أو</div>
                    <CodeHighlighter  code={codes.git_add[3]} addclassName="mt-3 mb-3" copie={true}/>
                    <img src={images.git24} alt="git" className="img"/>
                    <ul><li>أنت الآن في (staging area) وأنت على استعداد ل (commit)</li></ul>
                    <hr />
                    <h3 className="title-h3">إذا كنت تريد إزالة <kbd><bdi>git add</bdi></kbd> من repository الخاص بك إستخدام</h3>
                    <CodeHighlighter  code={codes.git_add[4]} addclassName="mt-3 mb-3" copie={true}/>
                </article>

                <article id="git_commit">
                    <h2 className="title-h2">13 - الأمر (git commit)</h2>
                    <p className="style_divv">
                        في نظام التحكم بالنسخ Git، يُشير مصطلح "Commit" إلى عملية تسجيل التغييرات التي تم إجراؤها على الملفات في <bdi>repository</bdi>. عندما يقوم المستخدم بعملية <bdi>(commit)</bdi> ، يتم تضمين مجموعة من التغييرات التي تمثل حالة معينة للمشروع في تلك اللحظة.<br/><br/>
                        عملية Commit تُستخدم لإنشاء نقطة في تاريخ المشروع، وتسجل تفاصيل التغييرات التي تمت. يتم تعيين رسالة <bdi>(commit)</bdi> لشرح الغرض أو الهدف من تلك التغييرات. يعتبر Commit جزءًا أساسيًا من عملية تتبع تاريخ المشروع ويوفر إمكانية الرجوع إلى حالة محددة في أي وقت.
                    </p>
                    <CodeHighlighter  code={codes.git_commit[0]} addclassName="mt-3 mb-3" copie={true}/>
                    <img src={images.git25} alt="git" className="img"/>
                    <img src={images.git26} alt="git" className="img"/>
                    <ul><li>أنت الآن في الريبو المحلي (local repo) وأنت جاهز لدفع البيانات داخل الريبو البعيد <bdi>(remote repo)</bdi></li></ul>
                    <hr />
                    <h3 className="title-h3">إذا كنت تريد إزالة <kbd><bdi>git commit</bdi></kbd> والعودة إلى (staging area) </h3>
                    <CodeHighlighter  code={codes.git_commit[1]} addclassName="mt-3 mb-3" copie={true}/>
                </article>

                <article id="git_branch">
                    <h2 className="title-h2">14 - الأمر (git branch)</h2>
                    <p className="style_divv">
                        استخدم الأمر (git branch) أدناه للحصول على اسم الفرع الذي تعمل فيه في الريبو المحلي الخاص بك. <br/><br/>
                        الفرع هو إصدار واحد من قاعدة التعليمات البرمجية، ويمكن أن يكون لديك فروع متعددة لإصدار متعدد
                    </p>
                    <CodeHighlighter  code={codes.git_branch} addclassName="mt-3 mb-3" copie={true}/>
                    <img src={images.git27} alt="git" className="img"/>
                </article>

                <article id="git_remote">
                    <h2 className="title-h2">15 - الأمر (git remote -v)</h2>
                    <p className="style_divv">
                        git remote -v هو أمر يُستخدم لعرض عناوين URL لجميع النسخ البعيدة (remote) التي تم تكوينها في مشروع Git. يظهر هذا الأمر عادة العناوين الرابطة بمستودع النسخ البعيد من حيث يمكن أن يتم جلب (fetch) وإرسال (push) التغييرات.
                    </p>
                    <CodeHighlighter  code={codes.git_remote} addclassName="mt-3 mb-3" copie={true}/>
                    <img src={images.git28} alt="git" className="img"/>
                </article>

                <article id="git_push">
                    <h2 className="title-h2">16 - الأمر (git push)</h2>
                    <p className="style_divv">
                        في نظام التحكم بالنسخ Git، "الدفع" يشير إلى عملية نقل التعهيدات والتحديثات المحلية إلى المستودع البعيد (Remote Repository). عندما يقوم المستخدم بعملية الدفع، يتم رفع التعهيدات التي قام بها محليًا إلى المكان البعيد، مما يتيح للفرق البرمجية والمطورين الآخرين الوصول إلى أحدث التغييرات.<br/><br/>
                        عملية الدفع تكون ضرورية عندما يكون المطور قد قام بإجراء تغييرات محلية ويرغب في تحديث المستودع البعيد بتلك التغييرات. تستخدم أمر (git push) لتحديث المستودع البعيد بالتعهيدات والتحديثات الحديثة التي تم إجراؤها محليًا.
                    </p>
                    <CodeHighlighter  code={codes.git_push[0]} addclassName="mt-3 mb-3" copie={true}/>
                    <CodeHighlighter  code={codes.git_push[1]} addclassName="mt-3 mb-3" copie={true}/>
                    <img src={images.git29} alt="git" className="img"/>
                    <ul><li>كما ترون تم تعديل (remote repo)</li></ul> 
                    <img src={images.git30} alt="git" className="img"/>  
                </article>

                <article id="Work_as_a_team">
                    <h2 className="title-h2"> 17 - العمل كفريق </h2>
                    <p className="style_divv">
                        إذا كنت تريد العمل كفريق مع مطورين آخرين، فيجب على المسؤول إضافتك إلى الفريق.<br/><br/>
                        إذا كنت المسؤول وترغب في إضافة شخص ما إلى الفريق، فانتقل إلى setting وانقر على Collaborators وانقر على زر add peaple.<br/>
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
                    <CodeHighlighter  code={codes.git_pull[0]} addclassName="mt-3 mb-3" copie={true}/>
                    <CodeHighlighter  code={codes.git_pull[1]} addclassName="mt-3 mb-3" copie={true}/>
                    <CodeHighlighter  code={codes.git_pull[2]} addclassName="mt-3 mb-3" copie={true}/>
                </article>


                <article id="Existing_Project_powerShell">
                    <h2 className="title-h2">19 - أنشئ repository من مشروع موجود في جهازك باستخدام powerShell</h2>
                    <h3 className="title-h3">1 - قم بإنشاء مستودع (repository) جديد على github </h3>
                    <img src={images.git14} alt="git" className="img"/>
                    <h3  className="title-h3">2 - استخدم هذه الأوامر في المجلد الذي تريد تحميله في github </h3>
                    <CodeHighlighter  code={codes.Existing_Project_powerShell[0]} addclassName="mt-3 mb-3" copie={true}/>
                    <CodeHighlighter  code={codes.Existing_Project_powerShell[1]} addclassName="mt-3 mb-3" copie={true}/>
                    <CodeHighlighter  code={codes.Existing_Project_powerShell[2]} addclassName="mt-3 mb-3" copie={true}/>
                    <CodeHighlighter  code={codes.Existing_Project_powerShell[3]} addclassName="mt-3 mb-3" copie={true}/>
                    <CodeHighlighter  code={codes.Existing_Project_powerShell[4]} addclassName="mt-3 mb-3" copie={true}/>
                </article>


                <article id="Existing_Project_App">
                    <h2 className="title-h2">20 -  أنشئ (repository) من مشروع موجود في جهازك باستخدام (Desktop Github)</h2>
                    <p className="style_divv"> 
                        Desktop Github هو تطبيق سطح المكتب الذي يقدم واجهة رسومية سهلة الاستخدام لإدارة مشاريع GitHub. يساعد GitHub Desktop المستخدمين على التفاعل مع مستودعاتهم على GitHub بشكل أكثر بساطة وفعالية.<br/><br/>
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
                        نقوم بإنشاء ملف <bdi>.gitignore</bdi> بدون امتداد إذا أردنا تجاهل بعض الملفات أو المجلدات أو الأنماط.<br/><br/>
                        فيما يلي مثال لكيفية إنشاء ملف <bdi>.gitignore</bdi> لاستبعاد مجلد node_modules من مجلد التفاعل، والذي يمكن أن يكون كبيرًا وليس من الضروري تضمينه في المستودع
                    </p>
                    <h4>1 - تجاهل مجلد </h4>
                    <div className="alert-light rounded" dir="ltr">
                        <div className="bg-secondary text-light rounded-top p-2">&nbsp;.gitignore</div>
                        <div className="alert pb-0"><pre>node_modules/</pre></div>
                    </div>
                    <h4>2 - تجاهل ملف معينs</h4>
                    <div className="alert-light rounded" dir="ltr">
                        <div className="bg-secondary text-light rounded-top p-2">&nbsp;.gitignore</div>
                        <div className="alert pb-0"><pre>exemple.txt</pre></div>
                    </div>
                    <h4>3 - لتجاهل كافة الملفات ذات الامتداد ".log"، يمكنك إضافة السطر التالي</h4>
                    <div className="alert-light rounded" dir="ltr">
                        <div className="bg-secondary text-light rounded-top p-2">&nbsp;.gitignore</div>
                        <div className="alert pb-0"><pre>*.log</pre></div>
                    </div>
                    <h4>4 - لتجاهل كافة الملفات والمجلدات التي تبدأ بـ "temp_"</h4>
                    <div className="alert-light rounded" dir="ltr">
                        <div className="bg-secondary text-light rounded-top p-2">&nbsp;.gitignore</div>
                        <div className="alert pb-0"><pre>temp_*</pre></div>
                    </div>
                </article>

                <article id="submodules">
                    <h2 className="title-h2">22 - الوحدات الفرعية (submodules)</h2>
                        <p className="style_divv">
                            استخدام submodules في Git يتيح لك تضمين مستودع داخل مستودع آخر كمجلد فرعي. يمكن أن يكون ذلك مفيدًا في حالات مثل السيرة الذاتية، حيث قد ترغب في تضمين عدة مشاريع مختلفة قمت بالعمل عليها كوحدات فرعية في مستودع السيرة الذاتية الرئيسي الخاص بك. من خلال ذلك، يمكنك الاحتفاظ بشيفرة كل مشروع في مستودع منفصل بينما لا تزال قادرًا على تضمينه في مستودع السيرة الذاتية الخاص بك.<br/><br/>
                            تساعد submodules أيضًا في الحفاظ على نظافة الشيفرة وقابلية الصيانة عن طريق السماح للمطورين بتفريق مختلف قطع الشيفرة إلى مستودعات منفصلة، كل منها يحمل تاريخ مراقبة الإصدار الخاص به. يمكن أن يسهل هذا تتبع التغييرات والعودة إلى الإصدارات السابقة إذا كان ذلك ضروريًا. بالإضافة إلى ذلك، يمكن للوحدات الفرعية أن تساعد في إدارة التبعيات عن طريق السماح لك بتضمين مكتبات أو أطُقًا خارجية كوحدات فرعية في مشروعك الرئيسي.<br/><br/>
                            بشكل عام، يمكن للوحدات الفرعية في Git أن تساعد في تسهيل عملية التطوير، وتجعل من السهل إدارة التبعيات، وتحافظ على تنظيم شيفرتك وسهولة صيانتها.
                      </p>
                      <h4>طريقة الكتابة</h4>
                      <CodeHighlighter  code={codes.submodules[0]} addclassName="mt-3 mb-3" copie={true}/>
                      <div className="mital">متال : </div>
                      <p>في هذه الحالة استخدمت submodule لإنشاء (repo) يحتوي مجلد front , (<bdi>front/</bdi> هو مجلد React) </p>
                      <CodeHighlighter  code={codes.submodules[1]} addclassName="mt-3 mb-3" copie={true}/>
                      <CodeHighlighter  code={codes.submodules[2]} addclassName="mt-3 mb-3" copie={true}/>
                      <p> أستخدم هذا الأمر في مسار project/  لأنه في مجلد project لدي واجهة (project/front)</p>
                      <CodeHighlighter  code={codes.submodules[3]} addclassName="mt-3 mb-3" copie={true}/>
                      <CodeHighlighter  code={codes.submodules[4]} addclassName="mt-3 mb-3" copie={true}/>
                      <CodeHighlighter  code={codes.submodules[5]} addclassName="mt-3 mb-3" copie={true}/>
                      <p> يمكنك الآن إنشاء rebo آخر في github ودفع المجلد الأب فيه وستكون النتيجة ربط rebo الأول والثاني </p>
                </article>

                <article id="Create_new_branch">
                    <h2 className="title-h2">23 -  إنشاء فرع جديد (new branch)  </h2>
                    <p className="style_divv">
                        إن إنشاء فرع جديد في Git يتيح لك العمل على ميزات جديدة أو تغييرات في مشروع دون التأثير على شيفرة البرنامج الرئيسية، مما يمنحك مساحة آمنة للتجربة والتعاون مع الآخرين.
                    </p>
                    <h3 className="title-h3">1 - لإنشاء فرع جديد </h3>
                    <CodeHighlighter  code={codes.Create_new_branch[0]} addclassName="mt-3 mb-3" copie={true}/>
                    <h3 className="title-h3">2 - للتبديل إلى الفرع الجديد</h3>
                    <CodeHighlighter  code={codes.Create_new_branch[1]} addclassName="mt-3 mb-3" copie={true}/>
                    <h3 className="title-h3">3 - لإنشاء والتحول إلى فرع جديد</h3>
                    <CodeHighlighter  code={codes.Create_new_branch[2]} addclassName="mt-3 mb-3" copie={true}/>
                    <CodeHighlighter  code={codes.Create_new_branch[3]} addclassName="mt-3 mb-3" copie={true}/>
                    <CodeHighlighter  code={codes.Create_new_branch[4]} addclassName="mt-3 mb-3" copie={true}/>
                    <CodeHighlighter  code={codes.Create_new_branch[5]} addclassName="mt-3 mb-3" copie={true}/>
                </article>
                
                <article id="Remove_connection">
                    <h2 className="title-h2"> 24 - قم بإزالة الاتصال بين مجلد في جهاز الكمبيوتر الخاص بك و GitHub</h2>
                    <CodeHighlighter  code={codes.Remove_connection} addclassName="mt-3 mb-3" copie={true}/>
                </article>

            </section>
        </main>
    )
}        