import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function AccentColor(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Accent-Color </h1>
    <article>
        <div className="style_divv mt-5">
            تعيّن خاصية <b>accent-color</b>  تمييز لون عناصر واجهة المستخدم التي تم إنشاؤها بواسطة بعض العناصر متل :
            <ul dir="ltr">
                <li><kbd><bdi>&lt;input type="checkbox"&gt;</bdi></kbd></li>
                <li><kbd><bdi>&lt;input type="radio"&gt;</bdi></kbd></li>
                <li><kbd><bdi>&lt;input type="range"&gt;</bdi></kbd></li>
                <li><kbd><bdi>&lt;progress&gt;</bdi></kbd></li>
            </ul>
        </div>
        <div className="sum_exemple_style">
            <div className="mital"> متال : </div>
            <ul><li> لا يهم ترتيب العناصر </li></ul>
            <img src={images.css67_accent_color} className="img"/>
            <div className="style-result">
                checkbox <input type="checkbox" className="accent"/><br/><hr/>
                radio <input type="radio" className="accent"/>  <br/><hr/>
                range <input type="range" className="accent"/>  <br/><hr/>
                progress <progress/> 
            </div>
        </div>
    </article>
</section>
)
}