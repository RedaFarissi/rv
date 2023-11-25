import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function InlineBlock(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Inline-Block </h1>
    <article>
        <div class="style_divv mt-5">
            تستخدم القيمة <b>inline-block</b> مع الخاصية <b>display</b><br/> 
            عند إستخدام القيمة <b>inline-block</b> مع الخاصية <b>display</b> يأخد العنصر  <kbd>width:max-content</kbd> . <br/>
            عند إستخدام الخاصية <kbd>display:inline-block</kbd>  يكون العرض <small><bdi>(width)</bdi></small> و الإرتفاع <small><bdi>(height)</bdi></small>  قابل لتعديل بستخدام الخاصية <b>width</b> و <b>height</b>.<br/>
            عند إستخدام الخاصية <kbd>display:inline-block</kbd> يتم عرض العناصر في سطر واحد <br/>
            يمكن إستخدام جميع العناصر مع الخاصية <kbd>display:inline-block</kbd> متل <small>margin , padding , width , height .....</small>
        </div>
        <div class="sum_exemple_style">
            <div class="mital">متال : </div>
            <img src={images.css59_inline_block} class="img"/>
            <div class="style-result">
                <div class="inline-B"> DIV -{">"} INLINE-BLOCK </div>
                <span class="inline-B"> SPAN -{">"} INLINE-BLOCK </span>
                <p class="inline-B"> P -{">"} INLINE-BLOCK </p>
                <div style={{backgroundColor:"black" , color:"white"}}>
                    DIV -{">"} BLOCK
                </div>
            </div>
        </div>
        <div class="sum_exemple_style">
            <div class="mital">متال 2 : </div>
            <img src={images.css59_inline_block2} class="img"/>
            <div class="style-result">
                <div class="inline-BL"> DIV -{">"} INLINE-BLOCK </div>
                <span class="inline-BL"> SPAN -{">"} INLINE-BLOCK </span>
                <p class="inline-BL"> P -{">"} INLINE-BLOCK </p>
                <div style={{backgroundColor:"black" , color:"white"}}>
                    DIV -{">"} BLOCK
                </div>
            </div>
        </div>
    </article>
</section>
    )
}