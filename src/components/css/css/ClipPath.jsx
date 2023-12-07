import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./ClipPath.css"

export default function ClipPath(props){
    const codeExemple1= { 
    head:`  
    <style> 
    .parent{margin: 20px;
        width: 230px;
        height: 230px;
        background-color: darkgrey;
        border-radius: 7px;
        padding: 5px;
    }
    .child-test{ width: 220px; height: 220px; }
    .test{
        background-color: red;
        clip-path: ellipse(50% 30% at 50% 50%); /* at 50% 50% by default */
    }
    .test2{ background-color: green; clip-path: ellipse(50% 30% at 0%); }
    .test3{ background-color: yellow; clip-path: ellipse(50% 30% at 0% 0%);}
    .test4{ background-color:aqua; clip-path:ellipse(100% 30%);}
    
    </style>`,
    code:`      <div style="display:flex;flex-wrap:wrap;">
          <div class="parent">
              <div class="child-test test"></div>
          </div>   
          <div class="parent">
              <div class="child-test test2"></div>
          </div>
          <div class="parent">
              <div class="child-test test3"></div>
          </div>
          <div class="parent">
              <div class="child-test test4"></div>
          </div>
      </div>  `
    }
    const codeExemple2= { 
    head:`  
    <style> 
        .parent{margin: 20px;
            width: 230px;
            height: 230px;
            background-color: darkgrey;
            border-radius: 7px;
            padding: 5px;
        }
        .child-test{ width: 220px; height: 220px; }
        .test{
            background-color: red;
            clip-path: ellipse(50% 30% at 50% 50%); /* at 50% 50% by default */
        }
        .test2{ background-color: green; clip-path: ellipse(50% 30% at 0%); }
        .test3{ background-color: yellow; clip-path: ellipse(50% 30% at 0% 0%);}
        .test4{ background-color:aqua; clip-path:ellipse(100% 30%);}
    </style>`,
    code:`      <div style="display:flex;flex-wrap:wrap;">
          <div class="css-clip-path-ex2-parent">
              <div class="css-clip-path-ex2-child_test css-clip-path-ex2-testing1"> </div>
          </div>
          <div class="css-clip-path-ex2-parent">
              <div class="css-clip-path-ex2-child_test css-clip-path-ex2-testing2"> </div>
          </div> 
          <div class="css-clip-path-ex2-parent">
              <div class="css-clip-path-ex2-child_test css-clip-path-ex2-testing3"> </div>
          </div>   
      </div>`
    }
    const codeExemple3 = { 
    head:`  
    <style> 
        #head{
           background-image: linear-gradient(to left, red, darkorange, orange);
           height: 200px;
           clip-path: polygon(0 1%, 100% 0, 100% 70%, 0 100%);
        }
    </style>`,
    code:`      <header id="head"></header>`
        }
    const codeExemple4 = { 
    head:`  
    <style> 
        div{
            width: 200px;
            height: 200px;
            background-image: linear-gradient(to left, darkorange, orange, red);
            text-align: center;
            line-height: 200px;
            color: white;
            font-size: x-large;
            clip-path: polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%);
        }
    </style>`,
    code:`      <div>Reda Eskouni</div>`
    }
    return(
    <section className="section-conetent">
        <h1 className="heading-style heading-style-css-color"> CSS Clip-Path </h1>
        <article>
            <h2 className="title-h2">1- clip-path </h2>
            <div className="style_divv">
                تسمح الخاصية <b>clip-path</b>  بقص عنصر إلى شكل أساسي أو إلى مصدر SVG.<br/>
                تستقبل الخاصية <b>clip-path</b> عدة قيم ولاكن هناك عدة مواقع تساعدك على تقطيع العناصر  بطريقة التي تريد  . <br/>
                هاذه الفقرة سوف تتعلم عن طريقة إستعمال الموقع التالي قم بنقر <a href="https://bennettfeely.com/clippy/" target="_blanck">هنا</a> لذهاب إلى موقع المساعد .
            </div>
            <div className="mital"> متال  : </div>
            <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="CSS Clip-Path" addClass="mt-3 mb-3" copie={true}/>
            <Result title='CSS Clip-Path' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <div style={{display:"flex",flexWrap:"wrap"}}>
                    <div className="css-clip-path-ex1-parent">
                        <div className="css-clip-path-ex1-child_test css-clip-path-ex1-test1"></div>
                    </div>   
                    <div className="css-clip-path-ex1-parent">
                        <div className="css-clip-path-ex1-child_test css-clip-path-ex1-test2"></div>
                    </div>
                    <div className="css-clip-path-ex1-parent">
                        <div className="css-clip-path-ex1-child_test css-clip-path-ex1-test3"></div>
                    </div>
                    <div className="css-clip-path-ex1-parent">
                        <div className="css-clip-path-ex1-child_test css-clip-path-ex1-test4"></div>
                    </div>
                </div>  
            </Result>
            <div className="mital"> متال 2 : </div>
            <CodeHighlighter file_name="index.html"code={codeExemple2.code} head={codeExemple2.head} language="html" is_html={true} title="CSS Clip-Path" addClass="mt-3 mb-3" copie={true}/>
            <Result title='CSS Clip-Path' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <div style={{display:"flex",flexWrap:"wrap"}}>
                    <div className="css-clip-path-ex2-parent">
                        <div className="css-clip-path-ex2-child_test css-clip-path-ex2-testing1"> </div>
                    </div>
                    <div className="css-clip-path-ex2-parent">
                        <div className="css-clip-path-ex2-child_test css-clip-path-ex2-testing2"> </div>
                    </div> 
                    <div className="css-clip-path-ex2-parent">
                        <div className="css-clip-path-ex2-child_test css-clip-path-ex2-testing3"> </div>
                    </div>   
                </div>  
            </Result>
        </article>
        <article>
            <h2 className="title-h2">2-  متال  تفسيري للموقع أعلاه : </h2>
            <p className="sum_exemple_style">
                <ul><li>عند الدخول إلى الموقع سوف تجد الصفحة أسفله بعد تحديد القص المناسب لك قم بنسخ الأكواد أسفل الصفحة ووضعها داخلل أكواد <b>CSS</b> للعنصر الخاص بك .</li></ul>
                <img src={images.css36_clip_path} className="img"/>
            </p>
            <div className="mital"> متال 1 : </div>
            <CodeHighlighter file_name="index.html"code={codeExemple3.code} head={codeExemple3.head} language="html" is_html={true} title="CSS Clip-Path" addClass="mt-3 mb-3" copie={true}/>
            <Result title='CSS Clip-Path' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <div id="css-clip-path-ex3"></div>  
            </Result>
            <div className="mital"> متال 2 : </div>
            <CodeHighlighter file_name="index.html"code={codeExemple4.code} head={codeExemple4.head} language="html" is_html={true} title="CSS Clip-Path" addClass="mt-3 mb-3" copie={true}/>
            <Result title='CSS Clip-Path' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <div className="css-clip-path-ex4">Reda Eskouni</div>  
            </Result>
        </article>
    </section>
    )
}