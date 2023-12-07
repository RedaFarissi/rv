import images from "../imagesCss";
import { CodeHighlighter ,  Result} from "../../path";
import "./Margin.css"

export default function Margin(props){
    const codeExemple1= { 
    head:`  
    <style> 
         h2 {
           color: blue;
         }
         div {
           border: 1px solid black;
           margin: 90px 20px;
           font-size: 17px;
         } 
    </style>`,
    code:`    <h2>Title 1</h2>
    <div>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
    </div>`
    }
    const codeExemple2= { 
    head:`  
    <style> 
        .css-margin-ex2-div-1 {
            order: 1px solid black;
            font-size: 17px;
            width: max-content;
            margin: auto;
            padding: 20px;
            margin-bottom: 30px;
          }
        .css-margin-ex2-div-2 {
           border: 1px solid red;
           margin-left: 25px;
           margin-right: 9px;
           margin-bottom: 76px;
           margin-top: 3px;
           font-size: 17px;
         } 
    </style>`,
    code:`    <div class="css-margin-ex2-div-1">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    </div> 
    <hr/>
    <div class="css-margin-ex2-div-2">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    </div>
    <hr/>`
    }
    const codeExemple3= { 
    head:`  
    <style> 
        #h2_without_margin {
          width: 70%;
          background-color: red;
          color: white;
        }

        #h2_with_margin {
          width: 70%;
          background-color: yellowgreen;
          color: white;
          margin: auto;
        }
    </style>`,
    code:`    <div id="h2_without_margin">
      <h2>Without Margin</h2>
    </div>

    <div id="h2_with_margin">
      <h2>With Margin</h2>
    </div>`
    }

    const codeExemple4= { 
    head:`  
    <style> 
        .css-margin-ex4 {
          width: 70%;
          background-color: red;
          border: 2px solid green;
          margin: 4px auto;
        }

        .css-margin-ex4-without-margin {
            background-color: greenyellow;
            border: 2px solid white;
            padding: 1rem;
        }
        .css-margin-ex4-with{
            background-color: greenyellow;
            border: 2px solid white;
            padding: 1rem;
            margin: 20px;
        }
    </style>`,
    code:`    <div class="css-margin-ex4">
      <h2 class="css-margin-ex4-without-margin"> Without Margin </h2>
    </div>

    <div class="css-margin-ex4">
      <h2 class="css-margin-ex4-with">With Margin</h2>
    </div>`
    }
    
    
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Margin </h1>
    <article>
        <p className="style_divv mt-5">
            يتم استخدام الخاصية <b>margin</b> في لغة  <b>CSS</b> لإنشاء مساحة حول محتوى عنصر خارج ال <b>border</b> في عنصر محدد .<br/>
            مع <b>CSS</b>، لديك السيطرة الكاملة على <b>margin</b> . توجد خصائص لإعداد <b>margin</b> لكل جانب من عناصر (أعلى، يمين، أسفل، ويسارا).
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="CSS Height" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Height' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2 className="css-margin-ex1-h2">Title 1</h2>
            <div className="css-margin-ex1-div">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </div>
        </Result>
        <ul>
            <li> في المتال أعلاه نلاحض أنه تم إعطاء قيمتين لل <b>margin</b> .</li>
            <li> القيمة الأولى تشمل <b>margin-top</b> و <b>margin-bottom</b> .</li>
            <li> القيمة التانية تخص <b>margin-left</b> و <b>margin-right</b>.</li>
        </ul>
    </article>
    <article>
        <h2 className="title-h2">1.  الجوانب الفردية -  margin </h2>
        <p className="style_divv">
          <b>CSS</b> له خصائص لتحديد <b>margin</b>  لكل جانب من العناصر :<br/>
            <ul>
                <li>margin-top</li>
                <li>margin-right</li>
                <li>margin-bottom</li>
                <li>margin-left</li>
            </ul>
        </p>
        <div className="sum_exemple_style">
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} head={codeExemple2.head} language="html" is_html={true} title="CSS Height" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Height' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div className="css-margin-ex2-div-1">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </div> 
            <hr className="p-0 m-0"/>
            <div className="css-margin-ex2-div-2">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </div>
            <hr className="mb-3 m-0"/>
        </Result>
        </div>
    </article>
    <article>
        <h2 className="title-h2">2. الخاصية margin مع القيمة auto </h2>
        <p className="style_divv">
            تستخدم القيمة  <b>auto</b> مع الخاصية <b>margin</b> لجعل العنصر وسط الصفحة أو وسط العنصر الأب إذا كان <div className=""></div> 
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} head={codeExemple3.head} language="html" is_html={true} title="CSS Height" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Height' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div className="css-margin-ex3-without-margin">
              <h2>Without Margin</h2>
            </div>
            <div className="css-margin-ex3-with-margin">
              <h2>With Margin</h2>
            </div>
        </Result>
        <div className="mital">متال 2 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple4.code} head={codeExemple4.head} language="html" is_html={true} title="CSS Height" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Height' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div class="css-margin-ex4">
              <h2 class="css-margin-ex4-without-margin"> Without Margin </h2>
            </div>

            <div class="css-margin-ex4">
              <h2 class="css-margin-ex4-with">With Margin</h2>
            </div>
        </Result>
    </article>   

 </section>
        )
}