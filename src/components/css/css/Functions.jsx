import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function Functions(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Functions </h1>
    <article></article>



<div className="style_divv mt-5">
    تُستخدم وظائف <b>{"CSS"}</b> كقيمة لخصائص <b>{"CSS"}</b> المختلفة .
</div>
<h3> 1 - <bdi>attr()</bdi> </h3>
<div className="style_divv">
    ترجع الدالة <bdi><b>attr()</b></bdi> قيمة إحدى سمات العناصر المحددة
    {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style={{color:"gold"}}>attr(</span>attribute-name<span style={{color:"gold"}}>)</span></pre>
    </div> */}
</div>
<div className="sum_exemple_style">
    <div className="mital">متال  :  </div>
    <img src={images.css53_Function} className="img"/>
    <div className="style-result">
        <div id="h1"> The attr() Function </div>
        <div>
          <a id="Lien" href="https://www.google.com"> 
              Visit google 
          </a>
        </div>
    </div>
</div>
<h3> 2 - <bdi>calc()</bdi> </h3>
<div className="style_divv">
    تقوم الدالة <bdi><b>calc()</b></bdi> بإجراء عملية حسابية لاستخدامها كقيمة الخاصية.
    <div className="codeStudio alert bg-dark" dir="ltr" style={{margiTtop:"9px",paddingBottom:"0pt"}}>
        <pre><span style={{color:"gold"}}>calc(</span>expression<span style={{color:"gold"}}>)</span></pre>
    </div>
</div>
<div className="sum_exemple_style">
    <div className="mital">متال  :  </div>
    <img src={images.css53_Function2} className="img"/>
    <div className="style-result">
        <div id="div_id"><span style={{color:"aliceblue"}}> CSS calc() </span></div>
    </div>
</div>
<h3> 3 - <bdi>conic-gradient()</bdi> </h3>
<div className="style_divv">
    تعيّن وظيفة <bdi><b>conic-gradient()</b></bdi> تدرجًا مخروطيًا كصورة الخلفية.<br/>
    التدرج المخروطي هو تدرج مع انتقالات لونية تدور حول نقطة مركزية.<br/>
    لإنشاء تدرج لوني مخروطي ، يجب عليك تحديد توقفي لوني على الأقل.<br/>
    {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style={{color:"gold"}}>conic-gradient(</span>expression<span style={{color:"gold"}}>)</span></pre>
    </div> */}
</div>
<div className="sum_exemple_style">
    <div className="mital">متال  :  </div>
    <img src={images.css53_Function3} className="img"/>
    <div className="style-result">
        <div id="h1"> Conic Gradient - Three Colors </div>
        <div id="grad1"></div>
    </div>
</div>
<h3> 4 - <bdi>hsl()</bdi> </h3>
<div className="style_divv">
    تحدد وظيفة <bdi><b>hsl()</b></bdi> الألوان باستخدام نموذج <bdi><b>Hue-saturation-lightness (HSL)</b></bdi>.<br/>
    يشير <b>HSL</b> إلى تدرج الألوان والتشبع والخفة - ويمثل تمثيل تنسيق أسطواني للألوان.
    {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style={{color:"gold"}}>hsl(</span>hue, saturation, lightness<span style={{color:"gold"}}>)</span></pre>
    </div> */}
    <table className="table text-light" dir="ltr">
        <thead>
            <tr>
                <th className="text-center"> Value </th>
                <th className="text-center"> Description </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td> hue </td>
                <td dir="rtl">  تحدد درجة على عجلة الألوان (من 0 إلى 360) - 0 (أو 360) باللون الأحمر ، و 120 باللون الأخضر ، و 240 باللون الأزرق </td>
            </tr>
            <tr>
                <td>saturation</td>
                <td dir="rtl"> يحدد التشبع ؛ 0٪ لون رمادي و 100٪ لون كامل (تشبع كامل) </td>
            </tr>
            <tr>
                <td> lightness </td>
                <td dir="rtl"> يحدد الخفة. 0٪ أسود ، 50٪ طبيعي ، و 100٪ أبيض </td>
            </tr>
        </tbody>
    </table>
</div>
<div className="sum_exemple_style">
    <div className="mital">متال  :  </div>
    <img src={images.css53_Function4} className="img"/>
    <div className="style-result">
        <div className="h1">The hsl() Function</div>
        <p>HSL colors with opacity:</p>
        <p id="p1">Green</p>
        <p id="p2">Light green</p>
        <p id="p3">Dark green</p>
        <p id="p4">Pastel green</p>
        <p id="p5">Red</p>
        <p id="p6">Light Red</p>
    </div>
</div>
<h3> 5 - <bdi>linear-gradient()</bdi> </h3>
<div className="style_divv">
    تعيّن وظيفة <bdi><b>linear-gradient()</b></bdi> تدرجًا خطيًا كصورة الخلفية.<br/>
    لإنشاء تدرج خطي ، يجب عليك تحديد لونين على الأقل. التوقفات اللونية هي الألوان التي تريد تجسيد انتقالات سلسة بينها. يمكنك أيضًا تعيين نقطة بداية واتجاه (أو زاوية) جنبًا إلى جنب مع تأثير التدرج اللوني.
    {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style={{color:"gold"}}>linear-gradient(</span>direction, color-stop1, color-stop2, ...<span style={{color:"gold"}}>)</span></pre>
    </div> */}
</div>
<div className="sum_exemple_style">
    <div className="mital">متال  :  </div>
    <img src={images.css53_Function5} className="img"/>
    <div className="style-result">    
      <div id="h3"> Linear Gradient - Top to Bottom </div>
      <p>
        This linear gradient starts at the top.
        It starts red, transitioning to yellow, then to blue:
      </p>
      <div id="Gradient1"></div>
    </div>
</div>
<div className="mital"> متال 2 :  </div>
<img src={images.css53_Function6} className="img"/>
<div className="style-result">    
    <h3>Linear Gradients - Using Different Angles</h3>
    <p id="grad-1" style={{color:"white",textAlign:"center"}}>0deg</p>
    <p id="grad-2" style={{color:"white",textAlign:"center"}}>90deg</p>
    <p id="grad-3" style={{color:"white",textAlign:"center"}}>180deg</p>
    <p id="grad-4" style={{color:"white",textAlign:"center"}}>-90deg</p>
</div>
<h3> 6 - <bdi>max()</bdi> </h3>
<div className="style_divv">
    تستخدم الدالة <bdi><b>max()</b></bdi> القيمة الأكبر ، من قائمة القيم المفصولة بفواصل ، كقيمة الخاصية.
    {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style={{color:"gold"}}>max(</span>value1, value2, ...<span style={{color:"gold"}}>)</span></pre>
    </div> */}
</div>
<div className="sum_exemple_style">
    <div className="mital"> متال :  </div>
    <img src={images.css53_Function7} className="img"/>
    <div className="style-result">    
        <div id="h1">The max() Function</div>
        <p>
          Use max() to set the width of #div1
          to whichever value is largest, 50% or 300px:
        </p>
        <div id="div1">Some text...</div>
        <p>Resize the browser window to see the effect.</p>
    </div>
</div>

<h3> 7 - <bdi>min()</bdi> </h3>
<div className="style_divv">
    تستخدم الدالة <bdi><b>min()</b></bdi> القيمة الأصغر ، من قائمة القيم المفصولة بفواصل ، كقيمة الخاصية.
    {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style={{color:"gold"}}>min(</span>value1, value2, ...<span style={{color:"gold"}}>)</span></pre>
    </div> */}
</div>
<div className="sum_exemple_style">
    <div className="mital"> متال :  </div>
    <img src={images.css53_Function8} className="img"/>
    <div className="style-result">    
        <div id="h1">The min() Function</div>
        <p>
          Use min() to set the width of #div1
          to whichever value is smallest, 
          50% or 300px:
        </p>
        <div id="div1">Some text...</div>
        <p>Resize the browser window to see the effect.</p>
    </div>
</div>

<h3> 8 - <bdi>var()</bdi> </h3>
<div className="style_divv">
    تُستخدم الدالة <bdi><b>var()</b></bdi> لإدخال قيمة متغير CSS.
    {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
<pre><span style="color:var(--violet-color)">:root{</span> <span style="color:var(--js-color)">--name</span>: <span style="color:orange;">blue</span>; <span style="color:var(--violet-color)">}</span>
<span style={{color:"gold"}}>var(</span> <span style="color:var(--js-color)">--name</span> <span style={{color:"gold"}}>)</span>
</pre>
    </div> */}
</div>
<div className="sum_exemple_style">
    <div className="mital"> متال :  </div>
    <img src={images.css53_Function9} className="img"/>
    <div className="style-result">    
        
    </div>
</div>
</section>
    )
}