import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function TextIndent(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Text-Indent </h1>
    <article>
        <div class="style_divv mt-5">
            تحدد الخاصية <b>text-indent</b> المسافة البادئة للسطر الأول في كتلة نصية.
        </div>
        <div class="sum_exemple_style">
            <div class="mital">متال : </div>
            <img src={images.css61_text_indent} class="img"/>
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
