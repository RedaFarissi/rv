import { CodeHighlighter ,  Result} from "../../path";

export default function Audio(props){
    const code1 = `<audio src="audio_name.type" controls></audio>`
    const code2 = `<audio  controls> 
    <source src="audio_name.type">
</audio>`
    const codeExemple1 = `      <audio src="./music.mp3" controls></audio>`
    const codeExemple2 = `      <audio  controls> 
            <source src="./music.mp3">
            <source src="./music.ogg">
    </audio>`
    const codeExemple3 = `      <audio controls muted> 
            <source src="./music.mp3">
            <source src="./music.ogg">
    </audio>`
const codeExemple4 = `      <audio controls autoplay> 
            <source src="./music.mp3">
            <source src="./music.ogg">
    </audio>`
const codeExemple5 = `      <audio controls autoplay loop> 
            <source src="./music.mp3">
            <source src="./music.ogg">
    </audio>`
const codeExemple6 = `      <audio src="./music.mp3" controls preload="metadata" loop></audio>`

    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-html-color">HTML Audio</h1>
    <article>
        <h2 className="title-h2">1. الوسم audio</h2>
        <p className="style_divv">
            الوسم  <kbd>&lt;audio&gt;</kbd> يُستخدم عندما نريد وضع ملف صوتي في الموقع ونضيف دائما له اثنان <b>attribute</b> خاص به:
            <ul>
                <li><b>controls</b> : لعرض عناصر التحكم في الصوت وبدونه لا يظهر الملف الصوتي في الصفحة.</li>
                <li><b>src</b> : وتكون قيمته عبارة عن مسار وإسم الملف الصوتي.</li>
                <li>دائما استخدم امتداد <b>mp3</b> لأن جميع المتصفحات تدعمه.</li>
            </ul>
        </p>
        <CodeHighlighter  code={code1} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <CodeHighlighter  code={codeExemple1} language="html" is_html={true} title="Audio" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Audio' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <audio src="./music.mp3" controls></audio>
            </Result> 
        </div>
    </article>
    <article>
        <h2 className="title-h2">2. الوسم source</h2>
        <p className="style_divv">
            يُحدِّد العنصر <kbd>&lt;source&gt;</kbd> عدِّة مصادر لملفات الوسائط المتعددة ضمن العنصر <kbd>&lt;picture&gt;</kbd> أو <kbd>&lt;audio&gt;</kbd> أو <kbd>&lt;video&gt;</kbd> وهذا العنصر فارغ، وأكثر استخدام شائع له هو توفير محتوى الوسائط المتعددة نفسه لكن بصيغ مختلفة لكي يستطيع المتصفح تشغيل أنسبها .
            <ul><li>يحتوي على ,<b>attribute</b> أساسي هو src وتكون قيمته عبارة عن مسار واسم الملف الصوتي. وهو من العناصر التي ليس لها نهاية وسم (closing tag).</li></ul>
        </p>
        <CodeHighlighter  code={code2} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <ul><li>يبيّن هذه المثال كيفية تضمين مقطع صوتي باستخدام العنصر <strong>&lt;audio&gt;</strong> وله أكثر من مصدر، أحدها بصيغة <b>ogg</b> والآخر بصيغة <b>mp3</b></li></ul>
            <CodeHighlighter  code={codeExemple2} language="html" is_html={true} title="Audio" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Audio' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <audio src="./music.mp3" controls></audio>
            </Result> 
        </div>
    </article>
    <article>
        <h2 className="title-h2">3. السمات الممكن إستعمالها داخل الوسم audio  </h2>
        <h5> 1 - السمة muted </h5>
        <p className="style_divv" >
            <ul>
                <li> تستخدم السمة <b>muted</b> لجعل الملف الصوتي صامت  . </li>
                <li> يمكن للمستعمل تشغيل الصوة بنقر على علامة الصوة أنضر المتال .</li>
            </ul>
        </p>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <CodeHighlighter  code={codeExemple3} language="html" is_html={true} title="Audio" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Audio' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <audio src="./music.mp3" controls muted></audio>
            </Result>
        </div>

        <h5> 2 - السمة autoplay </h5>
        <div className="style_divv" >
            <ul>
                <li> تستخدم السمة <b>autoplay</b> لجعل الملف الصوتي يعمل تلقائيا    . </li>
            </ul>
        </div>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <CodeHighlighter  code={codeExemple4} language="html" is_html={true} title="Audio" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Audio' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <audio src="./music.mp3" controls autoplay></audio>
            </Result>
        </div>

        <h5> 3 - السمة loop </h5>
        <div className="style_divv" >
            <ul>
                <li> تستخدم السمة <b>loop</b> لإعادة تشغيل الملف الصوتي عند إنتهائه بستمرار . </li>
                <li> سيتم إعادة تشغيل الملف الصوتي بستمرار إلى ان يقوم المستعمل بإقافه</li>
            </ul>
        </div>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <CodeHighlighter  code={codeExemple5} language="html" is_html={true} title="Audio" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Audio' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <audio src="./music.mp3" controls autoplay loop></audio>
            </Result>
        </div>

        <h5> 4 - السمة preload </h5>
        <p className="style_divv" >
            تستعمل القيمة <b>preload</b> لتحكم بتحميل الملف الصوتي داخل موقعك وتقبل تلات قيم : 
            <ul>
                <li> none : لن يقوم المتصفح بتحميل الملف الصوتي حتى يقوم المستعمل بالنقر على تشغيل الملف</li>
                <li> metadata : لن يقوم المتصفح بتحميل الملف الصوتي حتى يقوم بتحميل موقعك وتعتبر متالية </li>
                <li> auto : التحميل تلقائيا ذالك يكون على حسب سرعة أنترنت المستعمل </li>
            </ul>
        </p>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <CodeHighlighter  code={codeExemple6} language="html" is_html={true} title="Audio" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Audio' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <audio src="./music.mp3" controls preload="metadata" loop></audio>
            </Result>
        </div>
    </article>
</section>
    )
    }