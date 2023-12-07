import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./Background.css"


export default function Background(props){
const codeExemple1= { 
    head:`  
    <style> 
      body{
          background-color: red;
      }
      .css-background-ex1{
          background-color: aqua;
          color: violet;
          font-size: 33px;
      }
    </style>`,
    code:`       <div class="css-background-ex1">
       Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>`
}
const codeExemple2= { 
    head:`  
    <style> 
      body{
          background-image: url("./orange.jpg");
      }
      .css-background-ex2{
          color: orange;
          font-size: 70px;
          background-color: white; 
          text-align: center;
          margin-top: 33vh;
      }
    </style>`,
    code:`       <h2 class="css-background-ex2">Orange</h2>`
}
const codeExemple3= { 
    head:`  
    <style> 
      body{
          background-image: url("./orange.jpg");
          background-repeat : no-repeat ;
      }
    </style>`,
}
const codeExemple4= { 
    head:`  
    <style> 
        body{
            background-image: url("./orange.jpg");
            background-repeat : repeat-x ;
         }
    </style>`,
}
const codeExemple5= { 
    head:`  
    <style> 
        body{
            background-image: url("./orange.jpg");
            background-repeat : repeat-y ;
        }
    </style>`,
}
const codeExemple6= { 
    head:`  
    <style> 
      body{
          background-image: url("./orange.jpg");
          background-repeat : no-repeat ;
          background-position: center center;
          background-attachment: fixed;
      }
    </style>`,
}
const codeExemple7= { 
    head:`  
    <style> 
      .css-background-ex7{
          font-size: larger;
          padding:20px;
          border: 12px dashed #ffcc90;
          background-color : greenyellow ;
          background-clip: padding-box; 
      }
    </style>`,
    code: `      <div className="css-background-ex7">
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsum nobis 
         aliquid distinctio laudantium obcaecati vitae laboriosam fugit, nemo doloremque, 
         minima reprehenderit fuga sequi aspernatur. Fugit ut odio officiis debitis.
    </div>`
}
const codeExemple8= { 
    head:`  
    <style> 
        .css-background-ex8{
            font-size: larger;
            padding:20px;
            border: 12px dashed #ffcc90;
            background-color : greenyellow ;
            background-clip: border-box; 
        }
    </style>`,
    code: `      <div className="css-background-ex8">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsum nobis 
        aliquid distinctio laudantium obcaecati vitae laboriosam fugit, nemo doloremque, 
        minima reprehenderit fuga sequi aspernatur. Fugit ut odio officiis debitis.
    </div>`
}
const codeExemple9= { 
    head:`  
    <style> 
        #css-background-ex9{
           font-size: larger;
           padding:20px;
           border: 12px dashed #ffcc90;
           background-color : greenyellow ;
           background-clip: content-box; 
        }
    </style>`,
    code: `      <div id="css-background-ex9">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsum nobis 
        aliquid distinctio laudantium obcaecati vitae laboriosam fugit, nemo doloremque, 
        minima reprehenderit fuga sequi aspernatur. Fugit ut odio officiis debitis.
     </div>`
}
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Background </h1>
    <article>
        <p className="style_divv">
            يتم استخدام خاصية <b>Background</b> في <b>CSS</b> لإضافة تأثيرات خلفية للعناصر.<br/>
            في هذا الفصل، سوف تتعلم حول خصائص خلفية <b>CSS</b> التالية:
            <ul dir="ltr">
                <li><b>background-color</b></li>
                <li><b>background-image</b></li>
                <li><b>background-repeat</b></li>
                <li><b>background-attachment</b></li>
                <li><b>background-position</b></li>
                <li><b>background-clip</b></li>
            </ul>
        </p>
    </article>
    <article>
        <h2 className="title-h2">1.  لون الخلفية background-color </h2>
        <ul><li> تحدد خاصية <b>background-color</b> لون خلفية عنصر. </li></ul>
        <div className="sum_exemple_style">
        <div className="mital">متال : </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="CSS Background" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Background' styleAdd="css-background-ex1-body" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div className="css-background-ex1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
        </Result>
        </div>
        <ul>
            <li>مع CSS، يتم تحديد اللون في أغلب الأحيان بواسطة:</li>
                <ul>
                    <li> اسم لون صالح مثل <b>red</b> </li>
                    <li> قيمة <b>HEX</b> مثل <bdi>#ff0000</bdi></li>
                    <li> قيمة <b>RGB</b> مثل  rgb(255,0,0)</li>
                </ul>
        </ul>
        <ul><li>يمكنك تعيين لون الخلفية لأي عنصر <b>HTML</b></li></ul>
    </article>
    <article>
        <h2 className="title-h2">2. تحديد صورة كخلفية background-image</h2>
        <ul><li>تحدد خاصية <b>background-image</b> صورة لاستخدامها كخلفية لعنصر.
        بشكل افتراضي، يتم تكرار الصورة بحيث تغطي العنصر بأكمله وذالك فقط أن كانت الصورة صغيرة الحجم .<br/></li></ul>
   
        <div className="mital">متال : </div>
        <CodeHighlighter file_name="index.html" code={codeExemple2.code} head={codeExemple2.head} language="html" is_html={true} title="CSS Background" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Background' styleAdd="css-background-ex2-body" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
           <h2 className="css-background-ex2">Orange</h2>
        </Result>
                <ul><li> تم تكرار الصورة لكي تناسب الخلفية تلقائيا .</li></ul>
    </article>
    <article>
        <h2 className="title-h2">3. تكرار الخلفية background-repeat</h2>
        <ul>
            <li> بشكل افتراضي، خاصية <b>background-image</b> تكرر صورة أفقيا وعموديا. ولاكن أنت كمصمم مواقع قد تريد تكرار بعض الصور أفقيا أو رأسيا فقط ، أو منع التكرار نهائيا يمكن التحكم بكل ذالك بستعمال <b>background-repeat</b> .</li>
            <li> يمكن أن تحتوي الخاصية <b>background-repeat</b> على القيم التالية : no-repeat أو (قيمة أولية) repeat  أو  repeat-x  أو repeat-y</li>
        </ul>
        <div className="sum_exemple_style">
        <div className="mital">متال :</div>
        <CodeHighlighter file_name="index.html" code="" head={codeExemple3.head} language="html" is_html={true} title="CSS Background" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Background' styleAdd="css-background-ex3-body" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
        </Result>
        </div>
        <ul><li>في هاذا المتال الصورة لم تتكرر لأننا قمن بكتابة الخاصية <b>background-repeat</b> مع القيمة <b>no-repeat</b> .</li></ul>
        <div className="mital">متال 2 :</div>
        <CodeHighlighter file_name="index.html" code="" head={codeExemple4.head} language="html" is_html={true} title="CSS Background" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Background' styleAdd="css-background-ex4-body" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
        </Result>
        <ul><li>في المتال التاني الصورة تكررت أفقيا لأننا قمن بكتابة الخاصية <b>background-repeat</b> مع القيمة <b>repeat-x</b> .</li></ul>

        <div className="mital">متال 3 :</div>
        <CodeHighlighter file_name="index.html" code="" head={codeExemple5.head} language="html" is_html={true} title="CSS Background" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Background' styleAdd="css-background-ex5-body" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
        </Result>
        <ul><li>في المتال التالت الصورة تكررت عموديا لأننا قمن بكتابة الخاصية <b>background-repeat</b> مع القيمة <b>repeat-y</b> .</li></ul>
    </article>
    <article>
        <h2 className="title-h2">4.  تحديد مكان الخلفية  background-position</h2>
        <ul>
            <li> عند إدخال خلفية من نوع صورة يمكن إستعمال الخاصية <b>background-position</b> مع القيم التالية <b>left top</b> أو <b>left center</b> أو <b>left bottom</b> أو <b>right top</b> أو <b>right center</b> أو <b>right bottom</b> أو <b>center top</b> أو <b>center center</b> أو <b>center bottom</b> وذالك لتحديد المكان الذي تريد وضع فيه الخلفية من نوع صور </li>
            <li> يجب إستخدام الخاصية <b>background-attachment</b> مع القيمة <b>fixed</b> لجعل الصورة تابتة بمكان واحد  </li>
        </ul>
        <div className="sum_exemple_style">
        <div className="mital">متال 4 :</div>
        <CodeHighlighter file_name="index.html" code="" head={codeExemple6.head} language="html" is_html={true} title="CSS Background" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Background' styleAdd="css-background-ex6-body" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
        </Result>
        </div>
    </article>
    <article>
        <h2 className="title-h2">5. إمتداد الخلفية background-clip </h2>
        <ul>
            <li>تستعمل الخاصية <b>background-clip</b>  خاصية لتحديد مدى إمتتداد الخلفية (الألوان أو الصورة) داخل عنصر</li>
            <li>يمكن إعطاء الخاصية  <b>background-clip</b> القيم <b>padding-box</b> أو <b>border-box</b> أو  <b>content-box</b> .</li>
        </ul>
        <div className="sum_exemple_style">
        <div className="mital">متال :</div>
        <ul><li>القيمة <b>padding-box</b> تجعل ال <b>border</b> خارج الخلفية ولاكن بدون ترك مساحة بين الإتنين . </li></ul>
        <CodeHighlighter file_name="index.html" code={codeExemple7.code} head={codeExemple7.head} language="html" is_html={true} title="CSS Background" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Background' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div className="css-background-ex7">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsum nobis 
                aliquid distinctio laudantium obcaecati vitae laboriosam fugit, nemo doloremque, 
                minima reprehenderit fuga sequi aspernatur. Fugit ut odio officiis debitis.
            </div>
        </Result>
        </div>
        <div className="sum_exemple_style">
        <div className="mital">متال 2 :</div>
        <ul><li> القيمة <b>border-box</b> تجعل ال <b>border</b> داخل الخلفية  .</li></ul>
        <CodeHighlighter file_name="index.html" code={codeExemple8.code} head={codeExemple8.head} language="html" is_html={true} title="CSS Background" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Background' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div className="css-background-ex8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsum nobis 
                aliquid distinctio laudantium obcaecati vitae laboriosam fugit, nemo doloremque, 
                minima reprehenderit fuga sequi aspernatur. Fugit ut odio officiis debitis.
            </div>
        </Result>
        </div>
        <div className="sum_exemple_style">
        <div className="mital">متال 3 :</div>
        <ul><li> القيمة <b>content-box</b> تجعل ال <b>border</b> خارج الخلفية و تترك <b>margin</b> بين الإتنين يمكن إختيار حجم ال <b>margin</b> بنفسك في هذه الحالة 20px .</li></ul>
        <CodeHighlighter file_name="index.html" code={codeExemple9.code} head={codeExemple9.head} language="html" is_html={true} title="CSS Background" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Background' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div className="css-background-ex9">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsum nobis 
                aliquid distinctio laudantium obcaecati vitae laboriosam fugit, nemo doloremque, 
                minima reprehenderit fuga sequi aspernatur. Fugit ut odio officiis debitis.
            </div>
        </Result>
        </div>
    </article>
</section>
)
}