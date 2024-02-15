import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./Functions.css"

export default function Functions(props){
    const code1 = `attr(attribute-name)`
    const code2 = `calc(expression)`
    const code3 = `conic-gradient(expression)`
    const code4 = `hsl(hue, saturation, lightness)`
    const code5 = `linear-gradient(direction, color-stop1, color-stop2, ...)`
    const code6 = `max(value1, value2, ...)`
    const code7 = `min(value1, value2, ...)`
    const code8 = `:root{ --name: blue; }
var( --name )`

    const codeExemple1= { 
    head:`  
    <style> 
        #Lien:after { 
            content: " l'ien is : " attr(href); 
        }    
    </style>`,
    code:`      <h1> The attr() Function </h1>
      <div>
          <a id="Lien" href="https://www.google.com"> 
              Visit google 
          </a>
      </div>`
    }
    const codeExemple2= { 
    head:`  
    <style>       
        #div_id {
            width:calc(100% - 100px);
            height:65px;
            background-color: red;
            margin-left: 50px;
            text-align: center;
            line-height: 65px;
            font-size: 40px;
            border-radius: 7px;
        }
    </style>`,
    code:`      <div id="div_id">
            <span style="color:aliceblue;"> CSS calc() </span>
      </div>`
    }
    const codeExemple3= { 
    head:`  
    <style> 
        #grad1 {
            height: 200px;
            width: 200px;
            background-color: red; /* For browsers that do not support gradients */
            background-image: conic-gradient(red, yellow, green);
        } 
    </style>`,
    code:`      <h1> Conic Gradient - Three Colors </h1>
      <div id="grad1"></div>`
    }
    const codeExemple4= { 
    head:`  
    <style> 
        #p1 { background-color: hsla(120,100%,50%) ; }
        #p2 { background-color: hsla(120,100%,75%) ; }
        #p3 { background-color: hsla(120,100%,25%) ; }
        #p4 { background-color: hsla(120,60%,70%) ; }
        #p5 { background-color: hsla(0,100%,50%) ; }
        #p6 { background-color: hsla(360,40%,50%) ; } 
    </style>`,
    code:`      <h1>The hsl() Function</h1>
      <p>HSL colors with opacity:</p>
      <p id="p1">Green</p>
      <p id="p2">Light green</p>
      <p id="p3">Dark green</p>
      <p id="p4">Pastel green</p>
      <p id="p5">Red</p>
      <p id="p6">Light Red</p>`
    }
    const codeExemple5= { 
    head:`  
    <style> 
        #Gradient1 { 
            height: 150px;
            background-image: linear-gradient(red, yellow, blue);
        }
    </style>`,
    code:`      <h1> Linear Gradient - Top to Bottom </h1>
      <p>
        This linear gradient starts at the top. It starts red, transitioning to yellow, then to blue:
      </p>
      <div id="Gradient1"></div>`
    }
    const codeExemple6= { 
    head:`  
    <style> 
        p{ color:white; text-align:center; }
        #grad-1 { height: 100px; background-image: linear-gradient(0deg  , red, blue); }
        #grad-2 { height: 100px; background-image: linear-gradient(90deg , red, blue);}
        #grad-3 { height: 100px; background-image: linear-gradient(180deg, red, blue);}
        #grad-4 { height: 100px; background-image: linear-gradient(-90deg, red, blue);}    
    </style>`,
    code:`      <h1>Linear Gradients - Using Different Angles</h1>
      <p id="grad-1">0deg</p>
      <p id="grad-2">90deg</p>
      <p id="grad-3">180deg</p>
      <p id="grad-4">-90deg</p>`
    }
    const codeExemple7= { 
    head:`  
    <style> 
        #div1 { background-color: red;height: 150px; width: max(50%, 300px); color:white}
    </style>`,
    code:`      <h1>The max() Function</h1>
      <p>
        Use max() to set the width of #div1
        to whichever value is largest, 50% or 300px:
      </p>
      <div id="div1">Some text...</div>
      <p>Resize the browser window to see the effect.</p>`
    }
    const codeExemple8= { 
    head:`  
    <style> 
        #css_min {
            background-color: red;
            color: white;
            height: 150px;
            width: min(50%, 300px);
        }
    </style>`,
    code:`      <h1>The min() Function</h1>
      <p>
        Use min() to set the width of #div1
        to whichever value is smallest, 
        50% or 300px:
      </p>
      <div id="css_min">Some text...</div>
      <p>Resize the browser window to see the effect.</p>`
    }
    const codeExemple9= { 
    head:`  
    <style> 
        :root {
            --blue: blue;
            --white: white;
        }
      
        .colored-box {
            width: 200px;
            height: 100px;
            background-color: var(--blue);
            color: var(--white);
            text-align: center;
            line-height: 100px;
        }
    </style>`,
    code:`      <div class="colored-box">This box has a color defined by a CSS variable.</div>`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style"> CSS Functions </h1>
    <article>
        <p className="style_divv mt-5">
            تُستخدم وظائف <b>{"CSS"}</b> كقيمة لخصائص <b>{"CSS"}</b> المختلفة .
        </p>
    </article>
    <article>
        <h2 className="title-h2"> 1 - <bdi>attr()</bdi> </h2>
        <p className="style_divv">
            ترجع الدالة <bdi><b>attr()</b></bdi> قيمة إحدى سمات العناصر المحددة
            <CodeHighlighter code={code1} language="css" copie={true}/>
        </p>
        <div className="mital">متال  :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="CSS Function" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Function' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h1> The attr() Function </h1>
            <div>
                <a id="css-function-ex1" href="https://www.google.com"> 
                    Visit google 
                </a>
            </div>
        </Result>
    </article>
    <article>
        <h2 className="title-h2"> 2 - <bdi>calc()</bdi> </h2>
        <p className="style_divv">
            تقوم الدالة <bdi><b>calc()</b></bdi> بإجراء عملية حسابية لاستخدامها كقيمة الخاصية.
            <CodeHighlighter code={code2} language="css" copie={true}/>
        </p>
        <div className="mital">متال  :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} head={codeExemple2.head} language="html" is_html={true} title="CSS Function" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Function' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="css-function-ex2"><span style={{color:"aliceblue"}}> CSS calc() </span></div>
        </Result>
    </article>
    <article>
        <h2 className="title-h2"> 3 - <bdi>conic-gradient()</bdi> </h2>
        <p className="style_divv">
            تعيّن وظيفة <bdi><b>conic-gradient()</b></bdi> تدرجًا مخروطيًا كصورة الخلفية.<br/>
            التدرج المخروطي هو تدرج مع انتقالات لونية تدور حول نقطة مركزية.<br/>
            لإنشاء تدرج لوني مخروطي ، يجب عليك تحديد توقفي لوني على الأقل.<br/>
            <CodeHighlighter code={code3} language="css" copie={true}/>
        </p>
        <div className="mital">متال  :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} head={codeExemple3.head} language="html" is_html={true} title="CSS Function" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Function' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h1> Conic Gradient - Three Colors </h1>
            <div id="css-function-ex3"></div>
        </Result>
    </article>
    <article>
        <h2 className="title-h2"> 4 - <bdi>hsl()</bdi> </h2>
        <p className="style_divv">
            تحدد وظيفة <bdi><b>hsl()</b></bdi> الألوان باستخدام نموذج <bdi><b>Hue-saturation-lightness (HSL)</b></bdi>.<br/>
            يشير <b>HSL</b> إلى تدرج الألوان والتشبع والخفة - ويمثل تمثيل تنسيق أسطواني للألوان.

            <table className="table my-5 text-light">
                <thead>
                    <tr>
                        <th className="text-center"> قيمة </th>
                        <th className="text-center"> وصف </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>  تحدد درجة على عجلة الألوان (من 0 إلى 360) - 0 (أو 360) باللون الأحمر ، و 120 باللون الأخضر ، و 240 باللون الأزرق </td>
                        <td dir="ltr"> hue :  </td>
                    </tr>
                    <tr>
                        <td> يحدد التشبع ؛ 0٪ لون رمادي و 100٪ لون كامل (تشبع كامل) </td>
                        <td dir="ltr">saturation : </td>
                    </tr>
                    <tr>
                        <td> يحدد الخفة. 0٪ أسود ، 50٪ طبيعي ، و 100٪ أبيض </td>
                        <td dir="ltr"> lightness :  </td>
                    </tr>
                </tbody>
            </table>
            <CodeHighlighter code={code4} language="css" copie={true}/>
        </p>
        <div className="mital">متال  :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple4.code} head={codeExemple4.head} language="html" is_html={true} title="CSS Function" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Function' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h1>The hsl() Function</h1>
            <p>HSL colors with opacity:</p>
            <p id="css-function-ex4-p1">Green</p>
            <p id="css-function-ex4-p2">Light green</p>
            <p id="css-function-ex4-p3">Dark green</p>
            <p id="css-function-ex4-p4">Pastel green</p>
            <p id="css-function-ex4-p5">Red</p>
            <p id="css-function-ex4-p6">Light Red</p>
        </Result>            
    </article>
    <article>
        <h2 className="title-h2"> 5 - <bdi>linear-gradient()</bdi> </h2>
        <p className="style_divv">
            تعيّن وظيفة <bdi><b>linear-gradient()</b></bdi> تدرجًا خطيًا كصورة الخلفية.<br/>
            لإنشاء تدرج خطي ، يجب عليك تحديد لونين على الأقل. التوقفات اللونية هي الألوان التي تريد تجسيد انتقالات سلسة بينها. يمكنك أيضًا تعيين نقطة بداية واتجاه (أو زاوية) جنبًا إلى جنب مع تأثير التدرج اللوني.
            <CodeHighlighter code={code5} language="css" copie={true}/>
        </p>
        <div className="mital">متال  :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple5.code} head={codeExemple5.head} language="html" is_html={true} title="CSS Function" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Function' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h1> Linear Gradient - Top to Bottom </h1>
            <p>
              This linear gradient starts at the top. It starts red, transitioning to yellow, then to blue:
            </p>
            <div id="css-function-ex5"></div>
        </Result>  
        <div className="mital"> متال 2 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple6.code} head={codeExemple6.head} language="html" is_html={true} title="CSS Function" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Function' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h1>Linear Gradients - Using Different Angles</h1>
            <p id="css-function-ex5-grad-1">0deg</p>
            <p id="css-function-ex5-grad-2">90deg</p>
            <p id="css-function-ex5-grad-3">180deg</p>
            <p id="css-function-ex5-grad-4">-90deg</p>
        </Result>  
    </article>
    <article>
        <h2 className="title-h2"> 6 - <bdi>max()</bdi> </h2>
        <p className="style_divv">
            تستخدم الدالة <bdi><b>max()</b></bdi> القيمة الأكبر ، من قائمة القيم المفصولة بفواصل ، كقيمة الخاصية.           
            <CodeHighlighter code={code6} language="css" copie={true}/>
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple7.code} head={codeExemple7.head} language="html" is_html={true} title="CSS Function" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Function' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h1>The max() Function</h1>
            <p>
              Use max() to set the width of #div1
              to whichever value is largest, 50% or 300px:
            </p>
            <div id="css-function-ex6">Some text...</div>
            <p>Resize the browser window to see the effect.</p>
        </Result> 
    </article>
    <article>
        <h2 className="title-h2"> 7 - <bdi>min()</bdi> </h2>
        <p className="style_divv">
            تستخدم الدالة <bdi><b>min()</b></bdi> القيمة الأصغر ، من قائمة القيم المفصولة بفواصل ، كقيمة الخاصية.
            <CodeHighlighter code={code7} language="css" copie={true}/>
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple8.code} head={codeExemple8.head} language="html" is_html={true} title="CSS Function" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Function' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h1>The min() Function</h1>
            <p>
              Use min() to set the width of #div1
              to whichever value is smallest, 
              50% or 300px:
            </p>
            <div id="css-function-ex7">Some text...</div>
            <p>Resize the browser window to see the effect.</p>
        </Result> 
    </article>
    <article>
        <h2 className="title-h2"> 8 - <bdi>var()</bdi> </h2>
        <p className="style_divv">
            تُستخدم الدالة <bdi><b>var()</b></bdi> لإدخال قيمة متغير CSS.
            <CodeHighlighter code={code8} language="css" copie={true}/>
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple9.code} head={codeExemple9.head} language="html" is_html={true} title="CSS Function" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Function' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="css-function-ex8">This box has a color defined by a CSS variable.</div>
        </Result> 
    </article>
</section>
    )
}