import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./WritingMode.css"

export default function WritingMode(props){
    const codeExemple= { 
    css:`p.test1 { 
    writing-mode: horizontal-tb;
}
p.test2 { 
    writing-mode: vertical-rl; 
}
span.test2 {   
    writing-mode: vertical-rl; 
}`,
    head:`  
   <link rel="stylesheet" href="./index.css" />`,
    code:`      <h1>The writing-mode Property</h1>

      <p class="test1">Some text with default writing-mode.</p>
      
      <p>Some text with a span element with a <span class="test2">vertical-rl</span> writing-mode.</p>
      
      <p class="test2">Some text with writing-mode: vertical-rl.</p>`
    }
    
    return (
    <section className="section-conetent">
        <h1 className="heading-style"> CSS Writing-Mode </h1>
        <article>
            <p className="style_divv mt-5">
                خاصية <b>writing-mode</b> في <b>CSS</b> تُستخدم لتعريف اتجاه التقدم الأفقي والرأسي، مما يحدد في النهاية تدفق المحتوى في عنصر مستوى الكتلة. وهي مفيدة بشكل خاص لمعالجة تخطيط النصوص في النصوص غير اللاتينية ولإنشاء أوضاع كتابة رأسية.<br/><br/>
                تأخذ خاصية <b>writing-mode</b> القيم التالية:<br/>
                <ul>
                    <li><b className="text-success">horizontal-tb (القيمة الافتراضية) :</b> هذه هي القيمة الافتراضية وتمثل وضع الكتابة الأفقي. يتدفق النص من اليسار إلى اليمين، ومن الأعلى إلى الأسفل.</li>
                    <li><b className="text-success">vertical-rl :</b> هذه القيمة تمثل وضع الكتابة الرأسي حيث يتدفق النص من الأعلى إلى الأسفل ومن اليمين إلى اليسار.</li>
                    <li><b className="text-success">vertical-lr :</b> تمثل هذه القيمة وضع الكتابة الرأسي أيضًا، لكن النص يتدفق من الأعلى إلى الأسفل ومن اليسار إلى اليمين.</li>
                    <li><b className="text-success">sideways-rl :</b> هذه القيمة تستخدم للكتابة الجانبية، حيث يتم تخطيط الأحرف جنبًا إلى جنب، كما هو الحال في النص الياباني الرأسي. يتدفق النص من الأعلى إلى الأسفل ومن اليمين إلى اليسار.</li>
                    <li><b className="text-success">sideways-lr :</b> تشبه هذه القيمة <b>sideways-rl</b>، لكن النص يتدفق من الأعلى إلى الأسفل ومن اليسار إلى اليمين.</li>
                    <li><b className="text-success">mixed :</b>  تسمح هذه القيمة لوكيل المستخدم بتحديد وضع الكتابة بناءً على محتوى النص واللغة.</li>
                </ul>
            </p>
            <div className="mital">متال :  </div>
            <CodeHighlighter file_name="index.css" code={codeExemple.css} language="css" copie={true}/>
            <CodeHighlighter file_name="index.html" code={codeExemple.code} head={codeExemple.head} language="html" is_html={true} title="CSS writing-mode" addClass="mt-3 mb-3" copie={true}/>
            <Result title='CSS writing-mode' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/reda.html">
                <h1>The writing-mode Property</h1>
                <p className="writing-mode-test1">Some text with default writing-mode.</p>
                <p>Some text with a span element with a <span className="writing-mode-test2">vertical-rl</span> writing-mode.</p>
                <p className="writing-mode-test2">Some text with writing-mode: vertical-rl.</p>
            </Result>
        </article>
    </section>        
    )
}