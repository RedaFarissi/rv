import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./Border.css"

export default function Border(props){
    const codeExemple1= { 
    head:`  
    <style> 
        #title2{
           border: 9px solid green;
        } 
        #title3{
            border: 5px solid rgba(255,0,0);
        }    
    </style>`,
    code:`     <h2 id="title1">Title 1</h2>
    <h2 id="title2">Title 2</h2>
    <h2 id="title3">Title 3</h2>`
    }

    const codeExemple2= { 
    head:`  
    <style> 
        #title1 {
            border-left: 8px solid black;
            border-bottom: 8px solid red;
            border-top: 8px solid green;
            border-right: 8px solid yellow;
          }
      
          #title2 {
            border-top: 8px dotted deeppink;
            border-bottom: 8px double brown;
          }
    </style>`,
    code:`     <h2 id="title1">title 1</h2>
    <div id="p1">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
      ut laoreet dolore magna aliquam erat volutpat.
    </div>
    <h2 id="title2">title 2</h2>
    <div id="p2">
      Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
      aliquip ex ea commodo consequat.
    </div>`
    }
    const codeExemple3= { 
    head:`
    <style> 
        .border-aqua {
            border-style: solid;
            border-width: 9px;
            border-color: aqua;
          }
    </style>`,
    code:`     <h2 class="border-aqua">title 1</h2>
    <img src="./orange2.jpg" width="200px" class="border-aqua"/>
    <img src="./css_logo.jpg" width="200px" class="border-aqua"/>`
    }
    const codeExemple4= { 
    head:`
    <style>
        #a,#b,#c,#d{ 
            background-color: yellow; 
            width: 350px; 
            padding: 9px;
        }
        #a{border: groove 9px red;}
        #b{border: ridge  9px red;}
        #c{border: inset  9px red;}
        #d{border: outset 9px red ;}      
      </style>`,
    code:`     <h2>border-style: groove</h2>
     <p id="a"> border: groove 9px red; </p>
     <h2>border-style: ridge</h2>
     <p id="b"> border: ridge  9px red; </p>
     <h2>border-style: inset </h2>
     <p id="c"> border: inset  9px red; </p>
     <h2>border-style: outset</h2>
     <p id="d">border: outset 9px red ;</p>`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Border </h1>
    <article>
        <h2 className="title-h2">1- إنشاء حدود </h2>
        <p class="style_divv">
            تسمح لك الخاصية <b>border</b> في لغة  <b>CSS</b> بتحديد خط يمتل حد العنصر يمكن تحديد عرض الخط و نوعه و لونه أيضا  .<br/>
               يمكن تحديد لون و سمك و نوع الخط دفعتا واحدة كما هو موضح أسفله  ولاكن يجب أن تكتب القيم بترتيب محدد وهو كتالي :<br/>
            1. قيمة محددة بال <b>px</b> أو  <b>ch</b> أو  <b>em</b> أو <b>cm</b>  أو <b>in</b> أو <b>mm</b> أو <b>pc</b> ..إلخ . غالبا ما نستخدم px .<br/>
            2. نوع الخط يكون عبارة عن واحد من الأشكال التالية <b>dashed</b> , <b>solid</b> , <b>dotted</b> , <b>wavy</b> :<br/>
                <ul>
                    <li> <b>solid</b> : تستعمل من أجل الخط المتصل </li>
                    <li> <b>dashed</b> : تستعمل من أجل الخط المتقطع </li>
                    <li> <b>dotted</b>  : تستعمل من أجل إنشاء خط  من النقط </li>
                    <li> <b>wavy</b>  : تستعمل من أجل إنشاء خط  مموج  </li>
                    <li> <b>double</b> :  تستعمل من أجل الخط المزدوج    </li>
                </ul>
            3. لون الخط يمكنك تحديد أي لون تريد بصيغة أحرف متل black , aqua , .. أو بضيغة rgb() أو بصغة <b>HEX</b> .
            <ul><li><small>ستتعلم كل شيئ عن الألوان في فقرة <b>color</b> من هاذا البرنامج التعليمي الخاص بلغة <b>CSS</b> .</small></li></ul>
        </p>
        <div class="mital">متال : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="CSS Border" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Border' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Title 1</h2>
            <h2 className="css-border-ex1-title2">Title 2</h2>
            <h2 className="css-border-ex1-title3">Title 3</h2>
        </Result>
        <ul>
            <li> ال <b>border</b> هو ذالك الإطار الذي  يحيط بالعناوين يمكن أتحكم بشكل الخط واللون و  سمك الخط . </li>
        </ul>
    </article>
    <article>
        <h2 className="title-h2">2- تحديد إتجاه الحدود</h2>
        <p class="style_divv">
            في المتال الأول  عند تحديد عنصر و إعطائه الخاصية <b>border</b> فإن الحد يشمل يمين العنصر ويساره و الفوق و التحت وتلك تكون طريقة جيدة أحيانا ولاكن أحيانا أخرى قد تكون غير مرغوبة  .<br/>
            يمكنك كتابة <b>border</b> كل إتجاه لوحده وتحكم بشكل أفضل
        </p>
        <div class="mital"> متال : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} head={codeExemple2.head} language="html" is_html={true} title="CSS Border" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Border' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2 className="css-border-ex2-title1">title 1</h2>
            <div id="p1">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
              ut laoreet dolore magna aliquam erat volutpat.
            </div>
            <h2 className="css-border-ex2-title2">title 2</h2>
            <div id="p2">
              Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
              aliquip ex ea commodo consequat.
            </div>
        </Result>
        <div class="mital"> متال : </div>
        <ul><li>  طرق أخرى لتحديد border .</li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} head={codeExemple3.head} language="html" is_html={true} title="CSS Border" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Border' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2 className="css-border-ex3-border-aqua">title 1</h2>
            <img src={images.orange1} alt="orange1" width="200px" className="css-border-ex3-border-aqua"/>
            <img src={images.css_logo} alt="css logo" width="200px" className="css-border-ex3-border-aqua"/>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">3- الخط التلاتي الأبعاد </h2>
        <p class="style_divv">
         الخط التلاتي الأبعاد و يكون عبارة عن واحد من الأشكال التالية <b>groove</b> , <b>ridge</b> , <b>inset</b> , <b>outset</b> :<br/>
            <ul>
                <li><b>groove</b> : يحدد حدًا محززًا ثلاثي الأبعاد. التأثير يعتمد على قيمة لون الحدود </li>
                <li><b>ridge</b> : يحدد حدًا مموجًا ثلاثي الأبعاد. التأثير يعتمد على قيمة لون الحدود</li>
                <li><b>inset</b> : يحدد حد داخلي ثلاثي الأبعاد. التأثير يعتمد على قيمة لون الحدود</li>
                <li><b>outset</b> : يحدد حد خارجي ثلاثي الأبعاد. التأثير يعتمد على قيمة لون الحدود</li>
            </ul>
        </p>
        <div class="mital"> متال : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple4.code} head={codeExemple4.head} language="html" is_html={true} title="CSS Border" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Border' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>border-style: groove</h2>
            <p id="css-border-ex4-a"> border: groove 9px red; </p>
            <h2>border-style: ridge</h2>
            <p id="css-border-ex4-b"> border: ridge  9px red; </p>
            <h2>border-style: inset </h2>
            <p id="css-border-ex4-c"> border: inset  9px red; </p>
            <h2>border-style: outset</h2>
            <p id="css-border-ex4-d">border: outset 9px red ;</p>
        </Result>
    </article>
</section>
)
}