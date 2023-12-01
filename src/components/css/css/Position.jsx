import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./Position.css"

export default function Position(props){
    const codeExemple1= { 
    head:`  
    <style> 
        .div {
           width: 90px;
           height: 90px;
           color: white;
        }
        .posi1 {
           background-color: blue;
        }
        .posi2 {
           background-color: red;
           position: relative;
           left: 9%;
           top: 40px;
        }
        .posi3 {
           background-color: green;
        }   
    </style>`,
    code:`      <div class="div posi1"></div>
      <div class="div posi2"></div>
      <div class="div posi3"></div>`
    }
    const codeExemple2= { 
    head:`  
    <style> 
        .div_relative {
            background-color: fuchsia;
            border: 3px solid blue;
            width: 70%;
            height: 20vh;
            color: white;
            position: relative;
        }
      
        .div_absolute {
            background-color: blue;
            border: 3px solid greenyellow;
            width: 50%;
            height: 10vh;
            position: absolute;
            left: 50%;
            top: 50%;
        }
    </style>`,
    code:`      <div class="div_relative">
    <div class="div_absolute">
        Absolute
    </div>
  </div>`
    }
    const codeExemple3= { 
    head:`  
    <style> 
        .div {
            width: 200px;
            height: 200px;
            color: white;
        }
        .div_absol1 {
            background-color: red;
        }
        .div_abso2 {
            background-color: blue;
            position: absolute;
            left: 150px;
            top: 90px;
        }
        .div_abso3 {
            background-color: green;
        }
    </style>`,
    code:`      <div class="div div_absol1"> Absolute </div>
      <div class="div div_abso2"> Absolute </div>
      <div class="div div_abso3"> Absolute </div>`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Position </h1>
    <article>
        <p class="style_divv mt-5">
            تحدد خاصية <b>position</b> طريقة تحديد الموضع المستخدمة للعنصر.
            هناك خمس قيم مختلفة للخاصية <b>position</b> وهي كالتالي:
            <ul dir="ltr">
                <li>position : static</li>
                <li>position : relative</li>
                <li>position : fixed</li>
                <li>position : absolute</li>
                <li>position : sticky</li>
            </ul>
        </p>
    </article>
    <article>
        <h2 className="title-h2">1. القيمة static مع الخاصية position</h2>
        <p class="style_divv">
            يتم وضع عناصر <b>HTML</b> مع القيمة <b>static</b> دائما كقيمة أولية .<br/>
            لا تتأثر العناصر بالقيمة <b>static</b> المتموضعة بالخصائص العلوية والسفلية واليسرى واليمنى.<br/>
            أي عنصر <b>HTML</b> مع الخاصية <b>position</b> والقيمة <b>static</b> فهو عنصر لم يتم وضعه بأي طريقة خاصة يتم وضعه دائمًا وفقًا للتدفق الطبيعي للصفحة .
        </p>
    </article>
    <article>
        <h2 className="title-h2">2. القيمة relative  مع الخاصية position</h2>
        <p class="style_divv">
            تحدد خاصية <b>relative</b> كيفية وضع عنصر في المستند .<br/>
            عند تغير مكان عنصر من عناصر <b>HTML</b> بستخدام القيمة <b>relative</b> مع الخاصية <b>position</b> يتم تحويل العنصر إلى المكان المحدد بستعمال الخصائص <b>top</b> و <b>bottom</b> و <b>left</b> و <b>right</b> ولاكن يبقى المكان الأصلي محجوز مما يعني أنه لن يتم تعديل المحتوى الآخر ليناسب أي فجوة يتركها العنصر . 
        </p>
        <div class="mital"> متال : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" title="CSS Position" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Position' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div className="css-position-ex1-div css-position-ex1-posi1"></div>
            <div className="css-position-ex1-div css-position-ex1-posi2"></div>
            <div className="css-position-ex1-div css-position-ex1-posi3"></div>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">3. القيمة fixed  مع الخاصية position</h2>
        <p class="style_divv">
            تستخدم القيمة <b>fixed</b> مع عناصر <b>HTML</b> بالنسبة إلى إطار العرض ، و  يظل دائمًا في نفس المكان حتى إذا تم تمرير الصفحة. يتم استخدام الخصائص <b>top</b> و <b>bottom</b> و <b>left</b> و <b>right</b> لتحديد موضع العنصر .<br/>
            لا يترك العنصر الثابت فجوة في الصفحة حيث كان من الطبيعي أن يكون موجودًا.<br/>
            تبقى العناصر  <b>HTML</b> في نفس المكان حتى بعد تمرير شريط التمرير . <br/>   
            لاحظ العنصر الثابت في الزاوية اليمنى السفلية من الصفحة. هنا هو CSS المستخدم:
        </p>
        <div id="fix_div" dir="ltr"> div with position:fixed </div>
    </article>
    <article>
        <h2 className="title-h2">4. القيمة absolute  مع الخاصية position</h2>
        <p class="style_divv">
            تستخدم القيمة <b>absolute</b> مع عناصر <b>HTML</b> لتحديد مكان وضع العنصر و  يتم وضعه بالنسبة إلى أقرب خاصية <b>position</b> مع قيمة <b>relative</b> . في حال لم يكن أي عنصر يحمل الخاصية <b>position</b> مع قيمة <b>relative</b> سيكون المرجع هو القيمة الأولية للخاصية <b>position</b>.<br/>
            تتم إزالة العناصر المطلقة ذات المواضع من التدفق العادي ، ويمكن أن تتداخل مع العناصر مما يعني أنه يتم تعديل المحتوى الآخر ليصبح بتدفق العادي .<br/>
        </p>
        <div class="mital"> متال : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} head={codeExemple2.head} language="html" title="CSS Position" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Position' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
           <div className="css-position-ex2-div_relative">
              <div class="css-position-ex2-div_absolute">
                  Absolute
              </div>
            </div>
        </Result>
        <div class="mital"> متال 2 : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} head={codeExemple3.head} language="html" title="CSS Position" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Position' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div className="position-relative">
                <div className="css-position-ex3-div css-position-ex3-div_absol"> Absolute </div>
                <div className="css-position-ex3-div css-position-ex3-div_abso2"> Absolute </div>
                <div className="css-position-ex3-div css-position-ex3-div_abso3"> Absolute </div>
            </div>
        </Result>
    </article>
</section>
)
}