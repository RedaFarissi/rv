

import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./Inline.css"

export default function Inline(props){
    const codeExemple1= { 
        head:`  
       <style> 
        .inline{ 
            display: inline; 
            background-color: yellow; 
            border:2px solid black; 
        }

       </style>`,
        code:`      <header class="inline"> 
      header -{">"} Inline
          <p class="inline"> p -{">"} Inline </p>
          <h2 class="inline"> h2 -{">"} Inline </h2>
      </header>
      <div class="inline"> div -{">"} Inline </div>
      <p class="inline"> p -{">"} Inline </p>`
        }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Inline </h1>
    <article>
        <p className="style_divv mt-5">
            تستخدم القيمة <b>inline</b> مع الخاصية <b>display</b><br/> 
            عند إستخدام القيمة <b>inline</b> مع الخاصية <b>display</b> يأخد العنصر  <kbd>width:max-content</kbd> . <br/>
            يكون العرض <small><bdi>(width)</bdi></small>  و الإرتفاع <small><bdi>(height)</bdi></small>  غير قابل لتعديل بستخدام الخاصية <b>width</b> و <b>height</b><br/>
            عند إستخدام الخاصية <kbd>display:inline</kbd>  لا يتم إضافة <kbd>&lt;br&gt;</kbd> تلقائيا .  تعرض العناصر في نفس السطر <br/>
            لا يمكن إستخدام جميع العناصر مع الخاصية <kbd>display:inline</kbd> متل <small>width , height , padding-top , padding-bottom , margin-top , margin-bottom</small> في حين يقوم بدعم <small>padding-right , padding-left, margin-right , margin-left</small>
        </p>
        <div className="mital">متال : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" title="CSS Inline" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Inline' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <header className="css-inline-ex1"> 
                header -{">"} Inline
                <p className="css-inline-ex1"> p -{">"} Inline </p>
                <h2 className="css-inline-ex1"> h2 -{">"} Inline </h2>
            </header>
            <div className="css-inline-ex1"> div -{">"} Inline </div>
            <p className="css-inline-ex1"> p -{">"} Inline </p>
        </Result>
    </article>
</section>
)
}