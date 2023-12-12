import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Conditions(){
  return(
<section className="section-conetent">
  <h1 className="heading-style heading-style-js-color">JavaScript Conditions</h1>
  <article>
        <p className="style_divv mt-5">
            تستخدم العبارات الشرطية لأداء إجراءات مختلفة بناءً على شروط مختلفة.<br/>
            في كثير من الأحيان عندما تكتب رمزًا ، فأنت تريد تنفيذ إجراءات مختلفة لقرارات مختلفة.<br/>
            يمكنك استخدام العبارات الشرطية في التعليمات البرمجية الخاصة بك للقيام بذلك.<br/>
            في <b>JavaScript</b> لدينا العبارات الشرطية التالية:<br/>
            <ul>
                <li>استخدم <b>if</b> في حالة تحديد كتلة من التعليمات البرمجية ليتم تنفيذها ، إذا كان الشرط المحدد صحيحًا .</li>
                <li> استخدم <b>else</b> لتحديد كتلة من التعليمات البرمجية ليتم تنفيذها ، إذا كان الشرط خاطئا .</li>
                <li> استخدم <b>else if</b> لتحديد شرط جديد للاختبار ، إذا كان الشرط الأول خاطئًا .</li>
            </ul>
        </p>
  </article>
  <article>
        <h2 className="title-h2">1.<bdi> JavaScript Condition if() </bdi></h2>
        <p className="style_divv">
            استخدم عبارة <b>if</b> لتحديد كتلة من تعليمات <b>JavaScript</b> البرمجية ليتم تنفيذها إذا كان الشرط صحيحًا .
        {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--violet-color);">if</span><span style="color:gold;">(</span>condition<span style="color:gold;">){</span>
          <span style="color:green">//JavaScript code</span> 
        <span style="color:gold;">}</span></pre>
        </div> */}
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js15_Conditions} className="img"/>
        <div className="styleee img"><h2> true </h2></div>
  </article>
  <article>
        <h2 className="title-h2">2.<bdi> JavaScript Condition if() else()</bdi></h2>
        <p className="style_divv">
            استخدم تعليمة <b>else</b> لتحديد كتلة من التعليمات البرمجية ليتم تنفيذها إذا كان الشرط <b>if</b> خاطئًا.
        {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><b style="color:var(--violet-color);">if</b><span style="color:gold;">(</span>condition<span style="color:gold;">){</span>
          <span style="color:green">//JavaScript code</span>
        <span style="color:gold;">}</span><b style="color:var(--violet-color);">else</b><span style="color:gold;"></span><span style="color:gold;">{</span>
          <span style="color:green">//JavaScript code</span>
        <span style="color:gold;">}</span></pre>
        </div> */}
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js15_Conditions2} className="img"/>
        <div className="styleee img"><h2> true </h2></div>
        <div className="mital">متال 2 :  </div>
        <img src={images.js15_Conditions3} className="img"/>
        <div className="styleee img"><h2> false </h2></div> 
  </article>
  <article>
        <h2 className="title-h2">3.<bdi> JavaScript Condition if()  else if()</bdi></h2>
        <p className="style_divv">
            استخدم تعليمة <b>else</b> لتحديد كتلة من التعليمات البرمجية ليتم تنفيذها إذا كان الشرط <b>if</b> خاطئًا.
        {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--violet-color)">if</span><span style="color:gold;">(</span>condition<span style="color:gold;">){</span>
          <span style="color:green">//JavaScript code</span>
        <span style="color:gold;">}</span><span style="color:var(--violet-color)">else if</span><span style="color:gold;">(</span>condition<span style="color:gold;">){</span>
          <span style="color:green">//JavaScript code</span>
        <span style="color:gold;">}</span></pre>
        </div> */}
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js15_Conditions4} className="img"/>
        <div className="styleee img"><h2> false </h2></div>
  </article>
</section>
  )
}