import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function Quotes(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Quotes </h1>
    <article>
        <div class="style_divv mt-5">
            تحدد الخاصية <b>quotes</b> نوع علامات الاقتباس الخاصة بالاقتباس .
        </div><div class="sum_exemple_style">
        <div class="mital">متال : </div>
        <img src={images.css46_quotes} class="img"/>
        <img src={images.css46_quotes_2} class="img"/>
        </div>
    </article>
</section>
    )
}