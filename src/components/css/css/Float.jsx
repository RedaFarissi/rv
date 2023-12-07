import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./Float.css"

export default function Float(props){
    const codeExemple2= { 
    head:`  
      <style> 
         #float {
            float: right;
            width: 20%;
            height: 96px;
            background-color: blueviolet;
            font-size: large;
            text-align: center;
            line-height: 90px;
         }   
       </style>`,
    code:`      <div id="float"></div>`
    }
    const codeExemple3= { 
    head:`  
      <style> 
        #parent-div{
            width: 70%;
            height: 200px;
            border: 5px solid black;
        }
        #child {
            float: right;
            width: 20%;
            height: 96px;
            background-color: blueviolet;
            font-size: large;
            text-align: center;
            line-height: 200px;
         }   
       </style>`,
    code:`      
      <div id="parent-div">
            <div id="child"></div>
      </div>
      `
    }
    const codeExemple4= { 
    head:`  
      <style> 
        #div {
            width: 45%;
            height: 25vh;
            background-color: brown;
            float: left;
            font-size: x-large;
            color: white;
        }    
      </style>`,
    code:`      
    <div id="div">
        This is a floating text box.
    </div>
      `
    }
    const codeExemple5= { 
    head:`  
    <style> 
          #parent-div{
              margin: auto;
              width: 70%;
              height: 200px;
              border: 5px solid black;
          }
          #child {
              float: LEFT;
              width: 20%;
              height: 50%;
              border: 3px solid green;
              background-color: yellow;
              font-size: large;
              text-align: center;
              line-height: 200px;
              margin-top: 9px;
           }   
    </style>`,
    code:`        <div id="parent-div">
              <div id="child"></div>
        </div>`
    }
    const codeExemple6= { 
    head:`  
    <style>
        .div {
            width: 20%;
            height: 90px;
            float: left;
            font-size: xx-large;
            color: white;
        }
        .div1 { background-color: blue;  }
        .div2 { background-color: orange; }
        .div3 { background-color: brown;}
        .div4 { background-color: pink;  }
        .div5 { background-color: chartreuse;  }
        .div6 { background-color: red;  }
    </style>`,
    code:`        <div class="div div1">blue</div>
        <div class="div div2">orange</div>
        <div class="div div3">brown</div>
        <div class="div div4">pink</div>
        <div class="div div5">chartreuse</div>
        <div class="div div6">red</div>`
    }
    const codeExemple7= { 
        head:`  
        <style>
            .div {
                 width: 20%;
                 height: 90px;
                 font-size: xx-large;
                 color: white;
                 float: left;
                 margin: 2%;
            }
            .div1 {  background-color: red;}
            .div2 {  background-color: blue;}
            .div3 {  background-color: orange;}
            .div4 {  background-color: brown;}
            .div5 {  background-color: pink;}        
            .div6 { background-color: chartreuse;  }
        </style>`,
        code:`        <div class="div div1">red</div>
        <div class="div div2">blue</div>
        <div class="div div3">orange</div>
        <div class="div div4">brown</div>
        <div class="div div5">pink</div>
        <div class="div div6">chartreuse</div>`
        }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Float </h1>
    <article>
        <p className="style_divv mt-5">
            تُستخدم الخاصية <b>float</b> لتحديد موضع المحتوى وتنسيقه .<br/>
            يمكن أن تحتوي الخاصية <b>float</b> على إحدى القيم التالية:<br/>
            <ul>
                <li> <b>left</b> : يطفو العنصر إلى يسار الحاوية الخاصة به </li>
                <li> <b>right</b> : يطفو العنصر على يمين الحاوية الخاصة به</li>
                <li> <b>none</b> : لا يطفو العنصر (سيتم عرضه في مكان ظهوره في النص فقط). هذا هو الافتراضي</li>
                <li> <b>inherit</b> : يرث العنصر القيمة <b>float</b>  للعنصر الأصل </li>
            </ul>
            في أبسط استخدام لها ، يمكن استخدام خاصية الطفو لالتفاف النص حول الصور.
        </p>
        <div className="mital"> متال : </div>
        <Result title='CSS Float' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
             <div className="css-float-ex1-flo text-light" style={{float:"left"}}>float left</div>
            <div className="css-float-ex1-flo text-light" style={{float:"right"}}>float right</div>
            <br style={{clear:"both"}}/>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">1. الخاصية float مع القيمة right </h2>
        <div className="mital"> متال : </div>
        <ul>
            <li>في هاذا المتال العنصر <b>div</b> الذي قمنى بإضافة له الخاصية <b>float</b> لا يتواجد ضمن أي عنصر أخر لذالك سيكون يمين الصفحة لأنه يعود في هذه الحالة على العنصر <b>body</b>  </li>
        </ul>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} head={codeExemple2.head} language="html" is_html={true} title="CSS Float" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Float' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="css-float-ex2"></div>
            <br style={{clear:"both"}}/>
        </Result>
        <div className="mital"> متال 2 : </div>
        <ul>
            <li>في هاذا المتال العنصر <b>div</b> الذي قمنى بإضافة له الخاصية <b>float</b> يتواجد ضمن عنصر <b>div</b> أخر .</li>
            <li> بواسطة  <b>id</b> قمنا بتحيد عرض العنصر <b>div</b> الأب بقيمة  <bdi>75%</bdi>  عند إعطاء الخاصية <b>float</b> للوسم <b>div</b> الإبن سيتم تحديد الموضع نسبتا للوسم الأب .</li>
        </ul>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} head={codeExemple3.head} language="html" is_html={true} title="CSS Float" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Float' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="css-float-ex3-parent-div">
                <div id="css-float-ex3-child"></div>
            </div>
            <br style={{clear:"both"}}/>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">2. الخاصية float مع القيمة left </h2>
        <div className="mital"> متال : </div>
        <ul>
            <li>في هاذا المتال العنصر <b>div</b> الذي قمنى بإضافة له الخاصية <b>float</b> لا يتواجد ضمن أي عنصر أخر لذالك سيكون يسار الصفحة لأنه يعود في هذه الحالة على العنصر <b>body</b>  </li>
        </ul>
        <CodeHighlighter file_name="index.html"code={codeExemple4.code} head={codeExemple4.head} language="html" is_html={true} title="CSS Float" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Float' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="css-float-ex4-div">
              This is a floating text box.
            </div>
            <br style={{clear:"both"}}/>
        </Result>
        <div className="mital"> متال 2 : </div>
        <ul>
            <li>في هاذا المتال العنصر <b>div</b> الذي قمنى بإضافة له الخاصية <b>float</b> يتواجد ضمن عنصر <b>div</b> أخر .</li>
            <li> بواسطة  <b>id</b> قمنا بتحيد عرض العنصر <b>div</b> الأب بقيمة  <bdi>60%</bdi> وجعلناه وسط الصفحت بستخدام الخاصية <b>margin</b> مع القيمة <b>auto</b> عند إعطاء الخاصية <b>float</b> للوسم <b>div</b> الإبن سيتم تحديد الموضع نسبتا للوسم الأب .</li>
        </ul>
        <CodeHighlighter file_name="index.html"code={codeExemple5.code} head={codeExemple5.head} language="html" is_html={true} title="CSS Float" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Float' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="css-float-ex5-parent-div">
                <div id="css-float-ex5-child"></div>
            </div>
            <br style={{clear:"both"}}/>
        </Result>
       
        <br/>
        <div className="mital"> متال 3 : </div>
        <ul>
            <li>في هذا المتال قمنا بتحديد لكل عناصر <b>div</b> الخاصية <b>width</b> بنسبة <bdi>20%</bdi> تم الخاصية  <b>float</b> بالقيمة <b>left</b> لكل العناصر لاحض أن أول 5 عناصر تم عرضها في سطر واحد لأن <bdi>5 x 20 = 100</bdi> .  </li>   
        </ul>
        <CodeHighlighter file_name="index.html"code={codeExemple6.code} head={codeExemple6.head} language="html" is_html={true} title="CSS Float" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Float' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div class="css-float-ex6-div css-float-ex6-div1">blue</div>
            <div class="css-float-ex6-div css-float-ex6-div2">orange</div>
            <div class="css-float-ex6-div css-float-ex6-div3">brown</div>
            <div class="css-float-ex6-div css-float-ex6-div4">pink</div>
            <div class="css-float-ex6-div css-float-ex6-div5">chartreuse</div>
            <div class="css-float-ex6-div css-float-ex6-div6">red</div>
            <br style={{clear:"both"}}/>
        </Result>

        <div className="mital"> متال 4 : </div>
        <ul>
            <li>يمكن إنشاء فراغ لتفرقة بين العناصر وذالك بستخدام الخاصية <b>margin</b> . </li>
            <li>لاحض أن العنصر الدي يحمل خلفية بلون <b>pink</b> تغير مكانه وذالك لأنه تم إضافة <b>margin</b> لكل الجوانب بنسبة ,<bdi>2%</bdi> وبتالي لم تعد المساحة كافية ونتيجتا لذالك تم إعادته لسطر جديد </li>
        </ul>
        <CodeHighlighter file_name="index.html"code={codeExemple7.code} head={codeExemple7.head} language="html" is_html={true} title="CSS Float" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Float' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div class="css-float-ex7-div css-float-ex7-div1">red</div>
            <div class="css-float-ex7-div css-float-ex7-div2">blue</div>
            <div class="css-float-ex7-div css-float-ex7-div3">orange</div>
            <div class="css-float-ex7-div css-float-ex7-div4">brown</div>
            <div class="css-float-ex7-div css-float-ex7-div5">pink</div>
            <div class="css-float-ex7-div css-float-ex7-div6">chartreuse</div>
            <br style={{clear:"both"}}/>
        </Result>
    </article>
</section>
)
}