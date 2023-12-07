import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./InlineBlock.css"

export default function InlineBlock(props){
    const codeExemple1= { 
    head:`  
    <style> 
        .inline-B{
            display:inline-block; 
            background-color:yellow; 
            border:2px solid black; 
            padding:24px; 
            font-size:20px; 
            margin:24px;
        }    
    </style>`,
    code:`      <div class="inline-B"> DIV -> INLINE-BLOCK </div>
      <span class="inline-B"> SPAN -> INLINE-BLOCK </span>
      <p class="inline-B"> P -> INLINE-BLOCK </p>
      <div style="background-color:black; color:white;">
          DIV -> BLOCK
      </div>`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Inline-Block </h1>
    <article>
        <p className="style_divv mt-5">
            تستخدم القيمة <b>inline-block</b> مع الخاصية <b>display</b><br/> 
            عند إستخدام القيمة <b>inline-block</b> مع الخاصية <b>display</b> يأخد العنصر  <kbd>width:max-content</kbd> . <br/>
            عند إستخدام الخاصية <kbd>display:inline-block</kbd>  يكون العرض <small><bdi>(width)</bdi></small> و الإرتفاع <small><bdi>(height)</bdi></small>  قابل لتعديل بستخدام الخاصية <b>width</b> و <b>height</b>.<br/>
            عند إستخدام الخاصية <kbd>display:inline-block</kbd> يتم عرض العناصر في سطر واحد <br/>
            يمكن إستخدام جميع العناصر مع الخاصية <kbd>display:inline-block</kbd> متل <small>margin , padding , width , height .....</small>
        </p>   
        <div className="mital">متال : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="CSS Inline-Block" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Inline-Block' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div className="inline-B"> DIV -{">"} INLINE-BLOCK </div>
            <span className="inline-B"> SPAN -{">"} INLINE-BLOCK </span>
            <p className="inline-B"> P -{">"} INLINE-BLOCK </p>
            <div style={{backgroundColor:"black" , color:"white"}}>
                DIV -{">"} BLOCK
            </div>
        </Result>
    </article>
</section>
    )
}