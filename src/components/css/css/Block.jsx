import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./Block.css"

export default function Block(props){
    const codeExemple1= { 
    head:`
    <style>
        span, a , i {
            background-color: red;
            margin: 9px;
        }
    </style>`,
    code:`     <i> i - > Inline </i>
    <span> span -> Inline </span>
    <a> a -> Inline </a>
    <hr/>
    <i style="display:block;"> i -> Block </i>
    <span style="display:block;"> SPAN -> Block </span>
    <a style="display:block;"> a -> Block </a>`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Block </h1>
    <article>  
        <p className="style_divv mt-5">
            تستخدم القيمة <b>block</b> مع الخاصية <b>display</b><br/> 
            عند إستخدام القيمة <b>block</b> مع الخاصية <b>display</b> يأخد العنصر  <kbd>width:100%</kbd> . <br/>
            يكون العرض <small><bdi>(width)</bdi></small> و الإرتفاع <small><bdi>(height)</bdi></small>  قابل لتعديل بستخدام الخاصية <b>width</b> و <b>height</b>.<br/>
            عند إستخدام الخاصية <kbd>display:block</kbd> يتم إضافة <kbd>&lt;br&gt;</kbd> تلقائيا .  للفصل بين العناصر <br/>
            يمكن إستخدام جميع العناصر مع الخاصية <kbd>display:block</kbd> متل <small>margin , padding , width , height .....</small>
        </p>
        <div className="mital">متال : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="CSS Block" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Block' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <i className="css-block-ex1-i"> i - {">"} Inline </i>
            <span className="css-block-ex1-span"> span -{">"} Inline </span>
            <span className="css-block-ex1-a"> a -{">"} Inline </span>
            <hr/>
            <i className="css-block-ex1-i d-block"> i -{">"} Block </i>
            <span className="css-block-ex1-i d-block"> SPAN -{">"} Block </span>
            <span className="css-block-ex1-i d-block"> a -{">"} Block </span>
        </Result>
    </article>
</section>
    )
}