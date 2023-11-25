import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function LineHeight(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Width </h1>
    <article>
        <h1 class="heading-style-css"><u><i> CSS line-height </i></u></h1>
        <div class="style_divv mt-5">
            تحدد خاصية <b>line-height</b> ارتفاع الخط.<br/>
            <div class="alert alert-danger mt-3">
                <b>ملاحظة</b> : القيم السلبية غير مسموح بها.
            </div>
        </div>
        <div class="sum_exemple_style">
            <div class="mital">متال : </div>
            <img src={images.css62_line_height} class="img"/>
            <div class="style-result">
                <p id="a">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
                </p>
                <hr/>
                <p id="b">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
                </p>
                <hr/>
                <p id="c">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
                </p>
            </div>
        </div>
    </article>
</section>
)
}