import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function WhiteSpace(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS  White-Space </h1>
    <article>
        <div className="style_divv mt-5">
            تحدد خاصية <b>white-space</b> كيفية معالجة المسافة البيضاء داخل عنصر.<br/>
            تقبل الخاصية <b>white-space</b> القيم التالية :<br/>
            <ul dir='ltr' className="p-0">
                <li><b>nowrap</b>  </li>
                <li><b>normal</b> </li> 
                <li><b>pre</b>  </li>
            </ul> 
        </div>
        <div className="mital">متال :  </div>
        <img src={images.css54_white_space} className="img"/>
        <div className="style-result" style={{overflow:"auto"}}>
            <div className="h1">The white-space Property</div>
            <h2>white-space: nowrap:</h2>
            <p className="a">
              This is some text. This is some text. This is some text.
              This is some text. This is some text. This is some text.
              This is some text. This is some text. This is some text.
              This is some text. This is some text. This is some text.
            </p>
            <h2>white-space: normal:</h2>
            <p className="b">
              This is some text. This is some text. This is some text.
              This is some text. This is some text. This is some text.
              This is some text. This is some text. This is some text.
              This is some text. This is some text. This is some text.
            </p>
            <h2>white-space: pre:</h2>
            <p className="c">This is some text. This is some text. This is some text.
            This is some text. This is some text. This is some text.
            This is some text. This is some text. This is some text.
            This is some text. This is some text. This is some text.
            </p>
        </div>
    </article>
</section>
)
}