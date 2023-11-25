import { CodeHighlighter ,  Result} from "../../path";

export default function Small(props){
    const code1 = `<small> content  </small>`
    const code2 = `<big> content  </big>`
    const codeExemple = `    <small> Reda Eskouni  </small><br/>
    <small><small> Reda Eskouni  </small></small><br/>
    <small><small><small> Reda Eskouni  </small></small></small><br/>
    <small><small><small><small> Reda Eskouni  </small></small></small></small><br/>
    <hr />
    <big> Reda Eskouni  </big><br/>
    <big><big> Reda Eskouni  </big></big><br/>
    <big><big><big> Reda Eskouni  </big></big></big><br/>
    <big><big><big><big> Reda Eskouni  </big></big></big></big><br/>`
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-html-color">HTML Small and Big</h1>
    <article>
        <h2 className="title-h2">1. تصغير الخط </h2>
        <p className="style_divv">
            نستخدم الوسم <kbd>&lt;small&gt;</kbd>   لعرض الكلام الثانوية أو الذي يعتبر أقل أهمية بحجم خط أصغر . <br/>
            يكتب الوسم <b>small</b> على شكل التالي : 
        </p>
        <CodeHighlighter  code={code1} language="jsx"  addclassName="mt-3 mb-3" copie={true}/>
    </article>
    <article>
        <h2 className="title-h2">2. تكبير الخط </h2>
        <p className="style_divv">
            تُستخدم علامة <kbd>&lt;big&gt;</kbd> في <b>HTML</b> لزيادة حجم النص المحدد بمقدار واحد أكبر من النص المحيط. في <b>HTML 5</b> ، تجدر الإشارة إلى أنه تم إهمال العنصر <kbd>&lt;big&gt;</kbd> في HTML5، ولا يُنصح باستخدامه. بدلاً من ذلك، يوصى باستخدام CSS للتحكم في حجم النص.
        </p>
        <CodeHighlighter  code={code2} language="jsx"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <CodeHighlighter file_name="index.html" code={codeExemple} language="html" title="Small" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Small' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <small> Reda Eskouni  </small><br/>
                <small><small> Reda Eskouni  </small></small><br/>
                <small><small><small> Reda Eskouni  </small></small></small><br/>
                <small><small><small><small> Reda Eskouni  </small></small></small></small><br/>
                <hr />
                <big> Reda Eskouni  </big><br/>
                <big><big> Reda Eskouni  </big></big><br/>
                <big><big><big> Reda Eskouni  </big></big></big><br/>
                <big><big><big><big> Reda Eskouni  </big></big></big></big><br/>
            </Result>
        </div>
        <ul>
            <li>لا تلقي بالا لذالك  لأنه يمكنك ستعمال <b>CSS</b> في تحكم بحجم زر كما تريد <small><small>(ستتعلم دالك خلال دروس CSS)</small></small></li>
        </ul>
    </article>

</section>
)
}