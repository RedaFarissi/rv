import { CodeHighlighter } from "../path";
import images from "./imagesGit";
export default function Git(props){
    const codes = {
        introduction: "Introduction",     
        repository:"",
        branch:"",
        local_Repository:"",
        remote_Repository:"",
        commit:"",
        clone:"",
        push:"",
        pull:"",
        pullRequest:"",
        create_project_in_github_without_cmd:"",
        to_clone_repo_from_github_use_cmd:"",
        git_status:"",
        git_add:"",
        git_commit:"",
        git_branch:"",
        git_remoteV:"",
        git_push:"",
        git_team:"",
        git_pull:"",
        git_config:"",
        create_Repository_From_Existing_Project_with_Desktop_app:"",
        create_Repository_From_Existing_Project_with_Command_Prompt:"",
        gitignore_file:"",
        remove_the_existing_remote_repository:"",
        submodules_in_Git:"",
        create_new_branch:"",
        remove_the_connection_between_a_folder_in_your_computer_and_GitHub:"",
    }

    const powerShell_list = Object.keys(codes);

    const arrays = powerShell_list.map(e => <li className="list-group-item">
        <a href={`/git#${e}`}>GIT {e.replace(/_/g, ' ')}</a>
    </li>);

     return(
        <main>
            <aside className="aside">
                <h5 className="ms-2 mt-3">Git</h5>
                <ul className="list-group m-0">
                    {arrays}
                </ul>
            </aside>
            <section className="section-conetent">
                <h1 className="heading-style-html"> PowerShell Most Use (Windows) </h1>
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

                <article id="Introduction">
                    <h2 className="title-h2 mt-5">2 - تثبيت Git لنظام التشغيل Windows</h2>
                    <p className="style_divv">
                        <ul>
                            <li><a href="https://gitforwindows.org/" target="_blanck" className="text-light">انقر لتثبيت Git لنظام التشغيل Windows</a></li>
                            <li>سيتم تثبيت البرنامج في: <kbd>C:\Program Files\</kbd></li>
                            <li>أعد تشغيل جهازكe</li>
                        </ul>
                    </p>
                </article>

                <article>
                    <h2 className="title-h2 mt-5">2 - مخطط سير عمل Git</h2>
                    <img src={images.git3} className="w-100 my-4"/>
                </article>

                <article id="repository">
                    <h2 className="title-h2">2 - المخزن (Repository)</h2>
                    <p className="style_divv">
                        المستودع Git هو المجلد <bdi><b>.git/</b></bdi> داخل مشروع. يقوم هذا المستودع بتتبع جميع التغييرات التي تم إجراؤها على الملفات في مشروعك، بناءً تاريخًا على مر الوقت. وهذا يعني أنه إذا قمت بحذف مجلد <bdi><b>.git/</b></bdi> ، فإنك تحذف تاريخ مشروعك.<br/><br/>
                        في حال كان لديك مشروعين، يجب عليك إنشاء 2 مستودع.
                    </p>
                </article>

                <article id="branch">
                    <h2 className="title-h2">3 - الفرع (Branch)</h2>
                    <p className="style_divv">
                        الفرع في نظام التحكم بالنسخ Git يمثل نسخة من سجل المشروع تعيش بشكل مستقل عن الفرع الرئيسي (الماستر). يستخدم الفرع لتطوير ميزات جديدة، إصلاح الأخطاء، أو تجربة تغييرات دون أن تؤثر على الكود الرئيسي.<br/><br/>
                        باستخدام الفروع، يمكن للفرق البرمجية العمل بشكل متزامن على أجزاء مختلفة من المشروع دون التأثير المباشر على بعضها البعض. بمجرد أن يكتمل العمل في الفرع ويتم اختباره، يمكن دمجه بسهولة مع الفرع الرئيسي أو أي فرع آخر.<br/><br/>
                        يساعد استخدام الفروع في تحسين التعاون وإدارة التغييرات بشكل فعّال في الفرق البرمجية.<br/>
                    </p>
                </article>

                <article id="local_Repository">
                    <h2 className="title-h2">4 - المستودع المحلي (Local Repository) </h2>
                    <p className="style_divv">
                        المستودع المحلي في نظام التحكم بالنسخ Git هو النسخة المخزنة على جهاز الحاسوب الخاص بك. يتمثل هذا المستودع في المجلد <bdi><b>.git/</b></bdi> داخل مشروعك، الذي يحتوي على تاريخ جميع التغييرات التي تم إجراؤها على ملفات المشروع.<br/><br/>
                        بصفة عامة، يُستخدم المستودع المحلي لتتبع التاريخ المحلي لمشروعك ولتنفيذ العمليات المختلفة مثل إنشاء فروع جديدة، وتنفيذ الالتزامات، والتحويل بين الفروع. يُعتبر المستودع المحلي قاعدة للعمل اليومي ويكون متصلاً بالمستودع البعيد (Remote Repository)، سواء كان ذلك عبر خدمات استضافة مثل GitHub أو GitLab أو غيرها.
                    </p>
                </article>

                <article id="remote_Repository">
                    <h2 className="title-h2">5 - المستودع البعيد (Remote Repository)</h2>
                    <p className="style_divv">
                        المستودع البعيد في نظام التحكم بالنسخ Git يمثل نسخة مخزنة على خادم بعيد، مثل خدمات استضافة مثل GitHub أو GitLab. يتيح المستودع البعيد للمستخدمين تبادل التغييرات بين أجهزتهم والتعاون على المشروع.<br/><br/>
                        عند العمل مع المستودع البعيد، يمكن للمطورين استرجاع التحديثات الأخيرة، مشاركة تغييراتهم، والتحقق من تقدم العمل. يتم تنسيق هذه التبادلات باستخدام أوامر Git مثل git push لرفع التحديثات إلى المستودع البعيد، وgit pull لاسترجاع التحديثات منه.<br/><br/>
                        باستخدام المستودع البعيد، يتسنى للفِرَق البرمجية العمل بشكل متزامن على مشروع مشترك، وتحقيق التواصل الفعّال في تطوير البرمجيات.
                    </p>
                </article>

                <article id="commit">
                    <h2 className="title-h2">6 - التعهد (Commit) </h2>
                    <p className="style_divv">
                        في نظام التحكم بالنسخ Git، يُشير مصطلح "Commit" إلى عملية تسجيل التغييرات التي تم إجراؤها على الملفات في المستودع. عندما يقوم المستخدم بعملية تعهد، يتم تضمين مجموعة من التغييرات التي تمثل حالة معينة للمشروع في تلك اللحظة.<br/><br/>
                        عملية Commit تُستخدم لإنشاء نقطة في تاريخ المشروع، وتسجل تفاصيل التغييرات التي تمت. يتم تعيين رسالة التعهد لشرح الغرض أو الهدف من تلك التغييرات. يعتبر Commit جزءًا أساسيًا من عملية تتبع تاريخ المشروع ويوفر إمكانية الرجوع إلى حالة محددة في أي وقت.
                    </p>
                </article>

                <article id="clone">
                    <h2 className="title-h2">7 - الاستنساخ (Clone)</h2>
                    <p className="style_divv">
                        في سياق نظام التحكم بالنسخ Git، يُشير "الاستنساخ" إلى عملية إنشاء نسخة محلية من مستودع بعيد (Remote Repository). عندما يقوم المستخدم بعملية الاستنساخ، يقوم Git بتحميل كل البيانات والتاريخ المتعلقين بالمستودع البعيد إلى الجهاز المحلي.<br/><br/>
                        هذه العملية تسمح للمطور بالعمل على المشروع بشكل محلي، وتوفير القدرة على إجراء التعهيدات والتحديثات بدون الحاجة إلى اتصال دائم بالمستودع البعيد. بمجرد إتمام العمل المحلي، يمكن تحديث المستودع البعيد بالتغييرات الجديدة باستخدام أوامر Git مثل git push.
                    </p>
                </article>

                <article id="push">
                    <h2 className="title-h2">8 - الدفع (Push) </h2>
                    <p className="style_divv">
                        في نظام التحكم بالنسخ Git، "الدفع" يشير إلى عملية نقل التعهيدات والتحديثات المحلية إلى المستودع البعيد (Remote Repository). عندما يقوم المستخدم بعملية الدفع، يتم رفع التعهيدات التي قام بها محليًا إلى المكان البعيد، مما يتيح للفرق البرمجية والمطورين الآخرين الوصول إلى أحدث التغييرات.<br/><br/>
                        عملية الدفع تكون ضرورية عندما يكون المطور قد قام بإجراء تغييرات محلية ويرغب في تحديث المستودع البعيد بتلك التغييرات. تستخدم أمر Git git push لتحديث المستودع البعيد بالتعهيدات والتحديثات الحديثة التي تم إجراؤها محليًا.
                    </p>
                </article>

                <article id="pull">
                    <h2 className="title-h2">9 - السحب (Pull) </h2>
                    <p className="style_divv">
                        في نظام التحكم بالنسخ Git، "السحب" يشير إلى عملية جلب التحديثات والتعهيدات من المستودع البعيد (Remote Repository) إلى المستودع المحلي. عند استخدام أمر السحب git pull، يقوم Git بجلب التحديثات الجديدة من المستودع البعيد ودمجها مع المشروع المحلي.<br/><br/>
                        هذه العملية ضرورية عندما يكون هناك تغييرات أُجريت على المشروع في المستودع البعيد من قبل أشخاص آخرين، وترغب في جلب هذه التحديثات لمشروعك المحلي لتحديثه والعمل عليه بآخر التغييرات. يسهل استخدام السحب عملية التنسيق والتعاون بين الفِرَق البرمجية التي تعمل على نفس المشروع.
                    </p>
                </article>

                <article id="pullRequest">
                    <h2 className="title-h2">10 - طلب السحب (Pull Request)</h2>
                    <p className="style_divv">
                        في سياق نظام التحكم بالنسخ Git، "طلب السحب" يُشير إلى عملية اقتراح التغييرات من فرع فرعي إلى الفرع الرئيسي (عادةً ما يكون الماستر) في مستودع مشروع. عندما يقوم مطور بإجراء تعديلات في فرعه الخاص، يقوم بإنشاء طلب سحب لإعلام الفريق الرئيسي بوجود تحديثات يرغب في دمجها.<br/><br/>
                        طلب السحب يحتوي عادة على وصف للتغييرات التي تم إجراؤها وقائمة بالتعهيدات الجديدة. يُمكن لأعضاء الفريق أو المشاركين الآخرين مراجعة هذه التغييرات وإبداء التعليقات أو الملاحظات. عند الموافقة على طلب السحب، يمكن دمج التغييرات في الفرع الرئيسي.<br/><br/>
                        هذه العملية تُسهم في إدارة عملية التطوير المشترك وتسهل التعاون بين المطورين على تغييرات المشروع.
                    </p>
                </article>

                <article id="to_clone_repo_from_github_use_cmd">
                    <h2 className="title-h2">12 - لاستنساخ الريبو من github استخدم</h2>
                    <div className="bg-dark text-light fs-5 p-4 pb-2 rounded"><pre> git clone {"<"}repo link{">"} </pre></div>
                    <div className="mital">متال : </div>
                    <div className="bg-dark text-light fs-5 p-4 pb-2 rounded"><pre> git clone https://github.com/RedaFarissi/front-portfolio.git </pre></div>
                </article>

                <article id="git_status" dir="ltr">
                    <h2 className="title-h2">13 - git status </h2>
                    <p className="style_divv">
                      we use in cmd <b>git status</b> to show what happend in working directory .<br/>
                      <h4 className="text-danger"> Example </h4>
                      <ul>
                        <li> to understand create project in github named it <b>first_repo</b> </li>
                        <li> clone it inside <b>bureau/folderdefault/</b> ussing : <kbd>git clone https://github.com/RedaFarissi/first_repo.git</kbd></li>
                        <li> in directory <b>bureau/folderdefault/</b> you will found folder <b>first_repo/</b></li>
                        <li> create file and folder in <b>first_repo/</b> index.html and folder with any name yopu want.</li>
                        <li> in cmd go inside first_repo ussing : <kbd>cd first_repo/</kbd></li>
                        <li> <kbd>git status</kbd> </li>
                        <li> git init </li>
                        <li> git add .</li>
                        <li> git commit -m "msg"</li>
                        <li> git push </li>
                      </ul>
                      <h4 className="text-danger"> Result </h4>
                      <img src={images.git4} className="w-100 my-4"/>
                      <p><b>in this case git status show you what happend in working directory</b></p>
                    </p>
                </article>

                <article id="git_add">
                    <h2 className="title-h2">14 - git add</h2>
                    <p className="style_divv">
                      when you add folder in your local repo and want to push him in remote repo you need to use :
                      <div className="bg-dark text-light fs-5 p-4 pb-2 rounded"><pre> git add img/ </pre></div>
                      <div className="bg-dark text-light fs-5 p-4 pb-2 mt-3 rounded"><pre> git add index.html </pre></div>
                      <div className="h2 text-danger">or</div>
                      <div className="bg-dark text-light fs-5 p-4 pb-2 mt-3 rounded"><pre> git add * </pre></div>
                      <img src={images.git5} className="w-100 my-4"/>
                      <b><b>new you are in staging area and you are ready to commit</b></b>
                      <div className="h3 text-success my-3"><b>.</b> if you want to remove <u><i>git add</i></u> from your rebo</div>
                      <div className="bg-dark text-light fs-5 p-4 pb-2 mt-3 rounded"><pre> git reset head index.html </pre></div>
                      <h4 className="text-danger"> Result </h4>
                      <img src={images.git6} className="w-100 my-4"/>
                    </p>
                </article>

                <article id="git_commit">
                    <h2 className="title-h2">15 - git commit</h2>
                    <p className="style_divv">
                        <div className="bg-dark text-light fs-5 p-4 pb-2 mt-3 rounded"><pre> git commit -m "message to your teams" </pre></div>
                      <img src={images.git7} className="w-100 my-4"/>
                      <p>now your are in local repo and you are ready to push data inside remote repo .</p>
                      <img src={images.git8} className="w-100 my-4"/>
                      <div className="h3 text-success my-3"><b>.</b> if you want to remove <u><i>git commit -m</i></u> and return to <u><i>staging area</i></u> </div>
                      <div className="bg-dark text-light fs-5 p-4 pb-2 mt-3 rounded"><pre> git rm -f index.html </pre></div>
                    </p>
                </article>

                <article id="git_branch">
                    <h2 className="title-h2">16 - git branch</h2>
                    <p className="style_divv">
                      <p><b>use this command below to get name of branch you work in it in your local Repo</b></p>
                      <p><b>branch is one version of the codebase, and you can have multiple branches for multiple version </b></p>
                      <div className="bg-dark text-light fs-5 p-4 pb-2 mt-3 rounded"><pre> git branch </pre></div>
                      <img src={images.git9} className="w-100 my-4"/>
                      <div className="alert alert-danger mt-3"><b>note</b>: by default branch is <b className="text-success">main</b> </div>
                    </p>
                </article>

                <article id="git_remoteV">
                    <h2 className="title-h2">17 - git remote -v</h2>
                    <p className="style_divv">
                      use this command below to get name and path of branch in remote Repo.
                      <div className="bg-dark text-light fs-5 p-4 pb-2 mt-3 rounded"><pre> git remote -v </pre></div>
                      <img src={images.git10} className="w-100 my-4"/>
                      <div className="alert alert-danger mt-3"> <b>note</b>: by default branch is <b className="text-success">origin</b> </div>
                    </p>
                </article>

                <article id="git_push">
                    <h2 className="title-h2">18 - git push</h2>
                    <p className="style_divv">
                        to use <b>git push</b> you need name branch of local Repo and name branch of remote Repo
                        <ul>
                          <li>in this case name local Repo is : <b className="text-success">main</b> </li>
                          <li>and name barnch reomte Repo is : <b className="text-success">origin</b> </li>
                        </ul>
                    </p>
                    <div className="alert alert-light mt-3">
                      <div className="h3"> Syntaxe </div>
                      <div className="bg-dark text-light fs-5 p-4 pb-2 mt-3 rounded"><pre> git push Remote_branch_name  local_branch_name </pre></div>
                    </div>
                    <div className="bg-dark text-light fs-5 p-4 pb-2 mt-3 rounded"><pre> git push origin main </pre></div>
                    <div className="alert alert-success mt-3"> <b>note</b>: input your email and password and the code will seend in github </div>
                    <img src={images.git11} className="w-100 my-4"/>
                    <div className="h3"> as you see the remote Repo modify </div>
                    <img src={images.git12} className="w-100"/>
                    <div className="alert alert-success mt-5">
                      <b className="text-danger">Note:</b> The issue is because the local is not up-to-date with the main branch that is why we are supposed to pull the code before pushing it to the git .
                      <div className="bg-dark text-light fs-5 p-4 pb-2 mt-3 rounded"><pre>git add *</pre></div>
                      <div className="bg-dark text-light fs-5 p-4 pb-2 mt-3 rounded"><pre>git commit -m 'Comments to be added'</pre></div>
                      <div className="bg-dark text-light fs-5 p-4 pb-2 mt-3 rounded"><pre>git pull origin main</pre></div>
                      <div className="bg-dark text-light fs-5 p-4 pb-2 mt-3 rounded"><pre>git push origin main</pre></div>
                    </div>
                    
                </article>

                <article id="git_team">
                    <h2 className="title-h2"> 19 - github team </h2>
                    <p className="style_divv">
                      <p> if you want to work like team with other developers , the admin must add you in team .</p>
                      <p> if you are the admin and you want to add some one to team go to <b>setting</b> and click <b>Collaborators</b> and click button <b>add peaple</b> </p>
                      <pre> setting{">"}Collaborators{">"}add peaple </pre>
                      and you can add freinds by email or with user name .<br/><br/>
                      <p><b>in github when you add file in Repo automaticlly the Repo install in your Repo <small><small><a href="#but">(but)</a></small></small> </b></p>
                      <div id="but" className="alert alert-primary">
                        You’re making changes in a project you don’t have write access to. Submitting a change will write it to a new branch in your fork RedaEskouni/AI-project-n-queens-problem-solver, so you can send a pull request.
                      </div>
                    </p>
                </article>

                <article id="git_pull">
                    <h2 className="title-h2">19 - git pull</h2>
                    <p className="style_divv">
                      to pull change <small><small>(from your team)</small></small> from Remote Repo to local Repo use: <br/>
                      <div className="bg-dark text-light fs-5 p-4 pb-2 mt-3 rounded"><pre> git add .</pre></div><br/>
                      <div className="bg-dark text-light fs-5 p-4 pb-2 mt-3 rounded"><pre> git commit -m "commit message"</pre></div><br/>
                      <div className="bg-dark text-light fs-5 p-4 pb-2 mt-3 rounded"><pre> git pull origin master</pre></div><br/>
                      <p>  the command <kbd>git pull barnch_remote_name</kbd> use two comand to pull from Remote to Local  </p>
                      <ul>
                        <li>git fetch</li>
                        <li>git merge</li>
                      </ul>
                    </p>
                </article>

                <article id="git_config">
                    <h2 className="title-h2">20 - git config</h2>
                    <p className="style_divv">
                      if you want to change config use 
                      <div className="bg-dark text-light fs-5 p-4 pb-2 mt-3 rounded"><pre> git config --global --edit </pre></div>
                      <div className="h4 text-primary my-2"> by default config is :</div>
                      <img src={images.git13} className="my-3 w-100"/>
                      <div className="h4 text-primary my-2"> you can change or add some data config</div>
                    </p>
                </article>

                <article id="create_Repository_From_Existing_Project_with_Desktop_app">
                    <h2 className="title-h2">21 - Create Repository From Existing Project Using Desktop Github</h2>
                    <h3>1 - Create a new repository on github.com </h3>
                    <p><b>in this case I named it <u>parchessi</u> </b></p>
                    <h3>2 - use this code in directory you want to upload it in github</h3>
                    <img src={images.git14} className="w-100"/>
                    <h3>3 - open Github <u>Disktop</u></h3>
                    <img src={images.git15} className="w-100"/>
                    <img src={images.git16} className="w-100"/>
                    <p><b> and after click  </b></p>                   
                </article>


                <article id="create_Repository_From_Existing_Project_with_Command_Prompt">
                    <h2 className="title-h2">22 - Create Repository From Existing Project with Command Prompt</h2>
                    <h3>1 - Create a new repository on github.com </h3>
                    <h3>2 - use this code in directory you want to upload it in github</h3>
                    <div className="alert bg-dark text-light pb-0"><pre>git init </pre></div>
                    <div className="alert bg-dark text-light pb-0"><pre>git add .</pre></div>
                    <div className="alert bg-dark text-light pb-0"><pre>git commit -m "Initial commit"</pre></div>
                    <div className="alert bg-dark text-light pb-0"><pre>git remote add origin &lt;repository URL {">"} </pre></div>
                    <div className="alert bg-dark text-light pb-0"><pre>git push -u origin master</pre></div>
                </article>

                <article id="gitignore_file">  
                    <h2 className="title-h2">23 - .gitignore file</h2>
                    <p className="fs-5"> 
                      we create file <kbd>.gitignore</kbd> without extension if we need to <b>ignore</b> some file or folder or pattern.<br/>
                      Here's an example of how you can create a .gitignore file to exclude the node_modules directory from react folder, which can be large and not necessary to include in the repository
                    </p>
                    <h3>1 - Ignore directory</h3>
                    <p className="fs-4"> like exemple remove pushing node_modules/ folder in github</p>
                    <div className="alert alert-warning"><span className="text-secondary"># .gitignore file</span><pre>node_modules/</pre></div>
                    <p> (when you clone it you can install node_modules folder using :)</p>
                    <div className="alert alert-warning"><span className="text-secondary">npm install</span></div>
                        
                    <h3>2 - Ignore specific files</h3>
                    <div className="alert alert-warning"><span className="text-secondary"># .gitignore file</span><pre>exemple.txt</pre></div>
                    <h3>3 - Ignore files or directories that match a pattern</h3>
                    <p><b>to ignore all files with the extension ".log", you can add the following line</b></p>
                    <div className="alert alert-warning"><span className="text-secondary"># .gitignore file</span><pre>*.log</pre></div>
                    <p><b>To ignore all files and directories that start with "temp_"</b></p>
                    <div className="alert alert-warning"><span className="text-secondary"># .gitignore file</span><pre>temp_*</pre></div>
                    <h3> 4 - Ignore files or directories in a specific directory </h3>
                    <p><b>You can create a .gitignore file in a specific directory to ignore files and directories in that directory only. For example, to ignore all files with the extension ".bak" in a directory called "exampledir", you can create a .gitignore file in that directory with the following content</b></p>
                    <div className="alert alert-warning"><span className="text-secondary"># .gitignore file</span><pre>exemple.txt</pre></div>
                </article>

                <article id="remove_the_existing_remote_repository">
                    <h2 className="title-h2" dir="ltr">24 - Remove the existing remote repository </h2>
                    <div className="alert alert-warning mt-3 pt-2">
                      If you want to remove the existing remote repository, 
                      run the command :
                      <div className="alert pb-0 bg-dark text-light mt-2"><pre>git remote remove origin</pre></div> 
                      This will remove the remote repository with the name "origin" from your local repository.
                    </div>     
                </article>       

                <article id="submodules_in_Git">
                    <h2 className="title-h2" dir="ltr">25 -  submodules in Git </h2>
                    <div className="alert alert-warning mt-3 pt-2">
                      Using <b>submodules</b> in Git allows you to include one <b>repository inside another</b> as a <b className="text-success">subdirectory</b>. This can be useful in cases like a resume, where you might want to include several different projects that you have worked on as submodules of your main resume repository. By doing so, you can keep each project's code in a separate repository while still being able to include it in your resume repository.<br/><br/><br/>
                      Submodules also help keep the codebase clean and maintainable by allowing developers to separate different pieces of code into separate repositories, each with their own version control history. This can make it easier to track changes and roll back to previous versions if necessary. Additionally, submodules can help manage dependencies by allowing you to include external libraries or frameworks as submodules in your main project.<br/><br/><br/>
                      Overall, submodules in Git can help streamline the development process, make it easier to manage dependencies, and keep your codebase organized and maintainable.<br/><br/>
                      <h3>syntaxe</h3>
                      <div className="alert pb-0 bg-dark text-light mt-2"><pre>git submodule add &lt;repository-url{">"} &lt;submodule-path{">"} </pre></div> 
                      <h3>exemple</h3>
                      <p className="fs-3">
                        in this case i use submodule to create rebo content front folder  (front is react folder) 
                      </p>
                      <div className="alert pb-0 bg-dark text-light mt-2"><pre><span className="text-success">C:\project{">"}</span>git init </pre></div>
                      <div className="alert pb-0 bg-dark text-light mt-2"><pre><span className="text-success">C:\project{">"}</span>git submodule add https://github.com/RedaFarissi/front-ecommerce.git front</pre></div>
                      <p className="fs-5">
                        I use this command in path project because in the project directory i have front (project/front)
                      </p>
                      <div className="alert pb-0 bg-dark text-light mt-2"><pre><span className="text-success">C:\project{">"}</span>git commit -m "commit message to front"</pre></div>
                      <div className="alert pb-0 bg-dark text-light mt-2"><pre><span className="text-success">C:\project{">"}</span>git remote add origin https://github.com/RedaFarissi/portfolio-back.git</pre></div>
                      <div className="alert pb-0 bg-dark text-light mt-2"><pre><span className="text-success">C:\project{">"}</span>git push &lt;remote&gt; &lt;branch&gt;</pre></div>
                      <p className="fs-4"> Know you can create another rebo in github and push the parent folder in it and the result the first rebo and second will be related </p>
                    </div>
                </article>

                <article id="create_new_branch">
                    <h2 className="title-h2" dir="ltr">26 -  Create new branch  </h2>
                    <div>
                      <div className="fs-4">Creating a new branch in Git allows you to work on new features or changes to a project without affecting the main codebase, giving you a safe space to experiment and collaborate with others.</div>
                      <h3>1 - to create new branch use :</h3>
                      <div className="alert bg-dark pb-0 text-light"><pre>git branch -c <span className="text-success">My_name_branch</span></pre></div>
                      <h3>2 - to switch to the new branch</h3>
                      <div className="alert bg-dark pb-0 text-light"><pre>git checkout <span className="text-success">My_name_branch</span></pre></div>
                      <h3>3 - to create and switch to new branch use</h3>
                      <div className="alert bg-dark pb-0 text-light"><pre>git branch -b <span className="text-success">My_name_branch</span></pre></div>
                      <div className="alert bg-dark pb-0 text-light"><pre>git add .</pre></div>
                      <div className="alert bg-dark pb-0 text-light"><pre>git commit -m  "message"</pre></div>
                      <div className="alert bg-dark pb-0 text-light"><pre>git push </pre></div>
                            <hr/>
                      <div className="fs-3"><b>You can create new branch from github and git him in local using:</b></div>
                      <div className="alert bg-dark pb-0 text-light mt-4 mb-3"><pre>git fetch</pre></div>
                      <div className="alert bg-dark pb-0 text-light"><pre>git checkout <span className="text-success">My_name_branch</span></pre></div>
                    </div>
                </article>
                
                <article id="remove_the_connection_between_a_folder_in_your_computer_and_GitHub">
                    <h2 className="title-h2" dir="ltr"> 27 - Remove Connection Between a Folder in your computer and GitHub</h2>
                    <p><b>On Windows:</b></p>
                    <div className="alert bg-dark pb-0 text-light"><pre>rd /s /q .git</pre></div>
                </article>

            </section>
        </main>
    )
}        