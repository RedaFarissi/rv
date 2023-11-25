import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function Block(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Block </h1>
    <article>  
        <div className="style_divv mt-5">
            تستخدم القيمة <b>block</b> مع الخاصية <b>display</b><br/> 
            عند إستخدام القيمة <b>block</b> مع الخاصية <b>display</b> يأخد العنصر  <kbd>width:100%</kbd> . <br/>
            يكون العرض <small><bdi>(width)</bdi></small> و الإرتفاع <small><bdi>(height)</bdi></small>  قابل لتعديل بستخدام الخاصية <b>width</b> و <b>height</b>.<br/>
            عند إستخدام الخاصية <kbd>display:block</kbd> يتم إضافة <kbd>&lt;br&gt;</kbd> تلقائيا .  للفصل بين العناصر <br/>
            يمكن إستخدام جميع العناصر مع الخاصية <kbd>display:block</kbd> متل <small>margin , padding , width , height .....</small>
        </div>
        <div className="sum_exemple_style">
            <div className="mital">متال : </div>
            <img src={images.css57_block} className="img"/>
            <div className="style-result">
                <div style={{display:"block",backgroundColor:"yellowgreen"}} id="es_div"> DIV -{">"} BLOCK </div>
                <span style={{display:"block",backgroundColor:"yellowgreen"}} id="es_span"> SPAN -{">"} BLOCK </span>
                <p style={{display:"block",backgroundColor:"yellowgreen"}} id="es_p"> P -{">"} BLOCK </p>
            </div>
        </div>
    </article>
</section>
    )
}